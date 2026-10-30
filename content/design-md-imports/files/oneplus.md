# OnePlus Design System

> Premium mobile technology with focused intensity. OnePlus's current public presence combines deep black and white contrast, unmistakable red brand accents, clean device photography, and a confident "Never Settle" tone across flagship phones, foldables, tablets, wearables, and ecosystem products.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
OnePlus feels like **premium consumer tech with enthusiast discipline**. The site is cleaner and more concentrated than broad retail marketplaces. It uses strong product hero shots, dark-light contrast, and red brand cues to make flagship devices feel elevated without losing purchase clarity.

### Mood & Feeling
- Bold and premium
- Focused, fast, and device-led
- Confident without being cluttered
- Enthusiast-friendly and brand-driven
- Modern, sharp, and mobile-first

### Design Density
**Medium density.** OnePlus presents multiple product lines and offers, but keeps the experience streamlined through large hero sections, clean device staging, and simple commerce pathways.

### Visual Character
- Black, white, and gray foundation with sharp red accents
- Product hero photography as the core emotional driver
- Strong emphasis on flagship devices and premium materials
- Minimal but assertive sections with a clear CTA hierarchy
- "Never Settle" energy expressed through contrast and confidence rather than noise

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--oneplus-black` | `#000000` | Deep contrast sections and primary framing |
| `--oneplus-charcoal` | `#151515` | Secondary dark surface |
| `--oneplus-white` | `#FFFFFF` | Main canvas and product cards |
| `--oneplus-surface` | `#F5F5F5` | Soft section background |
| `--oneplus-text` | `#1F1F1F` | Primary body text |

### Brand and Support

| Token | Hex | Role |
|-------|-----|------|
| `--oneplus-red` | `#EB0029` | Core brand accent and CTA color |
| `--oneplus-red-deep` | `#C80023` | Hover and active state |
| `--oneplus-red-soft` | `#FFE3E8` | Light callout fill |
| `--oneplus-border` | `#D9DDE3` | Card borders and separators |
| `--oneplus-muted` | `#6B7280` | Secondary text |

### Utility

| Token | Hex | Role |
|-------|-----|------|
| `--oneplus-success` | `#148A58` | Positive status |
| `--oneplus-warning` | `#BE7B00` | Warning or availability notice |
| `--oneplus-danger` | `#D14343` | Error or critical notice |
| `--oneplus-focus` | `#FFB3C1` | Focus ring tint |

---

## 3. Typography Rules

### Font Stack

```css
--font-display: "OnePlus Sans", "Helvetica Neue", Arial, sans-serif;
--font-sans: "OnePlus Sans", system-ui, -apple-system, sans-serif;
--font-mono: "SF Mono", Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 70px | 700 | 1.02 | -0.03em | `#000000` |
| Page Title | 50px | 700 | 1.08 | -0.02em | `#000000` |
| Section Title | 34px | 700 | 1.12 | -0.015em | `#000000` |
| Card Title | 22px | 600 | 1.22 | -0.01em | `#1F1F1F` |
| Body Large | 18px | 400 | 1.6 | 0 | `#1F1F1F` |
| Body | 16px | 400 | 1.6 | 0 | `#1F1F1F` |
| Small Body | 14px | 400 | 1.45 | 0 | `#6B7280` |
| Label | 12px | 700 | 1.3 | 0.04em | `#6B7280` |

### Typography Philosophy
OnePlus typography should feel **precise, premium, and uncompromising**. Headlines can be large and declarative, but the system should stay clean enough that the product itself remains the star.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #eb0029;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  min-height: 48px;
  padding: 0 22px;
  font-size: 16px;
  font-weight: 700;
}

.button-primary:hover {
  background: #c80023;
}

.button-secondary {
  background: #ffffff;
  color: #000000;
  border: 1px solid #d9dde3;
  border-radius: 999px;
  min-height: 48px;
  padding: 0 22px;
}
```

### Cards and Product Panels

```css
.product-card {
  background: #ffffff;
  border: 1px solid #d9dde3;
  border-radius: 22px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.06);
}
```

### Inputs

```css
.input {
  background: #ffffff;
  color: #1f1f1f;
  border: 1px solid #d9dde3;
  border-radius: 14px;
  min-height: 48px;
  padding: 12px 14px;
}

.input:focus {
  outline: none;
  border-color: #eb0029;
  box-shadow: 0 0 0 4px rgba(255, 179, 193, 0.42);
}
```

### Component Notes
- Product panels should foreground flagship materials, cameras, displays, and performance claims
- Red should be reserved for action and identity, not sprayed across every surface
- Device ecosystem sections should feel premium and intentional, not bargain-retail crowded

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
| `--space-10` | `96px` | Large flagship and ecosystem sections |

### Layout Behavior
- Lead with a hero device and a sharp product claim
- Keep flagship, foldable, tablet, and accessory lines clearly separated
- Use clean product photography and comparison-friendly groupings
- Minimize distractions around the core path from discovery to purchase

### Whitespace Philosophy
Whitespace should feel **premium and intentional**, letting the product and red accent moments speak without making the page feel empty or austere.

---

## 6. Depth & Elevation

### Elevation Strategy
OnePlus uses **subtle premium-product elevation**. Cards lift gently off the background, while contrast, photography, and material rendering create the stronger sense of depth.

```css
--shadow-soft: 0 8px 18px rgba(0, 0, 0, 0.04);
--shadow-card: 0 14px 30px rgba(0, 0, 0, 0.08);
--shadow-focus: 0 0 0 4px rgba(255, 179, 193, 0.42);
```

### Surface Hierarchy
- White main canvas
- Light-gray support surfaces
- Elevated white product cards
- Black or charcoal hero framing with red CTA accents

---

## 7. Do's and Don'ts

### Do
- Keep OnePlus bold, premium, and product-centric
- Use red as a concentrated identity and action signal
- Let device photography and strong product claims do most of the persuasion
- Preserve a clean, high-confidence flow from hero to purchase

### Don't
- Do not make OnePlus feel like a generic e-commerce gadget store
- Do not overuse red as a broad background treatment
- Do not crowd the page with too many simultaneous offers or decorative effects
- Do not dilute flagship confidence with weak or vague copy

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Stacked flagship cards, clean device-first flows, clear buy CTAs |
| Tablet | `768px - 1023px` | Two-column product and ecosystem groupings |
| Desktop | `1024px+` | Wide flagship storytelling, premium device staging, and ecosystem panels |

### Responsive Rules
- Keep flagship device imagery legible and central on smaller screens
- Preserve simple buy paths and avoid burying CTAs under secondary modules
- Stack ecosystem products into clean device-first blocks
- Maintain black-white-red contrast clarity across breakpoints

---

## 9. Agent Prompt Guide

### Quick Reference
- Black, white, and gray structure with sharp OnePlus red accents
- Premium flagship-device storytelling with clean photography and focused CTAs
- Rounded product cards, precise hierarchy, and strong mobile-tech confidence
- Bold, modern, and product-first rather than marketplace-cluttered

### Prompt Template
```text
Design this like OnePlus's current public website:
- black-and-white premium product framing with sharp red CTA accents
- flagship phone, foldable, tablet, and wearable sections with clean device photography
- rounded product cards and highly focused purchase pathways
- modern "Never Settle" energy expressed through confidence and contrast
- premium mobile-tech feel rather than broad retail clutter
```
