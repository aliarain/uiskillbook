import Link from "next/link";
import type { Metadata } from "next";
import { getAllChapters } from "@/lib/chapters";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Chapters",
  description: "Multi-skill lessons for practical interface problems.",
  path: "/chapters",
});

export default function ChaptersPage() {
  const chapters = getAllChapters();

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <h1 className="display text-4xl">Chapters</h1>
      <p className="mt-2 text-secondary">
        A chapter combines multiple skills into a practical lesson.
      </p>

      <div className="mt-8 space-y-3">
        {chapters.map((chapter) => (
          <Link
            key={chapter.slug}
            href={`/chapters/${chapter.slug}`}
            className="card block p-5"
          >
            <div>
              <span className="text-[13px] text-muted">
                Chapter {String(chapter.number).padStart(2, "0")}
              </span>
              <h2 className="mt-1 text-lg font-semibold text-primary">{chapter.title}</h2>
              <p className="mt-1.5 text-sm text-secondary">{chapter.description}</p>
              <p className="mt-2 text-[13px] text-muted">
                {chapter.minutes} min read, {chapter.skills.length} skills
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
