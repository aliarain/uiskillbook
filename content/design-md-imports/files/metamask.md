# MetaMask Design System

> The most popular crypto wallet and web3 gateway. MetaMask combines a dark, cyber-focused foundation with fox-inspired branding and purple/blue accent tones for core actions. The system centers on dark mode as default, uses `#9269F3` (lavender purple) as primary brand color, `#8B5CF6` for buttons, `#3B82F6` (blue) for links, and `#10B981` (emerald) for positive states. White text on dark surfaces provides high contrast, while subtle transparency (rgba layers) creates depth and hierarchy.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
MetaMask feels like **a secure gateway to the decentralized web**. The design balances professional fintech trustworthiness with web3-native energy. It is dark-forward but not aggressively so, using layered transparency and subtle gradients to create depth without feeling overwhelming. The fox mascot humanizes what could otherwise be a cold utility.

### Mood & Feeling
- **Cryptographic security**: Built for people who value privacy and self-custody
- **Dark-forward clarity**: Dark backgrounds anchor the experience, reducing eye strain for extended use
- **Web3 energy**: Purple and blue accents signal blockchain/crypto identity
- **Trustworthy utility**: Clean, functional UI that prioritizes safety and clarity
- **Friendly but serious**: Balance between approachability and financial responsibility

### Design Density
**Medium-high density**. MetaMask gives transaction details and wallet information room to breathe while maintaining compact interface elements for dashboard views. The overall system feels information-rich but scannable.

### Visual Character
- Dark foundations (black/dark gray backgrounds)
- Purple primary accent (`#9269F3`)
- Blue links and informational elements
- Green positive/confirm states
- White text on dark surfaces
- Subtle transparency layers for depth
- Card-based content organization
- Rounded elements (8px-12px radius)
- Geometric icons and shapes

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--mm-black` | `#000000` | Primary canvas, deepest background |
| `--mm-gray-900` | `#1A1B1E` | Main surface, cards |
| `--mm-gray-800` | `#242529` | Elevated surfaces |
| `--mm-gray-700` | `#363A40` | Borders, dividers |
| `--mm-gray-600` | `#4F545D` | Muted text, icons |
| `--mm-gray-500` | `#6B7280` | Secondary text |
| `--mm-gray-400` | `#9CA3AF` | Placeholder text |
| `--mm-gray-300` | `#CDD2D9` | Secondary text on dark |
| `--mm-gray-200` | `#E2E4E8` | Support text |
| `--mm-gray-100` | `#F2F3F5` | Light surface backgrounds |
| `--mm-white` | `#FFFFFF` | Primary text on dark |

### Brand & Accent Colors

| Token | Hex | Role |
|-------|-----|------|
| `--mm-primary` | `#9269F3` | Primary brand, main actions |
| `--mm-primary-hover` | `#8B5CF6` | Hover state for primary |
| `--mm-primary-light` | `#A78BFA` | Light accent, highlights |
| `--mm-blue` | `#3B82F6` | Links, informational |
| `--mm-blue-light` | `#60A5FA` | Link hover |
| `--mm-emerald` | `#10B981` | Success, positive, confirmations |
| `--mm-amber` | `#F59E0B` | Warnings |
| `--mm-red` | `#EF4444` | Errors, destructive |
| `--mm-orange` | `#F97316` | Attention, gas fees |

### Functional Token Roles

| Token | Hex | Role |
|-------|-----|------|
| `--mm-success` | `#10B981` | Successful transactions |
| `--mm-warning` | `#F59E0B` | Caution states |
| `--mm-error` | `#EF4444` | Failed transactions |
| `--mm-info` | `#3B82F6` | Information links |

### Color Usage Philosophy
MetaMask uses color **sparingly and purposefully**. The dark frame stays stable, while purple anchors brand identity and blue signals interactivity. Green confirms success, red indicates errors. Avoid gradients unless for subtle depth in cards.

---

## 3. Typography Rules

### Font Stack

```css
--font-sans: "Euclid Circular", "Segment", "Inter", system-ui,
             -apple-system, sans-serif;

--font-mono: "JetBrains Mono", "Roboto Mono", monospace;

--font-display: "DM Sans", "Inter", sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Color |
|---------|------|--------|-----------|-------|
| Hero | 48px | 700 | 1.1 | `#FFFFFF` |
| H1 | 32px | 600 | 1.2 | `#FFFFFF` |
| H2 | 24px | 600 | 1.3 | `#FFFFFF` |
| H3 | 18px | 600 | 1.4 | `#FFFFFF` |
| Body Large | 16px | 400 | 1.5 | `#F2F3F5` |
| Body | 14px | 400 | 1.5 | `#F2F3F5` |
| Small | 12px | 400 | 1.4 | `#9CA3AF` |
| Caption | 11px | 500 | 1.3 | `#6B7280` |
| Mono | 13px | 500 | 1.4 | `#E2E4E8` |

