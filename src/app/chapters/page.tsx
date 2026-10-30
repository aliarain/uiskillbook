import Link from "next/link";
import type { Metadata } from "next";
import { getAllChapters } from "@/lib/chapters";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Chapters",
  description: "Short lessons that pair skills to fix real interface problems.",
  path: "/chapters",
});

export default function ChaptersPage() {
  const chapters = getAllChapters();

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <h1 className="display text-4xl">Chapters</h1>
      <p className="mt-2 text-ink-2">
        Each chapter pairs a few skills into one lesson about a real interface problem.
      </p>

      <div className="mt-8 space-y-3">
        {chapters.map((chapter) => (
          <Link
            key={chapter.slug}
            href={`/chapters/${chapter.slug}`}
            className="card block p-5"
          >
            <div>
              <span className="text-[13px] text-ink-3">
                Chapter {String(chapter.number).padStart(2, "0")}
              </span>
              <h2 className="mt-1 text-lg font-semibold text-ink">{chapter.title}</h2>
              <p className="mt-1.5 text-sm text-ink-2">{chapter.description}</p>
              <p className="mt-2 text-[13px] text-ink-3">
                {chapter.minutes} min read, {chapter.skills.length} skills
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
