---
name: raptrx-ui
description: Build and theme UI in raptrx apps with raptrx-ui, the private raptrx design system (Siteplane-based components, the raptrx brand theme, the token-protected @raptrx shadcn registry). Use it for any UI work in a project that has src/raptrx-ui/ or an @raptrx registry in components.json: pages, forms, dialogs, tables, dashboards, dark mode, brand colors and fonts. Also use it to set raptrx-ui up in a new app, to add or update @raptrx components, and to move an app off Siteplane UI direct (src/siteplane/, @siteplane registry), even when the user only says "use our design system" or "make it look like raptrx".
metadata:
  version: 0.1.0
  kit: Siteplane UI 1.7.0
---

# raptrx-ui

raptrx-ui is the one component set every raptrx app uses. The source lives in the app under `src/raptrx-ui/` and comes from the private `@raptrx` shadcn registry. It is Siteplane UI's free kit with the raptrx brand on top, plus a few components of our own. The repo is `aliarain/raptrx-ui`.

Five rules before anything else:

1. Use a raptrx-ui component before writing your own markup. Check `references/catalog.md`, then the live examples in the docs app (`/components/<slug>`).
2. Install with `pnpm dlx shadcn@4.18.0 add @raptrx/<name>`. Never run `shadcn init`.
3. Change the look through tokens, never by editing a component's CSS. Brand tokens live in `src/raptrx-ui/theme/raptrx.css`.
4. Check every screen in light and dark, and open its overlays in both.
5. Keep state in the app. Components are controlled or uncontrolled like their Base UI parts; they do not fetch or persist anything.

## Is this app set up?

Look for these. If one is missing, fix it before building UI.

- `components.json` has `"utils": "@/raptrx-ui/system/utils/cn"` and an `@raptrx` registry (below).
- The global stylesheet starts with `@import "../raptrx-ui/theme/index.css";` and `@source "..";`, with no separate `@import "tailwindcss"`.
- The root layout imports `@/raptrx-ui/theme/fonts` and wraps the app in `AppTheme` (or another theme controller wired to `SiteplaneUIProvider`).
- `.env.local` has `RAPTRX_UI_URL` and `RAPTRX_UI_TOKEN`. Never print, log or commit the token.

If the app still has `src/siteplane/` or an `@siteplane` registry, migrate it first (see "Moving off Siteplane direct").

## Set up a new app

The app needs React 19, TypeScript 5.9+, Tailwind CSS 4, the App Router (or Vite) and an `@/*` alias to `src/*`. If an existing app would need a major upgrade or a move into `src/`, say what would change and wait for an answer.

1. Write `components.json` by hand. `shadcn init` writes a shadcn theme that fights the kit, so do not run it, not even to "fix" a missing file.

   ```json
   {
     "$schema": "https://ui.shadcn.com/schema.json",
     "style": "new-york",
     "rsc": true,
     "tsx": true,
     "tailwind": { "config": "", "css": "src/app/globals.css", "baseColor": "neutral", "cssVariables": true, "prefix": "" },
     "iconLibrary": "lucide",
     "aliases": {
       "components": "@/components",
       "ui": "@/components/ui",
       "lib": "@/lib",
       "hooks": "@/hooks",
       "utils": "@/raptrx-ui/system/utils/cn"
     },
     "registries": {
       "@raptrx": {
         "url": "${RAPTRX_UI_URL}/r/{name}.json",
         "headers": { "Authorization": "Bearer ${RAPTRX_UI_TOKEN}" }
       }
     }
   }
   ```

2. Ask the user for the registry URL and token, and put them in `.env.local`. While the registry is not deployed, it runs locally: `pnpm dev` in the raptrx-ui repo serves it on `http://localhost:3000`, and dev mode needs no token.
3. `pnpm dlx shadcn@4.18.0 add @raptrx/button @raptrx/app-theme`. Every item brings `@raptrx/base`, which holds the kit styles, the brand theme and the font packages.
4. Replace `src/app/globals.css` with the two lines from the checklist above. App styles go below them.
5. Root layout:

   ```tsx
   import "@/raptrx-ui/theme/fonts";
   import "./globals.css";
   import { AppTheme } from "@/raptrx-ui/components/app-theme";

   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en" suppressHydrationWarning>
         <body className="bg-background text-foreground">
           <AppTheme>{children}</AppTheme>
         </body>
       </html>
     );
   }
   ```

