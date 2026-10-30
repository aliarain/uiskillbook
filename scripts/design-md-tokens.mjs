#!/usr/bin/env node
// Reads every DESIGN.md (ours in content/design-md, community ones in
// content/design-md-imports/files) and writes the colors and font families it
// declares to content/design-md-tokens.json. The pages show them as swatches
// and font links, and the font and color hub pages are built from them.
// scripts/import-design-md.mjs runs this after each import.
//
//   node scripts/design-md-tokens.mjs
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const MAX_COLORS = 10;
const MAX_FONTS = 4;

/** Generic families and system stacks: they say nothing about the brand. */
const GENERIC = new Set(
  [
    "sans-serif", "serif", "monospace", "cursive", "fantasy", "system-ui", "ui-sans-serif", "ui-serif", "ui-monospace",
    "ui-rounded", "-apple-system", "blinkmacsystemfont", "apple-system", "inherit", "initial", "unset", "emoji",
    "apple color emoji", "segoe ui emoji", "segoe ui symbol", "noto color emoji", "sans", "mono", "default", "none",
    "system", "plain", "system font", "system sans", "system stack", "unknown", "n/a", "not specified", "not observed",
  ].map((s) => s.toLowerCase())
);

/** Common fallbacks: a file that mentions one in prose is usually describing its fallback stack. */
const FALLBACKS = new Set(["segoe ui", "helvetica", "helvetica neue", "arial", "roboto", "sf mono", "sf pro text", "sf pro display", "menlo", "times new roman", "georgia", "courier new", "meiryo", "メイリオ", "yu gothic", "游ゴシック", "游ゴシック体", "hiragino sans", "hiragino kaku gothic pron", "hiragino kaku gothic pro", "ヒラギノ角ゴ pro w3", "ヒラギノ角ゴ pron w3", "pingfang tc", "pingfang sc", "microsoft jhenghei", "apple sd gothic neo", "noto sans", "verdana", "tahoma"]);

const ROLE_FONT_LINE = /^\s*(?:[-*]\s*)?\**(?:[A-Za-z]+ )?(?:font family|font-family|fontfamily|font|typeface)(?: [A-Za-z]+)?\**\s*:\s*(.+)$/i;

