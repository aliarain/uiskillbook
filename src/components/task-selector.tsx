import Link from "next/link";
import { TASKS } from "@/lib/taxonomy";
import { Button } from "@/siteplane/components/button";

export function TaskSelector() {
  return (
    <div className="flex flex-wrap gap-2">
      {TASKS.map((task) => (
        <Button key={task.slug} variant="outline" shape="pill" size="md" render={<Link href={`/skills?task=${task.slug}`} />}>
          {task.label}
        </Button>
      ))}
    </div>
  );
}
