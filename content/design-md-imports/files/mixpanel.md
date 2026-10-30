# Mixpanel Design System

> Product analytics design with rich purple identity, event-driven dashboards, funnel visualization, and user-journey clarity.

---

## 1. Visual Theme & Atmosphere

Mixpanel should feel analytical, rich, and empowering. The design language communicates event tracking, funnel analysis, retention curves, A/B testing, and user segmentation.

- Mood: analytical, powerful, precise, data-rich
- Density: high, with event tables, funnel charts, retention grids, and cohort breakdowns
- Character: rich purple brand, white analytics canvas, categorical chart colors, precision data grids

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--mx-purple` | `#7856FF` | Primary brand CTA and highlights |
| `--mx-purple-dark` | `#5B3FCC` | Hover and active states |
| `--mx-blue` | `#2563EB` | Secondary actions and links |
| `--mx-green` | `#16A34A` | Conversion success and positive delta |
| `--mx-red` | `#DC2626` | Drop-off and negative delta |
| `--mx-amber` | `#D97706` | Warning and degraded metrics |
| `--surface-card` | `#FFFFFF` | Chart cards and query panels |
| `--surface-bg` | `#F8F9FC` | Dashboard background |
| `--surface-query` | `#1E1E2E` | Query builder dark surface |
| `--text-primary` | `#111827` | Metric labels and chart titles |
| `--border-default` | `#E5E7EB` | Panel and chart borders |

Purple is the primary action color. Chart series colors must be distinct and consistent across all report types — never reuse a series color for a different property in the same report.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 30px | 700 | 1.1 |
| Report Title | 22px | 600 | 1.2 |
| Chart Label | 13px | 600 | 1.3 |
| Data Value | 28px | 700 | 1.0 |
| Body | 15px | 400 | 1.6 |
| Axis Label | 11px | 500 | 1.4 |
| Event Name | 14px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 6px;
  background: #7856FF;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.report-card {
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  background: #FFFFFF;
  padding: 20px 24px;
}

.funnel-step {
  border-radius: 8px;
  background: #7856FF;
  color: #FFFFFF;
  padding: 10px 16px;
  font: 600 13px/1.3 Inter, sans-serif;
}

.event-chip {
  display: inline-flex;
  padding: 3px 10px;
  border-radius: 999px;
  background: #F3F0FF;
  color: #7856FF;
  font: 600 12px/1.4 Inter, sans-serif;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Chart legend spacing |
| `--space-4` | `16px` | Report card rhythm |
| `--space-6` | `24px` | Dashboard panel padding |
| `--space-10` | `40px` | Section separation |

Left sidebar for event and property navigation. Main canvas for the active report. Query builder should expand inline, not navigate away.

## 6. Depth & Elevation

```css
.shadow-card  { box-shadow: 0 1px 4px rgba(17, 24, 39, 0.06); }
.shadow-panel { box-shadow: 0 8px 24px rgba(120, 86, 255, 0.10); }
.shadow-modal { box-shadow: 0 20px 50px rgba(17, 24, 39, 0.16); }
```

Funnel steps can use a slight purple shadow to reinforce sequential flow.

## 7. Do's and Don'ts

Do make the event selector the fastest interaction in the product. Do show conversion rates as both percentage and absolute number. Do use consistent chart color series per property. Do not hide segment breakdowns behind multiple clicks. Do not use purple for both CTAs and chart series simultaneously.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Key metric summary only, no interactive charts |
| Tablet | `768px` | Simplified funnel and retention view |
| Desktop | `1200px` | Full analytics workspace: event explorer, charts, segments |

Mixpanel's core value is delivered on desktop — mobile is for metric consumption only.

## 9. Agent Prompt Guide

Design like Mixpanel: rich purple CTAs, event-chip labels, white analytics canvas, funnel step visualization, precise axis labels, consistent chart series colors, and query-builder hierarchy.
