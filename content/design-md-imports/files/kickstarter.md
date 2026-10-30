# Kickstarter Design System

> Optimistic, creator-first crowdfunding design built around a bright signature green, clean white surfaces, and project-centric cards with funding progress. Kickstarter's public product balances editorial storytelling with clear, trustworthy funding data.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Kickstarter feels like **a gallery of creative projects with a live scoreboard**. Big project imagery, editorial headlines, and bold green progress bars make every campaign feel alive and within reach.

### Mood & Feeling
- Optimistic, creative, and hopeful
- Community-powered and independent
- Editorial and story-driven
- Trustworthy and transparent
- Energetic but grounded

### Design Density
**Medium density.** Discovery grids are image-led with compact funding stats; project pages are long-form and editorial.

### Visual Character
- Signature green (`#05CE78`) for CTAs, progress bars, and brand
- White canvas with near-black text
- Project cards with 16:9 image, title, creator, and progress bar
- Bold funding stats (pledged, backers, days to go)
- Editorial staff-pick sections with large imagery

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--ks-green` | `#05CE78` | Primary brand, progress, highlights |
| `--ks-green-dark` | `#037362` | Primary CTA fill, hover, text-safe green |
| `--ks-white` | `#FFFFFF` | Page and card surfaces |
| `--ks-ink` | `#282828` | Primary text |
| `--ks-ink-muted` | `#656969` | Secondary text |
| `--ks-gray-50` | `#F7F7F6` | Secondary surfaces |

### Support Palette

| Token | Hex | Role |
|-------|-----|------|
| `--ks-border` | `#DCDEDD` | Borders and dividers |
| `--ks-progress-track` | `#E6E6E6` | Progress bar track |
| `--ks-link` | `#009E74` | Inline links |
| `--ks-red` | `#EF3F28` | Errors, unsuccessful state |
| `--ks-yellow` | `#FFE500` | Staff pick / highlight accent |
| `--ks-black` | `#000000` | Footer and dark sections |

---

## 3. Typography Rules

### Font Stack

```css
--font-sans: "Maison Neue", "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-editorial: "Moderat", "Maison Neue", "Helvetica Neue", sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Marketing Hero | 56px | 500 | 1.1 | -0.02em | `#282828` |
| Project Title (page) | 36px | 500 | 1.2 | -0.01em | `#282828` |
| Card Title | 16px | 500 | 1.35 | 0 | `#282828` |
| Funding Stat | 24px | 500 | 1.2 | 0 | `#037362` |
| Body | 16px | 400 | 1.6 | 0 | `#282828` |
| Meta | 13px | 400 | 1.4 | 0 | `#656969` |
| Button Label | 16px | 500 | 1.2 | 0 | `#FFFFFF` |

### Typography Philosophy
Type is **clean and editorial**, with medium weights instead of heavy bolds. Funding numbers get size and green color to stand out.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #037362;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  min-height: 48px;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 500;
}

.button-primary:hover {
  background: #025c4e;
}

.button-secondary {
  background: #ffffff;
  color: #282828;
  border: 1px solid #dcdedd;
  border-radius: 4px;
  min-height: 48px;
  padding: 0 24px;
}
```

### Project Card

```css
.project-card {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-image {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  width: 100%;
}

.progress-track {
  height: 4px;
  background: #e6e6e6;
}

.progress-fill {
  height: 4px;
  background: #05ce78;
}
```

### Reward Tier

```css
.reward-tier {
  border: 1px solid #dcdedd;
  border-radius: 4px;
  padding: 24px;
}

.reward-tier:hover {
  border-color: #037362;
}
```

### Component Notes
- Progress bars are thin (4px), green, and square-ended
- Cards are frameless: image on top, text below, no border or shadow
- "Project We Love" badges mark curated projects
- Reward tiers list price, description, estimated delivery, and backer count

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Stat gaps |
| `--space-2` | `8px` | Card text spacing |
| `--space-3` | `16px` | Component padding |
| `--space-4` | `24px` | Grid gaps, reward padding |
| `--space-5` | `48px` | Section spacing |
| `--space-6` | `96px` | Marketing hero spacing |

### Layout Behavior
- Discover grid uses 3–4 columns of frameless project cards
- Project page: media and funding stats side by side above a tabbed story section
- Story column (~630px) sits beside a sticky rewards column

### Whitespace Philosophy
Whitespace is **editorial** — clean gutters and consistent rhythm let project imagery lead.

---

## 6. Depth & Elevation

### Elevation Strategy
Kickstarter is **flat**. Hierarchy comes from imagery, typography, and thin borders.

```css
--shadow-dropdown: 0 2px 8px rgba(0, 0, 0, 0.12);
--shadow-modal: 0 8px 32px rgba(0, 0, 0, 0.2);
--border-default: 1px solid #dcdedd;
```

### Surface Hierarchy
- White canvas
- Light gray sections for grouping
- Bordered reward tiers and inputs

---

## 7. Do's and Don'ts

### Do
- Use bright green for progress and brand moments
- Use darker green for text and filled CTAs to maintain contrast
- Lead with large project imagery
- Show funding stats prominently

### Don't
- Do not put white text on bright `#05CE78` (insufficient contrast)
- Do not add shadows or borders to discovery cards
- Do not use heavy bold weights for headlines
- Do not hide funding progress below the fold

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Single-column cards, sticky "Back this project" bar |
| Tablet | `768px - 1023px` | Two-column discovery grid |
| Desktop | `1024px+` | Three-to-four column grid, sticky rewards sidebar |

### Responsive Rules
- Rewards column moves below the story on mobile
- CTA buttons become full width on mobile
- Touch targets are at least 44px

---

## 9. Agent Prompt Guide

### Quick Reference
- Bright green `#05CE78` progress and brand
- Dark green `#037362` filled CTAs
- Frameless image-led project cards
- Clean editorial Maison Neue typography

### Prompt Template
```text
Design this like Kickstarter's current public product style:
- white canvas with near-black text and bright green (#05CE78) brand and progress accents
- dark green (#037362) filled CTA buttons with 4px corners
- frameless project cards: 16:9 image, title, creator, thin green progress bar, funding stats
- clean editorial sans (Maison Neue style) with medium weights
- flat surfaces with thin borders on reward tiers
- optimistic, creative, community-powered tone
```
