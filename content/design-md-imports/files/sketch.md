# Sketch Design System

> Crafted, Mac-native design built around a warm diamond-orange accent, soft light surfaces, and precise native-feeling controls. Sketch's public brand celebrates design craft with polished product screenshots, subtle gradients, and a friendly, independent tone.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Sketch feels like **a carefully made Mac app with a designer's eye**. Clean light surfaces, macOS-style controls, and a warm yellow-orange diamond accent communicate precision and craft.

### Mood & Feeling
- Crafted, precise, and polished
- Warm and independent
- Mac-native and familiar
- Calm and professional
- Quietly confident

### Design Density
**Medium density.** Marketing pages are airy with large screenshots; the app and web workspace are tool-dense but orderly, using native control sizing.

### Visual Character
- Warm orange-yellow (`#F7B500` → `#FA6400`) diamond brand gradient
- Light gray canvases and white panels
- macOS-style segmented controls, toggles, and inspector panels
- Rounded product screenshots with soft shadows
- Friendly, illustrated feature icons

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--sk-orange` | `#FA6400` | Primary accent, CTAs |
| `--sk-orange-dark` | `#E05A00` | Hover/pressed state |
| `--sk-yellow` | `#F7B500` | Diamond gradient start, highlights |
| `--sk-white` | `#FFFFFF` | Panels and cards |
| `--sk-canvas` | `#F9F9F9` | Page background |
| `--sk-ink` | `#1C1C1E` | Primary text |

### Support Palette

| Token | Hex | Role |
|-------|-----|------|
| `--sk-ink-muted` | `#6E6E73` | Secondary text |
| `--sk-border` | `#E5E5EA` | Borders and dividers |
| `--sk-blue` | `#0A84FF` | Selection, focus, links in app |
| `--sk-purple` | `#8E5CF7` | Prototyping accent |
| `--sk-green` | `#30D158` | Success states |
| `--sk-dark` | `#161616` | Dark mode canvas |

---

## 3. Typography Rules

### Font Stack

```css
--font-display: "Sketch Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
--font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Helvetica Neue", sans-serif;
--font-mono: "SF Mono", ui-monospace, Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Marketing Hero | 64px | 700 | 1.05 | -0.03em | `#1C1C1E` |
| Section Heading | 40px | 700 | 1.15 | -0.02em | `#1C1C1E` |
| Feature Title | 20px | 600 | 1.3 | -0.01em | `#1C1C1E` |
| Body | 17px | 400 | 1.55 | 0 | `#1C1C1E` |
| Inspector Label | 11px | 500 | 1.3 | 0 | `#6E6E73` |
| Button Label | 15px | 600 | 1.2 | 0 | `#FFFFFF` |

### Typography Philosophy
Type follows **macOS conventions** — tight, bold headlines for marketing and small, crisp system text for tool UI.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #fa6400;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  min-height: 44px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 600;
}

.button-primary:hover {
  background: #e05a00;
}

.button-secondary {
  background: #ffffff;
  color: #1c1c1e;
  border: 1px solid #e5e5ea;
  border-radius: 8px;
  min-height: 44px;
  padding: 0 20px;
}
```

### Feature Card

```css
.feature-card {
  background: #ffffff;
  border: 1px solid #e5e5ea;
  border-radius: 16px;
  padding: 32px;
}

.product-shot {
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}
```

### Inspector Field

```css
.inspector-input {
  background: #ffffff;
  border: 1px solid #e5e5ea;
  border-radius: 5px;
  height: 22px;
  padding: 0 6px;
  font-size: 11px;
}

.inspector-input:focus {
  outline: 3px solid rgba(10, 132, 255, 0.4);
  border-color: #0a84ff;
}
```

### Component Notes
- The diamond logo carries the warm gradient; UI accents stay solid orange
- In-app selection and focus use macOS blue, not brand orange
- Screenshots are framed in realistic Mac windows with soft shadows
- Pricing cards use clean white tiles with a single highlighted plan

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Inspector control gaps |
| `--space-2` | `8px` | Inline spacing |
| `--space-3` | `16px` | Component padding |
| `--space-4` | `32px` | Card padding |
| `--space-5` | `64px` | Section spacing |
| `--space-6` | `120px` | Hero spacing |

### Layout Behavior
- Marketing uses centered hero headlines above large app screenshots
- Feature sections alternate text and imagery in a 12-column grid (max ~1200px)
- App layout: layers list left, canvas center, inspector right

### Whitespace Philosophy
Whitespace should feel **crafted and calm**, letting the product screenshots be the hero.

---

## 6. Depth & Elevation

### Elevation Strategy
Sketch uses **soft, realistic shadows** on screenshots and floating panels, while UI panels themselves stay flat with hairline borders.

```css
--shadow-card: 0 2px 8px rgba(0, 0, 0, 0.06);
--shadow-screenshot: 0 20px 60px rgba(0, 0, 0, 0.12);
--shadow-popover: 0 8px 24px rgba(0, 0, 0, 0.16);
```

### Surface Hierarchy
- Light gray page canvas
- White cards and panels
- Elevated screenshots and popovers

---

## 7. Do's and Don'ts

### Do
- Use warm orange for primary marketing CTAs
- Follow macOS control conventions in tool UI
- Frame product imagery in Mac windows with soft shadows
- Keep layouts airy and screenshot-led

### Don't
- Do not use brand orange for in-app selection states
- Do not use harsh or colored shadows
- Do not crowd marketing pages with dense text
- Do not overuse the gradient beyond the logo and key highlights

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Stacked sections, cropped screenshots, full-width buttons |
| Tablet | `768px - 1023px` | Two-column feature grids |
| Desktop | `1024px+` | Full editorial layouts with large screenshots |

### Responsive Rules
- Hero type scales from 64px down to ~36px
- Screenshots crop to focus areas rather than shrinking illegibly
- Touch targets are at least 44px on web

---

## 9. Agent Prompt Guide

### Quick Reference
- Warm orange accent with yellow-orange diamond gradient
- Light, airy, Mac-native surfaces
- Soft-shadowed product screenshots
- macOS-blue selection in tool UI

### Prompt Template
```text
Design this like Sketch's current public brand and product style:
- light gray and white surfaces with a warm orange (#FA6400) primary CTA
- yellow-to-orange diamond gradient reserved for logo and key highlights
- bold, tight SF-style headlines and crisp small system text
- macOS-native controls with blue focus and selection
- large product screenshots in Mac windows with soft realistic shadows
- crafted, calm, independent design-tool tone
```
