import Link from "next/link";
import type { Metadata } from "next";
import { getAllSkills } from "@/lib/skills";
import { CATEGORIES, AGENTS } from "@/lib/taxonomy";
import { SkillRow } from "@/components/skill-row";

export const metadata: Metadata = {
  title: "Skills",
  description: "Practical instructions for better interface work.",
};

type SortKey = "recommended" | "newest" | "az";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "recommended", label: "Recommended" },
  { key: "newest", label: "Newest" },
  { key: "az", label: "A–Z" },
];

function buildHref(
  current: Record<string, string | undefined>,
  patch: Record<string, string | undefined>
) {
  const merged = { ...current, ...patch };
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(merged)) {
    if (value) params.set(key, value);
  }
  const qs = params.toString();
  return qs ? `/skills?${qs}` : "/skills";
}

export default async function SkillsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const category = typeof params.category === "string" ? params.category : undefined;
  const agent = typeof params.agent === "string" ? params.agent : undefined;
  const task = typeof params.task === "string" ? params.task : undefined;
  const sort: SortKey = (typeof params.sort === "string" ? params.sort : "recommended") as SortKey;

  const current = { category, agent, task, sort: sort === "recommended" ? undefined : sort };

  let skills = getAllSkills();
  if (category) skills = skills.filter((s) => s.categories.includes(category as never));
  if (agent) skills = skills.filter((s) => s.agents.includes(agent as never));
  if (task) skills = skills.filter((s) => s.tasks?.includes(task as never));

  if (sort === "newest") {
    skills = [...skills].sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1));
  } else if (sort === "az") {
    skills = [...skills].sort((a, b) => a.title.localeCompare(b.title));
  } else {
    skills = [...skills].sort((a, b) => Number(b.curated) - Number(a.curated));
  }

  return (
    <div className="mx-auto max-w-[1140px] px-6 py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-primary">Skills</h1>
      <p className="mt-2 text-secondary">Practical instructions for better interface work.</p>

      {/* Category filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href={buildHref(current, { category: undefined })}
          className={`rounded-full border px-3 py-1 text-sm transition-colors ${
            !category
              ? "border-accent bg-accent-subtle text-accent"
              : "border-border text-secondary hover:text-primary"
          }`}
        >
          All
        </Link>
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            href={buildHref(current, { category: category === c.slug ? undefined : c.slug })}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              category === c.slug
                ? "border-accent bg-accent-subtle text-accent"
                : "border-border text-secondary hover:text-primary"
            }`}
          >
            {c.label}
          </Link>
        ))}
      </div>

      {/* Agent filters + sort */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {AGENTS.map((a) => (
            <Link
              key={a.slug}
              href={buildHref(current, { agent: agent === a.slug ? undefined : a.slug })}
              className={`rounded border px-2 py-1 transition-colors ${
                agent === a.slug
                  ? "border-accent text-accent"
                  : "border-border text-muted hover:text-primary"
              }`}
            >
              {a.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          <span>Sort:</span>
          {SORTS.map((s) => (
            <Link
              key={s.key}
              href={buildHref(current, { sort: s.key === "recommended" ? undefined : s.key })}
              className={sort === s.key ? "text-accent" : "hover:text-primary"}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      {task && (
        <p className="mt-6 text-sm text-secondary">
          Showing skills for: <span className="text-accent">{task.replace(/-/g, " ")}</span>{" "}
          <Link href={buildHref(current, { task: undefined })} className="ml-2 underline">
            clear
          </Link>
        </p>
      )}

      <div className="mt-8 space-y-0.5">
        {skills.length === 0 ? (
          <p className="py-10 text-sm text-muted">No skills match these filters yet.</p>
        ) : (
          skills.map((skill, i) => <SkillRow key={skill.slug} skill={skill} index={i + 1} />)
        )}
      </div>
    </div>
  );
}
