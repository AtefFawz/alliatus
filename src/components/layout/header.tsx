import { ThemeToggle } from "@/features/theme/theme-toggle";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { useActiveSection } from "@/lib/use-active-section";
import { sectionNav } from "@/lib/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";

const ids = [...sectionNav.map((item) => item.id), "apply"];

export function Header() {
  const active = useActiveSection(ids);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container className="relative flex h-18 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {sectionNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-semibold transition-colors lg:px-4",
                active === item.id
                  ? "bg-accent text-on-accent"
                  : "text-muted hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink
            href="#apply"
            size="sm"
            aria-current={active === "apply" ? "location" : undefined}
            className={cn(
              "hidden md:inline-flex",
              active === "apply" && "ring-2 ring-offset-2 ring-foreground",
            )}
          >
            Apply now
          </ButtonLink>
          <MobileNav active={active} />
        </div>
      </Container>
    </header>
  );
}
