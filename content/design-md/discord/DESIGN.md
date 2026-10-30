---
name: Discord
description: "Friendly chat UI on layered dark grays, with a blurple accent and playful illustration."
website: https://discord.com
color: "#5865F2"
category: Community
icon: discord
updated_at: "2026-10-29"
fonts:
  - gg sans
---

# Discord — DESIGN.md

> An independent summary of Discord's public design language, written by UI Skillbook for coding agents. Not affiliated with or endorsed by Discord. Color values are approximate.

## Overview

Discord balances a dense chat client with a playful brand. The app layers grays to separate servers, channels and messages.

## Color

| Role | Value | Use |
| --- | --- | --- |
| Blurple | `#5865F2` | Brand and primary actions |
| Green | `#57F287` | Online status |
| Red | `#ED4245` | Destructive, mentions |
| Dark gray | `#313338` | Chat background |

## Typography

gg sans for UI at 14–16px. Headlines on marketing pages are heavy and uppercase-friendly.

## Spacing and layout

Three-column app shell (servers, channels, chat) with compact message spacing.

## Components

- Server rail with round icons that square off on hover.
- Channel list with unread dots and mention badges.
- Message groups with avatar, name and timestamp.
- Rounded blurple buttons.

## Do

- Separate regions with background value steps.
- Use badges for unread and mentions.

## Don't

- Don't rely on borders in the dark app shell.
- Don't use blurple for destructive actions.

## Prompt for your agent

```
Style this interface in the spirit of Discord's design language, without copying its logo or brand assets.
Friendly chat UI on layered dark grays, with a blurple accent and playful illustration.
Follow the color roles, type and component notes in this DESIGN.md.
```
