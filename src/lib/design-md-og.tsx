import type { DesignMd } from "@/lib/design-md";
import { ogText, renderOgImage } from "@/lib/og-image";

/** Share card for a hub page: the count, a few Latin-script names and the brands' main colors. */
export function renderHubOgImage({ eyebrow, title, entries }: { eyebrow: string; title: string; entries: DesignMd[] }) {
  const names = entries.map((e) => ogText(e.name)).filter(Boolean).slice(0, 3);
  return renderOgImage({
    eyebrow,
    title,
    subtitle: `${entries.length.toLocaleString("en")} DESIGN.md ${entries.length === 1 ? "file" : "files"}${
      names.length ? `, including ${names.join(", ")}` : ""
    }.`,
    swatches: [...new Set(entries.map((e) => e.color.toLowerCase()))].slice(0, 8),
  });
}
