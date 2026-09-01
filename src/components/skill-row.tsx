import Link from "next/link";
import type { Skill } from "@/lib/skills";
import { agentLabel, categoryLabel } from "@/lib/taxonomy";

export function SkillRow({ skill, index }: { skill: Skill; index: number }) {
  const primaryAgent =
    skill.agents.length === 1 ? agentLabel(skill.agents[0]) : "Universal";

  return (
    <Link
      href={`/skills/${skill.slug}`}
      className="row group flex items-start gap-4 px-3 py-4 sm:items-center"
    >
      <span className="w-6 shrink-0 pt-0.5 font-mono text-xs text-muted tabular-nums sm:pt-0">
        {String(index).padStart(2, "0")}
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="flex items-center gap-2 font-mono text-sm font-medium text-primary">
          {skill.slug}
          {skill.external && (
            <span className="rounded-full border border-border px-1.5 py-0.5 font-sans text-[10px] font-normal text-muted">
              External
            </span>
          )}
        </h3>
        <p className="mt-1 text-sm text-secondary line-clamp-2">{skill.description}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
          <span>{skill.categories.map(categoryLabel).join(" · ")}</span>
          <span className="hidden sm:inline">by {skill.author.name}</span>
        </div>
      </div>

      <div className="hidden shrink-0 items-center gap-2 sm:flex">
        <span className="font-mono text-xs text-muted">{primaryAgent}</span>
        <span className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
          →
        </span>
      </div>
    </Link>
  );
}
