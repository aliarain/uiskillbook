# Deno Design System

> Modern JavaScript runtime design with simple black-and-white foundations, green dinosaur-brand personality, and secure-by-default developer tooling.

---

## 1. Visual Theme & Atmosphere

Deno should feel like a clean, modern runtime and cloud platform for JavaScript, TypeScript, WebAssembly, and edge apps. The design language balances playful mascot identity with serious security, standards, and developer workflow clarity.

- Mood: modern, secure, simple, standards-based, developer-native
- Density: medium, with docs, code examples, and deploy surfaces
- Character: black/white restraint, green brand accents, code-first panels, mascot-friendly touches

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--deno-black` | `#000000` | Primary text and dark surface |
| `--deno-white` | `#FFFFFF` | Main surface |
| `--deno-green` | `#70FFAF` | Brand accent and positive action |
| `--deno-green-dark` | `#22C55E` | Strong success / active state |
| `--deno-gray` | `#6B7280` | Secondary text |
| `--surface-page` | `#F8FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Cards and docs panels |
| `--surface-code` | `#111827` | Code block background |
| `--border-default` | `#E5E7EB` | Dividers and inputs |

Use black and white as the base. Green should signal Deno identity, permission safety, and successful deploy/runtime state.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "DM Mono", "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 60px | 700 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 650 | 1.2 |
| Docs Title | 22px | 650 | 1.3 |
| Body | 16px | 400 | 1.65 |
| Code | 13px | 500 | 1.55 |
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

.button-accent {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #70FFAF;
  border-radius: 999px;
  background: #70FFAF;
  color: #000000;
  font: 700 14px/1 Inter, sans-serif;
}

.code-panel {
  border-radius: 16px;
  background: #111827;
  color: #F9FAFB;
  padding: 18px;
  font: 500 13px/1.55 "DM Mono", monospace;
}

.docs-card {
  border: 1px solid #E5E7EB;
  border-radius: 16px;
  background: #FFFFFF;
  padding: 20px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Code metadata |
| `--space-4` | `16px` | Docs rhythm |
| `--space-5` | `24px` | Cards and panels |
| `--space-8` | `48px` | Major sections |

Lead with code, runtime capabilities, permissions, deploy paths, and standards compatibility. Keep docs highly scannable.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06); }
.shadow-panel { box-shadow: 0 18px 42px rgba(0, 0, 0, 0.12); }
```

Use light shadows for cards and stronger separation for code/deploy panels.

## 7. Do's and Don'ts

Do make secure-by-default permissions visible. Do use code examples generously. Do not overuse mascot visuals inside dense developer tools. Do not make the runtime feel like a generic hosting dashboard.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack docs cards and code panels |
| Tablet | `768px` | Two-column docs/product sections |
| Desktop | `1200px` | Full docs navigation, code examples, and deploy workflows |

Code panels should scroll horizontally when needed.

## 9. Agent Prompt Guide

Design like Deno: black-and-white developer clarity, green runtime accents, secure-by-default permission cues, clean code panels, docs-first layouts, and a modern JavaScript/TypeScript tooling feel.
