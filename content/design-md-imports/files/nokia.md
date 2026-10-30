# Nokia Design System

> Connectivity-for-the-AI-era branding with cool gradients, dark technological depth, and clean industrial structure. Nokia’s current site uses bright blues and teals, dark network surfaces, and modular enterprise storytelling to make infrastructure feel modern and consequential.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Nokia’s current web presence communicates **critical infrastructure with future-facing optimism**. It blends dark sections, bright gradient accents, chip-and-network visuals, and clean enterprise structure to tell a story about global connectivity and the AI supercycle.

### Mood & Feeling
- **Foundational**: the brand should feel essential, not optional
- **Innovative**: AI-era connectivity is central to the message
- **Industrial-modern**: technical, but not cold
- **Clear**: complex solution stories should remain easy to follow
- **Global**: scale and trust matter as much as visual modernity

### Design Density
**Medium density**. Nokia sections often contain stats, category modules, and solution pathways, but spacing and modular imagery keep them scannable.

### Visual Character
- Deep navy backgrounds with teal-to-blue gradients
- Bright accent moments around connectivity and signal themes
- Clear category cards and product pathways
- Clean enterprise typography with spacious section rhythm
- Technical photography and abstract network visuals

---

## 2. Color Palette & Roles

### Core Palette

| Token | Hex | Role |
|-------|-----|------|
| `--nokia-navy` | `#071A2B` | Dark hero / footer / premium sections |
| `--nokia-deep-blue` | `#0B3D91` | Strong brand-adjacent blue |
| `--nokia-blue` | `#169BFF` | Primary highlight and link color |
| `--nokia-teal` | `#25D0C5` | Gradient support, signal accent |
| `--nokia-cyan` | `#7CE8FF` | Soft highlight and glow accent |

### Neutral Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--white` | `#FFFFFF` | Main page background / text on dark |
| `--gray-100` | `#EAF0F5` | Soft surfaces and borders |
| `--gray-500` | `#6C7C8D` | Secondary text |
| `--ink` | `#16202A` | Primary text on light |

### Color Usage Rules
- Use blue and teal as connected signal accents.
- Let dark sections carry the technical premium feel.
- Keep lighter content surfaces crisp and readable.
- Use gradients selectively for brand energy, not as page wallpaper everywhere.

---

## 3. Typography Rules

### Font Stack

```css
/* Modern enterprise-tech sans */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 58px | 700 | 1.04 | -0.025em | Major hero statement |
| Page Title | 42px | 700 | 1.1 | -0.015em | Primary title |
| Section Title | 30px | 600 | 1.15 | -0.01em | Section heading |
| Card Title | 22px | 600 | 1.2 | -0.01em | Solution category card |
| Body | 16px | 400 | 1.65 | 0 | Main copy |
| Small Body | 14px | 400 | 1.55 | 0 | Secondary copy |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and nav |

### Typography Philosophy
Nokia typography should feel **clear, elevated, and future-oriented**. It must balance technical authority with readability for broad business audiences.

### Practical Rules
- Use concise, high-level headlines.
- Support them with short explanatory text.
- Let category names and proof points remain literal and easy to scan.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #169BFF;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #169BFF;
  border-radius: 999px;
  font: 600 14px/1 Inter, sans-serif;
}
```

#### Secondary Button
```css
.button-secondary {
  background: transparent;
  color: #169BFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #169BFF;
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
  color: #16202A;
  border: 1px solid #EAF0F5;
  border-radius: 14px;
  font: 400 16px/1.2 Inter, sans-serif;
}
```

### Cards

#### Solution Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #EAF0F5;
  border-radius: 22px;
  padding: 24px;
}
```

#### Dark Signal Card
```css
.signal-card {
  background: linear-gradient(180deg, #0B3D91 0%, #071A2B 100%);
  color: #FFFFFF;
  border-radius: 24px;
  padding: 28px;
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Tight spacing |
| `--space-4` | `16px` | Component spacing |
| `--space-5` | `24px` | Card spacing |
| `--space-6` | `32px` | Section spacing |
| `--space-8` | `48px` | Major grouping |
| `--space-10` | `64px` | Large page rhythm |

### Layout Rules
- Break the connectivity story into distinct industry or solution chapters.
- Use stats and highlight modules sparingly but clearly.
- Balance dark technical sections with lighter explainer sections.
- Keep CTA pathways obvious for providers, enterprises, and cloud audiences.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Light base | white or pale gray | Explanatory content |
| Card | white with border | Category module |
| Dark hero | navy or gradient dark surface | Premium solution story |
| Signal highlight | bright gradient accent | Important proof or transition |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 8px 18px rgba(7, 26, 43, 0.08);
}

.shadow-dark {
  box-shadow: 0 16px 30px rgba(7, 26, 43, 0.18);
}
```

### Depth Rules
- Use gradients and contrast before strong shadow.
- Keep cards crisp and modern on light surfaces.
- Let dark hero bands feel immersive but still readable.

---

## 7. Do's and Don'ts

### Do
- Use blue and teal accents to suggest connectivity and flow.
- Keep infrastructure stories modular and easy to scan.
- Use dark surfaces confidently for premium technical sections.
- Maintain a clean enterprise tone.
- Pair visuals with short, focused copy.

### Don't
- Overload the page with too many gradients.
- Use playful consumer styling.
- Let technical depth become visual clutter.
- Crowd category cards with too much detail.
- Lose contrast on dark sections.

---

## 8. Responsive Behavior

### Responsive Rules
- Stack solution cards and proof modules cleanly.
- Keep hero copy concise enough to wrap without losing impact.
- Simplify gradient-heavy sections on smaller screens when needed.
- Maintain strong button contrast and spacing.
- Preserve scan-friendly category paths on mobile.

### Mobile Character
Nokia mobile layouts should still feel foundational and modern. The brand’s dark-to-bright signal story should remain clear even in a stacked format.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: foundational, connected, AI-era, global
- **Core palette**: navy, bright blue, teal, cyan
- **Typography**: modern enterprise sans
- **Layout**: modular solution chapters with dark/light rhythm
- **Components**: pill CTAs, crisp cards, gradient signal sections

### Prompt Snippet

```text
Design this interface in the style of Nokia’s current connectivity-for-the-AI-era website. Use deep navy sections, bright blue and teal signal accents, clean enterprise typography, modular solution cards, and gradient-backed premium highlights. The result should feel foundational, modern, and technically credible without becoming cluttered.
```
