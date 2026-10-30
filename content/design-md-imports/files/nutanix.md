# Nutanix Design System

> Hybrid-cloud platform design with deep purple branding, dark product surfaces, and enterprise infrastructure clarity. Nutanix’s current visual language frames platform complexity inside modular, future-oriented sections that feel consistent and approachable.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Nutanix communicates **hybrid multicloud simplicity at enterprise scale**. The brand needs to feel powerful and technical, but still understandable. Large statements, dark product surfaces, and a controlled accent palette help turn infrastructure into a coherent platform story.

### Mood & Feeling
- **Platform-first**: unified experience is central to the story
- **Modern**: the design should feel current and AI-aware
- **Structured**: complex capabilities need modular framing
- **Credible**: enterprise trust matters as much as innovation
- **Approachable**: the interface should imply simplification, not complexity

### Design Density
**Medium density**. Nutanix often spans many capability areas, but it stays readable through sectioning, card patterns, and controlled visual emphasis.

### Visual Character
- Purple-led brand identity
- Dark product and platform frames
- White and pale surfaces for explanatory sections
- Modular use-case and solution cards
- Big platform statements with clean typography

---

## 2. Color Palette & Roles

### Core Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--nutanix-purple` | `#4B1F6F` | Primary brand anchor |
| `--nutanix-purple-bright` | `#7C3AED` | Accent and interactive emphasis |
| `--nutanix-purple-soft` | `#F3E8FF` | Light highlighted surface |

### Neutral and Dark Surfaces

| Token | Hex | Role |
|-------|-----|------|
| `--ink-strong` | `#111827` | Primary text |
| `--ink-default` | `#334155` | Body text |
| `--ink-muted` | `#64748B` | Secondary text |
| `--surface-page` | `#F8FAFC` | Light background |
| `--surface-card` | `#FFFFFF` | Card surface |
| `--surface-dark` | `#1F2937` | Product or platform frame |
| `--border-default` | `#E2E8F0` | Borders and dividers |

### Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#16A34A` | Positive state |
| `--warning` | `#D97706` | Caution |
| `--danger` | `#DC2626` | Error / destructive |
| `--info` | `#7C3AED` | Informational highlight |

### Color Usage Rules
- Use purple as the strongest Nutanix identity cue.
- Let dark frames anchor platform and demo sections.
- Keep the structural UI neutral so complex content stays readable.

---

## 3. Typography Rules

### Font Stack

```css
/* Modern infrastructure platform sans */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 56px | 700 | 1.04 | -0.02em | Platform hero statement |
| Page Title | 40px | 700 | 1.1 | -0.015em | Major title |
| Section Title | 28px | 600 | 1.15 | -0.01em | Capability heading |
| Card Title | 20px | 600 | 1.25 | 0 | Use-case or feature card |
| Body | 16px | 400 | 1.6 | 0 | Standard content |
| Small Body | 14px | 400 | 1.5 | 0 | Secondary copy |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and labels |
| Code | 13px | 400 | 1.5 | 0 | Technical values |

### Typography Philosophy
Nutanix typography should feel **clear, high-confidence, and platform-ready**. It needs to carry both high-level transformation language and more technical capability detail.

### Practical Rules
- Use strong platform statements up top.
- Keep explanatory text short and modular.
- Use technical styles only when they reinforce product credibility.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #7C3AED;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #7C3AED;
  border-radius: 999px;
  font: 600 14px/1 Inter, sans-serif;
}

.button-primary:hover {
  background: #6D28D9;
  border-color: #6D28D9;
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
  border-color: #7C3AED;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.14);
}
```

### Cards and Platform Frames

#### Feature Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 20px;
  padding: 24px;
}
```

#### Dark Platform Panel
```css
.platform-panel {
  background: #1F2937;
  color: #FFFFFF;
  border-radius: 24px;
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
- Use modular sections for platform, products, and outcomes.
- Alternate light explanation bands with darker product-focus bands.
- Keep CTA paths obvious for demos, trials, and solution exploration.
- Let screenshots and interface frames do much of the technical storytelling.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Light base | neutral page field | Narrative and overview |
| Feature card | white bounded surface | Capability grouping |
| Dark panel | dark product frame | Platform or demo section |
| Overlay | elevated light or dark surface | Modal or focused interaction |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 8px 18px rgba(17, 24, 39, 0.08);
}

.shadow-panel {
  box-shadow: 0 18px 30px rgba(17, 24, 39, 0.16);
}
```

### Depth Rules
- Use light cards for most structure and dark panels for focus.
- Let screenshots and UI previews create technical depth.
- Keep the overall system airy enough to counter platform complexity.

---

## 7. Do's and Don'ts

### Do
- Use purple as the key brand and action cue.
- Keep platform breadth modular and explainable.
- Use dark panels to frame product credibility.
- Balance technical detail with approachability.

### Don't
- Overload every section with platform jargon.
- Use dark panels everywhere without relief.
- Scatter too many equally strong CTAs across the same section.
- Reduce readability with heavy decorative effects.

---

## 8. Responsive Behavior

### Responsive Rules
- Stack cards and dark platform panels cleanly on smaller screens.
- Preserve primary CTA visibility early in the scroll.
- Simplify proof density before shrinking key headings too far.
- Keep screenshots readable by reducing framing complexity when space is tight.

### Mobile Character
Nutanix mobile layouts should still feel platform-centric and modern. The purple-led identity and modular structure should remain obvious even when the experience becomes more linear.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: modern, platform-first, enterprise-clear
- **Primary accent**: Nutanix purple `#7C3AED`
- **Core structure**: light cards plus dark platform frames
- **Typography**: modern infrastructure sans
- **Components**: pill CTAs, feature cards, dark product panels

### Prompt Snippet

```text
Design this interface in the style of Nutanix’s current website. Use a purple-led brand accent (#7C3AED), light neutral page structure, dark platform showcase panels, and concise modern enterprise typography. The result should feel platform-first, technically credible, and approachable rather than cluttered.
```

