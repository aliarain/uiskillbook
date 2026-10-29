import type { DesignMd } from "@/lib/design-md";

/** Black or white, whichever reads better on the brand color (WCAG relative luminance). */
function foregroundFor(hex: string) {
  const channels = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  return luminance > 0.18 ? "#0a0a0a" : "#ffffff";
}

/** Rounded-square brand mark: neutral until its link is hovered or focused. */
export function BrandTile({ entry, size = "md" }: { entry: DesignMd; size?: "md" | "lg" }) {
  const box = size === "lg" ? "size-16 rounded-feature text-2xl" : "size-12 rounded-card text-lg";
  return (
    <span
      style={
        { "--brand": entry.color, "--brand-foreground": foregroundFor(entry.color) } as React.CSSProperties
      }
      className={`brand-tile flex shrink-0 items-center justify-center border border-border bg-surface font-medium text-muted ${box}`}
      aria-hidden
    >
      {entry.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={entry.logo} alt="" className="size-3/5 object-contain grayscale" />
      ) : (
        entry.name.charAt(0)
      )}
    </span>
  );
}
