---
name: UI Skillbook
description: Quiet, editorial, light-first interface. Hairline borders instead of shadows, monochrome type for structure, one blue accent used sparingly.
updated_at: "2026-10-29"
---

# UI Skillbook — DESIGN.md

This file is the design system for uiskillbook.com. The tokens live in
`src/app/globals.css` (`:root`, `.dark` and `@theme inline`). Components use the
semantic Tailwind names below, never raw hex values.

## Principles

- **Quiet and editorial.** Type and spacing build the structure. Decoration is rare.
- **Hairlines, not shadows.** Containers get a 1px `border` token. Default cards have no shadow.
- **One accent.** Blue marks links, active states and focus. It is never a large fill.
- **One primary action per surface.** It is a filled black (white in dark mode) button.
- **Compact density.** Built on a 4px grid with dense lists and short rows.

## Color

Semantic tokens. Each one has exactly one job. Dark mode keeps the same roles.

| Token (Tailwind) | Light | Dark | Role |
| --- | --- | --- | --- |
| `background` | `#ffffff` | `#0a0a0a` | Page canvas, default card fill |
| `surface` | `#fafafa` | `#111111` | Muted cards, footer, code |
| `hover` | `#f5f5f5` | `#1a1a1a` | Hover and selected rows |
| `border` | `#e5e5e5` | `#262626` | Default hairline on cards, inputs, dividers |
| `border-strong` | `#d4d4d4` | `#3a3a3a` | Hovered borders, scrollbars |
| `strong` | `#0a0a0a` | `#fafafa` | Display headings, wordmark |
| `primary` | `#171717` | `#ededed` | Body text and headings |
| `secondary` | `#525252` | `#a3a3a3` | Muted body, descriptions |
| `muted` | `#737373` | `#8a8a8a` | Labels, placeholders, metadata (≥ 4.5:1 on canvas) |
| `faint` | `#a3a3a3` | `#5c5c5c` | Decorative only: separators, row numbers |
| `accent` | `#2563eb` | `#60a5fa` | Links, active state, focus ring |
| `accent-subtle` | `#dbeaff` | `#13233f` | Active nav and filter tint |
| `accent-on-subtle` | `#1d4ed8` | `#93c5fd` | Text on the tint (accent alone is 4.2:1 there) |
| `cta` / `cta-foreground` | `#0a0a0a` / `#ffffff` | `#fafafa` / `#0a0a0a` | The one primary button |

Tag accents are for pills and badges only, and only one per component:
green `tag-green` on `tag-green-bg`, orange `tag-orange` on `tag-orange-bg` and
violet `tag-violet` on `tag-violet-bg`.

## Typography

- **Inter** for all text. **Geist Mono** only for real code, such as commands, file names and URLs.
- **Display** (`.display`): 30–48px, weight 500, `-0.02em` tracking, line height about 1.08, balanced wrapping. Never below 30px.
- **Section title**: 20px, weight 600.
- **Body**: 16px at 1.5. **Dense UI**: 14px at 1.43. **Labels** (`.label`): 13px, weight 500, sentence case, untracked. No tracked capitals.
- **Scale**: 11, 13, 14, 16, 18, 20, 24, 30, 36, 48.
- Use `tabular-nums` on counts, stars and pagination.

## Spacing and shape

- 4px base unit. Gaps between elements are 8px, card padding is 16–20px and sections are 64px apart.
- Page max width is 1200px with 24px gutters.
- **Radii, and only these:** pill `9999px` (tags, chips, nav items), `rounded-button` 8px, `rounded-input` 6px, `rounded-card` 12px and `rounded-feature` 16px (large and feature cards, the hero, the palette).

## Elevation

Used rarely:

- `shadow-button`: `0 1px 2px rgba(0,0,0,.05)` on buttons.
- `shadow-ring`: a 4px `rgba(0,0,0,.1)` ring for elevated feature cards.
- `shadow-hero`: the command palette and other floating panels.

## Components

- **Nav item** (`.pill` without border): ghost pill with 16px horizontal padding. The active item uses the `accent-subtle` tint and accent text, set through `aria-current="page"`.
- **Buttons** (`.btn`): 36px tall with an 8px radius, 14px text at weight 500. `.btn-primary` is the filled CTA. `.btn-secondary` is white with a 1px border.
- **Chips** (`.pill`): filters and tags. The selected state comes from `aria-current` or `aria-pressed`, not a separate class.
- **Inputs**: white background, 1px border, 6px radius, 8×12px padding, and 16px text on mobile.
- **Cards** (`.card`): 1px border, 12px radius, no shadow. On hover only the border darkens.
- **Rows** (`.row`): dense list items that fill with `hover` on hover.
- **Logo tiles**: neutral until hovered or focused, then the brand color.
- **Hero**: optional faint dotted grid (`.dot-grid`).

## Interaction

- Transitions run 140ms on `color`, `background-color` and `border-color` only. Never `transition: all`, and never animate layout.
- Hover styles sit inside `@media (hover: hover)` (Tailwind's `hover:` already does this), so they never stick on touch.
- Every interactive element shows the `:focus-visible` ring: a 2px accent outline with a 2px offset.
- Overlays fade and scale in over 150ms. Under `prefers-reduced-motion` they only fade.

## Don'ts

- No heavy drop shadows, and no shadows on default cards.
- No blue backgrounds, and no accent as a large fill.
- No radius outside the set above.
- No display type below 30px. No tracked uppercase labels. No middle-dot meta strings.
- Never more than one chromatic accent per component.
