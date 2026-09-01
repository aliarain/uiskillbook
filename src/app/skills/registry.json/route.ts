import { NextResponse } from "next/server";
import { getAllSkills } from "@/lib/skills";
import { CATEGORIES } from "@/lib/taxonomy";

export function GET(request: Request) {
  const baseUrl = new URL(request.url).origin;

  const registry = getAllSkills().map((s) => ({
    slug: s.slug,
    name: s.title,
    description: s.description,
    categories: s.categories,
    agents: s.agents,
    author: s.author.name,
    external: Boolean(s.external),
    url: `${baseUrl}/skills/${s.slug}`,
    content: `${baseUrl}/skills/${s.slug}/llms.txt`,
  }));

  return NextResponse.json({
    registry,
    categories: CATEGORIES,
    count: registry.length,
  });
}
