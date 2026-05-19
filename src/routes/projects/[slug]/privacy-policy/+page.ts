import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    throw error(404, 'Project not found');
  }

  if (!project.privacyPolicy) {
    throw error(404, 'Privacy Policy not found for this project');
  }

  return {
    project,
    privacyPolicy: project.privacyPolicy
  };
};
