import type { Metadata } from "next";
import { getAuthors } from "@/lib/skills";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Authors",
  description: "Everyone whose skills are curated in UI Skillbook.",
  path: "/authors",
});

export default function AuthorsPage() {
  const authors = getAuthors();

  return (
    <div className="mx-auto max-w-[680px] px-6 py-12">
      <h1 className="display text-4xl">Authors</h1>
      <p className="mt-2 text-secondary">Everyone whose skills are curated in the Skillbook.</p>

      <div className="mt-8 space-y-0.5">
        {authors.map((author) => (
          <div
            key={author.name}
            className="row flex items-center justify-between px-3 py-3.5"
          >
            {author.url ? (
              <a href={author.url} className="text-sm text-primary hover:text-accent">
                {author.name}
              </a>
            ) : (
              <span className="text-sm text-primary">{author.name}</span>
            )}
            <span className="text-[13px] text-muted tabular-nums">
              {author.count} {author.count === 1 ? "skill" : "skills"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
