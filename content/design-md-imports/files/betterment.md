# Betterment Design System

> Digital investment design with calming green identity, trust-forward surfaces, humanist typography, and goal-based financial clarity.

---

## 1. Visual Theme & Atmosphere

Betterment should feel trustworthy, calm, and empowering. The design language communicates automated investing, retirement planning, tax optimization, and financial goal progress without anxiety.

- Mood: calm, trustworthy, optimistic, approachable
- Density: low-to-medium, with generous whitespace and clear goal-progress surfaces
- Character: calming green brand, soft neutrals, warm whites, rounded goal cards

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--bet-green` | `#1A7A4A` | Primary brand and CTA |
| `--bet-green-light` | `#D1FAE5` | Goal progress fill and positive states |
| `--bet-teal` | `#0D9488` | Secondary investment accent |
| `--bet-blue` | `#3B82F6` | Informational and link states |
| `--bet-amber` | `#D97706` | Retirement milestone and alert |
| `--bet-red` | `#DC2626` | Negative returns and error |
| `--surface-card` | `#FFFFFF` | Account and goal cards |
| `--surface-bg` | `#F7FBF9` | Warm off-white background |
| `--text-primary` | `#111827` | Primary headings and labels |
| `--text-secondary` | `#6B7280` | Subtext and allocation labels |
| `--border-default` | `#E5E7EB` | Card and table borders |

Use green as the primary trust and action signal. Never use red unless absolutely necessary — financial products should minimize anxiety.

## 3. Typography Rules

```css
--font-sans: "GT America", Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "SF Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 56px | 700 | 1.05 |
| Page Title | 36px | 700 | 1.1 |
| Section Title | 26px | 600 | 1.2 |
| Card Title | 20px | 600 | 1.3 |
| Body | 16px | 400 | 1.65 |
| Financial Value | 34px | 700 | 1.0 |
| Label | 13px | 500 | 1.4 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 48px;
  padding: 0 24px;
  border: none;
  border-radius: 999px;
  background: #1A7A4A;
  color: #FFFFFF;
  font: 600 16px/1 Inter, sans-serif;
}

.goal-card {
  border: 1px solid #E5E7EB;
  border-radius: 20px;
  background: #FFFFFF;
  padding: 24px;
}

.progress-bar {
  height: 8px;
  border-radius: 999px;
  background: #D1FAE5;
}

.progress-fill {
  height: 8px;
  border-radius: 999px;
  background: #1A7A4A;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-3` | `12px` | Tight list spacing |
| `--space-5` | `20px` | Card content rhythm |
| `--space-8` | `32px` | Section separation |
| `--space-14` | `56px` | Major page sections |

Lead with total portfolio value and goal progress prominently. Allocation breakdowns and tax details should be secondary.

## 6. Depth & Elevation

```css
.shadow-card  { box-shadow: 0 2px 8px rgba(17, 24, 39, 0.05); }
.shadow-goal  { box-shadow: 0 8px 24px rgba(26, 122, 74, 0.10); }
.shadow-modal { box-shadow: 0 20px 50px rgba(17, 24, 39, 0.14); }
```

Gentle shadows reinforce the calm, trustworthy atmosphere. No harsh or dramatic elevation.

## 7. Do's and Don'ts

Do lead with goal progress, not abstract numbers. Do use green to signal positive growth consistently. Do keep financial disclaimers legible but not dominant. Do not use alarming red for normal market fluctuations. Do not make tax or allocation details the primary focus.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Single goal card, simple portfolio total |
| Tablet | `768px` | Two-column goal grid, basic allocation pie |
| Desktop | `1200px` | Full dashboard with goals, allocation, and performance history |

Always surface portfolio value and biggest goal on the smallest screen.

## 9. Agent Prompt Guide

Design like Betterment: calming green CTAs, generous whitespace, goal-progress cards, humanist typography, low-anxiety financial surfaces, and clear investment hierarchy.
