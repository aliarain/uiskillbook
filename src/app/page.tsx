import Link from "next/link";
import { getAllSkills, getAuthors } from "@/lib/skills";
import { getAllChapters } from "@/lib/chapters";
import { getAllDesignMds } from "@/lib/design-md";
import { BrandTile } from "@/components/brand-tile";
import { CATEGORIES, categoryLabel } from "@/lib/taxonomy";
import { SkillRow } from "@/components/skill-row";
import { TaskSelector } from "@/components/task-selector";
import { SearchBar } from "@/components/search-trigger";
import { InlineCode } from "@/components/inline-code";
import { JsonLd } from "@/components/json-ld";
import { AddToAgent } from "@/components/add-to-agent";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export default function Home() {
  const skills = getAllSkills();
  const authors = getAuthors();
  const chapters = getAllChapters();
  const designMds = getAllDesignMds();

  const recommended = skills.filter((s) => s.curated).slice(0, 8);
  const latest = [...skills]
    .sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1))
    .slice(0, 6);

  const categoryCounts = CATEGORIES.map((c) => ({
    ...c,
    count: skills.filter((s) => s.categories.includes(c.slug)).length,
  }));

  return (
    <div className="mx-auto max-w-[1140px] px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          description: SITE_DESCRIPTION,
          potentialAction: {
            "@type": "SearchAction",
            target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/skills?q={search_term_string}` },
            "query-input": "required name=search_term_string",
          },
        }}
      />
      {/* Hero */}
      <section className="card mt-8 px-8 py-16 sm:mt-12 sm:px-14 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Field guide 001
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
          The field guide for building better interfaces with AI.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-secondary">
          Curated UI skills, rules, and patterns for humans and coding agents.
          Search what you need, not what&apos;s trending.
        </p>

        <div className="mt-8 max-w-xl">
          <SearchBar />
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 font-mono text-sm text-muted tabular-nums">
          <span>{skills.length} skills</span>
          <span>{authors.length} authors</span>
          <span>{CATEGORIES.length} categories</span>
        </div>
      </section>

      <div className="mt-8">
        <AddToAgent />
      </div>

      {/* Design.md */}
      <section className="pt-14">
        <Link
          href="/design-md"
          className="group inline-flex items-center gap-1.5 text-xl font-semibold tracking-tight text-primary"
        >
          Design.md
          <span aria-hidden className="text-muted transition-transform group-hover:translate-x-0.5">
            ›
          </span>
        </Link>
        <p className="mt-1 text-sm text-secondary">
          Brand design languages as DESIGN.md files your agent can follow.
        </p>
        <ul className="mt-5 flex flex-wrap gap-3">
          {designMds.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/design-md/${entry.slug}`}
                title={entry.name}
                aria-label={`${entry.name} DESIGN.md`}
                className="group block rounded-xl"
              >
                <BrandTile entry={entry} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* What are you building */}
      <section className="py-14">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          What are you building?
        </h2>
        <div className="mt-4">
          <TaskSelector />
        </div>
      </section>

      {/* Recommended */}
      <section className="py-8">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
            Recommended
          </h2>
          <Link href="/skills" className="text-sm text-secondary hover:text-primary">
            Browse all skills →
          </Link>
        </div>
        <div className="mt-3 space-y-0.5">
          {recommended.map((skill, i) => (
            <SkillRow key={skill.slug} skill={skill} index={i + 1} />
          ))}
        </div>
      </section>

      {/* Latest additions */}
      <section className="py-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Latest additions
        </h2>
        <div className="mt-3 space-y-0.5">
          {latest.map((skill, i) => (
            <SkillRow key={skill.slug} skill={skill} index={i + 1} />
          ))}
        </div>
      </section>

      {/* Learn */}
      <section className="py-14">
        <Link
          href="/chapters"
          className="group inline-flex items-center gap-1.5 text-xl font-semibold tracking-tight text-primary"
        >
          Learn
          <span aria-hidden className="text-muted transition-transform group-hover:translate-x-0.5">
            ›
          </span>
        </Link>
        <p className="mt-1 text-sm text-secondary">
          Short playbook guides for the details agents usually miss.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {chapters.map((chapter) => (
            <Link key={chapter.slug} href={`/chapters/${chapter.slug}`} className="card block p-5">
              <h3 className="text-base font-medium text-primary text-balance">
                {chapter.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-secondary">
                <InlineCode text={chapter.tip} />
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by subject */}
      <section className="py-14">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Browse by subject
        </h2>
        <div className="mt-4 grid gap-x-4 gap-y-1 sm:grid-cols-2">
          {categoryCounts.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/skills?category=${cat.slug}`}
              className="row flex items-center justify-between px-3 py-3 text-sm"
            >
              <span className="text-secondary group-hover:text-primary">
                <span className="mr-3 font-mono text-xs text-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {categoryLabel(cat.slug)}
              </span>
              <span className="font-mono text-xs text-muted tabular-nums">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
