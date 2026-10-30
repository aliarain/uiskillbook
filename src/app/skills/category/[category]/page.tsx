import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CATEGORIES } from "@/lib/taxonomy";
import { getSkillsByCategory } from "@/lib/skills";
import { SkillHub, rankSkills, skillNames } from "@/components/skill-hub";
import { CATEGORY_INTROS } from "@/lib/skill-hub-copy";
import { pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ category: string }>; searchParams: Promise<{ page?: string }> };

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

function load(slug: string) {
  const category = CATEGORIES.find((c) => c.slug === slug);
  return category ? { category, skills: rankSkills(getSkillsByCategory(slug)) } : null;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const found = load((await params).category);
  if (!found) return {};
  const { category, skills } = found;
  const page = Number((await searchParams).page) || 1;
  return pageMetadata({
    title: `${category.label} skills for AI coding agents (${skills.length})`,
    description: `${skills.length} ${category.label.toLowerCase()} skills for Claude Code, Codex, Cursor and other agents, including ${skillNames(skills)}.`,
    path: `/skills/category/${category.slug}${page > 1 ? `?page=${page}` : ""}`,
    image: `/skills/category/${category.slug}/opengraph-image`,
  });
}

export default async function CategoryHubPage({ params, searchParams }: Props) {
  const found = load((await params).category);
  if (!found) notFound();
  const { category, skills } = found;
  return (
    <SkillHub
      title={`${category.label} skills`}
      intro={<p>{CATEGORY_INTROS[category.slug]}</p>}
      path={`/skills/category/${category.slug}`}
      crumb={category.label}
      skills={skills}
      page={(await searchParams).page}
      related={{
        heading: "Other categories",
        links: CATEGORIES.filter((c) => c.slug !== category.slug).map((c) => ({
          href: `/skills/category/${c.slug}`,
          label: c.label,
          count: getSkillsByCategory(c.slug).length,
        })),
      }}
    />
  );
}
