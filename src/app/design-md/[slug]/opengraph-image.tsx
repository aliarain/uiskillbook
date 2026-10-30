import { getDesignMdBySlug, getOriginalDesignMds } from "@/lib/design-md";
import { OG_SIZE, ogText, renderOgImage } from "@/lib/og-image";

export const alt = "DESIGN.md file on UI Skillbook";
export const size = OG_SIZE;
export const contentType = "image/png";

// Like the page: originals at build time, community files on first request.
export function generateStaticParams() {
  return getOriginalDesignMds().map((d) => ({ slug: d.slug }));
}

const titleCase = (slug: string) => slug.split("-").map((w) => w[0]?.toUpperCase() + w.slice(1)).join(" ");

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getDesignMdBySlug(slug);
  const fonts = (entry?.fonts ?? []).map((f) => ogText(f)).filter(Boolean).slice(0, 3);
  return renderOgImage({
    eyebrow: entry?.origin === "community" ? `DESIGN.md · ${entry.category}` : "DESIGN.md · UI Skillbook",
    title: `${ogText(entry?.name ?? slug, titleCase(slug))} DESIGN.md`,
    subtitle: entry ? ogText(entry.description) : undefined,
    swatches: entry ? [...new Set([entry.color.toLowerCase(), ...entry.colors.map((c) => c.hex)])].slice(0, 8) : undefined,
    meta: fonts.length ? `Set in ${fonts.join(", ")}` : undefined,
  });
}
