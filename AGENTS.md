<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# UI work

The site is built on raptrx-ui, the raptrx design system (`src/raptrx-ui`, `@raptrx` registry in `components.json`). Load the raptrx-ui skill before any UI work, and read DESIGN.md. Installing or updating components needs `RAPTRX_UI_URL` and `RAPTRX_UI_TOKEN` in `.env.local`; never commit the token.

The public component catalog in `content/skills/siteplane-*` describes the upstream kit raptrx-ui is built on, and is generated: edit `content/siteplane-ui/guidance/*.json` and run `npm run generate:siteplane`.
