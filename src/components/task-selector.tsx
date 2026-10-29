import Link from "next/link";
import { TASKS } from "@/lib/taxonomy";

export function TaskSelector() {
  return (
    <div className="flex flex-wrap gap-2">
      {TASKS.map((task) => (
        <Link
          key={task.slug}
          href={`/skills?task=${task.slug}`}
          className="pill"
        >
          {task.label}
        </Link>
      ))}
    </div>
  );
}
