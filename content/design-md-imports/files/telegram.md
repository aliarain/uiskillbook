# Telegram Web Design System

> The official design system for building Telegram's web product UI. Rooted in clarity, speed, and privacy-first interaction — a minimal but expressive communication platform.

**Design Philosophy:** Clean, fast, and frictionless. Telegram's UI prioritizes content over chrome. Every component is lightweight, responsive, and optimized for cross-platform consistency. The interface stays out of the user's way.

***

## 1. Color Palette

### Primary Brand Colors

| Color Name | Hex Code | RGB | CSS Variable | Usage |
|------------|----------|-----|--------------|-------|
| Telegram Blue | `#26A5E4` | rgb(38, 165, 228) | `--tg-color-brand` | Primary actions, CTAs, links |
| Deep Blue | `#2481CC` | rgb(36, 129, 204) | `--tg-color-accent` | Button hover, active states |
| Sky Blue | `#179CDE` | rgb(23, 156, 222) | `--tg-color-highlight` | Indicators, underlines, borders |
| Dark Blue | `#1C93E3` | rgb(28, 147, 227) | `--tg-color-accent-dark` | Dark mode primary actions |
| White | `#FFFFFF` | rgb(255, 255, 255) | `--tg-color-white` | Backgrounds, icon fills on brand |

### Light Mode Colors

| Element | Hex Code | RGB | CSS Variable |
|---------|----------|-----|--------------|
| Background Default | `#FFFFFF` | rgb(255, 255, 255) | `--tg-bg-default` |
| Background Muted | `#F7F7F7` | rgb(247, 247, 247) | `--tg-bg-muted` |
| Background Surface | `#ECF3F8` | rgb(236, 243, 248) | `--tg-bg-surface` |
| Background Accent Tint | `#E5F1FA` | rgb(229, 241, 250) | `--tg-bg-accent-tint` |
| Text Default | `#000000` | rgb(0, 0, 0) | `--tg-text-default` |
| Text Muted | `#7D7F81` | rgb(125, 127, 129) | `--tg-text-muted` |
| Text Secondary | `#808080` | rgb(128, 128, 128) | `--tg-text-secondary` |
| Text Disabled | `#AAAAAA` | rgb(170, 170, 170) | `--tg-text-disabled` |
| Border Default | `#E6E6E6` | rgb(230, 230, 230) | `--tg-border-default` |
| Border Subtle | `#E8E8E8` | rgb(232, 232, 232) | `--tg-border-subtle` |
| Link Color | `#0088CC` | rgb(0, 136, 204) | `--tg-link-color` |

### Dark Mode Colors

| Element | Hex Code | RGB | CSS Variable |
|---------|----------|-----|--------------|
| Background Default | `#000000` | rgb(0, 0, 0) | `--tg-bg-default` |
| Background Surface | `#1E1E1E` | rgb(30, 30, 30) | `--tg-bg-surface` |
| Background Muted | `#212429` | rgb(33, 36, 41) | `--tg-bg-muted` |
| Background Blurred | `#222222D6` | rgba(34, 34, 34, 0.84) | `--tg-bg-blurred` |
| Text Default | `#FFFFFF` | rgb(255, 255, 255) | `--tg-text-default` |
| Text Muted | `#84888C` | rgb(132, 136, 140) | `--tg-text-muted` |
| Border Default | `#33373D` | rgb(51, 55, 61) | `--tg-border-default` |
| Table Head | `#262A2E` | rgb(38, 42, 46) | `--tg-table-head` |
| Accent Link | `#3CA1EB` | rgb(60, 161, 235) | `--tg-link-color` |
| Accent Button | `#1C93E3` | rgb(28, 147, 227) | `--tg-accent-btn` |
| Highlight | `#30AAFD` | rgb(48, 170, 253) | `--tg-color-highlight` |

### Message Bubble Colors

| Type | Background | Text | Usage |
|------|------------|------|-------|
| Incoming (Light) | `#FFFFFF` | `#000000` | Messages from others |
| Outgoing (Light) | `#EFFDDE` | `#000000` | User's sent messages |
| Incoming (Dark) | `#212121` | `#FFFFFF` | Messages from others |
| Outgoing (Dark) | `#2B5278` | `#FFFFFF` | User's sent messages |
| Service Message | `#00000033` | `#FFFFFF` | System / date dividers |

