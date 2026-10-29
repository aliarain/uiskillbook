import type { DesignMd } from "@/lib/design-md";

/** Rounded-square brand mark: neutral until hovered, then the brand color. */
export function BrandTile({ entry, size = "md" }: { entry: DesignMd; size?: "md" | "lg" }) {
  const box = size === "lg" ? "size-16 rounded-2xl text-2xl" : "size-12 rounded-xl text-lg";
  return (
    <span
      style={{ "--brand": entry.color } as React.CSSProperties}
      className={`brand-tile flex shrink-0 items-center justify-center border border-border bg-surface font-semibold text-secondary ${box}`}
      aria-hidden
    >
      {entry.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={entry.logo} alt="" className="size-3/5 object-contain" />
      ) : (
        entry.name.charAt(0)
      )}
    </span>
  );
}
