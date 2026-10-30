# Cloudinary Design System

> Visual media platform design with official blue foundations, sky-inspired accents, and practical asset workflow clarity.

---

## 1. Visual Theme & Atmosphere

Cloudinary should feel like technical media infrastructure made visually fluent. The system serves developers, marketers, and enterprise asset teams, so it needs API credibility plus polished image and video workflow presentation.

- Mood: visual, reliable, technical, fluid, enterprise-ready
- Density: medium, with workflow cards and media examples
- Character: official blue palette, clean cloud glyph cues, asset preview panels

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--cloudinary-blue` | `#3448C5` | Reserved brand/logo blue |
| `--sky-blue` | `#0D9AFF` | Primary action and highlight |
| `--aegean-blue` | `#23436A` | Dark brand surface |
| `--cetacean-blue` | `#1B295D` | Deep technical panel |
| `--cloud-grey` | `#E3E9EF` | Neutral surface |
| `--turquoise` | `#48C4D8` | Supporting accent |
| `--pink` | `#FE5981` | Creative/media accent |
| `--green` | `#D5FDA1` | Positive state / optimization |
| `--teal` | `#60CFB7` | Data and workflow accent |
| `--purple` | `#A15EE4` | Secondary creative accent |

Cloudinary Blue is for the logo. Use Sky Blue for product actions and keep darker blues for technical credibility.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 58px | 700 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 700 | 1.2 |
| Card Title | 22px | 600 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.45 |
| Code | 13px | 500 | 1.55 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #0D9AFF;
  border-radius: 999px;
  background: #0D9AFF;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.asset-card {
  border: 1px solid #E3E9EF;
  border-radius: 18px;
  background: #FFFFFF;
  padding: 18px;
}

.media-frame {
  overflow: hidden;
  border-radius: 16px;
  background: #E3E9EF;
}

.input {
  min-height: 44px;
  border: 1px solid #E3E9EF;
  border-radius: 12px;
  padding: 0 14px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Toolbar spacing |
| `--space-4` | `16px` | Core rhythm |
| `--space-5` | `24px` | Cards |
| `--space-8` | `48px` | Major sections |

Use media previews as first-class objects. Show before/after, transform steps, API snippets, and asset status in modular blocks.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 20px rgba(27, 41, 93, 0.08); }
.shadow-media { box-shadow: 0 18px 42px rgba(27, 41, 93, 0.14); }
```

Keep most surfaces flat and bordered. Elevate previews, modals, and focused DAM workflows.

## 7. Do's and Don'ts

Do show real media workflows and transformation examples. Do respect the official blue palette. Do not use Cloudinary Blue as a generic button color. Do not make the design feel like a generic file manager.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack previews and controls |
| Tablet | `768px` | Two-column media/workflow examples |
| Desktop | `1200px` | Full preview grids and API sidebars |

Preserve media aspect ratios and keep controls at least `44px` tall.

## 9. Agent Prompt Guide

Design like Cloudinary: official sky-blue media platform energy, white asset cards, image/video preview frames, compact workflow controls, Inter typography, and a reliable API-first DAM tone.