/** The first real family in a CSS-style value, or null. */
function firstFamily(value) {
  let v = value
    .replace(/`/g, "")
    .replace(/\*\*/g, "")
    .replace(/[（(][^)）]*[)）]/g, "")
    .replace(/;.*$/, "")
    .trim();
  // "14px / 500 / Pretendard Variable, line height 22px": the family is the part without a size or weight.
  if (v.includes("/")) {
    const parts = v.split("/").map((p) => p.trim());
    v = parts.find((p) => p && !/^\d/.test(p) && !/^(weight|line|tracking)\b/i.test(p)) ?? "";
  }
  // CSS shorthand "600 14px/1 Inter, sans-serif" was split above; drop a leading size or weight that's left.
  v = v.replace(/^(\d+(\.\d+)?(px|rem|em|%)?\s+)+/, "");
  for (const raw of v.split(/,|、/)) {
    const name = raw.replace(/["'“”‘’]/g, "").replace(/\s+/g, " ").replace(/ Variable$/i, "").trim();
    if (!name || name.length > 40 || GENERIC.has(name.toLowerCase())) continue;
    if (/^(var\b|--|#|\d|public$|letter-spacing|ofl\b|licen|lh\b|platform\b|unresolved)|[:=]|\bstack\b|material (symbols|icons)|px\b|\bweight\b|\bsize\b|https?:|\.(woff2?|ttf|otf)\b/i.test(name)) return null;
    if (!/[A-Za-z぀-ヿ㐀-鿿가-힯]/.test(name)) return null;
    return name;
  }
  return null;
}

export function extractFonts(text) {
  const counts = new Map();
  const add = (name, weight = 1) => {
    if (!name) return;
    const key = name.toLowerCase();
    const prev = counts.get(key);
    counts.set(key, { name: prev?.name ?? name, n: (prev?.n ?? 0) + weight });
  };
  const lines = text.split("\n");
  let inFonts = false;
  for (const line of lines) {
    // A `fonts:` block in YAML frontmatter lists role: family pairs.
    if (/^fonts:\s*$/.test(line)) {
      inFonts = true;
      continue;
    }
    if (inFonts) {
      if (/^\S/.test(line)) inFonts = false;
      else {
        const item = line.match(/^\s+-\s+(.+)$/);
        if (item) {
          add(firstFamily(item[1]), 3);
          continue;
        }
        const m = line.match(/^\s+([\w-]+):\s*(.+)$/);
        if (m && !/^(licen[cs]e|distribution|source|url|status|notes?|weights?|evidence)$/i.test(m[1])) add(firstFamily(m[2]), 3);
        continue;
      }
    }
    let m = line.match(/font-?family["']?\s*[:=]\s*(.+)$/i);
    if (m) {
      add(firstFamily(m[1]), 2);
      continue;
    }
    m = line.match(/--font(?!-(size|weight|feature|smoothing|style))[\w-]*\s*:\s*(.+)$/i);
    if (m) {
      add(firstFamily(m[2]), 2);
      continue;
    }
    m = line.match(/^\s*font:\s*(.+)$/i);
    if (m) {
      add(firstFamily(m[1]));
      continue;
    }
    m = line.match(ROLE_FONT_LINE);
    if (m && !/\b(size|weight|feature|smoothing|style|license|licence|source|assets?)\b/i.test(line.split(":")[0])) add(firstFamily(m[1]));
  }
  return [...counts.values()].sort((a, b) => b.n - a.n).slice(0, MAX_FONTS).map((f) => f.name);
}

/** Label for a hex from the same line: a YAML key, a bold name, a table cell or a list label. */
function colorName(line, hex) {
  const at = line.toLowerCase().indexOf(hex);
  const before = line.slice(0, at);
  const candidates = [
    before.match(/^\s*["']?([\w-]+)["']?\s*:\s*["'`]?$/)?.[1],
    before.match(/\*\*([^*]{2,40})\*\*[^*]*$/)?.[1],
    before.match(/^\s*\|\s*([^|`#]{2,40}?)\s*\|[^|]*$/)?.[1],
    before.match(/^\s*[-*]\s*([^:`#]{2,40}?)\s*[:：]\s*`?$/)?.[1],
  ];
  const name = candidates.find(Boolean)?.replace(/[`*]/g, "").trim();
  return name && !/^(color|colour|hex|value|token)$/i.test(name) ? name : undefined;
}

export function extractColors(text) {
  const seen = new Map();
  for (const line of text.split("\n")) {
    for (const match of line.matchAll(/#[0-9a-f]{6}\b/gi)) {
      const hex = match[0].toLowerCase();
      const prev = seen.get(hex);
      if (prev) {
        prev.n++;
        prev.name ??= colorName(line, hex);
      } else seen.set(hex, { hex, name: colorName(line, hex), n: 1, order: seen.size });
    }
  }
  // Frequent colors first; ties keep the order the file introduced them.
  return [...seen.values()]
    .sort((a, b) => b.n - a.n || a.order - b.order)
    .slice(0, MAX_COLORS)
    .map(({ hex, name }) => (name ? { hex, name } : { hex }));
}

function files() {
  const out = [];
  const ours = "content/design-md";
  for (const slug of readdirSync(ours)) {
    const file = `${ours}/${slug}/DESIGN.md`;
    if (existsSync(file)) out.push([slug, file]);
  }
  const imports = "content/design-md-imports/files";
  if (existsSync(imports)) for (const f of readdirSync(imports)) if (f.endsWith(".md")) out.push([f.slice(0, -3), `${imports}/${f}`]);
  return out;
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function writeTokens() {
  const tokens = {};
  const texts = {};
  for (const [slug, file] of files().sort(([a], [b]) => a.localeCompare(b))) {
    const text = (texts[slug] = readFileSync(file, "utf8"));
    tokens[slug] = { colors: extractColors(text), fonts: extractFonts(text) };
  }
  // Files that only name their fonts in prose: look for families other files declare.
  const seen = new Map();
  for (const t of Object.values(tokens)) for (const f of t.fonts) seen.set(f, (seen.get(f) ?? 0) + 1);
  const vocabulary = [...seen].filter(([f, n]) => n >= 2 && f.length > 3 && !FALLBACKS.has(f.toLowerCase())).map(([f]) => f).sort((a, b) => b.length - a.length);
  for (const [slug, t] of Object.entries(tokens)) {
    if (t.fonts.length) continue;
    const found = [];
    for (const f of vocabulary) {
      if (found.length >= MAX_FONTS) break;
      if (found.some((g) => g.includes(f))) continue;
      if (new RegExp(`(^|[^\\w-])${escape(f)}($|[^\\w-])`).test(texts[slug])) found.push(f);
    }
    t.fonts = found;
  }
  writeFileSync("content/design-md-tokens.json", `${JSON.stringify(tokens)}\n`);
  const all = Object.values(tokens);
  console.log(
    `${all.length} files: ${all.filter((t) => t.colors.length).length} with colors, ${all.filter((t) => t.fonts.length).length} with fonts`
  );
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) writeTokens();
