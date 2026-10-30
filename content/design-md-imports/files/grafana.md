# Grafana Design System

> Observability-platform design with dark dashboards, strong signal color, and reusable interface logic. Grafana’s Saga system emphasizes accessibility, flexibility, coherence, and patterns that scale across dense monitoring products.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Grafana is about **operational signal made usable**. The design needs to support dashboards, logs, traces, alerts, and configuration views without losing clarity or becoming visually chaotic.

### Mood & Feeling
- **Technical**: built for engineers and operators
- **Signal-rich**: hierarchy must make important values pop quickly
- **Coherent**: reusable patterns matter across many plugins and products
- **Accessible**: Saga explicitly includes accessibility as a core principle
- **Flexible**: components need to adapt to many contexts

### Design Density
**Medium-high density**. Grafana screens frequently carry charts, filters, tabs, lists, and metrics, so the structure must stay disciplined.

### Visual Character
- Dark theme as a dominant product mood
- Orange used as a strong but selective brand cue
- Data-dense panels and compact controls
- Clear use of semantic status colors for health and severity

---

## 2. Color Palette & Roles

### Core Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--grafana-orange` | `#F05A28` | Signature brand accent |
| `--grafana-orange-dark` | `#D44A1A` | Hover / stronger emphasis |
| `--grafana-orange-soft` | `#FFE8DE` | Soft brand surface |

### Dark Theme Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--dark-1` | `#111217` | Main background |
| `--dark-2` | `#181B1F` | Secondary surface |
| `--dark-3` | `#1F242A` | Panel and card surface |
| `--dark-border` | `#2F3840` | Border and divider |
| `--text-light` | `#F4F5F8` | Primary text on dark |
| `--text-muted` | `#B6BDC6` | Secondary text |

### Semantic / Signal Colors

| Token | Hex | Role |
|-------|-----|------|
| `--blue` | `#5794F2` | Links and chart support |
| `--green` | `#73BF69` | Healthy / success state |
| `--yellow` | `#FADE2A` | Warning / degraded state |
| `--red` | `#E24D42` | Error / critical state |

### Color Usage Rules
- Let charts and semantic colors communicate state.
- Use orange as a brand marker and selective action signal.
- Keep dark surfaces consistent so data remains readable.

---

## 3. Typography Rules

### Font Stack

```css
/* Saga-style product typography */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'Roboto Mono', 'SF Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Page Title | 32px | 700 | 1.15 | -0.015em | Dashboard or route title |
| Section Title | 24px | 600 | 1.2 | -0.01em | Section header |
| Card Title | 18px | 600 | 1.3 | 0 | Panel title |
| Body | 14px | 400 | 1.5 | 0 | Standard UI text |
| Small Body | 12px | 400 | 1.45 | 0 | Dense metadata |
| Label | 12px | 500 | 1.3 | 0.01em | Buttons and controls |
| Code | 12px | 400 | 1.45 | 0 | Query, metric, and technical values |

### Typography Philosophy
Grafana typography should feel **compact, readable, and operational**. The goal is to make dense data work feel manageable.

### Practical Rules
- Keep panel titles short and literal.
- Use type hierarchy to distinguish key metrics from supporting labels.
- Reserve monospace for query, code, and technical identifiers.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #F05A28;
  color: #FFFFFF;
  min-height: 32px;
  padding: 0 14px;
  border: 1px solid #F05A28;
  border-radius: 6px;
  font: 500 14px/1 Inter, sans-serif;
}
```

#### Secondary Button
```css
.button-secondary {
  background: #1F242A;
  color: #F4F5F8;
  min-height: 32px;
  padding: 0 14px;
  border: 1px solid #2F3840;
  border-radius: 6px;
}
```

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  min-height: 32px;
  padding: 0 10px;
  background: #181B1F;
  color: #F4F5F8;
  border: 1px solid #2F3840;
  border-radius: 6px;
  font: 400 14px/1.2 Inter, sans-serif;
}
```

### Dashboard Panels

#### Panel
```css
.panel {
  background: #1F242A;
  color: #F4F5F8;
  border: 1px solid #2F3840;
  border-radius: 12px;
  padding: 16px;
}
```

#### Metric Card
```css
.metric-card {
  background: #181B1F;
  border-radius: 12px;
  padding: 16px;
}
```

---

## 5. Layout Principles

### Layout Rules
Saga emphasizes **reusable templates** for common page types such as forms, dashboards, objects, and lists.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Fine alignment |
| `--space-2` | `8px` | Tight grouping |
| `--space-4` | `16px` | Core spacing |
| `--space-5` | `24px` | Section spacing |
| `button-sm` | `24px` | Small button height |
| `button-md` | `32px` | Standard button height |
| `button-lg` | `48px` | Large button height |

### Layout Guidance
- Reuse dashboard and form templates before inventing new structures.
- Keep panel groupings explicit and easy to scan.
- Use stack and grid primitives to maintain order across varied data content.
- Match action hierarchy to severity and frequency.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base dark | dark application background | Main shell |
| Panel | bordered dark card | Dashboard or form unit |
| Metric surface | inset dark card | Focused metric block |
| Overlay | elevated dark surface | Modal or expanded view |

### Shadow System

```css
.shadow-panel {
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
}

.shadow-overlay {
  box-shadow: 0 18px 30px rgba(0, 0, 0, 0.28);
}
```

### Depth Rules
- Use contrast, borders, and spacing before stronger shadow.
- Keep overlays clearly elevated and focused.
- Avoid introducing unnecessary visual noise in data-heavy contexts.

---

## 7. Do's and Don'ts

### Do
- Use orange as a selective brand cue.
- Keep dashboards and forms highly structured.
- Reuse Saga templates and patterns.
- Use semantic colors to communicate health and severity clearly.
- Maintain accessibility in dense product surfaces.

### Don't
- Use orange on every major control.
- Overcrowd dashboards with too many equal-priority panels.
- Introduce arbitrary component variations across similar screens.
- Let data-rich views lose hierarchy.

---

## 8. Responsive Behavior

### Responsive Rules
- Collapse panel grids into stacks before readability suffers.
- Preserve readable chart titles, filters, and actions on smaller screens.
- Use larger button sizes only when emphasis or touch contexts require it.
- Keep lists and form objects clear when columns collapse.

### Mobile Character
Grafana mobile views should still feel operational and coherent. Simplification is expected, but the information architecture and signal clarity must survive.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: technical, signal-rich, coherent
- **Primary accent**: Grafana orange `#F05A28`
- **Core surfaces**: dark dashboards with bordered panels
- **Typography**: compact Inter-style UI text
- **Layout**: reusable dashboard, form, and object templates

### Prompt Snippet

```text
Design this interface in the style of Grafana’s Saga design system. Use dark dashboard surfaces, Grafana orange (#F05A28) as a selective brand accent, compact readable typography, and highly reusable page templates for panels, forms, and objects. The result should feel operational, accessible, and coherent in dense monitoring contexts.
```
