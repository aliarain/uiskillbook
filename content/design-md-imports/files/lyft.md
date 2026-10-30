# Lyft Design System

> Rideshare mobility with human warmth. Lyft's live surfaces serve `Rubik` as the primary brand font, combining deep magenta-black foundations (`#1A1A2E`, `#0A0A0F`) with vibrant pink-magenta brand accents (`#EA0B8C`, `#FF00BF`) and clean whites and light grays (`#FFFFFF`, `#F8F8F8`) for product surfaces.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Lyft feels like **approachable mobility with an electric, human personality**. The brand system leads with bold magenta energy on dark backgrounds for marketing, then resolves into clean, action-oriented product UI for the core ride experience. The visual language is confident, friendly, and direct — never corporate or cold.

### Mood & Feeling
- **Human warmth**: Friendly and approachable, not robotic or transactional
- **Vibrant confidence**: Bold pink/magenta energy sets Lyft apart from utilitarian competitors
- **Safety and trust**: Clean hierarchy and clear CTAs in the core ride flow
- **Community spirit**: Driver and rider experiences given equal design investment
- **Urban energy**: Motion, night city imagery, and glowing accent use suggest movement and city life

### Design Density
**Low-to-medium density** in product flows (one primary action per screen), **high energy** on marketing. The ride request flow is stripped to essentials with a single, unmissable CTA at all times.

### Visual Character
- Dark backgrounds on marketing and brand surfaces
- Bright magenta-pink as the signature accent and primary CTA color
- Map as the dominant product surface — UI floats above it
- Rounded, pill-shaped buttons for all primary actions
- Photography features real drivers and riders, warm and candid
- Clear dark/light split: dark for brand, white for in-app

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--lyft-white` | `#FFFFFF` | App surface, cards, inputs |
| `--lyft-surface` | `#F8F8F8` | Background fill, screen canvas |
| `--lyft-dark` | `#0A0A0F` | Brand dark background (marketing) |
| `--lyft-dark-soft` | `#1A1A2E` | Secondary dark section |
| `--lyft-text-primary` | `#1A1A1A` | Primary text on light surfaces |
| `--lyft-text-dark` | `#FFFFFF` | Text on dark brand surfaces |

### Brand and Primary Accents

| Token | Hex | Role |
|-------|-----|------|
| `--lyft-pink` | `#EA0B8C` | Primary brand accent, CTA background |
| `--lyft-pink-bright` | `#FF00BF` | Hover states, gradient endpoint |
| `--lyft-pink-soft` | `#FDE8F5` | Tinted backgrounds, selected states |
| `--lyft-pink-glow` | `rgba(234,11,140,0.25)` | Focus rings, shadows on dark |
| `--lyft-purple` | `#7B2D8B` | Supporting brand gradient |

### Support Palette

| Token | Hex | Role |
|-------|-----|------|
| `--lyft-success` | `#00C48C` | Confirmation, driver arrived, positive states |
| `--lyft-danger` | `#FF3B30` | Errors, cancellation, alerts |
| `--lyft-warning` | `#FF9F0A` | Surge pricing, time-sensitive info |
| `--lyft-surge` | `#FF6B35` | Surge multiplier highlights |
| `--lyft-map-accent` | `#EA0B8C` | Pickup pin, route line |

### Surface and Border Scale

| Token | Hex | Role |
|-------|-----|------|
| `--surface-0` | `#FFFFFF` | Cards, bottom sheets |
| `--surface-100` | `#F8F8F8` | Screen canvas |
| `--surface-200` | `#F0F0F0` | Input backgrounds |
| `--border-light` | `#E8E8E8` | Card borders, separators |
| `--border-mid` | `#D4D4D4` | Input borders, stronger dividers |
| `--text-secondary` | `#767676` | Metadata, timestamps, captions |
| `--text-tertiary` | `#AEAEAE` | Hints, placeholders |

### Dark Brand Scale

| Token | Hex | Role |
|-------|-----|------|
| `--dark-900` | `#0A0A0F` | Deepest marketing background |
| `--dark-800` | `#1A1A2E` | Section background |
| `--dark-700` | `#2A2A4A` | Card on dark surface |
| `--dark-600` | `#3A3A5A` | Elevated dark element |
| `--dark-border` | `rgba(255,255,255,0.12)` | Subtle border on dark |

