# Red Hat Design System

> Enterprise open-source brand with editorial red-black energy and product-grade PatternFly structure. Red Hat Display/Text/Mono, disciplined spacing, semantic color, and modular product surfaces create a system that feels credible, open, and deeply operational.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Red Hat balances **brand conviction with systems utility**. Marketing surfaces are bold, editorial, and clearly Red Hat, while PatternFly product UI turns that energy into a scalable operational framework. The result feels open-source, practical, and enterprise-ready rather than glossy.

### Mood & Feeling
- **Open-source confidence**: transparent, direct, and rooted in community credibility
- **Enterprise pragmatism**: serious enough for complex infrastructure work
- **Editorial clarity**: strong headlines and assertive contrast
- **Systemic consistency**: components and layouts feel designed for scale
- **Accessible functionality**: semantics, readability, and predictable structure lead

### Design Density
**Medium to medium-high density**. PatternFly is comfortable with panels, forms, tables, and configuration-heavy UI, but it keeps those surfaces orderly through spacing tokens and consistent content treatment.

### Visual Character
- Red Hat red for brand presence, PatternFly blue for product interaction
- High-contrast headlines and simple, legible body typography
- Panel-driven layouts with visible borders and small radii
- Strong use of semantic state colors in operational interfaces
- Marketing sections feel bold; product UI feels systematic
- Minimal ornamental flourishes

---

## 2. Color Palette & Roles

### Brand and Interactive Colors

| Token | Hex | Role |
|-------|-----|------|
| `--redhat-red` | `#EE0000` | Brand identity, editorial emphasis, callouts |
| `--redhat-red-dark` | `#C9190B` | Stronger brand accent, hover / critical highlights |
| `--patternfly-blue` | `#0066CC` | Primary product action, links, selected states |
| `--patternfly-blue-hover` | `#004080` | Hover and active state for product interactions |
| `--patternfly-cyan` | `#73BCF7` | Supporting highlight and nonstatus accent |

### Neutral Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--black` | `#151515` | Primary dark text and dark surfaces |
| `--gray-900` | `#1F1F1F` | Strong secondary dark surface |
| `--gray-700` | `#4F5255` | Secondary text |
| `--gray-400` | `#8A8D90` | Helper text and metadata |
| `--gray-200` | `#D2D2D2` | Borders |
| `--gray-100` | `#F0F0F0` | Soft background |
| `--white` | `#FFFFFF` | Card and content surface |

### Semantic States

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#3E8635` | Success text / icon |
| `--success-weak` | `#F3FAF2` | Success surface |
| `--warning` | `#F0AB00` | Warning text / icon |
| `--warning-weak` | `#FFF8E7` | Warning surface |
| `--danger` | `#C9190B` | Error / destructive state |
| `--danger-weak` | `#FDEAE8` | Error surface |
| `--info` | `#2B9AF3` | Informational surface and icon |

### Color Usage Rules
- Use Red Hat red for brand moments, not every primary product action.
- Use PatternFly blue as the default interactive color in product interfaces.
- Use semantic colors in operational contexts with consistent token meaning.
- Prefer neutral backgrounds and clear borders over decorative fills.

---

## 3. Typography Rules

### Font Stack

```css
/* PatternFly / Red Hat */
--font-display: 'Red Hat Display', 'Helvetica Neue', Arial, sans-serif;
--font-text: 'Red Hat Text', 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'Red Hat Mono', 'SF Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 48px | 700 | 1.1 | -0.02em | Marketing headline |
| Page Title | 36px | 700 | 1.15 | -0.015em | High-level product / section title |
| Section Title | 24px | 700 | 1.2 | -0.01em | Major section heading |
| Card Title | 20px | 700 | 1.25 | -0.01em | Panel or card title |
| Subsection | 18px | 600 | 1.3 | 0 | Supporting heading |
| Body | 16px | 400 | 1.6 | 0 | Standard body copy |
| Small Body | 14px | 400 | 1.5 | 0 | Dense UI copy |
| Label | 14px | 500 | 1.3 | 0.01em | Buttons, labels |
| Caption | 12px | 500 | 1.4 | 0.01em | Metadata and helper text |
| Code | 13px | 400 | 1.5 | 0 | Terminal, YAML, technical values |

### Typography Philosophy
Red Hat typography is **assertive but grounded**. Display styles add character and authority, while Text and Mono keep documentation and product UIs highly readable.

### Practical Rules
- Use `Red Hat Display` for headings and major emphasis.
- Use `Red Hat Text` for body, controls, and navigation.
- Use `Red Hat Mono` for code, CLI, tables, and logs.
- Maintain strong but conservative hierarchy jumps in dense product screens.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #0066CC;
  color: #FFFFFF;
  min-height: 36px;
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: 3px;
  font: 500 14px/1 'Red Hat Text', Arial, sans-serif;
  transition: background 140ms ease, box-shadow 140ms ease;
}

.button-primary:hover {
  background: #004080;
}

.button-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
}
```

#### Secondary Button
```css
.button-secondary {
  background: #FFFFFF;
  color: #151515;
  min-height: 36px;
  padding: 0 16px;
  border: 1px solid #D2D2D2;
  border-radius: 3px;
  font-weight: 500;
}

.button-secondary:hover {
  background: #F0F0F0;
}
```

#### Danger Button
```css
.button-danger {
  background: #C9190B;
  color: #FFFFFF;
  min-height: 36px;
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: 3px;
}

.button-danger:hover {
  background: #A30000;
}
```

