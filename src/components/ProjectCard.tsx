import type { Repo } from "@/lib/github";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700">
      {children}
    </span>
  );
}

export default function ProjectCard({ repo }: { repo: Repo }) {
  const updated = new Date(repo.pushed_at).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
  });

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900 group-hover:underline">
            {repo.name}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm text-slate-600">
            {repo.description ?? "No description provided yet."}
          </p>
        </div>
        <span className="text-xs text-slate-500">Updated {updated}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {repo.language ? <Badge>{repo.language}</Badge> : null}
        <Badge>★ {repo.stargazers_count}</Badge>
        <Badge>⑂ {repo.forks_count}</Badge>
      </div>
    </a>
  );
}
