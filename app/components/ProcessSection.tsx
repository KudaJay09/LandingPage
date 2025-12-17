"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { H2, H3, P, PXSmall, Label } from "@/components/ui/typography";

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessProps {
  title: string;
  description: string;
  steps: ProcessStep[];
}

export function ProcessSection({ title, description, steps }: ProcessProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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

      // Steps animation
      gsap.from(stepsRef.current?.children || [], {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stepsRef.current,
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
      id="process"
      className="overflow-hidden border-b border-slate-800/70 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div ref={headerRef} className="max-w-xl">
          <H2>{title}</H2>
          <P className="mt-2">{description}</P>
        </div>

        <div ref={stepsRef} className="mt-8 grid gap-5 md:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
            >
              <Label>{step.step}</Label>
              <H3 className="mt-2">{step.title}</H3>
              <PXSmall className="mt-2">{step.description}</PXSmall>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
