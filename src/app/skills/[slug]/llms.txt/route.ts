import { NextResponse } from "next/server";
import { getAllSkills, getSkillRawMarkdown } from "@/lib/skills";

export function generateStaticParams() {
  return getAllSkills().map((s) => ({ slug: s.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = getAllSkills().find((s) => s.slug === slug);
  if (!skill) return new NextResponse("Not found", { status: 404 });

  if (skill.external) {
    const source = skill.source?.repository ?? "";
    const rawUrl = skill.source?.rawUrl ?? "";
    const text = [
      `# ${skill.title}`,
      "",
      skill.description,
      "",
      "This skill is hosted in an external repository, not on UI Skillbook.",
      rawUrl && `Raw content: ${rawUrl}`,
      source && `Source: ${source}`,
      `Author: ${skill.author.name}`,
      `Categories: ${skill.categories.join(", ")}`,
    ]
      .filter(Boolean)
      .join("\n");

    return new NextResponse(text, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const raw = getSkillRawMarkdown(slug);
  return new NextResponse(raw, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
