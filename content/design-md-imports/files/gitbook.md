# GitBook Design System

> Knowledge-layer design with polished documentation surfaces, AI-ready content tools, and warm editorial accents.

---

## 1. Visual Theme & Atmosphere

GitBook should feel like product knowledge made structured, searchable, and AI-ready. The design supports docs, help centers, developer portals, Git sync, visual editing, assistants, insights, and custom publishing.

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--gitbook-ink` | `#111827` | Primary text |
| `--gitbook-blue` | `#346DFF` | Primary action and link |
| `--gitbook-orange` | `#FF8A3D` | Warm editorial accent |
| `--gitbook-purple` | `#8B5CF6` | AI assistant accent |
| `--surface-page` | `#F8FAFC` | Docs background |
| `--surface-card` | `#FFFFFF` | Content cards |
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
| Doc Title | 22px | 650 | 1.3 |
| Body | 16px | 400 | 1.7 |
| Code | 13px | 500 | 1.55 |

## 4. Component Stylings

```css
.button-primary { min-height: 44px; padding: 0 18px; border-radius: 10px; border: 1px solid #346DFF; background: #346DFF; color: #fff; font: 600 14px/1 Inter, sans-serif; }
.doc-card { border: 1px solid #E2E8F0; border-radius: 16px; background: #fff; padding: 18px; }
.assistant-panel { border-radius: 16px; background: #111827; color: #fff; padding: 18px; }
.search-box { min-height: 46px; border: 1px solid #E2E8F0; border-radius: 12px; padding: 0 14px; }
```

## 5. Layout Principles

Organize around space, docs, API, changelog, assistant, editor, sync, insights, and custom domain. Prioritize search and navigation.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(17, 24, 39, 0.06); }
.shadow-panel { box-shadow: 0 20px 48px rgba(17, 24, 39, 0.12); }
```

## 7. Do's and Don'ts

Do make docs readable and searchable. Do support AI assistant entry points. Do not make documentation feel like marketing cards only.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack navigation, search, and content |
| Tablet | `768px` | Docs with collapsible sidebar |
| Desktop | `1200px` | Full docs sidebar, content, and assistant panel |

## 9. Agent Prompt Guide

Design like GitBook: polished docs surfaces, blue actions, warm editorial accents, search-first layout, AI assistant panels, and structured knowledge navigation.
