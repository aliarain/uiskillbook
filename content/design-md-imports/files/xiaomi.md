# Xiaomi Design System

> Consumer technology at global scale with bold accessibility. Xiaomi's current public site combines bright white surfaces, vivid orange brand accents, broad product-category merchandising, and ecosystem storytelling around phones, AIoT, home tech, wearables, and cars, creating a design system that feels energetic, expansive, and user-centric.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Xiaomi feels like **mass-market innovation presented as a connected lifestyle platform**. The system has to support flagship phones, smart home products, wearables, TVs, and now broader ecosystem narratives. It balances product excitement with approachable pricing and wide retail-style browsing.

### Mood & Feeling
- Bright and accessible
- Product-rich and globally scalable
- Modern without being exclusive
- Ecosystem-driven and optimistic
- Broad, practical, and consumer-friendly

### Design Density
**Medium density.** Xiaomi shows many categories and product modules, but the experience stays readable because sections are clearly grouped and imagery does heavy lifting.

### Visual Character
- White base canvas with strong orange anchors
- Large product images and category merchandising blocks
- Lifestyle technology presented as one connected ecosystem
- Clean sections with clear entry points by product family
- Product launches and ecosystem stories given equal visual weight

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--xiaomi-white` | `#FFFFFF` | Main canvas and cards |
| `--xiaomi-surface` | `#F5F6F8` | Light section background |
| `--xiaomi-ink` | `#191919` | Primary dark contrast and navigation |
| `--xiaomi-text` | `#222222` | Primary body text |
| `--xiaomi-muted` | `#6B7280` | Secondary text |

### Brand and Support

| Token | Hex | Role |
|-------|-----|------|
| `--xiaomi-orange` | `#FF6900` | Core brand accent and CTA color |
| `--xiaomi-orange-deep` | `#E05A00` | Hover and active state |
| `--xiaomi-orange-soft` | `#FFE8D6` | Light callout fill |
| `--xiaomi-border` | `#D9DEE5` | Card borders and separators |
| `--xiaomi-green` | `#22A06B` | Smart-living or positive state support |

### Utility

| Token | Hex | Role |
|-------|-----|------|
| `--xiaomi-success` | `#148A58` | Positive status |
| `--xiaomi-warning` | `#BE7B00` | Warning or support state |
| `--xiaomi-danger` | `#D14343` | Error or issue state |
| `--xiaomi-focus` | `#FFC49A` | Focus ring tint |

---

## 3. Typography Rules

### Font Stack

```css
--font-display: "MiSans", "Helvetica Neue", Arial, sans-serif;
--font-sans: "MiSans", system-ui, -apple-system, sans-serif;
--font-mono: "SF Mono", Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 68px | 700 | 1.02 | -0.03em | `#191919` |
| Page Title | 48px | 700 | 1.08 | -0.02em | `#191919` |
| Section Title | 34px | 700 | 1.12 | -0.015em | `#191919` |
| Card Title | 22px | 600 | 1.22 | -0.01em | `#222222` |
| Body Large | 18px | 400 | 1.6 | 0 | `#222222` |
| Body | 16px | 400 | 1.6 | 0 | `#222222` |
| Small Body | 14px | 400 | 1.45 | 0 | `#6B7280` |
| Label | 12px | 700 | 1.3 | 0.04em | `#6B7280` |

### Typography Philosophy
Xiaomi typography should feel **modern, product-first, and highly approachable**. It needs enough weight for launches and hero moments, but must stay simple enough to scale across many product families and markets.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #ff6900;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  min-height: 48px;
  padding: 0 22px;
  font-size: 16px;
  font-weight: 700;
}

.button-primary:hover {
  background: #e05a00;
}

.button-secondary {
  background: #ffffff;
  color: #191919;
  border: 1px solid #d9dee5;
  border-radius: 999px;
  min-height: 48px;
  padding: 0 22px;
}
```

### Cards and Product Tiles

```css
.product-card {
  background: #ffffff;
  border: 1px solid #d9dee5;
  border-radius: 22px;
  box-shadow: 0 14px 30px rgba(25, 25, 25, 0.05);
}
```

### Inputs

```css
.input {
  background: #ffffff;
  color: #222222;
  border: 1px solid #d9dee5;
  border-radius: 14px;
  min-height: 48px;
  padding: 12px 14px;
}

.input:focus {
  outline: none;
  border-color: #ff6900;
  box-shadow: 0 0 0 4px rgba(255, 196, 154, 0.38);
}
```

### Component Notes
- Product tiles should make it easy to hop between phones, home tech, wearables, and media devices
- Ecosystem stories can be broad, but each tile still needs a concrete product hook
- Orange should guide attention decisively without overwhelming every surface

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
| `--space-10` | `96px` | Large ecosystem and category sections |

### Layout Behavior
- Organize around product families first, ecosystem narratives second
- Use broad hero campaigns supported by category grids and launch stories
- Keep product imagery large, centered, and easy to compare
- Let cars, phones, AI glasses, smart home, and lifestyle sit inside one coherent ecosystem story

### Whitespace Philosophy
Whitespace should feel **clean but commercially useful**, leaving enough room for the ecosystem to breathe without making the site feel sparse or boutique.

---

## 6. Depth & Elevation

### Elevation Strategy
Xiaomi uses **light consumer-tech elevation**. Cards float softly above pale surfaces, while imagery, category grouping, and orange highlights do more of the visual work than heavy shadows.

```css
--shadow-soft: 0 8px 18px rgba(25, 25, 25, 0.04);
--shadow-card: 0 14px 30px rgba(25, 25, 25, 0.08);
--shadow-focus: 0 0 0 4px rgba(255, 196, 154, 0.38);
```

### Surface Hierarchy
- White main canvas
- Light-gray support backgrounds
- Elevated white product cards
- Orange CTA and ecosystem accents as the strongest visual anchors

---

## 7. Do's and Don'ts

### Do
- Keep Xiaomi broad, bright, and category-led
- Use orange as a clear identity and action signal
- Let ecosystem narratives connect product families naturally
- Preserve a friendly, global, and accessible tone

### Don't
- Do not make Xiaomi feel like exclusive luxury hardware branding
- Do not bury products under vague lifestyle copy
- Do not let category variety turn into visual clutter
- Do not overuse orange as a full-background treatment everywhere

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Stacked launch cards, simple category tiles, clear ecosystem entry points |
| Tablet | `768px - 1023px` | Two-column product-family and campaign layouts |
| Desktop | `1024px+` | Wide category grids, large launch imagery, and broad ecosystem storytelling |

### Responsive Rules
- Preserve product-family clarity when category grids collapse
- Keep launch and hero imagery prominent on smaller screens
- Stack ecosystem stories into digestible product-first modules
- Maintain clear orange CTA visibility across breakpoints

---

## 9. Agent Prompt Guide

### Quick Reference
- Bright white canvas with vivid Xiaomi orange accents
- Broad product-family merchandising and connected-ecosystem storytelling
- Clean rounded product cards, large imagery, and accessible consumer-tech energy
- Global, optimistic, and product-rich rather than boutique-minimal

### Prompt Template
```text
Design this like Xiaomi's current public website:
- bright white base with vivid orange CTA and identity accents
- broad phone, smart-home, wearable, and ecosystem category grids
- large clean product imagery with rounded merchandising cards
- connected consumer-technology storytelling across many product families
- accessible, global, product-first design rather than luxury-only hardware branding
```
