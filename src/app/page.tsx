import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { fetchRepos } from "@/lib/github";

export const dynamic = "force-dynamic";

const GITHUB_URL = "https://github.com/regulargeek";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/stephen-tanimowo-295b5a214/";
const EMAIL = "nifemiadebowale58@gmail.com";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur">
      <p className="text-sm text-white/70">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

export default async function Home() {
  const repos = await fetchRepos();


  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background image + overlay (keeps text readable) */}
      <div className="fixed inset-0 -z-10">
        {/* Use ONE of these depending on what you actually named your background file */}
        {/* If your background is public/stephen-bg.jpg keep as-is */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/stephen-bg.jpg)" }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-slate-950/70" />
        {/* Soft gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />
      </div>

      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* HERO */}
        <section className="pt-10">
          <p className="text-sm text-white/70">Lagos, Nigeria</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            Stephen Tanimowo
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Full-Stack Software Developer & DevSecOps Engineer. I build scalable
            web applications, design secure cloud infrastructure, and integrate
            security directly into the software development lifecycle.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-white/90"
            >
              View projects
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-sm backdrop-blur transition hover:bg-white/10"
            >
              Contact me
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-sm backdrop-blur transition hover:bg-white/10"
            >
              GitHub
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-sm backdrop-blur transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Stat label="Focus" value="Secure systems" />
            <Stat label="Strength" value="Full-stack + DevSecOps" />
            <Stat label="Availability" value="Contract / Project-based" />
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About" subtitle="Secure, scalable, production-ready systems.">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-white/80 leading-relaxed">
                I’m a full-stack software developer with strong expertise in
                DevSecOps and cloud security. I design and build end-to-end
                applications — from frontend interfaces to backend services —
                and I automate cloud infrastructure with security and reliability
                in mind.
              </p>

              <p className="mt-4 text-white/80 leading-relaxed">
                My work is centered around shipping production-ready systems:
                clean architecture, strong API design, CI/CD pipelines, IaC,
                and practical security controls.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-white">Quick links</p>
              <div className="mt-3 space-y-2 text-sm">
                <a
                  className="block text-white/80 hover:text-white"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub repositories →
                </a>
                <a
                  className="block text-white/80 hover:text-white"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn profile →
                </a>
                <a
                  className="block text-white/80 hover:text-white"
                  href={`mailto:${EMAIL}`}
                >
                  Email me →
                </a>
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {repos?.slice(0, 6)?.map((repo: any) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>

          <div className="mt-8">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-sm backdrop-blur transition hover:bg-white/10"
            >
              More projects on GitHub →
            </a>
          </div>
        </Section>

        {/* SKILLS */}
        <Section
          id="skills"
          title="Technical skills"
          subtitle="My core engineering, development, and security capabilities."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Full-Stack Development (Next.js, React, Node.js, Ruby on Rails)",
              "Backend & API Engineering (REST, Auth, Integrations)",
              "DevSecOps (CI/CD, secure SDLC, automation)",
              "Cloud (AWS, Azure) + security best practices",
              "Infrastructure as Code (Terraform)",
              "Containers & Orchestration (Docker, Kubernetes)",
            ].map((s) => (
              <div
                key={s}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/85 backdrop-blur"
              >
                {s}
              </div>
            ))}
          </div>
        </Section>

        {/* CERTIFICATIONS */}
        <Section
          id="certifications"
          title="Certifications"
          subtitle="Industry-recognized certifications across cloud, security, and DevSecOps."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "CCSA (Check Point Certified Security Administrator)",
              "Netwrix Certifications (6×)",
              "AWS Certifications (2×)",
              "Azure Certifications (2×)",
              "Imperva IASC",
              "ISC2 CC",
              "Imperva DAM",
            ].map((c) => (
              <div
                key={c}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/85 backdrop-blur"
              >
                {c}
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT (RESTORED + WHITE TEXT) */}
        <Section
          id="contact"
          title="Contact"
          subtitle="Let’s build something secure and scalable."
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-white/80">
              For contracts, consulting, or collaboration, you can reach me via email
              or connect with me on LinkedIn.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-950 shadow-sm transition hover:bg-white/90"
              >
                Email me
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-sm backdrop-blur transition hover:bg-white/10"
              >
                LinkedIn
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-sm backdrop-blur transition hover:bg-white/10"
              >
                GitHub
              </a>
            </div>

            <div className="mt-4 text-sm text-white/70">
              Email: <span className="text-white">{EMAIL}</span> • Phone:{" "}
              <span className="text-white">+2347040628708</span>
            </div>
          </div>
        </Section>

        <footer className="mt-12 pb-10 text-sm text-white/50">
          © {new Date().getFullYear()} Stephen Tanimowo • All rights reserved.
        </footer>
      </main>
    </div>
  );
}

