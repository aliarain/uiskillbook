# Fly.io Design System

> Edge compute design with terse developer confidence, dark machine surfaces, and globally distributed deployment clarity.

---

## 1. Visual Theme & Atmosphere

Fly.io should feel like infrastructure for developers who want to ship fast near users. The system centers Machines, private networking, autoscaling, managed Postgres, sandboxes, monitoring, and regional placement.

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--fly-black` | `#0B0F14` | Dark infrastructure surface |
| `--fly-blue` | `#3B82F6` | Primary action and region accent |
| `--fly-cyan` | `#22D3EE` | Network / edge highlight |
| `--fly-green` | `#22C55E` | Running machine / healthy app |
| `--surface-page` | `#F8FAFC` | Light background |
| `--surface-card` | `#FFFFFF` | Cards and docs panels |
| `--border-default` | `#E2E8F0` | Dividers |
| `--text-muted` | `#64748B` | Metadata |

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
| Machine Title | 20px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Code | 13px | 500 | 1.55 |

## 4. Component Stylings

```css
.button-primary { min-height: 44px; padding: 0 18px; border-radius: 10px; border: 1px solid #3B82F6; background: #3B82F6; color: #fff; font: 600 14px/1 Inter, sans-serif; }
.machine-card { border: 1px solid #E2E8F0; border-radius: 16px; background: #fff; padding: 18px; }
.terminal-panel { border-radius: 14px; background: #0B0F14; color: #fff; padding: 16px; font: 500 13px/1.55 "SF Mono", monospace; }
.region-pill { background: rgba(34, 211, 238, 0.14); color: #0E7490; border-radius: 999px; padding: 6px 10px; }
```

## 5. Layout Principles

Prioritize app, machine, region, scale, volume, private network, logs, and deploy history. Make global placement visible but not decorative.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(11, 15, 20, 0.08); }
.shadow-machine { box-shadow: 0 20px 52px rgba(11, 15, 20, 0.18); }
```

## 7. Do's and Don'ts

Do keep developer copy direct. Do show machine/runtime state. Do not hide region or network context. Do not over-polish away the technical feel.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack machine cards and logs |
| Tablet | `768px` | Two-column app and region views |
| Desktop | `1200px` | Full app sidebar, machine grid, and log surface |

## 9. Agent Prompt Guide

Design like Fly.io: terse developer infrastructure, dark terminal panels, blue/cyan edge accents, machine cards, region pills, and global deploy clarity.
