# ADP Design System

> Workforce and payroll software design with approachable professionalism and direct conversion focus. ADP’s current site uses a clean HR-tech structure, strong red accents, light neutral surfaces, and high-trust layouts to make payroll and people operations feel simpler and more manageable.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
ADP presents **people operations as organized, scalable, and supportive**. The site blends lead-gen clarity, product segmentation, and trust-building proof points. The visual system should feel professional and reassuring rather than flashy.

### Mood & Feeling
- **Reliable**: payroll and HR require trust above all
- **Helpful**: users should feel guided toward the right solution
- **Practical**: business-size segmentation and feature clarity are central
- **Established**: the brand should communicate long-term credibility
- **Human-centered**: work is about people, not only systems

### Design Density
**Medium density**. ADP surfaces often combine forms, proof points, and category cards, but the UI stays understandable because pathways are clear and sectioning is straightforward.

### Visual Character
- Red-led brand emphasis on a mostly white interface
- Strong use of proof blocks, segmented cards, and conversion forms
- Clear CTA zones
- Traditional enterprise-web layout with modern polish

---

## 2. Color Palette & Roles

### Core Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--adp-red` | `#D91F26` | Primary brand and CTA emphasis |
| `--adp-red-dark` | `#B71B20` | Hover / active state |
| `--adp-red-soft` | `#FDEBEC` | Light emphasis surface |

### Neutral Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--ink-strong` | `#1F2937` | Primary text |
| `--ink-default` | `#334155` | Body text |
| `--ink-muted` | `#6B7280` | Secondary text |
| `--surface-page` | `#F8FAFC` | Light background |
| `--surface-card` | `#FFFFFF` | Card and form surface |
| `--border-default` | `#E5E7EB` | Borders and dividers |

### Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#1F8B4C` | Success state |
| `--warning` | `#D97706` | Warning state |
| `--danger` | `#D91F26` | Error / destructive |
| `--info` | `#2563EB` | Informational state |

### Color Usage Rules
- Use red for brand emphasis and primary CTA zones.
- Keep the main interface light and readable.
- Use semantic colors carefully; conversion and trust should stay visually stable.

---

## 3. Typography Rules

### Font Stack

```css
/* Clean enterprise-web sans */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 52px | 700 | 1.05 | -0.02em | Homepage headline |
| Page Title | 38px | 700 | 1.1 | -0.015em | Section-leading title |
| Card Title | 20px | 600 | 1.25 | 0 | Solution card |
| Body | 16px | 400 | 1.6 | 0 | Main copy |
| Small Body | 14px | 400 | 1.5 | 0 | Supporting copy |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and fields |

### Typography Philosophy
ADP typography should feel **clear, familiar, and business-ready**. It should help users orient quickly among HR, payroll, compliance, and benefits offerings.

### Practical Rules
- Keep headlines outcome-oriented.
- Use plain, business-literate language.
- Maintain legibility in forms and comparison surfaces.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #D91F26;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #D91F26;
  border-radius: 999px;
  font: 600 14px/1 Inter, sans-serif;
}
```

#### Secondary Button
```css
.button-secondary {
  background: #FFFFFF;
  color: #1F2937;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #E5E7EB;
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
  color: #1F2937;
  border: 1px solid #E5E7EB;
  border-radius: 14px;
  font: 400 16px/1.2 Inter, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #D91F26;
  box-shadow: 0 0 0 3px rgba(217, 31, 38, 0.14);
}
```

### Cards and Segmentation Panels

#### Segment Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 20px;
  padding: 24px;
}
```

#### Conversion Form Panel
```css
.lead-panel {
  background: #FFFFFF;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 10px 22px rgba(31, 41, 55, 0.08);
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Tight spacing |
| `--space-4` | `16px` | Core spacing |
| `--space-5` | `24px` | Card spacing |
| `--space-6` | `32px` | Section spacing |
| `--space-8` | `48px` | Major grouping |

### Layout Rules
- Organize content by company size and solution category.
- Keep conversion forms visually separate and easy to complete.
- Use proof blocks to support trust without cluttering primary paths.
- Maintain one strong primary action per decision zone.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | light neutral background | Main page field |
| Card | white bordered block | Solution or proof grouping |
| Lead panel | white elevated surface | Pricing / demo / contact form |
| Overlay | white surface + stronger shadow | Modal or wizard |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 6px 14px rgba(31, 41, 55, 0.06);
}

.shadow-lead {
  box-shadow: 0 18px 30px rgba(31, 41, 55, 0.12);
}
```

### Depth Rules
- Use depth to emphasize forms and high-intent conversion actions.
- Keep content cards clean and lightly elevated.
- Avoid overly decorative treatment in business-critical flows.

---

## 7. Do's and Don'ts

### Do
- Use ADP red to guide high-value actions.
- Keep solution segmentation obvious.
- Make forms clear and low-friction.
- Preserve a trustworthy enterprise tone.
- Use proof and trust signals without overwhelming the layout.

### Don't
- Scatter equally strong CTAs across the same section.
- Overload category cards with too many subpaths.
- Use soft playful styling that undermines payroll trust.
- Make core flows feel visually heavy or confusing.

---

## 8. Responsive Behavior

### Responsive Rules
- Stack segmentation cards and forms early on mobile.
- Preserve CTA clarity and readable input lengths.
- Keep proof blocks secondary to the main conversion path.
- Maintain generous vertical spacing around forms and trust badges.

### Mobile Character
ADP mobile layouts should still feel calm and credible. The red action color and business-size pathways need to remain easy to understand in a stacked view.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: reliable, practical, people-focused
- **Primary accent**: ADP red `#D91F26`
- **Layout**: segmented cards + high-clarity lead panels
- **Components**: pill buttons, approachable forms, light enterprise cards

### Prompt Snippet

```text
Design this interface in the style of ADP’s current payroll and HR web experience. Use a mostly light enterprise layout, ADP red (#D91F26) for primary emphasis, clean conversion-focused structure, and approachable business typography. The result should feel reliable, helpful, and easy to act on rather than flashy or overly technical.
```
