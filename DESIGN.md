---
name: UI Skillbook
description: Quiet, editorial interface built on Siteplane UI. Kit components and tokens for everything; a handful of page-level rules on top.
updated_at: "2026-10-30"
---

# UI Skillbook — DESIGN.md

UI Skillbook's design system is [Siteplane UI](https://ui.siteplane.io). Its
components are installed as source under `src/siteplane` with the shadcn CLI
(registry in `components.json`), and its stylesheet is the first import of
`src/app/globals.css`. Read the `siteplane-ui` skill in `.claude/skills/`
before changing UI.

## Principles

- **Kit first.** Every control, surface and overlay is a Siteplane UI part: Button, Card, Badge, Tabs, Menu, Sheet, Command, CodeBlock, CopyButton, Breadcrumb, Pagination, Sidebar, Accordion, Collapsible, Empty, Skeleton, Toast. Search the catalog before writing markup of our own.
- **Quiet and editorial.** Type and spacing build the structure. Decoration is rare.
- **Hairlines, not shadows.** Kit parts draw their own edges. A custom edge uses the `hairline`, `hairline-t` or `hairline-b` utilities, which sit on the kit's `--sp-rw-border-*` tokens.
- **One primary action per surface.** It is a `variant="inverse"` Button. Everything else is `outline`, `ghost` or `link`.
- **Change looks through props and tokens,** never raw colors or arbitrary values in kit files.

## Color

The kit's semantic tokens, through Tailwind: `bg-background`, `bg-card`, `bg-muted`,
`bg-state-hover`, `text-foreground`, `text-muted-foreground`, `text-info-foreground`
and the status colors `info`, `success`, `warning` and `error`. Badges take `variant`
(`accent`, `outline`, `info` …). There is no app-level color theme.

## Dark mode

`next-themes` writes the resolved theme to `<html>` as a class and as `data-theme`,
and passes the same value to `SiteplaneUIProvider` so portals follow
(`src/components/theme-provider.tsx`). The toggle is the kit's `SunMoonMorphToggle`.

## Typography

- **Inter** (`@fontsource-variable/inter`), the kit's typeface, for everything. Monospace is the kit's system stack, only for real code.
- **Display** (`.display`): 30–48px, weight 600, `-0.025em` tracking, balanced wrapping.
- **Section title**: 20px, weight 600. **Labels** (`.label`): 13px, weight 500, sentence case.
- Rendered markdown goes through `Markdown` (`src/components/markdown.tsx`), which is the kit's `Typeset` with its component map: fences become copyable CodeBlocks, tables NativeTables.
- Use `tabular-nums` on counts, stars and pagination.

## Layout

- Page max width is 1200px with 24px gutters; reading pages are 680–820px.
- Sections are 64px apart. Card grids use a 12px gap.

## Page-level rules

`globals.css` adds only what the kit has no part for: `.display`, `.label`, `.link`
(muted inline link), `.row` (dense list row with a hover fill), `.dot-grid` and the
hairline utilities.

## Logo

`src/components/logo-mark.tsx` is a placeholder square. The SVG mark is still to be
designed; every place that shows the logo renders this one component.

## Don'ts

- No `@import "tailwindcss"` or theme of our own in `globals.css`; the kit's stylesheet owns both.
- No hand-built buttons, copy actions, tabs or menus.
- No heavy drop shadows, and no shadows on default cards.
- No display type below 30px. No tracked uppercase labels.
