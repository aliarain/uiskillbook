import type { MetadataRoute } from "next";
import { getAllSkills, getSkillsByAgent } from "@/lib/skills";
import { getAllChapters } from "@/lib/chapters";
import { getAllCollections } from "@/lib/collections";
import { getAllDesignMds } from "@/lib/design-md";
import { AGENTS } from "@/lib/taxonomy";
import { SITE_URL } from "@/lib/site";

function latest(dates: string[]): Date {
  return new Date(dates.reduce((max, d) => (d > max ? d : max), "1970-01-01"));
}

/** Core pages. Design.md files and their hub pages are in /design-md/sitemap.xml. */
export default function sitemap(): MetadataRoute.Sitemap {
  const skills = getAllSkills();
  const chapters = getAllChapters();
  const collections = getAllCollections();
  const designMds = getAllDesignMds();
  const contentDate = latest([...skills, ...chapters, ...collections, ...designMds].map((i) => i.updated_at));
  const dated = (items: { updated_at: string }[]) =>
    items.length ? latest(items.map((i) => i.updated_at)) : contentDate;

  const staticRoutes = [
    { path: "", lastModified: contentDate },
    { path: "/skills", lastModified: dated(skills) },
    { path: "/chapters", lastModified: dated(chapters) },
    { path: "/collections", lastModified: dated(collections) },
    { path: "/design-md", lastModified: dated(designMds) },
    { path: "/agents", lastModified: dated(skills) },
    { path: "/authors", lastModified: dated(skills) },
    { path: "/submit", lastModified: contentDate },
    { path: "/about", lastModified: contentDate },
    { path: "/api-docs", lastModified: contentDate },
    { path: "/design-system", lastModified: contentDate },
  ].map(({ path, lastModified }) => ({ url: `${SITE_URL}${path}`, lastModified }));

  const skillRoutes = skills.map((s) => ({
    url: `${SITE_URL}/skills/${s.slug}`,
    lastModified: new Date(s.updated_at),
  }));

  const chapterRoutes = chapters.map((c) => ({
    url: `${SITE_URL}/chapters/${c.slug}`,
    lastModified: new Date(c.updated_at),
  }));

  const collectionRoutes = collections.map((c) => ({
    url: `${SITE_URL}/collections/${c.slug}`,
    lastModified: new Date(c.updated_at),
  }));

  const agentRoutes = AGENTS.filter((a) => a.slug !== "universal").map((a) => ({
    url: `${SITE_URL}/agents/${a.slug}`,
    lastModified: dated(getSkillsByAgent(a.slug)),
  }));

  return [...staticRoutes, ...skillRoutes, ...chapterRoutes, ...collectionRoutes, ...agentRoutes];
}
