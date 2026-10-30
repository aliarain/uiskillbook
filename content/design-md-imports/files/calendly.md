# Calendly Design System

> Scheduling product design with calm blue trust, clean booking flows, and precise availability selection.

---

## 1. Visual Theme & Atmosphere

Calendly should feel like time coordination made simple. The design needs to remove friction from booking, routing, rescheduling, and calendar connection while keeping the experience professional for both hosts and invitees.

- Mood: calm, efficient, reliable, professional, lightweight
- Density: medium, with clear calendar grids and booking details
- Character: blue actions, white scheduling cards, subtle dividers, compact forms

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--calendly-blue` | `#006BFF` | Primary CTA and selected state |
| `--calendly-blue-dark` | `#004EBA` | Hover / pressed state |
| `--calendly-blue-soft` | `#EAF2FF` | Selected slot background |
| `--ink-strong` | `#0B1320` | Primary text |
| `--ink-default` | `#334155` | Body text |
| `--ink-muted` | `#64748B` | Secondary text |
| `--surface-page` | `#F8FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Booking panels |
| `--border-default` | `#E2E8F0` | Calendar grid and inputs |
| `--success` | `#16A34A` | Confirmed state |

Use blue for booking action and selected availability. Keep surrounding surfaces neutral so times and dates remain easy to scan.

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
| Card Title | 20px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Time Slot | 15px | 600 | 1.35 |
| Helper | 14px | 400 | 1.45 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #006BFF;
  border-radius: 999px;
  background: #006BFF;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.booking-card {
  border: 1px solid #E2E8F0;
  border-radius: 18px;
  background: #FFFFFF;
  padding: 24px;
}

.time-slot {
  min-height: 44px;
  border: 1px solid #006BFF;
  border-radius: 10px;
  background: #FFFFFF;
  color: #006BFF;
  font: 600 15px/1 Inter, sans-serif;
}

.time-slot[aria-selected="true"] {
  background: #EAF2FF;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Slot spacing |
| `--space-4` | `16px` | Field groups |
| `--space-5` | `24px` | Booking cards |
| `--space-8` | `48px` | Page sections |

Separate event details, calendar selection, time slots, and confirmation. Avoid hiding timezone, duration, and host details.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 22px rgba(11, 19, 32, 0.08); }
.shadow-modal { box-shadow: 0 22px 54px rgba(11, 19, 32, 0.14); }
```

Use elevation to distinguish the active booking card from the page background. Calendar cells should stay flat and predictable.

## 7. Do's and Don'ts

Do make selected dates and time slots unmistakable. Do keep booking steps short. Do show timezone clearly. Do not overload the booking screen with marketing content. Do not make calendar navigation ambiguous.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack event details, calendar, and slots |
| Tablet | `768px` | Two-column booking card where useful |
| Desktop | `1200px` | Full booking layout with event details beside availability |

Keep time slots and primary actions at least `44px` tall.

## 9. Agent Prompt Guide

Design like Calendly: calm blue scheduling UI, clean white booking cards, clear date and time-slot selection, visible timezone and duration metadata, and a professional low-friction confirmation flow.
