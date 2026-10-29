// One query and serialization layer for the public JSON API (/api/*) and the
// MCP server, so both always return the same shapes.
import {
  authorAvatar,
  getAllSkills,
  getAuthors,
  getSkillBySlug,
  getSkillRawMarkdown,
  installTargets,
  REPO_STARS_FETCHED_AT,
  skillRepo,
  skillStars,
  type Skill,
} from "./skills";
import { getAllChapters } from "./chapters";
import { getAllCollections } from "./collections";
import { getAllDesignMds, getDesignMdBySlug, getDesignMdRaw, type DesignMd } from "./design-md";
import { AGENTS, CATEGORIES, ROLES } from "./taxonomy";
import { SITE_URL } from "./site";

export const API_VERSION = "1";
export const MAX_LIMIT = 100;
export const DEFAULT_LIMIT = 30;

export const SORTS = ["recommended", "newest", "stars", "az"] as const;
export type SkillSort = (typeof SORTS)[number];

export type SkillQuery = {
  q?: string;
  category?: string;
  agent?: string;
  role?: string;
  sort?: SkillSort;
  page?: number;
  limit?: number;
};

export function querySkills(query: SkillQuery) {
  let skills = getAllSkills();
  const role = ROLES.find((r) => r.slug === query.role);

  if (query.category) skills = skills.filter((s) => s.categories.includes(query.category as never));
  if (query.agent) skills = skills.filter((s) => s.agents.includes(query.agent as never));
  if (role) skills = skills.filter((s) => s.categories.some((c) => role.categories.includes(c)));
  if (query.q) {
    const needle = query.q.trim().toLowerCase();
    skills = skills.filter((s) =>
      [s.slug, s.title, s.description, s.author.name, ...(s.tags ?? [])].some((field) =>
        field.toLowerCase().includes(needle)
      )
    );
  }

  const sort = query.sort ?? "recommended";
  if (sort === "newest") skills = [...skills].sort((a, b) => b.updated_at.localeCompare(a.updated_at));
  else if (sort === "stars") skills = [...skills].sort((a, b) => (skillStars(b) ?? -1) - (skillStars(a) ?? -1));
  else if (sort === "az") skills = [...skills].sort((a, b) => a.title.localeCompare(b.title));
  else skills = [...skills].sort((a, b) => Number(Boolean(b.curated)) - Number(Boolean(a.curated)));

  const limit = Math.min(MAX_LIMIT, Math.max(1, query.limit ?? DEFAULT_LIMIT));
  const pages = Math.max(1, Math.ceil(skills.length / limit));
  const page = Math.min(pages, Math.max(1, query.page ?? 1));

  return {
    total: skills.length,
    page,
    pages,
    limit,
    skills: skills.slice((page - 1) * limit, page * limit).map(skillSummary),
  };
}

export function skillSummary(skill: Skill) {
  return {
    slug: skill.slug,
    name: skill.title,
    description: skill.description,
    author: { name: skill.author.name, url: skill.author.url ?? null, avatar: authorAvatar(skill) ?? null },
    categories: skill.categories,
    agents: skill.agents,
    tags: skill.tags ?? [],
    repo: skillRepo(skill) ?? null,
    stars: skillStars(skill) ?? null,
    external: Boolean(skill.external),
    curated: Boolean(skill.curated),
    updated_at: skill.updated_at,
    url: `${SITE_URL}/skills/${skill.slug}`,
    raw_url: skill.external
      ? (skill.source?.rawUrl ?? null)
      : `${SITE_URL}/skills/${skill.slug}/raw`,
  };
}

export function skillDetail(slug: string) {
  const skill = getSkillBySlug(slug);
  if (!skill) return null;
  return {
    ...skillSummary(skill),
    license: skill.license ?? null,
    version: skill.version,
    source: skill.source?.repository ?? null,
    install: installTargets(skill),
    // Local skills ship their full instructions; external ones are fetched from raw_url.
    content: skill.external ? null : getSkillRawMarkdown(skill.slug),
  };
}

