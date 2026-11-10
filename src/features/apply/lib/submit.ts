import type { ApplicationInput } from "../schema";

export type SubmitResult =
  | { ok: true; delivery: "sent" | "demo" }
  | { ok: false; message: string };

const TIMEOUT_MS = 10_000;

function isSafeEndpoint(value: string): boolean {
  try {
    const url = new URL(value);
    if (url.username || url.password) return false;
    if (url.protocol === "https:") return true;
    return (
      import.meta.env.DEV &&
      url.protocol === "http:" &&
      (url.hostname === "localhost" || url.hostname === "127.0.0.1")
    );
  } catch {
    return false;
  }
}

/**
 * Sends an application to a configured HTTPS endpoint. Without an endpoint, it
 * returns an explicit demo result: no data is transmitted or stored.
 */
export async function submitApplication(
  input: ApplicationInput,
  endpoint: string | undefined = import.meta.env.VITE_APPLY_ENDPOINT,
): Promise<SubmitResult> {
  const target = endpoint?.trim();
  if (!target) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { ok: true, delivery: "demo" };
  }

  if (!isSafeEndpoint(target)) {
    return {
      ok: false,
      message: "The application endpoint must be a valid HTTPS URL (localhost is allowed in development).",
    };
  }

  try {
    const response = await fetch(target, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(input),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!response.ok) {
      return {
        ok: false,
        message: "We couldn’t send your application. Please try again.",
      };
    }
    return { ok: true, delivery: "sent" };
  } catch {
    return {
      ok: false,
      message: "Network problem. Check your connection and try again.",
    };
  }
}
