import { browser } from '$app/environment';
import { projects, fetchProjects, projectsCache } from '$lib/data/projects';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  if (browser) {
    const cached = get(projectsCache);
    if (cached && cached.length > 0) {
      return {
        projects: cached
      };
    }
    return {
      projects: []
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
