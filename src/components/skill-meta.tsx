import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/raptrx-ui/components/avatar";
import type { Skill } from "@/lib/skills";
import { authorAvatar, skillStars } from "@/lib/skills";
import { SITE_NAME } from "@/lib/site";
import { LogoMark } from "./logo";

const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });

/** The author's avatar: our mark for UI Skillbook skills, the GitHub avatar, else the initial. */
export function AuthorAvatar({ skill, className = "size-5" }: { skill: Skill; className?: string }) {
  if (skill.author.name === SITE_NAME) {
    return (
      <span aria-hidden className={`flex shrink-0 items-center justify-center rounded-full bg-ink-strong text-canvas ${className}`}>
        <LogoMark className="size-1/2" />
      </span>
    );
  }
  const avatar = authorAvatar(skill);
  return (
    <Avatar aria-hidden className={`shrink-0 text-[11px] ${className}`}>
      {avatar && <AvatarImage src={avatar} alt="" loading="lazy" />}
      <AvatarFallback>{skill.author.name.charAt(0)}</AvatarFallback>
    </Avatar>
  );
}

export function AuthorBadge({ skill }: { skill: Skill }) {
  return (
    <span className="flex min-w-0 items-center gap-2 text-sm text-ink-2">
      <AuthorAvatar skill={skill} />
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
