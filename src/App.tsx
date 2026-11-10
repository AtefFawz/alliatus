import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About } from "@/features/landing/components/about";
import { Apply } from "@/features/landing/components/apply";
import { Guidance } from "@/features/landing/components/guidance";
import { Faq } from "@/features/landing/components/faq";
import { Hero } from "@/features/landing/components/hero";
import { Pricing } from "@/features/landing/components/pricing";
import { CirclePrinciples } from "@/features/landing/components/circle-principles";
import { Works } from "@/features/landing/components/works";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-primary px-4 py-2 font-semibold text-on-primary focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Works />
        <CirclePrinciples />
        <Guidance />
        <Pricing />
        <Faq />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
