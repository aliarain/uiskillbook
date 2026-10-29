import Link from "next/link";
import type { Metadata } from "next";
import { getAllSkills } from "@/lib/skills";
import { CATEGORIES, AGENTS, ROLES } from "@/lib/taxonomy";
import { SkillRow } from "@/components/skill-row";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Skills",
  description: "Practical instructions for better interface work.",
  path: "/skills",
});

type SortKey = "recommended" | "newest" | "az";

// Every row is serialized twice (HTML + RSC payload), so the full catalog in one page ran to ~800 KB.
const PAGE_SIZE = 60;

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
  const role = typeof params.role === "string" ? params.role : undefined;
  const roleDef = ROLES.find((r) => r.slug === role);
  const agent = typeof params.agent === "string" ? params.agent : undefined;
  const task = typeof params.task === "string" ? params.task : undefined;
  const q = typeof params.q === "string" ? params.q.trim() : undefined;
  const sort: SortKey = (typeof params.sort === "string" ? params.sort : "recommended") as SortKey;

  const current = { q, role, category, agent, task, sort: sort === "recommended" ? undefined : sort };

  let skills = getAllSkills();
  if (category) skills = skills.filter((s) => s.categories.includes(category as never));
  if (roleDef) skills = skills.filter((s) => s.categories.some((c) => roleDef.categories.includes(c)));
  if (agent) skills = skills.filter((s) => s.agents.includes(agent as never));
  if (task) skills = skills.filter((s) => s.tasks?.includes(task as never));
  if (q) {
    const needle = q.toLowerCase();
    skills = skills.filter((s) =>
      [s.slug, s.title, s.description, s.author.name, ...(s.tags ?? [])].some((field) =>
        field.toLowerCase().includes(needle)
      )
    );
  }

  if (sort === "newest") {
    skills = [...skills].sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1));
  } else if (sort === "az") {
    skills = [...skills].sort((a, b) => a.title.localeCompare(b.title));
  } else {
    skills = [...skills].sort((a, b) => Number(b.curated) - Number(a.curated));
  }

  const pageCount = Math.max(1, Math.ceil(skills.length / PAGE_SIZE));
  const page = Math.min(pageCount, Math.max(1, Number(params.page) || 1));
  const offset = (page - 1) * PAGE_SIZE;
  const visible = skills.slice(offset, offset + PAGE_SIZE);

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="display text-4xl">Skills</h1>
      <p className="mt-3 text-secondary">Practical instructions for better interface work.</p>

      <div className="mt-8 space-y-3">
        <FilterRow label="By role">
          {ROLES.map((r) => (
            <Link
              key={r.slug}
              href={buildHref(current, { role: role === r.slug ? undefined : r.slug })}
              aria-current={role === r.slug ? "page" : undefined}
              className="pill"
            >
              {r.label}
            </Link>
          ))}
        </FilterRow>
        <FilterRow label="By topic">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={buildHref(current, { category: category === c.slug ? undefined : c.slug })}
              aria-current={category === c.slug ? "page" : undefined}
              className="pill"
            >
              {c.label}
            </Link>
          ))}
        </FilterRow>
        <FilterRow label="By agent">
          {AGENTS.map((a) => (
            <Link
              key={a.slug}
              href={buildHref(current, { agent: agent === a.slug ? undefined : a.slug })}
              aria-current={agent === a.slug ? "page" : undefined}
              className="pill"
            >
              {a.label}
            </Link>
          ))}
        </FilterRow>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
        <p className="text-sm text-muted tabular-nums">{skills.length} skills</p>
        <div className="flex items-center gap-1 text-sm">
          <span className="mr-1 text-muted">Sort</span>
          {SORTS.map((s) => (
            <Link
              key={s.key}
              href={buildHref(current, { sort: s.key === "recommended" ? undefined : s.key })}
              aria-current={sort === s.key ? "page" : undefined}
              className="pill border-transparent"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      {q && (
        <p className="mt-6 text-sm text-secondary">
          Results for <span className="text-accent">&ldquo;{q}&rdquo;</span>{" "}
          <Link href={buildHref(current, { q: undefined })} className="ml-2 underline">
            clear
          </Link>
        </p>
      )}

      {task && (
        <p className="mt-6 text-sm text-secondary">
          Showing skills for: <span className="text-accent">{task.replace(/-/g, " ")}</span>{" "}
          <Link href={buildHref(current, { task: undefined })} className="ml-2 underline">
            clear
          </Link>
        </p>
      )}

      <div className="mt-2 space-y-0.5">
        {skills.length === 0 ? (
          <p className="py-10 text-sm text-muted">No skills match these filters yet.</p>
        ) : (
          visible.map((skill, i) => (
            <SkillRow key={skill.slug} skill={skill} index={offset + i + 1} />
          ))
        )}
      </div>

      {pageCount > 1 && (
        <nav
          aria-label="Pagination"
          className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted"
        >
          <span className="tabular-nums">
            {offset + 1}–{offset + visible.length} of {skills.length}
          </span>
          <div className="flex flex-wrap gap-1">
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <Link
                key={n}
                href={buildHref(current, { page: n === 1 ? undefined : String(n) })}
                aria-current={n === page ? "page" : undefined}
                className="btn btn-secondary min-w-9 px-2 tabular-nums shadow-none aria-[current=page]:border-transparent aria-[current=page]:bg-accent-subtle aria-[current=page]:text-accent-on-subtle"
              >
                {n}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
      <span className="label w-20 shrink-0">{label}</span>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}
