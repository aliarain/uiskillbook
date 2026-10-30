# Proton Design System

> Privacy ecosystem design with deep purple foundations, secure product clarity, and calm encrypted-service surfaces.

---

## 1. Visual Theme & Atmosphere

Proton should feel secure, principled, and polished. The system spans Mail, VPN, Drive, Pass, Calendar, Wallet, and business products, so it needs privacy trust plus clear product-family navigation.

- Mood: private, calm, trustworthy, premium, principled
- Density: medium, with product cards, security proof, and account flows
- Character: purple gradients, deep indigo surfaces, white app panels, security-first language

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--proton-purple` | `#6D4AFF` | Primary brand and action |
| `--proton-purple-dark` | `#4C2FDB` | Hover / active state |
| `--proton-indigo` | `#1B1340` | Dark brand surface |
| `--proton-violet` | `#8B5CF6` | Gradient and secondary accent |
| `--proton-cyan` | `#7DD3FC` | Security / network accent |
| `--surface-page` | `#F6F7FB` | Page background |
| `--surface-card` | `#FFFFFF` | Product and account cards |
| `--border-default` | `#E3E6F0` | Inputs and dividers |
| `--text-muted` | `#5F6472` | Secondary text |

Use purple for identity and primary actions. Use dark indigo for trust-heavy brand surfaces and product ecosystem framing.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 60px | 700 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 650 | 1.2 |
| Card Title | 22px | 600 | 1.3 |
| Body | 16px | 400 | 1.65 |
| Helper | 14px | 400 | 1.45 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #6D4AFF;
  border-radius: 999px;
  background: #6D4AFF;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.product-card {
  border: 1px solid #E3E6F0;
  border-radius: 18px;
  background: #FFFFFF;
  padding: 22px;
}

.secure-panel {
  border-radius: 22px;
  background: linear-gradient(135deg, #1B1340, #4C2FDB);
  color: #FFFFFF;
  padding: 26px;
}

.input {
  min-height: 46px;
  border: 1px solid #E3E6F0;
  border-radius: 12px;
  padding: 0 14px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Security metadata |
| `--space-4` | `16px` | Core rhythm |
| `--space-5` | `24px` | Product cards |
| `--space-8` | `48px` | Major sections |

Group products by user need: communication, storage, identity, network privacy, business security. Keep account flows direct and reassuring.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 22px rgba(27, 19, 64, 0.08); }
.shadow-secure { box-shadow: 0 20px 50px rgba(27, 19, 64, 0.18); }
```

Use subtle shadows on cards and stronger atmosphere on dark security panels.

## 7. Do's and Don'ts

Do foreground privacy, encryption, and user control. Do separate product families clearly. Do not make the UI feel alarmist. Do not overuse gradients in functional settings screens.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack product cards and account flows |
| Tablet | `768px` | Two-column product ecosystem layouts |
| Desktop | `1200px` | Full ecosystem grid and security proof sections |

Keep forms readable and actions at least `44px` tall.

## 9. Agent Prompt Guide

Design like Proton: deep purple privacy ecosystem, secure white app cards, indigo gradient trust panels, calm encrypted-service messaging, and direct account/security flows.
