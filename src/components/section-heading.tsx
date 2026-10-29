import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/siteplane/components/button";

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
        <h2 className="text-xl font-semibold tracking-[-0.01em] text-foreground">
          {href ? (
            <Link href={href} className="inline-flex items-center gap-1 rounded-control">
              {title}
              <Chevron className="text-muted-foreground" />
            </Link>
          ) : (
            title
          )}
        </h2>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
      {href && allLabel && (
        <Button variant="ghost" size="sm" className="hidden sm:inline-flex" render={<Link href={href} />}>
          {allLabel}
          <Chevron />
        </Button>
      )}
    </div>
  );
}
