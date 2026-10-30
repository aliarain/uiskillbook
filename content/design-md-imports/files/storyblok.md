# Storyblok Design System

> Headless CMS design with bright blue brand confidence, visual editing clarity, and component-based content structure.

---

## 1. Visual Theme & Atmosphere

Storyblok should feel like a visual editor for structured content. The design supports components, blocks, stories, live preview, localization, approval workflows, and developer-friendly headless delivery.

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--storyblok-blue` | `#00A9FF` | Primary brand/action color |
| `--storyblok-navy` | `#0B1F33` | Strong text and dark panels |
| `--storyblok-green` | `#00B37A` | Published / approved state |
| `--storyblok-purple` | `#7C3AED` | Component / workflow accent |
| `--surface-page` | `#F8FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Story cards |
| `--border-default` | `#E2E8F0` | Dividers |
| `--text-muted` | `#64748B` | Metadata |

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 58px | 700 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 650 | 1.2 |
| Block Title | 20px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Code | 13px | 500 | 1.55 |

## 4. Component Stylings

```css
.button-primary { min-height: 44px; padding: 0 18px; border-radius: 10px; border: 1px solid #00A9FF; background: #00A9FF; color: #fff; font: 600 14px/1 Inter, sans-serif; }
.story-card { border: 1px solid #E2E8F0; border-radius: 16px; background: #fff; padding: 18px; }
.visual-preview { border-radius: 16px; border: 1px solid #E2E8F0; background: #fff; overflow: hidden; }
.component-pill { background: rgba(124, 58, 237, 0.12); color: #6D28D9; border-radius: 999px; padding: 6px 10px; }
```

## 5. Layout Principles

Organize around space, story, component, field, preview, workflow, localization, and API delivery. Keep visual preview and structured fields connected.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(11, 31, 51, 0.07); }
.shadow-preview { box-shadow: 0 20px 48px rgba(11, 31, 51, 0.14); }
```

## 7. Do's and Don'ts

Do make visual editing obvious. Do show component boundaries clearly. Do not make headless CMS UI look like a static document editor.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack fields and previews |
| Tablet | `768px` | Two-column editor/preview |
| Desktop | `1200px` | Full visual editing workspace |

## 9. Agent Prompt Guide

Design like Storyblok: bright blue headless CMS UI, visual preview frames, component pills, structured story cards, publishing states, and component-based content clarity.
