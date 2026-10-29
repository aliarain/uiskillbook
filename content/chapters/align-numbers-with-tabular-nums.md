---
number: 7
title: Align numbers with tabular-nums
description: Make prices, counters, and table columns line up by giving every digit the same width.
tip: "Set `font-variant-numeric: tabular-nums` on counters, prices, and table cells."
updated_at: "2026-10-29"
minutes: 3
skills:
  - data-table-scannability
  - dashboard-information-density
  - better-typography
---

Most UI fonts use proportional digits: a `1` is narrower than an `8`. In running text that looks good. In a column of prices, a timer, or a live counter it makes numbers wobble and stops the decimal points from lining up.

`font-variant-numeric: tabular-nums` switches to fixed-width digits that the font already ships. In Tailwind it is `tabular-nums`. Apply it to table cells, stats, countdowns, and anything that updates in place.

```css
td, .stat, time { font-variant-numeric: tabular-nums; }
```

Right-align numeric columns so the place values stack, and keep the unit in the header instead of repeating it in every cell.
