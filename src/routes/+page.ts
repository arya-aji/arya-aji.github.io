import { fetchProjects } from '$lib/data/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const projectsList = await fetchProjects(fetch);
  return {
    projects: projectsList
  };
};
