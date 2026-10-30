# Kaggle Design System

> The official design system for building Kaggle's product UI. Kaggle is the world's AI proving ground — a platform for 31M+ data scientists, ML engineers, and researchers. The design reflects a functional, data-first environment built on Google's Material Design foundations.

**Design Philosophy:** Data-first clarity with competitive energy. Kaggle's interface is clean and accessible, optimized for code-heavy workflows, long reading sessions, and competitive engagement. Every component balances technical density with approachable, learner-friendly visual language.

***

## 1. Color Palette

### Primary Brand Colors

| Color Name | Hex Code | RGB | CSS Variable | Usage |
|------------|----------|-----|--------------|-------|
| Kaggle Blue | `#20BEFF` | rgb(32, 190, 255) | `--kaggle-color-brand` | Primary actions, hero highlights |
| Kaggle Cyan | `#1CA3EC` | rgb(28, 163, 236) | `--kaggle-color-accent` | Links, interactive elements |
| Deep Blue | `#008ABF` | rgb(0, 138, 191) | `--kaggle-color-primary` | Buttons, CTAs |
| Navy | `#003A70` | rgb(0, 58, 112) | `--kaggle-color-navy` | Headings, branding marks |
| White | `#FFFFFF` | rgb(255, 255, 255) | `--kaggle-color-white` | Backgrounds, icon fills |

### Light Mode Colors

| Element | Hex Code | RGB | CSS Variable |
|---------|----------|-----|--------------|
| Background Default | `#FFFFFF` | rgb(255, 255, 255) | `--kaggle-bg-default` |
| Background Muted | `#F8F8F8` | rgb(248, 248, 248) | `--kaggle-bg-muted` |
| Background Surface | `#F5F5F5` | rgb(245, 245, 245) | `--kaggle-bg-surface` |
| Background Code | `#F7F7F7` | rgb(247, 247, 247) | `--kaggle-bg-code` |
| Background Sidebar | `#FAFAFA` | rgb(250, 250, 250) | `--kaggle-bg-sidebar` |
| Text Default | `#212121` | rgb(33, 33, 33) | `--kaggle-text-default` |
| Text Muted | `#616161` | rgb(97, 97, 97) | `--kaggle-text-muted` |
| Text Secondary | `#9E9E9E` | rgb(158, 158, 158) | `--kaggle-text-secondary` |
| Text Disabled | `#BDBDBD` | rgb(189, 189, 189) | `--kaggle-text-disabled` |
| Border Default | `#E0E0E0` | rgb(224, 224, 224) | `--kaggle-border-default` |
| Border Subtle | `#EEEEEE` | rgb(238, 238, 238) | `--kaggle-border-subtle` |
| Link Color | `#1CA3EC` | rgb(28, 163, 236) | `--kaggle-link-color` |

### Dark Mode Colors

| Element | Hex Code | RGB | CSS Variable |
|---------|----------|-----|--------------|
| Background Default | `#1A1A2E` | rgb(26, 26, 46) | `--kaggle-bg-default` |
| Background Surface | `#16213E` | rgb(22, 33, 62) | `--kaggle-bg-surface` |
| Background Muted | `#0F3460` | rgb(15, 52, 96) | `--kaggle-bg-muted` |
| Background Code | `#1E1E2E` | rgb(30, 30, 46) | `--kaggle-bg-code` |
| Text Default | `#F5F5F5` | rgb(245, 245, 245) | `--kaggle-text-default` |
| Text Muted | `#BDBDBD` | rgb(189, 189, 189) | `--kaggle-text-muted` |
| Border Default | `#37474F` | rgb(55, 71, 79) | `--kaggle-border-default` |
| Accent Link | `#20BEFF` | rgb(32, 190, 255) | `--kaggle-link-color` |
| Accent Button | `#1CA3EC` | rgb(28, 163, 236) | `--kaggle-accent-btn` |

### Competition & Rank Medal Colors

| Medal | Color | Hex | Usage |
|-------|-------|-----|-------|
| Gold | Gold | `#F5A623` | 1st place, Gold medal tier |
| Silver | Silver | `#C0C0C0` | 2nd place, Silver medal tier |
| Bronze | Bronze | `#CD7F32` | 3rd place, Bronze medal tier |
| Grandmaster | Red | `#FF0000` | Grandmaster rank badge |
| Master | Purple | `#8B00FF` | Master rank badge |
| Expert | Blue | `#008ABF` | Expert rank badge |
| Contributor | Dark | `#616161` | Contributor rank badge |
| Novice | Gray | `#9E9E9E` | Novice rank badge |

