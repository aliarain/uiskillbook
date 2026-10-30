# GoDaddy Design System

> Small-business website and commerce design with confident black-and-green branding and guided-builder simplicity. GoDaddy’s current visual language mixes bold identity, rounded utility controls, and approachable site-building flows to make getting online feel manageable.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
GoDaddy communicates **small-business empowerment with strong brand recognition**. The experience should feel direct, commercially practical, and visually confident without becoming intimidating to non-technical users.

### Mood & Feeling
- **Accessible**: website and business tools should feel beginner-friendly
- **Guided**: setup flows and visual-brand controls should be easy to follow
- **Commercial**: the system should feel action-oriented and pragmatic
- **Bold**: the brand is strong and unmistakable
- **Flexible**: themes, colors, and fonts should support many small-business styles

### Design Density
**Medium density**. GoDaddy often balances marketing, setup guidance, and builder controls, but it keeps those areas straightforward through panelization and short action steps.

### Visual Character
- Black-driven branding with green accents
- Rounded controls and clear CTA areas
- Theme-driven website builder surfaces
- Helpful instructional structure for visual branding setup

---

## 2. Color Palette & Roles

### Core Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--godaddy-black` | `#111111` | Primary brand and text color |
| `--godaddy-green` | `#97D700` | Signature brand accent |
| `--godaddy-green-dark` | `#79B600` | Hover / stronger emphasis |
| `--godaddy-green-soft` | `#EEF8D0` | Soft highlight surface |

### Neutral Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--surface-page` | `#F8FAFC` | Main background |
| `--surface-card` | `#FFFFFF` | Card and setup panel surface |
| `--border-default` | `#E5E7EB` | Border and divider |
| `--ink-default` | `#1F2937` | Body text |
| `--ink-muted` | `#6B7280` | Secondary text |

### Supportive Colors

| Token | Hex | Role |
|-------|-----|------|
| `--blue` | `#2563EB` | Informational link or setup guidance |
| `--success` | `#15803D` | Success state |
| `--warning` | `#D97706` | Caution state |
| `--danger` | `#DC2626` | Error / destructive |

### Color Usage Rules
- Use black and green as the clearest GoDaddy signature.
- Let user-chosen brand colors appear inside the builder, but keep the product shell stable.
- Keep setup guidance highly readable and low-friction.

---

## 3. Typography Rules

### Font Stack

```css
/* Modern small-business builder sans */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 52px | 700 | 1.05 | -0.02em | Homepage hero |
| Page Title | 38px | 700 | 1.1 | -0.015em | Major title |
| Section Title | 26px | 600 | 1.15 | -0.01em | Setup or product section |
| Card Title | 18px | 600 | 1.3 | 0 | Builder or theme card |
| Body | 16px | 400 | 1.6 | 0 | Standard content |
| Small Body | 14px | 400 | 1.5 | 0 | Secondary content |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and field labels |

### Typography Philosophy
GoDaddy typography should feel **clear, bold, and beginner-friendly**. It needs to support fast setup flows and small-business confidence rather than dense technical detail.

### Practical Rules
- Keep setup steps short and explicit.
- Use stronger headings to simplify decisions.
- Preserve enough breathing room so builder controls never feel overwhelming.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #111111;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #111111;
  border-radius: 999px;
  font: 600 14px/1 Inter, sans-serif;
}
```

#### Accent Button
```css
.button-accent {
  background: #97D700;
  color: #111111;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #97D700;
  border-radius: 999px;
  font: 600 14px/1 Inter, sans-serif;
}
```

#### Secondary Button
```css
.button-secondary {
  background: #FFFFFF;
  color: #111111;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #E5E7EB;
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
  color: #111111;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  font: 400 16px/1.2 Inter, sans-serif;
}
```

### Cards and Builder Panels

#### Theme Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 18px;
  padding: 20px;
}
```

#### Setup Panel
```css
.setup-panel {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 18px rgba(17, 17, 17, 0.08);
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Tight spacing |
| `--space-4` | `16px` | Core spacing |
| `--space-5` | `24px` | Panel spacing |
| `--space-6` | `32px` | Section spacing |
| `--space-8` | `48px` | Major grouping |

### Layout Rules
- Organize setup and builder flows into clear sequences.
- Use theme, color, and font controls as grouped panels.
- Keep calls to action simple and visually distinct.
- Balance marketing confidence with small-business approachability.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | light neutral background | Main page or builder shell |
| Card | white bounded surface | Theme and content grouping |
| Setup panel | elevated white card | Guided tasks and forms |
| Overlay | stronger elevated surface | Modal or wizard |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 6px 14px rgba(17, 17, 17, 0.06);
}

.shadow-panel {
  box-shadow: 0 18px 30px rgba(17, 17, 17, 0.12);
}
```

### Depth Rules
- Use depth to support guided setup moments.
- Keep the builder organized and calm rather than flashy.
- Let brand confidence come from contrast and clarity before shadow.

---

## 7. Do's and Don'ts

### Do
- Use black and green as the strongest GoDaddy brand cues.
- Keep website and brand setup flows simple and confidence-building.
- Group builder controls into obvious panels.
- Preserve clear distinction between guidance, action, and preview.

### Don't
- Overcomplicate the path to launch.
- Flood the product shell with too many user-selected colors at once.
- Use overly technical language in core setup flows.
- Make key calls to action visually ambiguous.

---

## 8. Responsive Behavior

### Responsive Rules
- Stack setup panels early on smaller screens.
- Preserve strong CTA order and visibility.
- Keep color and font controls touch-friendly.
- Maintain readable previews and theme cards in narrow layouts.

### Mobile Character
GoDaddy mobile should still feel direct and helpful. Even when condensed, the experience should prioritize quick understanding and fast action over deep exploration.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: bold, guided, small-business-friendly
- **Core palette**: black, green, white
- **Layout**: setup panels and theme cards
- **Components**: strong pill CTAs, approachable builder inputs, guided flows

### Prompt Snippet

```text
Design this interface in the style of GoDaddy’s current website and website-builder experience. Use a bold black-and-green palette, approachable rounded controls, clean setup panels, and a guided small-business workflow structure. The result should feel direct, helpful, and commercially confident rather than technical or decorative.
```

