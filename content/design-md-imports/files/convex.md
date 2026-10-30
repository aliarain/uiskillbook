# Convex Design System

> Backend platform design with playful technical energy, real-time data clarity, and AI-agent-ready product surfaces.

---

## 1. Visual Theme & Atmosphere

Convex should feel like a modern backend that keeps app state live without backend boilerplate. The design should support functions, tables, agents, sync, auth, deployments, logs, and schema clarity.

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--convex-orange` | `#FF6A3D` | Primary brand/action accent |
| `--convex-purple` | `#7C3AED` | AI / function accent |
| `--convex-ink` | `#111827` | Text and dark panels |
| `--convex-blue` | `#2563EB` | Links and info |
| `--surface-page` | `#FFF8F3` | Warm page field |
| `--surface-card` | `#FFFFFF` | Cards and panels |
| `--border-default` | `#EADDD2` | Warm borders |
| `--success` | `#16A34A` | Healthy deployment |

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 58px | 700 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 650 | 1.2 |
| Function Title | 20px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Code | 13px | 500 | 1.55 |

## 4. Component Stylings

```css
.button-primary { min-height: 44px; padding: 0 18px; border-radius: 10px; border: 1px solid #FF6A3D; background: #FF6A3D; color: #fff; font: 600 14px/1 Inter, sans-serif; }
.function-card { border: 1px solid #EADDD2; border-radius: 16px; background: #fff; padding: 18px; }
.data-panel { border-radius: 14px; background: #111827; color: #fff; padding: 16px; font: 500 13px/1.55 "SF Mono", monospace; }
.live-badge { background: rgba(22, 163, 74, 0.12); color: #15803D; border-radius: 999px; padding: 6px 10px; }
```

## 5. Layout Principles

Organize around project, functions, data, schema, auth, deployment, and logs. Keep real-time state and agent backend capabilities visible.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(17, 24, 39, 0.07); }
.shadow-panel { box-shadow: 0 20px 48px rgba(17, 24, 39, 0.14); }
```

## 7. Do's and Don'ts

Do make backend state feel live and understandable. Do show code and data together. Do not make it feel like a generic database console.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack data/function panels |
| Tablet | `768px` | Two-column builder views |
| Desktop | `1200px` | Full console with data, logs, and function navigation |

## 9. Agent Prompt Guide

Design like Convex: warm real-time backend UI, orange primary action, function cards, dark data/code panels, live state badges, and AI-agent backend clarity.
