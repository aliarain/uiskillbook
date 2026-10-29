import Link from "next/link";
import type { Metadata } from "next";
import { getAllDesignMds } from "@/lib/design-md";
import { BrandTile } from "@/components/brand-tile";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Design.md",
  description: "DESIGN.md files that describe well-known brands' design language for coding agents.",
  path: "/design-md",
});

export default function DesignMdIndexPage() {
  const entries = getAllDesignMds();

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="display text-4xl">Design.md</h1>
      <p className="mt-2 max-w-2xl text-secondary">
        Drop-in DESIGN.md files that describe a brand&apos;s colors, type, spacing and components,
        so your coding agent can work in that style. Independent write-ups, not official brand
        assets.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/design-md/${entry.slug}`}
            className="card group flex items-start gap-4 p-5"
          >
            <BrandTile entry={entry} />
            <div className="min-w-0">
              <h2 className="text-base font-medium text-primary">{entry.name}</h2>
              <p className="text-xs text-muted">{entry.category}</p>
              <p className="mt-2 line-clamp-2 text-sm text-secondary">{entry.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
