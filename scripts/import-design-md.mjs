#!/usr/bin/env node
// Imports community DESIGN.md files from MIT-licensed GitHub collections into
// content/design-md-imports/. Every file is pinned to the commit it came from,
// scanned with scripts/scan-skill.mjs (any HIGH finding is skipped), checked
// for minimum quality, and stored with its source and license. Brands that
// appear in several collections keep the highest-priority copy, and our own
// content/design-md entries always win.
//
//   GITHUB_TOKEN=$(gh auth token) node scripts/import-design-md.mjs
//   node scripts/import-design-md.mjs --reindex   # rebuild index.json from the stored files
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { scanText } from "./scan-skill.mjs";
import { writeTokens } from "./design-md-tokens.mjs";

const OUT = "content/design-md-imports";

/** Ordered by priority: the first collection to provide a slug keeps it. */
const SOURCES = [
  { repo: "VoltAgent/awesome-design-md", match: /^design-md\/([^/]+)\/DESIGN\.md$/i, category: () => "Brands", language: "en" },
  { repo: "kwakseongjae/oh-my-design", match: /^web\/references\/([^/]+)\/DESIGN\.md$/i, category: () => "Brands", language: "en" },
  { repo: "Khalidabdi1/design-ai", match: /^design-md\/([^/]+)\/DESIGN\.md$/i, category: () => "Brands", language: "en" },
  {
    repo: "Meliwat/awesome-ios-design-md",
    match: /^design-md\/([^/]+)\/([^/]+)\/DESIGN\.md$/i,
    slugGroup: 2,
    category: () => "iOS apps",
    language: "en",
  },
  { repo: "kzhrknt/awesome-design-md-jp", match: /^design-md\/([^/]+)\/DESIGN\.md$/i, category: () => "Japan", language: "ja" },
];

const headers = { Accept: "application/vnd.github+json", "User-Agent": "uiskillbook-import" };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function api(path) {
  const res = await fetch(`https://api.github.com/${path}`, { headers });
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return res.json();
}

async function raw(repo, sha, path) {
  const res = await fetch(`https://raw.githubusercontent.com/${repo}/${sha}/${encodeURI(path)}`);
  if (!res.ok) throw new Error(`${repo}/${path}: ${res.status}`);
  return res.text();
}

async function pool(items, size, fn) {
  const out = [];
  for (let i = 0; i < items.length; i += size) out.push(...(await Promise.all(items.slice(i, i + size).map(fn))));
  return out;
}

const slugify = (s) => s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const titleCase = (slug) => slug.split("-").map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w)).join(" ");
const strip = (s) => s.replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/[*_`>|]/g, "").replace(/#(?![0-9a-f]{6}\b|[0-9a-f]{3}\b)/gi, "").replace(/\s+/g, " ").trim();

/** Token references like `{colors.canvas}` read as noise in a summary; keep the hex that follows. */
const cleanProse = (s) =>
  strip(s.replace(/`?\{[\w.-]+\}`?\s*[—–:-]\s*/g, "").replace(/`?\{[\w.-]+\}`?/g, "").replace(/\(\s*\)/g, ""))
    .replace(/\s+([,.)])/g, "$1")
    .trim();
const looksLikeCode = (p) => /[{};]\s*$|^\s*[./@:]|^\s*\w[\w-]*\s*:\s*\S+;|<\/?[a-z]/im.test(p);

function meta(text, slug, language) {
  const front = text.match(/^---\n([\s\S]*?)\n---\n/)?.[1] ?? "";
  const body = text.replace(/^---\n[\s\S]*?\n---\n/, "").replace(/```[\s\S]*?```/g, "");
  const h1 = body.match(/^#\s+(.+)$/m)?.[1];
  let name = h1 ? strip(h1) : "";
  name = name
    .replace(/^design\.?md\s*[—–:-]*\s*/i, "")
    .replace(/^[-–—:\s]+/, "")
    .replace(/^design system (inspiration|inspired) (of|by)\s+/i, "")
    .replace(/\s*\((ios|android|web)\)\s*$/i, "")
    .replace(/\s*[—–-]\s*design reference.*$/i, "")
    .replace(/('s)?\s+(design system|design\.md|design md|style guide)\b.*$/i, "")
    .replace(/[\s:–—-]+$/, "")
    .trim();
  if (!name || name.length > 48) name = titleCase(slug);
  const paragraphs = body
    .split(/\n\s*\n/)
    // A heading glued to its first paragraph still leaves the paragraph.
    .map((p) => p.replace(/^(#{1,6} .*\n)+/, "").trim());
  const companyLine = paragraphs.find((p) => /のデザイン仕様書/.test(p) && !/このファイルは/.test(p));
  // Japanese files describe the company in the paragraph that names the spec;
  // without it, their other prose is measurement notes, so use a plain line.
  if (language === "ja") {
    const d = companyLine ? strip(companyLine) : `${name}のデザイン仕様書。`;
    return { name, description: d.length > 220 ? `${d.slice(0, 219)}…` : d, color: brandColor(body) };
  }
  // Prefer the file's own one-line summary: a frontmatter description, or the tagline quoted under the title.
  const declared = front.match(/^description:\s*["']?(.+?)["']?\s*$/m)?.[1];
  const tagline = body.match(/^#\s+.+\n+((?:>\s?.*\n?)+)/m)?.[1]?.replace(/^>\s?/gm, " ");
  const paragraph = paragraphs.find(
    (p) =>
      p &&
      !/^[#|>`-]/.test(p) &&
      !/^\d+\.\s/.test(p) &&
      !/このファイルは/.test(p) &&
      !looksLikeCode(p) &&
      cleanProse(p).length > 40
  );
  const candidates = [declared, tagline, paragraph].map((c) => (c ? cleanProse(c) : "")).filter((c) => c.length > 40 && !looksLikeCode(c));
  let description = candidates[0] ?? `${name}'s colors, typography and components, written as a DESIGN.md file for coding agents.`;
  if (description.length > 220) description = `${description.slice(0, 217).replace(/\s+\S*$/, "")}…`;
  return { name, description, color: brandColor(body) };
}

