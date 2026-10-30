import Link from "next/link";
import type { Metadata } from "next";
import { categorySlug, getAllDesignMds, getDesignMdCategories } from "@/lib/design-md";
import { BrandTile } from "@/components/brand-tile";
import { FilterChip } from "@/components/filter-chip";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Design.md",
  description: "DESIGN.md files that describe well-known brands' design language for coding agents.",
  path: "/design-md",
});

export default async function DesignMdIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category } = await searchParams;
  const categories = getDesignMdCategories();
  const active = categories.find((c) => c.slug === category);
  const entries = getAllDesignMds().filter((e) => !active || categorySlug(e.category) === active.slug);

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="display text-4xl">Design.md</h1>
      <p className="mt-2 max-w-2xl text-ink-2">
        DESIGN.md files that describe a brand&apos;s colors, type, spacing and components, so your coding agent can work in that style. We wrote them ourselves; the brands did not.
      </p>

      <nav aria-label="Filter by category" className="mt-8 flex flex-wrap gap-1.5">
        <FilterChip href="/design-md" active={!active}>
          All
        </FilterChip>
        {categories.map((c) => (
          <FilterChip
            key={c.slug}
            href={active?.slug === c.slug ? "/design-md" : `/design-md?category=${c.slug}`}
            active={active?.slug === c.slug}
          >
            {c.label}
            <span className="tabular-nums opacity-60">{c.count}</span>
          </FilterChip>
        ))}
      </nav>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/design-md/${entry.slug}`}
            className="card group flex items-start gap-4 p-5"
          >
            <BrandTile entry={entry} />
            <div className="min-w-0">
              <h2 className="text-base font-medium text-ink">{entry.name}</h2>
              <p className="text-xs text-ink-3">{entry.category}</p>
              <p className="mt-2 line-clamp-2 text-sm text-ink-2">{entry.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
