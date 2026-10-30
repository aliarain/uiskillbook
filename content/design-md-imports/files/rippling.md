# Rippling Design System

> Workforce management design with bold yellow identity, unified HR-IT-Finance surfaces, employee-record clarity, and automation-forward UX.

---

## 1. Visual Theme & Atmosphere

Rippling should feel unified, powerful, and modern. The design language communicates the convergence of HR, IT, and Finance — employee onboarding, payroll, device management, and spend all in one platform.

- Mood: unified, powerful, modern, efficient
- Density: high, with employee tables, workflow automations, app provisioning grids, and payroll summaries
- Character: bold yellow brand, deep navy contrast, white workspace, automation accent purple

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--rip-yellow` | `#F5C518` | Primary brand accent and highlights |
| `--rip-navy` | `#0F1C2E` | Primary dark surfaces and sidebar |
| `--rip-blue` | `#0B5FFF` | CTA buttons and primary actions |
| `--rip-blue-dark` | `#0944CC` | Hover and active states |
| `--rip-purple` | `#7C3AED` | Automation and workflow accent |
| `--rip-green` | `#059669` | Active employee and paid status |
| `--rip-amber` | `#D97706` | Pending onboarding and review |
| `--rip-red` | `#DC2626` | Offboarding, terminated, error |
| `--surface-card` | `#FFFFFF` | Employee and app cards |
| `--surface-bg` | `#F8FAFC` | Dashboard background |
| `--text-primary` | `#0F172A` | Employee names and labels |
| `--border-default` | `#E2E8F0` | Table and panel borders |

Yellow is the signature brand color used for identity moments — not as a primary CTA. Blue handles all primary actions. Never use yellow as a button background due to contrast concerns.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 30px | 700 | 1.1 |
| Section Title | 22px | 600 | 1.2 |
| Employee Name | 15px | 600 | 1.3 |
| Table Body | 14px | 400 | 1.5 |
| Body | 15px | 400 | 1.6 |
| Payroll Value | 20px | 700 | 1.1 |
| Label | 12px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 40px;
  padding: 0 18px;
  border: none;
  border-radius: 8px;
  background: #0B5FFF;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.employee-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid #E2E8F0;
}

.app-tile {
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  background: #FFFFFF;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.automation-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 999px;
  background: #EDE9FE;
  color: #7C3AED;
  font: 600 12px/1.4 Inter, sans-serif;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Employee row padding |
| `--space-4` | `16px` | Core content rhythm |
| `--space-6` | `24px` | Section padding |
| `--space-10` | `40px` | Module section gaps |

Navigation separates HR, IT, and Finance as top-level modules. Within each module, the employee/resource list is the primary surface. Automations are a cross-cutting capability always surfaced via a persistent shortcut.

## 6. Depth & Elevation

```css
.shadow-card   { box-shadow: 0 1px 4px rgba(15, 28, 46, 0.06); }
.shadow-panel  { box-shadow: 0 8px 24px rgba(11, 95, 255, 0.10); }
.shadow-modal  { box-shadow: 0 20px 52px rgba(15, 28, 46, 0.18); }
```

Employee cards and app tiles use minimal shadow. Automation creation modals use stronger elevation to signal the complexity of the action.

## 7. Do's and Don'ts

Do keep the HR/IT/Finance module distinction clear in navigation. Do make employee status (active/pending/terminated) immediately visible. Do use purple exclusively for automation features. Do not use yellow as a button background — use blue for all primary CTAs. Do not bury app provisioning — it is a primary IT workflow.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Employee self-service: pay stubs, time off, benefits |
| Tablet | `768px` | Manager views: team list, approvals |
| Desktop | `1200px` | Full platform: HR + IT + Finance modules with automation |

Mobile serves employees. Desktop serves HR, IT, and Finance administrators.

## 9. Agent Prompt Guide

Design like Rippling: bold yellow brand identity with blue CTAs, dark navy sidebar, unified HR-IT-Finance module structure, purple automation chips, employee-status color coding, and workforce-management hierarchy.
