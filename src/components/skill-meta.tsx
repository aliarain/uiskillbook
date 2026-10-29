import type { Skill } from "@/lib/skills";
import { authorAvatar, skillStars } from "@/lib/skills";

const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });

export function AuthorBadge({ skill }: { skill: Skill }) {
  const avatar = authorAvatar(skill);
  return (
    <span className="flex min-w-0 items-center gap-2 text-sm text-secondary">
      {avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={avatar}
          alt=""
          width={20}
          height={20}
          loading="lazy"
          className="size-5 shrink-0 rounded-full border border-border bg-surface"
        />
      ) : (
        <span
          aria-hidden
          className="flex size-5 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-[11px] font-medium text-muted"
        >
          {skill.author.name.charAt(0)}
        </span>
      )}
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
      className="flex shrink-0 items-center gap-1 text-sm text-muted tabular-nums"
      title={`${stars.toLocaleString("en")} GitHub stars on the source repository`}
    >
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 .9a.6.6 0 0 1 .54.33l1.86 3.77 4.16.6a.6.6 0 0 1 .33 1.03l-3 2.93.7 4.14a.6.6 0 0 1-.87.63L8 12.38l-3.72 1.95a.6.6 0 0 1-.87-.63l.71-4.14-3.01-2.93a.6.6 0 0 1 .33-1.03l4.16-.6L7.46 1.23A.6.6 0 0 1 8 .9Z" />
      </svg>
      <span className="sr-only">GitHub stars: </span>
      {compact.format(stars)}
    </span>
  );
}
