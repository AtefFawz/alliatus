import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghost";
type Size = "sm" | "md" | "lg" | "icon";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60 cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-on-primary hover:opacity-90 hover:shadow-lg",
  accent: "bg-accent text-on-accent hover:brightness-95 hover:shadow-lg",
  outline:
    "border-2 border-foreground/70 bg-transparent text-foreground hover:bg-foreground hover:text-background",
  ghost: "text-foreground hover:bg-tint",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
  icon: "size-11",
};

interface StyleOptions {
  variant?: Variant;
  size?: Size;
  className?: string;
}

function buttonStyles({ variant = "primary", size = "md", className }: StyleOptions = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

export const Button = forwardRef<
  HTMLButtonElement,
  StyleOptions & ButtonHTMLAttributes<HTMLButtonElement>
>(function Button({ variant, size, className, type = "button", ...props }, ref) {
  return <button ref={ref} type={type} className={buttonStyles({ variant, size, className })} {...props} />;
});

Button.displayName = "Button";

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: StyleOptions & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={buttonStyles({ variant, size, className })} {...props} />;
}
