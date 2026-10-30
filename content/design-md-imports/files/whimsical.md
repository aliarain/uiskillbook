# Whimsical Design System

> Visual thinking design with friendly violet identity, infinite-canvas surfaces, diagramming simplicity, and collaborative flow UX.

---

## 1. Visual Theme & Atmosphere

Whimsical should feel light, creative, and frictionless. The design language communicates flowcharts, wireframes, mind maps, sticky notes, and collaborative visual thinking on an infinite canvas.

- Mood: light, creative, collaborative, approachable
- Density: low on the canvas, medium in toolbars — never cluttered
- Character: friendly violet brand, pure white infinite canvas, soft shadow shapes, pastel sticky notes

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--wh-violet` | `#6C47FF` | Primary brand CTA and selection |
| `--wh-violet-dark` | `#5133DD` | Hover and active states |
| `--wh-blue` | `#3B82F6` | Connector lines and link accent |
| `--wh-green` | `#22C55E` | Shape success state and connected |
| `--wh-yellow` | `#FDE68A` | Sticky note default color |
| `--wh-pink` | `#FBCFE8` | Sticky note alternate color |
| `--wh-mint` | `#A7F3D0` | Sticky note alternate color |
| `--wh-peach` | `#FED7AA` | Sticky note alternate color |
| `--surface-canvas` | `#FFFFFF` | Infinite canvas |
| `--surface-bg` | `#F5F4FF` | App shell / sidebar |
| `--text-primary` | `#1A1A2E` | Shape labels and notes |
| `--border-default` | `#E5E7EB` | Shape and panel borders |

Violet is the primary action and selection signal. The sticky note colors (yellow, pink, mint, peach) are a system — never mix in non-pastel colors for sticky notes.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-display: "Fraunces", Georgia, serif;
--font-mono: "JetBrains Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| App Title | 22px | 700 | 1.1 |
| Canvas Label | 14px | 400 | 1.5 |
| Shape Text | 14px | 400 | 1.5 |
| Sticky Body | 14px | 400 | 1.6 |
| Body | 15px | 400 | 1.6 |
| Toolbar Label | 11px | 600 | 1.3 |
| Badge | 12px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
  background: #6C47FF;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.shape-default {
  border: 1.5px solid #D1D5DB;
  border-radius: 8px;
  background: #FFFFFF;
  min-width: 120px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
}

.shape-selected {
  border: 2px solid #6C47FF;
  box-shadow: 0 0 0 3px rgba(108, 71, 255, 0.18);
}

.sticky-note {
  border-radius: 4px 4px 16px 4px;
  background: #FDE68A;
  padding: 12px;
  min-width: 160px;
  min-height: 120px;
  box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.12);
  font: 400 14px/1.6 Inter, sans-serif;
}

.connector-line {
  stroke: #6B7280;
  stroke-width: 1.5;
  fill: none;
  marker-end: url(#arrow);
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Toolbar icon spacing |
| `--space-3` | `12px` | Shape snap grid |
| `--space-4` | `16px` | Panel padding |
| `--space-8` | `32px` | Toolbar section gaps |

The canvas is always the dominant surface — toolbars must stay compact. Left toolbar for shape tools, top bar for file/share actions, right panel for selected-shape properties. Grid snapping at 8px.

## 6. Depth & Elevation

```css
.shadow-shape    { box-shadow: 1px 2px 6px rgba(26, 26, 46, 0.10); }
.shadow-sticky   { box-shadow: 2px 3px 8px rgba(26, 26, 46, 0.12); }
.shadow-toolbar  { box-shadow: 0 2px 12px rgba(26, 26, 46, 0.12); }
.shadow-modal    { box-shadow: 0 16px 40px rgba(26, 26, 46, 0.18); }
```

Sticky notes have a subtle real-world shadow — slightly asymmetric to feel physical. Canvas shapes are lighter.

## 7. Do's and Don'ts

Do make shape creation a single click or drag — zero friction. Do use the violet selection ring as the only active state indicator. Do keep the toolbar compact and icon-driven. Do not add decorative backgrounds to the canvas. Do not use non-pastel colors for sticky notes. Do make collaboration cursors (multi-user) clearly distinguishable with named color rings.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | View-only canvas with pan/zoom |
| Tablet | `768px` | Simplified toolbar, limited shape creation |
| Desktop | `1200px` | Full canvas with all tools, properties panel, and collaboration |

Canvas creation is a desktop experience. Mobile and tablet are for viewing and commenting.

## 9. Agent Prompt Guide

Design like Whimsical: friendly violet CTAs, infinite white canvas, pastel sticky notes, compact icon toolbars, violet selection rings, 8px snap grid, soft shape shadows, and frictionless visual-thinking UX.
