# CLI and MCP

Run commands inside the target application with its package runner. Siteplane UI uses shadcn 4.18.0; consult `--help` before using an unfamiliar flag.

| Need                     | Command                                                            |
| ------------------------ | ------------------------------------------------------------------ |
| Project context          | `pnpm dlx shadcn@4.18.0 info --json`                               |
| Search                   | `pnpm dlx shadcn@4.18.0 search @siteplane -q "form" --json`        |
| Source and examples      | `pnpm dlx shadcn@4.18.0 view @siteplane/form @siteplane/form-demo` |
| Install                  | `pnpm dlx shadcn@4.18.0 add @siteplane/form`                       |
| Preview changed files    | `pnpm dlx shadcn@4.18.0 add @siteplane/form --dry-run`             |
| Inspect incoming changes | `pnpm dlx shadcn@4.18.0 add @siteplane/form --diff`                |

Do not use `--overwrite` without resolving application-owned changes. A known shadcn command does not imply support for every Siteplane UI operation: `shadcn docs` uses shadcn's documentation index. Follow the selected item's `docs` URL for Siteplane UI. Presets and shadcn theme replacement are not Siteplane UI setup steps; a new project writes `components.json` itself and never runs `shadcn init`.

## Siteplane UI Pro

Patterns, sections and templates use the same commands in the `@siteplane-pro` namespace once the project has the license key and the registry entry (see the Siteplane UI Pro section of SKILL.md):

| Need                | Command                                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------- |
| Search              | `pnpm dlx shadcn@4.18.0 search @siteplane-pro -q "modal" --json`                         |
| Source and examples | `pnpm dlx shadcn@4.18.0 view @siteplane-pro/modal-block @siteplane-pro/modal-block-demo` |
| Install             | `pnpm dlx shadcn@4.18.0 add @siteplane-pro/modal-block`                                  |

The CLI reads `SITEPLANE_LICENSE_KEY` from `.env.local` (or `.env`) and sends it only to `@siteplane-pro`. In the MCP tools below, add `"@siteplane-pro"` to `registries` to search both namespaces.

## Fixed release

Every release stays frozen under its version number. For a reproducible Siteplane UI source graph, install an item from one release with the same shadcn add command. Replace `<version>` with a release from the [changelog](https://ui.siteplane.io/docs-markdown/changelog.md), which lists every release, newest first:

```bash
pnpm dlx shadcn@4.18.0 add https://ui.siteplane.io/registry/v/<version>/button.json
```

Its Siteplane UI dependencies use that fixed version too. Each release also publishes its catalog at `registry/v/<version>/registry.json` and its manifest at `registry/v/<version>/manifest.json`. The default namespace still follows the current catalog. Preserve the application's dependency lockfile and customized installed source.

## MCP tools

Follow the [MCP setup page](https://ui.siteplane.io/docs-markdown/agents/mcp.md). The existing shadcn server runs in the application directory and reads its `components.json`.

| Task                  | Tool and arguments                                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| Confirm configuration | `get_project_registries` with `{}`                                                             |
| Search                | `search_items_in_registries` with `{"registries":["@siteplane"],"query":"date"}`               |
| Inspect               | `view_items_in_registries` with `{"items":["@siteplane/select"]}`                              |
| Get full example      | `get_item_examples_from_registries` with `{"registries":["@siteplane"],"query":"select-demo"}` |
| Get install command   | `get_add_command_for_items` with `{"items":["@siteplane/select"]}`                             |

In shadcn 4.18.0, list/search results can show `Add command: [object Promise]`. Use `get_add_command_for_items` to obtain the command. That tool returns `shadcn@latest`; replace it with the documented `shadcn@4.18.0` before execution, preserving the package runner and item names.

Search output is an index, not an API contract. In shadcn 4.18.0, MCP `view_items_in_registries` returns a summary; fetch the item JSON or use CLI `view` for component source and the `docs` link. Retrieve the item, documentation and relevant example before writing code. MCP returns the install command; use the terminal to execute it. If configuration is missing, check the working directory and namespace. If an endpoint fails, inspect the error before retrying; do not infer that the component exists from its name.