#### Link Button
```css
.button-link {
  background: transparent;
  color: #0066CC;
  min-height: 24px;
  padding: 0;
  border: none;
  font-weight: 500;
  text-decoration: underline;
}
```

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  min-height: 36px;
  padding: 0 12px;
  background: #FFFFFF;
  color: #151515;
  border: 1px solid #8A8D90;
  border-radius: 3px;
  font: 400 14px/1.2 'Red Hat Text', Arial, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #0066CC;
  box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.18);
}

.input::placeholder {
  color: #8A8D90;
}
```

#### Form Label and Help Text
```css
.input-label {
  display: block;
  margin-bottom: 8px;
  color: #151515;
  font: 500 14px/1.3 'Red Hat Text', Arial, sans-serif;
}

.input-help {
  margin-top: 8px;
  color: #4F5255;
  font: 400 12px/1.4 'Red Hat Text', Arial, sans-serif;
}

.input-error {
  border-color: #C9190B;
}
```

### Panels and Cards

#### Product Panel
```css
.panel {
  background: #FFFFFF;
  border: 1px solid #D2D2D2;
  border-radius: 3px;
  padding: 16px;
}
```

#### Elevated Panel
```css
.panel-elevated {
  background: #FFFFFF;
  border: 1px solid #D2D2D2;
  border-radius: 3px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(21, 21, 21, 0.08);
}
```

#### Callout
```css
.callout {
  background: #F0F0F0;
  border-left: 4px solid #0066CC;
  border-radius: 3px;
  padding: 16px;
}

.callout.is-danger {
  border-left-color: #C9190B;
}
```

---

## 5. Layout Principles

### Spacing System
PatternFly relies on predictable spacing and layout tokens so dense applications stay understandable.

| Token | Value | Usage |
|-------|-------|-------|
| `--spacer-xs` | `4px` | Fine alignment |
| `--spacer-sm` | `8px` | Tight spacing |
| `--spacer-md` | `16px` | Standard spacing |
| `--spacer-lg` | `24px` | Panel and section spacing |
| `--spacer-xl` | `32px` | Larger content separation |
| `--spacer-2xl` | `48px` | Major grouping |
| `--spacer-3xl` | `64px` | Large page separation |

### Layout Behavior
- Build pages from modular panels, toolbars, forms, and data sections.
- Default to left-aligned content and clear container structure.
- Keep forms to one column unless comparison or compact editing requires otherwise.
- Use consistent spacing between buttons: typically `16px`, with tighter exceptions in modals and toolbars.

### Form Width Rules
- Use widths that reflect expected content length.
- A broad upper bound around `880px` works for long form compositions.
- Keep dense operational layouts readable by constraining text-heavy blocks.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | `#FFFFFF` | Primary product surface |
| Soft | `#F0F0F0` | Grouped background or subtle section |
| Dark | `#151515` | High-contrast marketing or nav surface |
| Semantic | tinted success, warning, or danger surfaces | Alerts, callouts, statuses |

### Shadow System
PatternFly uses restrained elevation, leaning on borders and clear panel edges first.

```css
.shadow-subtle {
  box-shadow: 0 1px 2px rgba(21, 21, 21, 0.06);
}

.shadow-panel {
  box-shadow: 0 2px 4px rgba(21, 21, 21, 0.08);
}
```

### Depth Rules
- Borders are the primary separator.
- Use light shadows for elevated containers and overlays only.
- Avoid soft, dreamy depth treatments; Red Hat should feel practical and grounded.

---

## 7. Do's and Don'ts

### Do
- Use PatternFly blue for core product interactions.
- Use Red Hat red intentionally for brand presence and critical states.
- Keep layouts modular, structured, and tokenized.
- Let typography and contrast carry authority.
- Preserve semantic state consistency across alerts, badges, and forms.

### Don't
- Use brand red as every primary button color in product UI.
- Over-round controls or add consumer-app softness.
- Hide structure behind overly subtle borders.
- Overstyle tables, logs, or operational interfaces.
- Drift away from a consistent spacing system.

---

## 8. Responsive Behavior

### Responsive Rules
- Let panels stack before shrinking too far.
- Preserve consistent spacing tokens across breakpoints.
- Keep actions grouped and readable, especially in toolbars and forms.
- Maintain readable text measures even on wide dashboards.
- Ensure semantic cues and focus treatments remain obvious on all screen sizes.

### Touch and Accessibility
- Keep controls appropriately sized for mixed input environments.
- Use icon + text pairings for status when clarity matters.
- Maintain clear contrast and visible focus outlines throughout.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: open-source, operational, editorial, enterprise-practical
- **Brand accent**: Red Hat red `#EE0000`
- **Product interaction color**: PatternFly blue `#0066CC`
- **Typography**: Red Hat Display, Text, Mono
- **Layout**: modular panels, visible borders, consistent spacing tokens
- **Components**: small-radius buttons, bordered panels, semantic callouts, readable form layouts

### Prompt Snippet

```text
Design this interface in the style of Red Hat's current website and PatternFly system. Use Red Hat Display/Text/Mono, Red Hat red (#EE0000) for brand emphasis, PatternFly blue (#0066CC) for primary product interactions, high-contrast editorial headings, and modular panel-driven layouts with visible borders and small radii. The result should feel open-source, enterprise-capable, and operationally clear rather than glossy or consumer-like.
```
