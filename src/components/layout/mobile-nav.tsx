import { Menu, X } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Button, ButtonLink } from "@/components/ui/button";
import { sectionNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileNav({ active }: { active: string | null }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>("a");
    const focusFrame = window.requestAnimationFrame(() => firstLink?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const closeFromBackdrop = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="md:hidden">
      <Button
        ref={triggerRef}
        variant="ghost"
        size="icon"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X className="size-6" aria-hidden />
        ) : (
          <Menu className="size-6" aria-hidden />
        )}
      </Button>

      <AnimatePresence>
        {open && (
          <>
            <m.button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeFromBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-x-0 top-18 bottom-0 z-40 cursor-default bg-black/20 backdrop-blur-[2px]"
            />
            <m.nav
              ref={menuRef}
              id="mobile-menu"
              aria-label="Mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-x-0 top-full z-50 border-b border-border bg-background px-4 pt-2 pb-6 shadow-xl"
            >
              <ul className="flex flex-col">
                {sectionNav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      aria-current={active === item.id ? "location" : undefined}
                      className={cn(
                        "block rounded-lg px-3 py-3 text-lg font-semibold transition-colors",
                        active === item.id
                          ? "bg-accent text-on-accent"
                          : "hover:bg-tint",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#apply"
                size="lg"
                aria-current={active === "apply" ? "location" : undefined}
                className="mt-4 w-full"
                onClick={closeMenu}
              >
                Apply now
              </ButtonLink>
            </m.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
