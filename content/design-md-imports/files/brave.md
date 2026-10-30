# Brave Design System

> Privacy browser design with official orange identity, dark neutral contrast, Poppins typography, and protective browsing surfaces.

---

## 1. Visual Theme & Atmosphere

Brave should feel protective, fast, and independent. The design language needs to communicate browser privacy, search, AI, rewards, wallet, and ad-blocking without becoming cluttered.

- Mood: private, bold, secure, fast, user-first
- Density: medium, with feature modules and browser/product surfaces
- Character: official orange, dark slate neutrals, purple support accents, rounded browser cards

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--brave-orange` | `#FB542B` | Official brand accent and primary CTA |
| `--brave-slate` | `#343546` | Dark text and product surface |
| `--brave-gray` | `#A0A1B2` | Secondary text and disabled state |
| `--brave-light` | `#F0F0F0` | Light background |
| `--brave-magenta` | `#A3278F` | Rewards / Web3 accent |
| `--brave-purple` | `#4F30AB` | Private AI / secondary accent |
| `--surface-card` | `#FFFFFF` | Cards and panels |
| `--border-default` | `#E5E7EB` | Dividers and controls |
| `--success` | `#16A34A` | Shield active / safe state |

Use orange as the core action and brand signal. Use purple and magenta for product families, not as generic decoration.

## 3. Typography Rules

```css
--font-sans: Poppins, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 60px | 700 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 650 | 1.2 |
| Card Title | 22px | 600 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.45 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #FB542B;
  border-radius: 999px;
  background: #FB542B;
  color: #FFFFFF;
  font: 600 14px/1 Poppins, sans-serif;
}

.shield-card {
  border: 1px solid #E5E7EB;
  border-radius: 18px;
  background: #FFFFFF;
  padding: 20px;
}

.dark-panel {
  border-radius: 20px;
  background: #343546;
  color: #FFFFFF;
  padding: 24px;
}

.input {
  min-height: 44px;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 0 14px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Status rows |
| `--space-4` | `16px` | Core rhythm |
| `--space-5` | `24px` | Cards |
| `--space-8` | `48px` | Major sections |

Lead with privacy value, then show browser, search, AI, wallet, and ads features as clear product families.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 20px rgba(52, 53, 70, 0.08); }
.shadow-panel { box-shadow: 0 18px 44px rgba(52, 53, 70, 0.16); }
```

Use depth to separate browser mockups, shield panels, and modal security states.

## 7. Do's and Don'ts

Do make privacy benefits concrete. Do use official orange and Poppins. Do not overuse Web3 visuals in core browser surfaces. Do not make security states ambiguous.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack browser features and CTAs |
| Tablet | `768px` | Two-column feature cards |
| Desktop | `1200px` | Full browser/product feature grid |

Keep shield, download, and search actions easy to reach.

## 9. Agent Prompt Guide

Design like Brave: official orange CTAs, Poppins typography, dark slate privacy panels, clean browser cards, shield/security states, and bold user-first privacy messaging.
