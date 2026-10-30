# Neon Design System

> Serverless Postgres design with dark developer-native surfaces, bright green database accents, and branch-based workflow clarity.

---

## 1. Visual Theme & Atmosphere

Neon should feel like Postgres built for modern developers and AI agents. The interface needs to make databases, branches, compute, storage, autoscaling, and scale-to-zero behavior feel fast and programmable.

- Mood: technical, sharp, scalable, database-native, modern
- Density: medium-to-high for console surfaces
- Character: dark canvas, neon green accents, branch diagrams, terminal-like clarity

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--neon-black` | `#0E0E0E` | Primary dark background |
| `--neon-panel` | `#171717` | Console panel |
| `--neon-green` | `#00E599` | Primary brand and active database state |
| `--neon-green-soft` | `#D9FFF2` | Light highlight |
| `--neon-blue` | `#00A6FF` | Info / branch support |
| `--text-on-dark` | `#FFFFFF` | Dark surface text |
| `--text-muted` | `#A3A3A3` | Console metadata |
| `--surface-card` | `#FFFFFF` | Light docs cards |
| `--border-dark` | `#2E2E2E` | Console dividers |

Use green for database activity, branch state, and primary actions. Keep console-heavy areas dark and precise.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 60px | 700 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 650 | 1.2 |
| Panel Title | 18px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Code | 13px | 500 | 1.55 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid #00E599;
  border-radius: 10px;
  background: #00E599;
  color: #0E0E0E;
  font: 700 14px/1 Inter, sans-serif;
}

.database-card {
  border: 1px solid #2E2E2E;
  border-radius: 14px;
  background: #171717;
  color: #FFFFFF;
  padding: 16px;
}

.branch-pill {
  border-radius: 999px;
  background: rgba(0, 229, 153, 0.12);
  color: #00E599;
  padding: 6px 10px;
  font: 600 12px/1 Inter, sans-serif;
}

.input {
  min-height: 42px;
  border: 1px solid #2E2E2E;
  border-radius: 10px;
  background: #0E0E0E;
  color: #FFFFFF;
  padding: 0 14px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Branch rows |
| `--space-4` | `16px` | Console rhythm |
| `--space-5` | `24px` | Database panels |
| `--space-8` | `48px` | Docs/marketing sections |

Structure around projects, databases, branches, compute, storage, connection strings, and API access.

## 6. Depth & Elevation

```css
.shadow-panel { box-shadow: 0 14px 34px rgba(0, 0, 0, 0.30); }
.shadow-overlay { box-shadow: 0 28px 68px rgba(0, 0, 0, 0.40); }
```

Use dark surface contrast and green highlights before adding strong elevation.

## 7. Do's and Don'ts

Do make database branch workflows clear. Do show compute status and connection details. Do not use green for unrelated decoration. Do not hide scale or availability information.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack console panels and branch lists |
| Tablet | `768px` | Two-column console sections |
| Desktop | `1200px` | Full project sidebar, database cards, and branch diagrams |

Connection strings and code snippets should scroll horizontally on small screens.

## 9. Agent Prompt Guide

Design like Neon: dark serverless Postgres console, bright green database accents, branch and compute status cards, monospace connection details, and developer-native database workflow clarity.
