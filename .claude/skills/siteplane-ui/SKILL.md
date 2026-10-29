---
name: siteplane-ui
description: Builds and changes UI with Siteplane UI, a React component kit that installs as editable source, including Siteplane UI Pro patterns. Provides the project context, the kit's component APIs and the rules for composing pages, layouts, forms, tables, dialogs, navigation, charts and styling. Use when working on UI in a project that uses Siteplane UI, such as components under src/siteplane or @siteplane in components.json, also when only composing components that are already installed, or when the user asks for Siteplane UI.
metadata:
  version: "1.7.0"
---

# Siteplane UI

Siteplane UI installs editable React source through a shadcn-compatible registry. Use the project's package runner; commands below use pnpm. With npm, substitute `npx shadcn@4.18.0`.

## Current project context

Before selecting APIs, run this from the target application:

```bash
pnpm dlx shadcn@4.18.0 info --json
```

Read `components.json`, the actual global stylesheet, installed Siteplane UI source and root providers. Use the returned framework. Siteplane UI installs to fixed targets under `src/siteplane`, whatever `aliases.ui` says. Import its components from `@/siteplane/components/<name>`, such as `@/siteplane/components/button`, and its shared modules from `@/siteplane/system/...`. Files in `@/components/ui` come from shadcn or the application, not from Siteplane UI; never import Siteplane UI parts from there. `info` can report the kit's `src/siteplane/system/styles/base.css` as the Tailwind stylesheet; application styles still belong in the global CSS that imports it (`tailwind.css` in `components.json`), never in kit files. The CLI's shadcn `base`/`style` fields do not describe Siteplane UI's mixed Base UI and React Aria component contracts. If source is already installed without registry configuration, inspect it directly; configure installation only when needed.

