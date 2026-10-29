---
name: Vercel
description: "Strict black-and-white developer aesthetic built on Geist, hairline borders and a grid you can almost see."
website: https://vercel.com
color: "#000000"
category: Developer tools
updated_at: "2026-10-29"
---

# Vercel — DESIGN.md

> An independent summary of Vercel's public design language, written by UI Skillbook for coding agents. Not affiliated with or endorsed by Vercel. Color values are approximate.

## Overview

Vercel's language is monochrome and engineered. Structure comes from typography, 1px borders and alignment, with color reserved for status and the occasional gradient on marketing pages.

## Color

| Role | Value | Use |
| --- | --- | --- |
| Black | `#000000` | Primary buttons, headings |
| White | `#FFFFFF` | Canvas |
| Gray 100 | `#F2F2F2` | Hover, subtle fills |
| Blue (status) | `#0070F3` | Links, in-progress states |

## Typography

Geist Sans for UI and headings, Geist Mono for code, IDs and metadata. Headings are semibold with tight tracking; labels are small and often mono.

## Spacing and layout

A visible-feeling grid with 1px dividers between cells. Compact density in the dashboard, wide margins on marketing pages.

## Components

- Filled black primary button, white outlined secondary.
- Status dots (ready, building, error) next to deployment rows.
- Bordered cards with no shadow that darken their border on hover.
- Mono labels for metadata like commit hashes and regions.

## Do

- Use borders and alignment to build structure.
- Keep color for state, not decoration.

## Don't

- Don't use drop shadows on default cards.
- Don't mix more than two type families.

## Prompt for your agent

```
Style this interface in the spirit of Vercel's design language, without copying its logo or brand assets.
Strict black-and-white developer aesthetic built on Geist, hairline borders and a grid you can almost see.
Follow the color roles, type and component notes in this DESIGN.md.
```
