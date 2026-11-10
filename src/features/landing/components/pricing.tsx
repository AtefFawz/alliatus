import { Check } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { annualTotal, formatEuro, plans, pricePerMonth, type Billing } from "../lib/pricing";

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  const toggle = (value: Billing) =>
    cn(
      "h-10 cursor-pointer rounded-lg px-5 text-sm font-semibold transition-colors",
      billing === value ? "bg-primary text-on-primary" : "text-foreground/75 hover:bg-tint",
    );

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="mt-28 sm:mt-40">
      <Container>
        <SectionHeading id="pricing-title" lead="Illustrative plans" title="that fit different needs" />

        <p className="mx-auto mb-7 max-w-2xl text-center text-sm leading-relaxed text-muted">
          Example pricing for this product concept only. No checkout or payment processing is connected.
        </p>

        <div
          role="group"
          aria-label="Billing period"
          className="mx-auto mb-14 flex w-fit gap-1 rounded-xl bg-card p-1"
        >
          <button
            type="button"
            aria-pressed={billing === "monthly"}
            onClick={() => setBilling("monthly")}
            className={toggle("monthly")}
          >
            Monthly
          </button>
          <button
            type="button"
            aria-pressed={billing === "annual"}
            onClick={() => setBilling("annual")}
            className={toggle("annual")}
          >
            Yearly <span className="ml-1 text-xs opacity-80">2 months free</span>
          </button>
        </div>

        <ul className="grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <li key={plan.id}>
              <Reveal delay={index * 0.08} className="h-full">
                <article
                  className={cn(
                    "relative flex h-full flex-col gap-6 rounded-3xl p-8 text-center",
                    plan.featured
                      ? "bg-accent text-on-accent shadow-2xl md:-my-3 md:py-11"
                      : "bg-card",
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#303030] px-3 py-1 text-xs font-bold text-white">
                      Featured concept
                    </span>
                  )}
                  <h3 className="text-3xl font-bold">{plan.name}</h3>
                  <p className={plan.featured ? "text-on-accent/80" : "text-muted"}>
                    {plan.tagline}
                  </p>
                  <p aria-live="polite">
                    <span className="font-display text-5xl font-extrabold tabular-nums">
                      {formatEuro(pricePerMonth(plan, billing))}
                    </span>
                    <span className="ml-1 text-sm">/mo</span>
                    {billing === "annual" && (
                      <span className="mt-1 block text-sm opacity-75">
                        {formatEuro(annualTotal(plan))} billed yearly
                      </span>
                    )}
                  </p>
                  <ul className="flex flex-1 flex-col gap-3 text-left">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-1 size-4 shrink-0" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="#apply"
                    size="lg"
                    variant={plan.featured ? "primary" : "outline"}
                    className={plan.featured ? "bg-[#303030] text-white" : undefined}
                  >
                    {plan.cta}
                  </ButtonLink>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
