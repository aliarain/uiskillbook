# Qualtrics Design System

> Experience-management design with flexible survey styling, clean enterprise surfaces, and explicit accessibility safeguards. Qualtrics supports multiple survey layouts and palette options while keeping typography, question flow, and response patterns readable and mobile-friendly.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Qualtrics is about **configurable clarity**. The product must support many brands and research contexts, but the core experience should still feel coherent, accessible, and easy to complete. Survey-taking should feel focused and low-friction.

### Mood & Feeling
- **Professional**: research, CX, and employee feedback require trust
- **Adaptable**: the system is designed to absorb different visual styles
- **Readable**: question flow and answer structures must stay immediately legible
- **Accessible**: color contrast and mobile-first behavior are explicit priorities
- **Calm**: customization should never compromise comprehension

### Design Density
**Medium density**. Surveys are often repetitive by nature, so the visual system needs to keep momentum without visual fatigue.

### Visual Character
- Clean white survey surfaces
- Layout variants like Flat, Modern, and Classic
- Primary and secondary color slots drive much of the customization
- Typography options remain practical and readable
- Questions, progress, navigation, and validation are clearly separated

---

## 2. Color Palette & Roles

### Survey Style Primitives

| Token | Hex | Role |
|-------|-----|------|
| `--primary` | `#4F46E5` | Progress bar, question highlight, main accent |
| `--secondary` | `#111827` | Next / Back button, secondary control emphasis |
| `--surface-page` | `#F8FAFC` | Survey background |
| `--surface-card` | `#FFFFFF` | Question container surface |
| `--text-strong` | `#111827` | Primary text |
| `--text-muted` | `#6B7280` | Secondary text |
| `--border-default` | `#E5E7EB` | Input, question, and card boundaries |

### Default Layout Font / Theme Associations

| Layout | Default Font | Visual Character |
|--------|--------------|------------------|
| Flat | `Poppins` | Contemporary, friendly |
| Modern | `Open Sans` | Clean and neutral |
| Classic | `Helvetica Neue` | Traditional and straightforward |

### Validation and Accessibility Colors

| Token | Hex | Role |
|-------|-----|------|
| `--success` | `#15803D` | Completed / positive feedback |
| `--warning` | `#D97706` | Caution or incomplete state |
| `--danger` | `#DC2626` | Response required / error |

### Color Usage Rules
- Keep the background neutral before choosing primary and secondary colors.
- Respect automatic contrast adjustments in the new survey experience.
- Keep question text and answer text highly legible even under branding overrides.

---

## 3. Typography Rules

### Font Stack

```css
/* Layout-dependent defaults */
--font-flat: Poppins, sans-serif;
--font-modern: 'Open Sans', sans-serif;
--font-classic: 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', 'Roboto Mono', Menlo, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| Survey Title | 32px | 700 | 1.2 | -0.01em | Survey heading |
| Question Title | 22px | 600 | 1.3 | 0 | Main question prompt |
| Section Heading | 18px | 600 | 1.35 | 0 | Grouping label |
| Body | 16px | 400 | 1.6 | 0 | Survey text and answer copy |
| Small Body | 14px | 400 | 1.5 | 0 | Helper or explanatory text |
| Label | 14px | 600 | 1.3 | 0.01em | Buttons, field labels |

### Typography Philosophy
Qualtrics typography should be **clear first, expressive second**. Survey-taking requires stamina, so readable defaults matter more than brand showmanship.

### Practical Rules
- Keep question prompts prominent.
- Separate answer text from metadata cleanly.
- Use layout font defaults unless branding truly requires a change.

---

## 4. Component Stylings

### Buttons

#### Next / Primary Button
```css
.button-primary {
  background: #111827;
  color: #FFFFFF;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #111827;
  border-radius: 12px;
  font: 600 14px/1 'Open Sans', sans-serif;
}
```

#### Secondary Button
```css
.button-secondary {
  background: #FFFFFF;
  color: #111827;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
}
```

### Inputs

#### Text Field
```css
.input {
  width: 100%;
  min-height: 44px;
  padding: 0 14px;
  background: #FFFFFF;
  color: #111827;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  font: 400 16px/1.2 'Open Sans', sans-serif;
}

.input:focus {
  outline: none;
  border-color: #4F46E5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.14);
}
```

### Question Containers

#### Question Card
```css
.question-card {
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 18px;
  padding: 24px;
}
```

#### Validation Alert
```css
.validation-alert {
  background: #FEF2F2;
  border-left: 4px solid #DC2626;
  border-radius: 12px;
  padding: 12px 16px;
}
```

---

## 5. Layout Principles

### Layout Rules
- Keep survey progress clear and low-friction.
- Use one primary question focus per screen or visual group.
- Ensure mobile-first behavior for answer lists and validation states.
- Avoid branding choices that reduce readability or increase response effort.

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Tight spacing |
| `--space-4` | `16px` | Core spacing |
| `--space-5` | `24px` | Question card spacing |
| `--space-6` | `32px` | Survey section rhythm |

---

## 6. Depth & Elevation

### Surface Hierarchy

| Level | Treatment | Use |
|-------|-----------|-----|
| Page | light neutral background | Survey field |
| Question card | white bounded panel | Main question unit |
| Validation | tinted alert | Response-required messaging |
| Overlay | white elevated surface | Optional modal or help |

### Shadow System

```css
.shadow-card {
  box-shadow: 0 6px 14px rgba(17, 24, 39, 0.06);
}

.shadow-overlay {
  box-shadow: 0 18px 30px rgba(17, 24, 39, 0.12);
}
```

### Depth Rules
- Keep question containers readable and distinct.
- Let validation states stand out without overwhelming the experience.
- Use depth only to guide focus.

---

## 7. Do's and Don'ts

### Do
- Keep question prompts visually dominant.
- Use primary and secondary colors with accessibility in mind.
- Support mobile-first survey completion.
- Keep layouts calm and repetitive in a good way.
- Use the default layout fonts when they improve clarity.

### Don't
- Sacrifice readability for brand customization.
- Use harsh background colors behind long surveys.
- Let validation blend into the background.
- Overcomplicate answer choices with decorative styling.

---

## 8. Responsive Behavior

### Responsive Rules
- Make question cards stack naturally with comfortable spacing.
- Keep buttons large and easy to tap.
- Preserve progress and validation visibility on mobile.
- Allow contrast safeguards to override custom choices when needed.

### Mobile Character
Qualtrics mobile experiences should feel focused and frictionless. Survey-taking needs to remain readable, touch-friendly, and low-stress from first question to submit.

---

## 9. Agent Prompt Guide

### Quick Reference
- **Mood**: professional, readable, configurable, accessible
- **Core structure**: question cards on light neutral surfaces
- **Typography**: Poppins / Open Sans / Helvetica Neue by layout
- **Layout**: mobile-first survey flow
- **Components**: strong question prompts, clear progress, prominent validation

### Prompt Snippet

```text
Design this interface in the style of Qualtrics survey experiences. Use a clean card-based survey layout, readable default typography, configurable primary and secondary colors that preserve accessibility, and a mobile-first question flow. The result should feel professional, focused, and easy to complete even across long surveys.
```
