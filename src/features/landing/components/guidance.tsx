import { CheckCheck, MessagesSquare, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const guidance = [
  {
    icon: MessagesSquare,
    title: "A focused conversation",
    description:
      "A simple session rhythm gives everyone room to check in, share one meaningful challenge, and ask for useful input.",
  },
  {
    icon: ShieldCheck,
    title: "A respectful environment",
    description:
      "Clear group agreements set expectations around listening, confidentiality, and constructive feedback.",
  },
  {
    icon: CheckCheck,
    title: "A commitment that travels",
    description:
      "Each conversation ends with a next step, so insight has a chance to become action between sessions.",
  },
];

export function Guidance() {
  return (
    <section id="guidance" aria-labelledby="guidance-title" className="mt-28 sm:mt-40">
      <Container>
        <SectionHeading id="guidance-title" lead="Good guidance" title="makes room for growth" />
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal from="left" className="h-full">
            <div className="flex h-full flex-col justify-between rounded-3xl bg-[#303030] p-7 text-white sm:p-10 dark:bg-card">
              <p className="text-xs font-bold tracking-[0.18em] text-white/60 uppercase dark:text-muted">
                The Alliatus approach
              </p>
              <div className="py-10">
                <p className="font-display text-4xl leading-tight font-bold sm:text-5xl">
                  Structure the space. Let the people shape the conversation.
                </p>
              </div>
              <p className="max-w-md text-base leading-relaxed text-white/70 dark:text-muted">
                The facilitator’s role is to protect the rhythm of the circle—not to dominate it.
              </p>
            </div>
          </Reveal>
          <div className="flex flex-col gap-4">
            {guidance.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <article className="flex gap-5 rounded-3xl border border-border/70 bg-card p-6 sm:p-7">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-tint">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">{title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
