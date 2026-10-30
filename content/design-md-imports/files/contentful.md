# Contentful Design System

> Headless CMS design with professional blue identity, content-model clarity, structured entry surfaces, and API-first editorial UX.

---

## 1. Visual Theme & Atmosphere

Contentful should feel structured, professional, and editorial. The design language communicates content modeling, multi-channel delivery, localization, and developer-friendly CMS workflows.

- Mood: structured, professional, productive, technical
- Density: high, with content entry forms, model graphs, and asset library grids
- Character: professional blue brand, clean white entry forms, gray sidebar structure, field-type color coding

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--cf-blue` | `#0059C8` | Primary brand CTA and nav highlights |
| `--cf-blue-dark` | `#004299` | Hover and active states |
| `--cf-teal` | `#038051` | Published status and active entries |
| `--cf-amber` | `#D97706` | Draft and changed entries |
| `--cf-red` | `#CC3300` | Archived, error, and delete |
| `--cf-purple` | `#7B4FBD` | Rich-text and content-type accent |
| `--surface-card` | `#FFFFFF` | Entry forms and asset cards |
| `--surface-bg` | `#F7F9FC` | App background |
| `--surface-sidebar` | `#192D3E` | Navigation sidebar |
| `--text-primary` | `#0A2540` | Entry field labels and values |
| `--border-default` | `#D3DCE6` | Field and panel borders |

Entry status (published/draft/changed/archived) must use the exact green/amber/blue/red scale. Never repurpose these for other use cases.

## 3. Typography Rules

```css
--font-sans: "Avenir Next", Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 30px | 700 | 1.1 |
| Section Title | 22px | 600 | 1.2 |
| Field Label | 14px | 600 | 1.3 |
| Field Value | 15px | 400 | 1.5 |
| Body | 15px | 400 | 1.6 |
| Badge | 12px | 600 | 1.3 |
| Caption | 12px | 400 | 1.4 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 40px;
  padding: 0 16px;
  border: none;
  border-radius: 6px;
  background: #0059C8;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.entry-field {
  border: 1px solid #D3DCE6;
  border-radius: 6px;
  padding: 10px 14px;
  font: 400 15px/1.5 Inter, sans-serif;
  background: #FFFFFF;
}

.status-pill {
  display: inline-flex;
  padding: 3px 10px;
  border-radius: 999px;
  font: 600 12px/1.4 Inter, sans-serif;
}

.model-node {
  border: 2px solid #0059C8;
  border-radius: 10px;
  background: #FFFFFF;
  padding: 12px 16px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Field label-to-input gap |
| `--space-4` | `16px` | Form field spacing |
| `--space-6` | `24px` | Section padding |
| `--space-10` | `40px` | Major section gaps |

Entry forms: field label above, input below, hint text in caption size below that. Sidebar always visible on desktop for navigation and filter.

## 6. Depth & Elevation

```css
.shadow-card   { box-shadow: 0 1px 4px rgba(10, 37, 64, 0.06); }
.shadow-panel  { box-shadow: 0 6px 20px rgba(0, 89, 200, 0.10); }
.shadow-modal  { box-shadow: 0 20px 50px rgba(10, 37, 64, 0.18); }
```

Entry editing surfaces are flat. Reserve shadow for floating toolbars, command palette, and publish modals.

## 7. Do's and Don'ts

Do color-code entry status consistently across all views. Do use mono font for field API names and JSON previews. Do make the "Publish" action always visually distinct. Do not use blue for both the brand and the "draft" status. Do not hide content relationships behind extra navigation.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Entry list only, no inline editing |
| Tablet | `768px` | Simplified entry form, tab-based field groups |
| Desktop | `1200px` | Full three-panel: sidebar + entry list + form |

Content management is fundamentally a desktop workflow — optimize the desktop experience above all else.

## 9. Agent Prompt Guide

Design like Contentful: professional blue CTAs, dark sidebar navigation, structured entry forms, consistent status-badge color coding, field-type clarity, and API-name mono labels.
