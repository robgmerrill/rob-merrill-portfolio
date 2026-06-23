import { hero, summarySections } from "@/lib/portfolio";
import { SummaryPanel } from "./SummaryPanel";

export function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {hero.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={
                  action.variant === "primary"
                    ? "inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                    : "inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-300/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                }
              >
                {action.label}
              </a>
            ))}
          </div>

          <ul className="mt-9 flex flex-wrap gap-3" aria-label="Professional capabilities">
            {hero.roleTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-xs font-medium text-slate-200"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pt-5">
          <SummaryPanel sections={summarySections} />
        </div>
      </div>
    </section>
  );
}
