# Collections

- `Select` is for a small known choice set; `Combobox` adds search and selection; `Autocomplete` suggests without owning selected-value semantics.
- `Command` is for keyboard-first actions, not form selection.
- `ResourceList` is the active structured-list boundary; preserve stable item keys, empty/loading states, and accessible labels.
- ListBox, TagGroup and Table are active. Table owns the current sorting/selection API; there are no separate DataTable or SortableDataTable exports.
- Preserve stable keys and supply textValue for rich options/rows.
- For a workflow that requires a capability absent from the installed source, report the missing capability or build a product-owned semantic boundary outside installed Siteplane UI source. Do not present native markup as a Siteplane UI component.

## Correct: identify columns and rows

```tsx
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/siteplane/components/table";

<Table aria-label="Projects">
  <TableHeader>
    <TableHead id="name" isRowHeader>
      Project
    </TableHead>
    <TableHead id="status">Status</TableHead>
  </TableHeader>
  <TableBody>
    <TableRow id="site-redesign" textValue="Site redesign">
      <TableCell>Site redesign</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>;
```

Incorrect: treating this Table as a plain shadcn HTML table and dropping collection IDs, or passing array indexes as persistent selection keys. Read [Table](https://ui.siteplane.io/docs-markdown/components/table.md) for sorting and selection callbacks.

For Select, use `SelectTrigger`, `SelectValue`, `SelectPopup` and `SelectItem`. Simple items do not require a group; group only when the data calls for one. Controlled selection uses `value` and `onValueChange`; read the multiple-selection example before switching to an array value. [Select examples](https://ui.siteplane.io/docs-markdown/components/select.md).

When Select IDs differ from labels, pass `items` to the root (for example, `{ value: "private", label: "Private team" }` entries), or render the label explicitly inside `SelectValue`. A preselected ID otherwise appears as raw text before the popup items mount. Keep the stored ID separate from its display label.
