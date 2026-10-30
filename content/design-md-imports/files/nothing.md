# Nothing Design System

> Monochrome, industrial, dot-matrix design built around stark black-and-white surfaces, a single signal red, and pixel-grid typography. Nothing's public brand feels like transparent hardware turned into UI — raw, technical, and deliberately minimal, with a retro-futurist edge.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Nothing feels like **a technical spec sheet designed by an art school**. Pure black and white canvases, dot-matrix headlines, and monospaced details echo the brand's Glyph lighting and transparent-back hardware.

### Mood & Feeling
- Minimal, raw, and industrial
- Retro-futurist and playful in restraint
- Confident and editorial
- Technical and precise
- Anti-glossy, anti-gradient

### Design Density
**Low density.** Large product shots and oversized dot-matrix type dominate; supporting details are small, monospaced, and sparse.

### Visual Character
- Pure black (`#000000`) and white (`#FFFFFF`) as the only surfaces
- Signal red (`#D71921`) used sparingly for dots, recording indicators, and highlights
- Dot-matrix display font for headlines and numbers
- Monospace/grotesque for body and technical specs
- Thin hairline rules, no gradients, no soft shadows

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--nt-black` | `#000000` | Primary dark canvas, text on light |
| `--nt-white` | `#FFFFFF` | Primary light canvas, text on dark |
| `--nt-red` | `#D71921` | Signal accent, indicator dots |
| `--nt-gray-100` | `#F2F2F2` | Light secondary surface |
| `--nt-gray-900` | `#1A1A1A` | Dark secondary surface |

### Support Palette

| Token | Hex | Role |
|-------|-----|------|
| `--nt-gray-500` | `#8A8A8A` | Secondary text, captions |
| `--nt-gray-300` | `#CCCCCC` | Hairline rules on light |
| `--nt-gray-700` | `#333333` | Hairline rules on dark |
| `--nt-glyph` | `#FFFFFF` | Glyph light / active dot state |

---

## 3. Typography Rules

### Font Stack

```css
--font-display: "NDot", "NDot 57", "Doto", monospace;
--font-sans: "NType 82", "Helvetica Neue", Arial, sans-serif;
--font-mono: "Lettera Mono", "Space Mono", ui-monospace, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Dot Hero | 96px | 400 | 1.0 | 0.02em | `#000000` |
| Section Heading | 40px | 400 | 1.1 | 0 | `#000000` |
| Product Name | 24px | 500 | 1.2 | 0 | `#000000` |
| Body | 16px | 400 | 1.5 | 0 | `#000000` |
| Spec Label (mono) | 12px | 400 | 1.4 | 0.08em | `#8A8A8A` |
| Button Label | 14px | 500 | 1.2 | 0.04em | `#FFFFFF` |

### Typography Philosophy
Type is **the brand's signature**. The dot-matrix display face is reserved for large moments; everything else stays neutral and technical, often uppercase monospace for labels.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  border-radius: 999px;
  min-height: 44px;
  padding: 0 24px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.button-primary:hover {
  background: #ffffff;
  color: #000000;
}

.button-secondary {
  background: transparent;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 999px;
  min-height: 44px;
  padding: 0 24px;
}
```

### Spec Card

```css
.spec-card {
  background: #f2f2f2;
  border-radius: 16px;
  padding: 24px;
}

.spec-label {
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #8a8a8a;
}

.spec-value {
  font-family: var(--font-display);
  font-size: 40px;
}
```

### Indicator Dot

```css
.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d71921;
}
```

### Component Notes
- Red appears as a single dot or tiny accent, never as a fill
- Buttons invert black/white on hover instead of shifting hue
- Dot-grid patterns can be used as subtle background texture
- Product imagery is shot on pure white or pure black with no props

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Dot and label gaps |
| `--space-2` | `8px` | Inline spacing |
| `--space-3` | `16px` | Component padding |
| `--space-4` | `24px` | Card padding |
| `--space-5` | `64px` | Section spacing |
| `--space-6` | `128px` | Hero spacing |

### Layout Behavior
- Hero sections center a single product image with a dot-matrix headline
- Spec sections use asymmetric grids with mono labels and large values
- Store pages use simple product grids on light gray tiles

### Whitespace Philosophy
Whitespace is **deliberate emptiness** — the brand name taken literally. Let objects and type breathe in vast, uncluttered space.

---

## 6. Depth & Elevation

### Elevation Strategy
Nothing is **completely flat**. Hierarchy comes from contrast, scale, and hairline rules, not shadows.

```css
--shadow-none: none;
--rule-light: 1px solid #cccccc;
--rule-dark: 1px solid #333333;
```

### Surface Hierarchy
- Pure black or white canvas
- Light/dark gray tiles for cards
- Hairline rules to separate spec rows

---

## 7. Do's and Don'ts

### Do
- Stay monochrome with a single red signal accent
- Use dot-matrix type for large headlines and numbers
- Use uppercase monospace for small labels and specs
- Keep surfaces flat and imagery isolated on solid backgrounds

### Don't
- Do not use gradients, glows, or soft drop shadows
- Do not introduce additional brand colors
- Do not set body copy in the dot-matrix face
- Do not clutter layouts with decorative imagery

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Stacked sections, dot hero scales to ~48px |
| Tablet | `768px - 1199px` | Two-column spec grids |
| Desktop | `1200px+` | Asymmetric editorial grids, full-size hero type |

### Responsive Rules
- Dot-matrix headlines scale fluidly with `clamp()` but stay at least 40px
- Pill buttons keep a 44px minimum height
- Spec grids collapse to single-column label/value lists

---

## 9. Agent Prompt Guide

### Quick Reference
- Pure black and white, one red signal dot
- Dot-matrix display headlines
- Uppercase monospace labels
- Flat, shadowless, industrial minimalism

### Prompt Template
```text
Design this like Nothing's current public brand style:
- strictly monochrome black and white with a single red (#D71921) indicator accent
- dot-matrix display font for large headlines and numbers
- uppercase monospace for small labels and specs
- pill-shaped black buttons that invert on hover
- flat surfaces with hairline rules, no gradients or shadows
- minimal, industrial, retro-futurist atmosphere with lots of empty space
```
