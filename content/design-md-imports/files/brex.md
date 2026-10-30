# Brex Design System

> Intelligent finance for high-speed companies. Brex's current public site pairs deep ink and white surfaces with saturated electric-blue accents, rounded enterprise product cards, AI-forward messaging, and dense-but-structured spend controls that make complex finance software feel fast, modern, and operationally sharp.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Brex feels like **enterprise finance software with startup velocity**. The system is precise, product-heavy, and high-trust, but not stodgy. Hero sections lean dramatic and tech-forward, while product surfaces stay structured, modular, and clearly action-oriented.

### Mood & Feeling
- Fast and controlled
- Modern, operational, and AI-forward
- High-trust without old-bank heaviness
- Dense but highly organized
- Confident and software-native

### Design Density
**Medium to high density.** Brex shows many product areas, controls, and proof metrics, but uses clear card boundaries, strong hierarchy, and generous spacing between modules to keep the experience readable.

### Visual Character
- Deep navy and white base with vivid blue accents
- Rounded analytics and workflow cards
- Product screenshots positioned as proof, not decoration
- Big statements supported by precise subheads and metrics
- AI and automation framed as practical workflow speedups

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--brex-ink` | `#0B1020` | Deep brand background, high-contrast sections |
| `--brex-ink-soft` | `#161D33` | Secondary dark surface |
| `--brex-white` | `#FFFFFF` | Main canvas and cards |
| `--brex-surface` | `#F5F7FB` | Light section background |
| `--brex-text` | `#111827` | Primary body text |

### Brand and Support

| Token | Hex | Role |
|-------|-----|------|
| `--brex-blue` | `#2F6BFF` | Primary action and brand accent |
| `--brex-blue-deep` | `#1746D1` | Hover and active state |
| `--brex-blue-soft` | `#E8EFFF` | Light callout fill |
| `--brex-border` | `#D9E1F0` | Borders and separators |
| `--brex-muted` | `#64748B` | Secondary text |

### Utility

| Token | Hex | Role |
|-------|-----|------|
| `--brex-success` | `#0F8F62` | Positive automation and policy state |
| `--brex-warning` | `#B7791F` | Caution or compliance notice |
| `--brex-danger` | `#D14343` | Error or exception state |
| `--brex-focus` | `#9FB9FF` | Focus ring tint |

---

## 3. Typography Rules

### Font Stack

```css
--font-display: "Brex Sans", "Helvetica Neue", Arial, sans-serif;
--font-sans: "Brex Sans", system-ui, -apple-system, sans-serif;
--font-mono: "SF Mono", "Roboto Mono", Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 68px | 700 | 1.02 | -0.035em | `#0B1020` |
| Page Title | 48px | 700 | 1.08 | -0.025em | `#0B1020` |
| Section Title | 34px | 700 | 1.12 | -0.02em | `#0B1020` |
| Card Title | 22px | 600 | 1.22 | -0.01em | `#111827` |
| Body Large | 18px | 400 | 1.6 | 0 | `#111827` |
| Body | 16px | 400 | 1.6 | 0 | `#111827` |
| Small Body | 14px | 400 | 1.45 | 0 | `#64748B` |
| Label | 12px | 700 | 1.3 | 0.04em | `#64748B` |

### Typography Philosophy
Brex typography should feel **sharp, scalable, and command-center ready**. Headlines can be bold and tech-forward, but the body system needs to support dense operations, metrics, and workflow explanation without fatigue.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #2f6bff;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  min-height: 48px;
  padding: 0 22px;
  font-size: 16px;
  font-weight: 700;
}

.button-primary:hover {
  background: #1746d1;
}

.button-secondary {
  background: #ffffff;
  color: #0b1020;
  border: 1px solid #d9e1f0;
  border-radius: 999px;
  min-height: 48px;
  padding: 0 22px;
}
```

### Cards and Workflow Panels

```css
.product-card {
  background: #ffffff;
  border: 1px solid #d9e1f0;
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(11, 16, 32, 0.08);
}
```

### Inputs

```css
.input {
  background: #ffffff;
  color: #111827;
  border: 1px solid #d9e1f0;
  border-radius: 14px;
  min-height: 48px;
  padding: 12px 14px;
}

.input:focus {
  outline: none;
  border-color: #2f6bff;
  box-shadow: 0 0 0 4px rgba(159, 185, 255, 0.35);
}
```

### Component Notes
- Finance workflows should feel proactive and controlled, not reactive
- Metrics deserve strong typographic emphasis and clear card containment
- AI cues should support concrete actions like approvals, automation, and accounting speed

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `4px` | Tight alignment |
| `--space-3` | `8px` | Small gaps |
| `--space-4` | `12px` | Compact internal spacing |
| `--space-5` | `16px` | Default UI spacing |
| `--space-6` | `24px` | Card internals |
| `--space-7` | `32px` | Module grouping |
| `--space-8` | `48px` | Section rhythm |
| `--space-9` | `64px` | Hero and proof spacing |
| `--space-10` | `96px` | Large product storytelling sections |

### Layout Behavior
- Lead with a bold operational promise, then support with product proof
- Group tools by real finance jobs: cards, expenses, travel, bill pay, accounting
- Let trust metrics and customer proof sit close to product modules
- Prefer broad modular sections over long uninterrupted text blocks

### Whitespace Philosophy
Whitespace should feel **disciplined and high-performance**, giving dense operational content structure without draining urgency or speed from the page.

---

## 6. Depth & Elevation

### Elevation Strategy
Brex uses **soft enterprise elevation**. Cards float clearly above light surfaces, while dark sections add gravity and contrast rather than heavy shadows alone.

```css
--shadow-soft: 0 8px 20px rgba(11, 16, 32, 0.05);
--shadow-card: 0 18px 40px rgba(11, 16, 32, 0.08);
--shadow-focus: 0 0 0 4px rgba(159, 185, 255, 0.35);
```

### Surface Hierarchy
- White base canvas
- Light gray-blue support sections
- Elevated white workflow cards
- Deep ink contrast areas for hero and premium proof sections

---

## 7. Do's and Don'ts

### Do
- Keep Brex structured, decisive, and software-first
- Use blue to guide action and hierarchy, not to flood every surface
- Make AI and automation concrete and workflow-oriented
- Preserve strong scanability for metrics and product breadth

### Don't
- Do not make Brex feel like consumer cashback fintech
- Do not overdecorate with vague abstract gradients
- Do not flatten dense finance content into generic marketing fluff
- Do not make enterprise surfaces feel old-bank or legacy ERP heavy

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Stacked workflow cards, simplified metrics, full-width CTAs |
| Tablet | `768px - 1023px` | Two-column product groupings and condensed proof sections |
| Desktop | `1024px+` | Full multi-panel product storytelling and side-by-side operational modules |

### Responsive Rules
- Keep product clusters clear when cards collapse to one column
- Preserve metric emphasis and CTA visibility on smaller screens
- Stack screenshots and copy before shrinking text too far
- Maintain readable spacing between related finance modules

---

## 9. Agent Prompt Guide

### Quick Reference
- Deep ink and white surfaces with vivid blue CTAs
- Rounded enterprise product cards and clear finance workflow modules
- Bold headlines, dense but organized body content, metric-rich proof
- AI-native but practical, fast, and operational

### Prompt Template
```text
Design this like Brex's current public website:
- deep ink and white layout with vivid electric-blue CTA accents
- rounded enterprise software cards for finance workflows and metrics
- bold operational headlines with structured product proof
- AI-powered automation framed as practical speed and control
- modern B2B finance software energy, not legacy banking UI
```
