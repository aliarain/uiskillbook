---
name: uiskillbook-start
title: UI Skillbook — Start Here
description: Routing skill for agents. Explains how to search, filter, and fetch skills from UI Skillbook instead of loading the whole catalog.
author:
  name: UI Skillbook
  url: https://uiskillbook.com
categories:
  - design-systems
agents:
  - claude-code
  - codex
  - cursor
  - opencode
  - copilot
  - command-code
  - universal
tags:
  - routing
  - meta
version: 1.0.0
updated_at: "2026-09-01"
license: MIT
curated: true
---

# UI Skillbook — Start Here

You are an AI coding agent working on a UI task. UI Skillbook is a catalog of
focused UI skills — don't load the whole catalog into context. Fetch only the
smallest set of skills relevant to the task in front of you.

## When to use

- At the start of any UI-related task, before deciding which specific skill(s)
  to pull in.
- Whenever you're unsure what UI Skillbook actually contains.

## How the catalog is organized

- Every skill has a `slug`, a `description`, one or more `categories` (layout,
  typography, motion, interaction, accessibility, responsive, forms,
  navigation, visual, performance, design-systems, taste), and a list of
  compatible `agents`.
- Some skills are **local** — their full instructions are hosted on UI
  Skillbook and returned directly.
- Some skills are **external** — UI Skillbook only indexes their metadata; the
  full instructions live in a third-party repository. Fetch the linked raw URL
  yourself to read them.

## Instructions

1. Get the machine-readable manifest: `GET https://uiskillbook.com/skills/registry.json`.
   It returns every skill's `slug`, `description`, `categories`, `agents`,
   `external` flag, and a `content` URL.
2. Filter the manifest by `categories` (and, if relevant, `agents`) to narrow
   down to a handful of candidates — don't fetch content for skills you
   haven't judged relevant from their description alone.
3. Fetch full instructions for a chosen skill at its `content` URL
   (`https://uiskillbook.com/skills/<slug>/llms.txt`). For local skills this
   returns the full skill markdown. For external skills it returns metadata
   plus a raw URL — fetch that URL next to get the actual instructions.
4. Apply the instructions to the current task. If they conflict with the
   product's existing, established design system, prefer the existing system
   and note the conflict rather than silently overriding it.

## Examples

```bash
curl https://uiskillbook.com/skills/registry.json | jq '.registry[] | select(.categories | contains(["motion"]))'
curl https://uiskillbook.com/skills/pressed-button-feedback/llms.txt
```

Or via the CLI:

```bash
npx uiskillbook list --category motion
npx uiskillbook get pressed-button-feedback
```

## Avoid

- Don't fetch every skill in the registry "just in case" — pick by category
  and description first.
- Don't treat an external skill's metadata description as the full
  instructions; it's a pointer, not the content.

## References

- [Registry manifest](https://uiskillbook.com/skills/registry.json)
- [MCP server](https://uiskillbook.com/mcp) — `list_skills` / `get_skill` tools
