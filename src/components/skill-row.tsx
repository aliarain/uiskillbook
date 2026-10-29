import Link from "next/link";
import type { Skill } from "@/lib/skills";
import { categoryLabel } from "@/lib/taxonomy";
import { StarCount } from "./skill-meta";

export function SkillRow({ skill, index }: { skill: Skill; index: number }) {
  return (
    <Link
      href={`/skills/${skill.slug}`}
      className="row flex items-start gap-4 px-3 py-3.5 sm:items-center"
    >
      <span aria-hidden className="w-6 shrink-0 pt-0.5 text-[13px] text-ink-3 tabular-nums sm:pt-0">
        {String(index).padStart(2, "0")}
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="text-[15px] font-medium text-ink">{skill.title}</h3>
        <p className="mt-0.5 line-clamp-2 text-sm leading-[1.43] text-ink-2">
          {skill.description}
        </p>
        <p className="mt-1.5 text-[13px] text-ink-3">
          <span className="text-link">{skill.siteplane ? "Siteplane UI" : categoryLabel(skill.categories[0])}</span>
          <span className="ml-3">{skill.author.name}</span>
        </p>
      </div>

      <div className="hidden shrink-0 sm:block">
        <StarCount skill={skill} />
      </div>
    </Link>
  );
}
