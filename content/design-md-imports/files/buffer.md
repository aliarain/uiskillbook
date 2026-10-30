# Buffer Design System

> Social media management design with warm teal identity, creator-friendly surfaces, clean typography, and calm publishing workflows.

---

## 1. Visual Theme & Atmosphere

Buffer should feel calm, creative, and organized. The design language communicates social media scheduling, analytics, engagement, and multi-channel publishing without overwhelming creators.

- Mood: calm, friendly, creative, organized
- Density: medium, with post queues, channel grids, and engagement stats
- Character: warm teal brand, off-white backgrounds, soft gray neutrals, rounded queue cards

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--buf-teal` | `#168EEA` | Primary brand CTA and highlights |
| `--buf-teal-dark` | `#0E6BB5` | Hover and pressed states |
| `--buf-green` | `#22C55E` | Scheduled / published success |
| `--buf-orange` | `#F97316` | Pending review and draft state |
| `--buf-red` | `#EF4444` | Failed post and error state |
| `--buf-purple` | `#8B5CF6` | Analytics and boost feature |
| `--surface-card` | `#FFFFFF` | Post and queue cards |
| `--surface-bg` | `#F9FAFB` | Dashboard background |
| `--text-primary` | `#111827` | Post text and headings |
| `--text-secondary` | `#6B7280` | Timestamps and captions |
| `--border-default` | `#E5E7EB` | Queue item borders |

Use teal for primary scheduling actions. Color-code post states (green = published, orange = draft, red = failed) consistently across all queue views.

## 3. Typography Rules

```css
--font-sans: "Public Sans", Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "SF Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 32px | 700 | 1.1 |
| Section Title | 22px | 600 | 1.2 |
| Card Title | 18px | 600 | 1.3 |
| Post Text | 15px | 400 | 1.65 |
| Body | 15px | 400 | 1.6 |
| Timestamp | 12px | 500 | 1.4 |
| Label | 12px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 40px;
  padding: 0 18px;
  border: none;
  border-radius: 8px;
  background: #168EEA;
  color: #FFFFFF;
  font: 600 14px/1 "Public Sans", sans-serif;
}

.post-card {
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  background: #FFFFFF;
  padding: 16px 20px;
}

.channel-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  background: #F0F9FF;
  color: #168EEA;
  font: 600 12px/1 "Public Sans", sans-serif;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Queue item internal spacing |
| `--space-4` | `16px` | Card content rhythm |
| `--space-6` | `24px` | Section padding |
| `--space-10` | `40px` | Dashboard section gaps |

Show the post queue as the primary view. Channel selector and analytics should be accessible but not dominant.

## 6. Depth & Elevation

```css
.shadow-card  { box-shadow: 0 1px 4px rgba(17, 24, 39, 0.06); }
.shadow-panel { box-shadow: 0 8px 20px rgba(22, 142, 234, 0.10); }
.shadow-modal { box-shadow: 0 20px 48px rgba(17, 24, 39, 0.14); }
```

Light shadows keep the scheduling queue feeling airy. Avoid heavy depth in content-dense queue views.

## 7. Do's and Don'ts

Do make the post queue scannable at a glance. Do use channel icons to identify platforms instantly. Do color-code post states consistently. Do not use busy backgrounds behind post preview text. Do not bury the "Schedule" CTA — it is the core action.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Single-channel queue, stacked post cards |
| Tablet | `768px` | Multi-channel tabs, two-column queue |
| Desktop | `1200px` | Full dashboard: channel list, queue, and analytics panel |

The compose button should always float accessibly on mobile.

## 9. Agent Prompt Guide

Design like Buffer: warm teal CTAs, Public Sans typography, clean post-queue cards, consistent post-state color coding, channel badges, and calm creator-friendly scheduling layouts.
