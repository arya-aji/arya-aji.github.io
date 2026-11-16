import { error } from '@sveltejs/kit';
import { work, getWork } from '$lib/data/work';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => work.map((w) => ({ slug: w.slug }));

export const load: PageLoad = ({ params }) => {
	const item = getWork(params.slug);
	if (!item) error(404, 'Project not found');
	const others = work.filter((w) => w.slug !== item.slug).slice(0, 2);
	return { item, others };
};
