# Clerk Design System

> Authentication product design with polished drop-in components, violet developer-brand energy, and secure account-management flows.

---

## 1. Visual Theme & Atmosphere

Clerk should feel like authentication that is production-ready and easy to embed. The design language centers sign-in, sign-up, user profile, organizations, billing, and themable components that adapt to developer apps.

- Mood: polished, secure, developer-friendly, componentized, fast
- Density: medium, with auth cards and dashboard tables
- Character: violet accents, crisp white forms, dark marketing panels, clean component previews

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--clerk-violet` | `#6C47FF` | Primary brand and action |
| `--clerk-violet-dark` | `#5636D8` | Hover / active state |
| `--clerk-black` | `#0A0A0A` | Dark marketing/product surface |
| `--ink-strong` | `#111827` | Primary text |
| `--ink-muted` | `#64748B` | Helper text |
| `--surface-page` | `#F8FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Auth cards and dashboard panels |
| `--border-default` | `#E2E8F0` | Inputs and dividers |
| `--danger` | `#DC2626` | Auth error state |

Use violet for identity, focus, and primary action. Auth forms should stay mostly white and low-friction.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 58px | 700 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 28px | 650 | 1.2 |
| Form Title | 22px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Helper | 14px | 400 | 1.45 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #6C47FF;
  border-radius: 10px;
  background: #6C47FF;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.auth-card {
  max-width: 420px;
  border: 1px solid #E2E8F0;
  border-radius: 18px;
  background: #FFFFFF;
  padding: 24px;
}

.input {
  min-height: 44px;
  width: 100%;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  padding: 0 14px;
}

.input:focus {
  outline: none;
  border-color: #6C47FF;
  box-shadow: 0 0 0 3px rgba(108, 71, 255, 0.16);
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Field spacing |
| `--space-4` | `16px` | Form groups |
| `--space-5` | `24px` | Auth card padding |
| `--space-8` | `48px` | Marketing sections |

Center authentication flows, keep social providers and password fields clear, and separate account, organization, billing, and security settings.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 10px 26px rgba(17, 24, 39, 0.08); }
.shadow-modal { box-shadow: 0 24px 56px rgba(17, 24, 39, 0.14); }
```

Use moderate card depth for auth components and stronger depth for account modals.

## 7. Do's and Don'ts

Do make authentication states explicit. Do preserve theming flexibility. Do not bury error messages. Do not make auth forms visually playful or overloaded.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Single centered auth card |
| Tablet | `768px` | Auth plus product/context panel |
| Desktop | `1200px` | Full component previews and dashboard layouts |

Keep inputs and buttons at least `44px` tall.

## 9. Agent Prompt Guide

Design like Clerk: polished violet authentication components, crisp white sign-in cards, clear account-management panels, developer theming flexibility, and secure low-friction auth flows.
