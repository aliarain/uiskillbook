import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/siteplane/components/card";
import { getAllSkills, getAuthors, getSiteplaneSkills } from "@/lib/skills";
import { getAllChapters } from "@/lib/chapters";
import { getAllDesignMds } from "@/lib/design-md";
import { BrandTile } from "@/components/brand-tile";
import { CATEGORIES, categoryLabel } from "@/lib/taxonomy";
import { SkillCard } from "@/components/skill-card";
import { SectionHeading } from "@/components/section-heading";
import { TaskSelector } from "@/components/task-selector";
import { InlineCode } from "@/components/inline-code";
import { JsonLd } from "@/components/json-ld";
import { AddToAgent } from "@/components/add-to-agent";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export default function Home() {
  const skills = getAllSkills();
  const authors = getAuthors();
  const chapters = getAllChapters();
  const designMds = getAllDesignMds();
  const siteplane = getSiteplaneSkills();
  const siteplaneFeatured = ["dialog", "combobox", "table", "command", "toast", "sidebar"]
    .map((c) => siteplane.find((s) => s.siteplane.component === c))
    .filter((s) => s !== undefined);

  const recommended = skills.filter((s) => s.curated).slice(0, 6);
  const latest = skills
    .filter((s) => !s.siteplane)
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
      <header className="mt-10 sm:mt-14">
        <h1 className="display text-3xl">UI skills for coding agents</h1>
        <p className="mt-2 text-muted-foreground tabular-nums">
          {skills.length} skills from {authors.length} authors (including {siteplane.length} Siteplane UI components), {designMds.length} Design.md files and{" "}
          {chapters.length} short guides.
        </p>
      </header>

      {/* Recommended */}
      <section className="mt-10">
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

      {/* Siteplane UI */}
      <section className="mt-16">
        <SectionHeading
          title="Siteplane UI"
          href="/siteplane-ui"
          description={`Our design system. All ${siteplane.length} components, with when to pick each one over its neighbours.`}
          allLabel="All components"
        />
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {siteplaneFeatured.map((skill) => (
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
                className="group flex flex-col items-center gap-2 rounded-surface text-center"
              >
                <BrandTile entry={entry} />
                <span className="w-full truncate text-xs text-muted-foreground transition-colors group-hover:text-foreground">
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
            <Card key={chapter.slug} render={<Link href={`/chapters/${chapter.slug}`} />}>
              <CardHeader>
                <CardTitle className="text-balance">{chapter.title}</CardTitle>
                <CardDescription>
                  <InlineCode text={chapter.tip} />
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <AddToAgent />
      </div>

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
              <span className="text-foreground">{categoryLabel(cat.slug)}</span>
              <span className="text-muted-foreground tabular-nums">{cat.count}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
