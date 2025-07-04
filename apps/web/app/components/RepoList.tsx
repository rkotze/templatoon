import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function RepoList() {
  const { data: session } = useSession();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      if (session?.accessToken) {
        try {
          const response = await fetch("https://api.github.com/user/repos", {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          });

          setRepos(await response.json());
        } catch (error) {
          console.log("RepoList: Failed to fetch repos: ", error);
        }
      }
    };
    fetchRepos();
  }, [session]);

  type GhRepo = {
    id: string;
    full_name: string;
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">GitHub Repositories</h1>
      <ul>
        {repos.map((repo: GhRepo) => (
          <li key={repo.id}>{repo.full_name}</li>
        ))}
      </ul>
    </div>
  );
}
