# DuckDuckGo Design System

> Privacy search and browser design with friendly orange identity, clean utility surfaces, and no-tracking clarity.

---

## 1. Visual Theme & Atmosphere

DuckDuckGo should feel private, useful, and human. The design must communicate search, browser protection, email privacy, app tracking protection, and simple privacy controls without sounding technical or intimidating.

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--ddg-orange` | `#DE5833` | Primary brand/action color |
| `--ddg-red` | `#DE2C2C` | Strong privacy warning |
| `--ddg-blue` | `#2B6CB0` | Link and info state |
| `--ddg-green` | `#22C55E` | Protected/safe state |
| `--surface-page` | `#F7F7F7` | Page background |
| `--surface-card` | `#FFFFFF` | Cards and controls |
| `--border-default` | `#E5E7EB` | Dividers |
| `--text-muted` | `#64748B` | Helper text |

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 56px | 700 | 1.05 |
| Page Title | 38px | 700 | 1.12 |
| Section Title | 28px | 650 | 1.2 |
| Card Title | 20px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary { min-height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid #DE5833; background: #DE5833; color: #fff; font: 600 14px/1 Inter, sans-serif; }
.search-box { min-height: 52px; border: 1px solid #E5E7EB; border-radius: 999px; background: #fff; padding: 0 18px; }
.privacy-card { border: 1px solid #E5E7EB; border-radius: 16px; background: #fff; padding: 18px; }
.protected-badge { background: rgba(34, 197, 94, 0.12); color: #15803D; border-radius: 999px; padding: 6px 10px; }
```

## 5. Layout Principles

Organize around search, browser, privacy protection, tracker blocking, email protection, and simple settings. Keep language plain.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(17, 24, 39, 0.06); }
.shadow-search { box-shadow: 0 18px 42px rgba(17, 24, 39, 0.10); }
```

## 7. Do's and Don'ts

Do make privacy benefits concrete. Do keep controls simple. Do not use fear-heavy visuals. Do not bury privacy state.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack search, cards, and privacy controls |
| Tablet | `768px` | Two-column feature sections |
| Desktop | `1200px` | Full browser/search product layout |

## 9. Agent Prompt Guide

Design like DuckDuckGo: friendly orange privacy-first search UI, pill search boxes, simple privacy cards, protected-state badges, and plain-language no-tracking clarity.
