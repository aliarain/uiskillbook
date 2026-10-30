# VMware Design System

> Enterprise-ready consumer-simple design with strong action blue, compact controls, and reusable app structure. VMware’s Clarity system focuses on accessibility, consistency, and practical patterns for dense business software.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Clarity is built for **enterprise software that still feels usable by normal humans**. The system is structured, compact, and predictable, with a strong emphasis on accessibility and composability.

### Mood & Feeling
- **Structured**: users should always know where to look
- **Practical**: tasks come before branding theatrics
- **Accessible**: clear contrast, intent colors, and usable control sizes
- **Efficient**: dense screens should still feel legible
- **Systematic**: repeated patterns reduce cognitive load

### Design Density
**Medium to high density**. Clarity handles data grids, multi-step forms, and administration-heavy layouts with compact but readable components.

### Visual Character
- Action blue as the dominant interactive signal
- Light and dark modes with consistent component behavior
- Low-radius geometry and utility-first spacing
- Strong support for cards, forms, grids, and toolbars
- Very little ornamental styling

---

## 2. Color Palette & Roles

### Core Action Colors

| Token | Hex | Role |
|-------|-----|------|
| `--action-blue` | `#0065C4` | Primary action and selection state |
| `--action-blue-hover` | `#0050A1` | Hover / pressed state |
| `--action-blue-soft` | `#EAF4FF` | Soft selected background |

### Light Theme Neutrals

| Token | Hex | Role |
|-------|-----|------|
| `--light-page` | `#F5F8FA` | App background |
| `--light-surface` | `#FFFFFF` | Card and container surface |
| `--light-border` | `#D8E1E8` | Border and divider |
| `--text-strong` | `#182026` | Primary text |
| `--text-muted` | `#5C7080` | Secondary text |

### Dark Theme Neutrals

| Token | Hex | Role |
|-------|-----|------|
| `--dark-page` | `#182026` | Main dark background |
| `--dark-surface` | `#202B33` | Dark card surface |
| `--dark-border` | `#30404D` | Dark border and divider |
| `--dark-text` | `#F5F8FA` | Primary text on dark |

### Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#2D9D78` | Positive state |
| `--warning` | `#D9822B` | Warning state |
| `--danger` | `#DB3737` | Error / destructive |
| `--info` | `#137CBD` | Informational state |

### Color Usage Rules
- Use action blue consistently for primary interaction.
- Support both light and dark themes with equal clarity.
- Keep semantic colors purpose-driven and specific.

---

## 3. Typography Rules

### Font Stack

```css
/* Clarity-style application typography */
--font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
             Helvetica, Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Page Title | 32px | 700 | 1.15 | -0.015em | App or route title |
| Section Title | 24px | 600 | 1.2 | -0.01em | Section heading |
| Card Title | 18px | 600 | 1.3 | 0 | Card and panel title |
| Body | 14px | 400 | 1.5 | 0 | Standard app text |
| Small Body | 12px | 400 | 1.45 | 0 | Dense metadata |
| Label | 12px | 600 | 1.3 | 0.01em | Buttons and field labels |
| Code | 12px | 400 | 1.45 | 0 | Technical values |

### Typography Philosophy
Clarity typography is **compact, direct, and operational**. It supports dense software environments where scanning and consistency matter more than stylistic expression.

### Practical Rules
- Use strong page and section headings to create structure.
- Keep button labels literal and short.
- Preserve text contrast in both themes.

---

## 4. Component Stylings

### Buttons

#### Solid Button
```css
.button-primary {
  background: #0065C4;
  color: #FFFFFF;
  min-height: 36px;
  padding: 0 16px;
  border: 1px solid #0065C4;
  border-radius: 3px;
  font: 600 12px/1 system-ui, sans-serif;
  text-transform: uppercase;
}

.button-primary:hover {
  background: #0050A1;
  border-color: #0050A1;
}
```

#### Outline Button
```css
.button-secondary {
  background: transparent;
  color: #0065C4;
  min-height: 36px;
  padding: 0 16px;
  border: 1px solid #0065C4;
  border-radius: 3px;
  text-transform: uppercase;
}
```

#### Compact Button
```css
.button-compact {
  min-height: 24px;
  padding: 0 10px;
  border-radius: 3px;
  font-size: 12px;
}
```

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  min-height: 36px;
  padding: 0 10px;
  background: #FFFFFF;
  color: #182026;
  border: 1px solid #D8E1E8;
  border-radius: 3px;
  font: 400 12px/1.2 system-ui, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #0065C4;
  box-shadow: 0 0 0 2px rgba(0, 101, 196, 0.14);
}
```

### Cards and App Containers

#### Standard Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #D8E1E8;
  border-radius: 6px;
  padding: 16px;
}
```

#### Dark Container
```css
.container-dark {
  background: #202B33;
  color: #F5F8FA;
  border: 1px solid #30404D;
  border-radius: 6px;
  padding: 16px;
}
```

---

## 5. Layout Principles

### Layout Patterns
Clarity supports both **F-pattern** and **Z-pattern** layouts depending on page constraint and task flow.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Fine alignment |
| `--space-2` | `8px` | Tight grouping |
| `--space-4` | `16px` | Core spacing |
| `--space-5` | `24px` | Section spacing |
| `button-default-height` | `36px` | Standard control size |
| `button-compact-height` | `24px` | Dense contexts |

### Layout Rules
- Use F-pattern in forms, cards, and standard content flows.
- Use Z-pattern in dialogs and constrained task windows.
- Keep action placement predictable and aligned to task importance.
- Reuse templates for lists, detail views, and admin screens.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| App background | light or dark page field | Main shell |
| Container | bounded panel or card | Section grouping |
| Overlay | elevated panel | Modal, drawer, popover |
| Intent surface | intent-tinted element | Feedback or alert |

### Shadow System

```css
.shadow-container {
  box-shadow: 0 4px 10px rgba(24, 32, 38, 0.08);
}

.shadow-overlay {
  box-shadow: 0 16px 28px rgba(24, 32, 38, 0.18);
}
```

### Depth Rules
- Use borders and layout first, shadow second.
- Keep overlays clearly separated from the app background.
- Maintain equivalent clarity in both themes.

---

## 7. Do's and Don'ts

### Do
- Use action blue consistently.
- Respect compact enterprise control sizing.
- Keep application structure highly predictable.
- Support accessibility and dark mode from the start.
- Reuse Clarity patterns and layout logic.

### Don't
- Add decorative rounded corners or soft visual treatment.
- Randomize action placement across similar flows.
- Use semantic colors as decoration.
- Sacrifice readability for density.

---

## 8. Responsive Behavior

### Responsive Rules
- Collapse dense layouts into vertical stacks early when needed.
- Preserve button hierarchy even when actions wrap.
- Avoid compact-size controls in touch-heavy contexts.
- Keep dialogs and forms readable on mobile with simplified layouts.

### Mobile Character
Clarity mobile interfaces should still feel enterprise-ready and organized. Simplification is expected, but the action logic and component discipline should remain intact.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: structured, accessible, efficient
- **Primary accent**: action blue `#0065C4`
- **Layout**: F-pattern and Z-pattern enterprise structures
- **Components**: compact low-radius controls, strong containers, theme parity

### Prompt Snippet

```text
Design this interface in the style of VMware’s Clarity design system. Use action blue (#0065C4) for primary interaction, compact low-radius enterprise controls, bounded containers, and predictable layout patterns like F-pattern and Z-pattern flows. The result should feel structured, accessible, and practical rather than expressive.
```
