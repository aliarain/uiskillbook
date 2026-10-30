# Redis Design System

> Fast data-platform design with bold red identity, black technical contrast, and performance-first product framing.

---

## 1. Visual Theme & Atmosphere

Redis should feel extremely fast, direct, and infrastructure-ready. The design language needs to connect open source origins, cloud data products, caching, vector search, and real-time app performance.

- Mood: fast, bold, technical, reliable, direct
- Density: medium, with product cards, metrics, and architecture diagrams
- Character: red brand energy, black technical framing, white docs clarity

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--redis-red` | `#DC382D` | Primary brand and action |
| `--redis-red-dark` | `#B91C1C` | Hover / pressed state |
| `--redis-black` | `#111111` | Dark technical surface |
| `--ink-strong` | `#171717` | Primary text |
| `--ink-muted` | `#64748B` | Secondary text |
| `--surface-page` | `#F8FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Cards and docs surfaces |
| `--border-default` | `#E2E8F0` | Dividers and inputs |
| `--success` | `#16A34A` | Healthy state |
| `--warning` | `#F59E0B` | Caution state |

Use red for brand and primary action. Use black for technical gravity and code/architecture surfaces.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 60px | 800 | 1.04 |
| Page Title | 42px | 750 | 1.1 |
| Section Title | 30px | 700 | 1.2 |
| Card Title | 22px | 700 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.45 |
| Code | 13px | 500 | 1.55 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #DC382D;
  border-radius: 999px;
  background: #DC382D;
  color: #FFFFFF;
  font: 700 14px/1 Inter, sans-serif;
}

.data-card {
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  background: #FFFFFF;
  padding: 20px;
}

.code-panel {
  border-radius: 18px;
  background: #111111;
  color: #FFFFFF;
  padding: 20px;
}

.input {
  min-height: 44px;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 0 14px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Metric spacing |
| `--space-4` | `16px` | Core rhythm |
| `--space-5` | `24px` | Card padding |
| `--space-8` | `48px` | Major sections |

Lead with speed and operational proof. Use metrics, architecture blocks, and use-case cards.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(17, 17, 17, 0.07); }
.shadow-panel { box-shadow: 0 18px 42px rgba(17, 17, 17, 0.14); }
```

Use stronger contrast on dark panels and subtle elevation on white product cards.

## 7. Do's and Don'ts

Do communicate speed, reliability, and scale. Do use red with discipline. Do not turn every component red. Do not make database concepts overly abstract.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack metrics and product cards |
| Tablet | `768px` | Two-column technical/product sections |
| Desktop | `1200px` | Full architecture and comparison layouts |

Code and architecture panels must scroll or wrap cleanly on mobile.

## 9. Agent Prompt Guide

Design like Redis: bold red data-platform identity, black technical panels, white modular product cards, speed metrics, caching/vector-search language, and a sharp infrastructure feel.
