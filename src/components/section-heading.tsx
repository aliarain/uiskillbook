import Link from "next/link";

export function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="m6 3.5 4.5 4.5L6 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
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
        <h2 className="text-xl font-semibold tracking-[-0.01em] text-primary">
          {href ? (
            <Link href={href} className="inline-flex items-center gap-1 rounded-button">
              {title}
              <Chevron className="text-muted" />
            </Link>
          ) : (
            title
          )}
        </h2>
        {description && <p className="mt-1 text-sm text-secondary">{description}</p>}
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
