"use client";

import { useInView } from "react-intersection-observer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { MethodsSection } from "@/components/sections/methods-section";
import { ResultsSection } from "@/components/sections/results-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [methodsRef, methodsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [resultsRef, resultsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyUsRef, whyUsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 pt-16">
        <HeroSection inView={heroInView} />
      </section>

      <section id="services" ref={servicesRef} className="py-20 px-4">
        <ServicesSection inView={servicesInView} />
      </section>

      <section ref={methodsRef} className="py-20 px-4 bg-muted/50">
        <MethodsSection inView={methodsInView} />
      </section>

      <section ref={resultsRef} className="py-20 px-4">
        <ResultsSection inView={resultsInView} />
      </section>

      <section id="about" ref={whyUsRef} className="py-20 px-4 bg-muted/50">
        <WhyUsSection inView={whyUsInView} />
      </section>

      <section id="contact" ref={contactRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Let's Make Your Brand Unforgettable!
          </h2>
          <ContactSection inView={contactInView} />
        </div>
      </section>
    </main>
  );
}