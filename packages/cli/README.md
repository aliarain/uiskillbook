# uiskillbook

The [UI Skillbook](https://www.uiskillbook.com) catalog from the terminal: UI skills, rules and patterns for coding agents.

```bash
npx uiskillbook start                      # print the routing skill
npx uiskillbook categories                 # list categories
npx uiskillbook list --category motion     # list skills, optionally by --category or --agent
npx uiskillbook get pressed-button-feedback  # print a skill's full content
npx uiskillbook siteplane --group "Overlays & disclosure"  # UI kit components with install commands
```

It reads the live catalog from uiskillbook.com, so there is nothing to update locally. Set `UISKILLBOOK_SITE_URL` to point it at another deployment. Needs Node 18 or newer.

Agents can also connect over MCP at `https://www.uiskillbook.com/mcp`.
