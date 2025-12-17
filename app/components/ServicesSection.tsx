"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { H2, H3, P, PSmall, PXSmall } from "@/components/ui/typography";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCard {
  title: string;
  description: string;
  features: string[];
}

interface ServicesProps {
  title: string;
  description: string;
  note: string;
  services: ServiceCard[];
}

export function ServicesSection({
  title,
  description,
  note,
  services,
}: ServicesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.children || [], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      // Service cards animation
      gsap.from(cardsRef.current?.children || [], {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="overflow-hidden border-b border-slate-800/70 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div
          ref={headerRef}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <H2>{title}</H2>
            <P className="mt-2 max-w-xl">{description}</P>
          </div>
          <PXSmall className="text-slate-500">{note}</PXSmall>
        </div>

        <div ref={cardsRef} className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <H3>{service.title}</H3>
              <PSmall className="mt-2">{service.description}</PSmall>
              <ul className="mt-3 space-y-1 text-xs text-slate-400">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