/** The first clearly coloured hex, preferring lines that name a primary, brand or accent color. */
function brandColor(body) {
  const saturated = (hex) => {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    const s = max === min ? 0 : (max - min) / (1 - Math.abs(2 * l - 1));
    return s > 0.3 && l > 0.15 && l < 0.85;
  };
  const lines = body.split("\n");
  const ranked = [...lines.filter((l) => /(primary|brand|accent|cta)/i.test(l)), ...lines];
  for (const line of ranked) {
    for (const hex of line.match(/#[0-9a-f]{6}\b/gi) ?? []) if (saturated(hex)) return hex.toLowerCase();
  }
  return (body.match(/#[0-9a-f]{6}\b/i)?.[0] ?? "#737373").toLowerCase();
}

function qualityOk(text) {
  return text.length >= 1200 && /#[0-9a-f]{6}\b/i.test(text) && /typograph|font|書体|フォント/i.test(text);
}

// --reindex: recompute names, descriptions and colors from the files already
// imported, without fetching anything.
if (process.argv.includes("--reindex")) {
  const index = JSON.parse(readFileSync(`${OUT}/index.json`, "utf8"));
  for (const entry of index.entries) Object.assign(entry, meta(readFileSync(`${OUT}/files/${entry.slug}.md`, "utf8"), entry.slug, entry.language));
  index.entries.sort((a, b) => a.name.localeCompare(b.name));
  writeFileSync(`${OUT}/index.json`, `${JSON.stringify(index, null, 2)}\n`);
  writeTokens();
  process.exit(0);
}

const ours = new Set(readdirSync("content/design-md", { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name));
const taken = new Set(ours);
const entries = [];
const skipped = { duplicate: 0, quality: 0, unsafe: [] };

if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(`${OUT}/files`, { recursive: true });
mkdirSync(`${OUT}/licenses`, { recursive: true });

for (const source of SOURCES) {
  const info = await api(`repos/${source.repo}`);
  const branch = await api(`repos/${source.repo}/branches/${info.default_branch}`);
  const sha = branch.commit.sha;
  const tree = await api(`repos/${source.repo}/git/trees/${sha}?recursive=1`);
  const files = tree.tree
    .filter((t) => t.type === "blob")
    .map((t) => ({ path: t.path, m: t.path.match(source.match) }))
    .filter((f) => f.m);

  const licensePath = tree.tree.find((t) => /^LICEN[CS]E(\.md|\.txt)?$/i.test(t.path))?.path;
  const licenseFile = `${source.repo.replace("/", "__")}.txt`;
  if (licensePath) writeFileSync(`${OUT}/licenses/${licenseFile}`, await raw(source.repo, sha, licensePath));

  const fetched = await pool(files, 16, async (f) => ({ ...f, text: await raw(source.repo, sha, f.path).catch(() => "") }));
  let added = 0;
  for (const f of fetched) {
    const slug = slugify(f.m[source.slugGroup ?? 1]);
    if (!slug || taken.has(slug)) {
      skipped.duplicate++;
      continue;
    }
    if (!qualityOk(f.text)) {
      skipped.quality++;
      continue;
    }
    const high = scanText(f.text, "prose", f.path).filter((x) => x.severity === "HIGH");
    if (high.length) {
      skipped.unsafe.push(`${source.repo}/${f.path}: ${[...new Set(high.map((h) => h.id))].join(", ")}`);
      continue;
    }
    taken.add(slug);
    writeFileSync(`${OUT}/files/${slug}.md`, f.text);
    entries.push({
      slug,
      ...meta(f.text, slug, source.language),
      category: source.category(f.m),
      language: source.language,
      source: {
        repo: source.repo,
        path: f.path,
        commit: sha,
        license: info.license?.spdx_id ?? "NOASSERTION",
        licenseFile,
        url: `https://github.com/${source.repo}/blob/${sha}/${f.path}`,
      },
    });
    added++;
  }
  console.log(`${source.repo}@${sha.slice(0, 7)} (${info.license?.spdx_id}): ${files.length} files, ${added} added`);
}

entries.sort((a, b) => a.name.localeCompare(b.name));
writeFileSync(
  `${OUT}/index.json`,
  `${JSON.stringify({ importedAt: new Date().toISOString().slice(0, 10), count: entries.length, entries }, null, 2)}\n`
);
console.log(`\n${entries.length} imported. Skipped: ${skipped.duplicate} duplicates, ${skipped.quality} below the quality bar, ${skipped.unsafe.length} with HIGH scan findings.`);
for (const u of skipped.unsafe) console.log(`  unsafe: ${u}`);
writeTokens();
