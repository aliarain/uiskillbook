import { NextResponse } from "next/server";
import { getAllSkills, getSiteplaneSkills } from "@/lib/skills";
import { getAllChapters } from "@/lib/chapters";
import { getAllCollections } from "@/lib/collections";
import { SITE_URL } from "@/lib/site";

export function GET() {
  const skills = getAllSkills();
  const chapters = getAllChapters();
  const collections = getAllCollections();

  const lines = [
    "# UI Skillbook",
    "",
    "> The field guide for building interfaces with AI. Curated UI skills, rules,",
    "> and patterns for humans and coding agents.",
    "",
    `Full text: ${SITE_URL}/llms-full.txt. JSON API: ${SITE_URL}/api (docs: ${SITE_URL}/api-docs, OpenAPI: ${SITE_URL}/openapi.json). MCP server: ${SITE_URL}/mcp. Any skill page as Markdown: ${SITE_URL}/skills/{slug}.md`,
    "",
    "## Skills",
    "",
    ...skills
      .filter((s) => !s.siteplane)
      .map((s) => `- [${s.title}](${SITE_URL}/skills/${s.slug}): ${s.description}`),
    "",
    "## Siteplane UI components",
    "",
    "> UI Skillbook's design system. One entry per component: when to pick it over its neighbours, install command, usage rules.",
    "",
    ...getSiteplaneSkills().map(
      (s) => `- [${s.siteplane.title}](${SITE_URL}/skills/${s.slug}) (${s.siteplane.group}): ${s.description}`
    ),
    "",
    "## Chapters",
    "",
    ...chapters.map(
      (c) => `- [${c.title}](${SITE_URL}/chapters/${c.slug}): ${c.description}`
    ),
    "",
    "## Collections",
    "",
    ...collections.map(
      (c) => `- [${c.title}](${SITE_URL}/collections/${c.slug}): ${c.description}`
    ),
    "",
  ];

  return new NextResponse(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
