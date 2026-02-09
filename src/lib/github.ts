export type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  homepage?: string | null;
  topics?: string[];
};

const GITHUB_USER = "RegularGeek";

export async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return [];
  return (await res.json()) as Repo[];
}
