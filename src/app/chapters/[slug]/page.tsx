import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllChapters, getChapterBySlug, getChapterSkills } from "@/lib/chapters";
import { markdownToHtml } from "@/lib/markdown";
import { SkillRow } from "@/components/skill-row";
import { pageMetadata } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";

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
  return pageMetadata({
    title: chapter.title,
    description: chapter.description,
    path: `/chapters/${slug}`,
    type: "article",
  });
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
      <Breadcrumbs
        items={[
          { label: "Learn", href: "/chapters" },
          { label: `Guide ${String(chapter.number).padStart(2, "0")}` },
        ]}
      />
      <h1 className="display mt-3 text-3xl sm:text-4xl">
        {chapter.title}
      </h1>
      <p className="mt-2 text-[13px] text-muted">
        {chapter.minutes} min read, {skills.length} skills
      </p>

      <article
        className="skill-content prose prose-sm mt-8 max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="mt-14">
        <h2 className="label">
          Skills in this chapter
        </h2>
        <div className="mt-3 space-y-0.5">
          {skills.map((skill, i) => (
            <SkillRow key={skill.slug} skill={skill} index={i + 1} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Link href="/chapters" className="link rounded-input text-sm">
          Back to all chapters
        </Link>
      </div>
    </div>
  );
}
