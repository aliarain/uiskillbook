# Aiven Design System

> Open source data infrastructure design with practical cloud clarity, warm orange accents, and production-ready service management surfaces.

---

## 1. Visual Theme & Atmosphere

Aiven should feel like managed data infrastructure that removes operational drag. The product language needs to support PostgreSQL, Kafka, ClickHouse, OpenSearch, MySQL, Valkey, metrics, backups, compliance, BYOC, and multi-cloud deployment without making the interface feel like raw cloud plumbing.

- Mood: reliable, practical, cloud-neutral, engineer-friendly, production-ready
- Density: medium-to-high for service consoles and usage tables
- Character: warm action accents, calm neutral surfaces, service cards, region/cloud metadata

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--aiven-orange` | `#FF6B00` | Primary CTA and product accent |
| `--aiven-orange-dark` | `#D95500` | Hover / pressed state |
| `--aiven-ink` | `#111827` | Primary text and dark surfaces |
| `--aiven-blue` | `#2563EB` | Links and cloud/provider metadata |
| `--aiven-green` | `#16A34A` | Healthy service / SLA state |
| `--surface-page` | `#F8FAFC` | Console and page background |
| `--surface-card` | `#FFFFFF` | Service cards and tables |
| `--surface-soft` | `#FFF4E8` | Subtle orange callout |
| `--border-default` | `#E2E8F0` | Dividers, cards, inputs |

Use orange for action and product emphasis. Use green strictly for healthy services, uptime, backup status, or successful changes.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "SF Mono", "JetBrains Mono", "Roboto Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 58px | 700 | 1.05 |
| Page Title | 40px | 700 | 1.12 |
| Section Title | 30px | 650 | 1.2 |
| Service Title | 20px | 650 | 1.3 |
| Body | 16px | 400 | 1.6 |
| Helper | 14px | 400 | 1.45 |
| Code | 13px | 500 | 1.55 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #FF6B00;
  border-radius: 999px;
  background: #FF6B00;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.service-card {
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  background: #FFFFFF;
  padding: 18px;
}

.cloud-panel {
  border-radius: 20px;
  background: #FFF4E8;
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
| `--space-2` | `8px` | Status metadata |
| `--space-4` | `16px` | Console rhythm |
| `--space-5` | `24px` | Service card padding |
| `--space-8` | `48px` | Major sections |

Organize around cloud, region, service type, plan, connection details, backups, observability, and compliance.

## 6. Depth & Elevation

```css
.shadow-card { box-shadow: 0 8px 18px rgba(17, 24, 39, 0.06); }
.shadow-panel { box-shadow: 0 18px 42px rgba(17, 24, 39, 0.10); }
```

Use borders for console density and subtle elevation for onboarding, cloud selection, and service creation panels.

## 7. Do's and Don'ts

Do make managed services, cloud choice, SLA, and compliance visible. Do show service health clearly. Do not make multi-cloud controls look abstract. Do not hide cost, region, or backup state.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stack service cards and metadata |
| Tablet | `768px` | Two-column service and cloud panels |
| Desktop | `1200px` | Full console tables, sidebars, and service detail views |

Keep service actions and status controls at least `44px` tall.

## 9. Agent Prompt Guide

Design like Aiven: practical managed open source data infrastructure, warm orange action accents, white service cards, cloud/region metadata, clear health and SLA states, and calm production console density.
