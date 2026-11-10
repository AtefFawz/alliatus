import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { ApplyForm } from "@/features/apply/components/apply-form";

export function Apply() {
  return (
    <section id="apply" aria-labelledby="apply-title" className="mt-28 sm:mt-40">
      <Container>
        <Reveal>
          <div className="grid gap-10 rounded-3xl bg-accent p-6 text-on-accent sm:p-10 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:p-14">
            <div className="flex flex-col gap-5">
              <h2 id="apply-title" className="text-balance">
                <span className="block text-2xl font-bold sm:text-3xl lg:text-4xl">Let’s get</span>
                <span className="block text-5xl font-extrabold lg:text-6xl">started!</span>
              </h2>
              <p className="text-lg sm:text-xl">
                Explore how a thoughtful peer circle could support your next chapter.
              </p>
              <p className="text-lg sm:text-xl">
                Preview the kind of information a matching process might ask for.
              </p>
              <p className="max-w-md rounded-xl border border-on-accent/20 bg-white/20 p-4 text-sm leading-relaxed">
                Preview only: without a configured submission endpoint, this form does not send or
                store personal information.
              </p>
            </div>
            <div className="rounded-2xl bg-background/70 p-5 sm:p-8">
              <ApplyForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
