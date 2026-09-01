import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllChapters, getChapterBySlug, getChapterSkills } from "@/lib/chapters";
import { markdownToHtml } from "@/lib/markdown";
import { SkillRow } from "@/components/skill-row";

export function generateStaticParams() {
  return getAllChapters().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) return {};
  return { title: chapter.title, description: chapter.description };
}

export default async function ChapterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) notFound();

  const html = await markdownToHtml(chapter.body);
  const skills = getChapterSkills(chapter);

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <span className="font-mono text-xs uppercase tracking-widest text-muted">
        Chapter {String(chapter.number).padStart(2, "0")}
      </span>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
        {chapter.title}
      </h1>
      <p className="mt-2 font-mono text-xs text-muted">
        {chapter.minutes} min · {skills.length} skills
      </p>

      <article
        className="skill-content prose prose-sm mt-8 max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="mt-10 border-t border-border pt-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Skills in this chapter
        </h2>
        <div className="mt-2">
          {skills.map((skill, i) => (
            <SkillRow key={skill.slug} skill={skill} index={i + 1} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Link href="/chapters" className="text-sm text-secondary hover:text-primary">
          ← All chapters
        </Link>
      </div>
    </div>
  );
}
