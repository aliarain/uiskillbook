import { SimpleIcon } from "../simple-icon";

const AGENT_ICONS = [
  { slug: "claude", label: "Claude Code" },
  { slug: "cursor", label: "Cursor" },
  { slug: "githubcopilot", label: "GitHub Copilot" },
  { slug: "windsurf", label: "Windsurf" },
  { slug: "zedindustries", label: "Zed" },
  { slug: "googlegemini", label: "Gemini" },
];

/** Row of agent marks that read the MCP server. Simple Icons, CC0. */
export function AgentLogos() {
  return (
    <ul className="flex items-center gap-3 text-ink-4" aria-label="Works with these agents">
      {AGENT_ICONS.map((a) => (
        <li key={a.slug} title={a.label}>
          <SimpleIcon slug={a.slug} className="size-5" />
          <span className="sr-only">{a.label}</span>
        </li>
      ))}
    </ul>
  );
}
