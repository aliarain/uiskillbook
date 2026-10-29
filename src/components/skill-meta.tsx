import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/raptrx-ui/components/avatar";
import type { Skill } from "@/lib/skills";
import { authorAvatar, skillStars } from "@/lib/skills";
import { SITE_NAME } from "@/lib/site";
import { LogoMark } from "./logo";

const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });

export function AuthorBadge({ skill }: { skill: Skill }) {
  const avatar = authorAvatar(skill);
  if (skill.author.name === SITE_NAME) {
    // Our own skills carry the UI Skillbook mark as their avatar.
    return (
      <span className="flex min-w-0 items-center gap-2 text-sm text-ink-2">
        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-ink-strong text-canvas">
          <LogoMark className="size-3" />
        </span>
        <span className="truncate">{skill.author.name}</span>
      </span>
    );
  }
  return (
    <span className="flex min-w-0 items-center gap-2 text-sm text-ink-2">
      <Avatar className="size-5 shrink-0 text-[11px]">
        {avatar && <AvatarImage src={avatar} alt="" loading="lazy" />}
        <AvatarFallback>{skill.author.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <span className="truncate">{skill.author.name}</span>
    </span>
  );
}

/** GitHub stars for the source repo. Renders nothing without real data. */
export function StarCount({ skill }: { skill: Skill }) {
  const stars = skillStars(skill);
  if (stars === undefined) return null;
  return (
    <span
      className="flex shrink-0 items-center gap-1 text-sm text-ink-3 tabular-nums"
      title={`${stars.toLocaleString("en")} GitHub stars on the source repository`}
    >
      <Star size={14} strokeWidth={1.75} aria-hidden className="fill-current" />
      <span className="sr-only">GitHub stars: </span>
      {compact.format(stars)}
    </span>
  );
}
