# Snowflake Design System

> Data-platform design with cool precision and AI-era confidence. Bright glacier blue, dark cloud navies, crisp technical typography, and modular enterprise blocks create interfaces that feel powerful, modern, and highly legible.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Snowflake’s current web presence communicates **high-scale technical capability with approachable polish**. It mixes dark product screenshots, bright cyan-blue accents, modular content cards, and clean enterprise typography to frame data and AI workflows as streamlined rather than intimidating.

### Mood & Feeling
- **Capable**: the platform should feel enterprise-grade and technically deep
- **Clean**: layouts stay crisp even when discussing complex architecture
- **Fast-moving**: product storytelling feels modern and current
- **Trustworthy**: clarity and contrast signal reliability
- **Composed**: visual energy comes from contrast and product imagery, not clutter

### Design Density
**Medium density**. Snowflake pages often feature many platform categories, proofs, and AI capabilities, but the visual system spaces them cleanly and avoids overstacking details in any one frame.

### Visual Character
- Cool blue accents against dark, cloud-like UI backdrops
- Strong use of platform screenshots and terminal-like product imagery
- Modular cards and section bands
- White space used to keep enterprise narratives digestible
- Typography is technical and current, but not severe

---

## 2. Color Palette & Roles

### Core Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--snowflake-blue` | `#29B5E8` | Primary brand accent, links, interactive highlight |
| `--snowflake-blue-dark` | `#0B8ACD` | Hover / active state |
| `--snowflake-blue-soft` | `#EAF7FF` | Light background tint |
| `--glacier` | `#6AD1F5` | Supporting accent |

### Neutral and Dark Surfaces

| Token | Hex | Role |
|-------|-----|------|
| `--ink-strong` | `#0B1E3B` | Primary dark text and dark surface cue |
| `--ink-default` | `#1E293B` | Body text |
| `--ink-muted` | `#64748B` | Secondary text |
| `--surface-white` | `#FFFFFF` | Card background |
| `--surface-soft` | `#F5FAFE` | Light alternate surface |
| `--surface-dark` | `#0F172A` | Hero / product frame |
| `--border-default` | `#D8E7F2` | Light border |

### Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#0F9D58` | Success |
| `--warning` | `#F4B400` | Warning |
| `--danger` | `#D93025` | Error / destructive |
| `--info` | `#29B5E8` | Informational accent |

### Color Usage Rules
- Use bright blue to emphasize action and modernity.
- Let dark product panels and screenshots carry the technical mood.
- Keep light surfaces clear and airy to balance the darker product visuals.
- Use semantic colors in support of meaning, not as additional decoration.

---

## 3. Typography Rules

### Font Stack

```css
/* Modern technical enterprise sans */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 58px | 700 | 1.05 | -0.02em | Major AI / platform headline |
| Page Title | 42px | 700 | 1.1 | -0.015em | Primary section title |
| Section Title | 30px | 600 | 1.15 | -0.01em | Platform section heading |
| Card Title | 22px | 600 | 1.25 | -0.01em | Feature / proof card title |
| Subsection | 18px | 600 | 1.35 | 0 | Supporting heading |
| Body | 16px | 400 | 1.6 | 0 | Standard content |
| Small Body | 14px | 400 | 1.5 | 0 | Secondary copy |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and utility labels |
| Code | 13px | 400 | 1.5 | 0 | CLI, prompts, data values |

### Typography Philosophy
Snowflake typography is **technical but not cold**. It supports developer- and executive-facing narratives simultaneously by keeping hierarchy sharp and body text clean.

### Practical Rules
- Use large, decisive headlines for platform narratives.
- Keep body copy short and modular.
- Use monospace for terminal and query-adjacent experiences.
- Avoid overcomplicated typographic ornament.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #29B5E8;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid transparent;
  border-radius: 999px;
  font: 600 14px/1 Inter, sans-serif;
}

.button-primary:hover {
  background: #0B8ACD;
}

.button-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(41, 181, 232, 0.18);
}
```

