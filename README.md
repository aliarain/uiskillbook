# UI Skillbook

**The field guide for building better interfaces with AI.**

Curated UI skills, rules, patterns, and agent instructions for humans and coding
agents — built for developers browsing manually, AI agents consuming structured
skills, and designers looking for implementation guidance.

[uiskillbook.com](https://uiskillbook.com)

## What it is

UI Skillbook answers one question: *"I'm building this UI — what skill should my
agent know before touching the code?"* Not: here are five thousand random prompts.

- **Skills** — single, focused instructions (`optical-alignment`, `spacing-rhythm`,
  `pressed-button-feedback`...) with a predictable schema, rendered for humans and
  copy-pasteable for agents.
- **Chapters** — multi-skill lessons on a practical problem ("Making buttons feel
  right", "Designing dense dashboards").
- **Collections** — skills grouped around a job to be done ("Ship a polished landing
  page", "Audit accessibility").
- **Agents** — per-agent pages (Claude Code, Codex, Cursor, OpenCode, Copilot,
  Command Code) showing which skills work where.

## Tech stack

- [Next.js](https://nextjs.org) (App Router, TypeScript) deployed on [Vercel](https://vercel.com)
- Tailwind CSS v4
- Content as markdown, indexed at build time — no database
- [`cmdk`](https://cmdk.paco.me) for the `⌘K` search palette

## Getting started

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Content model

Every locally-authored skill lives in `content/skills/<slug>/SKILL.md`: YAML
frontmatter plus a markdown body with a fixed section structure.

```yaml
---
name: optical-alignment
title: Optical Alignment
description: Align interface elements by perceived visual weight, not just mathematical geometry.
author:
  name: Your Name
  url: https://example.com
categories: [visual, typography]
agents: [claude-code, codex, cursor, opencode, universal]
tasks: [landing-page, navigation]
tags: [icons, alignment]
version: 1.0.0
updated_at: "2026-09-01"
license: MIT
curated: true
---

# Optical Alignment

## When to use
## Principles
## Instructions
## Examples
## Avoid
## References
```

`content/chapters/*.md` and `content/collections/*.md` follow the same pattern —
frontmatter plus a `skills: [slug, slug, ...]` list referencing skills by slug.

### External skills

Not every skill needs to be hosted here. `content/external-skills.json` indexes
skills that live in other public repositories — metadata only (title, description,
categories, author, source link), no copied content. Their detail pages link out to
the source and offer a "Copy for agent" prompt that points an agent at the raw file
directly, the same way UI Skillbook's own agent-discovery routes work. Skills
sourced this way are marked **External** wherever they're listed.

## Adding a skill

Two ways in:

1. **Open a pull request.** Add a folder under `content/skills/<slug>/SKILL.md`
   following the schema above, or add an entry to `content/external-skills.json` if
   you're pointing at a skill hosted elsewhere.
2. **Use [`/submit`](https://uiskillbook.com/submit).** Fills out a form and opens a
   pre-filled GitHub issue against this repo using the
   [skill submission template](.github/ISSUE_TEMPLATE/skill-submission.yml).

Every submission is checked against the curation criteria on the
[About page](https://uiskillbook.com/about) before it's added: concrete purpose,
usable instruction (not generic AI filler), no duplicate of an existing skill,
attribution preserved, source linked, license stated.

## Deployment

The `main` branch is connected to a Vercel project — every push deploys
automatically. `opensrc/` (a local-only reference clone used during development,
never committed) and `node_modules/` are excluded via `.gitignore`.

## License

MIT — see [LICENSE](LICENSE).

## Credits

Built by [Ali Arain](https://aliarain.com) ([@realaliarain](https://x.com/realaliarain)
on X).