### Status & Semantic Colors

| State | Background | Text | CSS Variable | Usage |
|-------|------------|------|--------------|-------|
| Success | `#E8F5E9` | `#2E7D32` | `--kaggle-color-success` | Submission accepted, task done |
| Error | `#FFEBEE` | `#C62828` | `--kaggle-color-error` | Submission failed, error state |
| Warning | `#FFF8E1` | `#F57F17` | `--kaggle-color-warning` | Deadline nearing, caution |
| Info | `#E3F2FD` | `#1565C0` | `--kaggle-color-info` | Informational messages |
| Running | `#E0F7FA` | `#00838F` | `--kaggle-color-running` | Notebook/kernel executing |
| Queued | `#F3E5F5` | `#6A1B9A` | `--kaggle-color-queued` | Job queued for execution |

### Data Visualization Colors

| Color Name | Emphasis | Muted | Usage |
|------------|----------|-------|-------|
| Blue | `#1CA3EC` | `#BBDEFB` | Primary chart series |
| Green | `#4CAF50` | `#C8E6C9` | Positive trends, correct |
| Red | `#F44336` | `#FFCDD2` | Negative trends, errors |
| Orange | `#FF9800` | `#FFE0B2` | Warnings, attention |
| Purple | `#9C27B0` | `#E1BEE7` | Tertiary data |
| Teal | `#009688` | `#B2DFDB` | Alternative primary |
| Yellow | `#FFEB3B` | `#FFF9C4` | Highlight, accent data |
| Gray | `#9E9E9E` | `#F5F5F5` | Neutral, inactive |

***

## 2. Typography

### Font Stacks

```css
/* Primary — Google Sans / Material (Kaggle uses Google's font stack) */
--kaggle-font-primary: "Google Sans", "Roboto", -apple-system,
                        BlinkMacSystemFont, "Segoe UI",
                        Helvetica, Arial, sans-serif;

/* Body / UI Text */
--kaggle-font-body: "Roboto", -apple-system, BlinkMacSystemFont,
                    "Segoe UI", Helvetica, Arial, sans-serif;

/* Code / Technical */
--kaggle-font-mono: "Roboto Mono", "Source Code Pro",
                    Monaco, Menlo, Consolas, "Courier New", monospace;
```

### Type Scale

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display Hero | 48px | 400 (Normal) | 1.15 | Landing hero heading |
| Heading Large | 34px | 400 (Normal) | 1.2 | Page-level titles, competition headers |
| Heading Medium | 24px | 500 (Medium) | 1.3 | Section headings |
| Heading Small | 20px | 500 (Medium) | 1.4 | Card titles, sub-sections |
| Body Large | 16px | 400 (Normal) | 1.75 | Lead descriptions, notebook prose |
| Body Default | 14px | 400 (Normal) | 1.6 | Standard UI text, descriptions |
| Body Small | 13px | 400 (Normal) | 1.5 | Secondary info, metadata |
| Caption | 12px | 400 (Normal) | 1.33 | Timestamps, small labels |
| Code | 13px | 400 (Normal) | 1.5 | Inline code, notebook cells |
| Button | 14px | 500 (Medium) | 1.43 | Button labels, tab labels |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Normal | 400 | Body text, descriptions, standard UI |
| Medium | 500 | Buttons, tab labels, card titles |
| Bold | 700 | Strong emphasis, competition headings |

### Typography Guidelines

- **Line length:** Max 800px for notebook prose; 65ch for long-form text
- **Alignment:** Left-aligned by default; center for hero and empty states
- **Code blocks:** Always use `--kaggle-font-mono` for all code content
- **Numbers:** Tabular figures (`font-variant-numeric: tabular-nums`) for scores and leaderboards
- **Hierarchy:** Size and weight define hierarchy; color used only for links and status
- **RTL:** Supported for international community members

***

## 3. Spacing & Layout

### Base Spacing Scale

