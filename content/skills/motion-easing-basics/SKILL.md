---
name: motion-easing-basics
title: Motion Without Annoying People
description: Use short, purposeful easing curves that clarify state changes instead of decorating them.
author:
  name: UI Skillbook
  url: https://uiskillbook.com
categories:
  - motion
agents:
  - claude-code
  - codex
  - cursor
  - opencode
  - universal
tasks:
  - animation
  - other
tags:
  - motion
  - easing
  - transitions
version: 1.0.0
updated_at: "2026-09-01"
license: MIT
curated: true
---

# Motion Without Annoying People

Good interface motion is felt more than seen — it clarifies what just happened (this closed, that moved here) rather than calling attention to itself. Most motion mistakes come from durations that are too long or easing that doesn't match the physical metaphor.

## When to use

- State transitions: opening/closing menus, modals, toasts, accordions.
- Layout changes: reordering a list, expanding a card, page transitions.

## Principles

- Small UI elements (buttons, toggles, tooltips) move fast: 100–200ms. Larger elements (modals, panels, page transitions) can take 200–350ms. Beyond ~400ms, motion starts to feel like it's blocking the user.
- Things that enter should decelerate (`ease-out`); things that exit should accelerate (`ease-in`). This mirrors physical objects arriving and leaving.
- Never animate `width`/`height`/`top`/`left` if `transform` and `opacity` can achieve the same effect — the former forces layout recalculation and causes jank; the latter is GPU-composited.

## Instructions

1. Default to `ease-out` for anything appearing (modals, dropdowns, toasts) — fast start, gentle landing.
2. Default to `ease-in` (or just cut the duration in half) for anything disappearing — dismissal should feel quicker than arrival.
3. Keep hover/press micro-transitions under 150ms; anything slower feels laggy under the cursor.
4. Always wrap non-essential motion in a `prefers-reduced-motion` check and provide an instant or fade-only fallback.
5. Avoid animating more than one property with different timing curves at once unless it's a deliberate staggered effect — mismatched curves on simultaneous properties read as glitchy.

## Examples

```css
.modal-enter {
  transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1), opacity 220ms ease-out;
}
.modal-exit {
  transition: transform 150ms ease-in, opacity 150ms ease-in;
}

@media (prefers-reduced-motion: reduce) {
  .modal-enter, .modal-exit { transition: opacity 100ms linear; }
}
```

## Avoid

- Don't use linear easing for UI motion — it reads as mechanical and cheap compared to eased curves.
- Don't add motion to something just because it's technically possible (bouncing icons, spinning logos) — if it doesn't communicate a state change, cut it.
- Don't let animation duration scale with content size (e.g. a longer list taking longer to animate in) — keep durations fixed and predictable.

## References

- Material Design's motion duration/easing tokens; Disney's classic animation principle of "slow in, slow out."
