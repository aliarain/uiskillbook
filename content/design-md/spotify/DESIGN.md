---
name: Spotify
description: "Dark, album-art-forward media UI with a signature green and bold, condensed-feeling headlines."
website: https://www.spotify.com
color: "#1DB954"
category: Media
icon: spotify
updated_at: "2026-10-29"
---

# Spotify — DESIGN.md

> An independent summary of Spotify's public design language, written by UI Skillbook for coding agents. Not affiliated with or endorsed by Spotify. Color values are approximate.

## Overview

Spotify recedes into a near-black canvas so album artwork provides the color. The brand green marks play and primary actions.

## Color

| Role | Value | Use |
| --- | --- | --- |
| Spotify green | `#1DB954` | Play button, primary CTA |
| Background | `#121212` | App canvas |
| Surface | `#181818` | Cards |
| Text secondary | `#B3B3B3` | Metadata |

## Typography

Spotify's own sans (Circular, later Spotify Mix) in bold weights for titles, regular for metadata. Large, tight headings on playlist headers.

## Spacing and layout

Card grids of square artwork with consistent gutters; headers use gradients pulled from the artwork.

## Components

- Round green play button that appears on card hover.
- Playlist header with art, title, owner and stats.
- Track rows with index, title, album, duration.
- Persistent bottom player bar.

## Do

- Let artwork supply the color.
- Keep primary actions circular and obvious.

## Don't

- Don't put text on busy artwork without a scrim.
- Don't use the green for decoration.

## Prompt for your agent

```
Style this interface in the spirit of Spotify's design language, without copying its logo or brand assets.
Dark, album-art-forward media UI with a signature green and bold, condensed-feeling headlines.
Follow the color roles, type and component notes in this DESIGN.md.
```
