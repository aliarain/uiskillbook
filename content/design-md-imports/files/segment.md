# Segment Design System

> Customer data platform design with bold green identity, data-pipeline clarity, integration catalog surfaces, and schema-driven UX.

---

## 1. Visual Theme & Atmosphere

Segment should feel structured, developer-friendly, and trustworthy. The design language communicates data collection, routing, warehouses, reverse ETL, and the customer data infrastructure that powers personalization.

- Mood: structured, reliable, technical, clean
- Density: medium-to-high, with source/destination catalogs, event schemas, and pipeline flow diagrams
- Character: bold green brand, clean white schema surfaces, dark pipeline visualizations, mono event names

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--seg-green` | `#52BD95` | Primary brand CTA and pipeline active |
| `--seg-green-dark` | `#2F9E76` | Hover and active states |
| `--seg-teal` | `#0891B2` | Destinations and integrations accent |
| `--seg-blue` | `#3B82F6` | Secondary actions and links |
| `--seg-amber` | `#F59E0B` | Warning and retry states |
| `--seg-red` | `#EF4444` | Pipeline error and delivery failure |
| `--surface-card` | `#FFFFFF` | Schema and integration cards |
| `--surface-bg` | `#F8FAFC` | Dashboard background |
| `--surface-pipeline` | `#0F172A` | Pipeline flow dark surface |
| `--text-primary` | `#0F172A` | Schema labels and values |
| `--border-default` | `#E2E8F0` | Card and table borders |

The pipeline flow diagram is the signature visual. Green for healthy data flow, red for errors — this mapping must never break.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 30px | 700 | 1.1 |
| Section Title | 22px | 600 | 1.2 |
| Event Name | 15px | 700 | 1.3 |
| Property Key | 14px | 600 | 1.4 |
| Property Value | 14px | 400 | 1.4 |
| Body | 15px | 400 | 1.6 |
| Label | 12px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 40px;
  padding: 0 16px;
  border: none;
  border-radius: 6px;
  background: #52BD95;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.integration-card {
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  background: #FFFFFF;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.event-row {
  display: grid;
  padding: 10px 16px;
  border-bottom: 1px solid #E2E8F0;
  font: 400 14px/1.5 "JetBrains Mono", monospace;
}

.pipeline-node {
  border-radius: 8px;
  padding: 10px 16px;
  border: 1.5px solid #52BD95;
  background: #0F172A;
  color: #FFFFFF;
  font: 600 13px/1.3 Inter, sans-serif;
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Schema property spacing |
| `--space-4` | `16px` | Card rhythm |
| `--space-6` | `24px` | Section padding |
| `--space-10` | `40px` | Catalog and pipeline section gaps |

Pipeline flow diagrams are left-to-right: Sources → Segment → Destinations. Integration catalog uses a 3-4 column grid with logo, name, category, and status.

## 6. Depth & Elevation

```css
.shadow-card     { box-shadow: 0 1px 4px rgba(15, 23, 42, 0.06); }
.shadow-pipeline { box-shadow: 0 12px 32px rgba(82, 189, 149, 0.12); }
.shadow-modal    { box-shadow: 0 20px 50px rgba(15, 23, 42, 0.16); }
```

Pipeline flow visualizations benefit from green-tinted ambient shadows to reinforce active data flow.

## 7. Do's and Don'ts

Do always use mono font for event names and property keys. Do make pipeline health immediately visible from the dashboard. Do surface error rates and delivery failures prominently. Do not use green for both the brand and non-pipeline success states. Do not bury the integration catalog — it is a primary discovery surface.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Pipeline health summary, integration status list |
| Tablet | `768px` | Integration catalog grid, simplified pipeline view |
| Desktop | `1200px` | Full workspace: sources, pipeline diagram, destinations, schema browser |

The pipeline flow diagram requires desktop. Mobile serves as a monitoring view.

## 9. Agent Prompt Guide

Design like Segment: bold green pipeline CTAs, mono event names, dark flow diagrams, integration catalog grid, schema-browser hierarchy, delivery-health indicators, and data-infrastructure clarity.
