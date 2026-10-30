# Temporal Design System

> Durable execution design with dark reliability surfaces, green workflow accents, and code-first orchestration clarity.

---

## 1. Visual Theme & Atmosphere

Temporal should feel like complex distributed systems becoming reliable by default. The design supports workflows, activities, retries, timers, signals, histories, cloud namespaces, and AI agent durability.

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--temporal-black` | `#0D0F14` | Dark platform surface |
| `--temporal-green` | `#6EEB83` | Workflow success / durable state |
| `--temporal-purple` | `#7C3AED` | AI/workflow highlight |
| `--temporal-blue` | `#2563EB` | Links and cloud actions |
| `--surface-page` | `#F8FAFC` | Light background |
| `--surface-card` | `#FFFFFF` | Cards and docs panels |
| `--border-default` | `#E2E8F0` | Dividers |
| `--warning` | `#F59E0B` | Retry / waiting state |

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 60px | 700 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 650 | 1.2 |
| Workflow Title | 20px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Code | 13px | 500 | 1.55 |

## 4. Component Stylings

```css
.button-primary { min-height: 44px; padding: 0 18px; border-radius: 10px; border: 1px solid #6EEB83; background: #6EEB83; color: #0D0F14; font: 700 14px/1 Inter, sans-serif; }
.workflow-card { border: 1px solid #E2E8F0; border-radius: 16px; background: #fff; padding: 18px; }
.history-panel { border-radius: 14px; background: #0D0F14; color: #fff; padding: 16px; font: 500 13px/1.55 "SF Mono", monospace; }
.retry-badge { background: rgba(245, 158, 11, 0.14); color: #92400E; border-radius: 999px; padding: 6px 10px; }
```

## 5. Layout Principles

Organize by namespace, workflow, activity, run ID, status, history, retries, and signals. Keep durability and recovery visible.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(13, 15, 20, 0.08); }
.shadow-panel { box-shadow: 0 20px 48px rgba(13, 15, 20, 0.18); }
```

## 7. Do's and Don'ts

Do make workflow state and history obvious. Do show code and state together. Do not hide retry/failure semantics.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack workflow cards and event history |
| Tablet | `768px` | Two-column workflow/detail views |
| Desktop | `1200px` | Full namespace sidebar, workflow list, and history panel |

## 9. Agent Prompt Guide

Design like Temporal: durable workflow UI, dark history panels, green reliability accents, code-first orchestration cards, and clear retry/recovery state.
