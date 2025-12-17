"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PXSmall } from "@/components/ui/typography";

gsap.registerPlugin(ScrollTrigger);

interface FooterProps {
  copyright: string;
  location: string;
  email: string;
}

export function Footer({ copyright, location, email }: FooterProps) {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none reset",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="overflow-hidden bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <PXSmall className="text-slate-500">{copyright}</PXSmall>
        <div className="flex flex-wrap gap-3">
          <span>{location}</span>
          <span className="hidden text-slate-600 sm:inline">·</span>
          <a
            href={`mailto:${email}`}
            className="text-slate-400 hover:text-slate-200"
          >
            {email}
          </a>
        </div>
      </div>
    </footer>
  );
}