### Typography Philosophy
MetaMask typography is **clean, modern, and information-dense**. It is not ornate. Display moments use the fox mascot and bold headlines, but body text remains straightforward and highly scannable.

```css
--tracking-tight: -0.02em;
--tracking-normal: 0;
--tracking-wide: 0.02em;
```

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #9269F3;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  min-height: 48px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  transition: all 150ms ease;
}

.button-primary:hover {
  background: #8B5CF6;
  transform: translateY(-1px);
}

.button-primary:active {
  transform: translateY(0);
  background: #7C3AED;
}
```

#### Secondary Button
```css
.button-secondary {
  background: rgba(255, 255, 255, 0.08);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  min-height: 48px;
  padding: 12px 24px;
}

.button-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
}
```

### Cards
```css
.card {
  background: #1A1B1E;
  border: 1px solid #363A40;
  border-radius: 12px;
  padding: 16px 20px;
}

.card-elevated {
  background: #242529;
}
```

### Inputs
```css
.input {
  background: rgba(0, 0, 0, 0.2);
  color: #FFFFFF;
  border: 1px solid #363A40;
  border-radius: 8px;
  min-height: 48px;
  padding: 12px 16px;
}

.input:focus {
  outline: none;
  border-color: #9269F3;
}

.input::placeholder {
  color: #6B7280;
}
```

### Network & Token Displays
```css
.token-display {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}
```

### Component Philosophy
MetaMask components should feel **utility-first and security-focused**. Use dark backgrounds with clear hierarchy from transparency layers. Keep elements compact but legible, and ensure transaction details are prominent.

---

## 5. Layout Principles

### Grid System

```css
--layout-columns: 12;
--layout-gutter: 16px;
--layout-max-width: 480px; /* Mobile-first, max reasonable on desktop */
```

### Spacing Scale

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
```

### Layout Style
- Centered single-column for main content
- Two-column for settings/networks
- Card-based organization
- Bottom navigation on mobile
- Sidebar navigation on desktop extension
- Modal/overlay for confirmations

### Whitespace Philosophy
Whitespace in MetaMask should feel **efficient and organized**, not airy. Give breathing room to transaction amounts and wallet balances, but keep interface chrome compact.

---

## 6. Depth & Elevation

### Elevation Style
MetaMask uses **layered transparency** for depth. Dark surfaces use varying opacity levels to create hierarchy without relying heavily on shadows.

### Elevation System

```css
--elevation-0: none;
--elevation-1: 0 1px 2px rgba(0, 0, 0, 0.2);
--elevation-2: 0 4px 8px rgba(0, 0, 0, 0.3);
--elevation-3: 0 8px 16px rgba(0, 0, 0, 0.4);
```

### Surface Hierarchy
1. Base dark canvas (black)
2. Card surfaces (#1A1B1E)
3. Elevated surfaces (#242529)
4. Input fields (rgba background)
5. Overlays/modals

### Elevation Rules
- Use transparency over shadows for hierarchy
- Modals get highest elevation
- Keep transaction confirmations prominent
- Ensure safe areas work on mobile

---

## 7. Do's and Don'ts

### Do
- Use dark backgrounds as the stable foundation
- Use purple (#9269F3) for primary brand moments
- Include the fox mascot for personality
- Prioritize transaction clarity
- Use green for success, red for errors
- Support mobile-first responsive design

### Don't
- Don't use bright gradients on dark backgrounds
- Don't make the interface overly playful
- Don't hide transaction details in menus
- Don't use light text on light backgrounds
- Don't clutter the wallet view

---

## 8. Responsive Behavior

### Breakpoints

```css
--bp-sm: 375px;  /* Mobile */
--bp-md: 768px;  /* Tablet */
--bp-lg: 1024px; /* Desktop */
--bp-xl: 1280px;
```

### Mobile-First Approach
MetaMask is designed mobile-first since it's primarily used as a mobile app. Extension designs adapt the mobile patterns.

### Touch Targets

```css
--touch-target-min: 48px;
--control-height: 48px;
```

---

## 9. Agent Prompt Guide

### Quick Visual Summary
- Use dark-forward backgrounds (#000000, #1A1B1E, #242529)
- Add purple accents like `#9269F3` for primary, `#3B82F6` for links, `#10B981` for success
- Include fox mascot for brand personality
- Keep interface clean, utility-focused
- Show transaction details prominently

### Prompt Snippet

```txt
Design this interface like MetaMask's design system: dark-forward backgrounds with layered transparency, purple (#9269F3) primary brand color, blue (#3B82F6) links, green (#10B981) success states, compact utility-focused cards, fox mascot branding, mobile-first responsive layout, Ethereum/crypto wallet aesthetic. Prioritize transaction clarity and information density.
```