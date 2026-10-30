# Postman Design System

> API-platform design with energetic orange branding, dense product diagrams, and developer-friendly modularity. Postman’s current web and platform experience balances strong brand personality with clear, scalable structure for the full API lifecycle.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Postman communicates **developer productivity with strong visual identity**. The platform is broad and technical, but the design keeps it approachable through clear modules, bright branding, and concise hierarchy.

### Mood & Feeling
- **Energetic**: API work should feel active and collaborative
- **Technical**: the platform still needs developer credibility
- **Product-led**: diagrams, flows, and tool groupings are central
- **Scalable**: the system has to support a large ecosystem of features
- **Clear**: dense platform breadth should still be easy to scan

### Design Density
**Medium density**. Postman surfaces often include diagrams, cards, platform taxonomy, and feature maps, but the UI keeps them grouped and legible.

### Visual Character
- Signature orange as the strongest brand cue
- White and dark neutral surfaces
- Rounded but efficient cards and controls
- Heavy use of platform illustrations and workflow diagrams
- Developer-friendly visual clarity without stark minimalism

---

## 2. Color Palette & Roles

### Core Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--postman-orange` | `#FF6C37` | Primary brand and action color |
| `--postman-orange-dark` | `#E85A24` | Hover / active state |
| `--postman-orange-soft` | `#FFE7DE` | Light highlighted surface |

### Neutral Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--ink-strong` | `#111827` | Primary text |
| `--ink-default` | `#334155` | Body text |
| `--ink-muted` | `#64748B` | Secondary text |
| `--surface-page` | `#F8FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Card and panel surface |
| `--surface-dark` | `#1F2937` | Dark product or diagram frame |
| `--border-default` | `#E2E8F0` | Border and divider |

### Supportive Colors

| Token | Hex | Role |
|-------|-----|------|
| `--blue` | `#2563EB` | Links and informational guidance |
| `--green` | `#16A34A` | Success / validation |
| `--yellow` | `#EAB308` | Warning / attention |
| `--red` | `#DC2626` | Error / destructive |

### Color Usage Rules
- Use orange for the strongest brand and primary action moments.
- Keep the structural UI neutral and readable.
- Use supportive colors mostly for semantic states and diagrams.

---

## 3. Typography Rules

### Font Stack

```css
/* Postman-style developer-product sans */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 54px | 700 | 1.05 | -0.02em | Platform hero statement |
| Page Title | 40px | 700 | 1.1 | -0.015em | Major title |
| Section Title | 28px | 600 | 1.15 | -0.01em | Feature section heading |
| Card Title | 20px | 600 | 1.25 | 0 | Platform card heading |
| Body | 16px | 400 | 1.6 | 0 | Standard content |
| Small Body | 14px | 400 | 1.5 | 0 | Supporting text |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and control labels |
| Code | 13px | 400 | 1.5 | 0 | API or technical snippets |

### Typography Philosophy
Postman typography should feel **technical, clear, and energetic**. It supports a wide API platform without losing approachability.

### Practical Rules
- Use short, strong headlines.
- Break platform descriptions into digestible cards and callouts.
- Use monospace only where API or code context is genuinely helpful.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #FF6C37;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #FF6C37;
  border-radius: 999px;
  font: 600 14px/1 Inter, sans-serif;
}

.button-primary:hover {
  background: #E85A24;
  border-color: #E85A24;
}
```

#### Secondary Button
```css
.button-secondary {
  background: #FFFFFF;
  color: #111827;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #E2E8F0;
  border-radius: 999px;
}
```

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  min-height: 44px;
  padding: 0 14px;
  background: #FFFFFF;
  color: #111827;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  font: 400 16px/1.2 Inter, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #FF6C37;
  box-shadow: 0 0 0 3px rgba(255, 108, 55, 0.14);
}
```

### Cards and Platform Modules

#### Feature Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 20px;
  padding: 24px;
}
```

#### Dark Workflow Panel
```css
.workflow-panel {
  background: #1F2937;
  color: #FFFFFF;
  border-radius: 22px;
  padding: 24px;
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
| `--space-10` | `64px` | Large platform rhythm |

### Layout Rules
- Organize the platform by lifecycle or tool family.
- Use diagrams and workflow maps to explain complexity.
- Keep CTA paths clear for sign-up, download, and feature exploration.
- Balance developer precision with marketing energy.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | light neutral page field | Main narrative structure |
| Card | white bounded module | Feature and use-case grouping |
| Workflow panel | dark surface | Technical or lifecycle spotlight |
| Overlay | elevated white panel | Modal or focused flow |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 8px 18px rgba(17, 24, 39, 0.08);
}

.shadow-overlay {
  box-shadow: 0 18px 30px rgba(17, 24, 39, 0.14);
}
```

### Depth Rules
- Use white cards for most grouping and dark panels sparingly for emphasis.
- Let diagrams and content structure carry most complexity.
- Keep overlays clean and action-oriented.

---

## 7. Do's and Don'ts

### Do
- Use orange as a selective primary brand cue.
- Keep platform breadth modular and legible.
- Show workflow clarity through diagrams and grouped cards.
- Preserve strong CTA pathways for developers.

### Don't
- Use orange on every interactive surface.
- Overload a single section with the entire platform map.
- Let dark technical panels dominate the whole experience.
- Sacrifice readability for visual energy.

---

## 8. Responsive Behavior

### Responsive Rules
- Stack platform cards and diagrams cleanly on smaller screens.
- Keep primary CTA paths visible without crowding.
- Simplify workflow illustrations before shrinking type too far.
- Maintain comfortable touch targets in builder and product-exploration surfaces.

### Mobile Character
Postman mobile should still feel active and developer-friendly. The orange brand cue and platform hierarchy need to remain clear even when the experience becomes more vertical.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: energetic, technical, modular
- **Primary accent**: Postman orange `#FF6C37`
- **Core layout**: platform cards and lifecycle diagrams
- **Typography**: clean modern developer sans
- **Components**: pill CTAs, rounded cards, dark workflow panels

### Prompt Snippet

```text
Design this interface in the style of Postman’s current API platform website. Use Postman orange (#FF6C37) as the main brand and CTA color, clean neutral surfaces, modular lifecycle cards, and concise technical typography. The result should feel energetic, developer-friendly, and scalable without becoming cluttered.
```
