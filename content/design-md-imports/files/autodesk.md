# Autodesk Design System

> Bold industrial-modern brand with black-and-white confidence and high-visibility yellow. Autodesk’s current identity uses Artifakt typography, open whitespace, sharp contrast, and selective color emphasis to make technical creativity feel sophisticated and immediate.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Autodesk expresses **design and engineering confidence**. The current parent-brand system is stark, intentional, and highly visual: black and white dominate, yellow acts as a dramatic reveal, and layouts feel open, editorial, and spatially precise. Product visuals do the storytelling while the UI framing stays minimal and self-assured.

### Mood & Feeling
- **Confident**: the brand feels established, technically credible, and decisive
- **Creative-industrial**: engineering rigor and artistic ambition sit side by side
- **Open**: layouts should feel spacious and well-composed, never cramped
- **Sophisticated**: the typography and contrast feel premium, not flashy
- **Accessible**: even when bold, the system is careful about clarity and legibility

### Design Density
**Medium-low density**. Autodesk pages allow imagery, product renders, and large headlines room to breathe. Information density increases in product-focused surfaces, but the brand framing remains restrained.

### Visual Character
- Heavy reliance on black and white as the base
- Hello Yellow used as a special highlight rather than a broad fill color
- Large product images and technical renders dominate visual attention
- Typography carries much of the brand personality
- Minimal chrome and strong alignment create the premium feel

---

## 2. Color Palette & Roles

### Primary Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--autodesk-black` | `#000000` | Primary dark surface, headline contrast |
| `--autodesk-white` | `#FFFFFF` | Primary light surface |
| `--hello-yellow` | `#FFFF00` | Signature highlight / reveal |

### Supporting Colors

| Token | Hex | Role |
|-------|-----|------|
| `--warm-slate` | `#D5D5CB` | Subtle hierarchy, charts, supporting blocks |
| `--slate` | `#666666` | Secondary text and utility content |
| `--autodesk-blue` | `#0696D7` | Legacy / product accent, digital highlight |
| `--charcoal` | `#666666` | Dense secondary text |

### Accent Tertiaries

| Token | Hex | Role |
|-------|-----|------|
| `--dawn` | `#E6F2F8` | Soft cool surface |
| `--dusk` | `#BFDCEB` | Supporting tinted surface |
| `--twilight` | `#7FBAD5` | Chart / infographic accent |
| `--morning` | `#F6F1C4` | Gentle warm support tone |

### Color Usage Rules
- Start from black, white, and yellow for corporate-branded experiences.
- Use Hello Yellow as a pop, not a blanket.
- Use slate colors for hierarchy when size alone is insufficient.
- Reserve stronger product or secondary colors for product-specific narratives and data visuals.

---

## 3. Typography Rules

### Font Stack

```css
/* Autodesk brand type */
--font-display: 'Artifakt Legend', Arial, sans-serif;
--font-sans: 'Artifakt Element', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 64px | 700 | 1.0 | -0.03em | Brand hero headline |
| Page Title | 48px | 700 | 1.08 | -0.02em | Major title |
| Section Title | 32px | 600 | 1.15 | -0.015em | Primary section heading |
| Card Title | 22px | 600 | 1.2 | -0.01em | Product / feature block |
| Subsection | 18px | 600 | 1.35 | 0 | Support heading |
| Body | 16px | 400 | 1.65 | 0 | Main copy |
| Small Body | 14px | 400 | 1.55 | 0 | Secondary text |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and field labels |
| Caption | 12px | 500 | 1.4 | 0.01em | Utility copy |

### Typography Philosophy
Artifakt makes Autodesk feel **technical, beautiful, and proprietary**. Display moments are architectural and confident; body text is clean and calm so technical topics remain readable.

### Practical Rules
- Use Artifakt Legend for big headline moments.
- Use Artifakt Element for body, navigation, and UI controls.
- Keep all-caps rare and purposeful.
- Let typography and whitespace do more work than decorative shapes.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #000000;
  color: #FFFFFF;
  min-height: 48px;
  padding: 0 20px;
  border: 1px solid #000000;
  border-radius: 999px;
  font: 600 14px/1 'Artifakt Element', Arial, sans-serif;
}

.button-primary:hover {
  background: #1a1a1a;
}

.button-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 255, 0, 0.35);
}
```

