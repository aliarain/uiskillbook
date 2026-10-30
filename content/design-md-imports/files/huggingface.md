# Hugging Face Design System

> Community-first AI platform design with cheerful yellow accents, open-source utility, and dense but approachable information architecture. Hugging Face combines playful brand signals with practical product surfaces so models, datasets, Spaces, and docs can all coexist without the UI feeling closed-off or corporate.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Hugging Face expresses **open AI collaboration with technical friendliness**. The design does not chase luxury minimalism or enterprise severity. Instead, it prioritizes clarity, community energy, and fast navigation across a very broad ecosystem of models, datasets, applications, and documentation.

### Mood & Feeling
- **Welcoming**: the platform should feel inviting to researchers, hobbyists, and teams
- **Collaborative**: layouts should suggest participation and discovery
- **Practical**: dense listings and metadata must remain easy to scan
- **Playful**: brand personality shows up in iconography, mascots, and warm accents
- **Open-source**: product surfaces should feel accessible rather than gated

### Design Density
**Medium-to-high density**. Hugging Face often shows large lists, cards, stats, tags, tabs, and activity surfaces. The density works because the hierarchy is straightforward, cards are contained, and accents stay restrained.

### Visual Character
- White and off-white foundations with gentle gray dividers
- Hugging Face yellow and orange used as selective brand energy
- Rounded cards, chips, badges, and listing modules
- Heavy use of community content blocks and metadata rows
- Friendly illustrations and mascots alongside technical surfaces
- Clean product language without glossy enterprise effects

---

## 2. Color Palette & Roles

### Official Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--hf-yellow` | `#FFD21E` | Primary brand accent and highlight |
| `--hf-orange` | `#FF9D00` | Secondary accent, emphasis, and warmth |
| `--hf-gray` | `#6B7280` | Neutral supporting brand gray |

### Product Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--surface-page` | `#FFFFFF` | Main canvas |
| `--surface-subtle` | `#F9FAFB` | Light section fill |
| `--surface-card` | `#FFFFFF` | Cards and modules |
| `--ink-strong` | `#111827` | Primary text |
| `--ink-default` | `#374151` | Body text |
| `--ink-muted` | `#6B7280` | Metadata and secondary text |
| `--border-default` | `#E5E7EB` | Dividers and borders |
| `--border-strong` | `#D1D5DB` | Stronger module separators |

### Supporting State Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#16A34A` | Healthy status / positive result |
| `--info` | `#2563EB` | Links and informational state |
| `--warning` | `#F59E0B` | Warning or caution |
| `--danger` | `#DC2626` | Error / destructive state |

### Color Usage Rules
- Use yellow as the signature identity cue, not as the entire UI background.
- Let white and soft-gray surfaces carry the product so dense content stays readable.
- Use orange to add warmth and motion around highlighted content or badges.
- Keep strong colors concentrated in chips, buttons, counts, and brand moments.
- Avoid dark, cinematic styling that would conflict with Hugging Face’s open community feel.

---

## 3. Typography Rules

### Font Stack

```css
--font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
             "Segoe UI", "Helvetica Neue", Arial, sans-serif;

--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| Hero Display | 56px | 700 | 1.05 | Homepage hero |
| Page Title | 36px | 700 | 1.15 | Main page title |
| Section Title | 28px | 700 | 1.2 | Section headers |
| Card Title | 20px | 600 | 1.3 | Cards and modules |
| Subsection | 18px | 600 | 1.35 | List or block headers |
| Body Large | 18px | 400 | 1.65 | Intro text |
| Body | 16px | 400 | 1.6 | Standard text |
| Small Body | 14px | 400 | 1.5 | Metadata, descriptions |
| Label | 13px | 600 | 1.4 | Tabs, chips, inputs |
| Code | 13px | 500 | 1.55 | Model IDs, commands, snippets |

### Typography Guidance
- Use direct, unpretentious sans-serif typography.
- Keep headings bold and practical rather than editorial.
- Use monospace for model names, repository identifiers, and code examples.
- Preserve readable line lengths in docs and content-heavy surfaces.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #111827;
  color: #FFFFFF;
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid #111827;
  border-radius: 10px;
  font: 600 14px/1 ui-sans-serif, system-ui, sans-serif;
}

.button-primary:hover {
  background: #1F2937;
  border-color: #1F2937;
}
```