---

## 3. Typography Rules

### Font Stack

```css
/* Lyft brand and UI font */
--font-brand: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI',
              'Helvetica Neue', sans-serif;

/* System fallback for native app surfaces */
--font-system: -apple-system, BlinkMacSystemFont, 'Segoe UI',
               'Roboto', sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 56px | 700 | 1.05 | -0.03em | `--lyft-text-dark` |
| Page Title | 40px | 700 | 1.1 | -0.02em | `--lyft-text-dark` |
| Section Title | 28px | 700 | 1.2 | -0.015em | `--lyft-text-primary` |
| Card Title | 20px | 600 | 1.25 | -0.01em | `--lyft-text-primary` |
| Body | 16px | 400 | 1.55 | 0 | `--lyft-text-primary` |
| Small Body | 14px | 400 | 1.5 | 0 | `--text-secondary` |
| Label | 13px | 500 | 1.3 | 0.02em | `--text-secondary` |
| CTA Button | 17px | 600 | 1.2 | 0 | `#FFFFFF` |
| Price Display | 32px | 700 | 1.1 | -0.01em | `--lyft-text-primary` |

### Font Weights

| Weight | Name | Usage |
|--------|------|-------|
| 400 | Regular | Body, captions, metadata |
| 500 | Medium | Labels, secondary actions |
| 600 | Semibold | Card titles, CTA text, key info |
| 700 | Bold | Display, hero, price callouts |

### Typography Philosophy
Lyft typography is **bold and approachable**. Rubik's rounded geometry gives the brand warmth without childishness. Display headlines on marketing pages use tight tracking and maximum weight. Product UI keeps type clear and large — this is a one-thumb app used while moving.

---

## 4. Component Stylings

### Buttons

#### Primary CTA (Pill)
```css
.button-primary {
  background: #EA0B8C;
  color: #ffffff;
  height: 56px;
  padding: 0 32px;
  border: none;
  border-radius: 999px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0;
  transition: background 150ms ease, transform 100ms ease;
}

.button-primary:hover {
  background: #FF00BF;
  transform: translateY(-1px);
}

.button-primary:active {
  transform: translateY(0);
}

.button-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(234, 11, 140, 0.35);
}
```

#### Secondary Action
```css
.button-secondary {
  background: #F0F0F0;
  color: #1A1A1A;
  border: none;
  border-radius: 999px;
  height: 48px;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 600;
}

.button-secondary:hover {
  background: #E4E4E4;
}
```

### Cards and Bottom Sheets

```css
.card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.bottom-sheet {
  background: #ffffff;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -4px 32px rgba(0, 0, 0, 0.12);
}
```

### Inputs

```css
.input {
  background: #F0F0F0;
  color: #1A1A1A;
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 16px;
  transition: border-color 150ms ease, background 150ms ease;
}

.input:focus {
  background: #FFFFFF;
  border-color: #EA0B8C;
  box-shadow: 0 0 0 3px rgba(234, 11, 140, 0.12);
}
```

### Map Interface
- Full-screen map as the base layer for all ride-request flows
- Lyft pink pin for pickup location; gray or blue pin for dropoff
- Route polyline in Lyft pink with rounded line caps
- Driver location marker with car icon and directional heading
- Bottom sheet floats above the map with ride options and CTA

### Navigation
- Bottom tab bar on mobile: Home, Activity, Account (icon + label)
- Active tab uses Lyft pink icon color
- Hamburger/profile menu for secondary navigation
- Top bar on detail screens with back arrow and screen title

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Tight UI rhythm |
| `--space-2` | `8px` | Component internals |
| `--space-3` | `12px` | Icon-to-label gaps |
| `--space-4` | `16px` | Standard padding |
| `--space-5` | `20px` | Card padding |
| `--space-6` | `24px` | Section spacing |
| `--space-7` | `32px` | Module gaps |
| `--space-8` | `48px` | Screen section margins |
| `--space-9` | `64px` | Hero padding |
| `--space-10` | `96px` | Marketing section spacing |

