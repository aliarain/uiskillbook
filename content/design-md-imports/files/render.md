# Render Design System

> Cloud platform design with clean builder-first surfaces, blue production accents, and simple deploy-to-scale workflows.

---

## 1. Visual Theme & Atmosphere

Render should feel like infrastructure that gets out of the way. The design supports apps, agents, databases, cron jobs, private networking, previews, logs, autoscaling, and compliance without turning the UI into cloud-console sprawl.

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--render-blue` | `#2563EB` | Primary CTA, deploy action, link |
| `--render-navy` | `#0F172A` | Strong text and dark panels |
| `--render-cyan` | `#38BDF8` | Networking / preview accent |
| `--render-green` | `#22C55E` | Healthy service / live deploy |
| `--surface-page` | `#F8FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Service cards |
| `--border-default` | `#E2E8F0` | Dividers and controls |
| `--text-muted` | `#64748B` | Secondary text |

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
| Service Title | 20px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Code | 13px | 500 | 1.55 |

## 4. Component Stylings

```css
.button-primary { min-height: 44px; padding: 0 18px; border-radius: 10px; border: 1px solid #2563EB; background: #2563EB; color: #fff; font: 600 14px/1 Inter, sans-serif; }
.service-card { border: 1px solid #E2E8F0; border-radius: 16px; background: #fff; padding: 18px; }
.log-panel { border-radius: 14px; background: #0F172A; color: #fff; padding: 16px; font: 500 13px/1.55 "SF Mono", monospace; }
.status-live { color: #15803D; background: rgba(34, 197, 94, 0.12); border-radius: 999px; padding: 6px 10px; }
```

## 5. Layout Principles

Use a service-first layout: project, service, deploy, metrics, logs, environment, networking. Keep deploy and rollback actions close to service health.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(15, 23, 42, 0.07); }
.shadow-panel { box-shadow: 0 20px 48px rgba(15, 23, 42, 0.14); }
```

## 7. Do's and Don'ts

Do make deploy status obvious. Do show logs, scaling, and environment context. Do not make infrastructure feel more complex than necessary.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack services, logs, metrics |
| Tablet | `768px` | Two-column dashboard panels |
| Desktop | `1200px` | Full project sidebar and service grid |

## 9. Agent Prompt Guide

Design like Render: clean builder cloud, blue deploy actions, white service cards, dark log panels, clear health states, and fast path-to-production structure.
