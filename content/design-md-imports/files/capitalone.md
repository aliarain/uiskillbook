# Capital One Design System

> National bank design with bold red identity, confident card surfaces, clean Sans typography, and accessible financial clarity.

---

## 1. Visual Theme & Atmosphere

Capital One should feel bold, accessible, and modern. The design language communicates credit cards, banking, auto loans, and financial wellness with a confident, approachable voice.

- Mood: confident, bold, accessible, trustworthy
- Density: medium, with account summaries, card management, and transaction surfaces
- Character: signature red brand, clean white canvas, light gray structure, Credit Wise accent teal

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--c1-red` | `#D03027` | Primary brand CTA and card highlight |
| `--c1-red-dark` | `#A81F1A` | Hover and pressed states |
| `--c1-teal` | `#0A7EA4` | Credit Wise and credit score accent |
| `--c1-green` | `#15803D` | Positive balance and payment success |
| `--c1-amber` | `#B45309` | Payment due and budget alert |
| `--c1-blue` | `#1D4ED8` | Informational and link states |
| `--surface-card` | `#FFFFFF` | Account and credit card panels |
| `--surface-bg` | `#F8FAFC` | Dashboard background |
| `--surface-dark` | `#1A1A2E` | Dark card mockup surface |
| `--text-primary` | `#111827` | Primary text and balances |
| `--border-default` | `#E5E7EB` | Row and panel borders |

Use red exclusively for the primary brand CTA. Teal is reserved for credit score and Credit Wise features only — do not generalize it.

## 3. Typography Rules

```css
--font-sans: "Optimist", Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "SF Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 56px | 700 | 1.05 |
| Page Title | 36px | 700 | 1.1 |
| Section Title | 26px | 600 | 1.2 |
| Card Title | 20px | 600 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Balance | 36px | 700 | 1.0 |
| Label | 13px | 500 | 1.4 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 48px;
  padding: 0 24px;
  border: none;
  border-radius: 8px;
  background: #D03027;
  color: #FFFFFF;
  font: 600 16px/1 Inter, sans-serif;
}

.account-card {
  border: 1px solid #E5E7EB;
  border-radius: 16px;
  background: #FFFFFF;
  padding: 24px;
}

.credit-card-mock {
  border-radius: 16px;
  background: linear-gradient(135deg, #1A1A2E, #2D2D44);
  color: #FFFFFF;
  padding: 24px;
  aspect-ratio: 1.586 / 1;
}

.transaction-row {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid #F1F5F9;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-3` | `12px` | Transaction row padding |
| `--space-5` | `20px` | Card content rhythm |
| `--space-8` | `32px` | Account section separation |
| `--space-14` | `56px` | Page section gaps |

Show account balance and next payment prominently. Credit score and Credit Wise should be a persistent but secondary element.

## 6. Depth & Elevation

```css
.shadow-card   { box-shadow: 0 2px 8px rgba(17, 24, 39, 0.06); }
.shadow-panel  { box-shadow: 0 8px 24px rgba(208, 48, 39, 0.10); }
.shadow-modal  { box-shadow: 0 20px 52px rgba(17, 24, 39, 0.16); }
```

Use the brand-tinted shadow only for credit card mockups. Account panels use neutral shadows.

## 7. Do's and Don'ts

Do show account balance and payment due date above the fold. Do use the card mockup with correct 1.586:1 aspect ratio. Do not use red for negative balances or errors — that conflicts with the brand. Do not combine brand red and error red in the same view. Do make the "Pay Now" CTA the most prominent action.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Single account card, simplified transactions |
| Tablet | `768px` | Account overview + transaction list side-by-side |
| Desktop | `1200px` | Full dashboard: all accounts, spending insights, credit score |

The mobile experience is primary — most card management happens on phones.

## 9. Agent Prompt Guide

Design like Capital One: bold red CTAs, clean white account surfaces, dark credit card mockups, accessible financial typography, teal credit-score accents, and balance-first information hierarchy.
