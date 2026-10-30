# Character.AI Design System

> Consumer AI entertainment design with conversational surfaces, creator discovery, and a lively blue-led interaction system.

---

## 1. Visual Theme & Atmosphere

Character.AI should feel like a gateway into stories, roleplay, creative chat, and community-made personalities. The system is more social and entertainment-oriented than enterprise AI, but it still needs clear chat ergonomics and safety-conscious structure.

- Mood: imaginative, social, expressive, conversational, approachable
- Density: medium, with discovery cards and chat lists
- Character: bright blue actions, rounded chat surfaces, creator-style content cards

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--character-blue` | `#1A5EFF` | Primary CTA and active chat state |
| `--character-blue-dark` | `#1548CC` | Hover / pressed state |
| `--character-blue-soft` | `#EAF1FF` | Selected item or soft highlight |
| `--ink-strong` | `#111827` | Primary text |
| `--ink-default` | `#334155` | Body text |
| `--ink-muted` | `#64748B` | Metadata |
| `--surface-page` | `#F8FAFC` | App background |
| `--surface-card` | `#FFFFFF` | Character cards and chat panels |
| `--surface-bubble` | `#F1F5F9` | Assistant / character bubble |
| `--border-default` | `#E2E8F0` | Dividers and inputs |

Use blue for clear action and active conversation state. Use soft neutrals for long reading and chat comfort.

## 3. Typography Rules

```css
--font-sans: "At Hauss", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 56px | 700 | 1.05 |
| Page Title | 38px | 700 | 1.12 |
| Section Title | 28px | 700 | 1.2 |
| Character Name | 20px | 700 | 1.25 |
| Body | 16px | 400 | 1.6 |
| Chat Message | 16px | 400 | 1.65 |
| Small | 14px | 400 | 1.45 |
| Label | 13px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #1A5EFF;
  border-radius: 999px;
  background: #1A5EFF;
  color: #FFFFFF;
  font: 700 14px/1 Inter, sans-serif;
}

.chat-input {
  min-height: 50px;
  padding: 0 16px;
  border: 1px solid #E2E8F0;
  border-radius: 18px;
  background: #FFFFFF;
  color: #111827;
}

.character-card {
  border: 1px solid #E2E8F0;
  border-radius: 18px;
  background: #FFFFFF;
  padding: 18px;
}

.message-bubble {
  border-radius: 18px;
  background: #F1F5F9;
  padding: 12px 14px;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Message spacing |
| `--space-4` | `16px` | Card rhythm |
| `--space-5` | `24px` | Section padding |
| `--space-7` | `40px` | Discovery spacing |

Prioritize character discovery, chat continuity, and simple creation paths. Keep chat columns readable and avoid excessive marketing framing.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 6px 14px rgba(17, 24, 39, 0.06); }
.shadow-chat { box-shadow: 0 16px 36px rgba(17, 24, 39, 0.10); }
```

Use elevation for active chat panels and modal creation flows. Cards should stay light and content-led.

## 7. Do's and Don'ts

Do make avatars, names, tags, and chat previews scannable. Do support creative browsing. Do not make the interface feel like enterprise AI tooling. Do not let decorative character art reduce message readability.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Single chat/discovery column |
| Tablet | `768px` | Two-column discovery grids |
| Desktop | `1200px` | Sidebar plus chat or multi-column discovery |

Keep message controls fixed or easy to reach on mobile. Preserve `44px` touch targets.

## 9. Agent Prompt Guide

Design like Character.AI: blue-led interactive chat UI, rounded character discovery cards, friendly creator-community energy, clear conversation hierarchy, and lightweight entertainment polish.
