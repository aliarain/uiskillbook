# Carta Design System

> Equity management design with professional navy identity, legal-precision surfaces, clean table hierarchy, and ownership-clarity UX.

---

## 1. Visual Theme & Atmosphere

Carta should feel precise, professional, and trustworthy. The design language communicates cap tables, equity grants, fund administration, and 409A valuations with legal accuracy and boardroom confidence.

- Mood: precise, authoritative, trustworthy, professional
- Density: high, with stakeholder tables, waterfall models, and equity grant detail
- Character: professional navy brand, white table surfaces, subtle gray hierarchy, green equity confirmation

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--carta-navy` | `#1E3A5F` | Primary brand and CTA |
| `--carta-navy-dark` | `#142847` | Hover and table header |
| `--carta-blue` | `#2563EB` | Secondary actions and links |
| `--carta-green` | `#059669` | Equity vested and certificates issued |
| `--carta-amber` | `#D97706` | Pending approval and draft |
| `--carta-red` | `#DC2626` | Cancelled grants and errors |
| `--surface-card` | `#FFFFFF` | Table and detail panels |
| `--surface-bg` | `#F8FAFC` | Dashboard background |
| `--surface-header` | `#F1F5F9` | Table header background |
| `--text-primary` | `#1E293B` | Table data and labels |
| `--border-default` | `#E2E8F0` | Table and panel borders |

Use navy for primary navigation and CTAs. Reserve green strictly for vested shares and issued certificates — never as generic success.

## 3. Typography Rules

```css
--font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 32px | 700 | 1.1 |
| Section Title | 22px | 600 | 1.2 |
| Table Header | 13px | 600 | 1.3 |
| Table Body | 14px | 400 | 1.5 |
| Body | 15px | 400 | 1.6 |
| Share Count | 18px | 700 | 1.1 |
| Label | 12px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 40px;
  padding: 0 16px;
  border: none;
  border-radius: 6px;
  background: #1E3A5F;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.table-row {
  display: grid;
  padding: 12px 16px;
  border-bottom: 1px solid #E2E8F0;
  font: 400 14px/1.5 Inter, sans-serif;
}

.table-header {
  padding: 10px 16px;
  background: #F1F5F9;
  font: 600 12px/1.3 Inter, sans-serif;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.grant-badge {
  display: inline-flex;
  padding: 2px 10px;
  border-radius: 4px;
  font: 600 12px/1.5 Inter, sans-serif;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Table cell padding |
| `--space-4` | `16px` | Section rhythm |
| `--space-6` | `24px` | Card padding |
| `--space-10` | `40px` | Major section gaps |

Tables are the primary surface — they must be perfectly aligned with clear column hierarchy. Freeze the first column on wide cap tables.

## 6. Depth & Elevation

```css
.shadow-table { box-shadow: 0 1px 3px rgba(30, 41, 59, 0.06); }
.shadow-panel { box-shadow: 0 6px 20px rgba(30, 58, 95, 0.10); }
.shadow-modal { box-shadow: 0 20px 50px rgba(30, 41, 59, 0.18); }
```

Tables should be nearly flat. Reserve stronger shadows for modals with legal actions like grant issuance.

## 7. Do's and Don'ts

Do align all share counts and percentages to the right in tables. Do use mono font for all share counts and dollar values. Do clearly distinguish authorized, issued, and outstanding shares. Do not use decorative graphics on legal or equity surfaces. Do not hide total share counts behind extra clicks.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Portfolio summary, no complex tables |
| Tablet | `768px` | Scrollable cap table, single-column stakeholder list |
| Desktop | `1200px` | Full cap table, waterfall, and scenario modeling |

The desktop experience is primary — equity management is fundamentally a desktop workflow.

## 9. Agent Prompt Guide

Design like Carta: professional navy CTAs, Inter typography, dense precise data tables, mono number formatting, equity-state color coding, and legal-precision financial hierarchy.
