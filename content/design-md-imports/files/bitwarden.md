# Bitwarden Design System

> Open-source password manager design with trusted blue identity, security-first surfaces, clean type, and transparent privacy messaging.

---

## 1. Visual Theme & Atmosphere

Bitwarden should feel secure, trustworthy, and open. The design language communicates end-to-end encryption, zero-knowledge architecture, cross-platform sync, and community-driven security.

- Mood: secure, transparent, reliable, professional
- Density: medium, with vault item lists, generator panels, and organization surfaces
- Character: trusted blue brand, clean white vault, subtle gray hierarchy, minimal ornamentation

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--bw-blue` | `#175DDC` | Primary brand and CTA |
| `--bw-blue-dark` | `#0F42A8` | Hover and active states |
| `--bw-teal` | `#0891B2` | Secondary highlight and link |
| `--bw-green` | `#16A34A` | Password strength strong / success |
| `--bw-amber` | `#D97706` | Password strength medium / alert |
| `--bw-red` | `#DC2626` | Password strength weak / breach alert |
| `--surface-card` | `#FFFFFF` | Vault item cards |
| `--surface-bg` | `#F8FAFC` | Vault list background |
| `--surface-sidebar` | `#1E293B` | Navigation sidebar |
| `--text-primary` | `#0F172A` | Primary labels and vault names |
| `--border-default` | `#E2E8F0` | Item rows and dividers |

Use blue consistently for all primary actions. Password strength indicators must use the exact red/amber/green scale — never swap these roles.

## 3. Typography Rules

```css
--font-sans: "DM Sans", Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 32px | 700 | 1.1 |
| Section Title | 22px | 600 | 1.25 |
| Vault Item Name | 16px | 600 | 1.3 |
| Body | 15px | 400 | 1.6 |
| Password / Code | 15px | 400 | 1.5 |
| Label | 12px | 600 | 1.35 |
| Caption | 12px | 400 | 1.4 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 40px;
  padding: 0 16px;
  border: none;
  border-radius: 6px;
  background: #175DDC;
  color: #FFFFFF;
  font: 600 14px/1 "DM Sans", sans-serif;
}

.vault-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #E2E8F0;
  background: #FFFFFF;
}

.password-field {
  font: 400 15px/1 "JetBrains Mono", monospace;
  letter-spacing: 0.1em;
  padding: 0 14px;
  height: 40px;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
}

.strength-bar {
  height: 4px;
  border-radius: 999px;
  background: #E2E8F0;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Vault row padding |
| `--space-4` | `16px` | Core rhythm |
| `--space-6` | `24px` | Section header padding |
| `--space-10` | `40px` | Page-level separation |

Sidebar navigation must always be visible on desktop. Vault list items should be dense but tappable — minimum 44px touch targets on mobile.

## 6. Depth & Elevation

```css
.shadow-card   { box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08); }
.shadow-modal  { box-shadow: 0 16px 40px rgba(15, 23, 42, 0.18); }
.shadow-dialog { box-shadow: 0 24px 60px rgba(15, 23, 42, 0.24); }
```

Keep elevation minimal in the vault list to avoid visual noise. Reserve stronger shadows for modals and security alerts.

## 7. Do's and Don'ts

Do communicate open-source and end-to-end encryption clearly. Do use mono fonts for all passwords and keys. Do use the strength indicator scale consistently. Do not use gradients or decorative illustration in security-critical flows. Do not hide breach alerts — make them prominent but not alarmist.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Full-screen vault list, bottom-tab navigation |
| Tablet | `768px` | Sidebar + list + detail three-column layout |
| Desktop | `1200px` | Full vault dashboard with organization panel |

Vault item detail should always be reachable without losing list context on tablet and above.

## 9. Agent Prompt Guide

Design like Bitwarden: trusted blue CTAs, mono password fields, dark sidebar navigation, clean vault list density, consistent strength indicators, and transparent open-source security messaging.
