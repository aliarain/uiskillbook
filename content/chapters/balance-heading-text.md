---
number: 6
title: Balance heading text
description: Stop headlines from ending on a single orphaned word by letting the browser even out the line lengths.
tip: "Use `text-wrap: balance` on headings and `text-wrap: pretty` on paragraphs."
updated_at: "2026-10-29"
minutes: 3
skills:
  - better-typography
  - swiss-design
  - spacing-rhythm
---

A two-line heading with one word on the second line looks like a mistake. Designers used to fix it by hand with `<br>` tags or non-breaking spaces, which broke as soon as the viewport or the copy changed.

`text-wrap: balance` asks the browser to split the text into lines of roughly equal length. It only works on short blocks (a few lines), which is exactly what headings, card titles, and captions are. In Tailwind it is the `text-balance` utility.

```css
h1, h2, h3 { text-wrap: balance; }
p { text-wrap: pretty; }
```

For body copy use `text-wrap: pretty` instead. It is cheaper and only avoids a lone word on the last line. Neither property changes the font size, so set a sensible `max-width` in `ch` units as well.
