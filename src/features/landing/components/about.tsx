import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutImage, aboutIntro, pillars } from "../data/content";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mt-28 sm:mt-40">
      <Container>
        <SectionHeading id="about-title" lead="Not" title="your typical networking group" />
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <Reveal from="left">
            <img
              src={aboutImage}
              alt="A mastermind circle gathered around a table"
              width={660}
              height={826}
              loading="lazy"
              className="w-full rounded-3xl object-cover"
            />
          </Reveal>
          <div className="flex flex-col gap-4">
            <Reveal>
              <p className="font-display text-2xl leading-snug text-pretty sm:text-3xl">
                {aboutIntro}
              </p>
            </Reveal>
            <ul className="flex flex-col gap-4">
              {pillars.map((pillar, index) => (
                <li key={pillar.title}>
                  <Reveal delay={index * 0.1}>
                    <article className="rounded-2xl bg-card p-6 lg:p-8">
                      <h3 className="text-xl font-bold">{pillar.title}</h3>
                      <p className="mt-3 text-muted">{pillar.description}</p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
