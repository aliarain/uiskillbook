# Algolia Design System

> AI search and discovery design with deep navy trust, electric blue action, and fast, relevance-first product structure.

---

## 1. Visual Theme & Atmosphere

Algolia should feel fast, precise, and commercial. The visual language is clean SaaS with enough energy to communicate instant search, ranking, relevance, and conversion. Interfaces should make discovery feel effortless rather than decorative.

- Mood: fast, exact, intelligent, trusted, developer-friendly
- Density: medium, with room for metrics, filters, results, and examples
- Character: navy foundations, bright blue highlights, crisp cards, clear search affordances

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--algolia-navy` | `#050F2C` | Deep brand background and strongest text |
| `--algolia-blue-dark` | `#003666` | Secondary dark surface |
| `--algolia-blue` | `#3369E7` | Primary action and link |
| `--algolia-sky` | `#00AEFF` | Search highlight and active accent |
| `--algolia-teal` | `#1CC7D0` | Data and AI accent |
| `--algolia-green` | `#2DDE98` | Success / positive state |
| `--surface-page` | `#F7FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Cards and result panels |
| `--border-default` | `#DDE7F0` | Dividers and inputs |
| `--text-muted` | `#64748B` | Metadata and helper text |

Use blue for action and search state. Keep navy for trust and enterprise framing. Use the wider accent palette sparingly for charts, result ranking, and insight states.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 60px | 700 | 1.05 |
| Page Title | 42px | 700 | 1.1 |
| Section Title | 30px | 700 | 1.2 |
| Card Title | 22px | 600 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.45 |
| Label | 13px | 600 | 1.35 |
| Code | 13px | 500 | 1.55 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #3369E7;
  border-radius: 999px;
  background: #3369E7;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.search-input {
  min-height: 48px;
  width: 100%;
  padding: 0 16px;
  border: 1px solid #DDE7F0;
  border-radius: 14px;
  background: #FFFFFF;
  color: #050F2C;
}

.search-input:focus {
  outline: none;
  border-color: #00AEFF;
  box-shadow: 0 0 0 3px rgba(0, 174, 255, 0.16);
}

.result-card {
  border: 1px solid #DDE7F0;
  border-radius: 16px;
  background: #FFFFFF;
  padding: 20px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Metadata spacing |
| `--space-4` | `16px` | Core rhythm |
| `--space-5` | `24px` | Card padding |
| `--space-6` | `32px` | Section grouping |
| `--space-8` | `48px` | Major separation |

Lead with search, results, and proof. Use split layouts for explanation plus product example, but keep the search interaction visually dominant.

## 6. Depth & Elevation

Use borders first, shadows second.

```css
.shadow-card { box-shadow: 0 8px 18px rgba(5, 15, 44, 0.07); }
.shadow-panel { box-shadow: 0 18px 42px rgba(5, 15, 44, 0.12); }
```

## 7. Do's and Don'ts

Do make search fields, filters, and result cards instantly legible. Do use metrics to show speed and relevance. Do not overuse every accent color at once. Do not bury the search action below decorative content.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Single-column search and results |
| Tablet | `768px` | Two-column explainers and examples |
| Desktop | `1200px` | Full grids, metrics, and side-by-side product views |

Keep search controls at least `44px` tall and stack filters below search on mobile.

## 9. Agent Prompt Guide

Design like Algolia: deep navy trust, electric blue search actions, crisp white result cards, compact metadata, and a fast AI-discovery feeling. Emphasize search, relevance, speed, and conversion without turning the page into a generic SaaS dashboard.
