import { Star } from "lucide-react";
import { Button } from "@/siteplane/components/button";
import { getAllChapters } from "@/lib/chapters";
import { getAllCollections } from "@/lib/collections";
import { getRepoStars, GITHUB_URL } from "@/lib/brand";
import { getSiteplaneSkills } from "@/lib/skills";
import { groupAnchor } from "@/lib/siteplane";
import { AGENTS, CATEGORIES, ROLES } from "@/lib/taxonomy";
import { SearchTrigger } from "./search-trigger";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav, SiteNav, type NavSection } from "./site-nav";
import { SimpleIcon } from "./simple-icon";
import { Logo } from "./logo";

const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });

/** Desktop shows four plain links; the mobile sheet keeps the full directory. */
const PRIMARY: NavSection[] = [
  { label: "Skills", href: "/skills" },
  { label: "Components", href: "/siteplane-ui" },
  { label: "Design.md", href: "/design-md" },
  { label: "Learn", href: "/chapters" },
  { label: "Agents", href: "/agents" },
];

function mobileSections(): NavSection[] {
  return [
    {
      label: "Skills",
      href: "/skills",
      links: [
        ...ROLES.map((r) => ({ href: `/skills?role=${r.slug}`, label: `For ${r.label.toLowerCase()}` })),
        ...CATEGORIES.slice(0, 6).map((c) => ({ href: `/skills?category=${c.slug}`, label: c.label })),
      ],
      all: { href: "/skills", label: "All skills" },
    },
    {
      label: "Siteplane UI",
      href: "/siteplane-ui",
      links: [...new Set(getSiteplaneSkills().map((s) => s.siteplane.group))].map((group) => ({
        href: `/siteplane-ui#${groupAnchor(group)}`,
        label: group,
      })),
      all: { href: "/siteplane-ui", label: "All components" },
    },
    {
      label: "Siteplane UI",
      href: "/siteplane-ui",
      links: [...new Set(getSiteplaneSkills().map((s) => s.siteplane.group))].map((group) => ({
        href: `/siteplane-ui#${groupAnchor(group)}`,
        label: group,
      })),
      all: { href: "/siteplane-ui", label: "All components" },
    },
    { label: "Design.md", href: "/design-md" },
    {
      label: "Learn",
      href: "/chapters",
      links: getAllChapters().map((c) => ({ href: `/chapters/${c.slug}`, label: c.title })),
    },
    {
      label: "Collections",
      href: "/collections",
      links: getAllCollections().map((c) => ({ href: `/collections/${c.slug}`, label: c.title })),
    },
    {
      label: "Agents",
      href: "/agents",
      links: AGENTS.filter((a) => a.slug !== "universal").map((a) => ({ href: `/agents/${a.slug}`, label: a.label })),
    },
  ];
}

export async function SiteHeader() {
  const stars = await getRepoStars();
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center gap-6 px-6">
        <div className="flex items-center gap-1">
          <MobileNav sections={mobileSections()} />
          <Logo />
        </div>

        <SiteNav sections={PRIMARY} />

        <div className="ml-auto flex items-center gap-1.5">
          <SearchTrigger />
          <ThemeToggle />
          <Button
            size="sm"
            variant="inverse"
            render={<a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="UI Skillbook on GitHub" />}
          >
            <SimpleIcon slug="github" className="size-4" />
            {stars !== undefined && (
              <span className="flex items-center gap-1 tabular-nums">
                {compact.format(stars)}
                <Star aria-hidden className="size-3 fill-current" />
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
