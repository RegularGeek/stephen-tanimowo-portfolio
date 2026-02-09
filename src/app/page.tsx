import Image from "next/image";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { fetchRepos } from "@/lib/github";
import { FEATURED_REPOS } from "@/lib/featured";

export default async function Page() {
  const repos = await fetchRepos();

  const featured = repos
    .filter((r) => FEATURED_REPOS.includes(r.name))
    .sort(
      (a, b) => FEATURED_REPOS.indexOf(a.name) - FEATURED_REPOS.indexOf(b.name)
    );

  const moreProjects = repos
    .filter((r) => !FEATURED_REPOS.includes(r.name))
    .filter((r) => (r.description ?? "").trim().length > 0)
    .sort((a, b) => {
      const ad = new Date(a.pushed_at).getTime();
      const bd = new Date(b.pushed_at).getTime();
      if (bd !== ad) return bd - ad;
      return b.stargazers_count - a.stargazers_count;
    })
    .slice(0, 8);

  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />

      {/* HERO */}
      <main className="mx-auto max-w-6xl px-6">
        <section className="py-16">
          <p className="text-sm font-medium text-slate-300">
            Lagos, Nigeria
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Stephen Tanimowo
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Full-Stack Software Developer & DevSecOps Engineer. I build scalable web
            applications, design secure cloud infrastructure, and integrate security
            directly into the software development lifecycle.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/RegularGeek"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-200"
            >
              View projects
            </a>

            <a
              href="mailto:nifemiadebowale58@gmail.com"
              className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              Contact me
            </a>

            <a
              href="https://github.com/RegularGeek"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      {/* ABOUT */}
      <Section
        id="about"
        title="About"
        subtitle="Full-stack development with DevSecOps discipline — secure, scalable, production-ready systems."
      >
        <div className="grid items-start gap-8 md:grid-cols-3">
          {/* Portrait */}
          <div className="flex justify-center md:justify-start">
            <div className="relative h-40 w-40">
              <Image
                src="/stephen-portrait.png"
                alt="Stephen Tanimowo"
                fill
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </div>
          </div>

          {/* About text */}
          <div className="md:col-span-2 grid gap-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm text-slate-700">
              <p>
                I’m a full-stack software developer with strong expertise in DevSecOps
                and cloud security. I design and build end-to-end applications — from
                frontend interfaces to backend services — while ensuring infrastructure,
                CI/CD pipelines, and security controls are production-ready.
                <br />
                <br />
                My work spans web applications, cloud-native systems, SIEM deployments,
                compliance automation (ISO 27001, PCI DSS, GDPR), and incident response
                tooling.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm text-slate-700">
              <p className="text-sm font-semibold">Focus areas</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Full-Stack Web Apps</li>
                <li>• DevSecOps & CI/CD</li>
                <li>• Cloud Security (AWS/Azure)</li>
                <li>• SIEM & Detection</li>
                <li>• Compliance Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        title="Projects"
        subtitle="Featured work plus more active repositories from my GitHub."
      >
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {featured.map((repo) => (
            <ProjectCard key={repo.name} repo={repo} />
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {moreProjects.map((repo) => (
            <ProjectCard key={repo.name} repo={repo} />
          ))}
        </div>
      </Section>

      <footer className="border-t border-white/10 bg-transparent">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-400">
          © {new Date().getFullYear()} Stephen Tanimowo. Built with Next.js.
        </div>
      </footer>
    </div>
  );
}
