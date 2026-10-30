# Sonar Design System

> Code quality and security design with clean developer dashboards, orange-blue brand energy, and issue remediation clarity.

---

## 1. Visual Theme & Atmosphere

Sonar should feel like code quality made measurable and actionable. The interface needs to support SonarQube, SonarCloud, SonarQube for IDE, clean code metrics, security issues, quality gates, and team remediation workflows.

- Mood: precise, analytical, developer-focused, quality-driven
- Density: medium-to-high for issue lists and metrics
- Character: white dashboards, blue/orange accents, quality gate indicators, code snippets

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--sonar-blue` | `#236AFA` | Primary action and links |
| `--sonar-orange` | `#FF7A1A` | Brand energy and attention |
| `--sonar-navy` | `#0B1F33` | Strong text and dark panels |
| `--sonar-green` | `#22C55E` | Passed quality gate |
| `--sonar-red` | `#DC2626` | Failed gate / high severity |
| `--surface-page` | `#F8FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Cards and tables |
| `--border-default` | `#E2E8F0` | Dividers and inputs |
| `--text-muted` | `#64748B` | Metadata |

Use green/red only for real quality status. Use blue for navigation and orange for brand emphasis.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 56px | 700 | 1.05 |
| Page Title | 38px | 700 | 1.12 |
| Section Title | 28px | 650 | 1.2 |
| Metric Title | 20px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Code | 13px | 500 | 1.55 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #236AFA;
  border-radius: 10px;
  background: #236AFA;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.quality-card {
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  background: #FFFFFF;
  padding: 18px;
}

.gate-pass {
  background: rgba(34, 197, 94, 0.12);
  color: #15803D;
}

.code-panel {
  border-radius: 14px;
  background: #0B1F33;
  color: #FFFFFF;
  padding: 16px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Metric rows |
| `--space-4` | `16px` | Dashboard rhythm |
| `--space-5` | `24px` | Cards |
| `--space-8` | `48px` | Major sections |

Organize by project, branch, quality gate, issue type, severity, rule, and remediation owner.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(11, 31, 51, 0.07); }
.shadow-panel { box-shadow: 0 18px 42px rgba(11, 31, 51, 0.12); }
```

Use flat cards for analytics and focused elevation for issue detail overlays.

## 7. Do's and Don'ts

Do make quality gates unmistakable. Do use code evidence and rule context. Do not turn code quality into abstract charts only. Do not mix warning colors without severity labels.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack metrics and issue cards |
| Tablet | `768px` | Two-column dashboard cards |
| Desktop | `1200px` | Full issue table, metric panels, and code view |

Tables should collapse into card rows on mobile.

## 9. Agent Prompt Guide

Design like Sonar: clean code-quality dashboard, blue primary actions, orange brand accents, quality gate status, code evidence panels, and precise remediation workflows.
