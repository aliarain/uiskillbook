import Link from "next/link";
import type { Skill } from "@/lib/skills";
import { skillStars } from "@/lib/skills";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SkillRow } from "@/components/skill-row";
import { DesignMdPagination, paginate } from "@/components/design-md-grid";
import { SITE_URL } from "@/lib/site";

export const SKILL_HUB_PAGE_SIZE = 40;

/** Curated skills first, then by GitHub stars, then A–Z. */
export function rankSkills(skills: Skill[]): Skill[] {
  return [...skills].sort(
    (a, b) =>
      Number(b.curated) - Number(a.curated) ||
      (skillStars(b) ?? -1) - (skillStars(a) ?? -1) ||
      a.title.localeCompare(b.title)
  );
}

/** "Spacing Rhythm, Optical Alignment and Pressed Button Feedback". */
export function skillNames(skills: Skill[], count = 3): string {
  const names = skills.slice(0, count).map((s) => s.title);
  return names.length <= 1 ? names.join("") : `${names.slice(0, -1).join(", ")} and ${names.at(-1)}`;
}

/** A listing page for one category of skills. */
export function SkillHub({
  title,
  intro,
  path,
  crumb,
  skills,
  page: requested,
  related,
}: {
  title: string;
  intro: React.ReactNode;
  path: string;
  crumb: string;
  skills: Skill[];
  page: unknown;
  related: { heading: string; links: { href: string; label: string; count: number }[] };
}) {
  const { page, pages, visible } = paginate(skills, requested, SKILL_HUB_PAGE_SIZE);
  return (
    <div className="mx-auto max-w-[820px] px-6 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: title,
          url: `${SITE_URL}${path}`,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: skills.length,
            itemListElement: visible.map((s, i) => ({
              "@type": "ListItem",
              position: (page - 1) * SKILL_HUB_PAGE_SIZE + i + 1,
              url: `${SITE_URL}/skills/${s.slug}`,
              name: s.title,
            })),
          },
        }}
      />
      <Breadcrumbs items={[{ label: "Skills", href: "/skills" }, { label: crumb }]} />
      <h1 className="display mt-3 text-3xl sm:text-4xl">{title}</h1>
      <div className="mt-3 max-w-2xl text-ink-2 text-pretty">{intro}</div>
      <p className="mt-6 text-sm text-ink-3 tabular-nums">
        {skills.length} {skills.length === 1 ? "skill" : "skills"}
        {pages > 1 && <>, page {page} of {pages}</>}
      </p>
      <h2 className="sr-only">Skills</h2>
      <div className="mt-3 space-y-0.5">
        {visible.map((skill) => (
          <SkillRow key={skill.slug} skill={skill} />
        ))}
      </div>
      <DesignMdPagination page={page} pages={pages} href={(n) => (n > 1 ? `${path}?page=${n}` : path)} />
      <section className="mt-14">
        <h2 className="text-xl font-semibold tracking-[-0.01em] text-ink">{related.heading}</h2>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {related.links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-link underline-offset-2 hover:underline">
                {l.label}
              </Link>
              <span className="ml-1 text-ink-3 tabular-nums">{l.count}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
