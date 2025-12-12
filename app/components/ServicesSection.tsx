import { H2, H3, P, PSmall, PXSmall } from "@/components/ui/typography";

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
  return (
    <section
      id="services"
      className="border-b border-slate-800/70 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <H2>{title}</H2>
            <P className="mt-2 max-w-xl">{description}</P>
          </div>
          <PXSmall className="text-slate-500">{note}</PXSmall>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
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
