import Link from "next/link";
import { AGENTS } from "@/lib/taxonomy";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Browse",
    links: [
      { href: "/skills", label: "Skills" },
      { href: "/chapters", label: "Chapters" },
      { href: "/collections", label: "Collections" },
      { href: "/authors", label: "Authors" },
    ],
  },
  {
    title: "Agents",
    links: AGENTS.filter((a) => a.slug !== "universal").map((a) => ({
      href: `/agents/${a.slug}`,
      label: a.label,
    })),
  },
  {
    title: "Resources",
    links: [
      { href: "https://github.com", label: "GitHub" },
      { href: "/llms.txt", label: "llms.txt" },
      { href: "/submit", label: "Submit a skill" },
      { href: "/about", label: "About" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1140px] px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <span className="font-mono text-sm font-semibold tracking-wide text-primary">
              UI SKILLBOOK
            </span>
            <p className="mt-3 text-sm text-muted">
              Practical UI knowledge for humans and coding agents.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-border pt-6 font-mono text-[11px] text-muted">
          © 2026 UI Skillbook
        </div>
      </div>
    </footer>
  );
}
