import Link from "next/link";

/** Linked trail above a detail page title. The last crumb may be plain text. */
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && (
              <span className="text-faint" aria-hidden>
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="rounded-input underline-offset-2 transition-colors hover:text-primary hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
