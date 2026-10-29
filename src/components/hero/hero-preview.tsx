import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/raptrx-ui/components/button";
import { getAllSkills, getAuthors, installTargets } from "@/lib/skills";
import { getAllDesignMds } from "@/lib/design-md";
import { SkillSlider, type SkillSlide } from "./skill-slider";
import { categoryLabel } from "@/lib/taxonomy";

function Counts() {
  const skills = getAllSkills();
  return (
    <p className="text-sm text-ink-3 tabular-nums">
      {skills.length} skills from {getAuthors().length} authors, {getAllDesignMds().length} Design.md files
    </p>
  );
}

/** One real skill per topic for the hero slider, shown in this order. */
const FEATURED: { slug: string; topic?: string }[] = [
  { slug: "vercel-labs-web-design-guidelines", topic: "Web design" },
  { slug: "accessibility" },
  { slug: "better-typography" },
  { slug: "emilkowalski-animate" },
  { slug: "better-colors", topic: "Color" },
  { slug: "shadcn" },
];

function featuredSlides(): SkillSlide[] {
  const all = getAllSkills();
  return FEATURED.flatMap(({ slug, topic }) => {
    const skill = all.find((s) => s.slug === slug);
    if (!skill) return [];
    return [
      {
        slug: skill.slug,
        title: skill.title,
        author: skill.author.name,
        topic: topic ?? categoryLabel(skill.categories[0]),
        targets: installTargets(skill),
      },
    ];
  });
}

/** Headline and actions beside rotating install cards for real skills, so the first screen shows the product. */
export function HeroPreview() {
  const slides = featuredSlides();
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
      <SkillSlider slides={slides} />
    </section>
  );
}
