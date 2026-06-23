import { footerLinks, profile } from "@/lib/portfolio";

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-300">{profile.role}</p>
          <p className="mt-4 text-xs text-slate-400">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer links" className="flex flex-wrap gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={isExternalLink(link.href) ? "_blank" : undefined}
              rel={isExternalLink(link.href) ? "noreferrer" : undefined}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
