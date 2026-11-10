import { useSyncExternalStore } from "react";

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const KEY = "alliatus-theme";
const listeners = new Set<() => void>();

function readPreference(): ThemePreference {
  try {
    const value = localStorage.getItem(KEY);
    return value === "light" || value === "dark" ? value : "system";
  } catch {
    return "system";
  }
}

function resolvePreference(preference: ThemePreference): ResolvedTheme {
  if (preference !== "system") return preference;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Applies the resolved theme to <html>. The inline script in index.html prevents a flash. */
export function applyTheme(preference: ThemePreference): void {
  document.documentElement.classList.toggle("dark", resolvePreference(preference) === "dark");
}

export function setTheme(preference: ThemePreference): void {
  try {
    if (preference === "system") localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, preference);
  } catch {
    // Storage can be blocked; the selected theme still applies for this session.
  }
  applyTheme(preference);
  listeners.forEach((notify) => notify());
}

function subscribe(notify: () => void): () => void {
  listeners.add(notify);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = () => {
    if (readPreference() === "system") {
      applyTheme("system");
      notify();
    }
  };
  const onStorage = () => {
    applyTheme(readPreference());
    notify();
  };

  media.addEventListener("change", onSystemChange);
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(notify);
    media.removeEventListener("change", onSystemChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** Returns the effective theme, so the toggle follows OS preference changes too. */
export function useTheme(): ResolvedTheme {
  return useSyncExternalStore(
    subscribe,
    () => resolvePreference(readPreference()),
    () => "light",
  );
}
