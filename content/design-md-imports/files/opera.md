# Opera Design System

> Browser design with red brand energy, polished product families, and expressive but controlled browsing surfaces.

---

## 1. Visual Theme & Atmosphere

Opera should feel innovative, fast, and visually expressive. The brand spans Opera Browser, Opera GX, Mini, and other browser products, so the system needs a core red browser identity with room for product-family variation.

- Mood: fast, expressive, polished, browser-native, product-rich
- Density: medium, with feature modules and browser mockups
- Character: red identity, rounded browser frames, dark and light mode support, product assets

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--opera-red` | `#FF1B2D` | Primary brand and CTA |
| `--opera-red-dark` | `#D61326` | Hover / pressed state |
| `--opera-black` | `#111111` | Dark browser surface |
| `--opera-gray` | `#666666` | Secondary text |
| `--surface-page` | `#F7F7F8` | Light page background |
| `--surface-card` | `#FFFFFF` | Cards and panels |
| `--border-default` | `#E5E7EB` | Dividers and inputs |
| `--gx-purple` | `#9B5CFF` | Opera GX / gaming accent |
| `--gx-cyan` | `#00D8FF` | Secondary product accent |

Use red for core Opera browser identity. Use purple/cyan only when referencing product-family variation such as GX.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 60px | 750 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 650 | 1.2 |
| Card Title | 22px | 600 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.45 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #FF1B2D;
  border-radius: 999px;
  background: #FF1B2D;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.browser-card {
  border: 1px solid #E5E7EB;
  border-radius: 20px;
  background: #FFFFFF;
  padding: 20px;
}

.dark-browser-frame {
  border-radius: 22px;
  background: #111111;
  color: #FFFFFF;
  padding: 24px;
}

.input {
  min-height: 44px;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 0 14px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Toolbar spacing |
| `--space-4` | `16px` | Card rhythm |
| `--space-5` | `24px` | Product panels |
| `--space-8` | `48px` | Major sections |

Use product screenshots, browser frames, and feature cards to explain VPN, AI, sidebar, messenger, and product-family capabilities.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 20px rgba(17, 17, 17, 0.08); }
.shadow-browser { box-shadow: 0 22px 56px rgba(17, 17, 17, 0.18); }
```

Use stronger depth for browser mockups and lighter depth for feature cards.

## 7. Do's and Don'ts

Do use red as the primary identity cue. Do distinguish product variants clearly. Do not make every browser surface red. Do not mix GX-style accents into normal Opera pages without purpose.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack browser features and CTAs |
| Tablet | `768px` | Two-column product cards |
| Desktop | `1200px` | Full browser mockups and feature grids |

Keep browser mockups responsive and preserve aspect ratios.

## 9. Agent Prompt Guide

Design like Opera: polished red browser identity, rounded browser frames, clean product cards, dark and light browser surfaces, and expressive product-family accents only where relevant.
