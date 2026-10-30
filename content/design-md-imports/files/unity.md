# Unity Design System

> Creator-platform design with dark technical confidence and game-industry energy. Unity’s current web presence leans on black-and-white contrast, cool slate surfaces, bold product screenshots, and clean creator-focused hierarchy.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Unity feels like **serious tools for real-time creation**. The brand frames a huge ecosystem of game development, monetization, cloud, and AI features inside a dark, product-led visual language. The experience is clean and modern, with enough edge to feel developer-oriented without becoming intimidating.

### Mood & Feeling
- **Creator-first**: the platform should feel empowering and practical
- **Technical**: product credibility matters more than lifestyle gloss
- **Current**: AI, multiplayer, and growth tooling feel integrated into one system
- **Community-aware**: documentation, learning, and showcase content feel approachable
- **Confident**: strong monochrome contrast anchors the entire experience

### Design Density
**Medium density**. Unity surfaces often mix feature summaries, product entry points, and documentation pathways, but visual clarity remains strong because the design stays modular and contrast-driven.

### Visual Character
- Black, white, and cool gray dominate the core UI
- Product screenshots and real game imagery add most of the color
- Rounded panels and cards create a softer technical feel
- Navigation and CTAs are clean and understated
- Layouts are modular, simple, and product-forward

---

## 2. Color Palette & Roles

### Core Brand Palette

| Token | Hex | Role |
|-------|-----|------|
| `--unity-black` | `#111111` | Primary dark background |
| `--unity-white` | `#FFFFFF` | Primary light foreground / surface |
| `--slate-900` | `#1A1F28` | Dense dark card / navbar surface |
| `--slate-700` | `#2A313D` | Secondary dark surface |
| `--slate-400` | `#A5ACB8` | Secondary text |
| `--slate-200` | `#D4DAE3` | Borders and soft separators |

### Supporting Accents

| Token | Hex | Role |
|-------|-----|------|
| `--creator-blue` | `#7BC8FF` | Product accent, info highlight |
| `--creator-blue-dark` | `#4EA9EB` | Hover / active highlight |
| `--mint` | `#78E6C8` | Success accent / soft emphasis |
| `--violet` | `#8E82FF` | AI / experimental category accent |

### Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#2EC27E` | Success |
| `--warning` | `#F2B544` | Warning |
| `--danger` | `#E5484D` | Error / destructive |

### Color Usage Rules
- Let black and white define the structure.
- Use accent colors sparingly to point at features or categories.
- Allow product screenshots and game stills to provide most of the visual color.
- Avoid rainbow UI; Unity feels strongest when the interface itself stays restrained.

---

## 3. Typography Rules

### Font Stack

```css
/* Unity-style digital product sans */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, Consolas, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 56px | 700 | 1.02 | -0.03em | Homepage hero |
| Page Title | 42px | 700 | 1.08 | -0.02em | Major title |
| Section Title | 30px | 600 | 1.15 | -0.01em | Product section title |
| Card Title | 22px | 600 | 1.2 | -0.01em | Feature / card heading |
| Subsection | 18px | 600 | 1.35 | 0 | Support heading |
| Body | 16px | 400 | 1.6 | 0 | Main content |
| Small Body | 14px | 400 | 1.5 | 0 | Secondary content |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and nav |
| Code | 13px | 400 | 1.5 | 0 | Technical references |

### Typography Philosophy
Unity typography is **modern, clean, and platform-oriented**. The goal is to support long technical reading, product discovery, and creator education without visual noise.

### Practical Rules
- Use bold headlines, but keep body copy pragmatic.
- Favor clean, compact labels for product actions.
- Let screenshots and diagrams carry the expressive tone.
- Keep mono styles reserved for docs and API-adjacent surfaces.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #FFFFFF;
  color: #111111;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #FFFFFF;
  border-radius: 999px;
  font: 600 14px/1 Inter, sans-serif;
}

.button-primary:hover {
  background: #E8EDF3;
}

.button-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(123, 200, 255, 0.25);
}
```

