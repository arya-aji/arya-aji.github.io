import { browser } from '$app/environment';
import { projects, fetchProjects } from '$lib/data/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  if (browser) {
    return {
      projects
    };
  }
  try {
    const projectsList = await fetchProjects(fetch);
    return {
      projects: projectsList.length > 0 ? projectsList : projects
    };
  } catch (err) {
    return {
      projects
    };
  }
};
