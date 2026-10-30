# Cisco Design System

> Infrastructure-led enterprise brand with bright network blue, dark technical gradients, and mobile-first content discipline. Cisco’s current web presence balances futuristic AI-era storytelling with practical, readable, conversion-focused layouts.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Cisco’s design language feels like **global infrastructure made legible**. The brand uses luminous blues, dark signal-rich imagery, and concise utility-driven content blocks to make highly technical subject matter feel approachable and high-value. The visual system is polished, but it stays grounded in clarity and business utility.

### Mood & Feeling
- **Technically confident**: expert, stable, and built for large-scale systems
- **Future-facing**: modern AI and networking visuals without gimmicks
- **Action-oriented**: CTAs and pathways are clear and purposeful
- **Mobile-aware**: layouts and content rules assume responsive delivery from the start
- **Readable under complexity**: advanced concepts are simplified through structure

### Design Density
**Medium density**. Cisco surfaces can carry substantial messaging and multiple pathways, but they avoid crowding through large visual modules, generous line spacing, and disciplined responsive behavior.

### Visual Character
- Bright Cisco blue and cyan accents over white and deep navy
- Rounded CTAs paired with modular cards and hero sections
- Technical imagery featuring networks, silicon, grids, and illuminated systems
- Strong use of dark-on-light section alternation for rhythm
- Business copy remains concise and goal-driven
- Links and interactive text are expected to read clearly as blue

---

## 2. Color Palette & Roles

### Core Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--cisco-blue` | `#049FD9` | Primary brand blue, buttons, links, emphasis |
| `--cisco-blue-hover` | `#0B5CAB` | Hover / active action state |
| `--cisco-cyan` | `#6CCFF6` | Supporting highlight and soft glow accent |
| `--cisco-navy` | `#0F1F33` | Dark section background |
| `--cisco-navy-deep` | `#07111F` | Hero / footer / high-contrast surfaces |

### Neutral Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--white` | `#FFFFFF` | Main page background |
| `--gray-50` | `#F5F7FA` | Soft section background |
| `--gray-100` | `#E6ECF2` | Borders and dividers |
| `--gray-400` | `#6B7785` | Secondary copy |
| `--gray-700` | `#334155` | Strong secondary text |
| `--gray-900` | `#16202A` | Primary text |

### Semantic and Highlight Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#18A957` | Positive status |
| `--warning` | `#F5A623` | Warning / caution emphasis |
| `--error` | `#D93846` | Error / destructive messaging |
| `--info` | `#049FD9` | Informational highlight |

### Color Usage Rules
- Blue should always feel clearly interactive or clearly branded.
- Deep navy is ideal for immersive technology storytelling sections.
- Light gray surfaces should simplify dense content, not decorate it.
- Avoid using too many accent colors in the same module; Cisco reads best when blue leads.

---

## 3. Typography Rules

### Font Stack

```css
/* Cisco web UI */
--font-sans: 'CiscoSansTT', 'Helvetica Neue', Arial, sans-serif;
--font-display: 'CiscoSansTT', 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 56px | 700 | 1.05 | -0.02em | Large campaign / homepage hero |
| Page Title | 40px | 700 | 1.1 | -0.015em | Major section title |
| Section Title | 30px | 600 | 1.15 | -0.01em | Product / solution section |
| Card Title | 22px | 600 | 1.2 | -0.01em | Mosaic and feature modules |
| Subsection | 18px | 600 | 1.35 | 0 | Utility headers |
| Body | 16px | 400 | 1.6 | 0 | Standard copy |
| Small Body | 14px | 400 | 1.5 | 0 | Metadata, supportive copy |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons, chips, nav |
| Caption | 12px | 500 | 1.4 | 0.02em | Eyebrows, utility text |

### Typography Philosophy
Cisco typography is **clear, modern, and enterprise-readable**. It should support technical storytelling at scale without becoming visually stiff. Large headings can be ambitious, but supporting text must stay direct and easy to parse.

### Practical Rules
- Keep headlines concise and outcome-oriented.
- Use blue link styling consistently so interaction remains obvious.
- Prefer readable copy widths and short CTA labels.
- Avoid decorative font experiments; the strength comes from scale, not novelty.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #049FD9;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid transparent;
  border-radius: 999px;
  font: 600 14px/1 'CiscoSansTT', 'Helvetica Neue', Arial, sans-serif;
  transition: background 140ms ease, transform 140ms ease;
}

.button-primary:hover {
  background: #0B5CAB;
}

.button-primary:active {
  transform: translateY(1px);
}

.button-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(4, 159, 217, 0.2);
}
```

#### Ghost Button
```css
.button-ghost {
  background: transparent;
  color: #049FD9;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #049FD9;
  border-radius: 999px;
  font-weight: 600;
}

.button-ghost:hover {
  background: rgba(4, 159, 217, 0.08);
}
```

