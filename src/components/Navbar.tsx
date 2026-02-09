const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold text-slate-900">
          Stephen Tanimowo
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}

          {/* GitHub */}
          <a
            href="https://github.com/RegularGeek"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-slate-900"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56v-2.02c-3.2.7-3.88-1.55-3.88-1.55-.52-1.34-1.27-1.7-1.27-1.7-1.04-.72.08-.71.08-.71 1.15.08 1.75 1.19 1.75 1.19 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.64.24 2.86.12 3.16.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.67.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/stephen-tanimowo-295b5a214/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-slate-900"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.5.5h-21C.67.5 0 1.17 0 2v20c0 .83.67 1.5 1.5 1.5h21c.83 0 1.5-.67 1.5-1.5V2c0-.83-.67-1.5-1.5-1.5z" />
            </svg>
          </a>
        </nav>

        {/* LET'S TALK → EMAIL */}
        <a
          href="mailto:nifemiadebowale58@gmail.com"
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
        >
          Let’s talk
        </a>
      </div>
    </header>
  );
}
