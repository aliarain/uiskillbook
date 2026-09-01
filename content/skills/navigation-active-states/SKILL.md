---
name: navigation-active-states
title: Navigation Active States
description: Make it unambiguous where the user is, at every level of nested navigation.
author:
  name: UI Skillbook
  url: https://uiskillbook.com
categories:
  - navigation
  - visual
agents:
  - claude-code
  - codex
  - cursor
  - opencode
  - universal
tasks:
  - navigation
  - dashboard
tags:
  - navigation
  - active-state
  - wayfinding
version: 1.0.0
updated_at: "2026-09-01"
license: MIT
curated: true
---

# Navigation Active States

A user should never have to check the URL bar to figure out where they are in an app. Weak or missing active states in nav are one of the most common causes of "I feel lost" feedback in usability tests.

## When to use

- Top-level nav bars, sidebars, tabs, breadcrumbs, and any nested navigation (settings sub-nav, multi-level sidebars).

## Principles

- The active indicator needs to be visible at a glance, without requiring the user to read label text and compare it to the URL.
- Nested navigation needs an active state **at every level**, not just the deepest one — a settings page three levels deep should show all three ancestor sections as active/highlighted.
- Active and hover states must be visually distinct from each other; if they look the same, users can't tell if they're currently viewing a section or just pointing at it.

## Instructions

1. Use more than color alone for the active indicator — color-blind users need a second signal (weight change, background fill, left-border accent, icon fill vs. outline).
2. For sidebars, highlight the full row (background) rather than just the text, so the active state is scannable in peripheral vision.
3. In nested nav, propagate the active state upward: if a child route is active, its parent section should also show as active (even if less prominently).
4. Match nav active-state logic to actual routing — use `startsWith` matching for parent sections, exact matching for leaf items, so a sub-page correctly keeps its parent highlighted.
5. Keep a consistent active-state treatment across all nav surfaces in the product (top nav, sidebar, tabs) — don't invent a new visual language for each one.

## Examples

```tsx
const isActive = pathname === href || pathname.startsWith(href + "/");
<Link
  href={href}
  className={isActive ? "bg-accent-subtle text-accent font-medium" : "text-secondary"}
>
```

## Avoid

- Don't rely solely on a bold font-weight change for active state — it's too subtle to notice at a glance, especially in a sidebar with many items.
- Don't make the active state indistinguishable from a disabled/inactive item — the color/weight direction should be opposite (more emphasis, not less).

## References

- Nielsen Norman Group research on navigation and wayfinding in the "Is There a Users' Manual?" and related usability studies.
