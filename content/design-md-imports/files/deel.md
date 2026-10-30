# Deel Design System

> Global HR and payroll design with bold blue identity, compliance-forward surfaces, clean data tables, and multi-currency clarity.

---

## 1. Visual Theme & Atmosphere

Deel should feel global, reliable, and professional. The design language communicates international contractor payments, EOR, compliance, and payroll across 150+ countries.

- Mood: professional, global, reliable, modern
- Density: medium-to-high, with worker tables, contract flows, and payroll summaries
- Character: bold blue brand, clean white workspace, global flag accents, compliance green

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--deel-blue` | `#0052CC` | Primary brand CTA and nav |
| `--deel-blue-dark` | `#003D99` | Hover and active states |
| `--deel-teal` | `#00B8D9` | Secondary accent and highlights |
| `--deel-green` | `#36B37E` | Compliant status and paid confirmation |
| `--deel-amber` | `#FFAB00` | Pending payment and review state |
| `--deel-red` | `#FF5630` | Non-compliant and error states |
| `--surface-card` | `#FFFFFF` | Worker cards and payroll panels |
| `--surface-bg` | `#F4F5F7` | Dashboard background |
| `--surface-sidebar` | `#0A1929` | Dark navigation sidebar |
| `--text-primary` | `#172B4D` | Primary body and table text |
| `--border-default` | `#DFE1E6` | Table and card borders |

Use blue for all primary actions. The green/amber/red compliance scale must be used consistently — compliance states are the most critical visual signal in the product.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 32px | 700 | 1.1 |
| Section Title | 24px | 600 | 1.2 |
| Table Header | 13px | 600 | 1.3 |
| Table Body | 14px | 400 | 1.5 |
| Body | 15px | 400 | 1.6 |
| Currency Value | 20px | 700 | 1.1 |
| Label | 12px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 40px;
  padding: 0 16px;
  border: none;
  border-radius: 6px;
  background: #0052CC;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.worker-card {
  border: 1px solid #DFE1E6;
  border-radius: 10px;
  background: #FFFFFF;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.compliance-badge {
  display: inline-flex;
  padding: 3px 10px;
  border-radius: 999px;
  font: 600 12px/1.4 Inter, sans-serif;
}

.country-flag {
  width: 24px;
  height: 18px;
  border-radius: 3px;
  object-fit: cover;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Table cell inner padding |
| `--space-4` | `16px` | Card content rhythm |
| `--space-6` | `24px` | Section headers |
| `--space-10` | `40px` | Dashboard section gaps |

Worker/contractor tables are the primary view. Filter by country, contract type, and status should be always visible in a left panel.

## 6. Depth & Elevation

```css
.shadow-card   { box-shadow: 0 1px 4px rgba(23, 43, 77, 0.08); }
.shadow-panel  { box-shadow: 0 8px 24px rgba(0, 82, 204, 0.10); }
.shadow-modal  { box-shadow: 0 20px 50px rgba(23, 43, 77, 0.18); }
```

Tables and worker cards use minimal shadow. Payment confirmation modals use stronger elevation.

## 7. Do's and Don'ts

Do always show the worker's country flag alongside their name. Do use mono font for all currency values. Do make compliance status immediately visible — it is never secondary. Do not abbreviate country names in compliance views. Do not bury the payroll run action.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Single worker detail, simplified payroll summary |
| Tablet | `768px` | Worker list with status column |
| Desktop | `1200px` | Full dashboard: sidebar + worker table + compliance panel |

Desktop is the primary surface for HR managers. Mobile for workers checking payment status.

## 9. Agent Prompt Guide

Design like Deel: bold blue CTAs, dark sidebar navigation, dense worker tables, country flags, mono currency values, compliance-state color coding, and global payroll hierarchy.
