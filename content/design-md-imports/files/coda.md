# Coda Design System

> All-in-one doc design with bold indigo identity, canvas-first surfaces, flexible grid UX, and building-block content hierarchy.

---

## 1. Visual Theme & Atmosphere

Coda should feel powerful, flexible, and creative. The design language communicates documents as apps, combining rich text, tables, charts, buttons, and automations in a single canvas.

- Mood: creative, powerful, collaborative, structured
- Density: variable — low in document mode, high in table/builder mode
- Character: bold indigo brand, crisp white canvas, block-oriented layout, subtle grid overlays

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--coda-indigo` | `#4338CA` | Primary brand CTA and highlights |
| `--coda-indigo-dark` | `#3124A3` | Hover and active states |
| `--coda-teal` | `#0891B2` | Formula and automation accent |
| `--coda-green` | `#16A34A` | Published and connected states |
| `--coda-amber` | `#D97706` | Draft and pending states |
| `--coda-red` | `#DC2626` | Error and broken references |
| `--surface-canvas` | `#FFFFFF` | Document canvas |
| `--surface-bg` | `#F8F9FC` | App shell background |
| `--surface-sidebar` | `#F1F3F9` | Left doc navigation |
| `--text-primary` | `#111827` | Document body text |
| `--border-default` | `#E5E7EB` | Block and table borders |

Use indigo for primary actions and the doc header. Teal is strictly for formula and automation surfaces — it signals "code-like" behavior.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-serif: "Georgia", "Times New Roman", serif;
--font-mono: "JetBrains Mono", "SF Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Doc Title | 36px | 700 | 1.1 |
| H1 | 28px | 700 | 1.2 |
| H2 | 22px | 600 | 1.3 |
| H3 | 18px | 600 | 1.35 |
| Body | 16px | 400 | 1.7 |
| Table Cell | 14px | 400 | 1.5 |
| Formula | 13px | 400 | 1.6 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 6px;
  background: #4338CA;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.doc-block {
  border-radius: 8px;
  padding: 12px 16px;
  background: #FFFFFF;
  border: 1px solid transparent;
  transition: border-color 0.15s;
}

.doc-block:hover {
  border-color: #E5E7EB;
}

.formula-chip {
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 4px;
  background: #EFF6FF;
  color: #0891B2;
  font: 500 13px/1.5 "JetBrains Mono", monospace;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Block internal spacing |
| `--space-4` | `16px` | Between content blocks |
| `--space-6` | `24px` | Section padding |
| `--space-10` | `40px` | Document section gaps |

The canvas should be wide and uncluttered. Toolbars appear contextually — never permanently visible unless in table mode.

## 6. Depth & Elevation

```css
.shadow-block  { box-shadow: 0 1px 3px rgba(17, 24, 39, 0.06); }
.shadow-panel  { box-shadow: 0 8px 24px rgba(67, 56, 202, 0.10); }
.shadow-modal  { box-shadow: 0 20px 50px rgba(17, 24, 39, 0.16); }
```

Document surfaces are nearly flat. Menus and insert panels use moderate shadow. Never use heavy elevation on the doc canvas itself.

## 7. Do's and Don'ts

Do make block insertion feel seamless with a minimal "/" command. Do keep the document canvas free of persistent chrome. Do use teal consistently for formula language. Do not use serif fonts outside of document body prose. Do not let toolbars cover content.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Read-only doc view, minimal editing |
| Tablet | `768px` | Full editing with floating toolbar |
| Desktop | `1200px` | Full canvas with sidebar, builder panel, and automation view |

Table editing and builder mode require desktop. Mobile should focus on document consumption.

## 9. Agent Prompt Guide

Design like Coda: bold indigo CTAs, flexible white document canvas, contextual block toolbars, teal formula accents, Inter typography, and content-first building-block hierarchy.
