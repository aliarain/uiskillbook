import Link from "next/link";
import type { DesignMd } from "@/lib/design-md";
import { BrandTile } from "@/components/brand-tile";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/raptrx-ui/components/pagination";

/** Card grid of Design.md files. `headingLevel` keeps the outline right on pages where the grid sits under an h2. */
export function DesignMdGrid({ entries, headingLevel = "h3" }: { entries: DesignMd[]; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <Link key={entry.slug} href={`/design-md/${entry.slug}`} className="card group flex items-start gap-4 p-4">
          <BrandTile entry={entry} />
          <div className="min-w-0">
            <Heading className="truncate text-base font-medium text-ink" lang={entry.language}>
              {entry.name}
            </Heading>
            <p className="truncate text-xs text-ink-3">
              {entry.origin === "original" ? "UI Skillbook" : entry.category}
              {entry.fonts[0] && <> · {entry.fonts[0]}</>}
            </p>
            <p className="mt-1.5 line-clamp-2 text-sm text-ink-2" lang={entry.language}>
              {entry.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export const DESIGN_MD_PAGE_SIZE = 48;

/** The requested page of `entries`, clamped to the range that exists. */
export function paginate<T>(entries: T[], requested: unknown, size = DESIGN_MD_PAGE_SIZE) {
  const pages = Math.max(1, Math.ceil(entries.length / size));
  const page = Math.min(pages, Math.max(1, Number(requested) || 1));
  return { page, pages, visible: entries.slice((page - 1) * size, page * size) };
}

/** Numbered pagination whose links come from `href(page)`. */
export function DesignMdPagination({ page, pages, href }: { page: number; pages: number; href: (page: number) => string }) {
  if (pages <= 1) return null;
  const numbers = [...new Set([1, page - 1, page, page + 1, pages])].filter((n) => n >= 1 && n <= pages).sort((a, b) => a - b);
  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious disabled={page === 1} render={<Link href={href(page - 1)} />} />
        </PaginationItem>
        {numbers.map((n) => (
          <PaginationItem key={n}>
            <PaginationLink active={n === page} render={<Link href={href(n)} />}>
              {n}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext disabled={page === pages} render={<Link href={href(page + 1)} />} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
