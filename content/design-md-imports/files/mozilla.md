# Mozilla Design System

> Mission-driven web brand with activist energy. High-contrast black and off-white, bright green and seed accents, Mozilla Headline and Mozilla Text, and bold editorial blocks create a system that feels public-interest, open-web, and unmistakably modern.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Mozilla blends **editorial boldness with open-source pragmatism**. The homepage and Protocol design system use strong contrast, chunky typography, generous spacing, and bright accent colors to communicate advocacy, accessibility, and independence from mainstream big-tech polish.

### Mood & Feeling
- **People-first conviction**: principled, civic, outspoken
- **Digital optimism**: modern and forward-looking without startup gloss
- **Creative utility**: expressive but still systematized
- **Open-web friendliness**: accessible, discoverable, transparent
- **Playful seriousness**: bold enough to stand apart, clear enough to scale

### Design Density
**Medium-low density** with generous blocks of space. Mozilla pages breathe, but they do not feel precious. Large type, compact cards, and sturdy CTA elements keep the experience active.

### Visual Character
- Strong black/white contrast with strategic neon-like accents
- Editorial headline treatment paired with straightforward body copy
- Rounded corners are present, but never soft or bubbly
- Cards and promos often feel poster-like or magazine-like
- Sections are assembled as bold content blocks, not lightweight widgets
- Motion and interaction should feel crisp and direct rather than luxurious

---

## 2. Color Palette & Roles

### Mozilla Brand Neutrals

| Token | Hex | Role |
|-------|-----|------|
| `--moz-black` | `#161616` | Primary text, dark backgrounds |
| `--moz-black-strong` | `#000000` | Maximum contrast, hero surfaces |
| `--moz-white` | `#fafafa` | Default light background |
| `--moz-white-strong` | `#ffffff` | Elevated light surfaces |
| `--moz-gray` | `#b3b3b3` | Subtle borders, inactive states |
| `--moz-gray-mid` | `#6d6d6d` | Secondary copy |
| `--moz-gray-dark` | `#414141` | Strong secondary text |

### Signature Accents

| Token | Hex | Role |
|-------|-----|------|
| `--moz-green` | `#00d230` | Hero accents, positive action |
| `--moz-green-light` | `#d6ffcd` | Soft green backgrounds |
| `--moz-aqua` | `#87e3cd` | Supporting highlight, cool contrast |
| `--moz-seed` | `#ddef30` | Poster-like emphasis, data callouts |
| `--moz-orange` | `#ff9456` | Warm CTA support, lively secondary emphasis |
| `--moz-pink` | `#ff97e2` | Experimental / campaign accent |

### Protocol Utility Colors

| Token | Hex | Role |
|-------|-----|------|
| `--blue-50` | `#0060df` | Links, product-style actions |
| `--blue-90` | `#09204d` | Deep ink shadow tone |
| `--purple-50` | `#b833e1` | High-energy highlight |
| `--dark-gray-90` | `#15141a` | Dark UI panel background |
| `--light-gray-20` | `#f0f0f4` | Low-contrast section fill |

### Color Usage Rules
- Start with black or off-white as the dominant field.
- Use green or seed as the most recognizable Mozilla-specific accent.
- Reserve orange and pink for campaign moments or supportive emphasis.
- Keep links and product actions readable and practical; blue remains useful even within the Mozilla palette.

---

## 3. Typography Rules

### Font Stack

```css
/* Mozilla-branded pages */
--font-headline: 'Mozilla Headline', Inter, 'Helvetica Neue', Arial, sans-serif;
--font-body: 'Mozilla Text', Inter, 'Helvetica Neue', Arial, sans-serif;

/* Product / Firefox-adjacent fallback */
--font-product-headline: Metropolis, Inter, sans-serif;
--font-base: Inter, sans-serif;

/* Monospace */
--font-mono: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 72px | 700 | 0.95 | -0.03em | Main advocacy headline |
| Page Title | 56px | 700 | 1 | -0.025em | Section-leading statement |
| Section Title | 40px | 700 | 1.05 | -0.02em | Large editorial section title |
| Card Title | 24px | 700 | 1.15 | -0.01em | Feature card headings |
| Subsection | 20px | 600 | 1.25 | -0.01em | Promo and module labels |
| Body Large | 18px | 400 | 1.6 | 0 | Intro paragraphs |
| Body | 16px | 400 | 1.6 | 0 | Standard copy |
| Small Body | 14px | 400 | 1.5 | 0 | Metadata, helper text |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons, nav items |
| Caption | 12px | 500 | 1.4 | 0.02em | Eyebrows, utility notes |

### Typography Philosophy
Mozilla typography is **punchy, legible, and public-facing**. Headlines do the brand work. Body text remains readable and conversational. The system should feel like it can support a manifesto, a product explainer, and a campaign landing page without changing character.

### Practical Rules
- Use `Mozilla Headline` for titles above 24px.
- Use `Mozilla Text` or Inter for body copy and UI labels.
- Let headlines be short and forceful; avoid overlong hero lines.
- Keep code and technical references in a plain monospace stack.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #161616;
  color: #fafafa;
  min-height: 48px;
  padding: 0 20px;
  border: 2px solid #161616;
  border-radius: 8px;
  font: 600 14px/1.2 'Mozilla Text', Inter, sans-serif;
  transition: transform 120ms ease, background 120ms ease;
}

.button-primary:hover {
  background: #000000;
  transform: translateY(-1px);
}

.button-primary:focus-visible {
  outline: 3px solid #00d230;
  outline-offset: 2px;
}
```

