# Qualcomm Design System

> Intelligent computing everywhere with enterprise-scale polish. Qualcomm's current public site blends bright white sections, deep navy framing, vivid blue-teal gradients, chip-platform product families, and clean editorial hierarchy to make AI, connectivity, mobile, compute, and automotive technology feel expansive, credible, and future-facing.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Qualcomm feels like **foundational technology presented through clean corporate futurism**. The system is more polished and editorial than gamer-oriented. It spans many industries, but holds together through strong product architecture, restrained color, and a consistent mix of white surfaces, deep blue contrast, and sharp iconography.

### Mood & Feeling
- Advanced and global
- Corporate but not stale
- AI-forward and systems-oriented
- Clean, scalable, and highly credible
- Future-facing without becoming sci-fi noise

### Design Density
**Medium density.** Qualcomm covers many categories, from Snapdragon to networking and automotive, but it keeps the experience structured through strong category rails, modular cards, and concise copy.

### Visual Character
- White canvas with deep navy anchors
- Blue-to-teal gradients and accent lighting
- Product-brand architecture for Snapdragon, Dragonwing, AI, and connectivity
- Clean editorial sections with technology imagery and icon-led navigation
- A balanced mix of corporate scale and technology optimism

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--qualcomm-white` | `#FFFFFF` | Main canvas and cards |
| `--qualcomm-surface` | `#F4F7FB` | Soft section background |
| `--qualcomm-navy` | `#081A35` | Deep contrast background |
| `--qualcomm-navy-soft` | `#10284D` | Secondary dark surface |
| `--qualcomm-text` | `#10243E` | Primary body text |

### Brand and Support

| Token | Hex | Role |
|-------|-----|------|
| `--qualcomm-blue` | `#0066FF` | Primary action and technology accent |
| `--qualcomm-blue-deep` | `#0046C7` | Hover and active state |
| `--qualcomm-teal` | `#00C2C7` | Gradient support and secondary accent |
| `--qualcomm-border` | `#D8E3F1` | Borders and separators |
| `--qualcomm-muted` | `#66758A` | Secondary text |

### Utility

| Token | Hex | Role |
|-------|-----|------|
| `--qualcomm-success` | `#119E73` | Positive system or deployment state |
| `--qualcomm-warning` | `#B7791F` | Caution state |
| `--qualcomm-danger` | `#D14343` | Error or critical notice |
| `--qualcomm-focus` | `#94DFF0` | Focus ring tint |

---

## 3. Typography Rules

### Font Stack

```css
--font-display: "Qualcomm Sans", "Helvetica Neue", Arial, sans-serif;
--font-sans: "Qualcomm Sans", system-ui, -apple-system, sans-serif;
--font-mono: "SF Mono", "Roboto Mono", Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 68px | 700 | 1.02 | -0.03em | `#081A35` |
| Page Title | 48px | 700 | 1.08 | -0.02em | `#081A35` |
| Section Title | 34px | 700 | 1.12 | -0.015em | `#081A35` |
| Card Title | 22px | 600 | 1.22 | -0.01em | `#10243E` |
| Body Large | 18px | 400 | 1.6 | 0 | `#10243E` |
| Body | 16px | 400 | 1.6 | 0 | `#10243E` |
| Small Body | 14px | 400 | 1.45 | 0 | `#66758A` |
| Label | 12px | 700 | 1.3 | 0.04em | `#66758A` |

### Typography Philosophy
Qualcomm typography should feel **clean, expansive, and industry-ready**. Headlines can be ambitious and future-oriented, but the system must remain precise enough to support a broad portfolio and technical product hierarchy.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #0066ff;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  min-height: 48px;
  padding: 0 22px;
  font-size: 16px;
  font-weight: 700;
}

.button-primary:hover {
  background: #0046c7;
}

