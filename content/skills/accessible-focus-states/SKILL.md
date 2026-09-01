---
name: accessible-focus-states
title: Accessible Focus States
description: Keep a visible, high-contrast focus indicator on every interactive element, without a generic browser outline or none at all.
author:
  name: UI Skillbook
  url: https://uiskillbook.com
categories:
  - accessibility
  - interaction
agents:
  - claude-code
  - codex
  - cursor
  - opencode
  - universal
tasks:
  - form
  - navigation
  - design-system
tags:
  - accessibility
  - keyboard
  - focus
version: 1.0.0
updated_at: "2026-09-01"
license: MIT
curated: true
---

# Accessible Focus States

`outline: none` without a replacement is the single most common accessibility regression in hand-built UI. It doesn't just fail an audit — it makes the interface unusable for anyone navigating by keyboard.

## When to use

- Every interactive element: links, buttons, form fields, custom checkboxes/radios, menu items, tabs.
- Especially custom components built from `<div>`s that don't get a native focus ring for free.

## Principles

- Focus indication and hover indication are different states with different purposes — don't conflate them. Hover shows "you could click this," focus shows "keyboard input goes here right now."
- Use `:focus-visible` instead of `:focus` so the ring appears for keyboard navigation but not on every mouse click (matches user expectation without visual noise).
- Focus rings need at least 3:1 contrast against the adjacent background (WCAG 2.2 non-text contrast).

## Instructions

1. Never remove the default outline (`outline: none`) without providing a replacement that meets contrast requirements.
2. Style with `:focus-visible`, and provide a `:focus` fallback only for browsers that don't support it.
3. Offset the ring 2px from the element (`outline-offset: 2px`) so it doesn't get clipped by `overflow: hidden` containers or blend into the element's own border.
4. For custom components (div-based dropdowns, custom checkboxes), verify `tabindex` and ARIA roles are correct *before* styling focus — a ring on an unfocusable element is meaningless.
5. Test the full page by tabbing through it with the mouse untouched. Every interactive element must be reachable and visibly focused, in a logical order.

## Examples

```css
.control:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

## Avoid

- Don't use `box-shadow` alone for focus if it can be hidden by neighboring elements' stacking context — verify it's actually visible in context.
- Don't style focus and hover identically; users need to distinguish "I'm pointing at this" from "this is where my keystrokes go."

## References

- WCAG 2.2 Success Criterion 2.4.11 (Focus Not Obscured) and 1.4.11 (Non-text Contrast).
