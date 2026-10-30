# Heroku Design System

> App platform design with official purple foundations, cloud-blue support, and developer-friendly deployment workflows.

---

## 1. Visual Theme & Atmosphere

Heroku should feel like application deployment made approachable. The design language needs to support apps, dynos, add-ons, pipelines, logs, teams, data services, AI PaaS messaging, and operational confidence.

- Mood: productive, cloud-native, developer-friendly, calm, reliable
- Density: medium for dashboards and deployment flows
- Character: official Heroku purple, cloud blue, rounded app cards, log panels

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--heroku-purple` | `#5A1BA9` | Official primary brand color |
| `--heroku-purple-dark` | `#300B60` | Dark hero and product surface |
| `--heroku-purple-light` | `#D7BFF2` | Soft purple highlight |
| `--salesforce-blue` | `#0176D3` | Cloud support and link color |
| `--surface-page` | `#F6F2FB` | Light purple page field |
| `--surface-card` | `#FFFFFF` | App and dashboard cards |
| `--border-default` | `#E5DDF3` | Dividers and controls |
| `--success` | `#22C55E` | Deployed / healthy state |
| `--warning` | `#F59E0B` | Build warning |

Use Heroku Purple for primary identity and actions. Use blue as a Salesforce/cloud support accent.

## 3. Typography Rules

```css
--font-sans: "Salesforce Sans", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 58px | 700 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 650 | 1.2 |
| App Title | 20px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Log Text | 13px | 500 | 1.55 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #5A1BA9;
  border-radius: 10px;
  background: #5A1BA9;
  color: #FFFFFF;
  font: 600 14px/1 "Salesforce Sans", Inter, sans-serif;
}

.app-card {
  border: 1px solid #E5DDF3;
  border-radius: 16px;
  background: #FFFFFF;
  padding: 18px;
}

.log-panel {
  border-radius: 14px;
  background: #300B60;
  color: #FFFFFF;
  padding: 16px;
  font: 500 13px/1.55 "SF Mono", monospace;
}

.pipeline-stage {
  border-radius: 999px;
  background: #D7BFF2;
  color: #300B60;
  padding: 6px 10px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Status rows |
| `--space-4` | `16px` | Dashboard rhythm |
| `--space-5` | `24px` | App panels |
| `--space-8` | `48px` | Sections |

Organize around apps, pipelines, dynos, releases, add-ons, metrics, and logs. Keep deployment status close to app identity.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(48, 11, 96, 0.08); }
.shadow-panel { box-shadow: 0 20px 48px rgba(48, 11, 96, 0.16); }
```

Use soft purple-tinted depth for app cards and modal deployment flows.

## 7. Do's and Don'ts

Do use the official purple palette. Do make app, pipeline, dyno, and log state visible. Do not make deployment status ambiguous. Do not overuse Salesforce blue as the main brand color.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack apps, metrics, and logs |
| Tablet | `768px` | Two-column app/dashboard panels |
| Desktop | `1200px` | Full pipeline, add-on, and logs layout |

Log panels should scroll horizontally on mobile.

## 9. Agent Prompt Guide

Design like Heroku: official purple app-platform UI, cloud-blue support accents, rounded app cards, pipeline stages, dark log panels, and calm developer deployment workflows.
