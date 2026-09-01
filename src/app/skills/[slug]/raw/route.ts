import { NextResponse } from "next/server";
import { getAllSkills, getSkillRawMarkdown } from "@/lib/skills";

export function generateStaticParams() {
  return getAllSkills()
    .filter((s) => !s.external)
    .map((s) => ({ slug: s.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = getAllSkills().find((s) => s.slug === slug);
  if (!skill) return new NextResponse("Not found", { status: 404 });

  if (skill.external) {
    const target = skill.source?.rawUrl ?? skill.source?.repository;
    if (target) return NextResponse.redirect(target);
    return new NextResponse("Not found", { status: 404 });
  }

  return new NextResponse(getSkillRawMarkdown(slug), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
