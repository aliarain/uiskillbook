import { categorySlug, designMdGroup, getAllDesignMds, getDesignMdCategories } from "@/lib/design-md";
import { OG_SIZE } from "@/lib/og-image";
import { renderHubOgImage } from "@/lib/design-md-og";

export const alt = "Design.md group on UI Skillbook";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getDesignMdCategories().map((c) => ({ group: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ group: string }> }) {
  const { group } = await params;
  const label = getDesignMdCategories().find((c) => c.slug === group)?.label ?? "Design.md";
  return renderHubOgImage({
    eyebrow: "Design.md · Groups",
    title: `${label} Design.md files`,
    entries: getAllDesignMds().filter((e) => categorySlug(designMdGroup(e)) === group),
  });
}
