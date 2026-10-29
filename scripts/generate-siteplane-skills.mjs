#!/usr/bin/env node
// Generates one Skillbook skill per Siteplane UI component, plus the
// "Siteplane UI" collection, from Siteplane's live catalog and our own guidance.
//
//   node scripts/generate-siteplane-skills.mjs
//
// Sources:
// - https://ui.siteplane.io/llms.txt: the component pages, with their titles
// - https://ui.siteplane.io/docs-markdown/components.md: the group of each component
// - https://ui.siteplane.io/registry/registry.json: the installable items
// - content/siteplane-ui/guidance/*.json: what each component is for, when to
//   pick it over its neighbours and its usage rules, written by us. Siteplane's
//   docs text and example code are linked, never copied (Siteplane UI License).
//
// It fails when a component has no guidance, or guidance names an unknown
// component, so a new Siteplane release shows up as a list of entries to write.
// Re-running with nothing changed rewrites identical files.

import fs from "node:fs";
import path from "node:path";

const ORIGIN = "https://ui.siteplane.io";
const SHADCN = "shadcn@4.18.0";
const ROOT = path.resolve(import.meta.dirname, "..");
const SKILLS_DIR = path.join(ROOT, "content", "skills");
const GUIDANCE_DIR = path.join(ROOT, "content", "siteplane-ui", "guidance");
const COLLECTION_FILE = path.join(ROOT, "content", "collections", "siteplane-ui.md");
const SITE_URL = "https://uiskillbook.com";
const PREFIX = "siteplane-";

const CATEGORIES = new Set([
  "layout", "typography", "motion", "interaction", "accessibility", "responsive",
  "forms", "navigation", "visual", "performance", "design-systems", "taste",
]);
const TASKS = new Set([
  "landing-page", "dashboard", "mobile-interface", "design-system", "form",
  "navigation", "animation", "data-table", "empty-state", "other",
]);

async function get(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  return res.text();
}

function fail(errors) {
  console.error(errors.map((e) => `- ${e}`).join("\n"));
  process.exit(1);
}

const [llms, componentsMd, registryJson, installationMd] = await Promise.all([
  get(`${ORIGIN}/llms.txt`),
  get(`${ORIGIN}/docs-markdown/components.md`),
  get(`${ORIGIN}/registry/registry.json`),
  get(`${ORIGIN}/docs-markdown/installation.md`),
]);

const version = installationMd.match(/current release is (\d+\.\d+\.\d+)/)?.[1];
if (!version) fail(["Could not read the current release from installation.md"]);

const titles = new Map(
  [...llms.matchAll(/^- \[([^\]]+)\]\(\/docs-markdown\/components\/([a-z0-9-]+)\.md\)/gm)].map((m) => [m[2], m[1]])
);

// components.md lists every component under a "## Group" heading, in the docs' order.
const components = [];
let group;
for (const line of componentsMd.split("\n")) {
  const heading = line.match(/^## (.+)/);
  if (heading) group = heading[1].trim();
  const link = line.match(/^- \[[^\]]+\]\(\/docs\/components\/([a-z0-9-]+)\/\)/);
  if (link && group) components.push({ slug: link[1], group, order: components.length + 1 });
}

const registryItems = new Set(JSON.parse(registryJson).items.map((item) => item.name));

const guidance = {};
for (const file of fs.readdirSync(GUIDANCE_DIR).filter((f) => f.endsWith(".json")).sort()) {
  Object.assign(guidance, JSON.parse(fs.readFileSync(path.join(GUIDANCE_DIR, file), "utf8")));
}

const known = new Set(components.map((c) => c.slug));
const errors = [];
for (const { slug } of components) {
  const g = guidance[slug];
  if (!titles.has(slug)) errors.push(`${slug}: listed in components.md but not in llms.txt`);
  if (!g) {
    errors.push(`${slug}: no guidance in content/siteplane-ui/guidance/`);
    continue;
  }
  for (const n of g.neighbours) if (!known.has(n.name)) errors.push(`${slug}: unknown neighbour ${n.name}`);
  for (const i of g.install) if (!registryItems.has(i)) errors.push(`${slug}: install item ${i} is not in registry.json`);
  for (const c of g.categories) if (!CATEGORIES.has(c)) errors.push(`${slug}: unknown category ${c}`);
  for (const t of g.tasks) if (!TASKS.has(t)) errors.push(`${slug}: unknown task ${t}`);
}
for (const slug of Object.keys(guidance)) {
  if (!known.has(slug)) errors.push(`${slug}: guidance for a component Siteplane no longer lists`);
}
if (errors.length) fail(errors);

const yaml = (value) => JSON.stringify(value);
const docsUrl = (slug) => `${ORIGIN}/docs/components/${slug}/`;
const skillUrl = (slug) => `${SITE_URL}/skills/${PREFIX}${slug}`;
const today = new Date().toISOString().slice(0, 10);

