# Confluent Design System

> Data-streaming platform design with bright coral energy, dark product framing, and concise technical storytelling. Confluent’s current site balances cloud-native momentum with enterprise readability.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Confluent communicates **real-time data infrastructure with urgency and clarity**. The system should feel technically serious, but also modular and easy to navigate across many use cases and product pathways.

### Mood & Feeling
- **Innovative**: streaming and AI ideas should feel current
- **Credible**: the platform must read as enterprise-grade
- **Energetic**: bright accent color creates forward motion
- **Modular**: capability breadth should feel grouped, not sprawling
- **Technical**: product frames and proof need to feel real

### Design Density
**Medium density**. Confluent pages cover many capabilities, but they keep readability through strong sectioning and repeated module patterns.

### Visual Character
- Coral-red accent as the strongest brand cue
- White content surfaces balanced by dark technical frames
- Short technical headlines and capability cards
- Clear CTA rhythm for demos, trials, and product exploration

---

## 2. Color Palette & Roles

### Core Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--confluent-coral` | `#FF5F46` | Primary accent and CTA emphasis |
| `--confluent-coral-dark` | `#E84A32` | Hover / active state |
| `--confluent-coral-soft` | `#FFE7E1` | Soft highlighted surface |

### Neutral and Dark Surfaces

| Token | Hex | Role |
|-------|-----|------|
| `--ink-strong` | `#132238` | Primary text |
| `--ink-default` | `#334155` | Body text |
| `--ink-muted` | `#64748B` | Secondary text |
| `--surface-page` | `#F8FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Card surface |
| `--surface-dark` | `#0F172A` | Product / technical frame |
| `--border-default` | `#E2E8F0` | Border and divider |

### Supportive Colors

| Token | Hex | Role |
|-------|-----|------|
| `--blue` | `#3B82F6` | Informational emphasis |
| `--green` | `#16A34A` | Success / positive state |
| `--yellow` | `#EAB308` | Caution state |

### Color Usage Rules
- Use coral as the clearest brand and action signal.
- Let neutral surfaces carry most layout structure.
- Use dark product frames to signal technical depth and demo realism.

---

## 3. Typography Rules

### Font Stack

```css
/* Modern data-platform sans */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 56px | 700 | 1.04 | -0.02em | Main hero headline |
| Page Title | 40px | 700 | 1.1 | -0.015em | Major title |
| Section Title | 28px | 600 | 1.15 | -0.01em | Capability heading |
| Card Title | 20px | 600 | 1.25 | 0 | Feature card |
| Body | 16px | 400 | 1.6 | 0 | Standard content |
| Small Body | 14px | 400 | 1.5 | 0 | Supporting copy |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and controls |
| Code | 13px | 400 | 1.5 | 0 | Technical examples |

### Typography Philosophy
Confluent typography should feel **current, technical, and concise**. The hierarchy needs to help users scan platform breadth without fatigue.

### Practical Rules
- Keep headlines short and momentum-oriented.
- Use modular body copy chunks rather than long essays.
- Use mono for technical snippets and code-adjacent values.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #FF5F46;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #FF5F46;
  border-radius: 999px;
  font: 600 14px/1 Inter, sans-serif;
}

.button-primary:hover {
  background: #E84A32;
  border-color: #E84A32;
}
```

#### Secondary Button
```css
.button-secondary {
  background: #FFFFFF;
  color: #132238;
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
  color: #132238;
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  font: 400 16px/1.2 Inter, sans-serif;
}
```

### Cards and Product Frames

#### Feature Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
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
| `--space-10` | `64px` | Large rhythm |

### Layout Rules
- Break the platform story into clear capability and use-case bands.
- Repeat CTA patterns for demo, trial, and product exploration.
- Use product screenshots and proof blocks to reinforce credibility.
- Keep the experience scannable even when broad.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Light base | light neutral page field | Narrative and overview |
| Feature card | white bounded module | Capability grouping |
| Dark frame | dark technical surface | Product and demo focus |
| Overlay | elevated light surface | Form or modal |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 8px 18px rgba(19, 34, 56, 0.08);
}

.shadow-dark {
  box-shadow: 0 18px 30px rgba(15, 23, 42, 0.18);
}
```

### Depth Rules
- Use white cards and dark frames intentionally.
- Let screenshots and real UI add technical richness.
- Keep the main layout airy and uncluttered.

---

## 7. Do's and Don'ts

### Do
- Use coral as the main action and brand cue.
- Keep platform breadth modular.
- Use dark frames to anchor technical storytelling.
- Preserve clear CTA hierarchy and visual rhythm.
- Make technical concepts feel manageable.

### Don't
- Flood the interface with bright accents.
- Turn product narratives into vague AI visual effects.
- Overload single cards with too much text.
- Let screenshots feel detached from surrounding layout.

---

## 8. Responsive Behavior

### Responsive Rules
- Stack feature cards and product frames cleanly on smaller screens.
- Keep demo and trial actions visible early in the flow.
- Simplify proof density before shrinking type too far.
- Preserve strong card and section boundaries on mobile.

### Mobile Character
Confluent mobile should still feel energetic and technical. The coral-led hierarchy and modular product story should remain strong even when vertically stacked.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: innovative, technical, modular
- **Primary accent**: coral `#FF5F46`
- **Core structure**: light neutral base with dark product frames
- **Typography**: concise modern enterprise sans
- **Components**: pill CTAs, feature cards, dark showcases

### Prompt Snippet

```text
Design this interface in the style of Confluent’s current data streaming platform website. Use coral-red (#FF5F46) for primary emphasis, clean neutral surfaces, dark product showcase frames, and concise modern typography. The result should feel energetic, cloud-native, and technically credible without becoming noisy.
```
