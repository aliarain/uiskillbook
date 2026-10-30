# Rive Design System

> Bold, motion-first design built around a deep black canvas, vivid interactive animations, and crisp white typography. Rive's public brand showcases real-time interactive graphics front and center, with UI chrome kept minimal so animated content does the talking.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Rive feels like **a motion reel you can play with**. Pitch-black pages host live, interactive Rive animations — characters, game UI, buttons — framed by sharp white type and very little else.

### Mood & Feeling
- Energetic, playful, and technical
- Motion-obsessed and interactive
- Confident and developer-friendly
- High-contrast and modern
- Creative-tool premium

### Design Density
**Low density.** Large animated showcases dominate; text blocks are short and punchy.

### Visual Character
- Deep black (`#000000`) canvas throughout
- Live interactive animations embedded as hero and feature content
- White headlines with bold, tight tracking
- Vivid accent colors appear inside animations rather than in chrome
- Rounded dark cards with subtle borders

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--rive-black` | `#000000` | Primary canvas |
| `--rive-surface` | `#141414` | Cards and panels |
| `--rive-surface-raised` | `#1F1F1F` | Hover and input surfaces |
| `--rive-white` | `#FFFFFF` | Primary text, primary buttons |
| `--rive-text-muted` | `#8C8C8C` | Secondary text |
| `--rive-border` | `#2A2A2A` | Card borders, dividers |

### Accent Palette (used in showcases)

| Token | Hex | Role |
|-------|-----|------|
| `--rive-blue` | `#4B7BFF` | Editor selection, links |
| `--rive-pink` | `#FF5C9D` | Showcase accent |
| `--rive-yellow` | `#FFD447` | Showcase accent |
| `--rive-green` | `#3DDC97` | State machine / success accent |
| `--rive-purple` | `#8F6BFF` | Showcase accent |

---

## 3. Typography Rules

### Font Stack

```css
--font-display: "Inter Display", "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Marketing Hero | 80px | 700 | 0.95 | -0.04em | `#FFFFFF` |
| Section Heading | 48px | 700 | 1.05 | -0.03em | `#FFFFFF` |
| Card Title | 20px | 600 | 1.3 | -0.01em | `#FFFFFF` |
| Body | 17px | 400 | 1.55 | 0 | `#8C8C8C` |
| Code Snippet | 14px | 400 | 1.6 | 0 | `#FFFFFF` |
| Button Label | 15px | 600 | 1.2 | 0 | `#000000` |

### Typography Philosophy
Headlines are **big, bold, and tight** to match the punchiness of the animations; body copy stays muted so it never competes with motion.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #ffffff;
  color: #000000;
  border: none;
  border-radius: 999px;
  min-height: 44px;
  padding: 0 24px;
  font-size: 15px;
  font-weight: 600;
}

.button-primary:hover {
  background: #e6e6e6;
}

.button-secondary {
  background: transparent;
  color: #ffffff;
  border: 1px solid #2a2a2a;
  border-radius: 999px;
  min-height: 44px;
  padding: 0 24px;
}
```

### Showcase Card

```css
.showcase-card {
  background: #141414;
  border: 1px solid #2a2a2a;
  border-radius: 20px;
  overflow: hidden;
}

.showcase-canvas {
  width: 100%;
  aspect-ratio: 16 / 10;
  display: block;
}
```

### Code Block

```css
.code-block {
  background: #141414;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 20px;
  font-family: var(--font-mono);
  font-size: 14px;
}
```

### Component Notes
- Primary buttons are white on black, not colored
- Animations respond to hover, click, and scroll via state machines
- Runtime/platform logos appear as monochrome white icons
- Code snippets show multi-runtime support with tabbed language selectors

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Icon gaps |
| `--space-2` | `8px` | Inline spacing |
| `--space-3` | `16px` | Component padding |
| `--space-4` | `24px` | Card gaps |
| `--space-5` | `96px` | Section spacing |
| `--space-6` | `160px` | Hero spacing |

### Layout Behavior
- Hero centers a massive headline over or beside a live animation
- Feature sections use large single showcases or 2–3 column card grids
- Max content width ~1280px with generous side margins

### Whitespace Philosophy
Black space is **the stage** — every section isolates one idea and one animation.

---

## 6. Depth & Elevation

### Elevation Strategy
Rive is **flat on black**; separation comes from tonal steps and thin borders. Motion supplies the sense of depth.

```css
--shadow-none: none;
--border-card: 1px solid #2a2a2a;
--glow-hover: 0 0 0 1px rgba(255, 255, 255, 0.2);
```

### Surface Hierarchy
- Pure black canvas
- Dark gray cards
- Animated content as the focal layer

---

## 7. Do's and Don'ts

### Do
- Show live, interactive animation wherever possible
- Keep UI chrome monochrome and let color live in animations
- Use big, tight, bold headlines
- Use white pill buttons on black

### Don't
- Do not use static screenshots where a live demo fits
- Do not add colored UI chrome that competes with showcases
- Do not use light backgrounds for main sections
- Do not use heavy drop shadows

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Stacked showcases, hero type ~44px |
| Tablet | `768px - 1199px` | Two-column showcase grids |
| Desktop | `1200px+` | Full-width showcases, large hero type |

### Responsive Rules
- Animations scale with container and keep aspect ratio
- Touch interactions replace hover on mobile state machines
- Respect `prefers-reduced-motion` with paused first frames

---

## 9. Agent Prompt Guide

### Quick Reference
- Pure black canvas, white type
- Live interactive animations as hero content
- White pill primary buttons
- Color lives inside animations, not chrome

### Prompt Template
```text
Design this like Rive's current public brand style:
- pure black canvas with big, bold, tightly tracked white headlines
- live interactive animations as hero and feature content
- white pill primary buttons with black text; outlined secondary buttons
- dark gray cards with thin borders, no shadows
- vivid colors only inside animated showcases, monochrome UI chrome
- energetic, playful, motion-first atmosphere
```
