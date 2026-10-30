# Spline Design System

> Immersive, dark 3D-first design built around a near-black canvas, glossy interactive 3D scenes, and a crisp blue accent. Spline's public brand feels futuristic yet playful, using real-time 3D objects, soft lighting, and clean UI chrome to make 3D design feel accessible.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Spline feels like **a creative 3D studio in the browser**. Dark surfaces let colorful, softly lit 3D objects glow, while the editor chrome stays thin, compact, and neutral.

### Mood & Feeling
- Futuristic, playful, and creative
- Immersive and interactive
- Polished and tactile
- Inviting to non-3D designers
- Premium with a toy-like charm

### Design Density
**Low density** on marketing pages dominated by 3D scenes; **high density** in the editor's compact panels.

### Visual Character
- Near-black canvas (`#0E0E11`-adjacent)
- Real-time 3D hero scenes with soft pastel materials and glass effects
- Blue accent (`#4D7CFE`-adjacent) for CTAs and selection
- Thin dark panels with small 11-12px labels in the editor
- Rounded pill buttons and soft glows

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--sp-canvas` | `#0E0E11` | Primary dark canvas |
| `--sp-panel` | `#18181C` | Editor panels, cards |
| `--sp-panel-raised` | `#222228` | Inputs, hover surfaces |
| `--sp-white` | `#FFFFFF` | Primary text |
| `--sp-blue` | `#4D7CFE` | Primary accent, CTAs, selection |
| `--sp-blue-hover` | `#6A91FF` | Hover state |

### Support Palette

| Token | Hex | Role |
|-------|-----|------|
| `--sp-text-muted` | `#9A9AA5` | Secondary text, labels |
| `--sp-border` | `#2C2C33` | Panel borders |
| `--sp-pink` | `#FF7AC6` | Material/illustration accent |
| `--sp-purple` | `#9B6BFF` | Material/illustration accent |
| `--sp-mint` | `#5CF2C3` | Material/illustration accent |
| `--sp-orange` | `#FF9A4D` | Material/illustration accent |

---

## 3. Typography Rules

### Font Stack

```css
--font-display: "Inter Display", "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Marketing Hero | 72px | 600 | 1.0 | -0.04em | `#FFFFFF` |
| Section Heading | 44px | 600 | 1.1 | -0.03em | `#FFFFFF` |
| Card Title | 20px | 600 | 1.3 | -0.01em | `#FFFFFF` |
| Body | 16px | 400 | 1.55 | 0 | `#9A9AA5` |
| Editor Label | 11px | 500 | 1.3 | 0 | `#9A9AA5` |
| Button Label | 14px | 600 | 1.2 | 0 | `#FFFFFF` |

### Typography Philosophy
Type is **tight, modern, and understated**, letting 3D visuals carry emotion. Headlines use negative tracking; editor text stays small and functional.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #4d7cfe;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  min-height: 40px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 600;
}

.button-primary:hover {
  background: #6a91ff;
}

.button-secondary {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  min-height: 40px;
  padding: 0 20px;
}
```

### Community Card

```css
.scene-card {
  background: #18181c;
  border: 1px solid #2c2c33;
  border-radius: 16px;
  overflow: hidden;
}

.scene-card-preview {
  aspect-ratio: 4 / 3;
  background: radial-gradient(circle at 50% 40%, #2a2a33 0%, #0e0e11 100%);
}
```

### Editor Input

```css
.editor-input {
  background: #222228;
  border: 1px solid transparent;
  border-radius: 6px;
  height: 28px;
  padding: 0 8px;
  color: #ffffff;
  font-size: 11px;
}

.editor-input:focus {
  border-color: #4d7cfe;
}
```

### Component Notes
- 3D scenes are interactive — objects react to cursor and scroll
- Selection outlines and gizmos use the blue accent
- Pastel accent colors live in 3D materials, not in UI chrome
- Translucent frosted panels may overlay scenes

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Editor control gaps |
| `--space-2` | `8px` | Panel row spacing |
| `--space-3` | `16px` | Card padding |
| `--space-4` | `24px` | Grid gaps |
| `--space-5` | `80px` | Section spacing |
| `--space-6` | `160px` | Hero spacing |

### Layout Behavior
- Marketing hero is a full-bleed interactive 3D scene with centered headline
- Community gallery uses a masonry/grid of scene previews
- Editor: objects panel left, viewport center, properties right

### Whitespace Philosophy
Dark negative space acts as **a studio backdrop**, spotlighting 3D objects.

---

## 6. Depth & Elevation

### Elevation Strategy
Depth comes from **real 3D rendering and soft glows**, while UI surfaces use subtle tonal steps and translucency.

```css
--shadow-panel: 0 8px 32px rgba(0, 0, 0, 0.5);
--glow-accent: 0 0 40px rgba(77, 124, 254, 0.35);
--glass: rgba(24, 24, 28, 0.7);
--glass-blur: blur(20px);
```

### Surface Hierarchy
- Near-black canvas
- Dark panels and cards
- Frosted glass overlays
- Glowing 3D objects as focal points

---

## 7. Do's and Don'ts

### Do
- Lead with interactive 3D visuals
- Keep UI chrome dark, thin, and neutral
- Use blue for CTAs and selection only
- Use soft pastel materials and lighting in 3D scenes

### Don't
- Do not use flat, static illustrations in place of 3D
- Do not use bright pastels for UI controls
- Do not use light backgrounds for core surfaces
- Do not overload panels with large typography

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Simplified 3D scenes or video fallback, stacked content |
| Tablet | `768px - 1199px` | Two-column galleries |
| Desktop | `1200px+` | Full interactive hero, multi-column galleries |

### Responsive Rules
- Reduce 3D scene complexity on mobile for performance
- Honor `prefers-reduced-motion` with static renders
- Pill buttons keep a 44px minimum touch target on mobile

---

## 9. Agent Prompt Guide

### Quick Reference
- Near-black canvas, glowing 3D objects
- Blue accent for CTAs and selection
- Tight Inter headlines
- Frosted glass panels and soft glows

### Prompt Template
```text
Design this like Spline's current public brand and product style:
- near-black canvas with interactive, softly lit 3D hero objects in pastel materials
- blue (#4D7CFE) pill CTAs and selection highlights
- tight, modern Inter headlines with negative tracking and muted gray body text
- dark cards with thin borders and frosted glass overlays
- compact dark editor panels with small labels
- futuristic, playful, creative atmosphere
```
