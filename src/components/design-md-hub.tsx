import Link from "next/link";
import type { DesignMd } from "@/lib/design-md";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { DESIGN_MD_PAGE_SIZE, DesignMdGrid, DesignMdPagination, paginate } from "@/components/design-md-grid";
import { SITE_URL } from "@/lib/site";

/** A listing page for one font, color family or group of Design.md files. */
export function DesignMdHub({
  title,
  intro,
  path,
  crumb,
  entries,
  page: requested,
  related,
}: {
  title: string;
  intro: React.ReactNode;
  path: string;
  crumb: { label: string; href?: string };
  entries: DesignMd[];
  page: unknown;
  /** Links to sibling hubs, shown under the grid. */
  related?: { heading: string; links: { href: string; label: string; count?: number }[] };
}) {
  const { page, pages, visible } = paginate(entries, requested);
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: title,
          url: `${SITE_URL}${path}`,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: entries.length,
            itemListElement: visible.map((e, i) => ({
              "@type": "ListItem",
              position: (page - 1) * DESIGN_MD_PAGE_SIZE + i + 1,
              url: `${SITE_URL}/design-md/${e.slug}`,
              name: `${e.name} DESIGN.md`,
            })),
          },
        }}
      />
      <Breadcrumbs items={[{ label: "Design.md", href: "/design-md" }, crumb]} />
      <h1 className="display mt-4 text-4xl">{title}</h1>
      <div className="mt-2 max-w-2xl text-ink-2 text-pretty">{intro}</div>
      <p className="mt-6 text-sm text-ink-3 tabular-nums">
        {entries.length.toLocaleString("en")} {entries.length === 1 ? "file" : "files"}
        {pages > 1 && <>, page {page} of {pages}</>}
      </p>
      <h2 className="sr-only">Files</h2>
      <div className="mt-3">
        <DesignMdGrid entries={visible} />
      </div>
      <DesignMdPagination page={page} pages={pages} href={(n) => (n > 1 ? `${path}?page=${n}` : path)} />
      {related && related.links.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-semibold tracking-[-0.01em] text-ink">{related.heading}</h2>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {related.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-link underline-offset-2 hover:underline">
                  {l.label}
                </Link>
                {l.count !== undefined && <span className="ml-1 text-ink-3 tabular-nums">{l.count}</span>}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
