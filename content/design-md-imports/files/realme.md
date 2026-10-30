# realme Design System

> Youth-focused technology with energetic confidence. realme's current global site combines bright yellow, black, and white with bold product imagery, confident category labels, and trend-aware collaborations to create a consumer-tech design system that feels fast, youthful, and proudly performance-oriented.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
realme feels like **accessible flagship tech designed for a young generation**. The system is more expressive and fashion-aware than conservative consumer electronics brands, but it still stays product-led. Phones, audio, wearables, tablets, and collaborations all live inside one energetic, performance-first visual identity.

### Mood & Feeling
- Young and high-energy
- Confident and trend-aware
- Product-first and performance-driven
- Accessible, global, and fast-moving
- Playful in attitude, but still commercially sharp

### Design Density
**Medium density.** realme shows many products and partnerships, but keeps things readable through strong category grouping, clean product modules, and distinctive campaign framing.

### Visual Character
- Bright yellow as a signature attention anchor
- Black and white structural contrast
- Large hero product renders with bold, short copy
- Youth-oriented collaboration and limited-edition storytelling
- Fast, modern layouts with obvious product-category entry points

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--realme-yellow` | `#FFD600` | Core brand color and campaign emphasis |
| `--realme-black` | `#111111` | Primary contrast background and text |
| `--realme-white` | `#FFFFFF` | Main canvas and cards |
| `--realme-surface` | `#F5F6F8` | Light section background |
| `--realme-text` | `#1F2937` | Default body text |

### Support Palette

| Token | Hex | Role |
|-------|-----|------|
| `--realme-gray` | `#D8DDE5` | Borders and separators |
| `--realme-muted` | `#6B7280` | Secondary text |
| `--realme-yellow-deep` | `#E0B800` | Hover and active yellow state |
| `--realme-yellow-soft` | `#FFF4B5` | Soft callout fill |
| `--realme-blue` | `#3B82F6` | Secondary accent for tech UI moments |

### Utility

| Token | Hex | Role |
|-------|-----|------|
| `--realme-success` | `#148A58` | Positive status |
| `--realme-warning` | `#BE7B00` | Warning or support state |
| `--realme-danger` | `#D14343` | Error or critical notice |
| `--realme-focus` | `#FFF1A1` | Focus ring tint |

---

## 3. Typography Rules

### Font Stack

```css
--font-display: "realme Sans", "Helvetica Neue", Arial, sans-serif;
--font-sans: "realme Sans", system-ui, -apple-system, sans-serif;
--font-mono: "SF Mono", Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 68px | 700 | 1.02 | -0.03em | `#111111` |
| Page Title | 48px | 700 | 1.08 | -0.02em | `#111111` |
| Section Title | 34px | 700 | 1.12 | -0.015em | `#111111` |
| Card Title | 22px | 600 | 1.22 | -0.01em | `#1F2937` |
| Body Large | 18px | 400 | 1.6 | 0 | `#1F2937` |
| Body | 16px | 400 | 1.6 | 0 | `#1F2937` |
| Small Body | 14px | 400 | 1.45 | 0 | `#6B7280` |
| Label | 12px | 700 | 1.3 | 0.04em | `#6B7280` |

### Typography Philosophy
realme typography should feel **bold, youthful, and direct**. Headlines can be punchy and energetic, but the system should remain straightforward enough to support broad catalogs and global product campaigns.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #111111;
  color: #ffd600;
  border: none;
  border-radius: 999px;
  min-height: 48px;
  padding: 0 22px;
  font-size: 16px;
  font-weight: 700;
}

.button-primary:hover {
  background: #000000;
}

.button-secondary {
  background: #ffffff;
  color: #111111;
  border: 1px solid #d8dde5;
  border-radius: 999px;
  min-height: 48px;
  padding: 0 22px;
}
```

### Cards and Product Tiles

```css
.product-card {
  background: #ffffff;
  border: 1px solid #d8dde5;
  border-radius: 22px;
  box-shadow: 0 14px 28px rgba(17, 17, 17, 0.05);
}
```

### Inputs

```css
.input {
  background: #ffffff;
  color: #1f2937;
  border: 1px solid #d8dde5;
  border-radius: 14px;
  min-height: 48px;
  padding: 12px 14px;
}

.input:focus {
  outline: none;
  border-color: #ffd600;
  box-shadow: 0 0 0 4px rgba(255, 241, 161, 0.45);
}
```

### Component Notes
- Collaborations and limited editions can have louder visual moments, but the base system should stay coherent
- Product cards should make it easy to hop between phone series, audio, wearables, and smart-life products
- Yellow should act as a memorable brand spark rather than a full-page wallpaper everywhere

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
| `--space-10` | `96px` | Large campaign and collaboration sections |

### Layout Behavior
- Organize by youth-facing product families and current launches
- Use bold hero campaigns followed by category modules and collaborations
- Keep product images large and central
- Let design awards, collabs, and brand stories support the main product narrative

### Whitespace Philosophy
Whitespace should feel **energetic but controlled**, leaving enough room for expressive campaigns without turning the site into visual chaos.

---

## 6. Depth & Elevation

### Elevation Strategy
realme uses **light commercial-product elevation**. Cards float softly above light surfaces, while color, photography, and campaign framing create the bigger sense of depth.

```css
--shadow-soft: 0 8px 18px rgba(17, 17, 17, 0.04);
--shadow-card: 0 14px 28px rgba(17, 17, 17, 0.08);
--shadow-focus: 0 0 0 4px rgba(255, 241, 161, 0.45);
```

### Surface Hierarchy
- White main canvas
- Pale gray support surfaces
- Elevated white product cards
- Yellow and black campaign blocks for strongest emphasis

---

## 7. Do's and Don'ts

### Do
- Keep realme youthful, bold, and product-campaign driven
- Use yellow as a strong identity marker
- Let collaboration and design stories feel fresh and current
- Preserve clear product-family navigation across the ecosystem

### Don't
- Do not make realme feel like a luxury-minimal hardware brand
- Do not bury launches under vague lifestyle messaging
- Do not turn every surface into high-saturation color
- Do not let youthful energy break scanability

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Stacked launch blocks, clean category tiles, simplified collaboration modules |
| Tablet | `768px - 1023px` | Two-column campaign and product-family layouts |
| Desktop | `1024px+` | Large hero campaigns, multi-card category grids, and collaboration storytelling |

### Responsive Rules
- Keep launch imagery and yellow identity visible on mobile
- Stack category and collaboration modules into clear vertical flows
- Preserve simple CTA paths from campaign to category to product
- Maintain strong black-white-yellow contrast at all sizes

---

## 9. Agent Prompt Guide

### Quick Reference
- Bright yellow, black, and white brand system
- Youth-focused product launches, collaborations, and category grids
- Large device imagery, rounded product cards, and energetic but readable layouts
- Confident, high-tech, and trend-aware rather than minimal-luxury

### Prompt Template
```text
Design this like realme's current public website:
- bright yellow, black, and white brand framing
- youth-focused phone, audio, wearable, and smart-life category storytelling
- bold launch campaigns with large product imagery and rounded commerce cards
- collaboration and design-energy moments that still stay readable
- accessible flagship-tech feel with confident, energetic product marketing
```