#### Secondary Button
```css
.button-secondary {
  background: transparent;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #A5ACB8;
  border-radius: 999px;
  font-weight: 600;
}

.button-secondary:hover {
  border-color: #FFFFFF;
}
```

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  min-height: 44px;
  padding: 0 14px;
  background: #1A1F28;
  color: #FFFFFF;
  border: 1px solid #2A313D;
  border-radius: 14px;
  font: 400 16px/1.2 Inter, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #7BC8FF;
  box-shadow: 0 0 0 3px rgba(123, 200, 255, 0.14);
}

.input::placeholder {
  color: #A5ACB8;
}
```

### Cards and Product Frames

#### Feature Card
```css
.card {
  background: #1A1F28;
  color: #FFFFFF;
  border: 1px solid #2A313D;
  border-radius: 24px;
  padding: 24px;
}
```

#### Documentation Panel
```css
.docs-panel {
  background: #FFFFFF;
  color: #111111;
  border: 1px solid #D4DAE3;
  border-radius: 20px;
  padding: 24px;
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Fine alignment |
| `--space-2` | `8px` | Tight grouping |
| `--space-4` | `16px` | Core spacing |
| `--space-5` | `24px` | Card spacing |
| `--space-6` | `32px` | Section spacing |
| `--space-8` | `48px` | Major grouping |
| `--space-10` | `64px` | Large layout rhythm |

### Layout Rules
- Build clear lanes for develop, deploy, and grow narratives.
- Alternate dark feature sections with lighter docs or learning surfaces.
- Use screenshots generously, but keep frames clean.
- Keep creator pathways obvious: engine, ads, learn, docs, community.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Dark base | black or slate | Hero and product sections |
| Dark card | bordered slate surface | Feature modules |
| Light docs panel | white with subtle border | Documentation / learning |
| Accent callout | cool accent hint + border | AI / product spotlight |

### Shadow System

```css
.shadow-dark {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.24);
}

.shadow-light {
  box-shadow: 0 8px 18px rgba(17, 17, 17, 0.08);
}
```

### Depth Rules
- Dark cards can rely on border and contrast before heavy shadow.
- Light documentation surfaces should feel calm, not glossy.
- Let screenshots create spatial richness instead of stacking too many card treatments.

---

## 7. Do's and Don'ts

### Do
- Keep the UI itself restrained and creator-focused.
- Use dark surfaces confidently.
- Let screenshots and game visuals inject color and excitement.
- Maintain simple, strong CTA patterns.
- Separate learning, docs, and product areas clearly.

### Don't
- Overdecorate navigation or basic surfaces.
- Use too many bright accents at once.
- Make technical content feel corporate or lifeless.
- Turn every card into a separate visual experiment.
- Lose readability in the pursuit of cinematic styling.

---

## 8. Responsive Behavior

### Responsive Rules
- Stack dark feature cards cleanly on tablet and mobile.
- Keep hero copy brief enough to wrap elegantly.
- Maintain strong button contrast on dark backgrounds.
- Let screenshots resize within generous rounded frames.
- Keep docs and learn surfaces usable without forcing dense mobile tables.

### Mobile Character
Unity on mobile should still feel like a professional creator platform. The dark palette, bold screenshots, and simple pathways should remain intact even when everything stacks vertically.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: creator-first, technical, modern, dark
- **Core palette**: black, white, cool slate
- **Accent use**: minimal blue, mint, or violet highlights
- **Typography**: clean modern sans
- **Layout**: modular product and docs bands
- **Components**: pill buttons, dark cards, screenshot-led sections

### Prompt Snippet

```text
Design this interface in the style of Unity's current web presence. Use a black-and-white creator-platform foundation, cool slate cards, restrained accent colors, bold product screenshots, and clean Inter-style typography. The result should feel technical, modern, and practical for game developers rather than generic SaaS or flashy consumer branding.
```
