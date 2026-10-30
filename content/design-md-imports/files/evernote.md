# Evernote Design System

> Organized, note-centric design built around a signature green, clean white writing surfaces, and a structured sidebar-list-editor layout. Evernote's public product feels dependable and capable, balancing a calm document editor with dense organization tools for notebooks, tags, and tasks.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Evernote feels like **a well-kept digital filing cabinet**. A dark sidebar anchors navigation, a scannable note list sits in the middle, and a spacious white editor gives writing room to breathe.

### Mood & Feeling
- Organized, reliable, and capable
- Calm and focused for writing
- Professional but approachable
- Fresh and slightly optimistic through its green accent
- Information-dense where it helps, quiet where it matters

### Design Density
**Medium-to-high density** in navigation and note lists; **low density** in the editor itself.

### Visual Character
- Signature green (`#00A82D`) for primary CTAs and the "New" button
- Dark charcoal sidebar (`#1A1A1A`-adjacent) with light text
- Note list cards with title, snippet, date, and thumbnail
- Wide white editor canvas with a floating formatting toolbar
- Marketing pages with bright illustrations and product screenshots

---

## 2. Color Palette & Roles

### Core Foundation

| Token | Hex | Role |
|-------|-----|------|
| `--en-green` | `#00A82D` | Primary brand, CTAs, "New" button |
| `--en-green-dark` | `#008F26` | Hover/pressed state |
| `--en-white` | `#FFFFFF` | Editor and card surfaces |
| `--en-sidebar` | `#1A1A1A` | Sidebar background |
| `--en-ink` | `#333333` | Primary text |
| `--en-ink-muted` | `#737373` | Snippets, metadata |

### Support Palette

| Token | Hex | Role |
|-------|-----|------|
| `--en-gray-50` | `#F8F8F8` | Note list background |
| `--en-border` | `#E6E6E6` | Dividers and borders |
| `--en-sidebar-text` | `#CCCCCC` | Sidebar item text |
| `--en-sidebar-active` | `#333333` | Active sidebar item |
| `--en-blue` | `#0081C2` | Links, info |
| `--en-yellow` | `#FFD700` | Highlight/reminder accent |
| `--en-red` | `#E5484D` | Destructive, overdue task |

---

## 3. Typography Rules

### Font Stack

```css
--font-display: "Graphik", "Helvetica Neue", Arial, sans-serif;
--font-sans: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-editor: "Source Sans Pro", Georgia, serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Marketing Hero | 56px | 600 | 1.1 | -0.02em | `#333333` |
| Note Title (editor) | 32px | 600 | 1.25 | -0.01em | `#333333` |
| Note List Title | 15px | 600 | 1.3 | 0 | `#333333` |
| Note Snippet | 13px | 400 | 1.45 | 0 | `#737373` |
| Editor Body | 16px | 400 | 1.6 | 0 | `#333333` |
| Sidebar Item | 14px | 500 | 1.3 | 0 | `#CCCCCC` |
| Button Label | 14px | 600 | 1.2 | 0 | `#FFFFFF` |

### Typography Philosophy
Type should **feel like writing, not configuring** — generous editor line height and a friendly humanist sans for content, with compact, weight-driven hierarchy in lists.

---

## 4. Component Stylings

### Buttons

```css
.button-primary {
  background: #00a82d;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  min-height: 40px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 600;
}

.button-primary:hover {
  background: #008f26;
}

.button-secondary {
  background: #ffffff;
  color: #333333;
  border: 1px solid #e6e6e6;
  border-radius: 999px;
  min-height: 40px;
  padding: 0 20px;
}
```

### Note List Card

```css
.note-card {
  background: #ffffff;
  border-bottom: 1px solid #e6e6e6;
  padding: 16px;
  cursor: pointer;
}

.note-card.selected {
  box-shadow: inset 0 0 0 2px #00a82d;
}

.note-snippet {
  font-size: 13px;
  color: #737373;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

### Sidebar Item

```css
.sidebar-item {
  color: #cccccc;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 14px;
}

.sidebar-item.active {
  background: #333333;
  color: #ffffff;
}
```

### Component Notes
- The "+ New" button is a green pill at the top of the sidebar
- Selected notes use a green inset outline in the list
- Editor toolbar floats above content and stays minimal
- Tags render as light gray rounded chips

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Icon gaps |
| `--space-2` | `8px` | Chip padding |
| `--space-3` | `16px` | Card and list padding |
| `--space-4` | `24px` | Editor side padding |
| `--space-5` | `48px` | Marketing block spacing |
| `--space-6` | `96px` | Marketing hero spacing |

### Layout Behavior
- Three-pane app: sidebar (~240px), note list (~320px), editor (fluid)
- Home dashboard uses modular widgets (notes, tasks, scratch pad, calendar)
- Editor content column caps around 760px for readability

### Whitespace Philosophy
Whitespace concentrates **in the editor**, while navigation panes stay compact to maximize visible notes.

---

## 6. Depth & Elevation

### Elevation Strategy
Evernote is **mostly flat** with borders separating panes; shadows are reserved for floating toolbars, menus, and dialogs.

```css
--shadow-toolbar: 0 2px 8px rgba(0, 0, 0, 0.12);
--shadow-menu: 0 4px 16px rgba(0, 0, 0, 0.15);
--shadow-modal: 0 12px 40px rgba(0, 0, 0, 0.25);
```

### Surface Hierarchy
- Dark sidebar
- Light gray note list
- White editor canvas
- Floating white menus and toolbars

---

## 7. Do's and Don'ts

### Do
- Use green for creation actions and primary CTAs
- Keep the editor spacious and distraction-free
- Use the three-pane structure for note-management views
- Use muted gray snippets beneath bold note titles

### Don't
- Do not use green for large background fills
- Do not add heavy shadows to list items
- Do not clutter the editor with persistent chrome
- Do not mix multiple accent colors in navigation

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 768px` | Single pane at a time, bottom nav, floating green "+" button |
| Tablet | `768px - 1199px` | Collapsed sidebar icons, list + editor |
| Desktop | `1200px+` | Full three-pane layout |

### Responsive Rules
- Panes collapse progressively from sidebar to list
- Editor toolbar moves above the keyboard on mobile
- Touch targets remain at least 44px

---

## 9. Agent Prompt Guide

### Quick Reference
- Signature green `#00A82D` pill CTAs
- Dark sidebar, light note list, white editor
- Bold titles with muted gray snippets
- Flat panes with floating toolbars

### Prompt Template
```text
Design this like Evernote's current public product and brand style:
- signature green (#00A82D) pill buttons for primary and create actions
- three-pane layout: dark charcoal sidebar, light gray note list, spacious white editor
- note cards with bold title, three-line muted snippet, and date
- friendly humanist sans with generous editor line height
- flat bordered panes with soft shadows only on floating toolbars and menus
- organized, reliable, calm productivity tone
```
