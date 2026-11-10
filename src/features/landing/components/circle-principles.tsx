import { Compass, Lightbulb, UsersRound } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const circleOutcomes = [
  {
    icon: Lightbulb,
    number: "01",
    title: "A clearer perspective",
    description:
      "Step outside your own assumptions and hear how thoughtful peers would approach the challenge in front of you.",
  },
  {
    icon: Compass,
    number: "02",
    title: "A practical next step",
    description:
      "Turn a broad ambition into one useful action you can carry into the week ahead.",
  },
  {
    icon: UsersRound,
    number: "03",
    title: "Shared accountability",
    description:
      "Make room for honest progress updates, useful questions, and support that goes both ways.",
  },
];

export function CirclePrinciples() {
  return (
    <section id="circle" aria-labelledby="circle-title" className="mt-28 sm:mt-40">
      <Container>
        <SectionHeading id="circle-title" lead="The circle effect" title="good things grow together" />
        <div className="mb-8 max-w-2xl text-center text-muted sm:mx-auto">
          A strong peer circle is not built on big promises. It is built on the quality of the
          conversation and what you do next.
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {circleOutcomes.map(({ icon: Icon, number, title, description }, index) => (
            <li key={number}>
              <Reveal delay={index * 0.08} className="h-full">
                <article className="group flex h-full flex-col gap-7 rounded-3xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl font-bold text-muted/55">{number}</span>
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-on-accent transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                      <Icon className="size-6" aria-hidden />
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-display text-2xl font-bold">{title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{description}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
