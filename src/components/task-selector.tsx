import { FilterChip } from "./filter-chip";
import { TASKS } from "@/lib/taxonomy";

export function TaskSelector() {
  return (
    <div className="flex flex-wrap gap-2">
      {TASKS.map((task) => (
        <FilterChip key={task.slug} href={`/skills?task=${task.slug}`} active={false}>
          {task.label}
        </FilterChip>
      ))}
    </div>
  );
}
