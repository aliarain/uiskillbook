import { Code } from "@/raptrx-ui/components/code";

/** Renders a plain string, turning `backtick` spans into the kit's inline Code. */
export function InlineCode({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`)/).map((part, i) =>
        part.startsWith("`") && part.endsWith("`") ? <Code key={i} className="text-[0.9em]">{part.slice(1, -1)}</Code> : part
      )}
    </>
  );
}
