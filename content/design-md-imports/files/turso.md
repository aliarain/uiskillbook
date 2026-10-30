# Turso Design System

> Edge database design with black-and-lime technical contrast, SQLite clarity, and distributed data workflows.

---

## 1. Visual Theme & Atmosphere

Turso should feel like SQLite expanded for modern distributed apps. The design needs to support databases everywhere, embedded replicas, branching, groups, regions, and developer-first CLI/API workflows.

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--turso-black` | `#050505` | Primary dark surface |
| `--turso-lime` | `#C7FF00` | Brand/action accent |
| `--turso-green` | `#22C55E` | Healthy database state |
| `--turso-gray` | `#71717A` | Secondary text |
| `--surface-page` | `#FAFAFA` | Light background |
| `--surface-card` | `#FFFFFF` | Cards and docs panels |
| `--border-default` | `#E4E4E7` | Dividers |
| `--surface-code` | `#111111` | Code blocks |

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 60px | 750 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 650 | 1.2 |
| Database Title | 20px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Code | 13px | 500 | 1.55 |

## 4. Component Stylings

```css
.button-primary { min-height: 44px; padding: 0 18px; border-radius: 10px; border: 1px solid #C7FF00; background: #C7FF00; color: #050505; font: 700 14px/1 Inter, sans-serif; }
.database-card { border: 1px solid #E4E4E7; border-radius: 16px; background: #fff; padding: 18px; }
.code-panel { border-radius: 14px; background: #111; color: #fff; padding: 16px; font: 500 13px/1.55 "SF Mono", monospace; }
.replica-pill { background: rgba(199, 255, 0, 0.14); color: #3F6212; border-radius: 999px; padding: 6px 10px; }
```

## 5. Layout Principles

Organize by database, group, branch, region, replica, token, schema, and CLI command. Keep SQLite familiarity visible.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(5, 5, 5, 0.07); }
.shadow-panel { box-shadow: 0 20px 48px rgba(5, 5, 5, 0.16); }
```

## 7. Do's and Don'ts

Do make replicas and regions clear. Do use lime sparingly. Do not make distributed database state ambiguous.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack database and region panels |
| Tablet | `768px` | Two-column database/replica layouts |
| Desktop | `1200px` | Full dashboard with branch and region views |

## 9. Agent Prompt Guide

Design like Turso: black-and-lime edge database UI, SQLite-friendly docs, database cards, dark CLI panels, replica pills, and distributed data clarity.
