# Zen Browser Design System

> Calm privacy-first browser design with customizable chrome, quiet gradients, compact productivity features, and a focus on a less distracting web.

---

## 1. Visual Theme & Atmosphere

Zen Browser should feel like a calmer internet: private, focused, beautiful, and deeply customizable without becoming noisy. The product language centers productivity features such as Workspaces, Compact Mode, Glance, Split View, Zen Mods, and personal theme control.

- Mood: calm, private, flexible, focused, open-source
- Density: medium, with compact browser chrome and productivity panels
- Character: soft dark/light surfaces, user-controlled accent color, subtle gradients, minimal browser furniture

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--zen-ink` | `#111827` | Primary text and dark controls |
| `--zen-night` | `#0F172A` | Dark browser chrome |
| `--zen-slate` | `#334155` | Secondary text and inactive UI |
| `--zen-blue` | `#4F8CFF` | Default active accent |
| `--zen-violet` | `#8B5CF6` | Gradient and theme accent |
| `--zen-mint` | `#7DD3FC` | Soft highlight |
| `--surface-page` | `#F8FAFC` | Light page background |
| `--surface-card` | `#FFFFFF` | Panels and settings cards |
| `--border-default` | `#E2E8F0` | Dividers and inputs |

Treat accent colors as user-themeable. The system should work when the user changes theme color, contrast, or gradient settings.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 58px | 700 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 28px | 650 | 1.2 |
| Panel Title | 18px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.45 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #4F8CFF;
  border-radius: 999px;
  background: #4F8CFF;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.browser-panel {
  border: 1px solid #E2E8F0;
  border-radius: 18px;
  background: #FFFFFF;
  padding: 18px;
}

.chrome-bar {
  min-height: 44px;
  border-radius: 14px;
  background: linear-gradient(135deg, #0F172A, #334155);
  color: #FFFFFF;
}

.input {
  min-height: 44px;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 0 14px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Toolbar spacing |
| `--space-4` | `16px` | Panel rhythm |
| `--space-5` | `24px` | Feature cards |
| `--space-8` | `48px` | Major sections |

Prioritize browser chrome, tabs, workspace switching, split views, and theme customization. Keep settings grouped and easy to scan.

## 6. Depth & Elevation

```css
.shadow-panel { box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08); }
.shadow-chrome { box-shadow: 0 18px 42px rgba(15, 23, 42, 0.16); }
```

Use soft shadows and translucent surfaces sparingly. Depth should support focus, not add distraction.

## 7. Do's and Don'ts

Do make privacy, productivity, and customization visible. Do support compact and spacious modes. Do not make the browser feel corporate. Do not use loud gradients that fight the "calmer internet" message.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack feature panels and simplify browser chrome |
| Tablet | `768px` | Two-column features and settings |
| Desktop | `1200px` | Full browser frame with side tabs, workspace, and split-view examples |

Keep toolbar controls at least `44px` tall and preserve readable labels in compact mode.

## 9. Agent Prompt Guide

Design like Zen Browser: calm privacy-first browser UI, customizable accent gradients, compact productivity chrome, split-view and workspace features, soft panels, and a focused open-source tone.
