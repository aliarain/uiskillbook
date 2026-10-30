# Tailscale Design System

> Secure networking design with calm infrastructure clarity, friendly mesh diagrams, and low-friction admin surfaces.

---

## 1. Visual Theme & Atmosphere

Tailscale should feel like networking that finally became understandable. The design language should translate VPN, identity, devices, ACLs, subnet routing, and service access into approachable product surfaces for teams and developers.

- Mood: calm, technical, friendly, trustworthy, practical
- Density: medium, with admin tables and network diagrams
- Character: soft neutral pages, blue-green network accents, clear device and policy cards

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--tailscale-blue` | `#4B7FFF` | Primary action and active network state |
| `--tailscale-mint` | `#5EEAD4` | Mesh/network accent |
| `--tailscale-green` | `#22C55E` | Connected / healthy state |
| `--ink-strong` | `#111827` | Primary text |
| `--ink-muted` | `#64748B` | Secondary text |
| `--surface-page` | `#F8FAFC` | Page background |
| `--surface-card` | `#FFFFFF` | Admin cards and panels |
| `--surface-soft` | `#EEF6FF` | Soft active background |
| `--border-default` | `#E2E8F0` | Dividers and controls |

Use blue for action, green for healthy connections, and mint for topology or mesh relationships.

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
| Small | 14px | 400 | 1.45 |
| Code | 13px | 500 | 1.55 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #4B7FFF;
  border-radius: 999px;
  background: #4B7FFF;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.device-card {
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  background: #FFFFFF;
  padding: 18px;
}

.network-panel {
  border-radius: 20px;
  background: #EEF6FF;
  padding: 24px;
}

.input {
  min-height: 44px;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 0 14px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Device rows |
| `--space-4` | `16px` | Admin rhythm |
| `--space-5` | `24px` | Panels |
| `--space-8` | `48px` | Sections |

Show devices, users, policies, and routes as understandable entities. Keep topology diagrams readable and avoid unnecessary visual complexity.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(17, 24, 39, 0.06); }
.shadow-panel { box-shadow: 0 18px 42px rgba(17, 24, 39, 0.10); }
```

Use borders for admin lists and soft elevation for topology or onboarding panels.

## 7. Do's and Don'ts

Do make secure connectivity feel simple. Do show device state clearly. Do not make network diagrams intimidating. Do not hide identity, access, or policy context.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack devices, policies, and diagrams |
| Tablet | `768px` | Two-column admin panels |
| Desktop | `1200px` | Full topology and admin table layouts |

Keep device actions and policy toggles at least `44px` tall.

## 9. Agent Prompt Guide

Design like Tailscale: calm secure-networking UI, soft blue and mint accents, device and policy cards, readable topology diagrams, and friendly infrastructure clarity.
