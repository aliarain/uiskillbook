---
name: dashboard-information-density
title: Dashboard Information Density
description: Fit more real information on screen without it reading as cluttered, by controlling hierarchy instead of shrinking everything uniformly.
author:
  name: UI Skillbook
  url: https://uiskillbook.com
categories:
  - layout
  - design-systems
agents:
  - claude-code
  - codex
  - cursor
  - opencode
  - universal
tasks:
  - dashboard
  - data-table
tags:
  - density
  - dashboards
  - hierarchy
version: 1.0.0
updated_at: "2026-09-01"
license: MIT
curated: true
---

# Dashboard Information Density

Dense doesn't have to mean cluttered. Professional tools (trading terminals, admin panels, analytics dashboards) pack far more information per screen than consumer apps, and still read as organized — because density is controlled through hierarchy, not just smaller font sizes.

## When to use

- Building dashboards, admin panels, or any screen where users are power users checking it repeatedly, not first-time visitors.

## Principles

- Density is a spectrum the user should control (compact/comfortable toggle), not a fixed decision you make for everyone.
- A dense layout still needs one clear focal point per screen. Don't give every metric equal visual weight — that's what makes density feel chaotic instead of efficient.
- Numbers should align on the decimal point or right edge (`font-variant-numeric: tabular-nums`) so columns of figures are scannable at a glance.

## Instructions

1. Establish a type scale with at least 3 tiers for a dense screen: primary metric, label, and secondary/meta text. Don't use just two sizes for everything.
2. Use borders and background shading sparingly — whitespace and alignment do more work than dividers in a dense grid.
3. Right-align numeric columns; left-align text columns. Never center-align tabular data.
4. Group related metrics into cards or sections with consistent internal padding — don't let a dense grid become one undifferentiated wall of numbers.
5. Reserve color for status/deviation (up/down, over/under threshold), not decoration. In a dense screen, every color used for decoration competes with color used for meaning.

## Examples

```css
.metric-value {
  font-variant-numeric: tabular-nums;
  text-align: right;
}
```

## Avoid

- Don't just apply `font-size: 12px` everywhere and call it "compact mode" — that reduces legibility without improving actual information hierarchy.
- Don't remove all whitespace to fit more in; a small amount of consistent padding is what keeps dense layouts scannable instead of overwhelming.

## References

- Terminal-style trading UIs (Bloomberg Terminal) and analytics tools (Datadog, Grafana) as density benchmarks.
