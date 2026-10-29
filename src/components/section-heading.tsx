import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Chevron({ className = "" }: { className?: string }) {
  return <ChevronRight size={16} strokeWidth={1.75} aria-hidden className={className} />;
}

/** Section title (20px, links to its index) with an optional one-line description. */
export function SectionHeading({
  title,
  href,
  description,
  allLabel,
}: {
  title: string;
  href?: string;
  description?: string;
  allLabel?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-xl font-semibold tracking-[-0.01em] text-ink">
          {href ? (
            <Link href={href} className="inline-flex items-center gap-1 rounded-button">
              {title}
              <Chevron className="text-ink-3" />
            </Link>
          ) : (
            title
          )}
        </h2>
        {description && <p className="mt-1 text-sm text-ink-2">{description}</p>}
      </div>
      {href && allLabel && (
        <Link href={href} className="link hidden shrink-0 items-center gap-1 text-sm sm:inline-flex">
          {allLabel}
          <Chevron />
        </Link>
      )}
    </div>
  );
}
