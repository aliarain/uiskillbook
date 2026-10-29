import * as icons from "simple-icons";
import type { SimpleIcon as Icon } from "simple-icons";

const BY_SLUG = new Map<string, Icon>(Object.values(icons).map((icon) => [icon.slug, icon]));

export function getSimpleIcon(slug: string): Icon | undefined {
  return BY_SLUG.get(slug);
}

/** A Simple Icons brand mark (CC0) drawn in currentColor. Server-only: the map holds every icon. */
export function SimpleIcon({ slug, className = "" }: { slug: string; className?: string }) {
  const icon = getSimpleIcon(slug);
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={icon.path} />
    </svg>
  );
}
