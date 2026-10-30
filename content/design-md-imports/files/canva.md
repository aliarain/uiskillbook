# Canva Design System

> Creative-tool design with playful confidence, rainbow-gradient energy, and strong workflow simplification. Canva combines bright brand color, rounded UI, approachable motion, and productivity-first editor structure to make advanced design tasks feel easy and joyful.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Canva communicates **creative power made simple**. The interface needs to feel cheerful, fast, and polished, but it can’t become chaotic because users spend long sessions inside the editor and homepage dashboards.

### Mood & Feeling
- **Playful**: creativity should feel inviting, not intimidating
- **Simple**: complex design actions should feel easy and guided
- **Collaborative**: workflows should support teams and shared brand systems
- **Productive**: the editor is a serious work surface despite the bright personality
- **Global**: the design must scale across templates, docs, video, AI, and presentations

### Design Density
**Medium density**. Canva often shows many features and entry points, but it stays accessible through rounded cards, bright signposting, and simplified action groups.

### Visual Character
- Signature turquoise-to-purple gradient energy
- Friendly rounded controls and cards
- Light, airy editor shells around more colorful content
- Simple iconography and approachable microinteractions
- Joyful without losing productivity focus

---

## 2. Color Palette & Roles

### Signature Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--canva-turquoise` | `#00C4CC` | Primary brand accent |
| `--canva-blue` | `#2B8CFF` | Productive action support |
| `--canva-purple` | `#8B3DFF` | Brand personality, AI / magic moments |
| `--canva-pink` | `#FF4ECD` | Secondary creative accent |
| `--canva-gradient` | `linear-gradient(90deg, #00C4CC 0%, #7D2AE8 100%)` | Hero and brand treatment |

### Neutral Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--ink-strong` | `#1E293B` | Primary text |
| `--ink-default` | `#334155` | Body text |
| `--ink-muted` | `#64748B` | Secondary text |
| `--surface-page` | `#F8FAFC` | App and homepage background |
| `--surface-card` | `#FFFFFF` | Card and editor panel surface |
| `--border-default` | `#E2E8F0` | Border and divider |

### Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#16A34A` | Success |
| `--warning` | `#D97706` | Warning |
| `--danger` | `#DC2626` | Error |

### Color Usage Rules
- Use gradients and bright accents for identity moments, not every surface.
- Keep editor UI largely neutral so user content can shine.
- Use purple and pink selectively to mark AI or premium/creative moments.

---

## 3. Typography Rules

### Font Stack

```css
/* Canva-style friendly modern sans */
--font-sans: Canva Sans, Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 56px | 700 | 1.05 | -0.02em | Homepage hero |
| Page Title | 40px | 700 | 1.1 | -0.015em | Section title |
| Section Title | 28px | 600 | 1.15 | -0.01em | Feature heading |
| Card Title | 20px | 600 | 1.25 | 0 | Template / feature card |
| Body | 16px | 400 | 1.6 | 0 | Main content |
| Small Body | 14px | 400 | 1.5 | 0 | Secondary content |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and controls |

### Typography Philosophy
Canva typography should feel **friendly, modern, and frictionless**. It supports creative confidence by staying readable and non-intimidating.

### Practical Rules
- Keep labels short and action-based.
- Let the brand feel optimistic through generous spacing and rounded shapes.
- Use strong hierarchy for feature discovery, not clutter.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: linear-gradient(90deg, #00C4CC 0%, #7D2AE8 100%);
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: none;
  border-radius: 999px;
  font: 600 14px/1 Inter, sans-serif;
}
```

#### Secondary Button
```css
.button-secondary {
  background: #FFFFFF;
  color: #1E293B;
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
  color: #1E293B;
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  font: 400 16px/1.2 Inter, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #2B8CFF;
  box-shadow: 0 0 0 3px rgba(43, 140, 255, 0.14);
}
```

### Cards and Editor Panels

#### Template Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 20px;
  padding: 20px;
}
```

#### Editor Panel
```css
.editor-panel {
  background: #FFFFFF;
  border-radius: 18px;
  padding: 16px;
  box-shadow: 0 8px 18px rgba(30, 41, 59, 0.08);
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
| `--space-10` | `64px` | Large page rhythm |

### Layout Rules
- Keep homepage and editor shells light and navigable.
- Use visual grouping to separate create, brand, templates, and AI tools.
- Let user content and template previews carry more color than the UI shell.
- Use rounded cards and gentle motion to keep exploration fun.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | light neutral background | App shell |
| Card | white rounded surface | Template and feature grouping |
| Editor panel | white elevated side panel | Tool controls |
| Brand hero | gradient-led panel | Marketing or AI spotlight |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 6px 14px rgba(30, 41, 59, 0.06);
}

.shadow-panel {
  box-shadow: 0 16px 28px rgba(30, 41, 59, 0.12);
}
```

### Depth Rules
- Use gentle depth and rounded surfaces.
- Keep the editor productive, not toy-like.
- Let gradients stay mostly in hero and highlight moments.

---

## 7. Do's and Don'ts

### Do
- Use Canva’s gradient energy for identity moments.
- Keep the editor shell neutral and productivity-friendly.
- Make complex actions feel simple and guided.
- Use rounded surfaces and approachable spacing.
- Support collaboration and brand-system workflows clearly.

### Don't
- Flood every screen with rainbow accents.
- Let playful styling reduce clarity.
- Overload discovery pages with too many equal-priority cards.
- Make the product feel generic enterprise software.

---

## 8. Responsive Behavior

### Responsive Rules
- Stack cards and editor utilities cleanly on smaller screens.
- Preserve clear CTA and search access on homepage views.
- Keep template previews visually rich even when narrower.
- Maintain large, touch-friendly controls in the editor and dashboards.

### Mobile Character
Canva mobile should still feel joyful and productive. The bright brand personality should remain, but workflows must stay organized and fast to navigate.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: playful, productive, creative, approachable
- **Signature colors**: turquoise, blue, purple, pink
- **Core layout**: neutral editor shell plus colorful template content
- **Typography**: friendly modern sans
- **Components**: gradient primary buttons, rounded cards, soft editor panels

### Prompt Snippet

```text
Design this interface in the style of Canva’s current product and homepage experience. Use a friendly modern sans, a turquoise-to-purple brand gradient for key identity moments, rounded controls, light neutral editor surfaces, and colorful template-driven content. The result should feel playful, productive, and easy to use rather than cluttered or overly enterprise.
```
