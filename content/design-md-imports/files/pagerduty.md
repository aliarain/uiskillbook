# PagerDuty Design System

> Incident management design with bold green identity, on-call surfaces, alert-severity hierarchy, and operations-first clarity.

---

## 1. Visual Theme & Atmosphere

PagerDuty should feel urgent yet controlled, reliable, and operations-focused. The design language communicates incident response, on-call scheduling, alert routing, and service health — making high-stakes operations feel manageable.

- Mood: reliable, urgent, controlled, operational
- Density: high, with incident timelines, alert tables, on-call calendars, and service dependency maps
- Character: bold green brand, near-black ops surfaces, severity-coded alert rows, clear escalation hierarchy

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--pd-green` | `#06AC38` | Primary brand CTA and resolved state |
| `--pd-green-dark` | `#048A2C` | Hover and active states |
| `--pd-critical` | `#E8000E` | P1/Critical severity — highest alert |
| `--pd-high` | `#FF6B00` | P2/High severity |
| `--pd-medium` | `#F5A800` | P3/Medium severity |
| `--pd-low` | `#3D70D6` | P4/Low severity and informational |
| `--pd-resolved` | `#06AC38` | Resolved incidents |
| `--surface-card` | `#FFFFFF` | Incident and service cards |
| `--surface-bg` | `#F6F8FA` | Dashboard background |
| `--surface-dark` | `#0A1628` | Dark ops header and timeline |
| `--text-primary` | `#1F2937` | Primary labels and incident titles |
| `--border-default` | `#E1E4E8` | Table and card borders |

The P1–P4 severity color scale is the most critical design element in the entire product. It must never be reused for other purposes and must remain consistent across all views.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 28px | 700 | 1.1 |
| Section Title | 22px | 600 | 1.2 |
| Incident Title | 16px | 600 | 1.3 |
| Body | 14px | 400 | 1.6 |
| Alert Row | 14px | 500 | 1.4 |
| Timestamp | 12px | 400 | 1.4 |
| Severity Label | 11px | 700 | 1.3 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  background: #06AC38;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.incident-row {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #E1E4E8;
  border-left: 3px solid transparent;
}

.incident-row[data-severity="critical"] { border-left-color: #E8000E; }
.incident-row[data-severity="high"]     { border-left-color: #FF6B00; }
.incident-row[data-severity="medium"]   { border-left-color: #F5A800; }
.incident-row[data-severity="low"]      { border-left-color: #3D70D6; }

.severity-badge {
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 3px;
  font: 700 11px/1.4 Inter, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.service-node {
  border: 1.5px solid #E1E4E8;
  border-radius: 8px;
  padding: 10px 14px;
  background: #FFFFFF;
  font: 600 13px/1.3 Inter, sans-serif;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Alert row internal spacing |
| `--space-4` | `16px` | Section rhythm |
| `--space-6` | `24px` | Panel padding |
| `--space-10` | `40px` | Dashboard section gaps |

Active incidents must be above the fold at all times. Left-border color coding on incident rows provides instant severity scanning. On-call schedule shows who is responsible right now — make it unmissable.

## 6. Depth & Elevation

```css
.shadow-card   { box-shadow: 0 1px 3px rgba(31, 41, 55, 0.08); }
.shadow-panel  { box-shadow: 0 6px 20px rgba(6, 172, 56, 0.10); }
.shadow-modal  { box-shadow: 0 20px 50px rgba(31, 41, 55, 0.18); }
```

Incident list rows are flat. Modals for acknowledging and resolving incidents carry stronger shadow to signal action required.

## 7. Do's and Don'ts

Do always surface active incident count in the navigation. Do use left-border color as the primary severity signal on list rows. Do make "Acknowledge" and "Resolve" the most accessible actions. Do not reuse P1–P4 severity colors for any other purpose. Do not bury the on-call schedule — it is a primary navigation destination.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Active incident list, acknowledge/resolve actions |
| Tablet | `768px` | Incident table with severity filter |
| Desktop | `1200px` | Full ops dashboard: incident list, service map, on-call schedule |

Mobile is critical — engineers must be able to acknowledge and resolve incidents from their phone at 3am.

## 9. Agent Prompt Guide

Design like PagerDuty: bold green CTAs, severity-coded left-border incident rows, P1–P4 color scale strictly maintained, dark ops header, on-call schedule prominence, and acknowledge/resolve action clarity.
