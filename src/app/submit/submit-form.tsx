"use client";

import { useState } from "react";
import { Button } from "@/siteplane/components/button";
import { Field, FieldDescription, FieldLabel } from "@/siteplane/components/field";
import { Form } from "@/siteplane/components/form";
import { Input } from "@/siteplane/components/input";
import { Textarea } from "@/siteplane/components/textarea";
import { toastManager } from "@/siteplane/components/toast";

const REPO = "aliarain/uiskillbook";

export function SubmitForm() {
  const [repo, setRepo] = useState("");
  const [path, setPath] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const issueUrl = `https://github.com/${REPO}/issues/new?${new URLSearchParams({
    template: "skill-submission.yml",
    title: `Skill: ${path || repo || "untitled"}`,
    repo,
    path,
    author,
    description,
  }).toString()}`;

  return (
    <Form
      className="mt-8 flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(issueUrl, "_blank", "noreferrer");
        toastManager.add({
          title: "Issue opened in a new tab",
          description: "Check the details on GitHub, then submit the issue there.",
        });
      }}
    >
      <Field name="repo">
        <FieldLabel>GitHub repository URL</FieldLabel>
        <Input required type="url" value={repo} onChange={(e) => setRepo(e.target.value)} placeholder="https://github.com/user/repo" />
      </Field>

      <Field name="path">
        <FieldLabel>Skill path</FieldLabel>
        <Input required type="text" value={path} onChange={(e) => setPath(e.target.value)} placeholder="skills/optical-alignment/SKILL.md" />
        <FieldDescription>The path to the SKILL.md inside the repository.</FieldDescription>
      </Field>

      <Field name="author">
        <FieldLabel>Author</FieldLabel>
        <Input required type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Your name or handle" />
      </Field>

      <Field name="description">
        <FieldLabel>Description</FieldLabel>
        <Textarea
          required
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What does this skill teach an agent to do?"
        />
      </Field>

      <Button type="submit" variant="inverse" className="self-start">
        Open a GitHub issue
      </Button>
      <p className="text-xs text-muted-foreground">
        Opens a pre-filled issue in{" "}
        <a href={`https://github.com/${REPO}`} target="_blank" rel="noreferrer" className="underline">
          {REPO}
        </a>
        . We review every submission against the curation criteria above before it&apos;s added.
      </p>
    </Form>
  );
}