6. Add `"src/raptrx-ui/**"` to the ignores in `eslint.config.mjs`. The kit is synced source, and Next's newer React hook rules flag a few of its files; lint the app's own code, not the kit.
7. Build, then open the app in a browser. Unstyled components mean the stylesheet import or `@source` is missing.

Offline, with no server: point the registry at the built files, `"@raptrx": "/abs/path/to/raptrx-ui/registry-dist/r/{name}.json"` (run `pnpm registry:build` in raptrx-ui first), and add items by path: `pnpm dlx shadcn@4.18.0 add /abs/path/to/raptrx-ui/registry-dist/r/button.json`. Their dependencies resolve through the same entry. Only the top-level `@raptrx/<name>` shorthand needs a URL.

## Adding and updating components

- `shadcn add @raptrx/<name>` installs the item and everything it needs. Imports look like `@/raptrx-ui/components/<name>`.
- If a file it would write already exists and differs, shadcn asks before overwriting, and in a non-interactive shell it waits forever. Answer per file: `yes n | pnpm dlx shadcn@4.18.0 add ...` keeps local edits, `--overwrite` takes raptrx-ui's version. Diff before you overwrite: local edits in `src/raptrx-ui/` are the app's own.
- Prefer fixing a kit bug in the raptrx-ui repo (`registry/raptrx/`) so every app gets it, over patching one app's copy.

## Theming

The brand layer is `src/raptrx-ui/theme/raptrx.css`. It sets tokens only, in the kit's `siteplane` cascade layer, so utilities in `className` still win.

- Accent: `--raptrx-accent` `#4132C8`, `--raptrx-accent-hover` `#34279E`, `--raptrx-accent-light` `#7B6FF0`. The kit reads them through `--sp-rw-bg-accent`, `--sp-rw-fg-accent`, `--sp-rw-border-focus` and friends. Charts and progress follow the accent by themselves.
- #4132C8 is the only accent, the one colour in the raptrx logo. In dark mode the fill stays #4132C8, accent text is #9B91F5 and focus is #7B6FF0. Never hard-code another green, blue or purple as an accent; reach for the tokens or these utilities: `bg-brand`, `bg-brand-hover`, `text-brand-text` (accent text that stays readable in dark), `bg-brand-subtle`, `border-brand-light`, `font-heading`.
- Type: IBM Plex Sans for headings and the kit's card/dialog/sheet/drawer titles, Inter for body (SF Pro as fallback), Geist Mono for code (`font-mono`). To make another element a heading, add `data-raptrx-heading` or `font-heading`.
- To change a color, set the `--sp-rw-*` role token in both scopes, light first: `:root, :is(.light, [data-theme="light"]) { ... }` then `:is(.dark, [data-theme="dark"]) { ... }`. Component CSS stays as shipped.
- Never call a brand color `--accent`: the kit already uses that name for its hover gray.
- Dark mode is `data-theme="dark"` (or `.dark`) at the app root, and the same value passed to `SiteplaneUIProvider` so portals match. `AppTheme` does both. The kit never follows the OS by itself.
- A light area inside a dark page does not work: the kit's role tokens reset only for dark scopes. Theme whole pages, or nest dark inside light.
- Size, density and radius for a subtree: `<SiteplaneUIProvider controlSize="lg" density="compact" radius="md">`.

## Which component

Pick by the job, then check the live example.

