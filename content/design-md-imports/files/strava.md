# Strava Design System

> Energetic, athlete-first design built around a signature orange, clean white feeds, and data-rich activity cards with maps and splits. Strava's public product balances social feed familiarity with serious performance metrics, keeping everything bright, legible, and motivating.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Strava feels like **a training log crossed with a social feed**. White cards stack in a single column, each anchored by a route map and a row of bold stats, with orange marking every moment of action and achievement.

### Mood & Feeling
- Energetic, sporty, and motivating
- Community-driven and social
- Data-rich but approachable
- Bright, outdoor, and optimistic
- Competitive with a sense of accomplishment

### Design Density
**Medium-to-high density.** Activity cards pack stats, maps, kudos, and comments, but a strict single-column feed and consistent card structure keep it scannable.

### Visual Character
- Signature orange (`#FC4C02`) for CTAs, logo, and achievements
- White cards on a light gray feed background
- Route maps with orange polylines
- Three-up stat rows (distance, pace, time) with small labels above bold values
- Trophy and crown icons for segments and personal records

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--strava-orange` | `#FC4C02` | Primary brand, CTAs, route lines |
| `--strava-orange-dark` | `#E34402` | Hover/pressed state |
| `--strava-white` | `#FFFFFF` | Card surfaces |
| `--strava-feed` | `#F7F7FA` | Feed background |
| `--strava-ink` | `#242428` | Primary text |
| `--strava-ink-muted` | `#6D6D78` | Secondary text, stat labels |

### Support Palette

| Token | Hex | Role |
|-------|-----|------|
| `--strava-border` | `#DFDFE8` | Card and input borders |
| `--strava-gold` | `#F2A900` | PR / trophy highlight |
| `--strava-silver` | `#A6A6B0` | Second place trophy |
| `--strava-bronze` | `#B87333` | Third place trophy |
| `--strava-blue` | `#0073E6` | Links, info |
| `--strava-green` | `#1BA84A` | Positive trend, fitness gain |
| `--strava-black` | `#000000` | Marketing hero surfaces |

---

## 3. Typography Rules

### Font Stack

```css
--font-sans: "Boathouse", "Maison Neue", "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-numeric: "Maison Neue", "Helvetica Neue", Arial, sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Marketing Hero | 56px | 700 | 1.05 | -0.02em | `#242428` |
| Page Title | 28px | 700 | 1.2 | 0 | `#242428` |
| Activity Title | 20px | 700 | 1.3 | 0 | `#242428` |
| Stat Value | 20px | 400 | 1.2 | 0 | `#242428` |
| Stat Label | 11px | 400 | 1.3 | 0.02em | `#6D6D78` |
| Body | 14px | 400 | 1.5 | 0 | `#242428` |
| Button Label | 14px | 700 | 1.2 | 0 | `#FFFFFF` |

### Typography Philosophy
Type is **clean and sporty**, with a neutral grotesque carrying both body and numbers. Stats use tabular figures so values line up across rows.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #fc4c02;
  color: #ffffff;
  border: 1px solid #fc4c02;
  border-radius: 4px;
  min-height: 40px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 700;
}

.button-primary:hover {
  background: #e34402;
}

.button-secondary {
  background: #ffffff;
  color: #242428;
  border: 1px solid #dfdfe8;
  border-radius: 4px;
  min-height: 40px;
  padding: 0 20px;
}
```

### Activity Card

```css
.activity-card {
  background: #ffffff;
  border: 1px solid #dfdfe8;
  border-radius: 4px;
  padding: 16px;
}

.activity-stats {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 24px;
  justify-content: start;
}

.activity-map {
  border-radius: 4px;
  aspect-ratio: 2 / 1;
  overflow: hidden;
}
```

### Kudos Button

```css
.kudos-button {
  background: transparent;
  border: 1px solid #dfdfe8;
  border-radius: 4px;
  width: 40px;
  height: 40px;
}

.kudos-button.active svg {
  fill: #fc4c02;
}
```

### Component Notes
- Stat rows show a small muted label above a larger value
- Route polylines are always orange on a light map base
- Achievements display as small gold/silver/bronze trophies next to segment names
- Avatars are circular with optional subscriber badge

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Icon gaps |
| `--space-2` | `8px` | Stat label to value |
| `--space-3` | `16px` | Card padding |
| `--space-4` | `24px` | Stat column gaps |
| `--space-5` | `40px` | Section spacing |
| `--space-6` | `80px` | Marketing section spacing |

### Layout Behavior
- Dashboard uses a three-column layout: profile summary left, feed center (~600px), challenges/clubs right
- Activity detail page pairs a large map with a stats sidebar and splits table
- Marketing pages use full-bleed outdoor photography with bold headlines

### Whitespace Philosophy
Whitespace is **functional**, separating dense activity cards clearly so the feed stays scannable during quick scrolls.

---

## 6. Depth & Elevation

### Elevation Strategy
Strava is **flat and bordered**. Cards separate from the feed using 1px borders rather than shadows.

```css
--shadow-dropdown: 0 2px 8px rgba(0, 0, 0, 0.15);
--shadow-modal: 0 8px 24px rgba(0, 0, 0, 0.2);
--border-card: 1px solid #dfdfe8;
```

### Surface Hierarchy
- Light gray feed background
- White bordered cards
- Dropdowns and modals with soft shadows

---

## 7. Do's and Don'ts

### Do
- Use orange for primary actions, route lines, and kudos state
- Structure every activity with title, stat row, map, then social actions
- Use tabular numerals for stats and splits
- Celebrate achievements with trophy icons and gold highlights

### Don't
- Do not use orange for large background fills in product views
- Do not use heavy drop shadows on feed cards
- Do not bury stats below social content
- Do not use rounded pill buttons for primary actions; keep 4px corners

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Single-column feed, bottom tab bar, record button centered |
| Tablet | `768px - 1023px` | Feed plus one side column |
| Desktop | `1024px+` | Three-column dashboard |

### Responsive Rules
- Maps stay full card width at every breakpoint
- Stat rows wrap to two lines rather than shrinking below 16px values
- Touch targets for kudos and comment are at least 44px

---

## 9. Agent Prompt Guide

### Quick Reference
- Signature orange `#FC4C02` accent
- White bordered cards on light gray feed
- Three-up stat rows with muted labels
- Orange route maps and trophy achievements

### Prompt Template
```text
Design this like Strava's current public product and brand style:
- signature orange (#FC4C02) for CTAs, route lines, and kudos
- single-column feed of white cards with 1px borders on a light gray background
- activity cards with bold title, three-up stat row (small muted label above value), and a route map
- gold/silver/bronze trophy icons for achievements
- clean grotesque typography with tabular numbers
- energetic, sporty, community-driven tone
```