### Status & Semantic Colors

| State | Background | Text | CSS Variable | Usage |
|-------|------------|------|--------------|-------|
| Online | `#26A5E4` | `#FFFFFF` | `--tg-color-online` | User online indicator |
| Unread badge | `#26A5E4` | `#FFFFFF` | `--tg-color-badge` | Unread message count |
| Muted badge | `#A8A8A8` | `#FFFFFF` | `--tg-color-muted-badge` | Muted chat badge |
| Error | `#FF3B30` | `#FFFFFF` | `--tg-color-error` | Failed message, error state |
| Success | `#34C759` | `#FFFFFF` | `--tg-color-success` | Delivered, verified |
| Premium Gold | `#F5AE3E` | `#FFFFFF` | `--tg-color-premium` | Premium/Stars features |

### Data Visualization Colors

| Color Name | Emphasis | Muted | Usage |
|------------|----------|-------|-------|
| Blue | `#2481CC` | `#D6EAF8` | Primary chart series |
| Green | `#34C759` | `#D5F5E3` | Growth, positive trends |
| Red | `#FF3B30` | `#FDEDEC` | Decline, negative states |
| Orange | `#FF9500` | `#FEF9E7` | Warnings, attention |
| Purple | `#AF52DE` | `#F4ECF7` | Tertiary data |
| Gray | `#8E8E93` | `#F2F3F4` | Neutral, inactive |

***

## 2. Typography

### Font Stacks

```css
/* Primary — System San-Serif */
--tg-font-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                   Helvetica, Arial, sans-serif,
                   "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

/* Legacy / Alternate */
--tg-font-legacy: "Lucida Grande", "Lucida Sans Unicode",
                  Arial, Helvetica, Verdana, sans-serif;

/* Light / Display (landing headings) */
--tg-font-light: "HelveticaNeue-Light", "Helvetica Neue Light",
                 "Helvetica Light", Helvetica, Arial, Verdana, sans-serif;

/* Monospace (code, technical content) */
--tg-font-mono: Monaco, Menlo, Consolas, "Courier New", monospace;
```

### Type Scale

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display Hero | 34px | 400 (Normal) | 1.2 | Landing page main title |
| Heading Large | 23px | 500 (Medium) | 1.3 | Section titles |
| Heading Medium | 20px | 700 (Bold) | 1.4 | Page-level headings (h1–h3) |
| Heading Small | 16px | 700 (Bold) | 1.5 | Sub-section headings (h4–h5) |
| Body Large | 16px | 300 (Light) | 1.6 | Lead descriptions, mission text |
| Body Default | 15px | 400 (Normal) | 1.58 | Standard body copy |
| Body Medium | 14px | 400 (Normal) | 1.5 | Secondary body, card content |
| Body Small | 13px | 400 (Normal) | 1.5 | Captions, metadata, code blocks |
| Label / Caption | 12px | 400 (Normal) | 1.25 | Timestamps, small labels |
| Nav / UI | 15px | 400 (Normal) | 1.33 | Navigation items, menu links |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Light | 300 | Lead text, landing descriptions |
| Normal | 400 | Body, nav, standard UI text |
| Medium | 500 | Display headings, feature card titles |
| Bold | 700 | Section headings, emphasis |

### Typography Guidelines

- **Line length:** Max 800px content width for readable prose; 65ch for long-form articles
- **Alignment:** Left-aligned text as default; center only for hero headlines and short taglines
- **Letter spacing:** `-1px` to `-2px` for large display headings; default tracking for body
- **Hierarchy:** Weight and size define hierarchy — color used sparingly for emphasis
- **RTL support:** Full right-to-left (`direction: rtl`) support for Arabic, Persian, Hebrew
- **Code:** Always use `--tg-font-mono` for API references, code snippets, and technical strings

***

## 3. Spacing & Layout

### Base Spacing Scale

