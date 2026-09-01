import { NextResponse } from "next/server";
import { getAllSkills } from "@/lib/skills";
import { getAllChapters } from "@/lib/chapters";
import { getAllCollections } from "@/lib/collections";

const BASE_URL = "https://uiskillbook.com";

export function GET() {
  const skills = getAllSkills();
  const chapters = getAllChapters();
  const collections = getAllCollections();

  const lines = [
    "# UI Skillbook",
    "",
    "> The field guide for building better interfaces with AI. Curated UI skills, rules,",
    "> and patterns for humans and coding agents.",
    "",
    "## Skills",
    "",
    ...skills.map(
      (s) => `- [${s.title}](${BASE_URL}/skills/${s.slug}): ${s.description}`
    ),
    "",
    "## Chapters",
    "",
    ...chapters.map(
      (c) => `- [${c.title}](${BASE_URL}/chapters/${c.slug}): ${c.description}`
    ),
    "",
    "## Collections",
    "",
    ...collections.map(
      (c) => `- [${c.title}](${BASE_URL}/collections/${c.slug}): ${c.description}`
    ),
    "",
  ];

  return new NextResponse(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
