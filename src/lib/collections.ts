import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllSkills, type Skill } from "./skills";

const COLLECTIONS_DIR = path.join(process.cwd(), "content", "collections");

export type CollectionFrontmatter = {
  title: string;
  description: string;
  skills: string[];
};

export type Collection = CollectionFrontmatter & {
  slug: string;
  body: string;
};

let cache: Collection[] | null = null;

export function getAllCollections(): Collection[] {
  if (cache) return cache;

  const files = fs.existsSync(COLLECTIONS_DIR)
    ? fs.readdirSync(COLLECTIONS_DIR).filter((f) => f.endsWith(".md"))
    : [];

  const collections = files.map((file) => {
    const raw = fs.readFileSync(path.join(COLLECTIONS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      body: content,
      ...(data as CollectionFrontmatter),
    };
  });

  collections.sort((a, b) => a.title.localeCompare(b.title));
  cache = collections;
  return collections;
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return getAllCollections().find((c) => c.slug === slug);
}

export function getCollectionSkills(collection: Collection): Skill[] {
  const all = getAllSkills();
  return collection.skills
    .map((slug) => all.find((s) => s.slug === slug))
    .filter((s): s is Skill => Boolean(s));
}
