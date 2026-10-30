# CircleCI Design System

> CI/CD platform design with confident black-and-green delivery surfaces, automation-first dashboards, and pipeline clarity.

---

## 1. Visual Theme & Atmosphere

CircleCI should feel like reliable software delivery at speed. The product language needs to support pipelines, workflows, jobs, tests, rollbacks, releases, agents, config, and platform-team controls.

- Mood: confident, automated, technical, operational, scalable
- Density: medium-to-high for pipeline and job views
- Character: near-black hero surfaces, green validation accents, white dashboard cards, status-driven rows

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--circle-black` | `#111111` | Hero and code/log surface |
| `--circle-green` | `#00B871` | Passing build / positive state |
| `--circle-green-dark` | `#008F5A` | Hover / active state |
| `--circle-blue` | `#2563EB` | Link and info state |
| `--circle-red` | `#DC2626` | Failed build |
| `--circle-yellow` | `#F59E0B` | Running / queued state |
| `--surface-page` | `#F8FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Pipeline cards |
| `--border-default` | `#E2E8F0` | Dividers and inputs |

Use green for validation and successful delivery. Use red/yellow only for pipeline status and failures.

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
| Job Title | 18px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Log Text | 13px | 500 | 1.55 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #00B871;
  border-radius: 10px;
  background: #00B871;
  color: #111111;
  font: 700 14px/1 Inter, sans-serif;
}

.pipeline-card {
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  background: #FFFFFF;
  padding: 18px;
}

.job-pass {
  border-left: 4px solid #00B871;
}

.log-panel {
  border-radius: 14px;
  background: #111111;
  color: #FFFFFF;
  padding: 16px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Job rows |
| `--space-4` | `16px` | Pipeline rhythm |
| `--space-5` | `24px` | Detail panels |
| `--space-8` | `48px` | Sections |

Organize by project, branch, workflow, job, status, duration, artifact, and test result.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(17, 17, 17, 0.07); }
.shadow-panel { box-shadow: 0 20px 48px rgba(17, 17, 17, 0.16); }
```

Use borders and status strips for dense lists. Use elevation for job detail panels.

## 7. Do's and Don'ts

Do make build status impossible to miss. Do keep logs readable. Do not hide failure cause behind decorative charts. Do not use status colors for generic decoration.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack workflows, jobs, and logs |
| Tablet | `768px` | Two-column pipeline/detail views |
| Desktop | `1200px` | Full pipeline graph, job table, and log panels |

Logs and config snippets should scroll horizontally on mobile.

## 9. Agent Prompt Guide

Design like CircleCI: black-and-green CI/CD confidence, white pipeline cards, clear pass/fail status strips, readable log panels, and automation-first software delivery dashboards.