#### Secondary Button
```css
.button-secondary {
  background: #FFFFFF;
  color: #000000;
  min-height: 48px;
  padding: 0 20px;
  border: 1px solid #000000;
  border-radius: 999px;
  font-weight: 600;
}

.button-secondary:hover {
  background: #f6f6f2;
}
```

#### Highlight Button
```css
.button-highlight {
  background: #FFFF00;
  color: #000000;
  min-height: 48px;
  padding: 0 20px;
  border: 1px solid #FFFF00;
  border-radius: 999px;
  font-weight: 700;
}
```

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  min-height: 48px;
  padding: 0 14px;
  background: #FFFFFF;
  color: #000000;
  border: 1px solid #666666;
  border-radius: 14px;
  font: 400 16px/1.2 'Artifakt Element', Arial, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #000000;
  box-shadow: 0 0 0 3px rgba(255, 255, 0, 0.25);
}
```

#### Labels
```css
.input-label {
  display: block;
  margin-bottom: 8px;
  color: #000000;
  font: 600 14px/1.3 'Artifakt Element', Arial, sans-serif;
}

.input-help {
  margin-top: 8px;
  color: #666666;
  font: 400 12px/1.4 'Artifakt Element', Arial, sans-serif;
}
```

### Cards and Showcase Frames

#### Content Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #D5D5CB;
  border-radius: 24px;
  padding: 24px;
}
```

#### Product Showcase
```css
.showcase {
  background: #000000;
  color: #FFFFFF;
  border-radius: 28px;
  padding: 32px;
}
```

---

## 5. Layout Principles

### Layout System
Autodesk’s brand guidance emphasizes compositions that feel **light and open**.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Fine alignment |
| `--space-2` | `8px` | Tight grouping |
| `--space-4` | `16px` | Component spacing |
| `--space-5` | `24px` | Card spacing |
| `--space-6` | `32px` | Section spacing |
| `--space-8` | `48px` | Major grouping |
| `--space-10` | `64px` | Large section rhythm |
| `--space-12` | `96px` | Hero separation |

### Layout Rules
- Use large open margins and strong alignment.
- Let key visuals or renders own the section.
- Keep text blocks narrow enough to feel editorial, not brochure-dense.
- Use yellow to punctuate, not to frame every section.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | White or black | Primary composition |
| Support | Warm Slate blocks | Secondary information |
| Card | white with warm border | Product content |
| Showcase | black field + large imagery | Premium hero sections |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
}

.shadow-showcase {
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.16);
}
```

### Depth Rules
- Use shadow sparingly; contrast and scale carry most of the hierarchy.
- Large black surfaces can feel elevated through contrast alone.
- Avoid busy layered cards inside already high-impact hero compositions.

---

## 7. Do's and Don'ts

### Do
- Lead with black, white, and yellow.
- Use Artifakt to create unmistakable Autodesk personality.
- Let product imagery and technical visuals take center stage.
- Keep layouts light, open, and high-contrast.
- Use yellow as an intentional statement.

### Don't
- Turn yellow into a default background everywhere.
- Fill every section with dense information.
- Add soft, cute, consumer-app styling.
- Let supporting colors overpower the parent-brand palette.
- Overcomplicate product showcase frames with excessive chrome.

---

## 8. Responsive Behavior

### Responsive Rules
- Preserve large headline impact on mobile by wrapping, not shrinking too aggressively.
- Keep CTAs isolated and visually strong.
- Let showcase media stack below or above copy cleanly.
- Maintain comfortable content widths and generous section spacing on all devices.
- Keep contrast intact even when simplifying layout.

### Mobile Character
Autodesk on mobile should still feel premium and spacious. The brand’s confidence comes from contrast, typography, and visual restraint, not from oversized interface chrome.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: industrial-modern, confident, open, premium
- **Core colors**: black `#000000`, white `#FFFFFF`, Hello Yellow `#FFFF00`
- **Typography**: Artifakt Legend + Artifakt Element
- **Layout**: open editorial spacing, bold product imagery
- **Components**: strong pill buttons, high-contrast cards, restrained forms

### Prompt Snippet

```text
Design this interface in the style of Autodesk's current parent-brand system. Use Artifakt typography, a high-contrast black-and-white foundation, Hello Yellow (#FFFF00) as a selective highlight, open editorial spacing, and bold product imagery. The result should feel sophisticated, technical, and highly intentional rather than busy or decorative.
```
