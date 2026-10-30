import { getDesignMdFont, getDesignMdFonts } from "@/lib/design-md";
import { OG_SIZE, ogText } from "@/lib/og-image";
import { renderHubOgImage } from "@/lib/design-md-og";

export const alt = "Design systems by font on UI Skillbook";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getDesignMdFonts().map((f) => ({ font: f.slug }));
}

export default async function Image({ params }: { params: Promise<{ font: string }> }) {
  const font = getDesignMdFont(decodeURIComponent((await params).font));
  const name = font && ogText(font.name);
  return renderHubOgImage({
    eyebrow: "Design.md · Fonts",
    title: name ? `Design systems set in ${name}` : "Design systems that share a font",
    entries: font?.entries ?? [],
  });
}
