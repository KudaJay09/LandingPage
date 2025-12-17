"use client";

import { Badge, H1, P, PSmall, PXSmall } from "@/components/ui/typography";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryCTA: { href: string; text: string };
  secondaryCTA: { href: string; text: string };
  features: Array<{ color: string; text: string }>;
  techCards: Array<{
    category: string;
    title: string;
    description: string;
  }>;
  quote: string;
}

export function HeroSection({
  badge,
  title,
  highlight,
  description,
  primaryCTA,
  secondaryCTA,
  features,
  techCards,
  quote,
}: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const techCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.from(badgeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.out",
      });

      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });

      // Highlight animation
      gsap.from(highlightRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
      });

      // Description animation
      gsap.from(descriptionRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
      });

      // CTA buttons animation
      gsap.from(ctaRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Features animation
      gsap.from(featuresRef.current?.children || [], {
        opacity: 0,
        x: -20,
        duration: 0.6,
        delay: 1,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Tech card animation
      gsap.from(techCardRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.2)",
      });

      // Tech card items stagger
      gsap.from(
        techCardRef.current?.querySelectorAll(".tech-card-item") || [],
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="overflow-hidden border-b border-slate-800/70 bg-linear-to-b from-slate-950 to-slate-900"
    >
      <div className="absolute top-0 left-0 flex h-162 w-full items-center justify-center bg-[#020618]">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950/50 via-transparent to-slate-900/50" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
        <div className="flex-1">
          <div ref={badgeRef}>
            <Badge className="mb-3">{badge}</Badge>
          </div>
          <div ref={titleRef}>
            <H1>
              {title}
              <span
                ref={highlightRef}
                className="block text-transparent bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text"
              >
                {highlight}
              </span>
            </H1>
          </div>
          <div ref={descriptionRef}>
            <P className="mt-5 max-w-xl leading-relaxed text-slate-300">
              {description}
            </P>
          </div>

          <div ref={ctaRef} className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={primaryCTA.href}
              className="rounded-full bg-blue-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-500/40 hover:bg-blue-600 sm:text-sm"
            >
              {primaryCTA.text}
            </Link>
            <Link
              href={secondaryCTA.href}
              className="rounded-full border border-slate-700 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-200 hover:border-slate-500 sm:text-sm"
            >
              {secondaryCTA.text}
            </Link>
          </div>

          <div
            ref={featuresRef}
            className="mt-6 flex flex-wrap gap-4 text-xs text-slate-400 sm:text-sm"
          >
            {features.map((feature, idx) => (
              <span key={idx} className="inline-flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${feature.color}`} />
                {feature.text}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex-1 md:mt-0" id="12zero1">
          <div
            ref={techCardRef}
            className="relative mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-blue-500/10"
          >
            <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
              <span>Tech snapshot</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-medium text-emerald-300">
                Ready for production
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {techCards.map((card, idx) => (
                <div
                  key={idx}
                  className="tech-card-item rounded-2xl border border-slate-800 bg-slate-900/60 p-3"
                >
                  <PXSmall className="text-[0.7rem]">{card.category}</PXSmall>
                  <PSmall className="mt-1 text-sm font-semibold text-slate-50">
                    {card.title}
                  </PSmall>
                  <PXSmall className="mt-1 text-[0.7rem]">
                    {card.description}
                  </PXSmall>
                </div>
              ))}
            </div>
            <PXSmall className="mt-4 text-[0.75rem]">{quote}</PXSmall>
          </div>
        </div>
      </div>
    </section>
  );
}
