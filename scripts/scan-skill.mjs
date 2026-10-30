#!/usr/bin/env node
// Static safety scan for a submitted skill directory. It never executes the
// skill: it reads every file as text and flags patterns that need a human
// look before a skill is listed. Exit code 1 when any HIGH finding exists.
//
//   node scripts/scan-skill.mjs <skill-dir> [--json]
//
// It is a first pass, not a verdict. Every HIGH and MEDIUM finding is
// reviewed by hand, and the review is recorded in the submission issue.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const TEXT = new Set([".md", ".mdx", ".txt", ".json", ".yaml", ".yml", ".toml", ".py", ".js", ".mjs", ".cjs", ".ts", ".tsx", ".sh", ".bash", ".zsh", ".ps1", ".rb", ".go", ".html", ".css", ".svg", ".csv", ""]);
const SCRIPT = new Set([".py", ".js", ".mjs", ".cjs", ".ts", ".tsx", ".sh", ".bash", ".zsh", ".ps1", ".rb", ".go"]);

/** [severity, id, description, regex, appliesTo] — appliesTo: "all" | "prose" | "script" */
export const RULES = [
  ["HIGH", "hidden-unicode", "Invisible or direction-changing Unicode (zero-width, bidi, tag characters)", /[​-‏‪-‮⁠-⁤⁦-⁩﻿]|\uDB40[\uDC00-\uDC7F]/u, "all"],
  ["HIGH", "override-instructions", "Tries to override the agent's or user's instructions", /\b(ignore|disregard|forget)\b[^.\n]{0,40}\b(previous|prior|above|all|system|user)\b[^.\n]{0,20}\b(instructions?|prompts?|rules)\b/i, "prose"],
  ["HIGH", "conceal-from-user", "Asks the agent to hide actions or output from the user", /\b(do not|don't|never)\b[^.\n]{0,30}\b(tell|inform|show|mention|reveal)\b[^.\n]{0,20}\b(the )?user\b/i, "prose"],
  ["HIGH", "credential-paths", "Reads credentials or key material", /(\.ssh\/|id_rsa|id_ed25519|\.aws\/credentials|\.npmrc|\.netrc|\.git-credentials|keychain|\.env\b|GITHUB_TOKEN|AWS_SECRET|OPENAI_API_KEY|ANTHROPIC_API_KEY)/i, "all"],
  ["HIGH", "pipe-to-shell", "Downloads and runs code", /(curl|wget|iwr|Invoke-WebRequest)[^\n|]{0,200}\|\s*(sh|bash|zsh|python3?|node|iex|pwsh)/i, "all"],
  ["HIGH", "destructive", "Destructive or privilege-escalating command", /(rm\s+-rf\s+[~/]|mkfs|dd\s+if=|chmod\s+777|sudo\s+|:\(\)\s*\{|Remove-Item\s+-Recurse\s+-Force\s+[A-Z]:\\)/i, "all"],
  ["HIGH", "exfiltration", "Sends data to an outside endpoint", /\b(send|post|upload|exfiltrate|forward)\b[^.\n]{0,60}\b(to|at)\b[^.\n]{0,20}https?:\/\//i, "prose"],
  ["MEDIUM", "network-in-script", "Script opens network connections", /\b(import\s+(socket|requests|httpx|urllib|http\.client|aiohttp|ftplib|smtplib)|from\s+(urllib|http|requests)\b|require\(['"](https?|net|dgram)['"]\)|\bfetch\(|XMLHttpRequest|WebSocket\()/, "script"],
  ["MEDIUM", "process-spawn", "Script spawns processes or shells", /\b(subprocess|os\.system|os\.popen|pty\.spawn|child_process|execSync|spawnSync|Runtime\.exec|Start-Process)\b/, "script"],
  ["MEDIUM", "dynamic-eval", "Evaluates dynamic code", /\b(eval|exec|compile)\s*\(|new Function\(|pickle\.loads|marshal\.loads|__import__\(/, "script"],
  ["MEDIUM", "env-access", "Reads environment variables", /(os\.environ|os\.getenv|process\.env|\$ENV:|getenv\()/, "script"],
  ["MEDIUM", "encoded-blob", "Long base64 or hex blob that could hide a payload", /[A-Za-z0-9+/]{240,}={0,2}|(?:\\x[0-9a-f]{2}){40,}/i, "all"],
  ["MEDIUM", "role-hijack", "Reassigns the agent's identity or authority", /\b(you are now|act as (an? )?(admin|root|developer mode)|system prompt|jailbreak|DAN mode)\b/i, "prose"],
  ["INFO", "outbound-url", "Outbound URL (listed for review)", /https?:\/\/[^\s)"'<>\]]+/g, "all"],
];

/** Findings for one text file. `kind` is "script" or "prose". Used by the CLI and by importers. */
export function scanText(text, kind = "prose", file = "") {
  const out = [];
  text.split("\n").forEach((line, i) => {
    if (line.length > 2000) out.push({ severity: "MEDIUM", id: "minified-line", file, line: i + 1, text: `${line.length}-character line` });
    for (const [severity, id, , re, scope] of RULES) {
      if (scope !== "all" && scope !== kind) continue;
      const matches = id === "outbound-url" ? line.match(re) ?? [] : re.test(line) ? [line.trim().slice(0, 160)] : [];
      for (const t of matches) out.push({ severity, id, file, line: i + 1, text: t });
    }
  });
  return out;
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function main() {
const root = process.argv[2];
const asJson = process.argv.includes("--json");
if (!root) {
  console.error("usage: node scripts/scan-skill.mjs <skill-dir> [--json]");
  process.exit(2);
}
const findings = [];
const files = walk(root);
for (const path of files) {
  const rel = relative(root, path);
  const ext = extname(path).toLowerCase();
  const size = statSync(path).size;
  if (!TEXT.has(ext)) {
    findings.push({ severity: "MEDIUM", id: "binary-file", file: rel, line: 0, text: `${ext || "no extension"} file, ${size} bytes: not reviewable as text` });
    continue;
  }
  const kind = SCRIPT.has(ext) ? "script" : "prose";
  findings.push(...scanText(readFileSync(path, "utf8"), kind, rel));
}

const order = { HIGH: 0, MEDIUM: 1, INFO: 2 };
findings.sort((a, b) => order[a.severity] - order[b.severity] || a.file.localeCompare(b.file) || a.line - b.line);
const counts = Object.fromEntries(["HIGH", "MEDIUM", "INFO"].map((s) => [s, findings.filter((f) => f.severity === s).length]));

if (asJson) {
  console.log(JSON.stringify({ root, files: files.length, counts, findings }, null, 2));
} else {
  console.log(`Scanned ${files.length} files in ${root}`);
  console.log(`HIGH ${counts.HIGH}  MEDIUM ${counts.MEDIUM}  INFO ${counts.INFO}`);
  const descriptions = Object.fromEntries(RULES.map(([, id, d]) => [id, d]));
  for (const f of findings.filter((x) => x.severity !== "INFO")) {
    console.log(`\n[${f.severity}] ${f.id}: ${descriptions[f.id] ?? ""}\n  ${f.file}:${f.line}  ${f.text}`);
  }
  const hosts = [...new Set(findings.filter((f) => f.id === "outbound-url").map((f) => new URL(f.text).host))].sort();
  console.log(`\nOutbound hosts (${hosts.length}): ${hosts.join(", ")}`);
}
process.exit(counts.HIGH > 0 ? 1 : 0);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