| Token | Value | Pixels | CSS Variable |
|-------|-------|--------|--------------|
| 2 | 0.125rem | 2px | `--tg-space-2` |
| 4 | 0.25rem | 4px | `--tg-space-4` |
| 6 | 0.375rem | 6px | `--tg-space-6` |
| 8 | 0.5rem | 8px | `--tg-space-8` |
| 10 | 0.625rem | 10px | `--tg-space-10` |
| 12 | 0.75rem | 12px | `--tg-space-12` |
| 15 | 0.9375rem | 15px | `--tg-space-15` |
| 16 | 1rem | 16px | `--tg-space-16` |
| 17 | 1.0625rem | 17px | `--tg-space-17` |
| 18 | 1.125rem | 18px | `--tg-space-18` |
| 20 | 1.25rem | 20px | `--tg-space-20` |
| 24 | 1.5rem | 24px | `--tg-space-24` |
| 28 | 1.75rem | 28px | `--tg-space-28` |
| 32 | 2rem | 32px | `--tg-space-32` |
| 40 | 2.5rem | 40px | `--tg-space-40` |
| 50 | 3.125rem | 50px | `--tg-space-50` |
| 60 | 3.75rem | 60px | `--tg-space-60` |

### Content Width Containers

| Container | Max Width | Usage |
|-----------|-----------|-------|
| Narrow | 640px | Focused prose, single-column forms |
| Content | 800px | Standard page content, developer docs |
| Default | 970px | General content pages |
| Wide | 1170px | Full-page marketing layouts |
| Card Grid | 950px | Feature card grids (telegram.org) |

### Breakpoints

| Name | Value | Usage |
|------|-------|-------|
| Mobile | 320px | Minimum supported width |
| Small | 640px | Stacked card layouts |
| Medium | 768px | 2-column card grid activates |
| Large | 992px | 3-column card grid activates |
| X-Large | 1200px | Full desktop layout |

### Layout Grid

- **4px baseline grid:** All spacing and sizing aligns to 4px increments
- **Flexible columns:** CSS Grid or Flexbox for responsive layouts
- **Mobile-first:** Progressive enhancement from 320px baseline
- **Navigation offset:** Content starts at `margin-top: 50px` to clear fixed navbar

***

## 4. Borders & Shadows

### Border Width

| Style | Value | CSS Variable | Usage |
|-------|-------|--------------|-------|
| Thin (Default) | 1px | `--tg-border-width-thin` | Cards, nav borders, dividers |
| Active Indicator | 3px | `--tg-border-width-active` | Nav active state bottom underline |
| Focus Ring | 2px | `--tg-border-width-focus` | Keyboard focus states |

### Border Radius

| Size | Value | CSS Variable | Usage |
|------|-------|--------------|-------|
| None | 0px | `--tg-radius-none` | Buttons (square by default), forms |
| Small | 2px | `--tg-radius-small` | Nav indicator bar, subtle rounding |
| Medium | 4px | `--tg-radius-medium` | Download buttons, cards |
| Large | 6px | `--tg-radius-large` | Dropdowns, popovers |
| Full | 50% | `--tg-radius-full` | Avatars, online dots, badges |
| Pill | 16px | `--tg-radius-pill` | Social share buttons |

### Shadows

| Shadow | Value | Usage |
|--------|-------|-------|
| Navbar | `none` (border-bottom instead) | Navigation bar elevation |
| Dropdown | `0 1px 1px rgba(20, 60, 83, 0.1)` | Dropdown menus |
| Card Hover | `0 2px 4px rgba(0,0,0,0.08)` | Elevated hover state on cards |
| Blurred Surface | `backdrop-filter: blur(25px)` | Translucent navbar (supports clause) |

### Focus States

```css
--tg-focus-color: #2481CC;
--tg-focus-width: 2px;
--tg-focus-style: solid;
```

***

## 5. Iconography

### Icon System

Telegram uses a custom SVG icon set designed for the messaging and product interface. No public icon library name — icons are internally maintained and rendered inline or via CSS background-image.

### Icon Sizes

