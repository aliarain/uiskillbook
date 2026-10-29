# Component selection

Choose by behavior, not visual resemblance.

| Product need                                | Choose                                                             |
| ------------------------------------------- | ------------------------------------------------------------------ |
| Small known choice set                      | `Select`                                                           |
| Search a larger local set                   | `Combobox`                                                         |
| Suggestions while typing                    | `Autocomplete`                                                     |
| Keyboard-first command palette              | `Command`                                                          |
| Triggered action list                       | `Menu`, or `DropdownMenu` for the same parts under shadcn's names  |
| Right-click or long-press actions           | `ContextMenu`                                                      |
| Short modal task                            | `Dialog`                                                           |
| Destructive confirmation                    | `AlertDialog`                                                      |
| Side form                                   | `Sheet`                                                            |
| Read-mostly row detail or mobile edge panel | `Drawer` or `DetailDrawer`                                         |
| Persistent application navigation           | `Sidebar` inside `DashboardShell`                                  |
| Boolean form value                          | `Checkbox`                                                         |
| Immediate boolean setting                   | `Switch`                                                           |
| Options presented as cards                  | `RadioGroup` or `CheckboxGroup` with a bordered `Label` per option |
| Change over time or an ordered set          | `LineChart`, or `AreaChart` when the volume matters                |
| Compare values across categories            | `BarChart`                                                         |
| Shares of one total                         | `PieChart`                                                         |
| Short ranked list of labeled values         | `BarList`                                                          |
| Small trend beside a figure                 | `Sparkline`                                                        |
| Exact values to sort or select              | `Table`                                                            |
| Static table, also in rendered markdown     | `NativeTable`; `Table` for selection, sorting and arrow keys       |
| Several people in little space              | `AvatarGroup`, with `AvatarGroupCount` for the people not shown    |
| Conversation or AI assistant                | `MessageScroller` with `Message`, `Bubble` and `PromptInput`       |
| Steps an agent took, such as tool calls     | `Trace`                                                            |
| Rendered markdown, such as a chat reply     | `Typeset` with `typesetComponents`                                 |

There is no ConfirmDialog or ValidatedForm. For a confirmation, compose `AlertDialog`; the `@siteplane/alert-dialog-delete-account-example` example keeps the dialog open with a loading action while the request runs. For server validation, compose `Form` and `Field`; the `@siteplane/form-server-validation-example` example passes the errors the server returns, keyed by field name, to `Form`'s `errors`, and `FieldError` shows them. Keep the request and its pending and error state in application code.

Calendar/date/time controls, color controls, ListBox, TagGroup and Table are active. Use Table for current tabular sorting and selection; DataTable and SortableDataTable are not current exports. Use installed source instead of historical preview metadata.

If no active component fits, compose a product-owned boundary outside installed primitive files or report the missing capability. Do not disguise a raw visible control as Siteplane UI.

## Small actions

A button or an icon action has a kit owner too. Search for its verb before you add one, and never rebuild it from a lucide icon and state of your own.

| Small action                                         | Choose                                                                                                                                                |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Copy a value, such as a URL, an ID or an invite link | `CopyButton` from `copy-button`: the icon alone beside the value, or with a label such as Copy link                                                   |
| Copy from a read-only field                          | `CopyButton` with `profile="field-action"` in an `InputGroupAddon`                                                                                    |
| Show code that people copy                           | `CodeBlock` with `copyable`, from `code`                                                                                                              |
| Reveal a stored secret, such as an API key           | `CodeBlock` with `mask`, and `copyable` to copy it                                                                                                    |
| Show or hide a password while typing                 | `InputGroup` with a `field-action` Button and `RevealIcon`, as the `@siteplane/input-group-password-toggle-example` example does                      |
| Close an overlay                                     | Its close part: `DialogClose`, `AlertDialogClose`, `SheetClose`, `DrawerClose` or `PopoverClose`, or the popup's own close button (`showCloseButton`) |
| Confirm a destructive action                         | `AlertDialog`                                                                                                                                         |
| A menu entry that copies                             | `MenuItem` with the lucide `Copy` icon as its glyph; copy in its `onClick` with `useCopyToClipboard` from `copy-button`                               |
| Send a chat message, or stop the running reply       | `PromptInputSubmit` in a `PromptInput`: Send turns into Stop while a reply runs, and Enter never sends during an IME composition                      |
| Scroll a thread back to the latest message           | `MessageScrollerButton` in a `MessageScroller`                                                                                                        |
| Attach files to a chat message                       | `PromptInputAttachButton` in a `PromptInput`; `AttachmentAction` removes or retries one file                                                          |

## Application frame

- `DashboardShell` composes the responsive frame around `Sidebar`, a header and the main scroll region. It owns `SidebarProvider` and supports LTR layout; the navigation content comes from the application.
- `SidebarProvider` and `DashboardShell` write the desktop open state to the `sidebar_state` cookie and never read it back; pass `defaultOpen` from the server. `stateCookie` renames the cookie, and `stateCookie={false}` writes none.
- `FilterBar` belongs above data that can be searched or filtered.
- `SettingsList` owns repeated labeled settings; a single `Switch` serves one isolated setting.

## Chat and AI

The chat parts show a conversation; the application owns the messages, the transport and the model. Their props use the AI SDK's words, so the state of `useChat` from `@ai-sdk/react` passes straight in, and the kit installs no `ai` package. The parts own what a chat needs, so never rebuild it: Enter to send with the IME guard, Stop, following a streaming reply, the button back to the latest message, the shimmer of running work and the screen reader announcements.

