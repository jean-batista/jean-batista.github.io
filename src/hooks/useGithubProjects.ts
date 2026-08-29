import { useEffect, useState } from 'react';
import { GITHUB_API } from '../constants/links';
import { HIDDEN_TOPICS, TARGET_TOPICS } from '../constants/topics';
import type { RepoModel } from '../models/RepoModel';
import { useFetch } from './useFetch';

export function useGithubProjects() {
  const [repos, setRepos] = useState<Array<RepoModel> | null>(null);
  const { request, loading } = useFetch();

  useEffect(() => {
    const fetchProjects = async () => {
      const data: Array<RepoModel> = await request({ url: GITHUB_API });

      if (data) {
        const filteredRepos = data.filter(repo =>
          repo.topics?.some(topic => TARGET_TOPICS.includes(topic)),
        );

        const cleanedRepos = filteredRepos.map(repo => ({
          ...repo,
          topics: repo.topics?.filter(topic => !HIDDEN_TOPICS.includes(topic)),
        }));

        setRepos(cleanedRepos);
      }
    };

    fetchProjects();

    window.addEventListener('online', fetchProjects);

    return () => {
      window.removeEventListener('online', fetchProjects);
    };
  }, []);

  return { repos, loading };
}
