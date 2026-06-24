import type { Project } from "@/lib/portfolio";

type ProjectCardProps = {
  project: Project;
};

const statusStyles: Record<Project["status"], string> = {
  Completed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "Coming Soon": "bg-blue-50 text-blue-700 ring-blue-200",
  Planned: "bg-slate-100 text-slate-600 ring-slate-200",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isCompleted = project.status === "Completed";

  return (
    <article
      className={
        isCompleted
          ? "flex h-full flex-col rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-slate-200/80"
          : "flex h-full flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm"
      }
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight text-slate-950">
          {project.title}
        </h3>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-4 flex-1 whitespace-pre-line text-sm leading-6 text-slate-600">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} tags`}>
        {project.badges.map((badge) => (
          <li
            key={badge}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {badge}
          </li>
        ))}
      </ul>

      {isCompleted && project.actions ? (
        <div className="mt-7 grid gap-2 sm:grid-cols-2">
          {project.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {action.label}
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-7 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
          Project brief in development
        </p>
      )}
    </article>
  );
}
