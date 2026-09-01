---
name: data-table-scannability
title: Data Table Scannability
description: Structure table rows and columns so the eye can scan down and across without losing its place.
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
  - data-table
  - dashboard
tags:
  - tables
  - data
  - scanning
version: 1.0.0
updated_at: "2026-09-01"
license: MIT
curated: true
---

# Data Table Scannability

A table that's technically correct can still be unreadable if rows blur together and the eye can't track across a wide table without losing the row.

## When to use

- Any data table over ~5 rows or ~4 columns, especially with numeric data.

## Principles

- Zebra striping and hover-row highlighting solve different problems: striping helps scan *down* a wide table, hover highlighting helps track *across* a specific row. Use hover highlighting first; add striping only for genuinely wide, dense tables.
- Column alignment communicates data type before the user reads it: right-align numbers, left-align text, center-align short categorical/status values.
- The first column usually needs to stay pinned/sticky on horizontal scroll — it's the row's identity, and losing it while scrolling right defeats the table's purpose.

## Instructions

1. Left-align text columns, right-align numeric columns, and never center-align a numeric column — centering breaks the ability to compare magnitudes at a glance.
2. Add a hover state on the full row (not just the cell under the cursor) so users can track a row across many columns.
3. Keep row height consistent and generous enough for touch targets (44px minimum) if the table is interactive, tighter (32–36px) if it's read-only and dense.
4. Sort indicators belong in the column header, always visible on hover, and should show current sort direction, not just "sortable."
5. For very wide tables, pin the identifying column(s) with `position: sticky; left: 0` and give it a subtle shadow/border to indicate it's floating above scrolled content.

## Examples

```css
tbody tr:hover { background: var(--surface); }
td.numeric { text-align: right; font-variant-numeric: tabular-nums; }
th:first-child, td:first-child { position: sticky; left: 0; background: inherit; }
```

## Avoid

- Don't strip all visual separation between rows in the name of minimalism — some boundary (hover, subtle border, or striping) is necessary once a table exceeds a handful of rows.
- Don't truncate identifying text (names, IDs) without a tooltip or expand affordance — silent truncation makes rows indistinguishable.

## References

- Common convention across spreadsheet software (right-aligned numbers) applied to web data tables.
