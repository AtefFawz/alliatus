import { z } from "zod";
import { APPLICATION_FIELDS, applicationSchema, type ApplicationField } from "../schema";
import { submitApplication } from "./submit";

export type ApplyState =
  | { status: "idle" }
  | { status: "success"; delivery: "sent" | "demo" }
  | {
      status: "error";
      message?: string;
      errors: Partial<Record<ApplicationField, string>>;
      values: Partial<Record<ApplicationField, string>>;
    };

export const initialApplyState: ApplyState = { status: "idle" };

/** Reads the known fields from the form as strings (a missing field becomes ""). */
export function readFields(formData: FormData): Record<ApplicationField, string> {
  return Object.fromEntries(
    APPLICATION_FIELDS.map((field) => [field, String(formData.get(field) ?? "")]),
  ) as Record<ApplicationField, string>;
}

/** First error message per field. */
export function fieldErrors(error: z.ZodError): Partial<Record<ApplicationField, string>> {
  const flat = z.flattenError(error).fieldErrors as Record<string, string[] | undefined>;
  const result: Partial<Record<ApplicationField, string>> = {};
  for (const field of APPLICATION_FIELDS) {
    const message = flat[field]?.[0];
    if (message) result[field] = message;
  }
  return result;
}

/** Form action for `useActionState`: validate, then submit. */
export async function applyAction(_previous: ApplyState, formData: FormData): Promise<ApplyState> {
  // Honeypot: invisible to people, irresistible to bots. Pretend it worked.
  if (formData.get("website")) return { status: "success", delivery: "demo" };

  const values = readFields(formData);
  const parsed = applicationSchema.safeParse(values);
  if (!parsed.success) return { status: "error", errors: fieldErrors(parsed.error), values };

  const result = await submitApplication(parsed.data);
  if (!result.ok) return { status: "error", message: result.message, errors: {}, values };
  return { status: "success", delivery: result.delivery };
}
