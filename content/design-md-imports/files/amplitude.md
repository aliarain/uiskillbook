# Amplitude Design System

> Product analytics design with bold blue identity, data-dense dashboards, Inter typography, and insight-first surfaces.

---

## 1. Visual Theme & Atmosphere

Amplitude should feel analytical, clear, and empowering. The design language communicates product intelligence, behavioral data, funnels, cohorts, and experimentation without overwhelming users.

- Mood: insightful, confident, data-driven, approachable
- Density: high, with chart-heavy dashboards and compact metric cards
- Character: electric blue brand, white canvas, gray hierarchy, rounded chart panels

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--amp-blue` | `#2962FF` | Primary brand and CTA |
| `--amp-blue-dark` | `#1A47CC` | Hover and pressed states |
| `--amp-purple` | `#7C3AED` | Experiment and A/B accent |
| `--amp-teal` | `#0D9488` | Retention and cohort charts |
| `--amp-orange` | `#F59E0B` | Warning and revenue metrics |
| `--amp-red` | `#EF4444` | Drop-off and error states |
| `--surface-card` | `#FFFFFF` | Chart cards and panels |
| `--surface-bg` | `#F8FAFC` | Page background |
| `--text-primary` | `#111827` | Main labels and headings |
| `--text-secondary` | `#6B7280` | Axis labels and captions |
| `--border-default` | `#E5E7EB` | Panel and table borders |

Use blue as the core action signal. Use teal, purple, and orange strictly for distinct chart series — never as generic decoration.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 56px | 700 | 1.05 |
| Page Title | 36px | 700 | 1.1 |
| Section Title | 24px | 600 | 1.25 |
| Card Title | 18px | 600 | 1.3 |
| Body | 15px | 400 | 1.6 |
| Metric Value | 32px | 700 | 1.0 |
| Label / Axis | 12px | 500 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 40px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
  background: #2962FF;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.metric-card {
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  background: #FFFFFF;
  padding: 20px 24px;
}

.chart-panel {
  border: 1px solid #E5E7EB;
  border-radius: 16px;
  background: #FFFFFF;
  padding: 24px;
}

.badge-insight {
  display: inline-flex;
  padding: 2px 10px;
  border-radius: 999px;
  background: #EFF6FF;
  color: #2962FF;
  font: 500 12px/1.5 Inter, sans-serif;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Chart tick spacing |
| `--space-4` | `16px` | Core grid rhythm |
| `--space-6` | `24px` | Card padding |
| `--space-10` | `40px` | Section separation |

Lead with KPI summary at the top, then funnel / chart details below. Sidebar navigation should never compete with the data canvas.

## 6. Depth & Elevation

```css
.shadow-card  { box-shadow: 0 1px 4px rgba(17, 24, 39, 0.06); }
.shadow-panel { box-shadow: 0 8px 24px rgba(41, 98, 255, 0.10); }
.shadow-modal { box-shadow: 0 24px 56px rgba(17, 24, 39, 0.18); }
```

Keep shadows subtle — the data should command attention, not the containers.

## 7. Do's and Don'ts

Do make metrics immediately scannable. Do label chart axes clearly. Do use color consistently across series. Do not mix chart color roles across views. Do not use decorative gradients on data surfaces. Do not hide insight behind extra clicks.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Single-column KPI cards, no complex charts |
| Tablet | `768px` | Two-column metric grid, simplified funnels |
| Desktop | `1200px` | Full dashboard with sidebar and multi-chart canvas |

Prioritize the top-level numbers on small screens; progressive disclosure for drill-downs.

## 9. Agent Prompt Guide

Design like Amplitude: electric blue CTAs, Inter typography, data-dense white dashboards, consistent chart palettes, scannable KPI cards, and insight-first information hierarchy.
