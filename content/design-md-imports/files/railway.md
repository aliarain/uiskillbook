# Railway Design System

> Deployment platform design with dark command-center surfaces, violet infrastructure accents, and fast project-to-production workflows.

---

## 1. Visual Theme & Atmosphere

Railway should feel like deploy infrastructure with the friction removed. The product centers projects, environments, services, deployments, variables, logs, databases, and templates.

- Mood: fast, technical, compact, operational, developer-native
- Density: medium-to-high in dashboard surfaces
- Character: dark panels, violet action accents, deployment timelines, terminal/log surfaces

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--railway-black` | `#0B0D12` | Primary dark background |
| `--railway-panel` | `#151821` | Dashboard panel |
| `--railway-violet` | `#8B5CF6` | Primary accent and active state |
| `--railway-pink` | `#EC4899` | Gradient/support accent |
| `--railway-green` | `#22C55E` | Successful deploy / healthy service |
| `--railway-yellow` | `#F59E0B` | Build / warning state |
| `--surface-card` | `#FFFFFF` | Light docs and cards |
| `--border-dark` | `#2A2F3A` | Dark dividers |
| `--text-muted` | `#94A3B8` | Secondary dashboard text |

Use dark surfaces for product dashboards and violet for deployment actions. Status colors must map directly to build/deploy state.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 58px | 700 | 1.05 |
| Page Title | 38px | 700 | 1.12 |
| Section Title | 28px | 650 | 1.2 |
| Panel Title | 18px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Log Text | 13px | 500 | 1.55 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid #8B5CF6;
  border-radius: 10px;
  background: #8B5CF6;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.service-card {
  border: 1px solid #2A2F3A;
  border-radius: 14px;
  background: #151821;
  color: #FFFFFF;
  padding: 16px;
}

.log-panel {
  border-radius: 14px;
  background: #0B0D12;
  color: #D1D5DB;
  padding: 16px;
  font: 500 13px/1.55 "SF Mono", monospace;
}

.input {
  min-height: 42px;
  border: 1px solid #2A2F3A;
  border-radius: 10px;
  background: #0B0D12;
  color: #FFFFFF;
  padding: 0 14px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Logs and rows |
| `--space-4` | `16px` | Dashboard panels |
| `--space-5` | `24px` | Project groups |
| `--space-8` | `48px` | Marketing sections |

Organize around project, environment, service, deployment, variables, and metrics. Keep build logs and status visible.

## 6. Depth & Elevation

```css
.shadow-panel { box-shadow: 0 12px 30px rgba(0, 0, 0, 0.24); }
.shadow-overlay { box-shadow: 0 24px 60px rgba(0, 0, 0, 0.34); }
```

Use dark tonal separation before heavy shadow. Elevation should clarify active deployment and modal states.

## 7. Do's and Don'ts

Do make deploy state obvious. Do show logs, variables, and service health clearly. Do not hide failed builds. Do not overdecorate infrastructure screens.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack project panels and logs |
| Tablet | `768px` | Two-column service/dashboard views |
| Desktop | `1200px` | Full project sidebar, service grid, and log panels |

Log panels should scroll horizontally when needed.

## 9. Agent Prompt Guide

Design like Railway: dark deployment dashboard, violet primary actions, compact service cards, visible build logs, status-driven colors, and fast project-to-production flow.
