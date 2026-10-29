import Link from "next/link";
import type { Skill } from "@/lib/skills";
import { categoryLabel } from "@/lib/taxonomy";
import { Badge } from "@/siteplane/components/badge";
import { StarCount } from "./skill-meta";

export function SkillRow({ skill, index }: { skill: Skill; index: number }) {
  return (
    <Link
      href={`/skills/${skill.slug}`}
      className="flex items-start gap-4 rounded-control px-3 py-3.5 transition-colors hover:bg-state-hover focus-visible:bg-state-hover sm:items-center"
    >
      <span className="w-6 shrink-0 pt-0.5 text-[13px] text-muted-foreground/60 tabular-nums sm:pt-0">
        {String(index).padStart(2, "0")}
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="text-[15px] font-medium text-foreground">{skill.title}</h3>
        <p className="mt-0.5 line-clamp-2 text-sm leading-[1.43] text-muted-foreground">{skill.description}</p>
        <p className="mt-1.5 flex items-center gap-3 text-[13px] text-muted-foreground">
          <Badge variant={skill.siteplane ? "accent" : "outline"} size="sm">
            {skill.siteplane ? "Siteplane UI" : categoryLabel(skill.categories[0])}
          </Badge>
          <span>{skill.author.name}</span>
        </p>
      </div>

      <div className="hidden shrink-0 sm:block">
        <StarCount skill={skill} />
      </div>
    </Link>
  );
}