#### Accent Button
```css
.button-accent {
  background: #FFD21E;
  color: #111827;
  min-height: 40px;
  padding: 0 16px;
  border: 1px solid #EAB308;
  border-radius: 10px;
  font: 600 14px/1 ui-sans-serif, system-ui, sans-serif;
}
```

### Inputs

#### Search / Text Input
```css
.input {
  width: 100%;
  min-height: 42px;
  padding: 0 14px;
  background: #FFFFFF;
  color: #111827;
  border: 1px solid #D1D5DB;
  border-radius: 10px;
  font: 400 15px/1.2 ui-sans-serif, system-ui, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #111827;
  box-shadow: 0 0 0 3px rgba(255, 210, 30, 0.28);
}
```

### Cards and Repository Modules

#### Listing Card
```css
.card {
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 16px;
  padding: 20px;
}
```

#### Chip / Badge
```css
.chip {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  background: #F9FAFB;
  color: #374151;
  border: 1px solid #E5E7EB;
  border-radius: 999px;
  font: 600 12px/1 ui-sans-serif, system-ui, sans-serif;
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Tight metadata spacing |
| `--space-3` | `12px` | Chip and inline spacing |
| `--space-4` | `16px` | Core spacing |
| `--space-5` | `20px` | Card padding |
| `--space-6` | `24px` | Section grouping |
| `--space-8` | `32px` | Larger content rhythm |
| `--space-10` | `48px` | Major section spacing |

### Layout Rules
- Prioritize fast scanning of lists, tags, and metrics.
- Keep repository-like cards modular and easy to compare.
- Use chips, counts, and badges to expose metadata without long prose.
- Let community and technical content sit side by side without over-designing the transition.
- Preserve a clear search-first and discovery-first hierarchy.

### Grid Approach
- Use a flexible multi-column desktop grid for cards, listings, and collections.
- Collapse progressively on tablet while keeping filters and metadata visible.
- On mobile, stack cards cleanly and move secondary stats beneath titles.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | white / soft gray field | Default page background |
| Card | bordered white panel | Listings, content blocks |
| Featured card | white panel with stronger border or accent | Highlighted content |
| Overlay | elevated white panel | Menus, dialogs, search layers |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 4px 10px rgba(17, 24, 39, 0.05);
}

.shadow-panel {
  box-shadow: 0 10px 24px rgba(17, 24, 39, 0.08);
}

.shadow-overlay {
  box-shadow: 0 18px 40px rgba(17, 24, 39, 0.12);
}
```

### Elevation Guidance
- Default to borders before relying on heavy shadows.
- Use stronger elevation only for overlays, menus, and high-priority modules.
- Keep the product feeling practical and lightweight, not glossy.

---

## 7. Do's and Don'ts

### Do
- Keep technical discovery fast and visually structured.
- Use playful brand cues in moderation.
- Support both community energy and engineering utility.
- Make tags, counts, and status labels easy to parse at a glance.
- Preserve a welcoming, non-elite tone in both visuals and copy.

### Don't
- Over-style content cards with enterprise gradients or luxury effects.
- Turn the interface into a dark, dramatic AI dashboard.
- Hide metadata behind excessive interactions.
- Use yellow so aggressively that text readability suffers.
- Make the product feel exclusive or closed.

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Single-column cards, stacked filters, compressed metadata |
| Tablet | `768px` | Two-column content where helpful, simplified side panels |
| Desktop | `1200px` | Multi-column discovery surfaces, full navigation and stats |

### Mobile Rules
- Stack repository metadata beneath titles instead of forcing horizontal compression.
- Keep search and primary navigation accessible at the top.
- Preserve `44px` tap targets for chips, tabs, and actions.
- Reduce card count per row before reducing information clarity.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Theme**: open AI collaboration platform with practical community-first clarity
- **Primary colors**: `#FFD21E`, `#FF9D00`, `#111827`, `#6B7280`
- **Surfaces**: white and soft-gray modular cards with restrained borders
- **Typography**: straightforward system sans, monospace for technical identifiers
- **Components**: rounded listing cards, pills, search inputs, compact metadata
- **Mood**: welcoming, open-source, useful, playful but not childish

### Prompt Snippet

```text
Design this interface in the style of Hugging Face: bright but restrained yellow brand accents, white modular repository-style cards, practical system sans typography, compact metadata chips, approachable open-source community energy, and high scanability across dense technical content.
```