| Token | Value | Pixels | CSS Variable |
|-------|-------|--------|--------------|
| 2 | 0.125rem | 2px | `--kaggle-space-2` |
| 4 | 0.25rem | 4px | `--kaggle-space-4` |
| 8 | 0.5rem | 8px | `--kaggle-space-8` |
| 12 | 0.75rem | 12px | `--kaggle-space-12` |
| 16 | 1rem | 16px | `--kaggle-space-16` |
| 20 | 1.25rem | 20px | `--kaggle-space-20` |
| 24 | 1.5rem | 24px | `--kaggle-space-24` |
| 32 | 2rem | 32px | `--kaggle-space-32` |
| 40 | 2.5rem | 40px | `--kaggle-space-40` |
| 48 | 3rem | 48px | `--kaggle-space-48` |
| 64 | 4rem | 64px | `--kaggle-space-64` |

### Content Width Containers

| Container | Max Width | Usage |
|-----------|-----------|-------|
| Narrow | 640px | Forms, settings, sign-in pages |
| Content | 800px | Documentation, blog posts, notebooks |
| Default | 1024px | General content pages |
| Wide | 1280px | Competition pages, leaderboards |
| Full | 100% | Dashboard, notebook editor |

### Breakpoints

| Name | Value | Usage |
|------|-------|-------|
| Mobile | 375px | Minimum phone width |
| Small | 600px | Large phones / small tablets |
| Medium | 960px | Tablets, collapsed sidebar |
| Large | 1280px | Desktop standard |
| X-Large | 1600px | Wide desktop monitors |

### Layout Grid

- **8px baseline grid:** All spacing aligns to 8px increments
- **Material Design grid:** 12-column fluid grid with 24px gutters
- **Sidebar:** 280px fixed left sidebar (collapses to icons at medium) 
- **Main content:** Flexible fill, max-width depends on page type
- **Navbar height:** 64px fixed top

***

## 4. Borders & Shadows

### Border Width

| Style | Value | CSS Variable | Usage |
|-------|-------|--------------|-------|
| Thin (Default) | 1px | `--kaggle-border-thin` | Cards, inputs, dividers |
| Active | 2px | `--kaggle-border-active` | Selected tab, focused input |
| Focus Ring | 3px | `--kaggle-border-focus` | Keyboard focus states |

### Border Radius

| Size | Value | CSS Variable | Usage |
|------|-------|--------------|-------|
| None | 0px | `--kaggle-radius-none` | Tables, full-width elements |
| Small | 2px | `--kaggle-radius-small` | Tags, chips on dense layouts |
| Medium | 4px | `--kaggle-radius-medium` | Inputs, small cards |
| Large | 8px | `--kaggle-radius-large` | Main cards, dialogs |
| X-Large | 16px | `--kaggle-radius-xlarge` | Hero cards, feature panels |
| Full | 9999px | `--kaggle-radius-full` | Avatars, badge pills, chips |

### Shadows (Material Elevation)

| Level | Value | Usage |
|-------|-------|-------|
| Elevation 0 | `none` | Flat elements, table rows |
| Elevation 1 | `0 1px 2px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)` | Cards (resting) |
| Elevation 2 | `0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.06)` | Dropdown menus |
| Elevation 4 | `0 4px 8px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.08)` | Cards (hover) |
| Elevation 8 | `0 8px 16px rgba(0,0,0,0.15), 0 16px 32px rgba(0,0,0,0.1)` | Dialogs, modals |

### Focus States

```css
--kaggle-focus-color:  #1CA3EC;
--kaggle-focus-width:  3px;
--kaggle-focus-style:  solid;
--kaggle-focus-offset: 2px;
```

***

## 5. Iconography

### Icon System

Kaggle uses **Material Icons** (Google) as its primary icon set, consistent with its Material Design foundation.

```html
<!-- Material Icons via Google CDN -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<span class="material-icons">code</span>
```

### Icon Sizes

| Size | Dimensions | Usage |
|------|------------|-------|
| 16px | 16 × 16 | Inline text icons, tight UI |
| 18px | 18 × 18 | Chip icons, small buttons |
| 20px | 20 × 20 | List item icons |
| 24px | 24 × 24 | Standard UI icons (default) |
| 36px | 36 × 36 | Feature highlights |
| 48px | 48 × 48 | Empty states, onboarding |

### Icon Categories

