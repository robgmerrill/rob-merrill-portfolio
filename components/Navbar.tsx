import { profile } from "@/lib/portfolio";

export function Navbar() {
  return (
    <header className="border-b border-white/10 bg-slate-950/95 text-white">
      <nav
        className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-bold tracking-wide text-white shadow-sm transition group-hover:border-blue-300/50">
            {profile.initials}
          </span>
          <span>
            <span className="block text-base font-semibold leading-none">
              {profile.name}
            </span>
            <span className="mt-1 block text-xs text-slate-300">
              {profile.role}
            </span>
          </span>
        </a>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:justify-end lg:gap-x-8">
          {profile.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