- **A focused task over the page:** Dialog. A destructive or irreversible yes/no: Alert Dialog. A long side form that keeps the page in view: Sheet. Details of one record from a list: Detail Drawer. Mobile-first bottom panel with snap points: Drawer. A small anchored panel (filters, a quick edit): Popover. A hover hint: Tooltip; a hover preview of a link: Preview Card.
- **Choosing a value:** a few options visible at once: Radio Group (one) or Checkbox Group (many). A known list, closed by default: Select. A long known list people search: Combobox. Free text with suggestions: Autocomplete. An always-open list: List Box. Tags people add and remove: Tag Group.
- **On/off:** a setting that applies at once: Switch. A form answer submitted later: Checkbox. A pressed state in a toolbar: Toggle; a set of them: Toggle Group.
- **Actions:** Button for anything people trigger, with `render={<a href />}` when it navigates. A list of actions behind a button: Menu or Dropdown Menu. Right-click actions: Context Menu. Search-and-run: Command. Copy a value: Copy Button.
- **Navigation:** sections of one view: Tabs. Site or app sections: Navigation Menu, or Sidebar inside Dashboard Shell for apps. Where am I: Breadcrumb. Pages of results: Pagination. Multi-step flows: Stepper.
- **Data:** rows people sort, select and act on: Table. Rows people only read (reports, markdown): Native Table. One record's label/value pairs: Data List. A list of things that link somewhere: Resource List. Settings rows with controls: Settings List. Ranked values: Bar List. Trends: Line, Area, Bar, Pie Chart and Sparkline.
- **Feedback:** inline message tied to content: Alert. A passing confirmation: Toast. Work of known length: Progress; a level within a range: Meter; unknown length: Spinner; content still loading: Skeleton. Nothing to show yet: Empty State.
- **Disclosure:** several sections that open and close: Accordion; one: Collapsible.
- **Chat and AI:** Message Scroller holds the thread, Message and Bubble the turns, Marker the status lines, Trace the agent's steps, Prompt Input the composer, Attachment the files, Typeset the rendered answer.
- **Motion:** Motion for items that enter, leave, reorder or swap, and numbers that change. Components that animate themselves (Dialog, Collapsible, Toast) need no extra motion.
- **raptrx's own:** Wordmark (logo placeholder; keep its props when the SVG lands), Pricing Table, Founder Card, App Theme.

`references/catalog.md` lists every item with its install name.

## Composition gotchas

- Examples and most components are Client Components. Keep handlers and state inside the client boundary; never pass a function from a Server Component into a control.
- An object exported from a `"use client"` module (such as `typesetComponents`) is only a reference on the server. A server-side MDX renderer cannot read its keys, so build the map on the server from the individual parts.
- Do not put `data-slot` on a kit component: the kit derives its own class from it, and the component loses its styles. Use your own `data-*` attribute.
- `Button width="full"` does not shrink in a flex row; two side by side can overflow on small screens.
- TypeScript older than 5.9 fails on the kit's `Intl` types.
- Set fonts through the tokens, not a class on `<body>`; buttons and titles read the tokens.

## Moving off Siteplane direct

In the raptrx-ui repo: `pnpm migrate /path/to/app --dry-run`, check the list, then run it without `--dry-run`. It switches the registry in `components.json`, moves `src/siteplane/` to `src/raptrx-ui/` (the app's own edits move with it), rewrites `@/siteplane/` imports, points the global CSS at the raptrx theme, adds the font imports and packages, and keeps `@siteplane-pro` if present. It leaves the app's own Tailwind aliases alone. Then install packages, add the env vars, ignore `src/raptrx-ui/**` in eslint, replace the `siteplane-ui` skill with this one, wrap the app in `AppTheme` if it has no theme controller yet, build, and check light and dark in a browser.

## Working on raptrx-ui itself

- `registry/siteplane/` is the untouched upstream snapshot; never edit it.
- `registry/raptrx/` is ours and is what apps install. Edit kit files here when every app should get the change. Own components go in `registry/raptrx/components/<name>/` with an entry in `registry/raptrx/raptrx.json`, and an example in `registry/raptrx/examples/`.
- `pnpm sync:siteplane` pulls a new Siteplane release and 3-way merges it into our layer. On conflicts nothing in `registry/` changes: fix the markers in `.sync/incoming/merged/` and run `pnpm sync:siteplane --continue`. It prints what upstream changed.
- `pnpm registry:build` writes the registry, the showcase index and this skill's catalog. `pnpm dev` serves the docs and the registry.

## License

raptrx-ui is built on Siteplane UI by Lukas van Uden. Keep `LICENSE.siteplane-ui` in every app and in the repo. Never sell raptrx-ui or any UI kit, template or boilerplate built on it, and do not use the Siteplane name or logo as branding; "built on Siteplane UI" credit is fine. Siteplane UI Pro patterns are not part of raptrx-ui.
