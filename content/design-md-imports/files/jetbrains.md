# JetBrains Design System

> Developer tools design with black-square brand discipline, vivid product-spectrum color, and dense IDE-ready surfaces.

---

## 1. Visual Theme & Atmosphere

JetBrains should feel like professional developer tooling with strong craft and high information density. The brand spans IDEs, TeamCity, YouTrack, Datalore, Toolbox, and AI Assistant, so the system needs product-family color while preserving serious coding ergonomics.

- Mood: expert, technical, colorful, precise, tool-focused
- Density: high for IDE and settings surfaces, medium for marketing
- Character: black base, vivid spectrum accents, JetBrains Sans/Mono, compact cards and tool panels

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--jb-black` | `#000000` | Official logo square, dark surfaces |
| `--jb-gray` | `#7D7D7D` | Secondary text |
| `--jb-yellow` | `#FCF84A` | Highlight accent |
| `--jb-orange` | `#FC801D` | Warm product accent |
| `--jb-pink` | `#FE2857` | Alert / product accent |
| `--jb-violet` | `#6B57FF` | Primary interactive accent |
| `--jb-blue` | `#087CFA` | Link and tool accent |
| `--jb-cyan` | `#07C3F2` | Secondary product accent |
| `--jb-green` | `#21D789` | Success / run state |

Use the spectrum to distinguish products and states. Do not recolor the JetBrains logo or black square.

## 3. Typography Rules

```css
--font-sans: "JetBrains Sans", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 60px | 700 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 650 | 1.2 |
| Tool Title | 20px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Code | 13px | 500 | 1.55 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid #6B57FF;
  border-radius: 8px;
  background: #6B57FF;
  color: #FFFFFF;
  font: 600 14px/1 "JetBrains Sans", Inter, sans-serif;
}

.tool-card {
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  background: #FFFFFF;
  padding: 18px;
}

.ide-panel {
  border-radius: 12px;
  background: #000000;
  color: #FFFFFF;
  padding: 16px;
}

.product-accent {
  border-left: 4px solid #087CFA;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Toolbar spacing |
| `--space-4` | `16px` | Tool panels |
| `--space-5` | `24px` | Cards |
| `--space-8` | `48px` | Sections |

Organize by product family, language, workflow, IDE capability, and team tool. Keep technical navigation compact and predictable.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(0, 0, 0, 0.07); }
.shadow-panel { box-shadow: 0 20px 48px rgba(0, 0, 0, 0.16); }
```

Use strong contrast for IDE panels and subtle elevation for product cards.

## 7. Do's and Don'ts

Do use JetBrains Sans and Mono where possible. Do use product colors purposefully. Do not distort or recolor official logos. Do not make developer tools feel sparse.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack product cards and code panels |
| Tablet | `768px` | Two-column product grid |
| Desktop | `1200px` | Dense product matrix and IDE preview layouts |

Code and IDE surfaces should preserve readability and allow horizontal scroll when needed.

## 9. Agent Prompt Guide

Design like JetBrains: black-square brand discipline, vivid product-spectrum accents, JetBrains Sans and Mono, dense IDE-ready panels, compact product cards, and professional developer-tool precision.
