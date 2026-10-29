import { Star } from "lucide-react";
import type { Skill } from "@/lib/skills";
import { authorAvatar, skillStars } from "@/lib/skills";
import { Avatar, AvatarFallback, AvatarImage } from "@/siteplane/components/avatar";

const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });

export function AuthorBadge({ skill }: { skill: Skill }) {
  const avatar = authorAvatar(skill);
  return (
    <span className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
      <Avatar className="size-5">
        {avatar && <AvatarImage src={avatar} alt="" loading="lazy" />}
        <AvatarFallback className="text-[11px]">{skill.author.name.charAt(0)}</AvatarFallback>
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
      className="flex shrink-0 items-center gap-1 text-sm text-muted-foreground tabular-nums"
      title={`${stars.toLocaleString("en")} GitHub stars on the source repository`}
    >
      <Star size={14} strokeWidth={1.75} aria-hidden className="fill-current" />
      <span className="sr-only">GitHub stars: </span>
      {compact.format(stars)}
    </span>
  );
}
