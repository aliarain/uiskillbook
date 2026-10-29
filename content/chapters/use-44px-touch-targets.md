---
number: 8
title: Use 44px touch targets
description: Size tap areas for fingers, not cursors, so people hit the control they meant on the first try.
tip: "Give every tappable control at least `44px` of hit area, even if the icon is `16px`."
updated_at: "2026-10-29"
minutes: 4
skills:
  - pressed-button-feedback
  - accessible-focus-states
  - fixing-accessibility
---

A fingertip covers roughly 40–50px on a phone screen. Controls smaller than that cause missed taps, accidental taps on the neighbour, and frustration that people blame on themselves. Apple's guidelines ask for 44pt, Material asks for 48dp, and WCAG 2.2 sets a 24px minimum.

The visible icon can stay small. Grow the hit area with padding, or with an invisible pseudo-element, so the layout doesn't change:

```css
.icon-button { position: relative; }
.icon-button::after {
  content: "";
  position: absolute;
  inset: 50% auto auto 50%;
  width: 44px;
  height: 44px;
  translate: -50% -50%;
}
```

Leave at least `8px` between adjacent targets, and check that the pressed state shows feedback under the finger.
