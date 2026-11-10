import { afterEach, describe, expect, it, vi } from "vitest";
import { applicationSchema } from "../schema";
import { applyAction, fieldErrors, readFields } from "./apply-action";
import { submitApplication } from "./submit";

const valid = {
  name: "Atef",
  email: "atef@example.com",
  role: "freelancer",
  stage: "growing",
  goal: "I want a circle that keeps me accountable while I grow my freelance business.",
  commitment: "on",
};

function form(overrides: Record<string, string> = {}, omit: string[] = []) {
  const data = new FormData();
  for (const [key, value] of Object.entries({ ...valid, ...overrides })) {
    if (!omit.includes(key)) data.set(key, value);
  }
  return data;
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

describe("applicationSchema", () => {
  it("accepts a valid application and trims text", () => {
    const parsed = applicationSchema.safeParse({ ...valid, name: "  Atef  " });
    expect(parsed.success && parsed.data.name).toBe("Atef");
  });

  it("rejects a bad email, short goal and missing commitment", () => {
    const parsed = applicationSchema.safeParse({
      ...valid,
      email: "nope",
      goal: "too short",
      commitment: "",
    });
    expect(parsed.success).toBe(false);
    if (!parsed.success) {
      const errors = fieldErrors(parsed.error);
      expect(Object.keys(errors).sort()).toEqual(["commitment", "email", "goal"]);
    }
  });

  it("rejects an unknown role", () => {
    expect(applicationSchema.safeParse({ ...valid, role: "astronaut" }).success).toBe(false);
  });
});

describe("readFields", () => {
  it("turns missing fields into empty strings", () => {
    expect(readFields(form({}, ["goal"])).goal).toBe("");
  });
});

describe("applyAction", () => {
  it("returns field errors and echoes values on invalid input", async () => {
    const state = await applyAction({ status: "idle" }, form({ email: "bad" }));
    expect(state.status).toBe("error");
    if (state.status === "error") {
      expect(state.errors.email).toBeDefined();
      expect(state.values.name).toBe("Atef");
    }
  });

  it("keeps honeypot submissions out of the network flow", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const state = await applyAction({ status: "idle" }, form({ website: "http://spam" }));
    expect(state).toEqual({ status: "success", delivery: "demo" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("marks a valid application as demo-only when no endpoint is configured", async () => {
    vi.useFakeTimers();
    const pending = applyAction({ status: "idle" }, form());
    await vi.advanceTimersByTimeAsync(1000);
    expect(await pending).toEqual({ status: "success", delivery: "demo" });
    vi.useRealTimers();
  });
});

describe("submitApplication", () => {
  const input = applicationSchema.parse(valid);

  it("posts JSON to the configured endpoint", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    const result = await submitApplication(input, "https://api.test/apply");
    expect(result).toEqual({ ok: true, delivery: "sent" });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.test/apply",
      expect.objectContaining({ method: "POST", body: JSON.stringify(input) }),
    );
  });


  it("returns an honest demo result when no endpoint is configured", async () => {
    vi.useFakeTimers();
    const pending = submitApplication(input, "");
    await vi.advanceTimersByTimeAsync(500);
    expect(await pending).toEqual({ ok: true, delivery: "demo" });
    vi.useRealTimers();
  });

  it("rejects a malformed or insecure remote endpoint", async () => {
    const result = await submitApplication(input, "http://example.com/collect");
    expect(result.ok).toBe(false);
  });

  it("reports a failure for non-2xx responses and network errors", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
    expect((await submitApplication(input, "https://api.test/apply")).ok).toBe(false);
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    expect((await submitApplication(input, "https://api.test/apply")).ok).toBe(false);
  });
});
