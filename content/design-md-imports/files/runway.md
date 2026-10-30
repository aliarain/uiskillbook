# Runway Design System

> Creative AI video design with stark black-and-white brand discipline, cinematic media surfaces, and precise generation controls.

---

## 1. Visual Theme & Atmosphere

Runway should feel like a professional creative AI lab for video, images, characters, and world models. The brand guidelines emphasize correct naming, clear black/white logo usage, and strong legibility. Product surfaces should let generated media carry the visual weight.

- Mood: cinematic, experimental, controlled, creative, professional
- Density: medium, with tool controls around large media previews
- Character: black/white identity, full-bleed media, minimal chrome, precise controls

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--runway-black` | `#000000` | Primary brand surface and text |
| `--runway-white` | `#FFFFFF` | Inverted text and light surface |
| `--neutral-100` | `#F5F5F5` | Light UI panels |
| `--neutral-300` | `#D4D4D4` | Borders and inactive controls |
| `--neutral-700` | `#404040` | Secondary text |
| `--accent-blue` | `#3B82F6` | Informational product state |
| `--success` | `#16A34A` | Completed generation |
| `--warning` | `#F59E0B` | Processing or caution |

Keep the identity black and white. Use accent colors only for product state, not brand decoration.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 64px | 700 | 1.02 |
| Page Title | 42px | 700 | 1.1 |
| Section Title | 30px | 650 | 1.2 |
| Tool Title | 18px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.45 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #000000;
  border-radius: 999px;
  background: #000000;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.media-stage {
  overflow: hidden;
  border-radius: 16px;
  background: #000000;
  color: #FFFFFF;
  aspect-ratio: 16 / 9;
}

.control-panel {
  border: 1px solid #D4D4D4;
  border-radius: 14px;
  background: #FFFFFF;
  padding: 16px;
}

.input {
  min-height: 44px;
  border: 1px solid #D4D4D4;
  border-radius: 12px;
  padding: 0 14px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Control spacing |
| `--space-4` | `16px` | Panels |
| `--space-6` | `32px` | Tool groups |
| `--space-10` | `64px` | Cinematic sections |

Let media previews dominate. Place prompts, parameters, timeline, and output controls around the stage.

## 6. Depth & Elevation

```css
.shadow-panel { box-shadow: 0 12px 32px rgba(0, 0, 0, 0.10); }
.shadow-stage { box-shadow: 0 24px 64px rgba(0, 0, 0, 0.22); }
```

Use depth mainly to focus the active media stage or modal workflow.

## 7. Do's and Don'ts

Do refer to the company as Runway. Do use black wordmark on light backgrounds and white on dark. Do not type out a fake wordmark. Do not overload media creation UI with decorative gradients.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Media stage first, controls stacked below |
| Tablet | `768px` | Stage plus compact controls |
| Desktop | `1200px` | Large stage with side controls and timeline |

Preserve aspect ratios and keep generation controls reachable.

## 9. Agent Prompt Guide

Design like Runway: stark black-and-white creative AI video tool, cinematic media previews, minimal chrome, rounded control panels, clear generation actions, and professional experimental energy.
