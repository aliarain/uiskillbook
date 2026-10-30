# SoundCloud Design System

> Creator-driven audio design built around a signature orange, clean white surfaces, and waveform-first track players. SoundCloud's public product feels open, community-focused, and utilitarian, putting artwork, waveforms, and play buttons at the center of every screen.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
SoundCloud feels like **an open mixtape wall for independent artists**. White surfaces, square artwork, and orange waveforms make every track instantly playable and shareable.

### Mood & Feeling
- Open, independent, and community-first
- Energetic but practical
- Utilitarian and content-focused
- Youthful and underground
- Accessible and familiar

### Design Density
**Medium-to-high density.** Streams and search results pack artwork, waveforms, and stats, but consistent row structure keeps them readable.

### Visual Character
- Signature orange (`#FF5500`) for play buttons, progress, and CTAs
- White canvas with light gray dividers
- Square cover artwork everywhere
- Waveform visualizations with orange played-portion and gray remainder
- Dark black header bar and dark marketing heroes

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--sc-orange` | `#FF5500` | Primary brand, play, progress, CTAs |
| `--sc-orange-dark` | `#E64D00` | Hover/pressed state |
| `--sc-white` | `#FFFFFF` | Page and card surfaces |
| `--sc-header` | `#121212` | Top navigation bar |
| `--sc-ink` | `#333333` | Primary text |
| `--sc-ink-muted` | `#999999` | Secondary text, stats |

### Support Palette

| Token | Hex | Role |
|-------|-----|------|
| `--sc-gray-50` | `#F2F2F2` | Secondary surfaces, sidebar |
| `--sc-border` | `#E5E5E5` | Dividers and borders |
| `--sc-wave-idle` | `#CCCCCC` | Unplayed waveform |
| `--sc-wave-hover` | `#FF7733` | Hovered waveform region |
| `--sc-link` | `#0066CC` | Inline links |
| `--sc-black` | `#000000` | Marketing hero surfaces |

---

## 3. Typography Rules

### Font Stack

```css
--font-sans: "Inter", "Interstate", "Lucida Grande", "Lucida Sans Unicode", Arial, sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Marketing Hero | 48px | 700 | 1.1 | -0.01em | `#FFFFFF` |
| Page Title | 24px | 700 | 1.25 | 0 | `#333333` |
| Track Title | 14px | 600 | 1.35 | 0 | `#333333` |
| Artist Name | 13px | 400 | 1.35 | 0 | `#999999` |
| Stats | 11px | 400 | 1.3 | 0 | `#999999` |
| Button Label | 14px | 600 | 1.2 | 0 | `#FFFFFF` |

### Typography Philosophy
Type is **small, compact, and practical**, keeping focus on artwork and waveforms. Artist names are muted above bolder track titles.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #ff5500;
  color: #ffffff;
  border: 1px solid #ff5500;
  border-radius: 4px;
  min-height: 32px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 600;
}

.button-primary:hover {
  background: #e64d00;
}

.button-secondary {
  background: #ffffff;
  color: #333333;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 26px;
  padding: 0 10px;
  font-size: 12px;
}
```

### Play Button

```css
.play-button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #ff5500;
  color: #ffffff;
  display: grid;
  place-items: center;
}
```

### Track Row

```css
.track-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #e5e5e5;
}

.track-artwork {
  width: 120px;
  height: 120px;
  object-fit: cover;
}

.waveform-played { fill: #ff5500; }
.waveform-remaining { fill: #cccccc; }
```

### Component Notes
- Every track pairs square artwork, orange circular play button, and a waveform
- Like, repost, share, and copy-link are small outlined buttons below the waveform
- Timed comments appear as avatars along the waveform
- Persistent bottom player bar shows current track and progress

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Stat gaps |
| `--space-2` | `8px` | Button group spacing |
| `--space-3` | `16px` | Row padding |
| `--space-4` | `24px` | Section spacing |
| `--space-5` | `40px` | Page padding |
| `--space-6` | `80px` | Marketing section spacing |

### Layout Behavior
- Main content column (~800px) with a right sidebar for suggestions and stats
- Discover pages use horizontal carousels of square artwork tiles
- Fixed bottom player bar across all pages

### Whitespace Philosophy
Whitespace is **economical** — enough to separate tracks, never enough to slow browsing.

---

## 6. Depth & Elevation

### Elevation Strategy
SoundCloud is **flat and bordered**. Elevation is used only for the bottom player, dropdowns, and modals.

```css
--shadow-player: 0 -1px 0 #e5e5e5;
--shadow-dropdown: 0 2px 8px rgba(0, 0, 0, 0.15);
--shadow-modal: 0 8px 30px rgba(0, 0, 0, 0.25);
```

### Surface Hierarchy
- White canvas
- Light gray sidebar and secondary surfaces
- Fixed player bar and floating menus

---

## 7. Do's and Don'ts

### Do
- Put the orange play button and waveform at the center of track UI
- Use square artwork consistently
- Keep text small and compact
- Keep the bottom player always accessible

### Don't
- Do not round artwork into circles (avatars only)
- Do not use orange for large backgrounds in product views
- Do not hide waveforms behind extra clicks
- Do not add heavy shadows to track rows

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Stacked tracks, mini player above bottom tab bar |
| Tablet | `768px - 1079px` | Single content column, sidebar hidden |
| Desktop | `1080px+` | Content column plus right sidebar |

### Responsive Rules
- Artwork shrinks to 64px in mobile rows
- Waveforms remain full-width and scrubbable by touch
- Play controls keep 44px touch targets

---

## 9. Agent Prompt Guide

### Quick Reference
- Signature orange `#FF5500` play and progress
- Square artwork and waveform players
- White canvas, dark top bar
- Compact small typography

### Prompt Template
```text
Design this like SoundCloud's current public product style:
- white canvas with a dark top navigation bar
- signature orange (#FF5500) circular play buttons, waveform progress, and CTAs
- track rows with square cover art, muted artist name above bold title, and a full-width waveform
- small outlined action buttons (like, repost, share) below each waveform
- fixed bottom player bar
- open, independent, creator-first tone
```
