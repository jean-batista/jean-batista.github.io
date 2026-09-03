import type { ProjectStatus } from '../types/ProjectStatus';

export type RepoModel = {
  name: string;
  description: string;
  topics: Array<string>;
  status: ProjectStatus;
  html_url: string;
};
