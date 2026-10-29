import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { AgentSlug, CategorySlug, TaskSlug } from "./taxonomy";
import externalSkillsData from "../../content/external-skills.json";
import repoStarsData from "../../content/repo-stars.json";
import { SITE_URL } from "./site";

const SKILLS_DIR = path.join(process.cwd(), "content", "skills");

export type SkillFrontmatter = {
  name: string;
  title: string;
  description: string;
  author: { name: string; url?: string };
  source?: { repository?: string; path?: string; rawUrl?: string };
  categories: CategorySlug[];
  agents: AgentSlug[];
  tasks?: TaskSlug[];
  tags?: string[];
  version: string;
  updated_at: string;
  license?: string;
  curated?: boolean;
  /** True for skills indexed from an external repository — no local body, links out to source instead. */
  external?: boolean;
};

export type Skill = SkillFrontmatter & {
  slug: string;
  body?: string;
};

let cache: Skill[] | null = null;

function readLocalSkills(): Skill[] {
  const slugs = fs.existsSync(SKILLS_DIR)
    ? fs.readdirSync(SKILLS_DIR).filter((entry) =>
        fs.statSync(path.join(SKILLS_DIR, entry)).isDirectory()
      )
    : [];

  return slugs.map((slug) => {
    const filePath = path.join(SKILLS_DIR, slug, "SKILL.md");
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      body: content,
      ...(data as SkillFrontmatter),
    };
  });
}

const SMALL_WORDS = new Set(["a", "an", "and", "for", "in", "of", "on", "or", "the", "to", "with"]);

/** Many indexed skills use their slug as a title; turn `write-swift` into `Write Swift`. */
function humanizeTitle(title: string, slug: string): string {
  if (title !== slug && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(title)) return title;
  return title
    .split("-")
    .map((word, i) =>
      i > 0 && SMALL_WORDS.has(word) ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

export function getAllSkills(): Skill[] {
  if (cache) return cache;

  const skills: Skill[] = [
    ...readLocalSkills(),
    ...(externalSkillsData as Skill[]),
  ].map((s) => ({ ...s, title: humanizeTitle(s.title, s.slug) }));

  skills.sort((a, b) => a.title.localeCompare(b.title));
  cache = skills;
  return skills;
}

export function getSkillBySlug(slug: string): Skill | undefined {
  return getAllSkills().find((s) => s.slug === slug);
}

export function getSkillRawMarkdown(slug: string): string {
  return fs.readFileSync(path.join(SKILLS_DIR, slug, "SKILL.md"), "utf8");
}

export function getSkillsByCategory(category: string): Skill[] {
  return getAllSkills().filter((s) => s.categories.includes(category as CategorySlug));
}

export function getSkillsByAgent(agent: string): Skill[] {
  return getAllSkills().filter((s) => s.agents.includes(agent as AgentSlug));
}

export function getSkillsByTask(task: string): Skill[] {
  return getAllSkills().filter((s) => s.tasks?.includes(task as TaskSlug));
}

export function getRelatedSkills(skill: Skill, limit = 4): Skill[] {
  return getAllSkills()
    .filter((s) => s.slug !== skill.slug)
    .map((s) => ({
      skill: s,
      score: s.categories.filter((c) => skill.categories.includes(c)).length,
    }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.skill);
}

export function getAuthors(): { name: string; url?: string; count: number }[] {
  const map = new Map<string, { name: string; url?: string; count: number }>();
  for (const skill of getAllSkills()) {
    const existing = map.get(skill.author.name);
    if (existing) {
      existing.count += 1;
    } else {
      map.set(skill.author.name, { ...skill.author, count: 1 });
    }
  }
  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}


const repoStars = repoStarsData as { fetchedAt: string; stars: Record<string, number> };

/** `owner/repo` for skills hosted on GitHub. */
export function skillRepo(skill: Skill): string | undefined {
  return skill.source?.repository?.match(/^https:\/\/github\.com\/([^/]+\/[^/]+)/)?.[1];
}

/** Star count from content/repo-stars.json; undefined when there is no real data. */
export function skillStars(skill: Skill): number | undefined {
  const repo = skillRepo(skill);
  return repo ? repoStars.stars[repo.toLowerCase()] : undefined;
}

export const REPO_STARS_FETCHED_AT = repoStars.fetchedAt;

/** GitHub avatar for authors whose profile URL is a GitHub user or org. */
export function authorAvatar(skill: Skill): string | undefined {
  const login = skill.author.url?.match(/^https:\/\/github\.com\/([^/]+)\/?$/)?.[1];
  return login ? `https://github.com/${login}.png?size=48` : undefined;
}

/** Agents the `skills` CLI can install into, keyed by our agent slug. */
const SKILLS_CLI_AGENTS: { slug: AgentSlug; cli: string; label: string }[] = [
  { slug: "claude-code", cli: "claude-code", label: "Claude Code" },
  { slug: "codex", cli: "codex", label: "Codex" },
  { slug: "cursor", cli: "cursor", label: "Cursor" },
  { slug: "opencode", cli: "opencode", label: "OpenCode" },
  { slug: "copilot", cli: "github-copilot", label: "Copilot" },
];

/** Copy-paste install prompts, one per supported agent. */
export function installTargets(skill: Skill) {
  const repo = skillRepo(skill);
  const skillDir = skill.source?.repository?.match(/\/([^/]+)\/SKILL\.md$/i)?.[1];

  if (!skill.external || !repo) {
    return [
      {
        agent: "any",
        label: "your agent",
        prompt: `Fetch ${SITE_URL}/skills/${skill.slug}/raw and follow the ${skill.title} skill for this task.`,
      },
    ];
  }

  const agents = skill.agents.includes("universal")
    ? SKILLS_CLI_AGENTS
    : SKILLS_CLI_AGENTS.filter((a) => skill.agents.includes(a.slug));

  return (agents.length ? agents : SKILLS_CLI_AGENTS).map((a) => ({
    agent: a.slug,
    label: a.label,
    prompt: `Install the ${skill.title} skill with \`npx skills add ${repo}${skillDir ? ` --skill ${skillDir}` : ""} -a ${a.cli}\`, confirm the prompts, then wait for it to finish before continuing.`,
  }));
}