| Category | Examples | Usage |
|----------|----------|-------|
| **Navigation** | home, search, notifications, menu | Top nav, sidebar |
| **Competitions** | emoji_events, leaderboard, timer | Competition pages |
| **Data** | dataset, table_chart, bar_chart | Dataset views |
| **Code** | code, terminal, play_arrow, stop | Notebook interface |
| **Models** | model_training, psychology, hub | Model hub |
| **Community** | people, forum, thumb_up, share | Discussions, forums |
| **User** | person, account_circle, star | Profile, medals |
| **Actions** | download, upload, edit, delete | CRUD operations |
| **Status** | check_circle, error, warning, info | State indicators |
| **Media** | image, videocam, attach_file | Media content |

### Key UI Icons

```
notebook        — code (or laptop_chromebook)
dataset         — dataset / storage
competition     — emoji_events
discussion      — forum
profile         — account_circle
medal           — military_tech
upvote          — thumb_up / arrow_upward
leaderboard     — leaderboard
run/execute     — play_arrow
stop            — stop
save            — save
fork            — fork_right / call_split
share           — share
download        — download
search          — search
settings        — settings
filter          — filter_list
sort            — sort
```

***

## 6. Component Patterns

### Buttons

#### Button Variants

| Variant | Background | Border | Text | Usage |
|---------|------------|--------|------|-------|
| Primary (Contained) | `#20BEFF` | none | `#FFFFFF` | Main CTAs (Submit, Run) |
| Primary Hover | `#1CA3EC` | none | `#FFFFFF` | Hover state |
| Primary Active | `#008ABF` | none | `#FFFFFF` | Pressed state |
| Secondary (Outlined) | transparent | `#20BEFF` | `#20BEFF` | Secondary actions |
| Secondary Hover | `#E3F2FD` | `#1CA3EC` | `#1CA3EC` | Hover state |
| Ghost / Text | transparent | none | `#1CA3EC` | Inline actions, nav links |
| Destructive | `#F44336` | none | `#FFFFFF` | Delete, remove actions |
| Disabled | `#E0E0E0` | none | `#9E9E9E` | Inactive state |

#### Button Sizes

| Size | Height | Padding | Font Size | Border Radius |
|------|--------|---------|-----------|---------------|
| Small | 32px | 6px 16px | 13px | 4px |
| Default | 40px | 8px 24px | 14px | 4px |
| Large | 48px | 12px 32px | 16px | 4px |
| Icon Button | 40px | 8px | — | 50% |

### Navigation (Top Bar)

```css
/* Fixed top navbar */
position: fixed;
top: 0; left: 0; right: 0;
height: 64px;
background: #FFFFFF;
border-bottom: 1px solid #E0E0E0;
box-shadow: 0 1px 2px rgba(0,0,0,0.06);
z-index: 1000;

/* Logo area */
width: 160px;
padding: 0 16px;

/* Nav links */
font-size: 14px;
font-weight: 500;
color: #616161;
padding: 0 12px;
height: 64px;
border-bottom: 3px solid transparent;

/* Active nav link */
color: #20BEFF;
border-bottom-color: #20BEFF;
```

### Sidebar Navigation

```css
/* Left sidebar */
width: 280px;
position: fixed;
top: 64px;
left: 0;
bottom: 0;
background: #FFFFFF;
border-right: 1px solid #E0E0E0;
overflow-y: auto;
padding: 8px 0;

/* Sidebar item */
display: flex;
align-items: center;
gap: 16px;
padding: 12px 24px;
font-size: 14px;
font-weight: 500;
color: #616161;
border-radius: 0 24px 24px 0;
margin-right: 8px;

/* Active sidebar item */
background: #E3F2FD;
color: #1CA3EC;
```

### Competition Cards

```css
/* Competition card */
background: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 8px;
padding: 24px;
transition: box-shadow 0.2s ease;

/* Card hover */
box-shadow: 0 4px 8px rgba(0,0,0,0.12);
border-color: #BDBDBD;

/* Prize badge */
background: #FFF8E1;
color: #F57F17;
border-radius: 4px;
padding: 4px 8px;
font-size: 12px;
font-weight: 500;

/* Deadline chip */
background: #FFEBEE;
color: #C62828;
border-radius: 4px;
padding: 4px 8px;
font-size: 12px;
```

### Notebook / Code Cells

