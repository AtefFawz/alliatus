import { ArrowDownRight, Compass, MessageCircle, UsersRound } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { heroImage } from "../data/content";

const principles = [
  { icon: UsersRound, label: "Small, intentional circles" },
  { icon: MessageCircle, label: "Honest conversations" },
  { icon: Compass, label: "Progress with direction" },
];

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="pt-8 sm:pt-12">
      <Container>
        <div className="relative isolate grid items-center gap-10 overflow-hidden rounded-3xl bg-accent p-6 text-on-accent sm:p-10 md:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -right-20 -z-10 size-80 rounded-full border border-on-accent/10 sm:size-[26rem]"
          />
          <div className="flex flex-col items-start gap-7">
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-on-accent/20 bg-white/25 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em]">
                A more thoughtful way to grow
              </p>
              <h1 id="hero-title" className="max-w-3xl text-balance">
                <span className="block text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                  Level up
                </span>
                <span className="mt-3 block max-w-xl text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                  with a circle that moves you forward.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-xl text-lg leading-relaxed font-medium text-pretty sm:text-xl">
                Alliatus is a mastermind-circle concept built around meaningful conversations,
                generous perspective, and the kind of accountability that turns intention into
                action.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <ButtonLink
                  href="#apply"
                  size="lg"
                  className="bg-[#303030] text-white hover:bg-[#171717] dark:bg-[#262626]"
                >
                  Explore the application <ArrowDownRight className="size-4" aria-hidden />
                </ButtonLink>
                <ButtonLink
                  href="#works"
                  size="lg"
                  variant="outline"
                  className="border-on-accent/70 text-on-accent hover:bg-on-accent hover:text-background"
                >
                  See how it works
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal from="right" delay={0.12} className="relative mx-auto w-full max-w-xl md:max-w-none">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-on-accent/15 bg-white/30 p-2 shadow-2xl shadow-black/10 sm:p-3">
              <img
                src={heroImage}
                alt="A small group sharing ideas around a table"
                width={564}
                height={669}
                fetchPriority="high"
                className="aspect-[4/4.2] w-full rounded-[1.1rem] object-cover md:aspect-[4/4.8]"
              />
              <div className="absolute right-5 bottom-5 left-5 rounded-2xl border border-white/50 bg-white/90 p-4 text-[#262626] shadow-xl backdrop-blur-md sm:right-7 sm:bottom-7 sm:left-7">
                <p className="text-xs font-bold tracking-[0.14em] text-[#6b6258] uppercase">
                  The idea is simple
                </p>
                <p className="mt-1 font-display text-xl leading-snug font-bold sm:text-2xl">
                  Better questions lead to better next steps.
                </p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 -bottom-5 -z-10 size-28 rounded-full border-2 border-on-accent/20"
            />
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <ul className="mt-7 grid gap-3 sm:grid-cols-3">
            {principles.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-border/80 bg-card/70 px-4 py-4 text-sm font-semibold sm:px-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-tint">
                  <Icon className="size-5" aria-hidden />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
