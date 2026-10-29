/** Renders a plain string, turning `backtick` spans into <code>. */
export function InlineCode({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`)/).map((part, i) =>
        part.startsWith("`") && part.endsWith("`") ? (
          <code
            key={i}
            className="rounded-input border border-border bg-surface px-1 py-px font-mono text-[0.85em] text-primary"
          >
            {part.slice(1, -1)}
          </code>
        ) : (
          part
        )
      )}
    </>
  );
}
