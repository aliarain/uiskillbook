# Mistral Design System

> Frontier AI platform design with sharp black foundations, a warm orange-to-yellow signature spectrum, and highly controlled enterprise product framing. Mistral combines open-model energy with direct, no-frills presentation so the interface feels capable, configurable, and technically serious.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Mistral communicates **frontier AI with European technical restraint**. The live brand system pairs stark black, a distinctive warm rainbow spectrum, and utilitarian typography. The result is bold and modern without looking ornamental or consumer-soft.

### Mood & Feeling
- **Capable**: the platform should feel production-ready and powerful
- **Direct**: copy and UI should be efficient, not overly embellished
- **Configurable**: the system should suggest flexibility and control
- **Modern**: brand moments should feel current and visually sharp
- **Private-by-design**: enterprise deployment and data control need visible weight

### Design Density
**Medium density**. Marketing sections are spacious and image-led, while docs and product surfaces become tighter, more modular, and action-oriented.

### Visual Character
- Hard black and charcoal foundations
- Distinctive orange-yellow rainbow accents from the official brand kit
- Clean beige support tones to soften stark contrast when needed
- Large bold headlines with minimal ornament
- Product modules that feel precise, framed, and operational
- Strong contrast between brand sections and practical docs surfaces

---

## 2. Color Palette & Roles

### Official Mistral Rainbow

| Token | Hex | Role |
|-------|-----|------|
| `--mistral-red` | `#E10500` | Warmest high-energy accent |
| `--mistral-orange-dark` | `#FA500F` | Strong CTA and brand emphasis |
| `--mistral-orange` | `#FF8205` | Primary brand accent |
| `--mistral-orange-light` | `#FFAF00` | Secondary highlight |
| `--mistral-yellow` | `#FFD800` | Bright highlight and spectrum endpoint |

### Supporting Neutrals

| Token | Hex | Role |
|-------|-----|------|
| `--beige-light` | `#FFFAEB` | Soft brand background |
| `--beige-medium` | `#FFF0C3` | Highlighted surface |
| `--beige-dark` | `#E9E2CB` | Warm neutral support |
| `--black` | `#000000` | Strongest background / text |
| `--black-tinted` | `#1E1E1E` | Default dark surface |

### Interface Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--surface-page` | `#FFFFFF` | Docs and light app canvas |
| `--surface-card` | `#FFFFFF` | Cards and modules |
| `--surface-dark` | `#1E1E1E` | Dark panels |
| `--ink-strong` | `#000000` | Headlines and key text |
| `--ink-default` | `#262626` | Body text |
| `--ink-muted` | `#6B7280` | Secondary text |
| `--border-default` | `#E5E7EB` | Borders and dividers |

### Color Usage Rules
- Use the warm rainbow as a controlled identity system, not a decorative splash.
- Prefer orange-dark and orange for CTAs, highlights, and key interaction moments.
- Use black or black-tinted surfaces where you need gravity, contrast, or enterprise seriousness.
- Use beige tones to soften brand-heavy moments or large empty fields.
- Avoid cool neon palettes that conflict with Mistral’s official spectrum.

---

## 3. Typography Rules

### Font Stack

```css
/* Official brand typeface */
--font-sans: Arial, Helvetica, sans-serif;

--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| Hero Display | 64px | 700 | 1.02 | Homepage hero |
| Page Title | 42px | 700 | 1.08 | Main page titles |
| Section Title | 32px | 700 | 1.15 | Major headers |
| Card Title | 22px | 700 | 1.25 | Product cards |
| Subsection | 18px | 600 | 1.35 | Secondary titles |
| Body Large | 18px | 400 | 1.65 | Intro copy |
| Body | 16px | 400 | 1.6 | Standard text |
| Small Body | 14px | 400 | 1.5 | Metadata and helper text |
| Label | 13px | 700 | 1.4 | Inputs and controls |
| Code | 13px | 500 | 1.55 | CLI, API, model IDs |

### Typography Guidance
- Use Arial confidently and keep the typography plainspoken.
- Let size, contrast, and spacing do the work instead of ornate font pairings.
- Keep headlines short, strong, and high-contrast.
- Use monospace where developer or terminal context is relevant.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #FA500F;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #FA500F;
  border-radius: 999px;
  font: 700 14px/1 Arial, Helvetica, sans-serif;
}

.button-primary:hover {
  background: #E10500;
  border-color: #E10500;
}
```

