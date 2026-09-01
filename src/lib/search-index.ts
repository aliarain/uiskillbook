import { getAllSkills } from "./skills";
import { getAllChapters } from "./chapters";
import { getAllCollections } from "./collections";
import { categoryLabel } from "./taxonomy";

export type SearchItem = {
  type: "skill" | "chapter" | "collection";
  slug: string;
  href: string;
  title: string;
  subtitle: string;
  group: string;
};

export function buildSearchIndex(): SearchItem[] {
  const skills: SearchItem[] = getAllSkills().map((s) => ({
    type: "skill",
    slug: s.slug,
    href: `/skills/${s.slug}`,
    title: s.title,
    subtitle: s.categories.map(categoryLabel).join(" · "),
    group: "Skills",
  }));

  const chapters: SearchItem[] = getAllChapters().map((c) => ({
    type: "chapter",
    slug: c.slug,
    href: `/chapters/${c.slug}`,
    title: c.title,
    subtitle: `Chapter ${String(c.number).padStart(2, "0")}`,
    group: "Chapters",
  }));

  const collections: SearchItem[] = getAllCollections().map((c) => ({
    type: "collection",
    slug: c.slug,
    href: `/collections/${c.slug}`,
    title: c.title,
    subtitle: `${c.skills.length} skills`,
    group: "Collections",
  }));

  return [...skills, ...chapters, ...collections];
}
