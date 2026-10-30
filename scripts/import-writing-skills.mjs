#!/usr/bin/env node
// Imports five MIT-licensed writing skills into the catalog as local skills,
// from a pinned commit of github.com/boraoztunc/skills (README: "License: MIT").
// The skill text is kept as published; the frontmatter is Skillbook's, and each
// SKILL.md ends with its copyright and licence notice.
//
//   node scripts/import-writing-skills.mjs
//
// Re-running with nothing changed upstream rewrites identical files.

import fs from "node:fs";
import path from "node:path";

const REPO = "boraoztunc/skills";
const COMMIT = "645553c";
const RAW = `https://raw.githubusercontent.com/${REPO}/${COMMIT}`;
const TREE = `https://github.com/${REPO}/tree/${COMMIT}`;
const SKILLS_DIR = path.join(import.meta.dirname, "..", "content", "skills");
const UPDATED_AT = "2026-10-30";

const MIT = (holder) => `MIT License

Copyright (c) ${holder}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

const SKILLS = [
  {
    slug: "stop-slop",
    folder: "stop-slop",
    title: "Stop Slop",
    description: "Strip the patterns that make prose read as machine-written: filler openers, false contrasts, stacked adverbs and tidy triplets.",
    author: { name: "Hardik Pandya", url: "https://github.com/hardikpandya" },
    origin: "https://github.com/hardikpandya/stop-slop",
    credit: "Stop Slop is by Hardik Pandya, from [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop).",
    holder: "2025 Hardik Pandya",
    tags: ["copy", "editing", "ai-writing"],
    tasks: ["landing-page", "other"],
  },
  {
    slug: "ogilvy-copywriting",
    folder: "ogilvy",
    title: "Ogilvy Copywriting",
    description: "Write and review persuasive copy with David Ogilvy's rules: positioning, headlines that promise, specifics, long copy that sells.",
    author: { name: "boraoztunc", url: "https://github.com/boraoztunc" },
    origin: `${TREE}/ogilvy`,
    credit: `A compilation of David Ogilvy's advertising principles, published under MIT in [${REPO}](https://github.com/${REPO}).`,
    holder: "the authors of boraoztunc/skills",
    tags: ["copy", "headlines", "marketing"],
    tasks: ["landing-page", "other"],
  },
  {
    slug: "copywriting",
    folder: "copywriting",
    title: "Copywriting",
    description: "Write marketing copy for home, landing, pricing and feature pages: headlines, value props, sections and calls to action.",
    author: { name: "Corey Haines", url: "https://github.com/coreyhaines31" },
    origin: "https://github.com/coreyhaines31/marketingskills",
    credit: `Based on Corey Haines' [marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT), as adapted in [${REPO}](https://github.com/${REPO}).`,
    holder: "2025 Corey Haines",
    tags: ["copy", "marketing", "landing-pages"],
    tasks: ["landing-page"],
  },
  {
    slug: "copy-editing",
    folder: "copy-editing",
    title: "Copy Editing",
    description: "Edit existing marketing copy in focused passes, from clarity and voice to proof and specificity, before it ships.",
    author: { name: "Corey Haines", url: "https://github.com/coreyhaines31" },
    origin: "https://github.com/coreyhaines31/marketingskills",
    credit: `Based on Corey Haines' [marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT), as adapted in [${REPO}](https://github.com/${REPO}).`,
    holder: "2025 Corey Haines",
    tags: ["copy", "editing", "review"],
    tasks: ["landing-page", "other"],
  },
  {
    slug: "seo-audit",
    folder: "seo-audit",
    title: "SEO Audit",
    description: "Audit a site's SEO: crawlability, indexing, on-page tags, content and technical issues, with fixes in priority order.",
    author: { name: "Corey Haines", url: "https://github.com/coreyhaines31" },
    origin: "https://github.com/coreyhaines31/marketingskills",
    credit: `Based on Corey Haines' [marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT), as adapted in [${REPO}](https://github.com/${REPO}).`,
    holder: "2025 Corey Haines",
    tags: ["seo", "audit", "performance"],
    tasks: ["landing-page", "other"],
  },
];

async function get(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  return res.text();
}

/** Files a skill's SKILL.md points to under references/, appended so the entry stands alone. */
async function references(folder, body) {
  const names = [...new Set([...body.matchAll(/references\/([a-z0-9-]+\.md)/g)].map((m) => m[1]))];
  const parts = [];
  for (const name of names) {
    const text = await get(`${RAW}/${folder}/references/${name}`).catch(() => null);
    if (text) parts.push(`## Reference: ${name}\n\n${text.replace(/^---\n[\s\S]*?\n---\n/, "").replace(/^(#{1,5}) /gm, "#$1 ").trim()}`);
  }
  return parts;
}

for (const s of SKILLS) {
  const upstream = await get(`${RAW}/${s.folder}/SKILL.md`);
  const body = upstream.replace(/^---\n[\s\S]*?\n---\n/, "").trim();
  const frontmatter = [
    "---",
    `name: ${s.slug}`,
    `title: ${JSON.stringify(s.title)}`,
    `description: ${JSON.stringify(s.description)}`,
    "author:",
    `  name: ${s.author.name}`,
    `  url: ${s.author.url}`,
    "source:",
    `  repository: ${s.origin}`,
    `  rawUrl: ${RAW}/${s.folder}/SKILL.md`,
    "categories:",
    "  - writing",
    "agents:",
    ...["claude-code", "codex", "cursor", "opencode", "universal"].map((a) => `  - ${a}`),
    "tasks:",
    ...s.tasks.map((t) => `  - ${t}`),
    "tags:",
    ...s.tags.map((t) => `  - ${t}`),
    "version: 1.0.0",
    `updated_at: "${UPDATED_AT}"`,
    "license: MIT",
    "curated: true",
    "---",
  ];
  const content = [
    ...frontmatter,
    "",
    `<!-- Imported by scripts/import-writing-skills.mjs from ${REPO}@${COMMIT}. The text below is the upstream skill, unchanged. -->`,
    "",
    body,
    "",
    ...(await references(s.folder, body)).flatMap((r) => [r, ""]),
    "## Credits and licence",
    "",
    s.credit,
    "",
    "```text",
    MIT(s.holder),
    "```",
    "",
  ].join("\n");
  const dir = path.join(SKILLS_DIR, s.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "SKILL.md"), content);
}

console.log(`Wrote ${SKILLS.length} writing skills from ${REPO}@${COMMIT}.`);
