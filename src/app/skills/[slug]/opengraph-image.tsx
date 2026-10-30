import { getAllSkills, getSkillBySlug } from "@/lib/skills";
import { categoryLabel } from "@/lib/taxonomy";
import { OG_SIZE, renderOgImage } from "@/lib/og-image";

export const alt = "UI Skillbook skill";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSkills().map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  return renderOgImage({
    eyebrow: skill ? `Skill · ${skill.categories.map(categoryLabel).join(" · ")}` : "Skill",
    title: skill?.title ?? slug,
    subtitle: skill ? `${skill.description} By ${skill.author.name}.` : undefined,
  });
}
