import type { MetadataRoute } from "next";
import { getAllSkills } from "@/lib/skills";
import { getAllChapters } from "@/lib/chapters";
import { getAllCollections } from "@/lib/collections";
import { AGENTS } from "@/lib/taxonomy";

const BASE_URL = "https://uiskillbook.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/skills",
    "/chapters",
    "/collections",
    "/agents",
    "/authors",
    "/submit",
    "/about",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const skillRoutes = getAllSkills().map((s) => ({
    url: `${BASE_URL}/skills/${s.slug}`,
    lastModified: new Date(s.updated_at),
  }));

  const chapterRoutes = getAllChapters().map((c) => ({
    url: `${BASE_URL}/chapters/${c.slug}`,
    lastModified: new Date(),
  }));

  const collectionRoutes = getAllCollections().map((c) => ({
    url: `${BASE_URL}/collections/${c.slug}`,
    lastModified: new Date(),
  }));

  const agentRoutes = AGENTS.filter((a) => a.slug !== "universal").map((a) => ({
    url: `${BASE_URL}/agents/${a.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...skillRoutes, ...chapterRoutes, ...collectionRoutes, ...agentRoutes];
}
