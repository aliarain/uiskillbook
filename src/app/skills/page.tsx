import Link from "next/link";
import type { Metadata } from "next";
import { getAllSkills, skillStars } from "@/lib/skills";
import { CATEGORIES, AGENTS, ROLES } from "@/lib/taxonomy";
import { SkillRow } from "@/components/skill-row";
import { FilterChip } from "@/components/filter-chip";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/raptrx-ui/components/sidebar";
import { Button } from "@/raptrx-ui/components/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@/raptrx-ui/components/empty-state";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/raptrx-ui/components/pagination";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Skills",
  description: "Practical instructions for better interface work.",
  path: "/skills",
});

type SortKey = "recommended" | "newest" | "stars" | "az";

// Every row is serialized twice (HTML + RSC payload), so the full catalog in one page ran to ~800 KB.
const PAGE_SIZE = 60;

const SORTS: { key: SortKey; label: string }[] = [
  { key: "recommended", label: "Recommended" },
  { key: "newest", label: "Newest" },
  { key: "stars", label: "Stars" },
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
  } else if (sort === "stars") {
    skills = [...skills].sort((a, b) => (skillStars(b) ?? -1) - (skillStars(a) ?? -1));
  } else if (sort === "az") {
    skills = [...skills].sort((a, b) => a.title.localeCompare(b.title));
  } else {
    skills = [...skills].sort((a, b) => Number(b.curated) - Number(a.curated));
  }

  const pageCount = Math.max(1, Math.ceil(skills.length / PAGE_SIZE));
  const page = Math.min(pageCount, Math.max(1, Number(params.page) || 1));
  const offset = (page - 1) * PAGE_SIZE;
  const visible = skills.slice(offset, offset + PAGE_SIZE);
  const pageHref = (n: number) =>
    buildHref(current, { page: n <= 1 ? undefined : String(Math.min(n, pageCount)) });

  const all = getAllSkills();
  const groups: FilterGroup[] = [
    {
      label: "By role",
      items: ROLES.map((r) => ({
        label: r.label,
        href: buildHref(current, { role: role === r.slug ? undefined : r.slug }),
        active: role === r.slug,
      })),
    },
    {
      label: "By topic",
      items: CATEGORIES.map((c) => ({
        label: c.label,
        href: buildHref(current, { category: category === c.slug ? undefined : c.slug }),
        active: category === c.slug,
        count: all.filter((s) => s.categories.includes(c.slug)).length,
      })),
    },
    {
      label: "By agent",
      items: AGENTS.map((a) => ({
        label: a.label,
        href: buildHref(current, { agent: agent === a.slug ? undefined : a.slug }),
        active: agent === a.slug,
        count: all.filter((s) => s.agents.includes(a.slug)).length,
      })),
    },
  ];

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="display text-4xl">Skills</h1>
      <p className="mt-3 text-ink-2">Practical instructions for better interface work.</p>

      {/* The transform makes the kit's fixed sidebar position against this box, not the viewport. */}
      <div className="relative mt-8 [transform:translateZ(0)]">
        <SidebarProvider className="min-h-0!" defaultOpen>
          <Sidebar className="h-full!" collapsible="offcanvas" aria-label="Skill filters">
            <SidebarContent>
              {groups.map((group) => (
                <SidebarGroup key={group.label}>
                  <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.items.map((item) => (
                        <SidebarMenuItem key={item.label}>
                          <SidebarMenuButton active={item.active} render={<Link href={item.href} />}>
                            {item.label}
                          </SidebarMenuButton>
                          {item.count !== undefined && (
                            <SidebarMenuBadge className="tabular-nums">{item.count}</SidebarMenuBadge>
                          )}
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </SidebarContent>
          </Sidebar>

          <div className="min-w-0 flex-1 pt-2 md:pl-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
              <div className="flex items-center gap-2">
                <SidebarTrigger aria-label="Show filters" className="md:hidden" />
                <p className="text-sm text-ink-3 tabular-nums">{skills.length} skills</p>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="mr-1 text-ink-3">Sort</span>
                {SORTS.map((s) => (
                  <FilterChip
                    key={s.key}
                    href={buildHref(current, { sort: s.key === "recommended" ? undefined : s.key })}
                    active={sort === s.key}
                  >
                    {s.label}
                  </FilterChip>
                ))}
              </div>
            </div>

            {q && (
              <p className="mt-6 text-sm text-ink-2">
                Results for <span className="text-link">&ldquo;{q}&rdquo;</span>{" "}
                <Link href={buildHref(current, { q: undefined })} className="ml-2 underline">
                  clear
                </Link>
              </p>
            )}

            {task && (
              <p className="mt-6 text-sm text-ink-2">
                Showing skills for: <span className="text-link">{task.replace(/-/g, " ")}</span>{" "}
                <Link href={buildHref(current, { task: undefined })} className="ml-2 underline">
                  clear
                </Link>
              </p>
            )}

            <h2 className="sr-only">Results</h2>
            <div className="mt-2 space-y-0.5">
              {skills.length === 0 ? (
                <Empty className="py-12">
                  <EmptyHeader>
                    <EmptyTitle level={2}>No skills match these filters</EmptyTitle>
                    <EmptyDescription>Clear a filter or try another topic.</EmptyDescription>
                  </EmptyHeader>
                  <EmptyContent>
                    <Button variant="outline" render={<Link href="/skills" />}>
                      Clear filters
                    </Button>
                  </EmptyContent>
                </Empty>
              ) : (
                visible.map((skill) => (
                  <SkillRow key={skill.slug} skill={skill} />
                ))
              )}
            </div>

            {pageCount > 1 && (
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm text-ink-3 tabular-nums">
                  {offset + 1}–{offset + visible.length} of {skills.length}
                </span>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        disabled={page === 1}
                        render={<Link href={pageHref(page - 1)} />}
                      />
                    </PaginationItem>
                    {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
                      <PaginationItem key={n}>
                        <PaginationLink active={n === page} render={<Link href={pageHref(n)} />}>
                          {n}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        disabled={page === pageCount}
                        render={<Link href={pageHref(page + 1)} />}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}

type FilterGroup = {
  label: string;
  items: { label: string; href: string; active: boolean; count?: number }[];
};
