# PlanetScale Design System

> Database platform design with official black-and-white restraint, purple primary brand color, and clean deploy-request workflows.

---

## 1. Visual Theme & Atmosphere

PlanetScale should feel like a precise database platform for teams that care about schema changes, branching, deploy requests, and production safety. The design language is restrained and technical with strong typography and sparse color.

- Mood: precise, controlled, developer-native, reliable, minimal
- Density: medium, with database dashboards and workflow panels
- Character: black/white foundation, purple brand accent, monospace diagrams, clean product cards

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--ps-black` | `#000000` | Primary text and dark surface |
| `--ps-white` | `#FFFFFF` | Main surface |
| `--ps-purple` | `#5B34DA` | Primary brand accent |
| `--ps-purple-soft` | `#EEE9FF` | Light active state |
| `--ink-muted` | `#6B7280` | Secondary text |
| `--surface-page` | `#F8FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Cards and panels |
| `--border-default` | `#E5E7EB` | Dividers and controls |
| `--success` | `#16A34A` | Deploy success / healthy state |

Keep the palette mostly black, white, and neutral. Purple should clarify brand and primary action.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: ui-monospace, "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 60px | 700 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 650 | 1.2 |
| Panel Title | 18px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Code | 13px | 500 | 1.55 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid #5B34DA;
  border-radius: 10px;
  background: #5B34DA;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.database-card {
  border: 1px solid #E5E7EB;
  border-radius: 14px;
  background: #FFFFFF;
  padding: 18px;
}

.deploy-request {
  border-left: 3px solid #5B34DA;
  border-radius: 12px;
  background: #F8FAFC;
  padding: 16px;
}

.code-panel {
  border-radius: 14px;
  background: #000000;
  color: #FFFFFF;
  padding: 16px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Row spacing |
| `--space-4` | `16px` | Panel rhythm |
| `--space-5` | `24px` | Card padding |
| `--space-8` | `48px` | Major sections |

Organize around organizations, databases, branches, deploy requests, schema changes, and production workflows.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06); }
.shadow-panel { box-shadow: 0 18px 42px rgba(0, 0, 0, 0.12); }
```

Favor borders and clean alignment. Use depth only for active workflow panels and overlays.

## 7. Do's and Don'ts

Do make schema workflows explicit. Do use monospace for queries, branches, and diagrams. Do not make the interface colorful. Do not hide production safety warnings.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack database cards and workflow panels |
| Tablet | `768px` | Two-column dashboard sections |
| Desktop | `1200px` | Full database sidebar, branches, deploy requests, and code panels |

Allow code and ASCII diagrams to scroll horizontally on mobile.

## 9. Agent Prompt Guide

Design like PlanetScale: black-and-white database platform restraint, purple primary actions, clean branch and deploy-request cards, monospace schema details, and production-safe workflow clarity.
