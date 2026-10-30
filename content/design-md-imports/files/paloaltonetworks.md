# Palo Alto Networks Design System

> Cybersecurity platform design with black-and-white authority, saturated brand accents, and clear enterprise hierarchy. Palo Alto Networks frames AI and security through strong contrast, large strategic statements, and modular platform storytelling.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Palo Alto Networks communicates **security leadership at enterprise scale**. The experience should feel authoritative, modern, and decisive, with enough visual intensity to signal urgency without turning chaotic.

### Mood & Feeling
- **Secure**: trust and seriousness are central
- **Strategic**: the platform story should feel large-scale and future-oriented
- **Confident**: layouts and copy should feel decisive
- **Technical**: AI, cloud, and network security must feel real and current
- **Enterprise-clear**: broad platform value should remain easy to scan

### Design Density
**Medium density**. The site covers many platforms and industries, but it keeps the narrative structured through strong hero sections, proof blocks, and product pathways.

### Visual Character
- Black, white, and dark neutrals as the base
- Strong brand accent hues tied to product families
- Large statements, modular cards, and platform proof sections
- Clear CTA emphasis without clutter
- Serious but modern security tone

---

## 2. Color Palette & Roles

### Core Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--pan-black` | `#111111` | Primary dark text and background |
| `--pan-white` | `#FFFFFF` | Main light surface |
| `--pan-red` | `#E24329` | Brand accent and strong CTA cue |
| `--pan-purple` | `#7C3AED` | Product-family accent |
| `--pan-teal` | `#00A3A3` | Platform or AI-support accent |

### Neutral Support

| Token | Hex | Role |
|-------|-----|------|
| `--gray-100` | `#F5F7FA` | Soft light background |
| `--gray-300` | `#D8E1E8` | Border and divider |
| `--gray-500` | `#6B7280` | Secondary text |
| `--gray-800` | `#1F2937` | Strong secondary text |

### Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#16A34A` | Positive state |
| `--warning` | `#D97706` | Warning or caution |
| `--danger` | `#DC2626` | Error / destructive |
| `--info` | `#2563EB` | Informational state |

### Color Usage Rules
- Use dark neutrals to establish authority and seriousness.
- Apply red as the strongest immediate emphasis.
- Use secondary brand hues to support category separation, not to create noise.

---

## 3. Typography Rules

### Font Stack

```css
/* Modern security-enterprise sans */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 56px | 700 | 1.04 | -0.02em | Main strategic statement |
| Page Title | 40px | 700 | 1.1 | -0.015em | Major title |
| Section Title | 28px | 600 | 1.15 | -0.01em | Platform section heading |
| Card Title | 20px | 600 | 1.25 | 0 | Product or proof card |
| Body | 16px | 400 | 1.6 | 0 | Standard content |
| Small Body | 14px | 400 | 1.5 | 0 | Supporting text |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and utility labels |
| Code | 13px | 400 | 1.5 | 0 | Technical identifiers |

### Typography Philosophy
Palo Alto Networks typography should feel **bold, clear, and high-trust**. It needs to support both strategic narratives and direct product messaging without visual hesitation.

### Practical Rules
- Use short, confident headlines.
- Structure proof points and metrics to scan quickly.
- Preserve strong contrast in all brand and product sections.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #E24329;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #E24329;
  border-radius: 999px;
  font: 600 14px/1 Inter, sans-serif;
}

.button-primary:hover {
  background: #C93A21;
  border-color: #C93A21;
}
```

#### Secondary Button
```css
.button-secondary {
  background: #FFFFFF;
  color: #111111;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #D8E1E8;
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
  border: 1px solid #D8E1E8;
  border-radius: 12px;
  font: 400 16px/1.2 Inter, sans-serif;
}
```

### Cards and Platform Panels

#### Feature Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #D8E1E8;
  border-radius: 20px;
  padding: 24px;
}
```

#### Dark Security Panel
```css
.security-panel {
  background: #111111;
  color: #FFFFFF;
  border-radius: 24px;
  padding: 28px;
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
| `--space-8` | `48px` | Major grouping |
| `--space-10` | `64px` | Large hero rhythm |

### Layout Rules
- Use large strategic hero statements followed by modular proof sections.
- Separate platforms and product families into clearly bounded blocks.
- Preserve strong CTA visibility without overwhelming the story.
- Use metrics and logos to reinforce scale and trust.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Light base | white or light neutral field | Main informational surface |
| Feature card | white bounded module | Product grouping |
| Security panel | dark brand surface | High-importance technical or platform narrative |
| Overlay | elevated surface | Modal, contact, or trial flow |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 8px 18px rgba(17, 17, 17, 0.08);
}

.shadow-panel {
  box-shadow: 0 18px 30px rgba(17, 17, 17, 0.16);
}
```

### Depth Rules
- Use contrast and sectioning first, shadow second.
- Keep dark panels purposeful and high impact.
- Let proof and product blocks stay crisp and bounded.

---

## 7. Do's and Don'ts

### Do
- Use red as a focused high-priority brand cue.
- Keep security messaging clear and high-trust.
- Use modular sections for product-family storytelling.
- Maintain strong contrast and decisive action hierarchy.

### Don't
- Overuse secondary accent hues in one view.
- Let dark security panels dominate every section.
- Turn platform storytelling into vague AI-themed decoration.
- Make critical CTAs visually ambiguous.

---

## 8. Responsive Behavior

### Responsive Rules
- Stack platform and proof cards cleanly on smaller screens.
- Keep strategic CTAs visible early in the mobile layout.
- Preserve strong contrast and readability in dark panels.
- Simplify proof density before shrinking core headlines too far.

### Mobile Character
Palo Alto Networks mobile should still feel authoritative and modern. The experience can simplify, but the security-first seriousness and strong CTA structure should remain intact.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: authoritative, secure, strategic
- **Primary accent**: Palo Alto red `#E24329`
- **Core palette**: black, white, dark neutral, selective product accents
- **Layout**: large hero statements with modular proof blocks
- **Components**: pill CTAs, clean cards, dark security panels

### Prompt Snippet

```text
Design this interface in the style of Palo Alto Networks’ current website. Use black and white as the foundation, Palo Alto red (#E24329) for primary emphasis, dark security panels for high-impact platform messaging, and clean enterprise typography. The result should feel authoritative, modern, and strategically focused rather than cluttered or generic.
```