#### Text CTA
```css
.button-text {
  background: transparent;
  color: #049FD9;
  min-height: 32px;
  padding: 0;
  border: none;
  font-weight: 600;
}

.button-text:hover {
  color: #0B5CAB;
  text-decoration: underline;
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
  color: #16202A;
  border: 1px solid #E6ECF2;
  border-radius: 12px;
  font: 400 16px/1.2 'CiscoSansTT', 'Helvetica Neue', Arial, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #049FD9;
  box-shadow: 0 0 0 3px rgba(4, 159, 217, 0.16);
}

.input::placeholder {
  color: #6B7785;
}
```

#### Form Label
```css
.input-label {
  display: block;
  margin-bottom: 8px;
  color: #16202A;
  font: 600 14px/1.3 'CiscoSansTT', 'Helvetica Neue', Arial, sans-serif;
}

.input-helper {
  margin-top: 8px;
  color: #6B7785;
  font: 400 12px/1.4 'CiscoSansTT', 'Helvetica Neue', Arial, sans-serif;
}
```

### Cards and Content Blocks

#### Mosaic Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #E6ECF2;
  border-radius: 20px;
  overflow: hidden;
}

.card-body {
  padding: 24px;
}
```

#### Dark Feature Card
```css
.card-dark {
  background: linear-gradient(180deg, #0F1F33 0%, #07111F 100%);
  color: #FFFFFF;
  border-radius: 24px;
  padding: 32px;
}
```

#### Insight Tile
```css
.tile {
  background: #F5F7FA;
  border-radius: 16px;
  padding: 20px;
}
```

---

## 5. Layout Principles

### Responsive Breakpoints
Cisco’s digital guidelines explicitly require a mobile-first responsive grid.

| Breakpoint | Range | Use |
|------------|-------|-----|
| Mobile | `320px - 599px` | Handset |
| Small Tablet | `600px - 767px` | Large phone / small tablet |
| Tablet | `768px - 1023px` | Tablet |
| Desktop | `1024px - 1279px` | Standard desktop |
| Large Desktop | `1280px - 1600px` | Wide desktop |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Fine adjustments |
| `--space-sm` | `8px` | Tight UI spacing |
| `--space-md` | `16px` | Standard internal spacing |
| `--space-lg` | `24px` | Card padding / module gaps |
| `--space-xl` | `32px` | Section spacing |
| `--space-2xl` | `48px` | Major content separation |
| `--space-3xl` | `64px` | Large layout spacing |

### Layout Rules
- Design mobile first, then scale up.
- Keep headline, description, and CTA copy tightly constrained.
- Use modular hero and mosaic sections to simplify complex stories.
- Keep pages light, fast, and easy to scan despite technical subject matter.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | `#FFFFFF` | Core content surfaces |
| Soft Section | `#F5F7FA` | Alternate section background |
| Card | White + light border | Standard modules |
| Immersive | Navy / gradient dark surfaces | Hero and AI storytelling |

### Shadow System
Cisco depth is subtle. It supports modular cards, but the brand relies more on color contrast and image drama than on strong shadows.

```css
.shadow-soft {
  box-shadow: 0 8px 20px rgba(15, 31, 51, 0.08);
}

.shadow-immersive {
  box-shadow: 0 16px 40px rgba(7, 17, 31, 0.18);
}
```

### Depth Rules
- Use shadow gently on white cards.
- Let dark gradients and vivid imagery create the premium feel.
- Avoid crowded layers; Cisco interfaces should feel light and straightforward.

---

## 7. Do's and Don'ts

### Do
- Keep actions clear, focused, and visibly clickable.
- Use blue consistently for links and key actions.
- Design mobile first and maintain readability on smaller screens.
- Use technical imagery and dark gradients selectively for impact.
- Break complex concepts into modular content sections.

### Don't
- Hide actions behind ambiguous styling.
- Overload a module with too many accent colors.
- Let hero copy or CTA counts become verbose.
- Build dense pages that feel heavy on mobile.
- Use mystery navigation or overly clever interaction patterns.

---

## 8. Responsive Behavior

### Responsive Rules
- Assume all major content patterns must work from `320px` upward.
- Hide or shorten secondary descriptions on smaller hero formats when needed.
- Keep touch targets generous for CTA-heavy pages.
- Let cards stack earlier rather than shrinking unreadably.
- Use concise copy and image-safe text treatments because responsive cropping is expected.

### Mobile Character
Cisco mobile experiences should feel intentional, not compressed. The structure, CTA clarity, and brand blue interactivity all need to remain obvious on narrow screens and limited bandwidth connections.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: technical, future-facing, business-clear, mobile-aware
- **Primary color**: Cisco blue `#049FD9`
- **Dark surface**: navy `#0F1F33`
- **Typography**: CiscoSansTT / neutral enterprise sans
- **Layout**: modular hero + card system, mobile-first
- **Components**: pill CTAs, white cards, dark feature blocks, readable technical copy

### Prompt Snippet

```text
Design this interface in the style of Cisco's current web presence. Use bright Cisco blue (#049FD9) for primary actions and links, deep navy gradients for immersive technology sections, crisp enterprise sans typography, rounded CTA buttons, and modular content cards. The result should feel global-enterprise, AI-era, and highly readable, with mobile-first structure and clear action hierarchy.
```
