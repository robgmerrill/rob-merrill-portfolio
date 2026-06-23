import type { SummarySection } from "@/lib/portfolio";

type SummaryPanelProps = {
  sections: SummarySection[];
};

export function SummaryPanel({ sections }: SummaryPanelProps) {
  return (
    <aside
      id="about"
      aria-label="Professional summary"
      className="rounded-3xl border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-blue-950/30 backdrop-blur md:p-8"
    >
      <div className="space-y-7">
        {sections.map((section) => (
          <section key={section.title} className="border-b border-white/10 pb-7 last:border-0 last:pb-0">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              {section.title}
            </h2>
            {section.body ? (
              <p className="mt-3 text-sm leading-6 text-slate-200">
                {section.body}
              </p>
            ) : null}
            {section.items ? (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={section.title}>
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </aside>
  );
}