#### Secondary Button
```css
.button-secondary {
  background: transparent;
  color: #000000;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #D1D5DB;
  border-radius: 999px;
  font: 700 14px/1 Arial, Helvetica, sans-serif;
}
```

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  min-height: 46px;
  padding: 0 14px;
  background: #FFFFFF;
  color: #000000;
  border: 1px solid #D1D5DB;
  border-radius: 12px;
  font: 400 16px/1.2 Arial, Helvetica, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #FA500F;
  box-shadow: 0 0 0 3px rgba(250, 80, 15, 0.18);
}
```

### Dark Product Panel

```css
.product-panel {
  background: #1E1E1E;
  color: #FFFFFF;
  border-radius: 24px;
  padding: 24px;
}
```

### Docs / Feature Card

```css
.card {
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 18px;
  padding: 22px;
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Tight spacing |
| `--space-3` | `12px` | Inline support spacing |
| `--space-4` | `16px` | Core spacing |
| `--space-5` | `24px` | Card padding |
| `--space-6` | `32px` | Section grouping |
| `--space-8` | `48px` | Large composition rhythm |
| `--space-10` | `64px` | Hero spacing |

### Layout Rules
- Use strong contrast between black-led brand zones and lighter operational zones.
- Keep solution cards, product paths, and docs modules modular and easy to compare.
- Organize product navigation around tasks and capabilities, not decoration.
- Let imagery and gradient accents support the message rather than dominate the layout.
- Preserve obvious action paths for builders, buyers, and technical evaluators.

### Grid Approach
- Use a wide 12-column marketing grid with large hero statements.
- Switch to contained card grids for feature and capability comparisons.
- Use narrower reading widths in docs so technical instructions stay focused.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | white or black field | Main canvas |
| Card | bordered white module | Standard content block |
| Dark panel | charcoal surface | Product spotlight or technical module |
| Overlay | elevated light panel | Modal or focused task flow |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
}

.shadow-panel {
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.14);
}

.shadow-overlay {
  box-shadow: 0 24px 56px rgba(0, 0, 0, 0.18);
}
```

### Elevation Guidance
- On dark sections, use tonal separation and padding before relying on shadows.
- On light docs surfaces, use subtle shadow only where hierarchy needs reinforcement.
- Keep the UI crisp and controlled rather than soft or overly layered.

---

## 7. Do's and Don'ts

### Do
- Use bold contrast and direct structure.
- Keep brand color usage disciplined and purposeful.
- Make technical paths feel operational and ready for deployment.
- Favor clear action labels and tight product framing.
- Let the interface feel sharp, modern, and configurable.

### Don't
- Use overly soft, pastel consumer-app styling.
- Turn the rainbow palette into a generic gradient wash across every section.
- Add ornamental serif or editorial typography.
- Overcomplicate product layouts with decorative chrome.
- Make enterprise/privacy messaging visually lightweight.

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Single-column stack, compact hero, simplified artwork |
| Tablet | `768px` | Two-column sections where useful, preserved CTA visibility |
| Desktop | `1200px` | Wide hero statements, multi-card product framing, full nav |

### Mobile Rules
- Collapse large hero statements into compact stacked messaging.
- Keep action buttons full-width when space is tight.
- Reduce decorative brand imagery before reducing task clarity.
- Preserve at least `44px` touch targets across actions and tabs.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Theme**: frontier AI platform with direct black-and-orange technical clarity
- **Primary colors**: `#FA500F`, `#FF8205`, `#FFD800`, `#000000`, `#FFFAEB`
- **Surfaces**: black brand sections, white docs surfaces, warm beige support fields
- **Typography**: Arial headlines and body, monospace for technical detail
- **Components**: pill CTAs, rounded input fields, framed dark product panels
- **Mood**: capable, direct, configurable, privacy-conscious, modern

### Prompt Snippet

```text
Design this interface in the style of Mistral: sharp black foundations, disciplined orange-to-yellow brand accents, plain but confident Arial typography, rounded high-contrast controls, modular enterprise product cards, and a direct frontier-AI tone that emphasizes capability, privacy, and configurability.
```
