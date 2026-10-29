# Component catalog

The public catalog is published at https://ui.siteplane.io/registry/registry.json and includes components, usage examples and application examples. Use https://ui.siteplane.io for current docs/registry discovery and installed source for the application API. Older preview graphs remain historical.

Inspect the selected registry item before importing. Its files expose the current compound parts and its `registryDependencies` and `dependencies` are the install graph. `Field` is delivered by the `input` registry item.

Every public component, by registry item name, in the families of the docs navigation. Check this list before building a part yourself:

- Actions: `button`, `copy-button`, `toggle`, `toggle-group`, `toolbar`.
- Forms and selection: `input` (with Field), `textarea`, `number-field`, `otp-field`, `label`, `fieldset`, `form`, `checkbox`, `checkbox-group`, `radio-group`, `switch`, `slider`, `select`, `combobox`, `autocomplete`, `list-box`, `input-group`, `group`.
- Navigation: `command`, `breadcrumb`, `navigation-menu`, `pagination`, `tabs`, `sidebar`, `dashboard-shell`.
- Overlays and disclosure: `accordion`, `collapsible`, `menu`, `dropdown-menu`, `context-menu`, `dialog`, `alert-dialog`, `drawer`, `detail-drawer`, `sheet`, `popover`, `preview-card`, `tooltip`.
- Date and color: `calendar`, `date-field`, `time-field`, `date-picker`, `date-range-picker`, `date-time-picker`, `color-picker`, `color-swatch-picker`.
- Data display: `avatar`, `avatar-group`, `badge`, `card`, `data-list`, `file-type-icon`, `tag-group`, `table`, `native-table`, `resource-list`, `filter-bar`, `settings-list`, `stepper`, `timeline`.
- Charts: `bar-chart`, `line-chart`, `area-chart`, `pie-chart`, `bar-list`, `sparkline`.
- Chat & AI: `message-scroller`, `message`, `bubble`, `marker`, `trace`, `attachment`, `prompt-input`, `typeset`.
- Feedback: `alert`, `empty-state`, `meter`, `progress`, `skeleton`, `spinner`, `toast`.
- Layout and utilities: `frame`, `separator`, `scroll-area`, `kbd`, `code`, `motion`, `truncate`.
- Animated: `animated-buttons`, `icon-morphs`, `theme-toggles`.

`base`, `locale`, `action-icons` and `chart` are support items that the components install as dependencies, and `code-highlight` is an optional one that you install yourself; none of them has a docs page of its own. `action-icons` draws the animated copy icon that turns into a check, the selection check and the reveal eye: `copy-button`, `code` and `resource-list` install it, and the password example of Input Group uses its eye. To copy a value, install `copy-button`, or `code` for a block of code, instead of composing the copy icon yourself.

`code-highlight` turns on syntax highlighting in `CodeBlock`. Install it next to `code` and import it once in client code that loads with the first page, such as the component that holds the root providers, or call its `enableCodeHighlighting()` there. A block that names a `language` then highlights once shiki has loaded; without the module, it shows plain text. The [Code](https://ui.siteplane.io/docs-markdown/components/code.md) page lists the languages.

The Chat & AI parts show a conversation; the messages, the transport and the model stay in application code. [Component selection](component-selection.md#chat-and-ai) says which part serves what, how a thread is composed and how the state of the AI SDK's `useChat` maps to the parts.

ConfirmDialog and ValidatedForm are not components. For a confirmation, compose AlertDialog, as the `alert-dialog-delete-account-example` example does; for errors that the server returns, compose Form and Field, as `form-server-validation-example` does. See [component selection](component-selection.md).

Patterns, sections and templates come with Siteplane UI Pro and install from the protected `@siteplane-pro` registry, not from this catalog; see the Siteplane UI Pro section of [the skill](../SKILL.md).

`dropdown-menu` exports the `menu` parts under shadcn's names: `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem` and the rest. Use it when the project already uses those names, for example in code that came from shadcn; otherwise use `menu`. Both render the same component with the same props.

Table is the current tabular family, including sorting and selection. Do not
import DataTable or SortableDataTable; those are no longer separate current
boundaries. SettingsList is the current repeated-settings composition, not
SettingsSwitchRows.

Use a chart when the shape of the data should read at a glance: a trend, a
comparison or the shares of a total. Use Table when readers must read, sort or
compare exact values; a chart's tooltip shows one item at a time.

SelectableCard is not part of the current catalog. For option cards, wrap each
`Radio` or `Checkbox` of a [RadioGroup](https://ui.siteplane.io/docs-markdown/components/radio-group.md)
or [CheckboxGroup](https://ui.siteplane.io/docs-markdown/components/checkbox-group.md)
in a bordered `Label`, as in their card style examples, so each option keeps
radio or checkbox semantics, keyboard behavior and its form value.