```css
/* Code cell container */
background: #F7F7F7;
border: 1px solid #E0E0E0;
border-radius: 4px;
font-family: "Roboto Mono", monospace;
font-size: 13px;
line-height: 1.5;
padding: 12px 16px;
overflow-x: auto;

/* Input cell (active) */
border-left: 3px solid #20BEFF;

/* Output cell */
background: #FFFFFF;
border-left: 3px solid #E0E0E0;
padding: 12px 16px;

/* Cell running state */
border-left-color: #FF9800;

/* Cell execution count */
color: #9E9E9E;
font-size: 12px;
min-width: 40px;
text-align: right;
padding-right: 8px;
```

### Leaderboard Table

```css
/* Table container */
background: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 8px;
overflow: hidden;

/* Table header */
background: #F5F5F5;
font-size: 12px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.5px;
color: #616161;
padding: 12px 16px;

/* Table row */
padding: 12px 16px;
border-bottom: 1px solid #EEEEEE;
font-size: 14px;
font-variant-numeric: tabular-nums;

/* Row hover */
background: #F8F8F8;

/* Top 3 rows */
background: linear-gradient(to right, #FFF8E1, #FFFFFF);

/* Medal column */
font-size: 20px;
width: 48px;
```

### Form Controls

#### Text Input

| State | Border | Background | Shadow |
|-------|--------|------------|--------|
| Rest | `#E0E0E0` | `#FFFFFF` | none |
| Hover | `#BDBDBD` | `#FFFFFF` | none |
| Focus | `#20BEFF` | `#FFFFFF` | `0 0 0 3px rgba(32,190,255,0.2)` |
| Error | `#F44336` | `#FFFFFF` | `0 0 0 3px rgba(244,67,54,0.2)` |
| Disabled | `#E0E0E0` | `#F5F5F5` | none |

#### Select / Dropdown

```css
background: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 4px;
padding: 8px 12px;
font-size: 14px;
color: #212121;

/* Dropdown panel */
background: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 4px;
box-shadow: 0 4px 8px rgba(0,0,0,0.12);
max-height: 300px;
overflow-y: auto;

/* Dropdown item hover */
background: #F5F5F5;
```

### Avatars & User Medals

| Size | Dimensions | Border Radius | Usage |
|------|------------|---------------|-------|
| Mini | 20px | 50% | Inline mentions, compact lists |
| Small | 32px | 50% | Table rows, comments |
| Medium | 40px | 50% | Navigation bar |
| Large | 64px | 50% | Profile page, competition cards |
| X-Large | 96px | 50% | Full profile view |

### Rank Badges

```css
/* Base badge */
display: inline-flex;
align-items: center;
gap: 4px;
padding: 2px 8px;
border-radius: 9999px;
font-size: 12px;
font-weight: 500;

/* Grandmaster */
background: #FFEBEE; color: #FF0000;

/* Master */
background: #F3E5F5; color: #8B00FF;

/* Expert */
background: #E3F2FD; color: #008ABF;

/* Contributor */
background: #F5F5F5; color: #616161;

/* Novice */
background: #FAFAFA; color: #9E9E9E;
```

### Tags / Chips

```css
/* Default tag */
background: #F5F5F5;
color: #616161;
border-radius: 9999px;
padding: 4px 12px;
font-size: 12px;
font-weight: 400;

/* Interactive tag (hover) */
background: #E0E0E0;
cursor: pointer;

/* Selected tag */
background: #E3F2FD;
color: #1CA3EC;

/* Topic tag (Python, ML, etc.) */
background: #E8F5E9;
color: #2E7D32;
```

***

## 7. Motion & Animation

### Duration Tokens

| Speed | Duration | Usage |
|-------|----------|-------|
| Instant | 100ms | Ripple start, immediate feedback |
| Fast | 150ms | Hover states, tooltip appearance |
| Normal | 200ms | Dropdown open, tab change |
| Slow | 300ms | Page-level transitions, dialog open |
| X-Slow | 400ms | Progress bars, score animations |

### Easing Functions (Material Motion)

```css
--kaggle-ease-standard:    cubic-bezier(0.4, 0.0, 0.2, 1);  /* Most transitions */
--kaggle-ease-decelerate:  cubic-bezier(0.0, 0.0, 0.2, 1);  /* Enter screen */
--kaggle-ease-accelerate:  cubic-bezier(0.4, 0.0, 1.0, 1);  /* Exit screen */
--kaggle-ease-sharp:       cubic-bezier(0.4, 0.0, 0.6, 1);  /* Temporary surfaces */
```

