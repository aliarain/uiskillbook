# Drift Design System

> Conversational marketing design with bold teal identity, chat-first surfaces, real-time engagement UX, and pipeline-focused messaging.

---

## 1. Visual Theme & Atmosphere

Drift should feel immediate, personal, and revenue-focused. The design language communicates live chat, AI chatbots, meeting booking, and pipeline acceleration through real-time buyer conversations.

- Mood: immediate, conversational, energetic, revenue-driven
- Density: medium, with conversation views, bot builders, and pipeline dashboards
- Character: bold teal brand, dark widget surfaces, clean messenger panels, pipeline green accents

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--drift-teal` | `#00C4CC` | Primary brand CTA and widget accent |
| `--drift-dark` | `#0B1B2B` | Dark chat surfaces and sidebar |
| `--drift-green` | `#00B84C` | Meeting booked and pipeline win |
| `--drift-blue` | `#2B6CB0` | Secondary actions and links |
| `--drift-amber` | `#D97706` | Bot building and draft flows |
| `--drift-red` | `#E53E3E` | Missed chat and alert state |
| `--surface-card` | `#FFFFFF` | Conversation cards and contact panels |
| `--surface-bg` | `#F7FAFC` | Dashboard background |
| `--surface-chat` | `#1A2D40` | Live chat and bot widget surface |
| `--text-primary` | `#1A202C` | Body and conversation text |
| `--border-default` | `#E2E8F0` | Card and row borders |

Teal is the signature identity element — use it for the chat widget and primary CTAs. Never dilute by using in secondary contexts.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "SF Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 30px | 700 | 1.1 |
| Section Title | 22px | 600 | 1.2 |
| Conversation Name | 16px | 600 | 1.3 |
| Message Body | 15px | 400 | 1.65 |
| Body | 15px | 400 | 1.6 |
| Timestamp | 12px | 400 | 1.4 |
| Label | 12px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 40px;
  padding: 0 18px;
  border: none;
  border-radius: 8px;
  background: #00C4CC;
  color: #0B1B2B;
  font: 700 14px/1 Inter, sans-serif;
}

.chat-bubble-bot {
  border-radius: 18px 18px 18px 4px;
  background: #1A2D40;
  color: #FFFFFF;
  padding: 12px 16px;
  max-width: 280px;
}

.chat-bubble-user {
  border-radius: 18px 18px 4px 18px;
  background: #00C4CC;
  color: #0B1B2B;
  padding: 12px 16px;
  max-width: 280px;
}

.conversation-row {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid #E2E8F0;
  cursor: pointer;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Message bubble spacing |
| `--space-4` | `16px` | Conversation list rhythm |
| `--space-6` | `24px` | Section padding |
| `--space-10` | `40px` | Dashboard section gaps |

The chat widget is always bottom-right anchored. Conversation list on the left, active conversation in the center, contact context on the right.

## 6. Depth & Elevation

```css
.shadow-widget  { box-shadow: 0 8px 32px rgba(0, 196, 204, 0.20), 0 2px 8px rgba(11, 27, 43, 0.16); }
.shadow-card    { box-shadow: 0 1px 4px rgba(26, 32, 44, 0.06); }
.shadow-modal   { box-shadow: 0 20px 50px rgba(26, 32, 44, 0.16); }
```

The chat widget deserves a prominent shadow with a teal-tinted glow — it must feel like it's floating above the page.

## 7. Do's and Don'ts

Do make the chat widget immediately recognizable by its teal identity. Do show online/offline status clearly in conversation headers. Do surface pipeline impact (meetings booked, revenue influenced) on the dashboard. Do not use teal for both the brand and generic success states. Do not bury meeting booking behind multiple steps.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Full-screen conversation view, simplified bot builder |
| Tablet | `768px` | Split conversation list and chat panel |
| Desktop | `1200px` | Three-panel: conversation list + chat + contact context |

The chat widget itself must work flawlessly at every screen size.

## 9. Agent Prompt Guide

Design like Drift: bold teal chat widget, dark conversation surfaces, pipeline-focused dashboards, floating widget shadow, bot-builder simplicity, and real-time conversational hierarchy.