| Size | Dimensions | Usage |
|------|------------|-------|
| 16px | 16 × 16 | Inline indicators, UI micro-icons |
| 25px | 25 × 27 | Platform badges (iOS, Android) |
| 26px | 26 × 26 | Verified badge |
| 30px | 30 × 30 | App platform icons in download lists |
| 128px | 128 × 128 | App logo on landing pages |
| 144px | 144 × 144 | Animated logo variant |

### Icon Categories

| Category | Examples | Usage |
|----------|----------|-------|
| **Messaging** | send, reply, forward, pin, delete | Core messaging actions |
| **Platform** | iOS, Android, macOS, Windows, Linux | Download / platform selection |
| **Status** | read tick (✓✓), delivered, clock | Message delivery states |
| **Navigation** | back arrow, chevron, more (⋮) | UI navigation |
| **Verification** | verified badge (blue check) | Channel/user verification |
| **Media** | photo, video, file, audio, sticker | Media type indicators |
| **Reactions** | emoji panel, like, thumbs | Message reactions |

### Key UI Icons

```
send            — Paper plane (outgoing message)
verified        — Blue circle with white checkmark
double-check    — Two checkmarks (message read)
single-check    — One checkmark (message delivered)
mute            — Bell with slash
pin             — Pushpin
forward         — Curved arrow right
reply           — Curved arrow left
menu-dots       — Three dots horizontal (more actions)
search          — Magnifying glass
close           — × mark
back            — ← chevron
premium-star    — Star shape (Telegram Stars / Premium)
```

### Icon Guidelines

- **Stroke width:** 1–1.5px for small icons; filled for status indicators
- **Color:** Inherits from parent, or uses `--tg-color-brand` for branded icons
- **Verification badge:** Always rendered in Telegram Blue (`#1C93E3`) with white fill
- **Accessibility:** Pair all icons with text labels or `aria-label` attributes

***

## 6. Component Patterns

### Buttons

#### Button Variants

| Variant | Background | Border | Text | Usage |
|---------|------------|--------|------|-------|
| Primary | `#318FD3` | none | `#FFFFFF` | Main download CTAs |
| Brand | `#26A5E4` | none | `#FFFFFF` | Header CTAs, Sign In |
| Platform Download | `#A19481` | none | `#FFFFFF` | Platform-specific download |
| Platform Hover | `#A99D8B` | none | `#FFFFFF` | Hover state |
| Platform Active | `#998E7E` | none | `#FFFFFF` | Pressed state |
| Nav Active | `#1E98D4` | none | `#FFFFFF` | Selected nav pill |
| Ghost / Link | transparent | none | `#0088CC` | Inline actions, nav links |

#### Button Sizes

| Size | Height | Padding | Font Size | Border Radius |
|------|--------|---------|-----------|---------------|
| Small | 32px | 7px 17px | 14px | 16px (pill) |
| Default | 45px | 10px 15px | 16px | 4px |
| Nav Item | auto | 8px 17px | 15px | 0 |

#### Button States

```css
/* Platform Download Button */
--tg-btn-download-rest:   #A19481;
--tg-btn-download-hover:  #A99D8B;
--tg-btn-download-active: #998E7E;

/* Primary Brand Button */
--tg-btn-primary-rest:    #318FD3;
--tg-btn-primary-hover:   #2481CC;
--tg-btn-primary-active:  #1A6AAE;

/* Nav Link */
--tg-btn-nav-rest:        transparent;
--tg-btn-nav-hover:       #F0F6FA;
--tg-btn-nav-active-bg:   #1E98D4;
--tg-btn-nav-active-text: #FFFFFF;
```

### Navigation

```css
/* Fixed top navbar */
position: fixed;
top: 0;
left: 0;
right: 0;
background: #FFFFFF;         /* or rgba(255,255,255,0.84) + backdrop-filter */
border-bottom: 1px solid #E8E8E8;
height: 50px;

/* Active nav indicator underline */
height: 3px;
background: #179CDE;
border-radius: 2px 2px 0 0;
bottom: -1px;
transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
transform-origin: bottom;
transform: scaleX(0.3) scaleY(0);   /* resting */
/* → scaleX(1) scaleY(1) on hover/active */
```

### Form Controls

#### Text Input

