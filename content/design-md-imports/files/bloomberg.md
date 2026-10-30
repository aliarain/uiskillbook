# Bloomberg Design System

> Information-dense media and terminal design with unmistakable black-and-amber identity. Bloomberg combines bold contrast, efficiency-first hierarchy, modern editorial layouts, and a culture of high-signal interface design to make large amounts of data feel navigable and urgent.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Bloomberg is about **useful density**. Whether in the Terminal or on Bloomberg.com, the design values clarity under pressure. The interface should feel fast, intelligent, and unapologetically information-rich.

### Mood & Feeling
- **Efficient**: the design should help users act fast
- **Authoritative**: data and news feel central and serious
- **High-contrast**: important information should pop immediately
- **Curated**: despite the density, hierarchy is carefully controlled
- **Modern editorial**: long-form media products still feel designed, not dumped

### Design Density
**High density** in product contexts, **medium density** in corporate and media surfaces. The system needs to handle both fast information scanning and richly designed long-form content.

### Visual Character
- Black and amber as the strongest signature
- Strong contrast and quick visual parsing
- Modern editorial grids for web media
- Data-forward UI patterns and confident typographic rhythm
- Function over form, but never ugly by accident

---

## 2. Color Palette & Roles

### Signature Palette

| Token | Hex | Role |
|-------|-----|------|
| `--bloomberg-black` | `#000000` | Terminal background, strong dark field |
| `--bloomberg-amber` | `#FFB000` | Signature text and highlight color |
| `--bloomberg-orange` | `#FF6B00` | Secondary action / alert emphasis |
| `--bloomberg-white` | `#FFFFFF` | Body text and clean web surface |

### Supporting Neutrals

| Token | Hex | Role |
|-------|-----|------|
| `--gray-900` | `#111111` | Strong text on light surfaces |
| `--gray-700` | `#374151` | Secondary text |
| `--gray-300` | `#D1D5DB` | Borders and dividers |
| `--surface-soft` | `#F7F7F7` | Light editorial section fill |

### Data / Intent Support

| Token | Hex | Role |
|-------|-----|------|
| `--info-blue` | `#2563EB` | Info and linked interaction |
| `--success-green` | `#15803D` | Positive state |
| `--danger-red` | `#DC2626` | Error / negative state |

### Color Usage Rules
- Let black and amber define the Bloomberg signature.
- Use lighter editorial surfaces sparingly and purposefully.
- Keep high contrast as the first principle in data-heavy views.

---

## 3. Typography Rules

### Font Stack

```css
/* Bloomberg-style modern editorial sans */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 54px | 700 | 1.04 | -0.02em | Brand / media hero |
| Page Title | 40px | 700 | 1.08 | -0.015em | Major title |
| Section Title | 28px | 600 | 1.15 | -0.01em | Editorial section heading |
| Card Title | 20px | 600 | 1.25 | 0 | Article / module title |
| Body | 16px | 400 | 1.6 | 0 | Standard content |
| Small Body | 14px | 400 | 1.5 | 0 | Metadata and secondary text |
| Label | 13px | 600 | 1.3 | 0.01em | Buttons, controls, tags |
| Data Mono | 13px | 400 | 1.45 | 0 | Terminal-like values |

### Typography Philosophy
Bloomberg typography should feel **fast, direct, and editorially assured**. It needs to support both rapid scanning and premium storytelling.

### Practical Rules
- Make hierarchy instantly obvious.
- Use mono and color emphasis for dense data contexts.
- Keep article / media cards tight and high-signal.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #FFB000;
  color: #000000;
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid #FFB000;
  border-radius: 999px;
  font: 600 13px/1 Inter, sans-serif;
}

.button-primary:hover {
  background: #FF9A00;
  border-color: #FF9A00;
}
```

#### Secondary Button
```css
.button-secondary {
  background: #000000;
  color: #FFFFFF;
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid #374151;
  border-radius: 999px;
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
  color: #111111;
  border: 1px solid #D1D5DB;
  border-radius: 10px;
  font: 400 14px/1.2 Inter, sans-serif;
}
```

### Cards and Media Modules

#### News Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #D1D5DB;
  border-radius: 16px;
  padding: 20px;
}
```

#### Terminal Panel
```css
.terminal-panel {
  background: #000000;
  color: #FFB000;
  border-radius: 12px;
  padding: 20px;
  font: 400 13px/1.45 'SF Mono', monospace;
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Tight grouping |
| `--space-4` | `16px` | Core spacing |
| `--space-5` | `24px` | Card spacing |
| `--space-6` | `32px` | Section spacing |
| `--space-8` | `48px` | Large editorial rhythm |

### Layout Rules
- Use grids that support dense but intentional curation.
- Keep headlines and metadata tightly organized.
- Let data-heavy modules use stricter spacing than editorial features.
- Use contrast and sectioning to separate urgency from long-form reading.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Dark terminal | black with amber foreground | Terminal-like modules |
| Light editorial | white / soft gray | Articles and company pages |
| Card | white with subtle border | News modules |
| Overlay | elevated light or dark panel | Search / utility overlays |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 8px 18px rgba(17, 17, 17, 0.08);
}

.shadow-overlay {
  box-shadow: 0 18px 30px rgba(17, 17, 17, 0.14);
}
```

### Depth Rules
- Use contrast and density first, shadow second.
- Keep terminal-like panels flat and immediate.
- Let editorial cards feel lighter and more open.

---

## 7. Do's and Don'ts

### Do
- Use black and amber as the unmistakable Bloomberg signature.
- Keep dense information sharply organized.
- Preserve strong editorial hierarchy.
- Use high contrast to support speed and clarity.
- Let functionality drive styling decisions.

### Don't
- Soften the interface into generic fintech minimalism.
- Use muted low-contrast palettes in data-heavy contexts.
- Overdecorate long-form layouts.
- Make dense modules feel visually unbounded.

---

## 8. Responsive Behavior

### Responsive Rules
- Prioritize clear article / data hierarchy over preserving every column.
- Stack dense modules with disciplined spacing on mobile.
- Keep high-value metrics and breaking items visible above deeper content.
- Preserve black-and-amber identity even when simplifying.

### Mobile Character
Bloomberg mobile should still feel urgent, clear, and information-rich. The experience can simplify, but it should never feel casual or generic.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: efficient, authoritative, high-contrast
- **Signature palette**: black and amber
- **Layout**: dense but curated media and data modules
- **Typography**: sharp editorial sans + mono for data
- **Components**: amber CTAs, news cards, terminal-like panels

### Prompt Snippet

```text
Design this interface in the style of Bloomberg’s modern web and product ecosystem. Use a black-and-amber signature palette, strong contrast, dense but curated information hierarchy, sharp editorial typography, and terminal-like dark data panels. The result should feel fast, authoritative, and unmistakably Bloomberg.
```
