# AppLovin Design System

> Mobile growth design with vivid coral identity, performance-first dashboards, bold typography, and ad-tech surfaces.

---

## 1. Visual Theme & Atmosphere

AppLovin should feel performance-driven, bold, and results-oriented. The design language communicates mobile growth, ad monetization, ROAS, and machine-learning campaign optimization.

- Mood: energetic, data-forward, ambitious, results-focused
- Density: high, with campaign metrics, creative previews, and bid-flow tables
- Character: vivid coral brand, deep navy contrast, clean white panels, sharp corners

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--al-coral` | `#FF4757` | Primary brand CTA and highlights |
| `--al-navy` | `#1A1D2E` | Dark backgrounds and primary text |
| `--al-blue` | `#3B82F6` | Secondary actions and links |
| `--al-green` | `#22C55E` | ROAS positive / revenue growth |
| `--al-amber` | `#F59E0B` | Budget warnings and pacing alerts |
| `--al-purple` | `#8B5CF6` | MAX monetization feature accent |
| `--surface-card` | `#FFFFFF` | Cards and data panels |
| `--surface-bg` | `#F9FAFB` | Page background |
| `--text-primary` | `#1A1D2E` | Headings and values |
| `--text-secondary` | `#6B7280` | Subtext and chart labels |
| `--border-default` | `#E5E7EB` | Panel and row borders |

Use coral as the primary action signal. Reserve green strictly for positive performance deltas and revenue states.

## 3. Typography Rules

```css
--font-sans: "DM Sans", Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 60px | 800 | 1.0 |
| Page Title | 40px | 700 | 1.1 |
| Section Title | 28px | 600 | 1.2 |
| Card Title | 20px | 600 | 1.3 |
| Body | 15px | 400 | 1.6 |
| Metric Value | 36px | 700 | 1.0 |
| Label | 12px | 600 | 1.3 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 20px;
  border: none;
  border-radius: 8px;
  background: #FF4757;
  color: #FFFFFF;
  font: 700 14px/1 "DM Sans", sans-serif;
}

.campaign-card {
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  background: #FFFFFF;
  padding: 20px 24px;
}

.dark-metric {
  border-radius: 16px;
  background: #1A1D2E;
  color: #FFFFFF;
  padding: 24px;
}

.roas-badge {
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 6px;
  background: #DCFCE7;
  color: #15803D;
  font: 600 13px/1.4 "DM Sans", sans-serif;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Table row padding |
| `--space-4` | `16px` | Card content rhythm |
| `--space-6` | `24px` | Section padding |
| `--space-12` | `48px` | Major layout separation |

Lead with ROAS and revenue at the top of every campaign view. Group campaign, creative, and audience data into distinct tabs.

## 6. Depth & Elevation

```css
.shadow-card  { box-shadow: 0 2px 8px rgba(26, 29, 46, 0.08); }
.shadow-panel { box-shadow: 0 12px 32px rgba(255, 71, 87, 0.12); }
.shadow-modal { box-shadow: 0 24px 64px rgba(26, 29, 46, 0.20); }
```

Use colored shadows sparingly to reinforce the coral brand on primary panels only.

## 7. Do's and Don'ts

Do lead with revenue and performance impact. Do use coral only for primary CTAs and key metric highlights. Do not use red for both brand and error states simultaneously. Do not clutter campaign tables with non-actionable columns. Do make bid and budget controls immediately accessible.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Summary KPIs only, no complex tables |
| Tablet | `768px` | Two-column campaign cards, simplified charts |
| Desktop | `1200px` | Full dashboard with table, charts, and sidebar filters |

Mobile views should surface the most critical performance signals — spend, revenue, and ROAS.

## 9. Agent Prompt Guide

Design like AppLovin: vivid coral CTAs, DM Sans bold typography, navy contrast panels, performance-first dashboards, ROAS-focused metric cards, and clear campaign hierarchy.
