"use client";

import { Button } from "@/raptrx-ui/components/button";
import { Form } from "@/raptrx-ui/components/form";
import { Field, FieldDescription, FieldLabel } from "@/raptrx-ui/components/field";
import { Input } from "@/raptrx-ui/components/input";
import { Textarea } from "@/raptrx-ui/components/textarea";
import { toastManager } from "@/raptrx-ui/components/toast";
import { useState } from "react";

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
      className="mt-8 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(issueUrl, "_blank", "noreferrer");
        toastManager.add({
          title: "Issue opened in a new tab",
          description: "Check the details on GitHub, then submit the issue there.",
        });
      }}
    >
      <Field>
        <FieldLabel>GitHub repository URL</FieldLabel>
        <Input
          required
          type="url"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
          placeholder="https://github.com/user/repo"
        />
      </Field>

      <Field>
        <FieldLabel>Skill path</FieldLabel>
        <FieldDescription>e.g. skills/optical-alignment/SKILL.md</FieldDescription>
        <Input
          required
          type="text"
          value={path}
          onChange={(e) => setPath(e.target.value)}
          placeholder="skills/optical-alignment/SKILL.md"
        />
      </Field>

      <Field>
        <FieldLabel>Author</FieldLabel>
        <Input
          required
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name or handle"
        />
      </Field>

      <Field>
        <FieldLabel>Description</FieldLabel>
        <Textarea
          required
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What does this skill teach an agent to do?"
        />
      </Field>

      <Button type="submit">
        Open a GitHub issue
      </Button>
      <p className="text-xs text-ink-3">
        Opens a pre-filled issue in{" "}
        <a href={`https://github.com/${REPO}`} target="_blank" rel="noreferrer" className="underline">
          {REPO}
        </a>
        . We check every submission against the criteria above before we list it.
      </p>
    </Form>
  );
}
