---
name: UI Skillbook
description: UI Skillbook on the Siteplane UI design system. Calm neutral surfaces, Inter body text, IBM Plex Sans headings, kit components for every control.
updated_at: "2026-10-29"
---

# UI Skillbook — DESIGN.md

uiskillbook.com is built on [Siteplane UI](https://ui.siteplane.io). The kit's source lives in
`src/siteplane` and is installed with the shadcn CLI from the `@siteplane` registry, as set in
`components.json`. Its license is in `LICENSE.siteplane-ui`. Every control on the site is a kit
component. The live catalogue is at [/design-system](https://www.uiskillbook.com/design-system).

## Foundations

- **Stylesheet.** `src/app/globals.css` imports `siteplane/system/styles/base.css` first. That
  file owns the cascade layers (`theme, base, components, siteplane, utilities`), the tokens and
  the component styles. Our own rules come after it.
- **Theme.** next-themes writes `.dark` and `data-theme` on `<html>`. `SiteplaneUIProvider` passes
  the same value to kit portals (`src/components/theme-provider.tsx`). The theme menu offers
  Light, Dark and System.
- **Tokens.** Never style with raw hex values. Kit components use the kit's own tokens. Our markup
  uses these aliases, defined in `@theme inline`, which point at the kit's role tokens:

| Tailwind name | Kit token | Use |
| --- | --- | --- |
| `canvas` | `--sp-rw-bg-base` | Page background |
| `panel` | `--sp-rw-bg-primary` | Muted panels, footer, code |
| `hover` | `--sp-semantic-color-control-hover` | Row and item hover |
| `line`, `line-strong` | `--sp-semantic-color-border(-strong)` | Hairlines, hovered borders |
| `ink`, `ink-strong` | `--sp-rw-fg-primary` | Body text and headings |
| `ink-2` | `--sp-rw-fg-secondary` | Descriptions |
| `ink-3` | `--sp-rw-fg-tertiary` | Labels, metadata, placeholders |
| `ink-4` | `--sp-rw-fg-quaternary` | Decorative only |
| `link`, `link-subtle` | `--sp-rw-fg-accent`, `--sp-rw-bg-accent-translucent` | Links, topic labels |
| `tag-*` | positive and attention ramps | One accent per tag |

  The kit's own Tailwind names (`primary`, `secondary`, `muted`, `accent`, `surface`, `border`)
  mean fills and surfaces in the kit. Our markup does not reuse them for text.
- **Radii.** Our names follow the kit's role radii: `rounded-input` and `rounded-button` use
  the control radius, `rounded-card` the surface radius, and `rounded-feature` the dialog radius.

## Typography

- **IBM Plex Sans** (500/600) for headings (`h1`–`h3`, `.display`).
- **Inter** for body text and every kit control (`--sp-rw-font-family-default`).
- **Geist Mono** only for real code: commands, file names and URLs.
- Display text is 30–48px at weight 500 with tight tracking and balanced wrapping. Section titles
  are 20px at weight 600. Labels (`.label`) are 13px in sentence case.
- Use `tabular-nums` on counts, stars and page numbers.

## Components in use

| Need | Kit component | Where |
| --- | --- | --- |
| Main navigation | NavigationMenu | Header, with dropdowns for skills, guides, collections and agents |
| Mobile navigation | Sheet + Collapsible | Header menu button on phones |
| Theme switch | Menu (radio items) | Header |
| Icon hints | Tooltip | Header icon buttons |
| Actions and links | Button (`render={<Link/>}`) | Everywhere; filters are `shape="pill"` buttons |
| Copy | CopyButton | Install blocks, code blocks, Design.md pages |
| Breadcrumbs | Breadcrumb | Every detail page |
| Filters | Sidebar (contained) | `/skills`; on phones it becomes a sheet |
| Paging | Pagination | `/skills` |
| Per-agent install | Tabs inside Card | Skill pages |
| Questions | Accordion | Skill pages, with FAQPage JSON-LD |
| Raw SKILL.md | DetailDrawer | Local skill pages |
| Search | Dialog + Kbd + Skeleton | ⌘K palette (cmdk inside the Dialog) |
| Forms | Field, Input, Textarea | `/submit` |
| Empty results | Empty | `/skills` with no matches |
| Authors | Avatar | Skill cards and pages |
| Catalogue | DashboardShell and every other installed part | `/design-system` |

To add a kit component, run:

```bash
npx shadcn@4.18.0 add @siteplane/<name>
```

## Our own patterns

- **Link cards** (`.card`) use the kit's raised card surface and border. On hover only the border
  darkens.
- **Rows** (`.row`) are dense list items that fill with `hover` on hover.
- **Logo tiles** use full-color CC0 icons from Logoforge (`scripts/fetch-design-md-logos.mjs`,
  with sources in `content/design-md-logos.json`). They stay grayscale until hovered or focused,
  and use dark variants in dark mode.

## Interaction

- Colour, background and border transitions take about 140ms. Never animate layout.
- Hover styles apply only where a pointer can hover (`hover:` in Tailwind v4).
- Every control shows the kit's focus ring.
- Overlays use the kit's motion, which respects `prefers-reduced-motion`.

## Don'ts

- Don't hand-roll a button, input, menu, tab, dialog or drawer when the kit has one.
- Don't put a Tailwind import above the kit stylesheet, because that breaks the layer order.
- Don't edit `src/siteplane` by hand. Reinstall from the registry instead.
- Don't use more than one chromatic accent per component.
