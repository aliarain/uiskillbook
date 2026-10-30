# Arm Design System

> AI-era semiconductor branding with deep compute minimalism, luminous gradients, and efficiency-first storytelling. Arm’s current visual language combines dark navy foundations, bright futuristic highlights, and refined enterprise typography to signal scale, precision, and performance.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Arm presents itself as **the compute foundation for modern AI**. The site feels premium and technically advanced, using dark surfaces, bright nodes of color, and cinematic chip imagery to make abstract infrastructure tangible. The brand should feel powerful, efficient, and globally foundational.

### Mood & Feeling
- **Foundational**: Arm should feel like underlying architecture, not a lightweight app brand
- **Future-facing**: AI, edge, cloud, and devices all connect in one story
- **Efficient**: the design should imply precision and elegance, not bulk
- **Technical**: it must feel credible to builders and enterprise decision-makers
- **Premium**: dark fields and concentrated highlights create a high-end effect

### Design Density
**Medium density**. Complex ideas are broken into distinct, well-spaced modules. Large statements and visuals dominate before supporting detail appears.

### Visual Character
- Deep navy and near-black backgrounds
- Bright electric accents suggesting data, power, or signal flow
- Large chip, board, and network visuals
- Refined enterprise typography with generous line spacing
- Clear CTA groupings anchored in light text or vivid accents

---

## 2. Color Palette & Roles

### Core Dark Palette

| Token | Hex | Role |
|-------|-----|------|
| `--arm-ink` | `#0E1625` | Primary dark background |
| `--arm-navy` | `#162238` | Secondary dark surface |
| `--arm-slate` | `#26344D` | Card borders, dense secondary areas |
| `--arm-white` | `#FFFFFF` | Primary text on dark |
| `--arm-muted` | `#A9B4C6` | Secondary text |

### Signal Accents

| Token | Hex | Role |
|-------|-----|------|
| `--signal-blue` | `#4DA3FF` | Link and action highlight |
| `--signal-violet` | `#8A6DFF` | AI / future-forward accent |
| `--signal-cyan` | `#51E5FF` | Soft glow, supporting highlight |
| `--signal-lime` | `#B9FF6A` | Efficiency / success / data pulse |

### Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#56C271` | Positive state |
| `--warning` | `#FFB74D` | Caution |
| `--danger` | `#FF5C5C` | Error / destructive |

### Color Usage Rules
- Use dark navy as the default canvas.
- Apply accent colors as concentrated signals, not large fills.
- Keep text highly legible and never low-contrast against dark fields.
- Let imagery and gradients carry the drama, not every component.

---

## 3. Typography Rules

### Font Stack

```css
/* Premium enterprise tech sans */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 60px | 700 | 1.02 | -0.03em | Homepage hero |
| Page Title | 44px | 700 | 1.08 | -0.02em | Major title |
| Section Title | 30px | 600 | 1.15 | -0.01em | Platform section |
| Card Title | 22px | 600 | 1.2 | -0.01em | Module heading |
| Subsection | 18px | 600 | 1.35 | 0 | Support heading |
| Body | 16px | 400 | 1.65 | 0 | Main content |
| Small Body | 14px | 400 | 1.55 | 0 | Secondary content |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and utility labels |
| Code | 13px | 400 | 1.5 | 0 | Architecture identifiers |

### Typography Philosophy
Arm typography is **precise, upscale, and quiet**. Large headings drive the vision, while supporting text should remain technical but easy to scan.

### Practical Rules
- Use large bold headlines for strategic messages.
- Keep supporting paragraphs concise and airy.
- Avoid playful or casual typographic treatment.
- Reserve mono styles for technical specs and chip/platform identifiers.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #4DA3FF;
  color: #0E1625;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid transparent;
  border-radius: 999px;
  font: 600 14px/1 Inter, sans-serif;
}

.button-primary:hover {
  background: #72B6FF;
}

.button-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(77, 163, 255, 0.22);
}
```

