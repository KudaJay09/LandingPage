import Link from "next/link";
import Image from "next/image";
import {
  H1,
  H2,
  H3,
  P,
  PSmall,
  PXSmall,
  Badge,
  Label,
} from "@/components/ui/typography";

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
  return (
    <section className="border-b border-slate-800/70 bg-linear-to-b from-slate-950 to-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
        <div className="flex-1">
          <Badge className="mb-3">{badge}</Badge>
          <H1>
            {title}
            <span className="block text-transparent bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text">
              {highlight}
            </span>
          </H1>
          <P className="mt-5 max-w-xl leading-relaxed text-slate-300">
            {description}
          </P>

          <div className="mt-7 flex flex-wrap items-center gap-3">
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

          <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-400 sm:text-sm">
            {features.map((feature, idx) => (
              <span key={idx} className="inline-flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${feature.color}`} />
                {feature.text}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex-1 md:mt-0">
          <div className="relative mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-blue-500/10">
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
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3"
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
