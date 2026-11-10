import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { sectionNav, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-28 pb-6 sm:mt-40">
      <Container>
        <div className="rounded-3xl bg-[#303030] p-8 text-white sm:p-12 dark:bg-card dark:text-foreground">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div className="flex flex-col items-start gap-4">
              <Logo className="text-4xl text-white dark:text-foreground" />
              <p className="max-w-sm text-white/75 dark:text-muted">
                {siteConfig.tagline}. Built around connection, clarity, and community.
              </p>
              <span className="mt-2 rounded-full border border-white/20 px-3 py-1 text-xs font-semibold tracking-wide text-white/75 uppercase dark:border-border dark:text-muted">
                Portfolio concept · Preview only
              </span>
            </div>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-3 text-base font-medium sm:grid-cols-3">
                {sectionNav.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="transition-opacity hover:opacity-70">
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#apply" className="transition-opacity hover:opacity-70">
                    Apply
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <p className="mt-10 border-t border-white/15 pt-6 text-sm text-white/65 dark:text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. Concept interface; no live memberships
            or payments are offered here.
          </p>
        </div>
      </Container>
    </footer>
  );
}