#### Secondary Button
```css
.button-secondary {
  background: transparent;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #4DA3FF;
  border-radius: 999px;
  font-weight: 600;
}

.button-secondary:hover {
  background: rgba(77, 163, 255, 0.12);
}
```

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  min-height: 44px;
  padding: 0 14px;
  background: #162238;
  color: #FFFFFF;
  border: 1px solid #26344D;
  border-radius: 14px;
  font: 400 16px/1.2 Inter, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #4DA3FF;
  box-shadow: 0 0 0 3px rgba(77, 163, 255, 0.14);
}

.input::placeholder {
  color: #A9B4C6;
}
```

### Cards and Dark Modules

#### Feature Card
```css
.card {
  background: #162238;
  color: #FFFFFF;
  border: 1px solid #26344D;
  border-radius: 24px;
  padding: 24px;
}
```

#### Signal Module
```css
.signal-module {
  background: linear-gradient(180deg, #162238 0%, #0E1625 100%);
  color: #FFFFFF;
  border-radius: 28px;
  padding: 32px;
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Fine adjustment |
| `--space-2` | `8px` | Tight spacing |
| `--space-4` | `16px` | Core spacing |
| `--space-5` | `24px` | Card spacing |
| `--space-6` | `32px` | Section spacing |
| `--space-8` | `48px` | Major grouping |
| `--space-10` | `64px` | Large layout rhythm |
| `--space-12` | `96px` | Hero spacing |

### Layout Rules
- Open with strong statements and cinematic visuals.
- Break technical concepts into short, sequential modules.
- Use dark backgrounds consistently to preserve premium cohesion.
- Let diagrams, chip imagery, and ecosystem visuals communicate scale.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base dark | `#0E1625` | Primary background |
| Card dark | `#162238` with border | Content modules |
| Signal glow | accent-tinted gradient | Premium spotlight sections |
| Light accent | white or pale text treatment only | Minimal relief moments |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
}

.shadow-hero {
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.36);
}
```

### Depth Rules
- Use gradients and contrast before visible shadow.
- Keep cards clear and bounded inside larger dark canvases.
- Avoid consumer-style soft depth; Arm should feel engineered.

---

## 7. Do's and Don'ts

### Do
- Use dark premium canvases confidently.
- Keep copy concise and high-value.
- Use bright accents like signals, not decoration.
- Emphasize ecosystem scale and efficiency through visuals.
- Preserve technical credibility in every component choice.

### Don't
- Fill whole pages with multiple competing accent colors.
- Use light, playful consumer-app styling.
- Overcrowd modules with too much copy.
- Make forms or controls feel cheap compared to the rest of the brand.
- Break the premium dark rhythm without a strong reason.

---

## 8. Responsive Behavior

### Responsive Rules
- Stack hero visuals and copy gracefully while maintaining strong contrast.
- Preserve readable spacing inside dark modules on small screens.
- Keep primary and secondary CTAs clearly separated.
- Allow data-rich or technical diagrams to simplify, not shrink illegibly.
- Maintain strong touch targets and high visibility on all devices.

### Mobile Character
Arm mobile experiences should still feel premium and foundational. Even in a narrow layout, the dark compute aesthetic and concentrated signal accents should remain unmistakable.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: foundational, premium, technical, AI-era
- **Core palette**: deep navy with electric signal accents
- **Typography**: modern restrained enterprise sans
- **Layout**: dark modular storytelling with chip imagery
- **Components**: pill CTAs, bordered dark cards, concentrated glow accents

### Prompt Snippet

```text
Design this interface in the style of Arm's current AI-era web presence. Use deep navy backgrounds, bright signal accents like electric blue and violet, crisp enterprise typography, large compute or chip visuals, and modular premium cards. The result should feel foundational, efficient, and globally technical rather than consumer-friendly or decorative.
```
