import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import type { Skill } from "@/lib/skills";
import { categoryLabel } from "@/lib/taxonomy";
import { AuthorAvatar, StarCount } from "./skill-meta";

/**
 * One skill in a dense list: avatar, title with its author (so same-named
 * skills stay distinct), a one-line description at a readable measure, and
 * stars in a fixed right column.
 */
export function SkillRow({ skill }: { skill: Skill; index?: number }) {
  const topic = skill.siteplane ? "Siteplane UI" : categoryLabel(skill.categories[0]);
  return (
    <Link
      href={`/skills/${skill.slug}`}
      className="row grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 px-3 py-3 sm:grid-cols-[auto_minmax(0,1fr)_5rem]"
    >
      <AuthorAvatar skill={skill} className="mt-0.5 size-8" />

      <div className="min-w-0">
        <h3 className="flex min-w-0 items-baseline gap-2 text-[15px]">
          <span className="truncate font-medium text-ink">{skill.title}</span>
          <span className="shrink-0 truncate text-[13px] text-ink-3">by {skill.author.name}</span>
        </h3>
        <p className="mt-0.5 max-w-[68ch] truncate text-sm text-ink-2">{skill.description}</p>
        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-ink-3">
          <span className="text-link">{topic}</span>
          {skill.review && (
            <span className="flex items-center gap-1 text-tag-green">
              <ShieldCheck aria-hidden className="size-3.5" />
              Reviewed
            </span>
          )}
          {skill.external && <span>External</span>}
          <span className="sm:hidden">
            <StarCount skill={skill} />
          </span>
        </p>
      </div>

      <div className="hidden justify-self-end pt-0.5 sm:block">
        <StarCount skill={skill} />
      </div>
    </Link>
  );
}
