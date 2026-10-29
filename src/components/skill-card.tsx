import Link from "next/link";
import type { Skill } from "@/lib/skills";
import { categoryLabel } from "@/lib/taxonomy";
import { Badge } from "@/siteplane/components/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/siteplane/components/card";
import { AuthorBadge, StarCount } from "./skill-meta";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Card render={<Link href={`/skills/${skill.slug}`} />} className="h-full">
      <CardHeader>
        <Badge variant="outline" className="w-fit">
          {skill.siteplane?.group ?? categoryLabel(skill.categories[0])}
        </Badge>
        <CardTitle className="mt-2 text-balance">{skill.siteplane?.title ?? skill.title}</CardTitle>
        <CardDescription className="line-clamp-2">{skill.description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto justify-between gap-3">
        <AuthorBadge skill={skill} />
        <StarCount skill={skill} />
      </CardFooter>
    </Card>
  );
}
