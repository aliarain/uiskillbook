---
name: spacing-rhythm
title: Spacing That Doesn't Look AI-Generated
description: Use a consistent spacing scale and grouping logic instead of arbitrary padding values.
author:
  name: UI Skillbook
  url: https://uiskillbook.com
categories:
  - layout
  - visual
agents:
  - claude-code
  - codex
  - cursor
  - opencode
  - universal
tasks:
  - landing-page
  - dashboard
  - design-system
tags:
  - spacing
  - layout
  - grouping
version: 1.0.0
updated_at: "2026-09-01"
license: MIT
curated: true
---

# Spacing That Doesn't Look AI-Generated

The single most common tell of a rushed or AI-generated interface is inconsistent spacing: every gap is a slightly different, unrelated number, and related elements aren't visually grouped.

## When to use

- Any time you're laying out a new component or page from scratch.
- Reviewing an existing layout that "feels off" but you can't say why.

## Principles

- **Related elements sit closer together than unrelated ones.** Spacing communicates grouping before color or borders do (this is the Gestalt law of proximity, applied literally).
- Use a spacing scale (e.g. 4, 8, 12, 16, 24, 32, 48, 64) and never step outside it. Arbitrary values like `13px` or `22px` are a signal something wasn't deliberate.
- The gap *between* groups should be visibly larger than the gap *within* a group — usually at least 2x.

## Instructions

1. Pick a base unit (4px is standard) and only use multiples of it for margin/padding/gap.
2. When a section has a label + content, keep label-to-content spacing tight (4–8px) and section-to-section spacing loose (24–48px).
3. Audit a finished layout by turning on the browser's box-model outline — if you can't tell which elements belong together just from spacing, tighten the within-group gaps.
4. In card grids, the gap between cards should generally be smaller than each card's internal padding, or the grid reads as cluttered.

## Examples

```text
Card padding: 24px
Gap between cards: 16px
Gap between card sections: 40px+
```

## Avoid

- Don't add padding "until it looks right" without checking it against the scale — it accumulates into inconsistent rhythm across the page.
- Don't use equal spacing between every element on a page; uniform spacing removes all grouping information and makes dense layouts harder to scan.

## References

- Gestalt principle of proximity; 4/8pt grid systems used in most modern design systems (Material, Apple HIG, Tailwind's default scale).
