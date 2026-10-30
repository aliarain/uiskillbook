# Todoist Design System

> Calm, focused productivity design built around a warm off-white canvas, a signature tomato-red accent, and dense-but-breathable task lists. Todoist's public product and marketing site feel friendly and quietly confident, pairing crisp typography with soft illustration and a disciplined use of color for priorities.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Todoist feels like **a tidy paper planner rendered as software**. Warm neutral surfaces, generous line height, and a single red brand accent keep attention on tasks while priority colors add just enough signal.

### Mood & Feeling
- Calm, organized, and reassuring
- Friendly without being playful to excess
- Focused and distraction-free
- Warm, human, and approachable
- Quietly premium

### Design Density
**Medium density.** Task lists are compact single-line rows, but whitespace, hairline dividers, and relaxed line heights prevent the interface from feeling cramped.

### Visual Character
- Warm off-white (`#FEFDFC`) canvas with near-black text
- Signature red (`#DC4C3E`-adjacent) for primary CTAs, logo, and "add task"
- Circular checkboxes whose stroke color reflects task priority
- Left sidebar navigation with project color dots
- Soft, hand-drawn-feeling illustrations on marketing pages

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--td-red` | `#DC4C3E` | Primary brand accent, CTAs, add-task |
| `--td-red-hover` | `#C3392C` | Primary hover/pressed state |
| `--td-canvas` | `#FEFDFC` | Marketing and app canvas |
| `--td-sidebar` | `#FCFAF8` | Sidebar background |
| `--td-ink` | `#202020` | Primary text |
| `--td-ink-muted` | `#666666` | Secondary text, metadata |

### Priority & Support Palette

| Token | Hex | Role |
|-------|-----|------|
| `--td-p1` | `#D1453B` | Priority 1 checkbox |
| `--td-p2` | `#EB8909` | Priority 2 checkbox |
| `--td-p3` | `#246FE0` | Priority 3 checkbox |
| `--td-p4` | `#808080` | Default priority checkbox |
| `--td-green` | `#058527` | Today / success, due-date highlight |
| `--td-purple` | `#692FC2` | Upcoming / date accent |
| `--td-divider` | `#F0F0F0` | Row dividers |
| `--td-border` | `#E6E6E6` | Input and card borders |

---

## 3. Typography Rules

### Font Stack

```css
--font-display: "Graphik", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Marketing Hero | 56px | 600 | 1.1 | -0.02em | `#202020` |
| Section Heading | 32px | 600 | 1.2 | -0.01em | `#202020` |
| View Title (Today/Inbox) | 20px | 700 | 1.3 | 0 | `#202020` |
| Task Content | 14px | 400 | 1.5 | 0 | `#202020` |
| Task Meta (date, label) | 12px | 400 | 1.4 | 0 | `#666666` |
| Button Label | 13px | 600 | 1.2 | 0 | `#FFFFFF` |

### Typography Philosophy
Type is **quiet and highly legible**. The product leans on native system fonts for speed and familiarity, while marketing uses a slightly more characterful grotesque for headlines.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #dc4c3e;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  min-height: 32px;
  padding: 0 12px;
  font-size: 13px;
  font-weight: 600;
}

.button-primary:hover {
  background: #c3392c;
}

.button-secondary {
  background: #f5f5f5;
  color: #444444;
  border: none;
  border-radius: 5px;
  min-height: 32px;
  padding: 0 12px;
}
```

### Task Row

```css
.task-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.task-checkbox {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #808080;
}

.task-checkbox.p1 {
  border: 2px solid #d1453b;
  background: rgba(209, 69, 59, 0.1);
}
```

### Quick Add Input

```css
.quick-add {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  padding: 10px 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.quick-add:focus-within {
  border-color: #b3b3b3;
}
```

### Component Notes
- The "Add task" affordance is a red plus icon that fills on hover
- Checkboxes are circles, not squares; priority is encoded only in stroke/tint color
- Project colors appear as small dots in the sidebar, never as large fills
- Hover reveals row actions (edit, date, comment) to keep resting state clean

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Icon gaps |
| `--space-2` | `8px` | Task row padding |
| `--space-3` | `12px` | Button padding, input padding |
| `--space-4` | `24px` | Section spacing in views |
| `--space-5` | `48px` | Marketing block spacing |
| `--space-6` | `96px` | Marketing hero spacing |

### Layout Behavior
- App uses a collapsible left sidebar (~280px) with a centered content column (max ~800px)
- List view is the default; board view uses fixed-width columns (~260px)
- Marketing pages alternate text blocks with product screenshots and illustrations

### Whitespace Philosophy
Whitespace should feel **like a clean desk** — enough room for the mind to settle, but never so sparse that lists lose their scannability.

---

## 6. Depth & Elevation

### Elevation Strategy
Todoist is **mostly flat**. Depth appears only for floating layers such as quick add, menus, and modals.

```css
--shadow-menu: 0 0 8px rgba(0, 0, 0, 0.12);
--shadow-modal: 0 15px 50px rgba(0, 0, 0, 0.35);
--shadow-input: 0 1px 4px rgba(0, 0, 0, 0.08);
```

### Surface Hierarchy
- Warm off-white canvas
- Slightly tinted sidebar
- White floating menus, popovers, and modals with soft shadows

---

## 7. Do's and Don'ts

### Do
- Keep red reserved for brand, primary CTAs, and P1 priority
- Use circular checkboxes with priority-colored strokes
- Keep task rows compact with hairline dividers
- Reveal secondary actions on hover

### Don't
- Do not use heavy card shadows on list items
- Do not fill large areas with project or priority colors
- Do not use cold pure-gray backgrounds; keep neutrals warm
- Do not crowd rows with persistent icons

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Sidebar becomes drawer, floating red add button bottom-right |
| Tablet | `768px - 1023px` | Collapsible sidebar overlay, single content column |
| Desktop | `1024px+` | Persistent sidebar, centered list column |

### Responsive Rules
- Floating action button (56px, red, circular) replaces inline "Add task" on mobile
- Task rows grow to at least 44px tall for touch
- Board view scrolls horizontally on narrow screens

---

## 9. Agent Prompt Guide

### Quick Reference
- Warm off-white canvas, near-black text
- Tomato red for brand and primary actions
- Circular priority-colored checkboxes
- Compact list rows with hairline dividers

### Prompt Template
```text
Design this like Todoist's current public product and brand style:
- warm off-white canvas with near-black system-font text
- a single tomato-red accent for CTAs, the add-task button, and P1 priority
- compact task rows with circular checkboxes colored by priority (red, orange, blue, gray)
- left sidebar with small colored project dots and a centered content column
- flat surfaces, with soft shadows only on menus, quick-add, and modals
- calm, organized, friendly productivity tone
```
