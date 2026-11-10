import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { audiences, included, member, steps } from "../data/content";

export function Works() {
  return (
    <section id="works" aria-labelledby="works-title" className="mt-28 sm:mt-40">
      <Container>
        <SectionHeading
          id="works-title"
          lead="From intention to action"
          title="Step by step"
        />

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.number}>
              <Reveal delay={index * 0.08} className="h-full">
                <article
                  className={cn(
                    "flex h-full flex-col gap-4 rounded-3xl p-6 lg:p-8",
                    index === 0 ? "bg-accent text-on-accent" : "bg-card",
                  )}
                >
                  <span className="font-display text-5xl font-extrabold">{step.number}</span>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className={index === 0 ? "text-on-accent/85" : "text-muted"}>
                    {step.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <img
              src={member}
              alt="A member preparing for a session"
              width={427}
              height={561}
              loading="lazy"
              className="h-full max-h-96 w-full rounded-3xl object-cover lg:max-h-none"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <article className="flex h-full flex-col justify-center gap-6 rounded-3xl bg-card p-6 lg:p-10">
              <h3 className="font-display text-3xl font-bold">What’s included</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 size-5 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <div className="mt-28 sm:mt-40">
          <SectionHeading id="audience-title" lead="Made for people" title="like you" />
          <div className="grid gap-4 md:grid-cols-2">
            {audiences.map((audience, index) => (
              <Reveal key={audience.title} from={index === 0 ? "left" : "right"}>
                <article
                  className={cn(
                    "flex h-full flex-col gap-6 rounded-3xl p-6 lg:p-8",
                    audience.highlighted
                      ? "bg-accent text-on-accent"
                      : "border-2 border-foreground/40",
                  )}
                >
                  <h3 className="text-2xl font-bold sm:text-3xl">{audience.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {audience.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-foreground/30 bg-card px-4 py-2 text-sm text-foreground sm:text-base"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <img
                    src={audience.image}
                    alt={audience.alt}
                    width={628}
                    height={467}
                    loading="lazy"
                    className="mt-auto w-full rounded-2xl object-cover"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
