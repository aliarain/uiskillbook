# Replit Design System

> Browser IDE and AI app-building design with vivid orange identity, clean coding surfaces, and practical workspace ergonomics.

---

## 1. Visual Theme & Atmosphere

Replit should feel like creation starts immediately. The interface blends coding, deployment, collaboration, and AI app generation, so the system should be fast, approachable, and tool-like.

- Mood: inventive, practical, immediate, developer-friendly
- Density: medium-to-high in workspace areas
- Character: orange identity, white/neutral surfaces, editor-like panels, compact controls

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--replit-orange` | `#FF3C00` | Official brand orange and primary accent |
| `--replit-orange-dark` | `#D93300` | Hover / pressed state |
| `--ink-strong` | `#111827` | Primary text |
| `--ink-muted` | `#64748B` | Metadata and helper text |
| `--surface-page` | `#F8FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Cards and panels |
| `--surface-editor` | `#0F172A` | Dark editor surface |
| `--border-default` | `#E2E8F0` | Dividers and controls |
| `--success` | `#16A34A` | Running / deployed state |
| `--info` | `#2563EB` | Link / info state |

Use orange as a decisive action and brand signal. Keep editor surfaces structured and neutral.

## 3. Typography Rules

```css
--font-sans: "ABC Diatype", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 58px | 750 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 700 | 1.2 |
| Panel Title | 18px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.45 |
| Code | 13px | 500 | 1.55 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid #FF3C00;
  border-radius: 10px;
  background: #FF3C00;
  color: #FFFFFF;
  font: 650 14px/1 Inter, sans-serif;
}

.workspace-panel {
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  background: #FFFFFF;
  padding: 16px;
}

.editor-panel {
  border-radius: 12px;
  background: #0F172A;
  color: #E2E8F0;
  padding: 16px;
}

.input {
  min-height: 42px;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  padding: 0 14px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Toolbar spacing |
| `--space-4` | `16px` | Panels |
| `--space-5` | `24px` | Section rhythm |
| `--space-8` | `48px` | Marketing/product separation |

For app-builder contexts, prioritize prompt input, preview, file tree, logs, and deployment status.

## 6. Depth & Elevation

```css
.shadow-panel { box-shadow: 0 8px 18px rgba(17, 24, 39, 0.07); }
.shadow-modal { box-shadow: 0 20px 48px rgba(17, 24, 39, 0.14); }
```

Prefer panel borders and workspace structure over heavy depth.

## 7. Do's and Don'ts

Do make creation feel immediate. Do keep coding surfaces readable. Do not use orange everywhere. Do not make the workspace look like a landing page.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack prompt, preview, logs |
| Tablet | `768px` | Two-pane builder layout |
| Desktop | `1200px` | Full IDE/workspace multi-panel layout |

Keep toolbars compact and touch targets at least `44px`.

## 9. Agent Prompt Guide

Design like Replit: vivid orange CTAs, clean browser-IDE panels, dark code/editor areas, practical workspace controls, compact typography, and an immediate build-and-ship feeling.
