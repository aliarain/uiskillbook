---
name: empty-state-design
title: Empty States That Do Something
description: Treat empty states as an onboarding opportunity, not a placeholder to fill later.
author:
  name: UI Skillbook
  url: https://uiskillbook.com
categories:
  - visual
  - taste
agents:
  - claude-code
  - codex
  - cursor
  - opencode
  - universal
tasks:
  - dashboard
  - empty-state
  - other
tags:
  - empty-states
  - onboarding
  - copy
version: 1.0.0
updated_at: "2026-09-01"
license: MIT
curated: true
---

# Empty States That Do Something

An empty state is the first thing a new user sees in any given screen. Treating it as an afterthought ("No data yet") wastes the highest-leverage moment for guiding someone toward their first successful action.

## When to use

- Any list, table, or dashboard section that can be legitimately empty (new account, no results, cleared inbox).
- Search results with zero matches.

## Principles

- Distinguish **zero-state** (never had data — new user) from **filtered-empty** (data exists, current filters hide it) from **cleared** (user actively emptied it, e.g. inbox zero). Each needs different copy and a different next action.
- Every empty state should answer: what is this section for, and what's the one action that fills it?
- Cleared/success empty states (inbox zero, all tasks done) should feel rewarding, not identical to a broken/error state.

## Instructions

1. Zero-state: explain the section's purpose in one line, then show a single primary CTA ("Create your first project").
2. Filtered-empty: state which filters are active and offer a one-click "Clear filters" — don't just say "No results."
3. Cleared/success: use distinct, positive copy ("You're all caught up") rather than reusing zero-state copy.
4. Keep illustration/iconography minimal and on-brand; don't default to a generic stock "empty box" graphic if the product has its own visual language.
5. If the section supports import or bulk-add, surface that action here — it's often the fastest path to a filled state.

## Examples

```text
Zero-state:     "No projects yet. Projects group your work by client."
                 [ + New project ]

Filtered-empty:  "No tasks match 'Overdue' + 'Assigned to me'."
                 [ Clear filters ]

Cleared:         "Inbox zero. Nice work."
```

## Avoid

- Don't show the same "No data" message for all three cases — it forces the user to guess whether something is broken.
- Don't bury the primary action below decorative copy or illustration; put it where the eye lands first.

## References

- Common pattern across Linear, Notion, and Gmail's "zero unread" state.
