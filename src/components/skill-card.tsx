import Link from "next/link";
import type { Skill } from "@/lib/skills";
import { categoryLabel } from "@/lib/taxonomy";
import { AuthorBadge, StarCount } from "./skill-meta";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Link href={`/skills/${skill.slug}`} className="card flex flex-col p-4">
      <span className="text-[13px] font-medium text-link">{categoryLabel(skill.categories[0])}</span>
      <h3 className="mt-1 text-base font-semibold text-ink text-balance">{skill.title}</h3>
      <p className="mt-1.5 line-clamp-2 text-sm leading-[1.43] text-ink-2">{skill.description}</p>
      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
        <AuthorBadge skill={skill} />
        <StarCount skill={skill} />
      </div>
    </Link>
  );
}