#### Secondary Button
```css
.button-secondary {
  background: #FFFFFF;
  color: #0B1E3B;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #D8E7F2;
  border-radius: 999px;
  font-weight: 600;
}

.button-secondary:hover {
  background: #F5FAFE;
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
  color: #0B1E3B;
  border: 1px solid #D8E7F2;
  border-radius: 14px;
  font: 400 16px/1.2 Inter, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #29B5E8;
  box-shadow: 0 0 0 3px rgba(41, 181, 232, 0.14);
}

.input::placeholder {
  color: #64748B;
}
```

#### Labels
```css
.input-label {
  display: block;
  margin-bottom: 8px;
  color: #0B1E3B;
  font: 600 14px/1.3 Inter, sans-serif;
}

.input-help {
  margin-top: 8px;
  color: #64748B;
  font: 400 12px/1.4 Inter, sans-serif;
}
```

### Cards and Product Frames

#### Platform Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #D8E7F2;
  border-radius: 20px;
  padding: 24px;
}
```

#### Dark Product Frame
```css
.product-frame {
  background: #0F172A;
  color: #FFFFFF;
  border-radius: 24px;
  padding: 24px;
}
```

#### Metric Callout
```css
.metric-callout {
  background: #F5FAFE;
  border-left: 4px solid #29B5E8;
  border-radius: 16px;
  padding: 20px;
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Fine alignment |
| `--space-2` | `8px` | Tight grouping |
| `--space-3` | `12px` | Dense block spacing |
| `--space-4` | `16px` | Core layout spacing |
| `--space-5` | `24px` | Card padding |
| `--space-6` | `32px` | Section spacing |
| `--space-8` | `48px` | Major grouping |
| `--space-10` | `64px` | Large layout separation |

### Layout Rules
- Structure pages as clear platform chapters: hero, capability bands, proof modules, customer examples.
- Use modular cards to break down technical offerings.
- Balance dark product screenshots with airy white sections.
- Keep AI and data narratives concise and easy to scan.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Light base | `#FFFFFF` / `#F5FAFE` | Core content surfaces |
| Card | white with border | Feature blocks |
| Product dark | `#0F172A` | Product or terminal framing |
| Accent callout | pale blue background + left rule | Metrics and key statements |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 8px 20px rgba(11, 30, 59, 0.08);
}

.shadow-dark-frame {
  box-shadow: 0 16px 32px rgba(11, 30, 59, 0.18);
}
```

### Depth Rules
- Use stronger depth on dark product frames than on light cards.
- Let border and contrast do most of the work on white surfaces.
- Avoid soft, vague shadows that reduce the crisp technical feel.

---

## 7. Do's and Don'ts

### Do
- Use glacier blue to signal modern interaction and emphasis.
- Keep technical stories modular and visually segmented.
- Pair dark product imagery with clean surrounding whitespace.
- Use concise, high-confidence copy.
- Maintain a crisp, contemporary type hierarchy.

### Don't
- Overfill every section with proof points at once.
- Use too many simultaneous accent colors.
- Turn the design into generic black-box “AI” aesthetics.
- Lose readability in pursuit of technical coolness.
- Over-style data or product screenshots with unnecessary effects.

---

## 8. Responsive Behavior

### Responsive Rules
- Stack platform cards and product frames early on smaller screens.
- Preserve button clarity and roomy touch targets on mobile.
- Let dark frames simplify rather than crop into illegibility.
- Keep key metrics and CTA moments visible without long scroll dependency.
- Maintain strong contrast between product and content bands at every width.

### Mobile Character
Snowflake mobile layouts should still feel sharp and modern. The cool blue accents, strong dark product framing, and modular enterprise structure should remain recognizable even when stacked.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: modern, technical, confident, clean
- **Primary accent**: Snowflake blue `#29B5E8`
- **Core contrast**: white surfaces + dark product frames
- **Typography**: Inter + monospace for technical content
- **Layout**: modular platform sections, balanced dark/light rhythm
- **Components**: pill buttons, product frames, metric callouts, light bordered cards

### Prompt Snippet

```text
Design this interface in the style of Snowflake's current AI Data Cloud website. Use bright glacier blue (#29B5E8) for action and emphasis, dark product frames for technical screenshots, crisp Inter typography, modular enterprise cards, and balanced white space. The result should feel highly capable, modern, and technically precise without becoming visually heavy or cluttered.
```
