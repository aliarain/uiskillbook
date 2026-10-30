# Snyk Design System

> Developer security design with dark product confidence, bright green remediation cues, and clear vulnerability-to-fix workflows.

---

## 1. Visual Theme & Atmosphere

Snyk should feel like application security built for developers, not a detached compliance console. The interface needs to support code, dependencies, containers, IaC, AI security, risk prioritization, and remediation without losing speed.

- Mood: secure, developer-native, urgent but controlled, practical
- Density: medium-to-high for finding lists and issue details
- Character: dark navy surfaces, green fix/success cues, crisp risk cards, code-forward panels

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--snyk-navy` | `#0B1220` | Deep product background |
| `--snyk-blue` | `#145CFF` | Link and primary action |
| `--snyk-green` | `#00D084` | Fix, success, and safe state |
| `--snyk-purple` | `#7C3AED` | AI/security insight accent |
| `--snyk-red` | `#E11D48` | Critical vulnerability state |
| `--surface-page` | `#F8FAFC` | Light page background |
| `--surface-card` | `#FFFFFF` | Cards and dashboards |
| `--border-default` | `#E2E8F0` | Dividers and inputs |
| `--text-muted` | `#64748B` | Helper text and metadata |

Use red for real risk, green for fixability and success, and blue for neutral action.

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
| Finding Title | 18px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Code | 13px | 500 | 1.55 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #145CFF;
  border-radius: 10px;
  background: #145CFF;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.finding-card {
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  background: #FFFFFF;
  padding: 18px;
}

.severity-critical {
  border-left: 4px solid #E11D48;
}

.code-panel {
  border-radius: 14px;
  background: #0B1220;
  color: #FFFFFF;
  padding: 16px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Severity rows |
| `--space-4` | `16px` | Dashboard rhythm |
| `--space-5` | `24px` | Detail panels |
| `--space-8` | `48px` | Sections |

Prioritize vulnerability severity, exploitability, affected package/code, owner, and remediation path.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(11, 18, 32, 0.08); }
.shadow-overlay { box-shadow: 0 24px 56px rgba(11, 18, 32, 0.18); }
```

Use borders for dense lists and elevation for focused remediation workflows.

## 7. Do's and Don'ts

Do show risk and fix path together. Do keep security states unmistakable. Do not use alarming color without context. Do not hide dependency or code evidence.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack findings and remediation details |
| Tablet | `768px` | Two-column issue/detail views |
| Desktop | `1200px` | Full dashboard with filters, code, and remediation panels |

Code panels should scroll horizontally on small screens.

## 9. Agent Prompt Guide

Design like Snyk: developer-first security UI, dark code panels, severity-driven finding cards, green fix cues, clear remediation flow, and practical AppSec dashboard density.