### Animation Patterns

| Pattern | Duration | Easing | Usage |
|---------|----------|--------|-------|
| Material Ripple | 400ms | ease-out | Button, card clicks |
| Sidebar expand | 250ms | ease-in-out | Mobile sidebar open |
| Score counter | 1000ms | ease-out | Leaderboard score reveal |
| Progress bar fill | 600ms | ease-in-out | Submission progress |
| Card hover lift | 200ms | standard | Card elevation change |
| Tab indicator slide | 200ms | standard | Active tab transition |
| Notification slide in | 300ms | decelerate | Toast/snackbar appear |
| Dialog open | 300ms | decelerate | Modal/dialog entrance |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

***

## 8. Accessibility Standards

### Color Contrast Requirements

| Element | Minimum Ratio | Standard |
|---------|---------------|----------|
| Body text (14px default) | 4.5:1 | WCAG AA |
| Large text (18px+ or 14px bold) | 3:1 | WCAG AA |
| UI components (borders, icons) | 3:1 | WCAG AA |
| Score text (tabular numbers) | 4.5:1 | WCAG AA |
| Placeholder text | 3:1 | WCAG AA |
| Disabled text | No requirement | Decorative |

### Focus States

- All interactive elements must show visible focus rings
- Focus outline: `3px solid #20BEFF` with `2px offset`
- Never suppress `:focus-visible` without alternative
- Material ripple must not replace keyboard focus indicators

### Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Move to next focusable element |
| Shift + Tab | Move to previous focusable element |
| Enter / Space | Activate buttons, run cells |
| Arrow Keys | Navigate leaderboard, dropdowns |
| Escape | Close dialog, dismiss overlay |
| Ctrl + Enter | Run notebook cell |
| Shift + Enter | Run cell and move to next |

### ARIA Patterns

```html
<!-- Leaderboard table -->
<table role="grid" aria-label="Competition leaderboard">
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending">Rank</th>
      <th scope="col">Team Name</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
</table>

<!-- Rank badge -->
<span role="img" aria-label="Grandmaster rank">
  <svg aria-hidden="true">...</svg>
  Grandmaster
</span>

<!-- Notebook cell running state -->
<div role="status" aria-live="polite" aria-label="Cell executing">
  Running...
</div>

<!-- Upvote button -->
<button aria-pressed="false" aria-label="Upvote notebook (142 votes)">
  <span class="material-icons" aria-hidden="true">thumb_up</span>
  <span>142</span>
</button>
```

### Screen Reader Considerations

- Use semantic HTML (`<nav>`, `<main>`, `<table>`, `<article>`)
- Announce leaderboard score changes with `aria-live="polite"`
- Notebook cell output regions: `role="region"` with descriptive label
- Medal icons: always include text alternative
- Score numbers: include unit in accessible label ("Score: 0.9821 RMSE")

***

## 9. Platform-Specific Guidelines

### Web Application Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│ Navbar (fixed, 64px, white + bottom border + subtle shadow)     │
│  [≡ Kaggle Logo] | Competitions | Datasets | Code | Models |   │
│                              [Search Bar]    [Notifications] [👤]│
├───────────────────┬─────────────────────────────────────────────┤
│                   │                                             │
│  Left Sidebar     │   Main Content Area                        │
│  (280px fixed)    │   max-width: varies by page type            │
│                   │                                             │
│  - Your Work      │  ┌─────────────────────────────────────┐   │
│  - Competitions   │  │ Page Header / Hero                  │   │
│  - Datasets       │  ├─────────────────────────────────────┤   │
│  - Notebooks      │  │ Content (cards, table, notebook)    │   │
│  - Models         │  └─────────────────────────────────────┘   │
│  - Discussions    │                                             │
│  - Learn          │                                             │
└───────────────────┴─────────────────────────────────────────────┘
```

### Competition Page Pattern

```
Page Header (cover image + title + host + prize + deadline)
  ├── Competition tabs: Overview | Data | Notebooks | Discussion | Leaderboard | Rules | Team
  └── Join Competition button (primary CTA)

Overview Tab
  ├── Description (rich text, max-width 800px)
  ├── Evaluation metric explanation
  └── Timeline section

Leaderboard Tab
  ├── Public / Private toggle
  ├── Score + Rank + Team columns
  ├── Top 3 highlighted rows
  └── My submission row (sticky highlight)
