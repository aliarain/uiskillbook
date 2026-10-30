# CrowdStrike Design System

> Cybersecurity platform design with dark urgency, high-contrast red emphasis, and mission-clear hierarchy. CrowdStrike’s current brand uses black, white, gray, and red with tightly controlled tertiary colors to create interfaces that feel aggressive, credible, and decisively action-oriented.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
CrowdStrike’s design language communicates **AI-native security seriousness**. The interface should feel fast, alert, and high-trust. The product and brand both depend on clear contrast, strong action hierarchy, and careful use of red to signal energy and threat awareness.

### Mood & Feeling
- **Urgent**: the stakes feel real, but not chaotic
- **Confident**: strong visual contrast supports decisive action
- **Technical**: the platform should feel cloud-native and modern
- **Disciplined**: tertiary colors exist for charts and infographics, not decorative drift
- **Enterprise-ready**: dark cybersecurity branding still needs clear workflows

### Design Density
**Medium density**. CrowdStrike surfaces often balance messaging, pricing, and platform pathways, but the brand keeps them bold and readable with strong contrast and clear sections.

### Visual Character
- Black and dark gray base
- Bright red as the brand-defining emphasis color
- Limited tertiary palette for diagrams and data visualization
- Strong CTA zones and clear pathways
- Minimal softness; the brand should feel sharp and alert

---

## 2. Color Palette & Roles

### Core Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--cs-black` | `#111111` | Primary dark background |
| `--cs-white` | `#FFFFFF` | Primary text and light surface |
| `--cs-gray-700` | `#3E4145` | Dense secondary surface |
| `--cs-gray-400` | `#7E8082` | Secondary text |
| `--cs-red` | `#D12127` | Primary brand accent, CTA, alert emphasis |
| `--cs-red-dark` | `#791D24` | Stronger brand / dark accent |

### Tertiary / Data Colors

| Token | Hex | Role |
|-------|-----|------|
| `--teal` | `#54ADB0` | Charts / diagrams / neutral positive support |
| `--teal-dark` | `#2F6363` | Stronger chart accent |
| `--success` | `#41AB58` | Success state |
| `--warning` | `#E8BF1A` | Warning state |

### Color Usage Rules
- Use red to create priority and brand recognition.
- Keep tertiary colors mostly for data, diagrams, and infographics.
- Let dark neutrals carry the main interface structure.
- Preserve high contrast everywhere, especially in security messaging.

---

## 3. Typography Rules

### Font Stack

```css
/* Modern security-platform sans */
--font-sans: Inter, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Hero Display | 58px | 700 | 1.03 | -0.025em | Main brand statement |
| Page Title | 42px | 700 | 1.08 | -0.02em | Major section title |
| Section Title | 30px | 600 | 1.15 | -0.01em | Section header |
| Card Title | 22px | 600 | 1.2 | -0.01em | Platform / pricing card |
| Body | 16px | 400 | 1.6 | 0 | Standard body text |
| Small Body | 14px | 400 | 1.5 | 0 | Supporting copy |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons and utility labels |
| Code | 13px | 400 | 1.5 | 0 | Technical values |

### Typography Philosophy
CrowdStrike typography should feel **direct and uncompromising**. The hierarchy needs to support conversion, trust, and product clarity under a darker brand mood.

### Practical Rules
- Keep headlines decisive and compact.
- Use supporting text to clarify rather than soften.
- Preserve strong contrast on dark backgrounds.

---

## 4. Component Stylings

### Buttons

#### Primary Button
```css
.button-primary {
  background: #D12127;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #D12127;
  border-radius: 999px;
  font: 600 14px/1 Inter, sans-serif;
}

.button-primary:hover {
  background: #B51A20;
  border-color: #B51A20;
}
```

#### Secondary Button
```css
.button-secondary {
  background: transparent;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #7E8082;
  border-radius: 999px;
}
```

### Inputs

#### Text Input
```css
.input {
  width: 100%;
  min-height: 44px;
  padding: 0 14px;
  background: #111111;
  color: #FFFFFF;
  border: 1px solid #3E4145;
  border-radius: 14px;
  font: 400 16px/1.2 Inter, sans-serif;
}

.input:focus {
  outline: none;
  border-color: #D12127;
  box-shadow: 0 0 0 3px rgba(209, 33, 39, 0.16);
}
```

### Cards and Security Panels

#### Card
```css
.card {
  background: #111111;
  color: #FFFFFF;
  border: 1px solid #3E4145;
  border-radius: 22px;
  padding: 24px;
}
```

#### Alert Panel
```css
.alert-panel {
  background: #1A1A1A;
  border-left: 4px solid #D12127;
  border-radius: 16px;
  padding: 20px;
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Tight spacing |
| `--space-4` | `16px` | Core spacing |
| `--space-5` | `24px` | Card spacing |
| `--space-6` | `32px` | Section spacing |
| `--space-8` | `48px` | Major grouping |
| `--space-10` | `64px` | Large layout rhythm |

### Layout Rules
- Build around strong dark section bands and clear CTA sequences.
- Keep pricing, trial, and contact pathways visually obvious.
- Use proof points and platform modules in simple bounded groups.
- Reserve tertiary colors for charts, diagrams, and explanatory visuals.

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Base dark | black / dark gray | Main page field |
| Card dark | bordered panel | Content groupings |
| Alert | red-led border or tinted surface | Attention state |
| Overlay | dark surface + stronger shadow | Modal or focused flow |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.22);
}

.shadow-overlay {
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.32);
}
```

### Depth Rules
- Use contrast and border before larger shadow.
- Keep red emphasis precise rather than flooding every layer.
- Maintain readable boundaries between sections on dark canvases.

---

## 7. Do's and Don'ts

### Do
- Use red for critical emphasis and brand recognition.
- Keep dark surfaces sharp and high contrast.
- Use tertiary colors mainly for data storytelling.
- Make CTAs and next steps unmistakable.
- Preserve an aggressive but controlled tone.

### Don't
- Turn tertiary colors into random UI accents.
- Use low-contrast grays on dark surfaces.
- Add playful or soft consumer-style treatments.
- Overload a section with too many competing red moments.
- Blur alert messaging into decorative styling.

---

## 8. Responsive Behavior

### Responsive Rules
- Keep CTA groups clear and stackable on mobile.
- Preserve contrast and button prominence in dark layouts.
- Reduce secondary proof density before shrinking text too far.
- Keep cards roomy enough to avoid claustrophobic dark UI.
- Maintain strong hierarchy between pricing, trial, and platform sections.

### Mobile Character
CrowdStrike mobile layouts should still feel urgent and enterprise-grade. The dark-red contrast system should stay crisp and decisive, not cramped.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: urgent, credible, high-contrast, security-focused
- **Primary accent**: CrowdStrike red `#D12127`
- **Base palette**: black, white, dark gray
- **Typography**: modern enterprise sans
- **Layout**: dark section bands, clear CTA hierarchy, precise data accents

### Prompt Snippet

```text
Design this interface in the style of CrowdStrike’s current brand and web platform. Use black and dark-gray surfaces, CrowdStrike red (#D12127) as the primary emphasis color, a modern enterprise sans type system, and sharp, high-contrast section hierarchy. The result should feel urgent, trustworthy, and cloud-native, with tertiary colors reserved mainly for charts and explanatory visuals.
```
