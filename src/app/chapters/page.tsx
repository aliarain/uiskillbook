import Link from "next/link";
import type { Metadata } from "next";
import { getAllChapters } from "@/lib/chapters";

export const metadata: Metadata = {
  title: "Chapters",
  description: "Multi-skill lessons for practical interface problems.",
};

export default function ChaptersPage() {
  const chapters = getAllChapters();

  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-primary">Chapters</h1>
      <p className="mt-2 text-secondary">
        A chapter combines multiple skills into a practical lesson.
      </p>

      <div className="mt-8">
        {chapters.map((chapter) => (
          <Link
            key={chapter.slug}
            href={`/chapters/${chapter.slug}`}
            className="group flex items-start justify-between gap-4 border-b border-border py-6 transition-colors hover:bg-surface"
          >
            <div>
              <span className="font-mono text-xs text-muted">
                Chapter {String(chapter.number).padStart(2, "0")}
              </span>
              <h2 className="mt-1 text-lg font-medium text-primary">{chapter.title}</h2>
              <p className="mt-1.5 text-sm text-secondary">{chapter.description}</p>
              <p className="mt-2 font-mono text-xs text-muted">
                {chapter.minutes} min · {chapter.skills.length} skills
              </p>
            </div>
            <span className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