export function designMdSummary(entry: DesignMd) {
  return {
    slug: entry.slug,
    name: entry.name,
    description: entry.description,
    category: entry.category,
    website: entry.website,
    color: entry.color,
    updated_at: entry.updated_at,
    url: `${SITE_URL}/design-md/${entry.slug}`,
    raw_url: `${SITE_URL}/design-md/${entry.slug}/raw`,
  };
}

export function designMdDetail(slug: string) {
  const entry = getDesignMdBySlug(slug);
  if (!entry) return null;
  return { ...designMdSummary(entry), content: getDesignMdRaw(slug) };
}

export function searchCatalog(q: string, limit = 20) {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  const match = (...fields: (string | undefined)[]) =>
    fields.some((f) => f?.toLowerCase().includes(needle));

  const results = [
    ...getAllSkills()
      .filter((s) => match(s.slug, s.title, s.description, s.author.name, ...(s.tags ?? [])))
      .map((s) => ({ type: "skill", slug: s.slug, name: s.title, description: s.description, url: `${SITE_URL}/skills/${s.slug}` })),
    ...getAllChapters()
      .filter((c) => match(c.title, c.description, c.tip))
      .map((c) => ({ type: "guide", slug: c.slug, name: c.title, description: c.description, url: `${SITE_URL}/chapters/${c.slug}` })),
    ...getAllCollections()
      .filter((c) => match(c.title, c.description))
      .map((c) => ({ type: "collection", slug: c.slug, name: c.title, description: c.description, url: `${SITE_URL}/collections/${c.slug}` })),
    ...getAllDesignMds()
      .filter((d) => match(d.slug, d.name, d.description, d.category))
      .map((d) => ({ type: "design-md", slug: d.slug, name: d.name, description: d.description, url: `${SITE_URL}/design-md/${d.slug}` })),
  ];

  return results.slice(0, Math.min(MAX_LIMIT, Math.max(1, limit)));
}

export function catalogStats() {
  const skills = getAllSkills();
  // One entry per source repo, so a repo with many skills counts once.
  const repoStars = new Map(
    skills.flatMap((s) => {
      const repo = skillRepo(s);
      const stars = skillStars(s);
      return repo && stars !== undefined ? [[repo, stars] as const] : [];
    })
  );
  return {
    skills: skills.length,
    local_skills: skills.filter((s) => !s.external).length,
    external_skills: skills.filter((s) => s.external).length,
    authors: getAuthors().length,
    guides: getAllChapters().length,
    collections: getAllCollections().length,
    design_md: getAllDesignMds().length,
    repos_with_stars: repoStars.size,
    total_repo_stars: [...repoStars.values()].reduce((a, b) => a + b, 0),
    categories: CATEGORIES.map((c) => ({
      slug: c.slug,
      name: c.label,
      count: skills.filter((s) => s.categories.includes(c.slug)).length,
    })),
    agents: AGENTS.map((a) => ({
      slug: a.slug,
      name: a.label,
      count: skills.filter((s) => s.agents.includes(a.slug)).length,
    })),
    roles: ROLES.map((r) => ({ slug: r.slug, name: r.label, categories: r.categories })),
    stars_fetched_at: REPO_STARS_FETCHED_AT,
    updated_at: skills.reduce((max, s) => (s.updated_at > max ? s.updated_at : max), ""),
  };
}

/** Parse list query params shared by GET /api/skills and the MCP list tool. */
export function parseSkillQuery(params: URLSearchParams | Record<string, unknown>): SkillQuery {
  const get = (key: string) => {
    const value = params instanceof URLSearchParams ? params.get(key) : params[key];
    return typeof value === "string" && value.trim() ? value.trim() : typeof value === "number" ? String(value) : undefined;
  };
  const sort = get("sort");
  return {
    q: get("q") ?? get("query"),
    category: get("category"),
    agent: get("agent"),
    role: get("role"),
    sort: SORTS.includes(sort as SkillSort) ? (sort as SkillSort) : undefined,
    page: Number(get("page")) || undefined,
    limit: Number(get("limit")) || undefined,
  };
}

export const API_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

export function apiJson(data: unknown, status = 200) {
  return Response.json(data, { status, headers: API_HEADERS });
}

export function apiError(message: string, status: number) {
  return apiJson({ error: message }, status);
}
