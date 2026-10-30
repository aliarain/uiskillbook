# Wix Design System

> Friendly no-code web-design platform with bright utility color and high customization energy. Wix combines the custom Madefor typeface, bold brand colors, theme-driven site styling, and flexible visual tooling to create experiences that feel approachable, capable, and highly expressive.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Wix feels like **accessible design power**. It aims to make site creation look exciting and flexible without feeling technically intimidating. The platform should support a wide range of user expression while maintaining a coherent, energetic product shell.

### Mood & Feeling
- **Approachable**: people should feel they can build something great quickly
- **Expressive**: visual experimentation is part of the promise
- **Modern**: AI, animation, and design tooling feel current
- **Flexible**: the system should imply many possible outcomes
- **Guided**: customization should still feel organized, not chaotic

### Design Density
**Medium density**. Wix often packs many options into an interface, but it uses theme panels, live previews, and grouped styling controls to stay understandable.

### Visual Character
- Bright blue-led brand accent
- Friendly rounded controls
- Site-style systems for colors, typography, and max width
- Live preview and editor-oriented layouts
- Motion and gradients used more openly than in conservative enterprise products

---

## 2. Color Palette & Roles

### Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--wix-blue` | `#0C6EFC` | Primary brand and interactive color |
| `--wix-orange` | `#FAAD4D` | Warm accent |
| `--wix-green` | `#008463` | Support / success accent |
| `--wix-red` | `#DF3131` | Error / contrast accent |
| `--wix-purple` | `#7F2275` | Brand-supporting creative accent |
| `--wix-violet` | `#674FE6` | Product / AI accent |
| `--wix-coral` | `#FF7055` | Attention-grabbing highlight |

### Neutral Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--ink-strong` | `#111827` | Primary text |
| `--ink-default` | `#374151` | Body text |
| `--ink-muted` | `#6B7280` | Secondary text |
| `--surface-page` | `#F8FAFC` | Editor background |
| `--surface-card` | `#FFFFFF` | Panels and cards |
| `--border-default` | `#E5E7EB` | Dividers and field borders |

### Color Usage Rules
- Use the brand palette selectively; not every screen needs every accent.
- Build the core UI from light neutrals and one clear primary accent.
- Let site theme colors drive end-user websites while the product chrome stays stable.

---

## 3. Typography Rules

### Font Stack

```css
/* Wix brand type */
--font-sans: 'Wix Madefor', 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 56px | 700 | 1.05 | -0.02em | Marketing hero |
| Page Title | 40px | 700 | 1.1 | -0.015em | Major title |
| Section Title | 28px | 600 | 1.15 | -0.01em | Primary section |
| Card Title | 20px | 600 | 1.25 | 0 | Panel heading |
| Body | 16px | 400 | 1.6 | 0 | Main copy |
| Small Body | 14px | 400 | 1.5 | 0 | Secondary copy |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and field labels |

### Typography Philosophy
Wix Madefor is intended to feel **professional and dynamic with strong readability**. The typography should be energetic but never messy.

### Practical Rules
- Use bold display sizes for product storytelling.
- Keep tool labels clean and direct.
- Let user site themes vary, but keep the product UI itself readable and stable.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #0C6EFC;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #0C6EFC;
  border-radius: 999px;
  font: 600 14px/1 'Wix Madefor', sans-serif;
}
```

#### Secondary Button
```css
.button-secondary {
  background: #FFFFFF;
  color: #111827;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #E5E7EB;
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
  color: #111827;
  border: 1px solid #E5E7EB;
  border-radius: 14px;
  font: 400 16px/1.2 'Wix Madefor', sans-serif;
}

.input:focus {
  outline: none;
  border-color: #0C6EFC;
  box-shadow: 0 0 0 3px rgba(12, 110, 252, 0.16);
}
```

### Panels and Style Cards

#### Style Panel
```css
.panel {
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 20px;
  padding: 20px;
}
```

#### Theme Card
```css
.theme-card {
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 22px;
  padding: 24px;
}
```

---

## 5. Layout Principles

### Layout System
Wix uses **site styles** and theme panels to manage typography, colors, navigation, and max width across an experience.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Tight spacing |
| `--space-4` | `16px` | Core spacing |
| `--space-5` | `24px` | Panel spacing |
| `--space-6` | `32px` | Section spacing |
| `--space-8` | `48px` | Major grouping |
| `--space-10` | `64px` | Large page rhythm |

### Layout Rules
- Group styling controls into clear panels.
- Make live preview and editing context obvious.
- Use theme structures so color and typography stay consistent sitewide.
- Give creative tools room to breathe and demonstrate outcomes visually.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | light editor background | Main product field |
| Panel | white card with light border | Inspector / settings |
| Theme card | larger surfaced preview | Theme and design options |
| Overlay | white card with stronger shadow | Floating tools / dialogs |

### Shadow System

```css
.shadow-panel {
  box-shadow: 0 8px 18px rgba(17, 24, 39, 0.08);
}

.shadow-overlay {
  box-shadow: 0 16px 30px rgba(17, 24, 39, 0.14);
}
```

### Depth Rules
- Use depth to clarify editing layers.
- Keep panels soft and approachable.
- Don’t let visual effects overwhelm workflow clarity.

---

## 7. Do's and Don'ts

### Do
- Use theme systems to keep styling coherent.
- Let the brand feel bright and optimistic.
- Keep controls approachable and readable.
- Show outcomes visually whenever possible.
- Use color strategically, not all at once.

### Don't
- Make the editor feel cold or overly technical.
- Flood every screen with all seven brand colors.
- Hide styling logic behind unclear controls.
- Sacrifice clarity for visual effects.
- Overcomplicate primary editing actions.

---

## 8. Responsive Behavior

### Responsive Rules
- Keep editor panels stackable and touch-friendly.
- Preserve clear theme previews on narrower widths.
- Let controls wrap before labels become ambiguous.
- Keep primary actions clearly differentiated with brand blue.
- Maintain strong contrast for text across bright themes.

### Mobile Character
Wix mobile layouts should still feel flexible and optimistic. Even when simplified, the creative-tooling identity should remain obvious.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: approachable, expressive, modern
- **Primary accent**: Wix blue `#0C6EFC`
- **Core type**: Wix Madefor
- **Layout**: panel-driven editor + site theme system
- **Components**: rounded buttons, soft panels, live-preview framing

### Prompt Snippet

```text
Design this interface in the style of Wix’s current product and brand system. Use Wix Madefor typography, bright blue (#0C6EFC) as the primary interactive color, a light panel-based editor layout, and a theme-driven approach to colors and typography. The result should feel approachable, flexible, and creatively empowering rather than rigid enterprise software.
```
