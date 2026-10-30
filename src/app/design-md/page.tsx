import Link from "next/link";
import type { Metadata } from "next";
import {
  COLOR_FAMILIES,
  categorySlug,
  designMdGroup,
  getAllDesignMds,
  getDesignMdCategories,
  getDesignMdFonts,
  getDesignMdsByColor,
} from "@/lib/design-md";
import { FilterChip } from "@/components/filter-chip";
import { DesignMdGrid, DesignMdPagination, paginate } from "@/components/design-md-grid";
import { pageMetadata } from "@/lib/site";
import { Button } from "@/raptrx-ui/components/button";
import { Input } from "@/raptrx-ui/components/input";

export function generateMetadata(): Metadata {
  const count = getAllDesignMds().length;
  return pageMetadata({
    title: `DESIGN.md files: ${count.toLocaleString("en")} brand design systems for coding agents`,
    description: `${count.toLocaleString("en")} DESIGN.md files with the colors, fonts, spacing and components of brands and apps like Stripe, Linear and Apple. Browse by font or color and copy one for your agent.`,
    path: "/design-md",
  });
}

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
      (!needle || `${e.slug} ${e.name} ${e.description} ${e.fonts.join(" ")}`.toLowerCase().includes(needle))
  );
  const { page, pages, visible } = paginate(entries, params.page);
  const fonts = getDesignMdFonts();
  const browsing = !q && !active && page === 1;

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
        <Input id="design-md-q" name="q" defaultValue={q} placeholder="Search brands, apps and fonts…" className="min-w-0 flex-1" />
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

      {browsing && (
        <div className="mt-8 grid gap-6 border-y border-line py-6 lg:grid-cols-[1fr_2fr]">
          <section aria-labelledby="by-color">
            <h2 id="by-color" className="label">
              Browse by color
            </h2>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {COLOR_FAMILIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/design-md/color/${c.slug}`}
                    className="row flex items-center gap-2 rounded-button border border-line px-2.5 py-1.5 text-sm text-ink"
                  >
                    <span aria-hidden className="size-3 rounded-full" style={{ background: c.swatch }} />
                    {c.label}
                    <span className="text-ink-3 tabular-nums">{getDesignMdsByColor(c.slug).length}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="by-font">
            <h2 id="by-font" className="label">
              Popular fonts
            </h2>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {fonts.slice(0, 18).map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/design-md/font/${f.slug}`}
                    className="row flex items-center gap-2 rounded-button border border-line px-2.5 py-1.5 text-sm text-ink"
                  >
                    {f.name}
                    <span className="text-ink-3 tabular-nums">{f.entries.length}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/design-md/fonts" className="link flex rounded-button px-2.5 py-1.5 text-sm">
                  All {fonts.length} fonts
                </Link>
              </li>
            </ul>
          </section>
        </div>
      )}

      <p className="mt-6 text-sm text-ink-3 tabular-nums">
        {entries.length.toLocaleString("en")} {entries.length === 1 ? "file" : "files"}
        {q && <> matching &ldquo;{q}&rdquo;</>}
      </p>

      <h2 className="sr-only">Results</h2>
      <div className="mt-3">
        <DesignMdGrid entries={visible} />
      </div>

      <DesignMdPagination page={page} pages={pages} href={(n) => href({ q, category: active?.slug, page: n })} />
    </div>
  );
}