#### Secondary Button
```css
.button-secondary {
  background: transparent;
  color: #161616;
  min-height: 48px;
  padding: 0 20px;
  border: 2px solid #161616;
  border-radius: 8px;
}

.button-secondary:hover {
  background: #161616;
  color: #fafafa;
}
```

#### Dark Surface Primary Button
```css
.button-dark {
  background: #fafafa;
  color: #161616;
  border: 2px solid #fafafa;
}

.button-dark:hover {
  background: #d6ffcd;
  border-color: #d6ffcd;
}
```

#### Product / Link-Driven Button
```css
.button-product {
  background: #0060df;
  color: #ffffff;
  border: 2px solid #0060df;
  border-radius: 8px;
}

.button-product:hover {
  background: #0250bb;
  border-color: #0250bb;
}
```

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  min-height: 48px;
  padding: 0 16px;
  background: #ffffff;
  color: #161616;
  border: 2px solid #b3b3b3;
  border-radius: 8px;
  font: 400 16px/1.2 'Mozilla Text', Inter, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #161616;
  box-shadow: 0 0 0 3px rgba(0, 210, 48, 0.2);
}

.input::placeholder {
  color: #6d6d6d;
}
```

#### Field Label and Notes
```css
.input-label {
  display: block;
  margin-bottom: 8px;
  color: #161616;
  font: 600 14px/1.3 'Mozilla Text', Inter, sans-serif;
}

.input-note {
  margin-top: 8px;
  color: #6d6d6d;
  font: 400 14px/1.5 'Mozilla Text', Inter, sans-serif;
}

.input-error {
  border-color: #c50042;
}
```

### Cards

#### Editorial Card
```css
.card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 12px 1px rgba(29, 17, 51, 0.04),
              0 3px 16px 2px rgba(9, 32, 77, 0.12),
              0 5px 10px -3px rgba(29, 17, 51, 0.12);
}
```

#### Feature Card
```css
.card-feature {
  background: #161616;
  color: #fafafa;
  border-radius: 16px;
  padding: 32px;
  overflow: hidden;
  position: relative;
}

.card-feature::after {
  content: '';
  position: absolute;
  inset: auto -40px -40px auto;
  width: 120px;
  height: 120px;
  background: #00d230;
  border-radius: 24px;
  transform: rotate(12deg);
  opacity: 0.2;
}
```

#### Linked Card
```css
.card-link {
  display: block;
  color: inherit;
  text-decoration: none;
  transition: transform 150ms ease, box-shadow 150ms ease;
}

.card-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 24px 2px rgba(29, 17, 51, 0.04),
              0 6px 32px 4px rgba(9, 32, 77, 0.12),
              0 8px 12px -5px rgba(29, 17, 51, 0.12);
}
```

### Layout Components

#### Split Section
```css
.split {
  display: grid;
  gap: 32px;
  align-items: center;
}

@media (min-width: 768px) {
  .split {
    grid-template-columns: 1fr 1fr;
  }
}
```

#### Promo Banner
```css
.banner {
  background: #ddef30;
  color: #161616;
  border-radius: 16px;
  padding: 24px 32px;
}
```

---

## 5. Layout Principles

### Content Widths

| Token | Value | Use |
|-------|-------|-----|
| `--content-xs` | `304px` | Narrow forms / utility blocks |
| `--content-sm` | `432px` | Compact article modules |
| `--content-md` | `688px` | Reading width |
| `--content-lg` | `928px` | Standard section width |
| `--content-xl` | `1152px` | Wide marketing sections |
| `--content-max` | `1440px` | Full-width layouts |

### Spacing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xs` | `4px` | Micro spacing |
| `--spacing-sm` | `8px` | Tight gaps |
| `--spacing-md` | `16px` | Default internal spacing |
| `--spacing-lg` | `24px` | Card padding / row gaps |
| `--spacing-xl` | `32px` | Larger component spacing |
| `--spacing-2xl` | `48px` | Section spacing |
| `--layout-sm` | `32px` | Compact section separation |
| `--layout-md` | `48px` | Standard section separation |
| `--layout-lg` | `64px` | Large section separation |
| `--layout-xl` | `96px` | Hero / feature separation |