- **Thread:** `MessageScroller` fills a container that has a height. Its `MessageScrollerContent` holds one `MessageScrollerItem` per row, each with a stable `messageId`, and every user turn takes `scrollAnchor`. Set `busy` on the content while a reply is submitted or streaming, so a screen reader hears the finished reply once, and `autoScroll` on the scroller to follow a streaming reply while the reader stays at the end. `MessageScrollerButton` comes after the content, and the `PromptInput` sits below the scroller.
- **Turns:** a `Message` holds a `MessageContent` with the turn's content and, last, a `MessageFooter` for its actions. The person's turn is `align="end"`, with a muted `Bubble align="end"`. The assistant's turn has a `Bubble variant="ghost"`, which has no frame and takes the full width. Neither turn has an avatar, since the layout already shows who is speaking, so an AI chat uses no `MessageAvatar`. Avatars are for chats between people, such as a support inbox or a team chat, where a `MessageAvatar` holds an `Avatar`. A reply with steps adds the class `[--sp-message-gap:var(--sp-rw-space-4)]` to its Message, which puts 16 px between its blocks.
- **Status lines:** a `Marker` with `role="status"` shows Thinking, with a `Spinner` in `MarkerIcon` and the word in `MotionShimmer`. A plain Marker is a note, and `variant="separator"` a labeled divider such as a date.
- **Steps:** a `Trace` holds one `TraceLine` per step, with `TraceIcon`, `TraceTitle` and `TraceDescription`. `status="running"` shimmers a title in the present tense, and `status="error"` goes with a title that says what failed. `TraceCollapsible`, `TraceCollapsibleTrigger` and `TraceCollapsibleContent` open a step to its details, such as a `CodeBlock` with a tool's result, and `TraceLink` is a step that links out, such as a source. Event history is a `Timeline` and the steps a person moves through are a `Stepper`.
- **Replies:** render the reply in a `Typeset` and pass `typesetComponents` to the `components` prop of the application's markdown renderer, such as react-markdown or Streamdown. Inline code becomes `Code`, a fence a `CodeBlock` in its language, and a table takes the kit's table look. The kit ships no markdown renderer, and a `CodeBlock` highlights only with `code-highlight` imported once.
- **Composer:** a `PromptInput` takes `status`, `onSubmit` and `onStop`, around a `PromptInputTextarea` and a `PromptInputToolbar` with two `PromptInputToolbarGroup`s. The first holds `PromptInputAttachButton`; the second, with `align="end"`, holds a model `Menu` with a ghost Button trigger and a `MenuRadioGroup`, then `PromptInputSubmit`. Picked files go into an `AttachmentGroup` in `PromptInputAttachments`, one `Attachment` with its `state` per file, and `allowEmpty` sends files without text. A one-line disclaimer sits centered under the composer.
- **Around the thread:** suggestions are outline pill Buttons (`variant="outline"`, `shape="pill"`, `size="sm"`) that wrap, in the composer's column, 16 px above it. An empty thread shows `Empty` from `empty-state`, with a short title and description, centered in the thread area. The actions of a reply stay visible: `CopyButton`, and Good, Bad and Retry as Buttons in the same muted inline look (`profile="inline"`, `profileTone="muted"`, `variant="text"`, `size="icon-xs"`), each with an `aria-label` and a `Tooltip`, Good and Bad with `aria-pressed`. A failed turn is a `Bubble variant="destructive"` that says what failed, with a Try again Button and no feedback actions.
- **Approval:** a tool that waits for approval shows an `Alert` in the turn, with an icon, `AlertTitle` and `AlertDescription`. The buttons are the last row of the description and start where its text starts: Approve (`variant="accent"`) first, then Deny (`variant="outline"`), both `size="sm"`. It is not an `AlertDialog`, because the question belongs to the conversation.
- **History:** past chats are a `Sidebar` with a `SidebarGroupLabel` per period, such as Today and Previous 7 days. Each row's `SidebarMenuAction` with `showOnHover` opens a Menu below the row at its end (`align="end"`), with icons and `MenuShortcut` keys, for actions such as Share, Rename and a destructive Delete.

| AI SDK                                              | Siteplane UI                                                                                                                                        |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status` of `useChat`                               | `PromptInput` `status`; while `submitted` or `streaming`, Send turns into Stop, and `onStop` calls `stop()`                                         |
| `submitted`                                         | A Thinking `Marker` as the pending turn                                                                                                             |
| `error`                                             | A destructive Bubble with Try again, which calls `regenerate()`                                                                                     |
| `text` part                                         | A `Typeset` in the assistant's ghost Bubble                                                                                                         |
| `reasoning` part                                    | A `TraceCollapsible`, open with Thinking while it streams, then closed with Thought and its duration; `open ?? running` lets the reader's click win |
| `tool-*` part: `input-streaming`, `input-available` | A `TraceLine` with `status="running"`                                                                                                               |
| `approval-requested`                                | The approval Alert; its buttons call `addToolApprovalResponse`                                                                                      |
| `approval-responded`                                | The step runs once approved, or reads "Denied …"                                                                                                    |
| `output-available`, `output-error`, `output-denied` | The step is done ("Ran …"), has `status="error"` ("Failed to …"), or reads "Denied …"; details go in a `CodeBlock`                                  |
| `source-url`, `source-document` parts               | "Used N sources", a `TraceCollapsible` of `TraceLink`s                                                                                              |
| `file` part                                         | An `Attachment`: the picture in `AttachmentMedia variant="image"` for `image/*`, otherwise a `FileTypeIcon` in `AttachmentMedia`                    |

The pages of the parts, such as [Message Scroller](https://ui.siteplane.io/docs-markdown/components/message-scroller.md) and [Prompt Input](https://ui.siteplane.io/docs-markdown/components/prompt-input.md), have complete examples and show the AI SDK mapping in code.
