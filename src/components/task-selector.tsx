import Link from "next/link";
import { TASKS } from "@/lib/taxonomy";

export function TaskSelector() {
  return (
    <div className="flex flex-wrap gap-2">
      {TASKS.map((task) => (
        <Link
          key={task.slug}
          href={`/skills?task=${task.slug}`}
          className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-secondary transition-colors hover:border-accent/30 hover:bg-accent-subtle hover:text-accent"
        >
          {task.label}
        </Link>
      ))}
    </div>
  );
}
