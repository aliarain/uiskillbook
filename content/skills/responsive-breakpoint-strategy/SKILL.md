---
name: responsive-breakpoint-strategy
title: Responsive Breakpoint Strategy
description: Choose breakpoints based on where your content actually breaks, not a fixed device-width list.
author:
  name: UI Skillbook
  url: https://uiskillbook.com
categories:
  - responsive
  - layout
agents:
  - claude-code
  - codex
  - cursor
  - opencode
  - universal
tasks:
  - mobile-interface
  - dashboard
  - landing-page
tags:
  - responsive
  - breakpoints
  - layout
version: 1.0.0
updated_at: "2026-09-01"
license: MIT
curated: true
---

# Responsive Breakpoint Strategy

Copy-pasting Bootstrap's or Tailwind's default breakpoints (`640px, 768px, 1024px, 1280px`) works fine as a starting point, but treating them as sacred causes layouts that look fine at the named breakpoints and break at everything in between.

## When to use

- Any layout that needs to work across phone, tablet, and desktop widths.
- Component-level responsiveness (a card grid, a sidebar) as much as page-level.

## Principles

- Breakpoints should be defined by **content**, not devices. Resize the browser slowly and note the width where the layout actually starts to look wrong — that's your breakpoint, not an arbitrary device width.
- Prefer container queries over viewport media queries for components that get reused in different contexts (a card that appears both in a wide grid and a narrow sidebar needs to respond to its own container's width, not the page's).
- Design mobile-first (base styles = smallest screen, `min-width` media queries add complexity upward) — it forces prioritization of what's essential.

## Instructions

1. Start with the single-column, smallest-viewport version of a layout and get content hierarchy right before adding responsive complexity.
2. Add a breakpoint only when the current layout visibly breaks (text wrapping awkwardly, elements overlapping, excessive whitespace) — not preemptively at standard device widths.
3. For reusable components, use container queries (`@container`) so the component adapts to its slot, not the viewport.
4. Test the messy middle widths (600–900px, common for split-screen desktop windows and tablets), not just phone and full-desktop widths.
5. Keep the number of breakpoints small — 3 to 4 is usually enough. Every additional breakpoint is another layout to test and maintain.

## Examples

```css
.card-grid {
  container-type: inline-size;
}
@container (min-width: 480px) {
  .card { flex-direction: row; }
}
```

## Avoid

- Don't hardcode `@media (max-width: 768px)` throughout a codebase — centralize breakpoint values as tokens so they can change in one place.
- Don't design only for the exact breakpoint widths; check the pixels just before and after each one.

## References

- CSS Container Queries (baseline-available in all major browsers as of 2023); content-first responsive design as popularized by Ethan Marcotte.
