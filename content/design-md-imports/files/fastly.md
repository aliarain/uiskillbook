# Fastly Design System

> Edge cloud design with bold red identity, performance-metric surfaces, developer-focused configuration UX, and global CDN clarity.

---

## 1. Visual Theme & Atmosphere

Fastly should feel fast, powerful, and technical. The design language communicates CDN performance, edge computing, DDoS protection, API security, and global network observability.

- Mood: fast, powerful, technical, global
- Density: high, with traffic dashboards, configuration panels, cache-hit analytics, and POP maps
- Character: bold red brand, dark infrastructure surfaces, green cache-hit indicators, world map visualizations

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--fst-red` | `#D32F2F` | Primary brand CTA and highlights |
| `--fst-red-dark` | `#B71C1C` | Hover and active states |
| `--fst-green` | `#2E7D32` | Cache HIT and healthy POP |
| `--fst-amber` | `#F57C00` | Cache MISS and degraded state |
| `--fst-blue` | `#1565C0` | Secondary actions and links |
| `--fst-purple` | `#6A1B9A` | Edge compute and Wasm accent |
| `--surface-card` | `#FFFFFF` | Config and metric cards |
| `--surface-bg` | `#FAFAFA` | Dashboard background |
| `--surface-dark` | `#0D1117` | Network map and dark panels |
| `--text-primary` | `#212121` | Primary labels and values |
| `--border-default` | `#E0E0E0` | Panel and row borders |

Red is the signature brand color. Cache hit/miss must consistently use green/amber — this is a critical operational signal for customers.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 32px | 700 | 1.1 |
| Section Title | 24px | 600 | 1.2 |
| Metric Value | 36px | 700 | 1.0 |
| Body | 15px | 400 | 1.6 |
| Config Key | 14px | 600 | 1.4 |
| Config Value | 14px | 400 | 1.4 |
| Label | 12px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 40px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  background: #D32F2F;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.metric-card {
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  background: #FFFFFF;
  padding: 20px;
}

.config-block {
  border-radius: 8px;
  background: #0D1117;
  color: #C9D1D9;
  padding: 20px 24px;
  font: 400 13px/1.7 "JetBrains Mono", monospace;
}

.pop-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2E7D32;
  box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.3);
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Metric label spacing |
| `--space-4` | `16px` | Card rhythm |
| `--space-6` | `24px` | Section padding |
| `--space-10` | `40px` | Dashboard section gaps |

Traffic metrics and request rates go at the top. Global POP map takes full width. Config editor and rules below the fold.

## 6. Depth & Elevation

```css
.shadow-card  { box-shadow: 0 1px 4px rgba(33, 33, 33, 0.08); }
.shadow-panel { box-shadow: 0 8px 24px rgba(211, 47, 47, 0.10); }
.shadow-modal { box-shadow: 0 20px 50px rgba(33, 33, 33, 0.18); }
```

Dark network map panels use inset glow effects from POP markers, not box shadows.

## 7. Do's and Don'ts

Do show cache HIT ratio prominently — it is the core value metric. Do use green/amber consistently for cache and POP health. Do make the global POP map a signature visual element. Do not round corners excessively — infrastructure products skew technical and precise. Do not bury request latency stats.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Traffic summary metrics, simplified POP status |
| Tablet | `768px` | Metric grid, scrollable config |
| Desktop | `1200px` | Full dashboard: metrics + global map + config editor |

Configuration editing is exclusively a desktop workflow.

## 9. Agent Prompt Guide

Design like Fastly: bold red CTAs, dark network map surfaces, green cache-hit indicators, mono config blocks, POP-dot world map, and performance-metric-first CDN hierarchy.
