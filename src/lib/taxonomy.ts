export type CategorySlug =
  | "layout"
  | "typography"
  | "motion"
  | "interaction"
  | "accessibility"
  | "responsive"
  | "forms"
  | "navigation"
  | "visual"
  | "performance"
  | "design-systems"
  | "taste";

export const CATEGORIES: { slug: CategorySlug; label: string }[] = [
  { slug: "layout", label: "Layout" },
  { slug: "typography", label: "Typography" },
  { slug: "motion", label: "Motion" },
  { slug: "interaction", label: "Interaction" },
  { slug: "accessibility", label: "Accessibility" },
  { slug: "responsive", label: "Responsive" },
  { slug: "forms", label: "Forms" },
  { slug: "navigation", label: "Navigation" },
  { slug: "visual", label: "Visual" },
  { slug: "performance", label: "Performance" },
  { slug: "design-systems", label: "Design Systems" },
  { slug: "taste", label: "Taste" },
];

export function categoryLabel(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export type AgentSlug =
  | "claude-code"
  | "codex"
  | "cursor"
  | "opencode"
  | "copilot"
  | "universal";

export const AGENTS: { slug: AgentSlug; label: string }[] = [
  { slug: "claude-code", label: "Claude Code" },
  { slug: "codex", label: "Codex" },
  { slug: "cursor", label: "Cursor" },
  { slug: "opencode", label: "OpenCode" },
  { slug: "copilot", label: "Copilot" },
  { slug: "universal", label: "Universal" },
];

export function agentLabel(slug: string): string {
  return AGENTS.find((a) => a.slug === slug)?.label ?? slug;
}

export type TaskSlug =
  | "landing-page"
  | "dashboard"
  | "mobile-interface"
  | "design-system"
  | "form"
  | "navigation"
  | "animation"
  | "data-table"
  | "empty-state"
  | "other";

export const TASKS: { slug: TaskSlug; label: string }[] = [
  { slug: "landing-page", label: "Landing page" },
  { slug: "dashboard", label: "Dashboard" },
  { slug: "mobile-interface", label: "Mobile interface" },
  { slug: "design-system", label: "Design system" },
  { slug: "form", label: "Form" },
  { slug: "navigation", label: "Navigation" },
  { slug: "animation", label: "Animation" },
  { slug: "data-table", label: "Data table" },
  { slug: "empty-state", label: "Empty state" },
  { slug: "other", label: "Other" },
];
