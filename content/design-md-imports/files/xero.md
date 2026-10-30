# Xero Design System

> Friendly accounting-software design with small-business optimism and product-system rigor. Xero pairs bright sky-blue branding, calm financial UI structure, and a large reusable component library to make complex bookkeeping workflows feel simple, modern, and approachable.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Xero expresses **clarity for everyday finance**. The brand feels bright, clean, and human, while the product design system focuses on consistency and efficiency. The interface should make serious financial work feel lighter and easier to manage.

### Mood & Feeling
- **Helpful**: users should feel guided, not judged
- **Optimistic**: color and spacing should make finance feel less intimidating
- **Practical**: dense accounting tasks still need a serious information structure
- **Consistent**: XUI-driven components should feel familiar across workflows
- **Efficient**: repeated actions should be fast and low-friction

### Design Density
**Medium density**. Xero often handles tables, transaction flows, reconciliations, and settings, but the UI stays readable because controls are consistent and spacing remains calm.

### Visual Character
- Bright Xero blue as the signature action color
- White and very light neutral surfaces
- Rounded, friendly controls without becoming toy-like
- Clear component consistency across accounting workflows
- Product UI prioritizes clarity over decorative brand moments

---

## 2. Color Palette & Roles

### Core Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--xero-blue` | `#13B5EA` | Primary brand and interactive color |
| `--xero-blue-dark` | `#0E9DCD` | Hover / active action color |
| `--xero-blue-soft` | `#E8F8FD` | Light selected or highlighted surface |

### Neutral Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--ink-strong` | `#1F2A37` | Primary text |
| `--ink-default` | `#334155` | Body text |
| `--ink-muted` | `#64748B` | Secondary text |
| `--surface-page` | `#F8FAFC` | App background |
| `--surface-card` | `#FFFFFF` | Panels and cards |
| `--border-default` | `#DDE5EC` | Borders and dividers |

### Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#0F9D58` | Success and completed status |
| `--warning` | `#F4B400` | Warning and caution |
| `--danger` | `#D93025` | Error / destructive |
| `--info` | `#13B5EA` | Informational emphasis |

### Color Usage Rules
- Let Xero blue guide actions and recognizable brand touchpoints.
- Keep core UI light and highly readable.
- Use semantic colors sparingly and meaningfully in accounting workflows.

---

## 3. Typography Rules

### Font Stack

```css
/* Modern product sans */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 52px | 700 | 1.05 | -0.02em | Marketing hero |
| Page Title | 36px | 700 | 1.1 | -0.015em | Section title |
| Card Title | 20px | 600 | 1.25 | 0 | Panel heading |
| Body | 16px | 400 | 1.6 | 0 | Main UI copy |
| Small Body | 14px | 400 | 1.5 | 0 | Dense product text |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and field labels |
| Caption | 12px | 500 | 1.4 | 0.01em | Helper and metadata |

### Typography Philosophy
Xero typography should feel **calm, modern, and easy to scan**. The hierarchy exists to reduce effort during daily bookkeeping and financial review.

### Practical Rules
- Keep labels concise and task-oriented.
- Use body copy generously enough to explain financial concepts clearly.
- Favor readability over brand novelty.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #13B5EA;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #13B5EA;
  border-radius: 999px;
  font: 600 14px/1 Inter, sans-serif;
}

.button-primary:hover {
  background: #0E9DCD;
  border-color: #0E9DCD;
}
```

#### Secondary Button
```css
.button-secondary {
  background: #FFFFFF;
  color: #1F2A37;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #DDE5EC;
  border-radius: 999px;
}
```

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  min-height: 44px;
  padding: 0 14px;
  background: #FFFFFF;
  color: #1F2A37;
  border: 1px solid #DDE5EC;
  border-radius: 14px;
  font: 400 16px/1.2 Inter, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #13B5EA;
  box-shadow: 0 0 0 3px rgba(19, 181, 234, 0.16);
}
```

### Cards and Workflow Panels

#### Panel Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #DDE5EC;
  border-radius: 20px;
  padding: 20px;
}
```

#### Reconciliation Panel
```css
.workflow-panel {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 18px rgba(31, 42, 55, 0.08);
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Tight spacing |
| `--space-4` | `16px` | Core spacing |
| `--space-5` | `24px` | Panel spacing |
| `--space-6` | `32px` | Section spacing |
| `--space-8` | `48px` | Major grouping |

### Layout Rules
- Keep accounting flows grouped into clear steps or panels.
- Let repeated financial tasks use familiar component patterns.
- Avoid overloading a single screen with too many action priorities.
- Maintain generous whitespace around critical totals, statuses, and primary actions.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | light neutral page background | App canvas |
| Card | white bordered panel | Standard content grouping |
| Workflow | white elevated panel | High-focus tasks |
| Overlay | white surface + stronger shadow | Dialogs / flyouts |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 6px 14px rgba(31, 42, 55, 0.06);
}

.shadow-overlay {
  box-shadow: 0 18px 32px rgba(31, 42, 55, 0.14);
}
```

### Depth Rules
- Use soft depth to support focus, not dramatics.
- Keep panels airy and easy to scan.
- Reserve stronger elevation for active task dialogs.

---

## 7. Do's and Don'ts

### Do
- Use Xero blue consistently for primary interaction.
- Keep recurring financial workflows highly consistent.
- Make dense accounting tasks feel approachable.
- Use panels and whitespace to reduce cognitive load.
- Preserve readability in tables and forms.

### Don't
- Turn financial workflows into dark or overly technical dashboards.
- Use too many competing accent colors.
- Hide key actions or totals in visually noisy layouts.
- Break component consistency across similar tasks.

---

## 8. Responsive Behavior

### Responsive Rules
- Stack workflow panels early on tablet and mobile.
- Keep totals and CTAs visible without overwhelming the viewport.
- Maintain generous input sizing and readable tables.
- Preserve button clarity with one strong primary action per zone.

### Mobile Character
Xero mobile should still feel calm and trustworthy. Even when compact, the product needs to keep accounting tasks understandable and low-stress.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: helpful, clear, optimistic, financially trustworthy
- **Primary accent**: Xero blue `#13B5EA`
- **Layout**: panel-driven accounting workflows
- **Components**: rounded buttons, soft cards, readable financial forms

### Prompt Snippet

```text
Design this interface in the style of Xero's current product and design system direction. Use a bright Xero-blue primary color (#13B5EA), light neutral surfaces, modern readable typography, and highly consistent workflow panels. The result should feel approachable, efficient, and trustworthy for everyday financial tasks.
```
