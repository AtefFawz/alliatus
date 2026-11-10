import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  lead?: string;
  title: ReactNode;
  description?: string;
  as?: "h1" | "h2";
  align?: "center" | "left";
  className?: string;
}

/** `lead` is the lighter first line; `title` is the heavy emphasised line, as in the original design. */
export function SectionHeading({
  id,
  lead,
  title,
  description,
  as: Tag = "h2",
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "mb-12 flex flex-col gap-4 sm:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Tag id={id} className="font-display text-balance">
        {lead && <span className="block text-2xl font-medium sm:text-3xl lg:text-4xl">{lead}</span>}
        <span className="block text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </span>
      </Tag>
      {description && <p className="max-w-2xl text-lg text-pretty text-muted">{description}</p>}
    </header>
  );
}
