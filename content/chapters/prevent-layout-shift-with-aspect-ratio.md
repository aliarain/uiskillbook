---
number: 5
title: Prevent layout shifts with aspect ratio
description: Reserve space for images, video, and embeds before they load so the page doesn't jump under the reader's cursor.
tip: "Reserve media space with `aspect-ratio` so late images don't push content down."
updated_at: "2026-10-29"
minutes: 4
skills:
  - responsive-breakpoint-strategy
  - web-quality-audit
  - vercel-labs-web-design-guidelines
---

Layout shift happens when the browser places text first and then has to move it once an image, ad, or embed reports its real size. Readers lose their place, and a click meant for one link lands on another. Cumulative Layout Shift is also one of the Core Web Vitals, so it costs you in search ranking too.

The fix is to tell the browser the shape of the box before the content arrives. Give every `<img>` its `width` and `height` attributes, or set `aspect-ratio: 16 / 9` on the wrapper of a video or iframe. Pair it with `width: 100%` and `height: auto` so the box still scales on small screens.

```css
.media {
  aspect-ratio: 16 / 9;
  width: 100%;
  object-fit: cover;
}
```

Skeletons and placeholders follow the same rule: they should be the size of the thing they stand in for. Then run a quality audit to catch the shifts you missed, such as web fonts and late banners.
