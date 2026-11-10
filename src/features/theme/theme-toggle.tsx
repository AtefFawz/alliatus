import { Moon, Sun } from "lucide-react";
import { setTheme, useTheme } from "./theme";

export function ThemeToggle() {
  const theme = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-tint"
    >
      {isDark ? <Sun className="size-5" aria-hidden /> : <Moon className="size-5" aria-hidden />}
    </button>
  );
}
