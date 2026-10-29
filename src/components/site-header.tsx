import Link from "next/link";
import { Button } from "@/siteplane/components/button";
import { getAllChapters } from "@/lib/chapters";
import { getAllCollections } from "@/lib/collections";
import { AGENTS, CATEGORIES, ROLES } from "@/lib/taxonomy";
import { SearchTrigger } from "./search-trigger";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav, SiteNav, type NavSection } from "./site-nav";
import { SimpleIcon } from "./simple-icon";
import { IconTooltip } from "./icon-tooltip";

const GITHUB_URL = "https://github.com/aliarain/uiskillbook";

function navSections(): NavSection[] {
  return [
    {
      label: "Skills",
      href: "/skills",
      links: [
        ...ROLES.map((r) => ({ href: `/skills?role=${r.slug}`, label: `For ${r.label.toLowerCase()}` })),
        ...CATEGORIES.slice(0, 7).map((c) => ({ href: `/skills?category=${c.slug}`, label: c.label })),
      ],
      all: { href: "/skills", label: "All skills" },
    },
    { label: "Design.md", href: "/design-md" },
    {
      label: "Learn",
      href: "/chapters",
      links: getAllChapters()
        .slice(0, 6)
        .map((c) => ({ href: `/chapters/${c.slug}`, label: c.title })),
      all: { href: "/chapters", label: "All guides" },
    },
    {
      label: "Collections",
      href: "/collections",
      links: getAllCollections().map((c) => ({ href: `/collections/${c.slug}`, label: c.title })),
    },
    {
      label: "Agents",
      href: "/agents",
      links: AGENTS.filter((a) => a.slug !== "universal").map((a) => ({
        href: `/agents/${a.slug}`,
        label: a.label,
      })),
      all: { href: "/agents", label: "All agents" },
    },
  ];
}

export function SiteHeader() {
  const sections = navSections();
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-1">
          <MobileNav sections={sections} />
          <Link href="/" className="rounded-button text-[15px] font-semibold tracking-[-0.01em] text-ink-strong">
            UI Skillbook
          </Link>
        </div>

        <SiteNav sections={sections} />

        <div className="flex items-center gap-1">
          <IconTooltip label="Source on GitHub">
            <Button
              aria-label="View source on GitHub"
              size="icon-md"
              variant="ghost"
              render={<a href={GITHUB_URL} target="_blank" rel="noreferrer" />}
            >
              <SimpleIcon slug="github" className="size-[18px]" />
            </Button>
          </IconTooltip>
          <ThemeToggle />
          <SearchTrigger />
        </div>
      </div>
    </header>
  );
}
