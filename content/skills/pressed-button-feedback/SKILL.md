---
name: pressed-button-feedback
title: Pressed Button Feedback
description: Give every interactive control an immediate, physical-feeling response to a press.
author:
  name: UI Skillbook
  url: https://uiskillbook.com
categories:
  - interaction
  - motion
agents:
  - claude-code
  - codex
  - cursor
  - opencode
  - universal
tasks:
  - form
  - navigation
  - other
tags:
  - buttons
  - feedback
  - microinteractions
version: 1.0.0
updated_at: "2026-09-01"
license: MIT
curated: true
---

# Pressed Button Feedback

A button that doesn't visibly react to a click reads as broken, even if the action fires correctly. The interface needs to acknowledge the press before the async result comes back.

## When to use

- Any clickable/tappable control: buttons, icon buttons, cards acting as links, toggle switches.
- Especially important on touch devices, where there's no hover state to rely on.

## Principles

- Feedback has three phases: **press** (instant, <16ms), **hold** (while pointer is down), **release** (returns to rest or transitions to a loading/success state).
- The press state should be visually distinct but subtle — a scale or brightness change, not a layout shift.
- Feedback must never wait on the network. Show the pressed state immediately; handle the async result separately (loading spinner, disabled state, error).

## Instructions

1. Add a `:active` (or `onPointerDown`) state that triggers within one frame — no transition delay on press-in.
2. Use `scale(0.97)` or a slight opacity/brightness dip, not a color change that could be mistaken for a disabled state.
3. Transition back out over 100–150ms on release so it doesn't feel sluggish.
4. If the action is async, disable the button and show a loading indicator only *after* the pressed feedback has played — don't skip straight to a spinner.
5. Respect `prefers-reduced-motion`: fall back to an opacity-only change instead of a scale transform.

## Examples

```css
button {
  transition: transform 120ms ease-out, opacity 120ms ease-out;
}
button:active {
  transform: scale(0.97);
  transition-duration: 0ms;
}
```

## Avoid

- Don't rely on the browser's default focus ring as your only feedback — it doesn't fire on click in most browsers.
- Don't animate width/height/padding for press feedback; it causes layout shift and feels laggy.
- Don't skip feedback on "instant" actions just because they resolve fast — sub-100ms actions still benefit from a press state.

## References

- Native iOS/Android touch feedback (`UIButton` highlight, Material ripple) as the baseline expectation users already have.
