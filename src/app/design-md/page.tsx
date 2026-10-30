import Link from "next/link";
import type { Metadata } from "next";
import { categorySlug, designMdGroup, getAllDesignMds, getDesignMdCategories } from "@/lib/design-md";
import { BrandTile } from "@/components/brand-tile";
import { FilterChip } from "@/components/filter-chip";
import { pageMetadata } from "@/lib/site";
import { Button } from "@/raptrx-ui/components/button";
import { Input } from "@/raptrx-ui/components/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/raptrx-ui/components/pagination";

export const metadata: Metadata = pageMetadata({
  title: "Design.md",
  description: "Over 1,400 DESIGN.md files describing brand and app design languages for coding agents.",
  path: "/design-md",
});

const PAGE_SIZE = 48;

function href(params: { q?: string; category?: string; page?: number }) {
  const sp = new URLSearchParams();
  if (params.q) sp.set("q", params.q);
  if (params.category) sp.set("category", params.category);
  if (params.page && params.page > 1) sp.set("page", String(params.page));
  const qs = sp.toString();
  return qs ? `/design-md?${qs}` : "/design-md";
}

export default async function DesignMdIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q.trim() : "";
  const category = typeof params.category === "string" ? params.category : undefined;
  const categories = getDesignMdCategories();
  const active = categories.find((c) => c.slug === category);
  const all = getAllDesignMds();
  const needle = q.toLowerCase();
  const entries = all.filter(
    (e) =>
      (!active || categorySlug(designMdGroup(e)) === active.slug) &&
      (!needle || `${e.slug} ${e.name} ${e.description}`.toLowerCase().includes(needle))
  );
  const pages = Math.max(1, Math.ceil(entries.length / PAGE_SIZE));
  const page = Math.min(pages, Math.max(1, Number(params.page) || 1));
  const visible = entries.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const pageNumbers = [...new Set([1, page - 1, page, page + 1, pages])].filter((n) => n >= 1 && n <= pages).sort((a, b) => a - b);

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="display text-4xl">Design.md</h1>
      <p className="mt-2 max-w-2xl text-ink-2 text-pretty">
        {all.length.toLocaleString("en")} DESIGN.md files that describe a brand&apos;s or app&apos;s colors, type,
        spacing and components, so your coding agent can work in that style. Our own write-ups sit beside community
        files from MIT-licensed collections, each credited on its page and scanned before listing.
      </p>

      <form action="/design-md" className="mt-8 flex max-w-xl gap-2" role="search">
        {active && <input type="hidden" name="category" value={active.slug} />}
        <label htmlFor="design-md-q" className="sr-only">
          Search Design.md files
        </label>
        <Input id="design-md-q" name="q" defaultValue={q} placeholder="Search brands and apps…" className="min-w-0 flex-1" />
        <Button type="submit" variant="outline">
          Search
        </Button>
      </form>

      <nav aria-label="Filter by group" className="mt-4 flex flex-wrap gap-1.5">
        <FilterChip href={href({ q })} active={!active}>
          All
          <span className="tabular-nums opacity-60">{all.length}</span>
        </FilterChip>
        {categories.map((c) => (
          <FilterChip key={c.slug} href={href({ q, category: active?.slug === c.slug ? undefined : c.slug })} active={active?.slug === c.slug}>
            {c.label}
            <span className="tabular-nums opacity-60">{c.count}</span>
          </FilterChip>
        ))}
      </nav>

      <p className="mt-6 text-sm text-ink-3 tabular-nums">
        {entries.length.toLocaleString("en")} {entries.length === 1 ? "file" : "files"}
        {q && <> matching &ldquo;{q}&rdquo;</>}
      </p>

      <h2 className="sr-only">Results</h2>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((entry) => (
          <Link key={entry.slug} href={`/design-md/${entry.slug}`} className="card group flex items-start gap-4 p-4">
            <BrandTile entry={entry} />
            <div className="min-w-0">
              <h3 className="truncate text-base font-medium text-ink" lang={entry.language}>
                {entry.name}
              </h3>
              <p className="text-xs text-ink-3">
                {entry.origin === "original" ? "UI Skillbook" : entry.category}
              </p>
              <p className="mt-1.5 line-clamp-2 text-sm text-ink-2" lang={entry.language}>
                {entry.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {pages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious disabled={page === 1} render={<Link href={href({ q, category: active?.slug, page: page - 1 })} />} />
            </PaginationItem>
            {pageNumbers.map((n) => (
              <PaginationItem key={n}>
                <PaginationLink active={n === page} render={<Link href={href({ q, category: active?.slug, page: n })} />}>
                  {n}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext disabled={page === pages} render={<Link href={href({ q, category: active?.slug, page: page + 1 })} />} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
