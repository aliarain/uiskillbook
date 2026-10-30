# AMD Design System

> High-performance computing with sharp technical confidence. AMD's current public site combines deep charcoal foundations, bright white sections, signature red accents, angular hardware imagery, and product-forward storytelling to make CPUs, GPUs, AI PCs, and data center hardware feel powerful, modern, and immediately credible.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
AMD feels like **performance engineering rendered as bold technical marketing**. The system mixes dramatic dark sections, red energy accents, and practical product detail. It is visually stronger than minimalist enterprise software, but it stays grounded in specs, hardware renders, and real use cases.

### Mood & Feeling
- Fast and performance-led
- Technical, confident, and current
- Gaming-adjacent without becoming loud everywhere
- Serious enough for enterprise and AI workloads
- Bold, sharp, and hardware-native

### Design Density
**Medium density.** AMD surfaces many product categories and partner ecosystems, but it stays readable through large hero framing, strong contrast, and clearly separated product bands.

### Visual Character
- Deep charcoal and black backgrounds
- High-contrast white type with AMD red accents
- Large silicon, board, and laptop imagery
- Angular section framing and hard-edged product confidence
- Marketing that blends consumer performance with enterprise scale

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--amd-black` | `#000000` | Deepest background and contrast zones |
| `--amd-charcoal` | `#111111` | Primary dark UI surface |
| `--amd-charcoal-2` | `#1C1C1C` | Secondary dark panel |
| `--amd-white` | `#FFFFFF` | Main contrast text and light surfaces |
| `--amd-text` | `#F3F4F6` | Text on dark sections |

### Brand and Support

| Token | Hex | Role |
|-------|-----|------|
| `--amd-red` | `#ED1C24` | Core brand accent and CTA support |
| `--amd-red-deep` | `#C2161D` | Hover and active red state |
| `--amd-red-soft` | `#FFE5E6` | Light callout fill |
| `--amd-gray` | `#E5E7EB` | Light-border or divider color |
| `--amd-muted` | `#9CA3AF` | Secondary copy |

### Utility

| Token | Hex | Role |
|-------|-----|------|
| `--amd-success` | `#11A36A` | Positive system state |
| `--amd-warning` | `#C98600` | Warning or support notice |
| `--amd-danger` | `#ED1C24` | Error and critical emphasis |
| `--amd-focus` | `#FFB4B6` | Focus ring tint |

---

## 3. Typography Rules

### Font Stack

```css
--font-display: "AMD Sans", "Helvetica Neue", Arial, sans-serif;
--font-sans: "AMD Sans", system-ui, -apple-system, sans-serif;
--font-mono: "SF Mono", "Roboto Mono", Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 72px | 700 | 1.01 | -0.035em | `#FFFFFF` |
| Page Title | 50px | 700 | 1.08 | -0.025em | `#FFFFFF` |
| Section Title | 34px | 700 | 1.12 | -0.02em | `#FFFFFF` |
| Card Title | 22px | 600 | 1.22 | -0.01em | `#111111` |
| Body Large | 18px | 400 | 1.6 | 0 | `#F3F4F6` |
| Body | 16px | 400 | 1.6 | 0 | `#F3F4F6` |
| Small Body | 14px | 400 | 1.45 | 0 | `#9CA3AF` |
| Label | 12px | 700 | 1.3 | 0.05em | `#9CA3AF` |

### Typography Philosophy
AMD typography should feel **high-performance and technically grounded**. Headlines can be bold and cinematic, but supporting text must still communicate specs, workloads, and platform breadth with clarity.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #ed1c24;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  min-height: 48px;
  padding: 0 22px;
  font-size: 16px;
  font-weight: 700;
}

.button-primary:hover {
  background: #c2161d;
}

.button-secondary {
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  min-height: 48px;
  padding: 0 22px;
}
```

### Cards and Product Panels

```css
.product-card {
  background: #ffffff;
  color: #111111;
  border: 1px solid #e5e7eb;
  border-radius: 24px;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.12);
}
```

### Inputs

```css
.input {
  background: #111111;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 14px;
  min-height: 48px;
  padding: 12px 14px;
}

.input:focus {
  outline: none;
  border-color: #ed1c24;
  box-shadow: 0 0 0 4px rgba(255, 180, 182, 0.3);
}
```

### Component Notes
- Product surfaces should foreground chip families, AI platforms, and gaming/workstation contexts
- Dark sections should feel premium and technical rather than noisy
- Hardware renders and benchmark-style proof deserve crisp framing and strong contrast

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
| `--space-10` | `96px` | Large product and ecosystem sections |

### Layout Behavior
- Use strong hero framing to lead each major product family
- Group stories by use case: gaming, creators, AI PCs, data center, enterprise
- Let hardware imagery and product logos do significant visual work
- Keep dense technical content separated into clear modules rather than long paragraphs

### Whitespace Philosophy
Whitespace should feel **structured and intentional**, giving hardware and performance claims room to land without flattening the page into generic black tech minimalism.

---

## 6. Depth & Elevation

### Elevation Strategy
AMD uses **contrast-heavy technical elevation**. Dark layers, glows, and crisp product cards create depth more than soft consumer shadows do.

```css
--shadow-soft: 0 8px 20px rgba(0, 0, 0, 0.16);
--shadow-card: 0 18px 36px rgba(0, 0, 0, 0.18);
--shadow-focus: 0 0 0 4px rgba(255, 180, 182, 0.3);
```

### Surface Hierarchy
- Black and charcoal hero foundation
- Bright white product cards for contrast
- Red accents for CTA and key emphasis
- Technical glow or image-driven highlights for premium product zones

---

## 7. Do's and Don'ts

### Do
- Keep AMD bold, technical, and product-led
- Use red as a strong action and identity anchor
- Make hardware renders and performance messaging central
- Preserve clear separation between consumer, gaming, and enterprise contexts

### Don't
- Do not make AMD feel like generic red-and-black gaming merch
- Do not flatten technical credibility into vague hype copy
- Do not overload every surface with aggressive effects or gradients
- Do not make enterprise sections feel visually disconnected from the main brand

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Stacked product modules, simplified spec and proof sections, full-width CTAs |
| Tablet | `768px - 1023px` | Two-column product and ecosystem layouts |
| Desktop | `1024px+` | Wide hardware storytelling, large hero renders, and multi-panel product sections |

### Responsive Rules
- Keep hardware imagery prominent even when layouts collapse
- Stack product families into clear vertical bands on mobile
- Preserve contrast and red CTA visibility across breakpoints
- Avoid shrinking technical headings so far that product differentiation gets lost

---

## 9. Agent Prompt Guide

### Quick Reference
- Deep charcoal and black structure with bright AMD red accents
- Large hardware imagery, sharp product framing, and technical performance messaging
- High-contrast typography, rounded cards, and modular product proof
- Powerful, current, and hardware-native rather than generic gaming hype

### Prompt Template
```text
Design this like AMD's current public website:
- black and charcoal foundation with bright red action accents
- large CPU, GPU, and laptop imagery with crisp product-card framing
- bold technical headlines and structured performance messaging
- modern computing, AI, gaming, and enterprise hardware energy
- sharp, high-contrast, product-led design rather than abstract corporate minimalism
```
