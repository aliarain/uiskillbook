import Link from "next/link";
import { LogoMark } from "./logo-mark";
import { getAllSkills } from "@/lib/skills";
import { getAllChapters } from "@/lib/chapters";
import { getAllCollections } from "@/lib/collections";
import { AGENTS, CATEGORIES } from "@/lib/taxonomy";

const GITHUB_URL = "https://github.com/aliarain/uiskillbook";
const X_URL = "https://x.com/realaliarain";
const DIRECTORY_LIMIT = 6;

type FooterLink = { href: string; label: string; external?: boolean };
type FooterColumn = { title: string; links: FooterLink[]; all?: FooterLink };

function siteColumns(): FooterColumn[] {
  return [
    {
      title: "Discover",
      links: [
        { href: "/skills", label: "All skills" },
        { href: "/siteplane-ui", label: "Siteplane UI" },
        { href: "/chapters", label: "Playbook" },
        { href: "/collections", label: "Collections" },
        { href: "/design-md", label: "Design.md" },
        { href: "/authors", label: "Authors" },
        { href: "/agents", label: "Agents" },
      ],
    },
    {
      title: "Developers",
      links: [
        { href: "/about#cli", label: "CLI" },
        { href: "/api-docs", label: "API" },
        { href: "/mcp", label: "MCP server", external: true },
        { href: "/skills/registry.json", label: "Registry", external: true },
        { href: "/llms.txt", label: "llms.txt", external: true },
        { href: "/feed.xml", label: "RSS", external: true },
      ],
    },
    {
      title: "Community",
      links: [
        { href: GITHUB_URL, label: "GitHub", external: true },
        { href: X_URL, label: "X", external: true },
        { href: "/submit", label: "Submit a skill" },
        { href: "/about", label: "About" },
      ],
    },
  ];
}

function directoryColumns(): FooterColumn[] {
  const skills = getAllSkills();
  const topics = CATEGORIES.map((c) => ({
    ...c,
    count: skills.filter((s) => s.categories.includes(c.slug)).length,
  }))
    .sort((a, b) => b.count - a.count)
    .slice(0, DIRECTORY_LIMIT);

  return [
    {
      title: "Topics",
      links: topics.map((c) => ({ href: `/skills?category=${c.slug}`, label: c.label })),
      all: { href: "/skills", label: "All topics" },
    },
    {
      title: "Collections",
      links: getAllCollections()
        .slice(0, DIRECTORY_LIMIT)
        .map((c) => ({ href: `/collections/${c.slug}`, label: c.title })),
      all: { href: "/collections", label: "All collections" },
    },
    {
      title: "Agents",
      links: AGENTS.filter((a) => a.slug !== "universal")
        .slice(0, DIRECTORY_LIMIT)
        .map((a) => ({ href: `/agents/${a.slug}`, label: a.label })),
      all: { href: "/agents", label: "All agents" },
    },
    {
      title: "Popular skills",
      links: skills
        .filter((s) => s.curated)
        .slice(0, DIRECTORY_LIMIT)
        .map((s) => ({ href: `/skills/${s.slug}`, label: s.title })),
      all: { href: "/skills", label: "All skills" },
    },
    {
      title: "Playbook",
      links: getAllChapters()
        .slice(0, DIRECTORY_LIMIT)
        .map((c) => ({ href: `/chapters/${c.slug}`, label: c.title })),
      all: { href: "/chapters", label: "All guides" },
    },
  ];
}

const LINK_CLASS = "link rounded-control text-sm";

function FooterAnchor({ link, className = LINK_CLASS }: { link: FooterLink; className?: string }) {
  return link.external ? (
    <a href={link.href} target="_blank" rel="noreferrer" className={className}>
      {link.label}
    </a>
  ) : (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

function Column({ column }: { column: FooterColumn }) {
  return (
    <div className="min-w-0">
      <h3 className="label">
        {column.title}
      </h3>
      <ul className="mt-3 space-y-2">
        {column.links.map((link) => (
          <li key={link.href} className="truncate">
            <FooterAnchor link={link} />
          </li>
        ))}
        {column.all && (
          <li>
            <FooterAnchor
              link={column.all}
              className="rounded-control text-sm text-info-foreground underline-offset-2 hover:underline"
            />
          </li>
        )}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 hairline-t bg-muted">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link
              href="/"
              className="flex w-fit items-center gap-2 rounded-control text-[15px] font-semibold tracking-[-0.01em] text-foreground"
            >
              <LogoMark />
              UI Skillbook
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              The field guide for building better interfaces with AI. Built on{" "}
              <a href="https://ui.siteplane.io" target="_blank" rel="noreferrer" className="underline underline-offset-2">
                Siteplane UI
              </a>
              .
            </p>
          </div>
          {siteColumns().map((column) => (
            <Column key={column.title} column={column} />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 hairline-t pt-10 md:grid-cols-5">
          {directoryColumns().map((column) => (
            <Column key={column.title} column={column} />
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 hairline-t pt-6 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} UI Skillbook</span>
          <span>
            Built by{" "}
            <a
              href="https://aliarain.com"
              target="_blank"
              rel="noreferrer"
              className="link rounded-control"
            >
              Ali Arain
            </a>
            <span className="mx-2 text-muted-foreground/60" aria-hidden>/</span>
            <a
              href={X_URL}
              target="_blank"
              rel="noreferrer"
              className="link rounded-control"
            >
              @realaliarain
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