| State | Border | Background | Shadow |
|-------|--------|------------|--------|
| Rest | `#CCCCCC` | `#FFFFFF` | `inset 0 1px 1px rgba(0,0,0,0.075)` |
| Focus | `rgba(82,168,236,0.8)` | `#FFFFFF` | `inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(82,168,236,0.6)` |
| Error | `#FF3B30` | `#FFFFFF` | none |
| Disabled | `#CCCCCC` | `#F5F5F5` | none |

#### Dropdown Menu

```css
min-width: 177px;
padding: 0;
background-color: #FFFFFF;
border: 1px solid rgba(29, 92, 123, 0.3);
box-shadow: 0 1px 1px rgba(20, 60, 83, 0.1);

/* Item */
padding: 8px 18px;
font-size: 13px;
color: #0088CC;

/* Item Hover */
background-color: #1E98D4;
color: #FFFFFF;
```

### Message Bubbles

```css
/* Incoming message */
background: #FFFFFF;
border-radius: 0 12px 12px 12px;
padding: 8px 12px;
max-width: 320px;

/* Outgoing message */
background: #EFFDDE;
border-radius: 12px 0 12px 12px;
padding: 8px 12px;
max-width: 320px;
margin-left: auto;

/* Timestamp inside bubble */
font-size: 11px;
color: #A0ADB5;
float: right;
margin-top: 4px;
margin-left: 8px;
```

### Cards (Feature Cards)

```css
/* telegram.org feature card */
max-width: 260px;
margin: 0 auto;
padding: 20px 0 9px;
text-align: center;

/* Card image */
width: 160px;
height: 160px;
margin: 0 auto;

/* Card header */
color: #A19679;         /* neutral variant */
/* or */
color: #0088CC;         /* brand variant */
font-size: 26px;
font-weight: normal;
letter-spacing: -1px;
margin: 15px 0 6px;

/* Card lead */
font-size: 15px;
line-height: 158%;
text-align: center;
```

### Code Blocks

```css
/* Code block container */
background: #ECF3F8;
color: #546172;
border-radius: 4px;
padding: 9.5px;
font-family: Monaco, Menlo, Consolas, "Courier New", monospace;
font-size: 13px;
line-height: 20px;
overflow-x: auto;

/* Inline code */
background: #FEE AE4;
color: #C61717;
padding: 3px 5px;
border-radius: 0;

/* Blockquote */
border-left: 4px solid #179CDE;
padding: 5px 17px;
color: inherit;
```

### Avatars

| Size | Dimensions | Border Radius | Usage |
|------|------------|---------------|-------|
| Mini | 20px | 50% | Inline mentions |
| Small | 32px | 50% | Chat list, compact views |
| Medium | 48px | 50% | Chat header, profile previews |
| Large | 64px | 50% | Profile page |
| Team | 120px | 50% | Team / about pages |

### Badges & Labels

| Type | Background | Text | Usage |
|------|------------|------|-------|
| Unread count | `#26A5E4` | `#FFFFFF` | Unread message counter |
| Muted count | `#A8A8A8` | `#FFFFFF` | Muted chat counter |
| Premium | `#F5AE3E` | `#FFFFFF` | Premium / Stars badge |
| Verified | `#1C93E3` | `#FFFFFF` | Verified channel/user |
| Online dot | `#26A5E4` | — | User online indicator (8px circle) |

***

## 7. Motion & Animation

### Duration Tokens

| Speed | Duration | Usage |
|-------|----------|-------|
| Instant | 100ms | Micro-state changes (check marks) |
| Fast | 150ms | Hover states, button presses |
| Normal | 200ms | Nav transitions, dropdown open |
| Slow | 300ms | Page-level transitions |
| Logo animation | 500ms | Telegram logo sprite animation |

### Easing Functions

```css
--tg-ease-in-out: ease-in-out;
--tg-ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--tg-ease-out: cubic-bezier(0, 0, 0.2, 1);
--tg-ease-in: cubic-bezier(0.4, 0, 1, 1);
```

### Animation Patterns

