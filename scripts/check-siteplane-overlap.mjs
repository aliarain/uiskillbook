#!/usr/bin/env node
// Flags guidance sentences that share a run of 8 or more words with Siteplane
// UI's own docs pages or registry metadata, so our entries stay in our own
// words (Siteplane UI License). Exits 1 when any sentence overlaps.
//
//   node scripts/check-siteplane-overlap.mjs

import fs from "node:fs";
import path from "node:path";

const ORIGIN = "https://ui.siteplane.io";
const RUN = 8;
const GUIDANCE_DIR = path.join(import.meta.dirname, "..", "content", "siteplane-ui", "guidance");

const words = (text) => text.toLowerCase().match(/[a-z0-9']+/g) ?? [];
const runs = (text) => {
  const w = words(text);
  return Array.from({ length: Math.max(0, w.length - RUN + 1) }, (_, i) => w.slice(i, i + RUN).join(" "));
};

async function get(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  return res.text();
}

const llms = await get(`${ORIGIN}/llms.txt`);
const slugs = [...llms.matchAll(/\/docs-markdown\/components\/([a-z0-9-]+)\.md/g)].map((m) => m[1]);
const sources = await Promise.all([
  get(`${ORIGIN}/registry/registry.json`),
  ...slugs.map((slug) => get(`${ORIGIN}/docs-markdown/components/${slug}.md`)),
]);

const seen = new Set();
const [registry, ...pages] = sources;
for (const page of pages) for (const run of runs(page)) seen.add(run);
for (const item of JSON.parse(registry).items) {
  const meta = item.meta ?? {};
  const texts = [item.description ?? "", ...["useWhen", "avoidWhen", "knownLimitations", "providerNotes"].flatMap((k) => meta[k] ?? [])];
  for (const text of texts) for (const run of runs(text)) seen.add(run);
}

let total = 0;
const hits = [];
for (const file of fs.readdirSync(GUIDANCE_DIR).filter((f) => f.endsWith(".json")).sort()) {
  const guidance = JSON.parse(fs.readFileSync(path.join(GUIDANCE_DIR, file), "utf8"));
  for (const [slug, g] of Object.entries(guidance)) {
    for (const text of [g.summary, g.useFor, ...g.neighbours.map((n) => n.guidance), ...g.rules]) {
      total += 1;
      const run = runs(text).find((r) => seen.has(r));
      if (run) hits.push(`${file} ${slug}: "${run}" in: ${text}`);
    }
  }
}

console.log(hits.join("\n"));
console.log(`${hits.length} of ${total} sentences share ${RUN}+ words with Siteplane's docs.`);
process.exit(hits.length ? 1 : 0);
