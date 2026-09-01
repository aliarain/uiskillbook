import type { Metadata } from "next";
import { getAuthors } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Authors",
  description: "Everyone whose skills are curated in UI Skillbook.",
};

export default function AuthorsPage() {
  const authors = getAuthors();

  return (
    <div className="mx-auto max-w-[680px] px-6 py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-primary">Authors</h1>
      <p className="mt-2 text-secondary">Everyone whose skills are curated in the Skillbook.</p>

      <div className="mt-8">
        {authors.map((author) => (
          <div
            key={author.name}
            className="flex items-center justify-between border-b border-border py-4"
          >
            {author.url ? (
              <a href={author.url} className="text-sm text-primary hover:text-accent">
                {author.name}
              </a>
            ) : (
              <span className="text-sm text-primary">{author.name}</span>
            )}
            <span className="font-mono text-xs text-muted tabular-nums">
              {author.count} {author.count === 1 ? "skill" : "skills"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
