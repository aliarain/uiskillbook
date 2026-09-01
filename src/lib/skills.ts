import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { AgentSlug, CategorySlug, TaskSlug } from "./taxonomy";

const SKILLS_DIR = path.join(process.cwd(), "content", "skills");

export type SkillFrontmatter = {
  name: string;
  title: string;
  description: string;
  author: { name: string; url?: string };
  source?: { repository?: string; path?: string };
  categories: CategorySlug[];
  agents: AgentSlug[];
  tasks?: TaskSlug[];
  tags?: string[];
  version: string;
  updated_at: string;
  license?: string;
  curated?: boolean;
};

export type Skill = SkillFrontmatter & {
  slug: string;
  body: string;
};

let cache: Skill[] | null = null;

export function getAllSkills(): Skill[] {
  if (cache) return cache;

  const slugs = fs.existsSync(SKILLS_DIR)
    ? fs.readdirSync(SKILLS_DIR).filter((entry) =>
        fs.statSync(path.join(SKILLS_DIR, entry)).isDirectory()
      )
    : [];

  const skills = slugs.map((slug) => {
    const filePath = path.join(SKILLS_DIR, slug, "SKILL.md");
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      body: content,
      ...(data as SkillFrontmatter),
    };
  });

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