| Pattern | Duration | Easing | Usage |
|---------|----------|--------|-------|
| Nav underline slide | 200ms | ease-in-out | Active nav indicator |
| Dropdown open | 200ms | ease-out | Menu appearing |
| Button press scale | 150ms | ease-in-out | Tactile button feedback |
| Logo sprite play | 500ms | steps(30) | Animated Telegram logo |
| Image fade in | 100ms | ease-in-out | Lazy-loaded images |
| Back-to-top | 200ms | ease-in-out | Scroll utility fade |

### Nav Underline Transition

```css
/* Resting */
opacity: 0;
transform: scaleX(0.3) scaleY(0);
transform-origin: bottom;

/* Active / Hover */
opacity: 1;
transform: scaleX(1) scaleY(1);
transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
```

### Logo Animation

```css
/* Telegram sprite-based logo animation */
animation: t-logo-play 500ms steps(30) both;
background-size: cover;

@keyframes t-logo-play {
  from { background-position: 0% 0%; }
  to   { background-position: 100% 0%; }
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

***

## 8. Accessibility Standards

### Color Contrast Requirements

| Element | Minimum Ratio | Standard |
|---------|---------------|----------|
| Body text (default) | 4.5:1 | WCAG AA |
| Large text (>18px or >14px bold) | 3:1 | WCAG AA |
| UI components (borders, icons) | 3:1 | WCAG AA |
| Placeholder text | 3:1 | WCAG AA |
| Disabled text | No requirement | Decorative |

### Focus States

- All interactive elements must show visible focus indicators
- Focus outline: `2px solid #2481CC`
- Never suppress `:focus-visible` without providing a visible alternative
- Nav links: focus background `#F0F6FA`

### Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Move to next focusable element |
| Shift + Tab | Move to previous focusable element |
| Enter / Space | Activate buttons and links |
| Arrow Keys | Navigate within components (nav, dropdowns) |
| Escape | Close overlay, dismiss dropdown |

### ARIA Patterns

```html
<!-- Nav with active state -->
<nav role="navigation" aria-label="Main navigation">
  <a href="/" aria-current="page">Home</a>
</nav>

<!-- Loading state button -->
<button aria-busy="true" aria-live="polite">
  <span class="sr-only">Loading...</span>
  Sending
</button>

<!-- Icon-only action -->
<button aria-label="Send message">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Verified badge -->
<span role="img" aria-label="Verified account">
  <svg aria-hidden="true">...</svg>
</span>
```

### Screen Reader Considerations

- Use semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- Provide text alternatives for all platform/status icons
- Announce message delivery state changes (`aria-live="polite"`)
- Maintain a logical heading hierarchy: `h1` → `h2` → `h3`
- Label all form inputs with visible `<label>` or `aria-label`
- RTL content: set `dir="rtl"` on container elements for Arabic/Persian/Hebrew

***

## 9. Platform-Specific Guidelines

### Web Application Layout Structure

```
┌──────────────────────────────────────────────────────────────┐
│ Navbar (fixed, 50px height, white + bottom border)           │
│  Logo | Nav Links | Language Selector | [Sign In]            │
├────────────────┬─────────────────────────────────────────────┤
│                │                                             │
│  Sidebar Nav   │   Main Content Area                        │
│  (dev docs)    │   max-width: 800px, margin: 0 auto         │
│                │                                             │
│                │  ┌─────────────────────────────────────┐   │
│                │  │ Page / Hero Section                 │   │
│                │  ├─────────────────────────────────────┤   │
│                │  │ Content (cards, text, API docs)     │   │
│                │  └─────────────────────────────────────┘   │
│                │                                             │
└────────────────┴─────────────────────────────────────────────┘
│ Footer (max-width: 925px, flex row, border-top: #E8E8E8)     │
└──────────────────────────────────────────────────────────────┘
```

### Landing Page Pattern (telegram.org)

```
Navbar (fixed)
  ├── Logo (128×128 animated)
  ├── App Title (34px, letter-spacing: -2px)
  ├── Tagline (20px, light weight, muted color)
  └── Download Buttons (platform-specific)

Feature Card Grid (max-width: 950px)
  ├── 1-col mobile → 2-col @768px → 3-col @992px
  ├── 160×160px animated GIF illustrations
  └── Card header + short lead text

Blog / Recent News Section
  ├── 2-col card grid (50% each, max-width: 800px)
  ├── Card: image + title + lead + date
  └── Single-column below 640px

Footer (flex row, 5 columns, max-width: 925px)
```

