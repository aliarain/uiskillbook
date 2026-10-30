# Chime Design System

> Neobank design with energetic green identity, member-first surfaces, friendly typography, and accessible mobile-first banking.

---

## 1. Visual Theme & Atmosphere

Chime should feel empowering, friendly, and accessible. The design language communicates fee-free banking, early direct deposit, credit building, and financial wellness for everyday Americans.

- Mood: friendly, empowering, accessible, modern
- Density: low-to-medium, with large balance displays, clear transaction lists, and simple CTAs
- Character: energetic green brand, fresh white canvas, light rounded cards, no-fee forward messaging

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--chime-green` | `#00D64F` | Primary brand CTA and balance positive |
| `--chime-green-dark` | `#00A83F` | Hover and pressed states |
| `--chime-navy` | `#1C2B4A` | Dark text and contrast surfaces |
| `--chime-blue` | `#3B82F6` | Secondary actions and links |
| `--chime-amber` | `#F59E0B` | Savings goal milestone |
| `--chime-red` | `#EF4444` | Negative balance and alerts |
| `--surface-card` | `#FFFFFF` | Account and transaction cards |
| `--surface-bg` | `#F0FDF4` | Light green-tinted background |
| `--text-primary` | `#111827` | Balance and transaction text |
| `--text-secondary` | `#6B7280` | Category labels and timestamps |
| `--border-default` | `#E5E7EB` | Card and row borders |

Use bright green as the dominant positive signal. Never associate it with negative or alert states.

## 3. Typography Rules

```css
--font-sans: "Circular", Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "SF Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Balance | 52px | 700 | 1.0 |
| Page Title | 30px | 700 | 1.1 |
| Section Title | 22px | 600 | 1.2 |
| Card Title | 18px | 600 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Transaction Amount | 16px | 600 | 1.3 |
| Label | 13px | 500 | 1.4 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 52px;
  padding: 0 28px;
  border: none;
  border-radius: 999px;
  background: #00D64F;
  color: #1C2B4A;
  font: 700 16px/1 Inter, sans-serif;
}

.account-card {
  border-radius: 20px;
  background: linear-gradient(135deg, #1C2B4A, #2E4370);
  color: #FFFFFF;
  padding: 28px;
}

.transaction-row {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #F0F4F8;
}

.savings-progress {
  height: 8px;
  border-radius: 999px;
  background: #D1FAE5;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-3` | `12px` | List item spacing |
| `--space-5` | `20px` | Card padding |
| `--space-8` | `32px` | Section separation |
| `--space-14` | `56px` | Major screen sections |

The account balance must dominate the home screen. Transaction list below, CTAs (transfer, pay) accessible at thumb reach.

## 6. Depth & Elevation

```css
.shadow-card    { box-shadow: 0 4px 16px rgba(28, 43, 74, 0.10); }
.shadow-account { box-shadow: 0 12px 36px rgba(0, 214, 79, 0.15); }
.shadow-modal   { box-shadow: 0 20px 52px rgba(28, 43, 74, 0.18); }
```

The account card gets a green-tinted shadow to reinforce the positive brand feel. Transaction list items are essentially flat.

## 7. Do's and Don'ts

Do make the account balance the largest element on the home screen. Do make fee-free messaging visible but not intrusive. Do use rounded, approachable card shapes. Do not use small type for transaction amounts. Do not bury the "No fees" value proposition. Do make mobile transfers a one-tap action.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Full-screen native app: balance card + transaction list |
| Tablet | `768px` | Two-column account overview and transaction history |
| Desktop | `1200px` | Marketing/dashboard view with multiple account panels |

Chime is mobile-first by design. Desktop views are secondary.

## 9. Agent Prompt Guide

Design like Chime: energetic green CTAs, large balance displays, dark navy account cards, rounded friendly shapes, accessible mobile-first banking layouts, and no-fee-forward messaging.
