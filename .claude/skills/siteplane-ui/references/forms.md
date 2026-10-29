# Forms

- Compose `Form` and `Field` around controls that participate in validation, submission, and reset.
- Keep label, description, control, and error inside the same Field semantic boundary.
- Use controlled state only when product logic needs it; otherwise prefer the installed component’s uncontrolled contract.
- Preserve native names, submitted values, required/disabled/read-only states, and server errors.
- Choose the specific active control by value domain: `Input`, `Textarea`, `NumberField`, `Checkbox`, `RadioGroup`, or `Select`.
- Use `Fieldset` for a related group and `CheckboxGroup` or `RadioGroup` when selection semantics require a group owner.
- Space stacked fields and controls with `gap` (a `flex flex-col` or `grid` stack), not `space-y-*`. Select, Combobox, Autocomplete, Checkbox, Switch, NumberField and OTPField render a hidden input after the visible control, so a `space-y` stack keeps a margin under its last visible field.
- Do not replace Field semantics with a standalone visual `Label`.
- For labels inside the fields, set `labelPlacement="floating"` on Field. It works with Input (also in an InputGroup with a trailing field action such as show password), Textarea, Select, a single-select Combobox and Autocomplete, at one size (48 px). Floating fields take no leading icon, so every label and value starts on the same line. Keep the top label for a field with a leading icon or start addon, for text prefixes such as `https://`, for Number Field, for a multi-select Combobox with chips, and for date, time and OTP fields.
- Input and InputGroup show browser autofill, such as a saved password or address, with their own tint across the whole field, addons included. Do not add autofill styles of your own. Typing and Playwright `fill()` never set the autofilled state; to check a checkout or address form in it, run Chromium's `Autofill.trigger` through a CDP session with test card or address data.

For date/time controls, use the explicit wrapper contracts and public links below.

Read each installed control source for its exact prop and part names before composing it.

## Correct: let Field associate the name, label and validation

```tsx
import { Form } from "@/siteplane/components/form";
import { Field, FieldLabel, FieldError } from "@/siteplane/components/field";
import { Input } from "@/siteplane/components/input";
import { Button } from "@/siteplane/components/button";

<Form onSubmit={(event) => event.preventDefault()}>
  <Field name="email">
    <FieldLabel>Email</FieldLabel>
    <Input type="email" required />
    <FieldError />
  </Field>
  <Button type="submit">Save</Button>
</Form>;
```

Incorrect: a visual `Label` beside an unnamed input does not provide the Field validation and submission contract. Do not assume shadcn's `FieldGroup` or `data-invalid` recipe replaces Siteplane UI's own Field props.

For server validation and reset, retrieve [Form examples and API](https://ui.siteplane.io/docs-markdown/components/form.md). Keep the save request and pending/error state in application code.

## Date and time form contracts

| Control and public docs                                                                  | Application value                        | Submission contract                                                                                 |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [DateField](https://ui.siteplane.io/docs-markdown/components/date-field.md)              | `Date`                                   | `name` submits `YYYY-MM-DD`, e.g. `2026-09-07`.                                                     |
| [TimeField](https://ui.siteplane.io/docs-markdown/components/time-field.md)              | `{ hour, minute }`                       | `name` submits 24-hour `HH:mm`, e.g. `09:30`.                                                       |
| [DateRangePicker](https://ui.siteplane.io/docs-markdown/components/date-range-picker.md) | `{ from?: Date, to?: Date }`             | `startName` and `endName` submit two `YYYY-MM-DD` strings. No single `name` prop.                   |
| [DateTimePicker](https://ui.siteplane.io/docs-markdown/components/date-time-picker.md)   | `{ date: Date, time: { hour, minute } }` | `name` submits `YYYY-MM-DDTHH:mm`, e.g. `2026-09-07T09:30`, without a UTC offset.                   |
| [DatePicker](https://ui.siteplane.io/docs-markdown/components/date-picker.md)            | `Date`                                   | `name` submits `YYYY-MM-DD`, like DateField. No read-only mode; use DateField for a read-only date. |

These five controls accept `form`, `required`, `disabled`, `size` and `textSize`; all but DatePicker also accept `readOnly`. At `xl` their text is 16 px, like the other fields. Inside a Field, FieldLabel names them, FieldDescription and FieldError describe them, and a disabled or invalid Field applies to them; FieldError shows their required message and the message for a typed date outside the calendar rules. Outside a Field, name them with `aria-label` or `aria-labelledby`. Set submission names on the control or the Field. Keep business validation, such as business hours, in application code.

For DateField, TimeField, DateRangePicker and DateTimePicker, read the linked pages’ **Submission and reset** examples for native FormData and reset behavior; reset controlled state explicitly. Locale affects presentation, not the submitted format. DateTimePicker submits a local date/time, not a UTC timestamp. See each component's API for empty values, callbacks and supported locale options; TimeField has a fixed hour/minute contract and no `locale` prop.

## Calendar options

Calendar and the date pickers share one vocabulary. Values are native `Date` objects, of which only the day counts; changes arrive through `onValueChange`, and a range is `{ from, to }`. A cleared field reports `undefined`. Calendar takes the calendar options directly, and DateField, DatePicker, DateRangePicker and DateTimePicker take the same `CalendarOptions` as `calendarProps`:

- `disabled`: a day matcher or a list of them, which makes those days unavailable. A matcher is a `Date`, a function of a `Date`, or a rule such as `{ before }`, `{ after }`, `{ from, to }` or `{ dayOfWeek: [0, 6] }`. `disabled: true` disables the whole calendar.
- `startMonth` and `endMonth`: the first and the last month it allows.
- `defaultMonth`: the month it shows first.

```tsx
import { DatePicker } from "@/siteplane/components/date-picker";

<DatePicker
  aria-label="Delivery date"
  name="delivery"
  calendarProps={{ disabled: [{ before: new Date() }, { dayOfWeek: [0, 6] }] }}
/>;
```

Do not pass React Aria `CalendarDate` values, `minValue`, `maxValue` or `isDateUnavailable`; those are not this kit's props.
