import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllSkills, type Skill } from "./skills";

const CHAPTERS_DIR = path.join(process.cwd(), "content", "chapters");

export type ChapterFrontmatter = {
  number: number;
  title: string;
  description: string;
  minutes: number;
  skills: string[];
};

export type Chapter = ChapterFrontmatter & {
  slug: string;
  body: string;
};

let cache: Chapter[] | null = null;

export function getAllChapters(): Chapter[] {
  if (cache) return cache;

  const files = fs.existsSync(CHAPTERS_DIR)
    ? fs.readdirSync(CHAPTERS_DIR).filter((f) => f.endsWith(".md"))
    : [];

  const chapters = files.map((file) => {
    const raw = fs.readFileSync(path.join(CHAPTERS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      body: content,
      ...(data as ChapterFrontmatter),
    };
  });

  chapters.sort((a, b) => a.number - b.number);
  cache = chapters;
  return chapters;
}

export function getChapterBySlug(slug: string): Chapter | undefined {
  return getAllChapters().find((c) => c.slug === slug);
}

export function getChapterSkills(chapter: Chapter): Skill[] {
  const all = getAllSkills();
  return chapter.skills
    .map((slug) => all.find((s) => s.slug === slug))
    .filter((s): s is Skill => Boolean(s));
}