### Layout Behavior
- Use full-width blocks with centered content containers.
- Stack editorial sections as distinct “chapters” rather than blending everything into one surface.
- Let split layouts become single-column on smaller screens.
- Prefer simple 2-, 3-, and 4-column card layouts; avoid overly bespoke grids.

---

## 6. Depth & Elevation

### Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--radius-xs` | `2px` | Utility details |
| `--radius-sm` | `4px` | Tight UI |
| `--radius-md` | `8px` | Inputs, buttons |
| `--radius-lg` | `16px` | Cards, promos, large media blocks |

### Shadow System

```css
.shadow-sm {
  box-shadow: 0 8px 12px 1px rgba(29, 17, 51, 0.04),
              0 3px 16px 2px rgba(9, 32, 77, 0.12),
              0 5px 10px -3px rgba(29, 17, 51, 0.12);
}

.shadow-md {
  box-shadow: 0 16px 24px 2px rgba(29, 17, 51, 0.04),
              0 6px 32px 4px rgba(9, 32, 77, 0.12),
              0 8px 12px -5px rgba(29, 17, 51, 0.12);
}
```

### Surface Hierarchy
- **Base**: `#fafafa` or `#ffffff`
- **High contrast section**: `#161616`
- **Soft utility fill**: `#f0f0f4`
- **Signal surfaces**: `#d6ffcd`, `#ddef30`, or `#161616` with bright accents

### Depth Rules
- Use rounded cards and visible shadow for promotional or editorial modules.
- Use flat black surfaces with bright accents for brand-defining hero moments.
- Avoid glassmorphism, ultra-soft blurs, or luxury gradients; Mozilla depth should feel practical and energetic.

---

## 7. Do's and Don'ts

### Do
- Use high contrast and short, emphatic headlines.
- Pair bold editorial blocks with simple interactive UI.
- Use Mozilla Headline for brand moments and Mozilla Text for readable body copy.
- Let green or seed accents punctuate black-and-white layouts.
- Build layouts that feel open, accessible, and civic-minded.

### Don't
- Make the UI look corporate-neutral or generic SaaS.
- Overuse blue if the page is meant to feel Mozilla-branded rather than Firefox-branded.
- Shrink headlines too much; the brand depends on assertive type.
- Add excessive chrome around cards and inputs.
- Make motion too smooth or indulgent; interactions should feel quick and direct.

---

## 8. Responsive Behavior

### Breakpoints

| Token | Value |
|-------|-------|
| `--screen-xs` | `320px` |
| `--screen-sm` | `480px` |
| `--screen-md` | `768px` |
| `--screen-lg` | `1024px` |
| `--screen-xl` | `1312px` |

### Responsive Rules
- Collapse multi-column cards into a single column below `768px`.
- Turn split sections into stacked sections on small screens.
- Increase side padding as viewport size grows instead of hard-coding fixed widths.
- Keep buttons at least `44px` tall and inputs at least `48px` tall for touch friendliness.
- Preserve strong headline presence on mobile by wrapping early instead of scaling down too aggressively.

### Mobile Character
Mozilla on mobile should still feel bold. Keep the contrast, keep the headline attitude, and keep section breaks obvious. Avoid compressing the brand into bland app-shell patterns.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: activist, editorial, open-web, confident
- **Core palette**: black `#161616`, off-white `#fafafa`, green `#00d230`, seed `#ddef30`
- **Typography**: Mozilla Headline + Mozilla Text
- **Shape language**: rounded rectangles, bold blocks, clear CTA shapes
- **Layout**: centered containers with generous spacing and split sections
- **Components**: strong buttons, clean inputs, editorial cards, high-contrast hero surfaces

### Prompt Snippet

```text
Design this interface in the style of Mozilla's current web presence and Protocol design system. Use Mozilla Headline for bold headlines and Mozilla Text for body copy, with a high-contrast palette centered on black (#161616), off-white (#fafafa), and bright green (#00d230). Favor editorial block layouts, rounded cards, crisp CTAs, and generous spacing. The result should feel open-web, mission-driven, accessible, and more like a public-interest media/product hybrid than a generic SaaS dashboard.
```
