import Link from "next/link";
import { AGENTS } from "@/lib/taxonomy";

const GITHUB_URL = "https://github.com/aliarain/uiskillbook";

const COLUMNS: { title: string; links: { href: string; label: string; external?: boolean }[] }[] = [
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
      { href: GITHUB_URL, label: "GitHub", external: true },
      { href: "/llms.txt", label: "llms.txt", external: true },
      { href: "/skills/registry.json", label: "registry.json", external: true },
      { href: "/mcp", label: "MCP", external: true },
      { href: "/submit", label: "Submit a skill" },
      { href: "/about", label: "About" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-[1140px] px-6 py-14">
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
                {col.links.map((link) =>
                  link.external ? (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-secondary transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-secondary transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 font-mono text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 UI Skillbook</span>
          <span>
            Built by{" "}
            <a
              href="https://aliarain.com"
              target="_blank"
              rel="noreferrer"
              className="text-secondary transition-colors hover:text-accent"
            >
              Ali Arain
            </a>{" "}
            ·{" "}
            <a
              href="https://x.com/realaliarain"
              target="_blank"
              rel="noreferrer"
              className="text-secondary transition-colors hover:text-accent"
            >
              @realaliarain
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
