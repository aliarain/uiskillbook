# LaunchDarkly Design System

> Feature management design with bold teal identity, flag-first surfaces, targeting-rule clarity, and safe release confidence.

---

## 1. Visual Theme & Atmosphere

LaunchDarkly should feel precise, confident, and developer-trusted. The design language communicates feature flags, progressive rollouts, A/B testing, targeting rules, and the infrastructure for safe software releases.

- Mood: precise, confident, technical, safe
- Density: medium-to-high, with flag tables, targeting rules, rollout percentage bars, and variation panels
- Character: bold teal brand, clean white flag surfaces, dark rule-builder panels, percentage-fill rollout indicators

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--ld-teal` | `#0DAEB4` | Primary brand CTA and flag-on state |
| `--ld-teal-dark` | `#0A8A8F` | Hover and active states |
| `--ld-navy` | `#1A2744` | Dark surfaces and sidebar |
| `--ld-green` | `#16A34A` | Flag serving and variation true |
| `--ld-red` | `#DC2626` | Flag off and variation false |
| `--ld-amber` | `#D97706` | Rollout in-progress and targeting warning |
| `--ld-purple` | `#7C3AED` | Experimentation and A/B test accent |
| `--surface-card` | `#FFFFFF` | Flag cards and targeting panels |
| `--surface-bg` | `#F8FAFC` | Dashboard background |
| `--surface-rule` | `#0F172A` | Rule builder dark surface |
| `--text-primary` | `#111827` | Flag names and rule labels |
| `--border-default` | `#E2E8F0` | Panel and row borders |

The on/off toggle is the product's most iconic element — teal for on, red for off. This mapping is absolute and must never be reversed or repurposed.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 28px | 700 | 1.1 |
| Section Title | 22px | 600 | 1.2 |
| Flag Name | 15px | 600 | 1.3 |
| Rule Label | 14px | 500 | 1.4 |
| Body | 15px | 400 | 1.6 |
| Flag Key | 13px | 400 | 1.4 |
| Percentage | 18px | 700 | 1.1 |
| Label | 12px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 38px;
  padding: 0 16px;
  border: none;
  border-radius: 6px;
  background: #0DAEB4;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.flag-row {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid #E2E8F0;
}

.flag-toggle {
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: #DC2626;
  transition: background 0.2s;
  cursor: pointer;
}

.flag-toggle.on {
  background: #0DAEB4;
}

.rollout-bar {
  height: 8px;
  border-radius: 999px;
  background: #E2E8F0;
  overflow: hidden;
}

.rollout-fill {
  height: 8px;
  border-radius: 999px;
  background: #0DAEB4;
}

.flag-key {
  font: 400 13px/1 "JetBrains Mono", monospace;
  color: #64748B;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Rule clause spacing |
| `--space-4` | `16px` | Core rhythm |
| `--space-6` | `24px` | Flag panel padding |
| `--space-10` | `40px` | Major section gaps |

Flag list is the primary surface — show key, name, environment status, and toggle at a glance. Targeting rules expand inline, not on a separate page. Rollout percentage is visualized as a fill bar, never just text.

## 6. Depth & Elevation

```css
.shadow-card   { box-shadow: 0 1px 4px rgba(17, 24, 39, 0.06); }
.shadow-panel  { box-shadow: 0 8px 24px rgba(13, 174, 180, 0.10); }
.shadow-modal  { box-shadow: 0 20px 50px rgba(17, 24, 39, 0.16); }
```

Flag targeting modals use teal-tinted shadow to reinforce the brand when users make release decisions.

## 7. Do's and Don'ts

Do make the flag toggle the most visually prominent element in every flag row. Do display flag keys in mono font — engineers copy them. Do show rollout percentage as a visual fill bar. Do not use teal for anything other than the flag-on state and primary CTAs. Do not hide environment-specific targeting — it must be visible in the main flag view.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Flag status list, toggle access for emergency kill switches |
| Tablet | `768px` | Flag table with environment columns |
| Desktop | `1200px` | Full dashboard: flag list + targeting rules + metrics panel |

Mobile access is critical for emergency flag kills. The toggle must be reachable in under two taps.

## 9. Agent Prompt Guide

Design like LaunchDarkly: bold teal CTAs, iconic teal/red flag toggles, mono flag keys, rollout percentage fill bars, dark targeting-rule builder, environment-column flag tables, and safe-release feature-management hierarchy.
