import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#home"
      aria-label="Alliatus, back to top"
      className={cn(
        "font-display text-3xl font-extrabold tracking-wide text-foreground italic",
        className,
      )}
    >
      Alliatus
    </a>
  );
}
