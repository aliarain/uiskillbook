---
name: Linear
description: "Dark-first, keyboard-driven product UI with crisp Inter type, low-contrast chrome and a restrained indigo accent."
website: https://linear.app
color: "#5E6AD2"
category: Productivity
icon: linear
updated_at: "2026-10-29"
---

# Linear — DESIGN.md

> An independent summary of Linear's public design language, written by UI Skillbook for coding agents. Not affiliated with or endorsed by Linear. Color values are approximate.

## Overview

Linear is built for speed. The interface stays out of the way: muted chrome, dense lists, fast transitions, and every action reachable from the keyboard or a command menu.

## Color

| Role | Value | Use |
| --- | --- | --- |
| Indigo (accent) | `#5E6AD2` | Selection, primary actions |
| Background (dark) | `#08090A` | App canvas |
| Surface (dark) | `#151516` | Panels, menus |
| Text (dark) | `#F7F8F8` | Primary text |

## Typography

Inter for UI and Inter Display for large headings, with tight negative tracking at display sizes. UI text is small (13–14px) and medium weight so dense lists stay legible.

## Spacing and layout

Compact 4px-based spacing. Lists use 32–36px rows; panels are separated by 1px low-contrast borders instead of gaps.

## Components

- Command menu (⌘K) as the primary navigation surface.
- Issue rows with status icon, ID, title and assignee on one line.
- Subtle gradients and glows on marketing pages only, never in the app.
- Keyboard hints shown inline next to menu items.

## Do

- Animate quickly (under 150ms) and only on opacity and transform.
- Show keyboard shortcuts wherever an action is listed.

## Don't

- Don't add decorative color inside the product.
- Don't make rows taller than the content needs.

## Prompt for your agent

```
Style this interface in the spirit of Linear's design language, without copying its logo or brand assets.
Dark-first, keyboard-driven product UI with crisp Inter type, low-contrast chrome and a restrained indigo accent.
Follow the color roles, type and component notes in this DESIGN.md.
```
