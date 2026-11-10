import { Plus } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqImage, faqs } from "../data/content";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="mt-28 sm:mt-40">
      <Container>
        <SectionHeading id="faq-title" lead="A few things to know" title="before you explore" />
        <p className="mb-7 max-w-2xl text-muted">
          Alliatus is presented here as a product concept. These answers describe the intended experience, not a live membership service.
        </p>
        <div className="grid items-start gap-8 lg:grid-cols-[3fr_2fr] lg:gap-12">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={Math.min(index, 4) * 0.05}>
                {/* Native <details>: keyboard-operable and accessible without JavaScript. `name` makes it exclusive. */}
                <details
                  name="faq"
                  open={index === 0}
                  className="group rounded-2xl bg-card transition-colors open:bg-accent open:text-on-accent"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 sm:p-6">
                    <h3 className="font-sans text-base font-bold sm:text-lg">{faq.question}</h3>
                    <Plus
                      className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-45"
                      aria-hidden
                    />
                  </summary>
                  <p className="px-5 pb-6 text-pretty sm:px-6 sm:text-lg">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal from="right" className="hidden lg:sticky lg:top-28 lg:block">
            <img
              src={faqImage}
              alt="A host welcoming members to an online session"
              width={563}
              height={388}
              loading="lazy"
              className="w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