.button-secondary {
  background: #ffffff;
  color: #081a35;
  border: 1px solid #d8e3f1;
  border-radius: 999px;
  min-height: 48px;
  padding: 0 22px;
}
```

### Cards and Platform Panels

```css
.platform-card {
  background: #ffffff;
  border: 1px solid #d8e3f1;
  border-radius: 24px;
  box-shadow: 0 16px 34px rgba(8, 26, 53, 0.06);
}
```

### Inputs

```css
.input {
  background: #ffffff;
  color: #10243e;
  border: 1px solid #d8e3f1;
  border-radius: 14px;
  min-height: 48px;
  padding: 12px 14px;
}

.input:focus {
  outline: none;
  border-color: #0066ff;
  box-shadow: 0 0 0 4px rgba(148, 223, 240, 0.35);
}
```

### Component Notes
- Platform families should be clearly branded and grouped
- Gradients should support hierarchy and forward-looking tone, not overpower the content
- Industry navigation and product categories need strong scanability

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `4px` | Tight alignment |
| `--space-3` | `8px` | Small gaps |
| `--space-4` | `12px` | Compact internal spacing |
| `--space-5` | `16px` | Default spacing |
| `--space-6` | `24px` | Card interiors |
| `--space-7` | `32px` | Module grouping |
| `--space-8` | `48px` | Section rhythm |
| `--space-9` | `64px` | Hero spacing |
| `--space-10` | `96px` | Large category and industry sections |

### Layout Behavior
- Lead with a broad technology promise, then branch into product families and industries
- Use modular cards and category rails for Snapdragon, AI, connectivity, compute, and automotive
- Keep proof and thought leadership close to the relevant technology category
- Favor wide, structured editorial sections over dense feature walls

### Whitespace Philosophy
Whitespace should feel **confident and scalable**, helping a large portfolio read as coherent and advanced rather than crowded or overly corporate.

---

## 6. Depth & Elevation

### Elevation Strategy
Qualcomm uses **soft corporate-tech elevation**. White cards float lightly above pale surfaces, while dark gradients and blue-teal light effects provide the more futuristic depth cues.

```css
--shadow-soft: 0 8px 20px rgba(8, 26, 53, 0.04);
--shadow-card: 0 16px 34px rgba(8, 26, 53, 0.07);
--shadow-focus: 0 0 0 4px rgba(148, 223, 240, 0.35);
```

### Surface Hierarchy
- White base canvas
- Soft gray-blue support surfaces
- Elevated white platform cards
- Deep navy or gradient contrast sections for featured technology stories

---

## 7. Do's and Don'ts

### Do
- Keep Qualcomm clean, advanced, and portfolio-aware
- Use blue and teal to signal innovation with restraint
- Make platform families and industries easy to differentiate
- Preserve a polished, future-facing tone without visual clutter

### Don't
- Do not make Qualcomm look like a gaming hardware brand
- Do not overuse sci-fi effects or neon gradients
- Do not flatten platform architecture into generic corporate marketing
- Do not hide technical depth behind vague AI language

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Stacked category cards, simplified industry rails, full-width CTAs |
| Tablet | `768px - 1023px` | Two-column platform and industry groupings |
| Desktop | `1024px+` | Wide platform architecture, category hubs, and featured technology panels |

### Responsive Rules
- Keep platform families legible when category cards stack
- Maintain strong contrast between white editorial sections and dark feature panels
- Preserve CTA clarity and platform hierarchy on small screens
- Avoid compressing industry navigation into ambiguous icon-only layouts

---

## 9. Agent Prompt Guide

### Quick Reference
- White and deep-navy structure with blue-teal technology accents
- Clear platform-family grouping and broad industry coverage
- Rounded editorial cards, soft tech gradients, and concise future-facing copy
- Scalable, credible, and advanced rather than flashy

### Prompt Template
```text
Design this like Qualcomm's current public website:
- white editorial canvas with deep navy sections and blue-teal tech accents
- clear platform-family cards for AI, connectivity, compute, and Snapdragon
- polished corporate-tech hierarchy with soft futuristic gradients
- wide, structured sections that scale across many industries
- advanced, credible technology design rather than gamer or startup hype
```
