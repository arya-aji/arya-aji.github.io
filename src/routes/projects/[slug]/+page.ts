import { error } from '@sveltejs/kit';
import { fetchProjects } from '$lib/data/projects';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = async () => {
  const projectsList = await fetchProjects();
  return projectsList.map(p => ({ slug: p.slug }));
};

export const load: PageLoad = async ({ params, fetch }) => {
  const projectsList = await fetchProjects(fetch);
  const project = projectsList.find(p => p.slug === params.slug);

  if (!project) {
    throw error(404, 'Project not found');
  }

  return {
    project
  };
};
