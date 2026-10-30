import { COLOR_FAMILIES, getDesignMdsByColor } from "@/lib/design-md";
import { OG_SIZE } from "@/lib/og-image";
import { renderHubOgImage } from "@/lib/design-md-og";

export const alt = "Design systems by color on UI Skillbook";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return COLOR_FAMILIES.map((c) => ({ color: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ color: string }> }) {
  const { color } = await params;
  const family = COLOR_FAMILIES.find((c) => c.slug === color);
  return renderHubOgImage({
    eyebrow: "Design.md · Colors",
    title: family?.slug === "neutral" ? "Black and white design systems" : `${family?.label ?? "Brand"} design systems`,
    entries: getDesignMdsByColor(color),
  });
}
