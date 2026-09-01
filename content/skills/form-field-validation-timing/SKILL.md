---
name: form-field-validation-timing
title: Form Field Validation Timing
description: Validate at the right moment — not on every keystroke, not only on submit.
author:
  name: UI Skillbook
  url: https://uiskillbook.com
categories:
  - forms
  - interaction
agents:
  - claude-code
  - codex
  - cursor
  - opencode
  - universal
tasks:
  - form
tags:
  - forms
  - validation
  - errors
version: 1.0.0
updated_at: "2026-09-01"
license: MIT
curated: true
---

# Form Field Validation Timing

Validating on every keystroke punishes the user for typing normally (an email field showing "invalid" while they've typed three characters). Validating only on submit means they don't find out about a mistake until they've filled out the whole form. Neither is right on its own.

## When to use

- Any form with more than a couple of fields, especially sign-up, checkout, or settings forms.

## Principles

- The right default is **validate on blur, re-validate on change after the first error.** This means: don't show an error while the user is still typing into a field for the first time; once an error has been shown, clear it live as they fix it.
- Required-but-empty is not the same error type as invalid-format — don't show "This field is required" while the user is still in the field they haven't left yet.
- Success feedback (a green check) is optional and should never be more prominent than an error would be — it's a bonus, not the point.

## Instructions

1. On first interaction with a field, don't validate until `onBlur` (focus leaves the field).
2. Once an error is showing, switch to `onChange` validation so the error clears the instant it's fixed — don't make the user re-blur to see it resolved.
3. For async validation (username availability, coupon codes), debounce by 300–500ms and show a loading indicator in the field itself, not just a spinner elsewhere on the page.
4. On submit, validate everything and scroll to / focus the first error — don't just show a summary banner and leave the user to hunt for the field.
5. Keep error copy specific and actionable ("Password needs at least 8 characters") — never just "Invalid input."

## Examples

```text
User types into email field → no validation yet
User tabs away, field has invalid email → show error
User starts typing again → error clears as soon as input becomes valid
```

## Avoid

- Don't validate `required` fields on blur if they're simply empty and the user hasn't attempted to type anything — wait for submit for pure emptiness, but do validate format errors on blur.
- Don't disable the submit button based on client-side validation alone; let the user submit and see specific errors instead of a mysteriously inert button.

## References

- Baymard Institute research on inline form validation timing and error recovery.
