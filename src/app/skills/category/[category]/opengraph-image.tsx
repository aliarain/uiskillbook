import { CATEGORIES } from "@/lib/taxonomy";
import { getSkillsByCategory } from "@/lib/skills";
import { OG_SIZE, renderOgImage } from "@/lib/og-image";
import { rankSkills, skillNames } from "@/components/skill-hub";

export const alt = "UI skills by category on UI Skillbook";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const label = CATEGORIES.find((c) => c.slug === category)?.label ?? "UI";
  const skills = rankSkills(getSkillsByCategory(category));
  return renderOgImage({
    eyebrow: "Skills · Category",
    title: `${label} skills for coding agents`,
    subtitle: `${skills.length} skills, including ${skillNames(skills)}.`,
  });
}
