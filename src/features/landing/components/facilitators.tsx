import { ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { facilitatorProfiles } from "../data/content";

/**
 * This is a concept section: names, roles, bios, and portraits are sample content,
 * not claims about an existing Alliatus team.
 */
export function Facilitators() {
  return (
    <section
      id="facilitators"
      aria-labelledby="facilitators-title"
      className="mt-28 scroll-mt-28 sm:mt-40"
    >
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-[#303030] text-[#f6f3ec] shadow-sm sm:rounded-[2.5rem] dark:bg-[#151412] dark:text-[#f3efe6]">
          <div className="grid gap-8 border-b border-background/15 px-6 py-9 sm:px-10 sm:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-14 lg:py-14">
            <Reveal from="left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-background/20 px-3 py-1.5 text-xs font-semibold tracking-[0.12em] text-background/75 uppercase">
                <Sparkles className="size-3.5 text-accent" aria-hidden />
                The people behind the practice
              </div>
              <h2
                id="facilitators-title"
                className="max-w-2xl font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
              >
                Meet your <span className="text-accent italic">facilitators.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-5 lg:items-start">
                <p className="max-w-xl text-base leading-relaxed text-background/75 sm:text-lg">
                  A great circle needs more than a calendar invite. It needs people who know how to
                  listen, ask better questions, and help good intentions turn into meaningful action.
                </p>
                <p className="max-w-xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-background/65">
                  Sample team for demonstration only. These fictional profiles illustrate the kind of
                  roles a future Alliatus experience could include; they are not real staff biographies.
                </p>
              </div>
            </Reveal>
          </div>

          <ul className="grid gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-5 xl:grid-cols-4 xl:gap-3 xl:p-6">
            {facilitatorProfiles.map((person, index) => (
              <li key={person.number}>
                <Reveal delay={index * 0.07} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-border/70 bg-card p-3 text-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-3.5">
                    <div className="relative isolate aspect-[4/4.3] overflow-hidden rounded-[1.2rem] bg-tint">
                      <img
                        src={person.image}
                        alt={person.imageAlt}
                        width={310}
                        height={310}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                      />
                      <span className="absolute top-3 left-3 rounded-full border border-white/50 bg-white/85 px-3 py-1 text-[10px] font-bold tracking-[0.13em] text-[#262626] uppercase backdrop-blur-sm">
                        Sample profile · {person.number}
                      </span>
                      <span className="absolute right-3 bottom-3 flex size-10 items-center justify-center rounded-full bg-accent text-on-accent shadow-md transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="size-5" aria-hidden />
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
                      <p className="mb-2 text-[10px] font-bold tracking-[0.16em] text-muted uppercase">
                        Circle guide · {person.number}
                      </p>
                      <h3 className="font-display text-2xl leading-tight font-bold">{person.name}</h3>
                      <p className="mt-2 min-h-12 text-sm leading-snug font-semibold text-muted">
                        {person.role}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-muted">{person.bio}</p>

                      <div className="mt-auto flex flex-wrap gap-2 pt-5">
                        {person.focus.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border bg-tint/70 px-3 py-1.5 text-[11px] font-semibold text-foreground/80"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 border-t border-background/15 px-6 py-5 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <span>Illustrative profiles · Not an active team directory</span>
            <span>Real facilitator details should be published only with permission.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
