import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDesignMdFont, getDesignMdFonts } from "@/lib/design-md";
import { DesignMdHub } from "@/components/design-md-hub";
import { pageMetadata } from "@/lib/site";
import { listNames } from "@/lib/design-md-copy";

type Props = { params: Promise<{ font: string }>; searchParams: Promise<{ page?: string }> };

export function generateStaticParams() {
  return getDesignMdFonts().map((f) => ({ font: f.slug }));
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const font = getDesignMdFont(decodeURIComponent((await params).font));
  if (!font) return {};
  const page = Number((await searchParams).page) || 1;
  return pageMetadata({
    title: `${font.name} design systems: ${font.entries.length} DESIGN.md files`,
    description: `${font.entries.length} brand and app DESIGN.md files set in ${font.name}, including ${listNames(font.entries)}. Copy one for your coding agent.`,
    path: `/design-md/font/${font.slug}${page > 1 ? `?page=${page}` : ""}`,
    image: `/design-md/font/${encodeURIComponent(font.slug)}/opengraph-image`,
  });
}

export default async function FontHubPage({ params, searchParams }: Props) {
  const font = getDesignMdFont(decodeURIComponent((await params).font));
  if (!font) notFound();
  const others = getDesignMdFonts().filter((f) => f.slug !== font.slug).slice(0, 30);
  return (
    <DesignMdHub
      title={`Design systems set in ${font.name}`}
      intro={
        <p>
          Brands and apps whose DESIGN.md names {font.name} as a typeface, including {listNames(font.entries)}. Each file
          also lists the sizes, weights and colors that go with it, so your coding agent can match the whole style.
        </p>
      }
      path={`/design-md/font/${font.slug}`}
      crumb={{ label: "Fonts", href: "/design-md/fonts" }}
      entries={font.entries}
      page={(await searchParams).page}
      related={{
        heading: "Other fonts",
        links: [
          ...others.map((f) => ({ href: `/design-md/font/${f.slug}`, label: f.name, count: f.entries.length })),
          { href: "/design-md/fonts", label: "All fonts" },
        ],
      }}
    />
  );
}
