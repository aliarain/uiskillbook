import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categorySlug, designMdGroup, getAllDesignMds, getDesignMdCategories } from "@/lib/design-md";
import { DesignMdHub } from "@/components/design-md-hub";
import { pageMetadata } from "@/lib/site";
import { listNames } from "@/lib/design-md-copy";

type Props = { params: Promise<{ group: string }>; searchParams: Promise<{ page?: string }> };

/** What each group is, in a sentence. Groups without one get a generic line. */
const INTROS: Record<string, string> = {
  "ui-skillbook": "DESIGN.md files written by UI Skillbook, with each brand's logo and website.",
  brands: "Web brands and products from the English-language community collections, from developer tools to banks.",
  japan: "Japanese brands, written in Japanese, from the awesome-design-md-jp collection, including their Japanese font stacks.",
  "ios-apps": "iPhone apps, described for building native iOS screens in the same style.",
};

export function generateStaticParams() {
  return getDesignMdCategories().map((c) => ({ group: c.slug }));
}

function load(slug: string) {
  const group = getDesignMdCategories().find((c) => c.slug === slug);
  if (!group) return null;
  return { group, entries: getAllDesignMds().filter((e) => categorySlug(designMdGroup(e)) === slug) };
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const found = load((await params).group);
  if (!found) return {};
  const page = Number((await searchParams).page) || 1;
  return pageMetadata({
    title: `${found.group.label} DESIGN.md files (${found.entries.length})`,
    description: `${found.entries.length} DESIGN.md files: ${INTROS[found.group.slug] ?? `the ${found.group.label} group.`} Including ${listNames(found.entries)}.`,
    path: `/design-md/group/${found.group.slug}${page > 1 ? `?page=${page}` : ""}`,
  });
}

export default async function GroupHubPage({ params, searchParams }: Props) {
  const found = load((await params).group);
  if (!found) notFound();
  const { group, entries } = found;
  return (
    <DesignMdHub
      title={`${group.label} Design.md files`}
      intro={<p>{INTROS[group.slug] ?? `Design.md files in the ${group.label} group.`}</p>}
      path={`/design-md/group/${group.slug}`}
      crumb={{ label: group.label }}
      entries={entries}
      page={(await searchParams).page}
      related={{
        heading: "Other groups",
        links: getDesignMdCategories()
          .filter((c) => c.slug !== group.slug)
          .map((c) => ({ href: `/design-md/group/${c.slug}`, label: c.label, count: c.count })),
      }}
    />
  );
}
