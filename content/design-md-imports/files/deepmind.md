# DeepMind Design System

> AI research design with deep indigo identity, science-first surfaces, precision typography, and breakthrough-focused visual storytelling.

---

## 1. Visual Theme & Atmosphere

DeepMind should feel brilliant, rigorous, and forward-looking. The design language communicates AI safety, scientific discovery, AlphaFold, Gemini, and the pursuit of beneficial general intelligence.

- Mood: visionary, rigorous, optimistic, authoritative
- Density: low-to-medium, with research-focused long-form content and data visualizations
- Character: deep indigo brand, near-black scientific surfaces, neural network accent teal, protein-structure gradients

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--dm-indigo` | `#3C3CCC` | Primary brand CTA and highlights |
| `--dm-deep` | `#0A0A23` | Hero and dark scientific surfaces |
| `--dm-teal` | `#00BFA5` | Neural network and research accent |
| `--dm-cyan` | `#00E5FF` | Data visualization and flow accent |
| `--dm-purple` | `#7C3AED` | Model and architecture accent |
| `--dm-white` | `#FFFFFF` | Text on dark, content surfaces |
| `--surface-light` | `#F8F9FF` | Light research content pages |
| `--surface-dark` | `#0D0D1A` | Dark visualization panels |
| `--text-primary` | `#0A0A23` | Body copy on light surfaces |
| `--border-default` | `#E5E7EB` | Section and card borders |

Deep indigo for primary CTAs. Teal and cyan for scientific data visualization only — never as navigation or UI chrome.

## 3. Typography Rules

```css
--font-sans: "Google Sans", Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-serif: "Freight Display", Georgia, serif;
--font-mono: "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 72px | 300 | 1.0 |
| Page Title | 48px | 400 | 1.08 |
| Section Title | 32px | 400 | 1.2 |
| Research Title | 24px | 500 | 1.3 |
| Body | 18px | 400 | 1.8 |
| Caption | 14px | 400 | 1.5 |
| Label | 12px | 500 | 1.35 |

Use light weight (300-400) for display type — this conveys scientific authority without aggression.

## 4. Component Stylings

```css
.button-primary {
  min-height: 48px;
  padding: 0 28px;
  border: none;
  border-radius: 8px;
  background: #3C3CCC;
  color: #FFFFFF;
  font: 500 16px/1 "Google Sans", sans-serif;
}

.research-card {
  border: 1px solid #E5E7EB;
  border-radius: 16px;
  background: #FFFFFF;
  padding: 28px;
  overflow: hidden;
}

.dark-viz-panel {
  border-radius: 20px;
  background: #0D0D1A;
  padding: 32px;
  overflow: hidden;
}

.paper-tag {
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 999px;
  background: #EEF2FF;
  color: #3C3CCC;
  font: 500 13px/1.4 Inter, sans-serif;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-4` | `16px` | Content block rhythm |
| `--space-8` | `32px` | Section separation |
| `--space-16` | `64px` | Major page sections |
| `--space-24` | `96px` | Hero and marquee sections |

Long-form research content needs generous line-height and measure (65-75 characters). Visualizations should be given full-width treatment with no competing elements.

## 6. Depth & Elevation

```css
.shadow-card  { box-shadow: 0 4px 16px rgba(10, 10, 35, 0.08); }
.shadow-viz   { box-shadow: 0 20px 60px rgba(60, 60, 204, 0.20); }
.shadow-modal { box-shadow: 0 32px 80px rgba(10, 10, 35, 0.24); }
```

Visualization panels deserve prominent shadows to feel like portals into scientific discovery.

## 7. Do's and Don'ts

Do use thin/light weight for display typography — it reads as scientific confidence. Do give data visualizations generous space. Do cite research papers clearly. Do not use aggressive sales CTAs in research contexts. Do not clutter hero sections with multiple competing messages.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stacked research cards, simplified data viz |
| Tablet | `768px` | Two-column research grid, inline charts |
| Desktop | `1200px` | Full-bleed visualization sections, multi-column research catalog |

Give visualizations more space on every breakpoint — they carry the scientific narrative.

## 9. Agent Prompt Guide

Design like DeepMind: deep indigo CTAs, light-weight scientific typography, near-black visualization panels, teal neural-network accents, generous whitespace, and breakthrough-research visual hierarchy.
