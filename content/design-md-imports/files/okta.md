# Okta Design System

> Identity-platform design with clear blue actions, neutral enterprise surfaces, and accessibility-first structure. Okta’s Odyssey system aims for consistency, efficiency, and trust across authentication, admin, and security workflows.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Okta expresses **security through clarity**. The system feels modern but restrained, emphasizing readability, reliable interaction, and low-friction task completion. The UI should never distract from the seriousness of identity and access work.

### Mood & Feeling
- **Trusted**: stable, credible, and predictable
- **Accessible**: built with explicit usability goals
- **Enterprise-clear**: practical hierarchy and strong layout logic
- **Modern**: current, but not trend-driven
- **Calm under complexity**: dense settings and flows still feel manageable

### Design Density
**Medium density**. Okta apps often contain forms, security settings, policies, and org configuration, but Odyssey keeps them readable with spacing discipline and repeatable panels.

### Visual Character
- Blue-led interactive color model
- White and cool-neutral structural surfaces
- Rounded but not playful component geometry
- Clear validation and state treatment
- Strong emphasis on consistency across flows

---

## 2. Color Palette & Roles

### Core Interaction Colors

| Token | Hex | Role |
|-------|-----|------|
| `--okta-blue` | `#1662DD` | Primary action, active state, selected nav |
| `--okta-blue-hover` | `#0F4FBF` | Hover / pressed state |
| `--okta-blue-soft` | `#EAF2FF` | Selection backgrounds, soft callouts |

### Neutral Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--ink-strong` | `#0F172A` | Primary text |
| `--ink-default` | `#334155` | Body text |
| `--ink-muted` | `#64748B` | Secondary text, metadata |
| `--surface-page` | `#F8FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Card and form surface |
| `--border-default` | `#DCE3EA` | Default border |
| `--border-strong` | `#C6D1DC` | Higher-emphasis border |

### Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#15803D` | Success / verified state |
| `--warning` | `#D97706` | Warning / caution |
| `--danger` | `#DC2626` | Error / destructive |
| `--info` | `#1662DD` | Info and guidance |

### Color Usage Rules
- Use blue consistently for primary interaction.
- Use neutrals to hold most of the interface structure.
- Semantic colors should only appear when state meaning is explicit.

---

## 3. Typography Rules

### Font Stack

```css
/* Odyssey-style UI typography */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Page Title | 32px | 700 | 1.15 | -0.015em | App or page title |
| Section Title | 24px | 600 | 1.2 | -0.01em | Section heading |
| Card Title | 18px | 600 | 1.3 | 0 | Card / form title |
| Body | 16px | 400 | 1.55 | 0 | Main content |
| Small Body | 14px | 400 | 1.5 | 0 | Supporting copy |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and fields |
| Caption | 12px | 500 | 1.4 | 0.01em | Helper and metadata |
| Code | 13px | 400 | 1.45 | 0 | IDs, tokens, technical values |

### Typography Philosophy
Okta typography should feel **safe, practical, and easy to scan**. It supports sign-in, policy, and account-management flows where users need confidence and orientation more than style.

### Practical Rules
- Keep labels short and explicit.
- Use typographic hierarchy to make multi-step flows obvious.
- Preserve generous line height in explanatory security content.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #1662DD;
  color: #FFFFFF;
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid #1662DD;
  border-radius: 8px;
  font: 600 14px/1 Inter, sans-serif;
}

.button-primary:hover {
  background: #0F4FBF;
  border-color: #0F4FBF;
}

.button-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(22, 98, 221, 0.14);
}
```

#### Secondary Button
```css
.button-secondary {
  background: #FFFFFF;
  color: #0F172A;
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid #DCE3EA;
  border-radius: 8px;
}

.button-secondary:hover {
  background: #F8FAFC;
}
```

#### Danger Button
```css
.button-danger {
  background: #DC2626;
  color: #FFFFFF;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 8px;
}
```

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  min-height: 40px;
  padding: 0 12px;
  background: #FFFFFF;
  color: #0F172A;
  border: 1px solid #DCE3EA;
  border-radius: 8px;
  font: 400 14px/1.2 Inter, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #1662DD;
  box-shadow: 0 0 0 3px rgba(22, 98, 221, 0.14);
}

.input::placeholder {
  color: #64748B;
}
```

#### Auth Input Group
```css
.input-label {
  display: block;
  margin-bottom: 8px;
  color: #0F172A;
  font: 600 14px/1.3 Inter, sans-serif;
}

.input-help {
  margin-top: 8px;
  color: #64748B;
  font: 400 12px/1.4 Inter, sans-serif;
}
```

### Cards and Identity Panels

#### Standard Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #DCE3EA;
  border-radius: 16px;
  padding: 20px;
}
```

#### Auth Panel
```css
.auth-panel {
  background: #FFFFFF;
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Tight spacing |
| `--space-4` | `16px` | Core spacing |
| `--space-5` | `24px` | Card spacing |
| `--space-6` | `32px` | Section spacing |
| `--space-8` | `48px` | Major grouping |

### Layout Rules
- Group identity tasks into clear panels and progressive steps.
- Keep the primary action visually obvious at every stage.
- Use repeated settings and policy layouts to reduce learning cost.
- Preserve stable left-aligned flow in admin-heavy screens.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | light neutral page background | Main app canvas |
| Card | white bounded surface | Grouped content |
| Auth Panel | elevated white panel | Login, setup, onboarding |
| Overlay | stronger elevated panel | Dialog, confirmation, drawer |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.06);
}

.shadow-overlay {
  box-shadow: 0 18px 30px rgba(15, 23, 42, 0.14);
}
```

### Depth Rules
- Use subtle depth to guide focus, not to decorate.
- Keep cards quiet and dialogs clearly elevated.
- Never let shadows compete with important validation or action states.

---

## 7. Do's and Don'ts

### Do
- Use blue consistently for primary interaction.
- Keep security and identity flows explicit and reassuring.
- Reuse Odyssey patterns across similar screens.
- Make validation and state changes easy to understand.

### Don't
- Overdecorate auth or admin flows.
- Split similar settings screens into unrelated visual patterns.
- Use semantic colors casually.
- Hide the primary action inside dense control clusters.

---

## 8. Responsive Behavior

### Responsive Rules
- Collapse multi-panel settings layouts into simple vertical stacks.
- Keep auth flows single-column and touch-friendly.
- Preserve helper and validation text near the input it explains.
- Maintain clear CTA hierarchy even when buttons wrap.

### Mobile Character
Okta mobile should still feel secure, calm, and efficient. The UI may simplify, but trust and action clarity should remain the dominant experience.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: trusted, accessible, enterprise-clear
- **Primary accent**: Okta blue `#1662DD`
- **Layout**: card-driven identity and security workflows
- **Components**: rounded enterprise controls, auth panels, high-clarity validation

### Prompt Snippet

```text
Design this interface in the style of Okta’s Odyssey design system. Use Okta blue (#1662DD) for primary interaction, neutral enterprise surfaces, accessible form and validation patterns, and clear card-based identity workflows. The result should feel secure, modern, and highly consistent rather than decorative.
```
