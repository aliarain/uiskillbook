#!/usr/bin/env -S node --experimental-strip-types

export {};

type RegistryEntry = {
  slug: string;
  name: string;
  description: string;
  categories: string[];
  agents: string[];
  tags?: string[];
  siteplane?: { component: string; title: string; group: string; order: number; docs: string; install: string[] };
  author: string;
  external: boolean;
  url: string;
  content: string;
};

type RegistryCategory = {
  slug: string;
  label: string;
};

type RegistryManifest = {
  registry: RegistryEntry[];
  categories: RegistryCategory[];
  count: number;
};

const argv = process.argv.slice(2);

const SITE_URL = process.env.UISKILLBOOK_SITE_URL ?? "https://www.uiskillbook.com";
const REGISTRY_URL = new URL("/skills/registry.json", SITE_URL);

const HELP = [
  "UI SKILLBOOK",
  "",
  "The field guide for building interfaces with AI.",
  "",
  "Usage:",
  "  uiskillbook [command]",
  "",
  "Commands:",
  "  start                       Print the routing skill",
  "  categories                  List categories",
  "  list [--category <slug>] [--agent <slug>]",
  "                               List skills",
  "  get <slug>                  Print full skill content",
  "  siteplane [--group <name>]  List Siteplane UI components with install commands",
  "",
  "Examples:",
  "  uiskillbook start",
  "  uiskillbook list --category motion",
  "  uiskillbook get pressed-button-feedback",
  "  uiskillbook siteplane --group \"Overlays & disclosure\"",
].join("\n");

const normalize = (value: string) => value.trim().toLowerCase();

const print = (value: string) => {
  process.stdout.write(`${value}\n`);
};

const fail = (message: string, code = 1) => {
  process.stderr.write(`${message}\n`);
  process.exitCode = code;
};

const failExtraArgs = (command: string) => {
  fail(`Too many arguments for ${command}`, 1);
};

const fetchManifest = async (): Promise<RegistryManifest> => {
  const response = await fetch(REGISTRY_URL);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${REGISTRY_URL} (${response.status} ${response.statusText})`
    );
  }
  return (await response.json()) as RegistryManifest;
};

const fetchSkillContent = async (contentUrl: string) => {
  const response = await fetch(contentUrl);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${contentUrl} (${response.status} ${response.statusText})`
    );
  }
  return response.text();
};

const formatSkill = (skill: RegistryEntry) => {
  const categories = skill.categories.join(", ");
  const description = skill.description.replace(/\s+/g, " ").trim();
  const flag = skill.external ? " [external]" : "";
  return `${skill.slug}${flag} — ${categories} — ${description}`;
};

const printList = async (category?: string, agent?: string) => {
  const { registry, categories } = await fetchManifest();
  const categorySlugs = new Set(categories.map((c) => c.slug));
  const normalizedCategory = category ? normalize(category) : undefined;

  if (normalizedCategory && !categorySlugs.has(normalizedCategory)) {
    fail(`Unknown category: ${category}`, 3);
    return;
  }

  let filtered = registry;
  if (normalizedCategory) {
    filtered = filtered.filter((s) => s.categories.includes(normalizedCategory));
  }
  if (agent) {
    const normalizedAgent = normalize(agent);
    filtered = filtered.filter((s) => s.agents.includes(normalizedAgent));
  }

  if (filtered.length === 0) {
    fail("No skills found for the given filters", 3);
    return;
  }

  print(filtered.map(formatSkill).join("\n"));
};

const printSiteplane = async (group?: string) => {
  const { registry } = await fetchManifest();
  const components = registry
    .filter((s) => s.siteplane && (!group || normalize(s.siteplane.group) === normalize(group)))
    .sort((a, b) => a.siteplane!.order - b.siteplane!.order);

  if (components.length === 0) {
    fail(group ? `No Siteplane UI components in group: ${group}` : "No Siteplane UI components found", 3);
    return;
  }

  const lines: string[] = [];
  let currentGroup = "";
  for (const s of components) {
    const sp = s.siteplane!;
    if (sp.group !== currentGroup) {
      lines.push(`${lines.length ? "\n" : ""}${sp.group}`);
      currentGroup = sp.group;
    }
    lines.push(`  ${s.slug} — ${s.description.replace(/\s+/g, " ").trim()}`);
    lines.push(`    npx shadcn@4.18.0 add ${sp.install.map((i) => `@siteplane/${i}`).join(" ")}`);
  }
  print(lines.join("\n"));
};

const printGet = async (input: string) => {
  const { registry } = await fetchManifest();
  const normalizedInput = normalize(input);
  const skill = registry.find((s) => normalize(s.slug) === normalizedInput);

  if (!skill) {
    fail(`Skill not found: ${input}`, 3);
    return;
  }

  process.stdout.write(await fetchSkillContent(skill.content));
};

const main = async () => {
  const [command = ""] = argv;

  if (!command || command === "--help" || command === "-h" || command === "help") {
    print(HELP);
    return;
  }

  if (command === "start") {
    if (argv.length > 1) {
      failExtraArgs("start");
      return;
    }
    await printGet("uiskillbook-start");
    return;
  }

  if (command === "categories") {
    if (argv.length > 1) {
      failExtraArgs("categories");
      return;
    }
    const { categories } = await fetchManifest();
    print(categories.map((c) => c.slug).join("\n"));
    return;
  }

  if (command === "list") {
    const args = argv.slice(1);
    let category: string | undefined;
    let agent: string | undefined;

    for (let i = 0; i < args.length; i += 2) {
      const flag = args[i];
      const value = args[i + 1];
      if (flag === "--category") category = value;
      else if (flag === "--agent") agent = value;
      else {
        fail(`Unknown flag: ${flag}`, 1);
        return;
      }
      if (!value) {
        fail(`Missing value for ${flag}`, 1);
        return;
      }
    }

    await printList(category, agent);
    return;
  }

  if (command === "get") {
    const args = argv.slice(1);
    if (args.length > 1) {
      failExtraArgs("get");
      return;
    }
    const target = args[0];
    if (!target) {
      fail("Missing skill slug", 1);
      return;
    }
    await printGet(target);
    return;
  }

  if (command === "siteplane") {
    const args = argv.slice(1);
    if (args.length && (args[0] !== "--group" || args.length !== 2)) {
      fail(args[0] === "--group" ? "Missing value for --group" : `Unknown flag: ${args[0]}`, 1);
      return;
    }
    await printSiteplane(args[1]);
    return;
  }

  fail(`Unknown command: ${command}`, 2);
};

await main().catch((error) => {
  fail(
    `Error communicating with uiskillbook.com: ${error instanceof Error ? error.message : String(error)}`,
    4
  );
});
