# Gong Design System

> Revenue intelligence design with bold purple identity, call-recording surfaces, deal-signal clarity, and AI-coaching UX.

---

## 1. Visual Theme & Atmosphere

Gong should feel intelligent, revenue-focused, and data-rich. The design language communicates conversation intelligence, deal health, pipeline forecasting, coaching insights, and AI-powered revenue signals.

- Mood: intelligent, revenue-driven, data-rich, coaching-forward
- Density: high, with call transcripts, deal timelines, pipeline tables, and AI-insight cards
- Character: bold purple brand, dark call-recording surfaces, pipeline green, coaching-yellow highlights

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--gong-purple` | `#6B21A8` | Primary brand CTA and highlights |
| `--gong-purple-light` | `#8B5CF6` | Secondary accent and chart series |
| `--gong-green` | `#16A34A` | Won deal and positive signal |
| `--gong-red` | `#DC2626` | Lost deal and risk signal |
| `--gong-amber` | `#D97706` | At-risk deal and coaching alert |
| `--gong-blue` | `#2563EB` | Forecast and informational accent |
| `--surface-card` | `#FFFFFF` | Deal and call cards |
| `--surface-bg` | `#F8F9FC` | Dashboard background |
| `--surface-dark` | `#1A0A2E` | Call recording player surface |
| `--text-primary` | `#111827` | Deal names and call labels |
| `--text-secondary` | `#6B7280` | Timestamps and rep names |
| `--border-default` | `#E5E7EB` | Panel and table borders |

Purple is the primary brand action color. The deal-health color scale (green/amber/red) must be applied consistently and never repurposed for other UI states.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 30px | 700 | 1.1 |
| Section Title | 22px | 600 | 1.2 |
| Deal Name | 16px | 600 | 1.3 |
| Transcript Body | 15px | 400 | 1.8 |
| Body | 15px | 400 | 1.6 |
| Signal Label | 13px | 600 | 1.35 |
| Timestamp | 12px | 400 | 1.4 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 40px;
  padding: 0 18px;
  border: none;
  border-radius: 8px;
  background: #6B21A8;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.call-card {
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  background: #FFFFFF;
  padding: 20px;
}

.call-player {
  border-radius: 16px;
  background: #1A0A2E;
  color: #FFFFFF;
  padding: 24px;
}

.deal-signal {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 999px;
  font: 600 12px/1.4 Inter, sans-serif;
}

.transcript-highlight {
  background: #FEF3C7;
  border-radius: 3px;
  padding: 1px 3px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Signal and label spacing |
| `--space-4` | `16px` | Card rhythm |
| `--space-6` | `24px` | Section padding |
| `--space-10` | `40px` | Dashboard section gaps |

Pipeline table on the left with deal health indicators. Call feed on the right. Transcript view should prioritize readability with generous line-height. AI coaching insights float as a contextual sidebar.

## 6. Depth & Elevation

```css
.shadow-card    { box-shadow: 0 2px 8px rgba(17, 24, 39, 0.06); }
.shadow-player  { box-shadow: 0 12px 36px rgba(107, 33, 168, 0.18); }
.shadow-modal   { box-shadow: 0 20px 52px rgba(17, 24, 39, 0.16); }
```

The call player gets a purple-tinted shadow to reinforce the AI-powered identity of the recording experience.

## 7. Do's and Don'ts

Do make deal health immediately visible in the pipeline table. Do use transcript highlights (yellow) sparingly for AI-identified key moments. Do surface next-step recommendations from AI prominently. Do not use purple for deal-risk states — that dilutes the brand signal. Do not bury the coaching recommendations behind extra navigation.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Call feed and deal health summary |
| Tablet | `768px` | Pipeline list with deal signals |
| Desktop | `1200px` | Full revenue workspace: pipeline + calls + transcripts + coaching |

Desktop is the primary surface. Mobile for quick pipeline checks and listening to call summaries.

## 9. Agent Prompt Guide

Design like Gong: bold purple CTAs, dark call-player surface, deal-health color scale, AI-insight coaching cards, transcript readability, yellow highlight moments, and revenue-intelligence data hierarchy.