### Developer Documentation Pattern

```
Sidebar Nav (right-positioned, 200px)
  ├── position: absolute → fixed (affix on scroll)
  ├── Active item: border-left: 2px solid #179CDE
  └── Nested items: smaller font, indent

Content Area (max-width: 800px)
  ├── Breadcrumb
  ├── Page title
  ├── Rich markdown content
  │    ├── Code blocks (ECF3F8 bg, 546172 text)
  │    ├── Inline code (FEEAE4 bg, C61717 text)
  │    └── Blockquotes (left border: 4px #179CDE)
  └── Edit form (for maintainers)
```

### Overlay / Dialog Sizes

| Type | Max Width | Usage |
|------|-----------|-------|
| Dropdown | 177px | Nav dropdowns, context menus |
| Tooltip | 200px | Short inline hints |
| Small Dialog | 320px | Confirmations, short prompts |
| Medium Dialog | 480px | Forms, settings panels |
| Large Dialog | 640px | Media viewer, full settings |

### Markdown Rendering

#### Heading Styles

| Level | Size | Weight | Extra |
|-------|------|--------|-------|
| H1 | 20px | Bold | margin-top: 32px |
| H2 | 20px | Bold | margin-top: 32px |
| H3 | 20px | Bold | margin-top: 32px |
| H4 | 16px | Bold | margin-top: 29px |
| H5 | 16px | Bold | margin-top: 29px |

#### Block Elements

```css
/* Blockquote */
border-left: 4px solid #179CDE;
padding: 5px 17px;
font-size: 14px;
line-height: 20px;

/* Inline code */
background: #FEEAE4;
color: #C61717;
padding: 3px 5px;

/* Code block */
background: #ECF3F8;
color: #546172;
font-size: 13px;
line-height: 20px;
overflow-x: auto;

/* Table cell */
border: 1px solid #D5D5D5;

/* Horizontal rule */
border-top: 1px solid #E8E8E8;
margin: 24px 0;
```

***

## Quick Reference

### Essential CSS Variables

```css
/* Brand */
--tg-color-brand:      #26A5E4;
--tg-color-accent:     #2481CC;
--tg-color-highlight:  #179CDE;
--tg-link-color:       #0088CC;

/* Light mode surfaces */
--tg-bg-default:       #FFFFFF;
--tg-bg-muted:         #F7F7F7;
--tg-bg-surface:       #ECF3F8;
--tg-bg-accent-tint:   #E5F1FA;

/* Dark mode surfaces */
--tg-bg-dark-default:  #000000;
--tg-bg-dark-surface:  #1E1E1E;
--tg-bg-dark-muted:    #212429;

/* Text */
--tg-text-default:     #000000;
--tg-text-muted:       #7D7F81;
--tg-text-secondary:   #808080;

/* Borders */
--tg-border-default:   #E6E6E6;
--tg-border-subtle:    #E8E8E8;

/* Typography */
--tg-font-primary: -apple-system, BlinkMacSystemFont, "Segoe UI",
                   Roboto, Helvetica, Arial, sans-serif;
--tg-font-mono:    Monaco, Menlo, Consolas, "Courier New", monospace;

/* Spacing */
--tg-space-8:  0.5rem;
--tg-space-16: 1rem;
--tg-space-24: 1.5rem;

/* Radius */
--tg-radius-medium: 4px;
--tg-radius-full:   50%;
--tg-radius-pill:   16px;

/* Focus */
--tg-focus-color:  #2481CC;
--tg-focus-width:  2px;
```

### Resources

- **Telegram Web:** https://web.telegram.org
- **Telegram Homepage:** https://telegram.org
- **Developer Docs:** https://core.telegram.org
- **Bot API:** https://core.telegram.org/bots/api
- **App Downloads:** https://telegram.org/apps
- **Brand Assets:** https://telegram.org/tour/screenshots

***

*Based on Telegram's publicly observable web design patterns, telegram.org CSS, and official brand color references. For the most current specifications, refer to telegram.org and core.telegram.org.*
