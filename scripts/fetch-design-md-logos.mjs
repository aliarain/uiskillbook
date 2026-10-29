#!/usr/bin/env node
// Downloads full-color brand icons for every content/design-md/<slug> from
// Logoforge (https://logoforge.terravidhal.me), keeping only CC0 or
// public-domain files. Writes public/design-md/logos/<slug>.svg (and
// <slug>-dark.svg when a dark variant exists) plus content/design-md-logos.json
// with each file's origin and license. Run: node scripts/fetch-design-md-logos.mjs
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";

const API = "https://logoforge.terravidhal.me/api/logos";
const OUT = "public/design-md/logos";
const FREE = /^(CC0-1\.0|public-domain|PD)$/i;
const UNSAFE = /<script|\son\w+\s*=|<foreignObject|(?:href|src)\s*=\s*["'](?!#)/i;

mkdirSync(OUT, { recursive: true });
const slugs = readdirSync("content/design-md", { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

const record = {};
for (const slug of slugs) {
  const res = await fetch(`${API}/${slug}.json`);
  if (!res.ok) {
    console.warn(`skip ${slug}: no Logoforge entry (${res.status})`);
    continue;
  }
  const logo = await res.json();
  record[slug] = {};
  for (const [variant, file] of [["icon", `${slug}.svg`], ["icon-dark", `${slug}-dark.svg`]]) {
    const url = logo.svg?.[variant];
    const source = logo.sources?.[variant];
    if (!url) continue;
    if (!source || !FREE.test(source.license ?? "")) {
      console.warn(`skip ${slug} ${variant}: license ${source?.license ?? "unknown"}`);
      continue;
    }
    const svg = await (await fetch(url)).text();
    if (!svg.trimStart().startsWith("<svg") || UNSAFE.test(svg)) {
      console.warn(`skip ${slug} ${variant}: unexpected SVG content`);
      continue;
    }
    writeFileSync(`${OUT}/${file}`, svg);
    record[slug][variant] = { file: `/design-md/logos/${file}`, origin: source.origin, license: source.license, page: logo.page };
  }
}

writeFileSync("content/design-md-logos.json", `${JSON.stringify(record, null, 2)}\n`);
console.log(`logos: ${Object.values(record).filter((r) => r.icon).length}/${slugs.length}`);
