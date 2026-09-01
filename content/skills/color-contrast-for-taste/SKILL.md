---
name: color-contrast-for-taste
title: Color Contrast for Taste, Not Just Compliance
description: Use accessible contrast ratios as a floor, then build restrained hierarchy on top of them rather than treating them as the whole job.
author:
  name: UI Skillbook
  url: https://uiskillbook.com
categories:
  - visual
  - accessibility
  - taste
agents:
  - claude-code
  - codex
  - cursor
  - opencode
  - universal
tasks:
  - design-system
  - landing-page
tags:
  - color
  - contrast
  - accessibility
version: 1.0.0
updated_at: "2026-09-01"
license: MIT
curated: true
---

# Color Contrast for Taste, Not Just Compliance

Passing a WCAG contrast checker is necessary but not sufficient for good visual hierarchy. A page where every piece of text is pure black on white technically passes AAA everywhere and still has no hierarchy at all — nothing is quieter than anything else.

## When to use

- Establishing a text color system for a new product or design system.
- Reviewing an interface that feels flat or, conversely, harsh and high-contrast everywhere.

## Principles

- Use at least three text-color tiers — primary, secondary, muted — each meeting a *different* minimum contrast target on purpose: primary for body/headings (≥7:1 ideally), secondary for supporting text (≥4.5:1), muted for metadata/timestamps (≥3:1, non-text-adjacent use only).
- Never drop below 4.5:1 for any text that conveys meaning on its own (labels, body copy, button text). The 3:1 tier is only for decorative or purely supplementary text (a timestamp next to a message that already has full context).
- Accent color should be reserved for interactive/actionable elements. If everything is colored, the accent stops signaling "you can act on this."

## Instructions

1. Define primary/secondary/muted text tokens up front and check each against your actual background color with a contrast checker — don't eyeball it.
2. Use muted text sparingly and never as the *only* text in a UI element a user needs to read to complete a task.
3. Reserve the accent color for links, primary buttons, active/selected states, and status — not for headings or decorative flourishes.
4. When in doubt between two shades for a given tier, pick the one with higher contrast — visual quietness comes from restraint in *what* gets colored, not from every individual color being washed out.
5. Re-verify contrast in both light and dark themes independently; a ratio that works in light mode does not automatically translate.

## Examples

```css
--text-primary: #181817;   /* ~16:1 on #F7F7F2 */
--text-secondary: #686863; /* ~5.3:1 on #F7F7F2 */
--text-muted: #92928A;     /* ~3.1:1 — decorative/metadata only */
```

## Avoid

- Don't use the muted tier for any text a user must read to understand the interface's state (error messages, required labels).
- Don't add a second accent color "for variety" — a single accent color used consistently reads as more intentional than two competing ones.

## References

- WCAG 2.2 Success Criterion 1.4.3 (Contrast Minimum) and 1.4.6 (Contrast Enhanced) as the compliance floor, not the design target.