function existingDate(file) {
  if (!fs.existsSync(file)) return undefined;
  return fs.readFileSync(file, "utf8").match(/^updated_at: "([^"]+)"/m)?.[1];
}

function render({ slug, group, order }, updatedAt) {
  const g = guidance[slug];
  const title = titles.get(slug);
  const install = g.install.map((i) => `@siteplane/${i}`).join(" ");
  const importPath = g.install.length === 1 && g.install[0] === slug ? `@/siteplane/components/${slug}` : undefined;

  const frontmatter = [
    "---",
    `name: ${PREFIX}${slug}`,
    `title: ${yaml(`Siteplane ${title}`)}`,
    `description: ${yaml(g.summary)}`,
    "author:",
    "  name: UI Skillbook",
    "  url: https://uiskillbook.com",
    "categories:",
    ...g.categories.map((c) => `  - ${c}`),
    "agents:",
    ...["claude-code", "codex", "cursor", "opencode", "universal"].map((a) => `  - ${a}`),
    "tasks:",
    ...g.tasks.map((t) => `  - ${t}`),
    "tags:",
    ...["siteplane-ui", ...g.tags.filter((t) => t !== "siteplane-ui")].map((t) => `  - ${t}`),
    `version: ${version}`,
    `updated_at: "${updatedAt}"`,
    "license: MIT",
    "siteplane:",
    `  component: ${slug}`,
    `  title: ${yaml(title)}`,
    `  group: ${yaml(group)}`,
    `  order: ${order}`,
    `  docs: ${docsUrl(slug)}`,
    `  install: [${g.install.join(", ")}]`,
    "---",
  ];

  const body = [
    "",
    `<!-- Generated by scripts/generate-siteplane-skills.mjs. Edit content/siteplane-ui/guidance/, then re-run the script. -->`,
    "",
    `# ${title}`,
    "",
    g.useFor,
    "",
    "## Install",
    "",
    "```bash",
    `npx ${SHADCN} add ${install}`,
    "```",
    "",
    importPath
      ? `Import it from \`${importPath}\`. The project needs Siteplane UI's one-time setup first: [installation](${ORIGIN}/docs/installation/).`
      : `The project needs Siteplane UI's one-time setup first: [installation](${ORIGIN}/docs/installation/).`,
    "",
    "## When to pick it",
    "",
    ...g.neighbours.map((n) => `- **vs [${titles.get(n.name)}](${skillUrl(n.name)}):** ${n.guidance}`),
    "",
    "## Rules",
    "",
    ...g.rules.map((r) => `- ${r}`),
    "",
    "## Reference",
    "",
    `- [${title} docs](${docsUrl(slug)}), with every prop, part and example ([Markdown](${ORIGIN}/docs-markdown/components/${slug}.md))`,
    `- Siteplane UI ${version}, ${group}. Read the installed source under \`src/siteplane\` before relying on an API.`,
    "",
  ];

  return [...frontmatter, ...body].join("\n");
}

/** Writes `render(date)`, keeping the file's previous date when nothing else changed, so a re-run is a no-op. */
function writeStable(file, render) {
  const previous = existingDate(file);
  const unchanged = previous && render(previous) === fs.readFileSync(file, "utf8");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, render(unchanged ? previous : today));
}

const keep = new Set();
for (const component of components) {
  keep.add(`${PREFIX}${component.slug}`);
  writeStable(path.join(SKILLS_DIR, `${PREFIX}${component.slug}`, "SKILL.md"), (date) => render(component, date));
}

for (const entry of fs.readdirSync(SKILLS_DIR)) {
  if (entry.startsWith(PREFIX) && !keep.has(entry)) fs.rmSync(path.join(SKILLS_DIR, entry), { recursive: true });
}

const groups = [...new Set(components.map((c) => c.group))];
writeStable(COLLECTION_FILE, (date) =>
  [
    "---",
    "title: Siteplane UI",
    `description: ${yaml(`Every Siteplane UI component (${components.length}), with when to pick it over its neighbours, how to install it and the rules that keep it right.`)}`,
    `updated_at: "${date}"`,
    "skills:",
    ...components.map((c) => `  - ${PREFIX}${c.slug}`),
    "---",
    "",
    "<!-- Generated by scripts/generate-siteplane-skills.mjs. -->",
    "",
    `[Siteplane UI](${ORIGIN}) is a React kit that installs as editable source through the shadcn CLI. It is the design system UI Skillbook itself is built on. This collection has one entry per component, grouped as Siteplane groups them: ${groups.join(", ")}.`,
    "",
    `Set up the kit once with the [installation guide](${ORIGIN}/docs/installation/), and install Siteplane's own agent skill with \`npx skills@1.5.25 add ${ORIGIN} -a claude-code\`. Each entry here adds the install command, the neighbours it is often confused with, and a link to its full docs.`,
    "",
  ].join("\n")
);

console.log(`Wrote ${components.length} Siteplane UI skills (${groups.length} groups, Siteplane UI ${version}).`);
