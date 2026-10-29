/** Renders a plain string, turning `backtick` spans into <code>. */
export function InlineCode({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`)/).map((part, i) =>
        part.startsWith("`") && part.endsWith("`") ? (
          <code
            key={i}
            className="rounded-md bg-accent-subtle px-1 py-0.5 font-mono text-[0.85em] text-accent"
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
