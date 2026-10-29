import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/siteplane/components/button";
import { CopyButton } from "@/siteplane/components/copy-button";
import { getAllSkills, getAuthors, installTargets } from "@/lib/skills";
import { getAllDesignMds } from "@/lib/design-md";
import { CATEGORIES } from "@/lib/taxonomy";
import { MCP_URL, SITE_URL } from "@/lib/site";
import { SearchBar } from "../search-trigger";
import { InstallPrompt } from "../install-prompt";
import { FilterChip } from "../filter-chip";
import { AgentLogos } from "./agent-logos";

function Counts() {
  const skills = getAllSkills();
  return (
    <p className="text-sm text-ink-3 tabular-nums">
      {skills.length} skills from {getAuthors().length} authors, {getAllDesignMds().length} Design.md files
    </p>
  );
}

function CommandCard({ title, description, command, children }: {
  title: string;
  description: string;
  command: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="card flex flex-col gap-3 p-4">
      <div>
        <h2 className="text-[15px] font-medium text-ink">{title}</h2>
        <p className="mt-0.5 text-sm text-ink-3">{description}</p>
      </div>
      <div className="mt-auto flex h-10 items-center gap-2 rounded-button bg-panel pl-3 pr-1">
        <code className="min-w-0 flex-1 truncate font-mono text-[13px] text-ink">{command}</code>
        <CopyButton value={command} variant="ghost" aria-label={`Copy ${title}`} />
      </div>
      {children}
    </div>
  );
}

/** A: a narrow editorial column, two install cards, the agents that read them. */
export function HeroCatalog() {
  return (
    <section className="max-w-[760px] pt-14 pb-4">
      <h1 className="display text-4xl sm:text-5xl">UI skills your coding agent can actually use.</h1>
      <p className="mt-4 max-w-xl text-lg text-ink-2 text-pretty">
        A curated catalog of SKILL.md files and brand DESIGN.md files, with real GitHub stars and one-line installs.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <CommandCard title="MCP" description="Connect your agent to the whole catalog." command={MCP_URL}>
          <AgentLogos />
        </CommandCard>
        <CommandCard title="llms.txt" description="One file with every skill, for any LLM." command={`${SITE_URL}/llms.txt`} />
      </div>
      <div className="mt-5">
        <Counts />
      </div>
    </section>
  );
}

/** B: search is the product. A wide search field, then the topics people start from. */
export function HeroSearch() {
  const skills = getAllSkills();
  const topics = CATEGORIES.map((c) => ({ ...c, count: skills.filter((s) => s.categories.includes(c.slug)).length }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
  return (
    <section className="mx-auto max-w-[760px] pt-16 pb-4 text-center">
      <h1 className="display text-4xl sm:text-5xl">Find the right UI skill in seconds.</h1>
      <p className="mx-auto mt-4 max-w-lg text-lg text-ink-2 text-pretty">
        Search {skills.length} skills for coding agents by topic, role or agent.
      </p>
      <div className="mx-auto mt-8 max-w-xl">
        <SearchBar className="w-full" />
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-1.5">
        {topics.map((t) => (
          <FilterChip key={t.slug} href={`/skills?category=${t.slug}`} active={false}>
            {t.label}
            <span className="tabular-nums text-ink-3">{t.count}</span>
          </FilterChip>
        ))}
      </div>
    </section>
  );
}

/** C: headline and actions beside a real skill's install card, so the first screen shows the product. */
export function HeroPreview() {
  const skill = getAllSkills().find((s) => s.slug === "vercel-labs-web-design-guidelines") ?? getAllSkills()[0];
  return (
    <section className="grid items-center gap-10 pt-14 pb-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div>
        <h1 className="display text-4xl sm:text-5xl">Better interfaces, one skill at a time.</h1>
        <p className="mt-4 max-w-md text-lg text-ink-2 text-pretty">
          Pick a skill, paste one prompt, and your agent follows it. Works with Claude Code, Cursor, Codex and more.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          <Button size="lg" variant="inverse" render={<Link href="/skills" />}>
            Browse skills <ArrowRight aria-hidden />
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/design-md" />}>
            Design.md files
          </Button>
        </div>
        <div className="mt-6">
          <Counts />
        </div>
      </div>
      <div className="min-w-0">
        <p className="mb-2 text-sm text-ink-3">
          <Link href={`/skills/${skill.slug}`} className="link rounded-input">
            {skill.title}
          </Link>{" "}
          by {skill.author.name}
        </p>
        <InstallPrompt targets={installTargets(skill)} />
      </div>
    </section>
  );
}
