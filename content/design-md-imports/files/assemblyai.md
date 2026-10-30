# AssemblyAI Design System

> Voice AI design with deep indigo identity, developer-first surfaces, mono code aesthetics, and speech-intelligence clarity.

---

## 1. Visual Theme & Atmosphere

AssemblyAI should feel precise, powerful, and developer-native. The design communicates speech-to-text accuracy, audio intelligence, LeMUR AI, and API-first workflows.

- Mood: technical, trustworthy, fast, developer-friendly
- Density: medium, with API reference panels, audio waveforms, and transcript surfaces
- Character: deep indigo brand, near-black backgrounds, green accuracy accents, mono code throughout

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| `--aai-indigo` | `#5C6BC0` | Primary brand CTA and highlights |
| `--aai-deep` | `#1A1A2E` | Dark surface backgrounds |
| `--aai-green` | `#4ADE80` | Transcription confidence and success |
| `--aai-cyan` | `#22D3EE` | Audio waveform and streaming indicator |
| `--aai-red` | `#F87171` | Error and low-confidence states |
| `--aai-amber` | `#FBBF24` | Processing / in-progress states |
| `--surface-card` | `#FFFFFF` | Light content panels |
| `--surface-dark` | `#0F172A` | Code blocks and terminal panels |
| `--surface-bg` | `#F8FAFC` | Page background |
| `--text-primary` | `#0F172A` | Main body and headings |
| `--border-default` | `#E2E8F0` | Panel and section borders |

Use indigo for primary interactions. Use cyan for anything related to live audio or streaming. Reserve green strictly for successful transcription states.

## 3. Typography Rules

```css
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "Fira Code", "SF Mono", Menlo, monospace;
```

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Display | 58px | 700 | 1.05 |
| Page Title | 38px | 700 | 1.1 |
| Section Title | 26px | 600 | 1.2 |
| Card Title | 20px | 600 | 1.3 |
| Body | 16px | 400 | 1.65 |
| Code | 14px | 400 | 1.7 |
| Label | 12px | 600 | 1.35 |

## 4. Component Stylings

```css
.button-primary {
  min-height: 42px;
  padding: 0 18px;
  border: none;
  border-radius: 8px;
  background: #5C6BC0;
  color: #FFFFFF;
  font: 600 14px/1 Inter, sans-serif;
}

.transcript-panel {
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  background: #FFFFFF;
  padding: 20px 24px;
  font: 400 15px/1.8 Inter, sans-serif;
}

.code-block {
  border-radius: 12px;
  background: #0F172A;
  color: #E2E8F0;
  padding: 20px 24px;
  font: 400 13px/1.7 "JetBrains Mono", monospace;
}

.waveform-bar {
  height: 48px;
  border-radius: 8px;
  background: linear-gradient(135deg, #5C6BC0, #22D3EE);
}
```

## 5. Layout Principles

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | `8px` | Word-timestamp spacing |
| `--space-4` | `16px` | Core content rhythm |
| `--space-6` | `24px` | Panel padding |
| `--space-10` | `40px` | Major section gaps |

Show the API call and the result side-by-side wherever possible. Transcript text should have generous line-height for readability.

## 6. Depth & Elevation

```css
.shadow-card  { box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06); }
.shadow-panel { box-shadow: 0 8px 28px rgba(92, 107, 192, 0.12); }
.shadow-dark  { box-shadow: 0 20px 48px rgba(15, 23, 42, 0.30); }
```

Dark panels for code should use stronger shadows to maintain contrast against light page backgrounds.

## 7. Do's and Don'ts

Do show real transcript output in every example. Do highlight speaker labels with subtle color. Do use mono font for all API keys, timestamps, and JSON. Do not mix indigo and cyan as co-equal actions. Do not use decoration over functional waveform/transcript UI.

## 8. Responsive Behavior

| Breakpoint | Min Width | Behavior |
|------------|-----------|----------|
| Mobile | `0px` | Stacked transcript, hidden code panel |
| Tablet | `768px` | Two-column docs with inline code |
| Desktop | `1200px` | Full docs layout, side-by-side API explorer |

Prioritize readable transcript output on every screen size.

## 9. Agent Prompt Guide

Design like AssemblyAI: deep indigo CTAs, Inter and JetBrains Mono type, dark code surfaces, cyan audio accents, transcript-first layouts, and clean developer documentation hierarchy.
