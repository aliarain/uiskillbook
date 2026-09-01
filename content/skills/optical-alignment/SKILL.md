---
name: optical-alignment
title: Optical Alignment
description: Align interface elements by perceived visual weight, not just mathematical geometry.
author:
  name: UI Skillbook
  url: https://uiskillbook.com
categories:
  - visual
  - typography
agents:
  - claude-code
  - codex
  - cursor
  - opencode
  - universal
tasks:
  - landing-page
  - navigation
  - design-system
tags:
  - icons
  - alignment
  - typography
version: 1.0.0
updated_at: "2026-09-01"
license: MIT
curated: true
---

# Optical Alignment

Mathematical centering is not the same as visual centering. Shapes with different weight, stroke, or fill read as misaligned even when their bounding boxes match exactly.

## When to use

- Aligning an icon next to text (in a button, nav item, or list row).
- Centering a triangular "play" glyph, an arrow, or any asymmetric shape.
- Vertically centering text of two different weights or sizes in the same row.

## Principles

- The eye tracks **ink**, not bounding boxes. A circle and a square of identical box size do not look the same size — the circle needs to be slightly larger to read as equal.
- Asymmetric shapes (play triangle, arrow, chevron) have their visual center offset from their geometric center. Nudge them 1–2px toward the "heavy" side.
- Baseline alignment beats box alignment for mixed type sizes: align on the text baseline, not the container edge.

## Instructions

1. Never trust `align-items: center` blindly for icon + text pairs — check the rendered result at 2x zoom.
2. For play/arrow-style glyphs, shift 1–2px in the direction the shape "points," so the visual mass centers correctly.
3. When mixing font sizes in one row (e.g. a large number + a small label), align by baseline, then apply a small manual offset if the fonts have different x-heights.
4. Re-check alignment at the smallest size the component ships at — optical errors compound at small sizes.

## Examples

```tsx
// A play icon in a button needs a manual nudge — pure centering looks off-center
<button className="flex items-center justify-center">
  <PlayIcon className="translate-x-[1px]" />
</button>
```

## Avoid

- Don't fix optical misalignment by eyeballing every instance separately — codify the offset as a token or variant so it's consistent.
- Don't apply the same nudge to every icon; only asymmetric shapes need it. Symmetric icons (circles, squares) usually don't.

## References

- Concept borrowed from print typography's long history of optical vs. mathematical spacing.
