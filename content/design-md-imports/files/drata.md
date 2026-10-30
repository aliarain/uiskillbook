# Drata Design System

> Compliance automation design with confident blue identity, audit-ready surfaces, continuous monitoring clarity, and framework-mapped controls.

---

## 1. Visual Theme & Atmosphere

Drata should feel confident, thorough, and trustworthy. The design language communicates SOC 2, ISO 27001, HIPAA compliance, automated evidence collection, and audit readiness at scale.

- Mood: confident, thorough, professional, reassuring
- Density: high, with control tables, evidence lists, audit timelines, and monitoring dashboards
- Character: confident blue brand, white audit surfaces, framework-color coding, green readiness indicators

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--drata-blue` | `#1B4FD8` | Primary brand CTA and nav |
| `--drata-blue-dark` | `#1239A5` | Hover and active states |
| `--drata-green` | `#059669` | Passing controls and audit-ready |
| `--drata-amber` | `#D97706` | In-progress and remediation needed |
| `--drata-red` | `#DC2626` | Failing controls and critical risks |
| `--drata-purple` | `#7C3AED` | Premium and enterprise feature accent |
| `--surface-card` | `#FFFFFF` | Control cards and evidence panels |
| `--surface-bg` | `#F8FAFC` | Dashboard background |
| `--surface-sidebar` | `#1A2744` | Navigation sidebar |
| `--text-primary` | `#0F172A` | Control titles and evidence labels |
| `--border-default` | `#E2E8F0` | Table and card borders |

The pass/fail/in-progress color scale is the most critical design element — it must be applied consistently across every compliance view.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 30px | 700 | 1.1 |
| Section Title | 22px | 600 | 1.2 |
| Control Name | 16px | 600 | 1.3 |
| Body | 15px | 400 | 1.6 |
| Evidence Label | 13px | 500 | 1.4 |
| Readiness % | 32px | 700 | 1.0 |
| Label | 12px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 40px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
  background: #1B4FD8;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.control-card {
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  background: #FFFFFF;
  padding: 20px;
}

.readiness-ring {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 6px solid #E2E8F0;
}

.framework-badge {
  display: inline-flex;
  padding: 3px 10px;
  border-radius: 4px;
  font: 700 11px/1.4 Inter, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Evidence item spacing |
| `--space-4` | `16px` | Control card rhythm |
| `--space-6` | `24px` | Section padding |
| `--space-10` | `40px` | Framework section gaps |

Show overall readiness score prominently at the top. Group controls by framework, then by category. Failing controls should sort to the top automatically.

## 6. Depth & Elevation

```css
.shadow-card   { box-shadow: 0 1px 4px rgba(15, 23, 42, 0.06); }
.shadow-panel  { box-shadow: 0 8px 24px rgba(27, 79, 216, 0.10); }
.shadow-modal  { box-shadow: 0 20px 50px rgba(15, 23, 42, 0.16); }
```

Control list items are flat. Readiness summary panels use moderate shadow.

## 7. Do's and Don'ts

Do show the overall audit readiness percentage prominently. Do group controls by compliance framework. Do surface failing controls immediately. Do not bury evidence collection status. Do not use the same color for passing controls and brand CTAs.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Readiness summary, simplified control list |
| Tablet | `768px` | Control list with status filters |
| Desktop | `1200px` | Full dashboard: sidebar + control table + evidence panel |

Compliance management is desktop-primary; mobile for executives checking readiness status.

## 9. Agent Prompt Guide

Design like Drata: confident blue CTAs, dark sidebar navigation, control-state color coding, readiness percentage prominently displayed, framework-badge labels, and audit-ready hierarchy.