### Layout Behavior
- Mobile-first: single-column stacked layout with one primary action per screen
- Map takes the full viewport; UI is overlaid via bottom sheet pattern
- Marketing pages: full-bleed dark sections with centered content, max-width ~1200px
- Ride option list: horizontal scrollable tiles or vertical stacked cards
- Price and ETA given maximum visual weight (largest type, most prominent position)

### Whitespace Philosophy
Lyft whitespace is **intentional and generous in product flows**. Each screen focuses on a single decision. Marketing uses tight, punchy layouts with negative space serving to isolate the bold headline and CTA, not to signal premium positioning.

---

## 6. Depth & Elevation

### Elevation Strategy
Lyft uses **layered floating UI over the map canvas**. The primary depth story is bottom sheet elevation against the full-screen map. Marketing surfaces use dark-to-pink gradients for depth rather than shadows.

### Shadow Language

```css
--shadow-card: 0 4px 20px rgba(0, 0, 0, 0.08);
--shadow-bottom-sheet: 0 -4px 32px rgba(0, 0, 0, 0.12);
--shadow-modal: 0 12px 48px rgba(0, 0, 0, 0.16);
--shadow-cta: 0 8px 24px rgba(234, 11, 140, 0.30);
--shadow-focus: 0 0 0 3px rgba(234, 11, 140, 0.25);
```

### Surface Hierarchy
- Base: map canvas or `#F8F8F8` screen background
- Cards and list items: white with soft shadow
- Bottom sheets: white with top-edge shadow, large radius
- Modals: white with strong shadow + dark scrim `rgba(0,0,0,0.5)`
- Marketing dark sections: `#0A0A0F` with pink glow accents

---

## 7. Do's and Don'ts

### Do
- Use the pink pill button as the unmistakable primary action
- Keep product flows to one clear action per screen
- Give price and ETA the largest type weight on ride-selection screens
- Use the map as the hero surface in ride flows — don't obscure it unnecessarily
- Apply bold Rubik type for all marketing headlines

### Don't
- Don't use Lyft pink for destructive or error states — reserve it for positive/primary actions
- Don't add decorative complexity to the ride request flow; clarity is the feature
- Don't use thin or light font weights for interactive elements
- Don't design multi-column dense layouts for the mobile product — it's a one-thumb, one-action app
- Don't apply the dark brand treatment to in-app product surfaces; keep those light and clean

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 480px` | Full-screen map, bottom sheet UI, bottom tab nav |
| Tablet | `480px - 1023px` | Wider bottom sheet, optional side panel for trip info |
| Desktop | `1024px+` | Marketing site layout; full-bleed dark sections, centered max-width content |

### Responsive Rules
- The core product experience is mobile-only; desktop is marketing and account management
- Bottom tab navigation collapses into a top navigation bar on desktop/tablet
- Bottom sheets become centered modals on larger screens
- Map interactions on web use standard cursor-based pan/zoom
- Marketing pages use full-bleed sections that adapt to viewport width with centered content columns

---

## 9. Agent Prompt Guide

### Quick Reference
- **Foundation**: white/light-gray in-app surfaces; near-black dark brand surfaces for marketing
- **Typography**: Rubik — bold display, rounded geometry, human and direct
- **Shape language**: pill buttons (999px radius), 12–16px card radius, 20px bottom sheet radius
- **Mood**: vibrant rideshare energy — confident, warm, pink-forward, one-action-at-a-time

### Prompt Template
```text
Design this like Lyft:
- White app surfaces (#FFFFFF, #F8F8F8) for product UI
- Electric magenta-pink (#EA0B8C) for all primary CTAs and key accent use
- Pill-shaped buttons (border-radius: 999px) for every primary action
- Map as the hero canvas; UI floats above via bottom sheet
- Rubik bold for headlines; clean system font fallback for body
- Dark brand marketing sections (#0A0A0F) with pink gradient glow accents
- One primary action per screen — clarity and confidence over density
```

### Avoid
- Muted or pastel versions of the pink — Lyft's accent is vivid and saturated
- Flat corporate layouts without the map-as-canvas spatial metaphor
- Small or thin typography that doesn't work at arm's length on mobile
- Blue as a primary accent (Lyft deliberately uses pink to distinguish from Uber)
- Dense information-heavy layouts in ride flows; keep it one decision at a time
