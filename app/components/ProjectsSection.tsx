import { H2, H3, P, PXSmall } from "@/components/ui/typography";

interface Project {
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  stack: string;
}

interface ProjectsProps {
  title: string;
  description: string;
  note: string;
  projects: Project[];
}

export function ProjectsSection({
  title,
  description,
  note,
  projects,
}: ProjectsProps) {
  return (
    <section
      id="projects"
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
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <p
                className={`text-[0.65rem] font-medium uppercase tracking-[0.2em] ${project.categoryColor}`}
              >
                {project.category}
              </p>
              <H3 className="mt-2">{project.title}</H3>
              <P className="mt-2 text-sm">{project.description}</P>
              <PXSmall className="mt-3 text-slate-500">
                Stack: {project.stack}
              </PXSmall>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
