import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COLOR_FAMILIES, getDesignMdsByColor } from "@/lib/design-md";
import { DesignMdHub } from "@/components/design-md-hub";
import { pageMetadata } from "@/lib/site";
import { listNames } from "@/lib/design-md-copy";

type Props = { params: Promise<{ color: string }>; searchParams: Promise<{ page?: string }> };

export function generateStaticParams() {
  return COLOR_FAMILIES.map((c) => ({ color: c.slug }));
}

function phrase(family: (typeof COLOR_FAMILIES)[number]) {
  return family.slug === "neutral" ? "black, white or gray" : family.label.toLowerCase();
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { color } = await params;
  const family = COLOR_FAMILIES.find((c) => c.slug === color);
  if (!family) return {};
  const entries = getDesignMdsByColor(family.slug);
  const page = Number((await searchParams).page) || 1;
  return pageMetadata({
    title: `${family.label} brand design systems: ${entries.length} DESIGN.md files`,
    description: `${entries.length} DESIGN.md files for brands and apps whose main color is ${phrase(family)}, including ${listNames(entries)}. Colors, type and components for your coding agent.`,
    path: `/design-md/color/${family.slug}${page > 1 ? `?page=${page}` : ""}`,
    image: `/design-md/color/${family.slug}/opengraph-image`,
  });
}

export default async function ColorHubPage({ params, searchParams }: Props) {
  const { color } = await params;
  const family = COLOR_FAMILIES.find((c) => c.slug === color);
  if (!family) notFound();
  const entries = getDesignMdsByColor(family.slug);
  return (
    <DesignMdHub
      title={family.slug === "neutral" ? "Black and white design systems" : `${family.label} design systems`}
      intro={
        <p>
          Brands and apps whose main color is {phrase(family)}, including {listNames(entries)}. The family comes from each
          file&apos;s primary or accent color; open a file to see its full palette.
        </p>
      }
      path={`/design-md/color/${family.slug}`}
      crumb={{ label: family.label }}
      entries={entries}
      page={(await searchParams).page}
      related={{
        heading: "Other colors",
        links: COLOR_FAMILIES.filter((c) => c.slug !== family.slug).map((c) => ({
          href: `/design-md/color/${c.slug}`,
          label: c.label,
          count: getDesignMdsByColor(c.slug).length,
        })),
      }}
    />
  );
}
