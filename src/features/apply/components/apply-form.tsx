import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/form-controls";
import { applyAction, initialApplyState } from "../lib/apply-action";
import { ROLES, STAGES } from "../schema";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending && <LoaderCircle className="size-5 animate-spin" aria-hidden />}
      {pending
        ? "Sending…"
        : import.meta.env.VITE_APPLY_ENDPOINT?.trim()
          ? "Submit application"
          : "Preview application"}
    </Button>
  );
}

export function ApplyForm() {
  const [state, formAction] = useActionState(applyAction, initialApplyState);
  const errors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values : {};

  if (state.status === "success") {
    const isDemo = state.delivery === "demo";
    return (
      <div
        role="status"
        className="flex items-start gap-4 rounded-2xl bg-card p-6 text-foreground"
      >
        <CheckCircle2 className="mt-1 size-7 shrink-0" aria-hidden />
        <div>
          <p className="font-display text-2xl font-bold">
            {isDemo ? "Demo submission complete" : "Application submitted"}
          </p>
          <p className="mt-2 text-muted">
            {isDemo
              ? "This is preview mode. Your information was not sent or saved. Configure VITE_APPLY_ENDPOINT to connect a real application service."
              : "Your application was sent to the configured submission service. Any follow-up depends on the service operator."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5 text-foreground">
      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="rounded-xl bg-red-100 px-4 py-3 text-sm font-medium text-red-900 dark:bg-red-950 dark:text-red-100"
        >
          {state.message}
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="apply-name" label="Full name" error={errors.name}>
          {(aria) => (
            <Input
              id="apply-name"
              name="name"
              autoComplete="name"
              defaultValue={values.name}
              required
              {...aria}
            />
          )}
        </Field>
        <Field id="apply-email" label="Email" error={errors.email}>
          {(aria) => (
            <Input
              id="apply-email"
              name="email"
              type="email"
              autoComplete="email"
              defaultValue={values.email}
              required
              {...aria}
            />
          )}
        </Field>
        <Field id="apply-role" label="I am a…" error={errors.role}>
          {(aria) => (
            <Select id="apply-role" name="role" defaultValue={values.role ?? ""} required {...aria}>
              <option value="" disabled>
                Select one
              </option>
              {ROLES.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </Select>
          )}
        </Field>
        <Field id="apply-stage" label="Where are you now?" error={errors.stage}>
          {(aria) => (
            <Select
              id="apply-stage"
              name="stage"
              defaultValue={values.stage ?? ""}
              required
              {...aria}
            >
              <option value="" disabled>
                Select one
              </option>
              {STAGES.map((stage) => (
                <option key={stage.value} value={stage.value}>
                  {stage.label}
                </option>
              ))}
            </Select>
          )}
        </Field>
      </div>
      <Field
        id="apply-goal"
        label="What do you want from a circle?"
        hint="Your goals, your challenges, the support you’re after."
        error={errors.goal}
      >
        {(aria) => (
          <Textarea
            id="apply-goal"
            name="goal"
            maxLength={800}
            defaultValue={values.goal}
            required
            {...aria}
          />
        )}
      </Field>

      {/* Honeypot: hidden from people and assistive tech. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="flex flex-col gap-2">
        <label className="flex cursor-pointer items-start gap-3 text-sm">
          <input
            type="checkbox"
            name="commitment"
            defaultChecked={values.commitment === "on"}
            aria-invalid={Boolean(errors.commitment)}
            aria-describedby={errors.commitment ? "apply-commitment-error" : undefined}
            className="mt-0.5 size-5 shrink-0 cursor-pointer accent-[#404040]"
          />
          I can commit to attending my circle’s sessions regularly and giving honest feedback.
        </label>
        {errors.commitment && (
          <p
            id="apply-commitment-error"
            role="alert"
            className="text-sm text-red-700 dark:text-red-400"
          >
            {errors.commitment}
          </p>
        )}
      </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  );
}
