import Link from "next/link";
import type { Metadata } from "next";
import { getAllSkills } from "@/lib/skills";
import { CATEGORIES, AGENTS, ROLES } from "@/lib/taxonomy";
import { SkillRow } from "@/components/skill-row";
import { pageMetadata } from "@/lib/site";
import { Check, ChevronDown, SearchX } from "lucide-react";
import { Button } from "@/siteplane/components/button";
import { Menu, MenuLinkItem, MenuPopup, MenuTrigger } from "@/siteplane/components/menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/siteplane/components/pagination";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/siteplane/components/empty-state";

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
      <p className="mt-3 text-muted-foreground">Practical instructions for better interface work.</p>

      <div className="mt-8 space-y-3">
        <FilterRow label="By role">
          {ROLES.map((r) => (
            <FilterChip key={r.slug} href={buildHref(current, { role: role === r.slug ? undefined : r.slug })} active={role === r.slug}>
              {r.label}
            </FilterChip>
          ))}
        </FilterRow>
        <FilterRow label="By topic">
          {CATEGORIES.map((c) => (
            <FilterChip
              key={c.slug}
              href={buildHref(current, { category: category === c.slug ? undefined : c.slug })}
              active={category === c.slug}
            >
              {c.label}
            </FilterChip>
          ))}
        </FilterRow>
        <FilterRow label="By agent">
          {AGENTS.map((a) => (
            <FilterChip key={a.slug} href={buildHref(current, { agent: agent === a.slug ? undefined : a.slug })} active={agent === a.slug}>
              {a.label}
            </FilterChip>
          ))}
        </FilterRow>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 hairline-b pb-2">
        <p className="text-sm text-muted-foreground tabular-nums">{skills.length} skills</p>
        <Menu>
          <MenuTrigger render={<Button variant="ghost" size="sm" />}>
            Sort: {SORTS.find((x) => x.key === sort)?.label ?? "Recommended"}
            <ChevronDown aria-hidden />
          </MenuTrigger>
          <MenuPopup align="end">
            {SORTS.map((x) => (
              <MenuLinkItem
                key={x.key}
                aria-current={sort === x.key ? "true" : undefined}
                render={<Link href={buildHref(current, { sort: x.key === "recommended" ? undefined : x.key, page: undefined })} />}
              >
                <Check aria-hidden className={sort === x.key ? undefined : "invisible"} />
                {x.label}
              </MenuLinkItem>
            ))}
          </MenuPopup>
        </Menu>
      </div>

      {q && (
        <p className="mt-6 text-sm text-muted-foreground">
          Results for <span className="font-medium text-foreground">&ldquo;{q}&rdquo;</span>{" "}
          <Button variant="link" size="sm" render={<Link href={buildHref(current, { q: undefined })} />}>
            Clear
          </Button>
        </p>
      )}

      {task && (
        <p className="mt-6 text-sm text-muted-foreground">
          Showing skills for: <span className="font-medium text-foreground">{task.replace(/-/g, " ")}</span>{" "}
          <Button variant="link" size="sm" render={<Link href={buildHref(current, { task: undefined })} />}>
            Clear
          </Button>
        </p>
      )}

      <div className="mt-2 space-y-0.5">
        {skills.length === 0 ? (
          <Empty className="py-16">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchX aria-hidden />
              </EmptyMedia>
              <EmptyTitle>No skills match these filters</EmptyTitle>
              <EmptyDescription>Clear a filter or try a broader topic.</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline" render={<Link href="/skills" />}>
                Show all skills
              </Button>
            </EmptyContent>
          </Empty>
        ) : (
          visible.map((skill, i) => (
            <SkillRow key={skill.slug} skill={skill} index={offset + i + 1} />
          ))
        )}
      </div>

      {pageCount > 1 && (
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="tabular-nums">
            {offset + 1}–{offset + visible.length} of {skills.length}
          </span>
          <Pagination className="mx-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  disabled={page === 1}
                  render={<Link href={buildHref(current, { page: page > 2 ? String(page - 1) : undefined })} />}
                />
              </PaginationItem>
              {pageItems(page, pageCount).map((item) => (
                <PaginationItem key={item}>
                  {typeof item === "number" ? (
                    <PaginationLink
                      active={item === page}
                      render={<Link href={buildHref(current, { page: item === 1 ? undefined : String(item) })} />}
                    >
                      {item}
                    </PaginationLink>
                  ) : (
                    <PaginationEllipsis />
                  )}
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  disabled={page === pageCount}
                  render={<Link href={buildHref(current, { page: String(Math.min(pageCount, page + 1)) })} />}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

/** Up to seven slots, with ellipses, so the control keeps its width while paging. */
function pageItems(page: number, total: number): (number | "start-ellipsis" | "end-ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (page <= 4) return [1, 2, 3, 4, 5, "end-ellipsis", total];
  if (page >= total - 3) return [1, "start-ellipsis", total - 4, total - 3, total - 2, total - 1, total];
  return [1, "start-ellipsis", page - 1, page, page + 1, "end-ellipsis", total];
}

function FilterChip({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Button
      variant={active ? "inverse" : "outline"}
      shape="pill"
      size="sm"
      aria-current={active ? "page" : undefined}
      render={<Link href={href} />}
    >
      {children}
    </Button>
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
