import { H2, H3, P, PXSmall, Label } from "@/components/ui/typography";

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
  return (
    <section id="process" className="border-b border-slate-800/70 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="max-w-xl">
          <H2>{title}</H2>
          <P className="mt-2">{description}</P>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
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
