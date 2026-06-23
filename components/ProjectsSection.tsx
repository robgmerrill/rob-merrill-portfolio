import { projects } from "@/lib/portfolio";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-slate-50 py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Featured portfolio work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Featured Work
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Practical implementation examples focused on operational workflows,
            stakeholder clarity, and maintainable technical delivery.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
