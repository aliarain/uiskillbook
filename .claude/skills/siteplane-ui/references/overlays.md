# Overlays

- `Tooltip` is non-essential hover/focus help; never put required instructions inside it.
- `Popover` is a contextual anchored helper or small form.
- `Menu` owns a triggered action list; `ContextMenu` owns contextual pointer/keyboard actions.
- `Dialog` owns a focused modal task; `AlertDialog` owns a destructive confirmation.
- `Sheet` is a side form; `Drawer` is an edge panel suited to details and mobile composition.
- Use the installed trigger, portal, positioner, popup, title, description, close, and backdrop parts instead of rebuilding focus or dismissal. The popup parts end in `Popup`, such as `DialogPopup`, `SheetPopup`, `DetailDrawerPopup`, `PopoverPopup` and `MenuPopup`; shadcn's `*Content` names are aliases of the same parts. `DetailDrawerContent` is the deprecated earlier name of `DetailDrawerPopup`.
- `DialogPopup` and `AlertDialogPopup` are 440 px wide by default (`size="sm"`). Set `size` to `xs` (400 px), `md` (600 px) or `lg` (880 px) for a different width instead of a `max-w-*` class. Below 640 px both open at full width from the bottom of the screen.
- In Menu, Dropdown Menu, Context Menu and Drawer Menu, checkbox and radio items show their indicator in the leading slot. For identity rows that lead with a logo or an avatar, such as a workspace switcher, use radio items with `indicatorPosition="end"`, which puts the check at the end of the row.
- `TooltipProvider` gives nearby tooltips the kit's shared hover delays; mount it once at the application root. Charts open their own tooltips and need none. Mount `ToastProvider` once when using `toastManager`.
- Keep accessible titles/descriptions, focus return, Escape handling, outside-interaction rules, and reduced-motion behavior intact.

## Correct: compose the existing trigger and accessible title

```tsx
import { Button } from "@/siteplane/components/button";
import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/siteplane/components/dialog";

<Dialog>
  <DialogTrigger render={<Button />}>Edit profile</DialogTrigger>
  <DialogPopup>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Update your public information.</DialogDescription>
    </DialogHeader>
  </DialogPopup>
</Dialog>;
```

Incorrect: nesting a Button in a trigger that already renders a button, or substituting a Radix `asChild` recipe without checking the installed API. Do not build a fixed-position div to replace modal focus, dismissal or scroll locking.

Read the selected overlay's complete example before adding controlled state or nested overlays: [Dialog](https://ui.siteplane.io/docs-markdown/components/dialog.md), [Sheet](https://ui.siteplane.io/docs-markdown/components/sheet.md), [Drawer](https://ui.siteplane.io/docs-markdown/components/drawer.md).
