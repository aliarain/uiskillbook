import Link from "next/link";
import { getAllSkills, getAuthors } from "@/lib/skills";
import { getAllChapters } from "@/lib/chapters";
import { getAllDesignMds } from "@/lib/design-md";
import { BrandTile } from "@/components/brand-tile";
import { CATEGORIES, categoryLabel } from "@/lib/taxonomy";
import { SkillCard } from "@/components/skill-card";
import { SectionHeading } from "@/components/section-heading";
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

  const recommended = skills.filter((s) => s.curated).slice(0, 6);
  const latest = [...skills]
    .sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1))
    .slice(0, 6);

  const categoryCounts = CATEGORIES.map((c) => ({
    ...c,
    count: skills.filter((s) => s.categories.includes(c.slug)).length,
  }));

  return (
    <div className="mx-auto max-w-[1200px] px-6">
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
      <section className="dot-grid mt-6 rounded-feature border border-border px-6 py-14 sm:mt-10 sm:px-12 sm:py-20">
        <h1 className="display max-w-2xl text-4xl sm:text-5xl">
          The field guide for building better interfaces with AI.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-secondary text-pretty">
          Curated UI skills, rules and patterns for humans and coding agents.
        </p>
        <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <SearchBar className="flex-1" />
          <Link href="/skills" className="btn btn-primary h-11 px-5">
            Browse skills
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted tabular-nums">
          {skills.length} skills from {authors.length} authors, {designMds.length} Design.md files
        </p>
      </section>

      <div className="mt-16">
        <AddToAgent />
      </div>

      {/* Design.md */}
      <section className="mt-16">
        <SectionHeading
          title="Design.md"
          href="/design-md"
          description="Brand design languages as DESIGN.md files your agent can follow."
          allLabel="All Design.md"
        />
        <ul className="mt-5 grid grid-cols-4 gap-x-2 gap-y-4 sm:grid-cols-7 lg:grid-cols-[repeat(14,minmax(0,1fr))]">
          {designMds.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/design-md/${entry.slug}`}
                className="group flex flex-col items-center gap-2 rounded-card text-center"
              >
                <BrandTile entry={entry} />
                <span className="w-full truncate text-xs text-muted transition-colors group-hover:text-primary">
                  {entry.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* What are you building */}
      <section className="mt-16">
        <SectionHeading title="What are you building?" />
        <div className="mt-4">
          <TaskSelector />
        </div>
      </section>

      {/* Recommended */}
      <section className="mt-16">
        <SectionHeading
          title="Recommended"
          href="/skills"
          description="Hand-picked skills to start with."
          allLabel="View all"
        />
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {recommended.map((skill) => (
            <SkillCard key={skill.slug} skill={skill} />
          ))}
        </div>
      </section>

      {/* Latest additions */}
      <section className="mt-16">
        <SectionHeading
          title="Latest additions"
          href="/skills?sort=newest"
          allLabel="View all"
        />
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((skill) => (
            <SkillCard key={skill.slug} skill={skill} />
          ))}
        </div>
      </section>

      {/* Learn */}
      <section className="mt-16">
        <SectionHeading
          title="Learn"
          href="/chapters"
          description="Short playbook guides for the details agents usually miss."
          allLabel="All guides"
        />
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {chapters.map((chapter) => (
            <Link key={chapter.slug} href={`/chapters/${chapter.slug}`} className="card block p-4">
              <h3 className="text-base font-semibold text-primary text-balance">{chapter.title}</h3>
              <p className="mt-1 text-sm leading-[1.43] text-secondary">
                <InlineCode text={chapter.tip} />
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by topic */}
      <section className="mt-16 mb-8">
        <SectionHeading title="Browse by topic" href="/skills" allLabel="All skills" />
        <div className="mt-5 grid gap-x-4 gap-y-0.5 sm:grid-cols-2">
          {categoryCounts.map((cat) => (
            <Link
              key={cat.slug}
              href={`/skills?category=${cat.slug}`}
              className="row flex items-center justify-between px-3 py-2.5 text-sm"
            >
              <span className="text-primary">{categoryLabel(cat.slug)}</span>
              <span className="text-muted tabular-nums">{cat.count}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
