import Link from "next/link";
import type { Metadata } from "next";
import { FONT_HUB_MIN, getDesignMdFonts } from "@/lib/design-md";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { pageMetadata } from "@/lib/site";

export function generateMetadata(): Metadata {
  const fonts = getDesignMdFonts();
  return pageMetadata({
    title: `Fonts in ${fonts.length} brand design systems`,
    description: `Every typeface named by at least ${FONT_HUB_MIN} DESIGN.md files, from ${fonts
      .slice(0, 3)
      .map((f) => f.name)
      .join(", ")} to custom brand families. See which brands use each one.`,
    path: "/design-md/fonts",
  });
}

export default function FontsPage() {
  const fonts = getDesignMdFonts();
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <Breadcrumbs items={[{ label: "Design.md", href: "/design-md" }, { label: "Fonts" }]} />
      <h1 className="display mt-4 text-4xl">Fonts</h1>
      <p className="mt-2 max-w-2xl text-ink-2 text-pretty">
        {fonts.length} typefaces named by at least {FONT_HUB_MIN} DESIGN.md files, most used first. Open one to see the
        brands and apps set in it.
      </p>
      <ul className="mt-8 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
        {fonts.map((f) => (
          <li key={f.slug} className="border-b border-line">
            <Link
              href={`/design-md/font/${f.slug}`}
              className="row flex items-baseline justify-between gap-3 rounded-input px-2 py-2.5 text-sm"
            >
              <span className="truncate text-ink">{f.name}</span>
              <span className="shrink-0 text-ink-3 tabular-nums">{f.entries.length}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
