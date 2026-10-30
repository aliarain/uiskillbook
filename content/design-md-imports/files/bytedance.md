# ByteDance Design System

> Global content platform design with bold red-and-black identity, creator-economy surfaces, dynamic motion, and algorithm-powered UX.

---

## 1. Visual Theme & Atmosphere

ByteDance should feel dynamic, global, and creator-forward. The design language spans short video, live commerce, music, gaming, and enterprise AI — connected by energetic motion and algorithmic surfaces.

- Mood: energetic, bold, youthful, global
- Density: high, with content feeds, creator dashboards, and live commerce surfaces
- Character: vivid red accent, true black canvas, white contrast, fluid motion

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--bd-red` | `#FE2C55` | Primary brand and CTA (TikTok core) |
| `--bd-cyan` | `#25F4EE` | Secondary brand (TikTok duotone) |
| `--bd-black` | `#010101` | Primary dark surface |
| `--bd-white` | `#FFFFFF` | Text on dark, light surfaces |
| `--bd-gold` | `#FFD700` | Live gifts and top-creator highlights |
| `--bd-green` | `#22C55E` | Revenue positive and follower growth |
| `--surface-feed` | `#000000` | Video feed background |
| `--surface-card` | `#1A1A1A` | Dark content cards |
| `--surface-light` | `#F9FAFB` | Light product surfaces |
| `--text-primary` | `#FFFFFF` | Text on dark surfaces |
| `--text-on-light` | `#111827` | Text on light surfaces |

The TikTok duotone (red + cyan) is a signature identity element. Use together for brand moments; never use cyan as a standalone primary.

## 3. Typography Rules

```css
--font-sans: "ProximaNova", Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-display: "TikTok Display", "ProximaNova", sans-serif;
--font-mono: "SF Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 72px | 800 | 1.0 |
| Page Title | 44px | 700 | 1.1 |
| Section Title | 28px | 700 | 1.2 |
| Card Title | 20px | 600 | 1.3 |
| Body | 15px | 400 | 1.6 |
| Caption | 13px | 400 | 1.4 |
| Label | 12px | 700 | 1.3 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 48px;
  padding: 0 24px;
  border: none;
  border-radius: 999px;
  background: #FE2C55;
  color: #FFFFFF;
  font: 700 16px/1 Inter, sans-serif;
}

.creator-card {
  border-radius: 16px;
  background: #1A1A1A;
  color: #FFFFFF;
  padding: 20px;
  overflow: hidden;
}

.live-badge {
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 999px;
  background: #FE2C55;
  color: #FFFFFF;
  font: 700 12px/1 Inter, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.duotone-logo {
  filter: drop-shadow(2px 2px 0 #25F4EE) drop-shadow(-2px -2px 0 #FE2C55);
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Action icon spacing |
| `--space-4` | `16px` | Card padding rhythm |
| `--space-6` | `24px` | Feed item separation |
| `--space-12` | `48px` | Section breakpoints |

Full-bleed video is the primary surface. Overlay actions (like, comment, share) anchor to the right edge. Creator branding overlays on the bottom-left.

## 6. Depth & Elevation

```css
.shadow-overlay { box-shadow: 0 -80px 60px rgba(0, 0, 0, 0.60) inset; }
.shadow-card    { box-shadow: 0 8px 24px rgba(0, 0, 0, 0.40); }
.shadow-live    { box-shadow: 0 0 0 2px #FE2C55; }
```

Gradient overlays on video are essential for text legibility. Use vignette-style bottom shadows on the feed.

## 7. Do's and Don'ts

Do treat video as the full canvas — no chrome on the player itself. Do use the red+cyan duotone only for brand signature moments. Do not use cyan as a standalone CTA color. Do not overload video overlays with text. Do make creator stats and engagement numbers immediately visible.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Full-screen vertical video feed (native) |
| Tablet | `768px` | Side-by-side feed and creator info |
| Desktop | `1200px` | Creator dashboard, analytics, and content management |

Mobile is the canonical surface. Desktop views serve creators and advertisers, not viewers.

## 9. Agent Prompt Guide

Design like ByteDance: vivid red-and-cyan TikTok identity, bold heavy type, full-bleed dark video surfaces, creator-economy overlays, live commerce badges, and algorithm-driven content hierarchy.