```

### Notebook Editor Layout

```
Top bar (Run | Stop | Save | Share | settings)
  ├── Notebook title (editable inline)
  └── Accelerator badge (GPU/TPU/CPU)

Cell Area (full height, scrollable)
  ├── Code cells (input + output pairs)
  ├── Markdown cells (rendered)
  └── Cell toolbar (run, add, delete, move)

Right Panel (collapsible, 320px)
  ├── Session info (runtime, memory)
  ├── Variables explorer
  └── Data tab (attached datasets)
```

### Dataset Page Pattern

```
Header (title + owner avatar + usability score + license)
  └── Download button (primary) + New Notebook (secondary)

Tabs: Data | Code | Discussion | Activity

Data Tab
  ├── File tree (left panel)
  └── Data preview / column stats (main panel)
       ├── Column name + type
       ├── Unique values, nulls %
       └── Mini histogram or bar chart
```

### Dialog / Modal Sizes

| Type | Max Width | Usage |
|------|-----------|-------|
| Tooltip | 200px | Quick hints |
| Snackbar | 568px | Action toasts, notifications |
| Small Dialog | 380px | Confirmations |
| Medium Dialog | 560px | Forms, settings |
| Large Dialog | 800px | Dataset preview, code viewer |
| Full Screen | 100% | Mobile dialogs |

***

## Quick Reference

### Essential CSS Variables

```css
/* Brand */
--kaggle-color-brand:    #20BEFF;
--kaggle-color-accent:   #1CA3EC;
--kaggle-color-primary:  #008ABF;
--kaggle-color-navy:     #003A70;
--kaggle-link-color:     #1CA3EC;

/* Light surfaces */
--kaggle-bg-default:     #FFFFFF;
--kaggle-bg-muted:       #F8F8F8;
--kaggle-bg-surface:     #F5F5F5;
--kaggle-bg-code:        #F7F7F7;

/* Dark surfaces */
--kaggle-bg-dark:        #1A1A2E;
--kaggle-bg-dark-surface:#16213E;

/* Text */
--kaggle-text-default:   #212121;
--kaggle-text-muted:     #616161;
--kaggle-text-secondary: #9E9E9E;

/* Borders */
--kaggle-border-default: #E0E0E0;
--kaggle-border-subtle:  #EEEEEE;

/* Competition ranks */
--kaggle-gold:           #F5A623;
--kaggle-silver:         #C0C0C0;
--kaggle-bronze:         #CD7F32;
--kaggle-grandmaster:    #FF0000;
--kaggle-master:         #8B00FF;
--kaggle-expert:         #008ABF;

/* Status */
--kaggle-color-success:  #2E7D32;
--kaggle-color-error:    #C62828;
--kaggle-color-warning:  #F57F17;
--kaggle-color-info:     #1565C0;
--kaggle-color-running:  #00838F;

/* Typography */
--kaggle-font-primary: "Google Sans", "Roboto", sans-serif;
--kaggle-font-body:    "Roboto", sans-serif;
--kaggle-font-mono:    "Roboto Mono", "Source Code Pro", monospace;

/* Spacing */
--kaggle-space-8:  0.5rem;
--kaggle-space-16: 1rem;
--kaggle-space-24: 1.5rem;
--kaggle-space-32: 2rem;

/* Radius */
--kaggle-radius-medium: 4px;
--kaggle-radius-large:  8px;
--kaggle-radius-full:   9999px;

/* Focus */
--kaggle-focus-color:   #20BEFF;
--kaggle-focus-width:   3px;
--kaggle-focus-offset:  2px;
```

### Resources

- **Kaggle Homepage:** https://www.kaggle.com
- **Brand Guidelines:** https://www.kaggle.com/brand-guidelines
- **Competitions:** https://www.kaggle.com/competitions
- **Datasets:** https://www.kaggle.com/datasets
- **Notebooks:** https://www.kaggle.com/code
- **Models:** https://www.kaggle.com/models
- **Learn:** https://www.kaggle.com/learn
- **Discussions:** https://www.kaggle.com/discussions
- **Documentation:** https://www.kaggle.com/docs

***

*Based on Kaggle's publicly observable web design patterns, Material Design foundations (Google), and official Kaggle brand references. For the most current specifications, refer to kaggle.com and the official brand guidelines.*