For a fresh project, follow the exact [Next.js or Vite installation guide](https://ui.siteplane.io/docs-markdown/installation.md). The public namespace is:

```json
{
  "registries": { "@siteplane": "https://ui.siteplane.io/registry/{name}.json" }
}
```

## Principles

1. **Use existing components first.** Search the catalog before you write UI of your own, also for a single button or icon action.
2. **Compose, don't reinvent.** Build the interface from the kit's parts and keep the behavior they own. Never rebuild a part from raw markup, from a lucide icon with state of your own, or from another library.
3. **Follow the installed API.** Installed source is the application API authority: registry compatibility does not mean shadcn's API. Read the source and the component's docs, and never invent imports or copy another kit's props.
4. **Use built-in variants and semantic tokens.** Change a part's look through its props, variants and tokens, never through raw colors or arbitrary values.
5. **Keep it accessible and check it.** Preserve labels, keyboard operation, focus and validation, run the application's checks, and look at the result in a real browser.

## Workflow

1. Search the catalog before you build, also for a single button or icon action. Search for the action's verb as well as for the component:

   ```bash
   pnpm dlx shadcn@4.18.0 search @siteplane -q "date" --json
   pnpm dlx shadcn@4.18.0 search @siteplane -q "copy" --json
   ```

2. Read the selected item and its complete example:

   ```bash
   pnpm dlx shadcn@4.18.0 view @siteplane/select @siteplane/select-demo
   ```

   Follow the item's `docs` link for props, composition, limitations and installation. Use [llms.txt](https://ui.siteplane.io/llms.txt) for targeted Markdown retrieval. `shadcn docs` retrieves shadcn documentation, not Siteplane UI APIs. Default examples use `<component>-demo`; named examples use `<component>-<id>-example`.

3. Read already installed files before modifying the application. Install only missing items:

   ```bash
   pnpm dlx shadcn@4.18.0 add @siteplane/select
   ```

   Dependencies are resolved by the registry. Complete the one-time stylesheet and provider setup from the installation guide. Mount shared providers once; add component-specific providers only when required.

4. Compose the feature using documented parts, variants and tokens. Keep application state, data, authorization, routing and persistence in product code. Use client boundaries where the framework requires them.
5. Run the affected application check and inspect substantial UI changes in a real browser. Preserve keyboard operation, accessible labels, validation and narrow layouts.

The same discovery is available through the shadcn MCP server. Read [CLI and MCP](references/cli-mcp.md) for tool arguments and source-update commands.

## Critical rules

These rules always apply.

- **Every interactive control comes from the kit.** Before you add a button, a toggle or an icon action, search the catalog for its verb, such as `copy`, `reveal`, `close` or `confirm`, with `pnpm dlx shadcn@4.18.0 search @siteplane -q "copy" --json`, and use the part it finds: a copy action is `CopyButton` from `@siteplane/copy-button`. Lucide icons are only static glyphs inside kit parts, such as the icon of a `MenuItem` or of a Button whose action is your own. Never build a stateful action, such as a copy icon that turns into a check, from a lucide icon and state of your own. [Component selection](references/component-selection.md) lists the part that owns each small action.
- **Button has `loading`.** Use its implemented pending behavior; do not invent `isLoading` or `isPending` props.
- **Forms own field semantics.** Use `Form`, `Field`, `FieldLabel` and `FieldError`; `Field` is installed through `@siteplane/input`. See [forms](references/forms.md).
- **Triggers follow their actual owner.** Siteplane UI Dialog uses `render={<Button />}`. Preserve titles and focus management. See [overlays](references/overlays.md).
- **Collections need stable identifiers.** Table follows React Aria collection semantics, including column IDs and selection keys. See [collections](references/collections.md).
- **Use variants and semantic tokens.** Compose layout through `className`; preserve primitive behavior and styling contracts. See [conventions](references/conventions.md).
- **Sizes are `sm`, `md`, `lg` and `xl`.** Controls are 28, 32, 36 and 48 px high. `lg` is the default, so omit `size` unless the design needs another step. Button also has `xs` (24 px), and an icon-only Button takes the matching square size, from `icon-xs` to `icon-xl`, such as `icon-md`. The provider's `radius` (`none`, `sm`, `md`, `lg` or `xl`; `md` by default) sets the corners of every component. The names `size="default"`, `size="icon"` and `radius="default"` from shadcn and earlier Siteplane UI releases do not exist; write `md`, `icon-md` and the provider radius `md`.
- **Use the kit's part and prop names.** Overlay popup parts end in `Popup`: `DialogPopup`, `AlertDialogPopup`, `SheetPopup`, `DrawerPopup`, `DetailDrawerPopup`, `PopoverPopup`, `TooltipPopup`, `SelectPopup` and `MenuPopup`. shadcn's names, such as `DialogContent`, are aliases of the same parts, and `dropdown-menu` keeps shadcn's names throughout. `DetailDrawerContent` is the deprecated earlier name of `DetailDrawerPopup`. A value changes through `value`, `defaultValue` and `onValueChange`, an overlay through `open` and `onOpenChange`, and a toggle, the theme toggles included, through `pressed` and `onPressedChange`.
- **Mark the current item with `active`.** SidebarMenuButton, PaginationLink, NavigationMenuLink and the Stepper's button items take `active`; Header Navigation takes `current` on a link item. In navigation it sets `aria-current="page"` and draws the kit's current fill, so don't style a current link yourself.
- **Use the color vocabulary.** Status colors are `info`, `success`, `warning` and `error`, and the brand color is `accent`. Where color is the whole variation, a component takes them as `tone`, with `neutral` for gray: Timeline, Meter, Tooltip, Notification and the Resource List indicator. Alert and Badge take them as `variant`, which also sets the surface. Earlier names such as `brand`, `gray`, `muted`, the `default` and `destructive` tones and `isActive` still work as deprecated aliases until 2.0; don't write them in new code. Button and Badge keep `variant="destructive"`.
- **The application owns dark mode.** The kit stays light until the application sets `.dark` or `data-theme="dark"`, for example on `<html>` through its theme controller; it does not follow the operating system on its own. Pass the same value to `SiteplaneUIProvider` as `data-theme`, so dialogs and menus in portals follow. See [theming](https://ui.siteplane.io/docs-markdown/customization/theming.md).
- **Keep the hairline edges.** Kit edges are `--sp-rw-border-default` wide, one physical pixel on Retina screens. Prefer parts that draw their own edges, such as Card, Frame, Separator and Table. For a custom edge, use `border-(length:--sp-rw-border-default) border-(--sp-rw-border-translucent)` instead of a bare `border` or `border-border`, which draw two physical pixels there. See [conventions](references/conventions.md).
- **Use current boundaries.** Table owns sorting and selection; there are no separate DataTable or SortableDataTable imports. There is no ConfirmDialog or ValidatedForm component: compose AlertDialog for a confirmation and Form with Field for validation, as the `@siteplane/alert-dialog-delete-account-example` and `@siteplane/form-server-validation-example` examples do.

## Component selection

- [Component selection](references/component-selection.md): choose by behavior, including Select versus Combobox, Sheet versus DetailDrawer, the application frame, the part that owns a small action such as copy, reveal or close, and how a chat or an AI assistant is composed and maps to the AI SDK.
- [Catalog](references/component-catalog.md): public discovery, import ownership and availability.

Load only references relevant to the task. Prefer a targeted page or example over the full documentation dump.

## Siteplane UI Pro

Patterns, sections and templates come with Siteplane UI Pro and install from the protected `@siteplane-pro` registry. A project needs the license key as `SITEPLANE_LICENSE_KEY` in `.env.local` and the `@siteplane-pro` entry in `components.json`; the Siteplane UI Pro section of the [installation guide](https://ui.siteplane.io/docs-markdown/installation.md) shows both. Never print, log or commit the key.

A Pattern installs under the slug of its docs page, such as `@siteplane-pro/metric-card`. Each example on a Pattern page installs as its own item: `@siteplane-pro/<pattern>-demo` for the example at the top of the page and `@siteplane-pro/<pattern>-<id>-example` for the others. The [Patterns overview](https://ui.siteplane.io/docs-markdown/patterns.md) lists the Patterns, and each Pattern page lists its examples with their install commands. With the key set, search, view and add work as for `@siteplane`:

```bash
pnpm dlx shadcn@4.18.0 search @siteplane-pro -q "metric" --json
pnpm dlx shadcn@4.18.0 view @siteplane-pro/metric-card @siteplane-pro/metric-card-demo
pnpm dlx shadcn@4.18.0 add @siteplane-pro/metric-card
```

Install from `@siteplane-pro` only in a project that has the key and the registry entry. Without them, compose the free components. A `401` from the registry means the key is missing or not valid.

## Customization and updates

Installed files belong to the application. Use documented props and tokens first; edit primitive source when the requested customization requires it. Inspect incoming diffs before updating and preserve local customizations. Reconcile them according to the user's instruction; do not silently overwrite them. Keep the license and trademark notices installed with the base item. Keep `@base-ui/react` at the exact version the registry installed, and upgrade it only with a Siteplane UI update: Field and the date, time and color controls use internal Base UI modules.

This skill is written for Siteplane UI 1.x, and `metadata.version` names the release it came with. Update it whenever you update the components, with `pnpm dlx skills@1.5.25 update siteplane-ui -p` or the install command on the [Skill page](https://ui.siteplane.io/docs-markdown/agents/skills.md).

## Out of scope

Maintaining the Siteplane UI repository itself: its components, docs and registry.
