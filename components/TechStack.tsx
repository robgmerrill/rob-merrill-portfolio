import { techStack } from "@/lib/portfolio";

export function TechStack() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="tech-stack-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Delivery toolkit
              </p>
              <h2
                id="tech-stack-heading"
                className="mt-3 text-3xl font-semibold tracking-tight text-slate-950"
              >
                Tools & Technologies
              </h2>
            </div>

            <ul className="flex max-w-3xl flex-wrap gap-3">
              {techStack.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
