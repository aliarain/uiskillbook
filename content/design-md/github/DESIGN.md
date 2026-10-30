---
name: GitHub
description: "Primer: a functional, information-dense system with neutral grays, blue links and clear state colors."
website: https://github.com
color: "#1F2328"
category: Developer tools
icon: github
updated_at: "2026-10-29"
fonts:
  - Mona Sans
---

# GitHub — DESIGN.md

> An independent summary of GitHub's public design language, written by UI Skillbook for coding agents. Not affiliated with or endorsed by GitHub. Color values are approximate.

## Overview

GitHub's Primer system is utilitarian. It optimizes for scanning code, diffs and long lists, with consistent state colors that mean the same thing everywhere.

## Color

| Role | Value | Use |
| --- | --- | --- |
| Foreground | `#1F2328` | Text |
| Accent blue | `#0969DA` | Links, focus |
| Success green | `#1F883D` | Primary buttons, merged/open states |
| Border | `#D0D7DE` | Boxes and dividers |

## Typography

System font stack (with Mona Sans on marketing pages) for UI, a monospace stack for code. 14px is the default UI size; headings are semibold.

## Spacing and layout

4px/8px scale. Boxes with 1px borders and 6px radii group related content; rows are dense.

## Components

- Box component with header, rows and footer.
- Labels/pills tinted by state (open, closed, draft).
- Green primary button, gray default button.
- Tab nav with counters for issues, PRs and more.

## Do

- Use state colors consistently across the product.
- Favor dense, scannable rows for lists.

## Don't

- Don't use green for anything but success/primary.
- Don't hide important metadata behind hover.

## Prompt for your agent

```
Style this interface in the spirit of GitHub's design language, without copying its logo or brand assets.
Primer: a functional, information-dense system with neutral grays, blue links and clear state colors.
Follow the color roles, type and component notes in this DESIGN.md.
```
