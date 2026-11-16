import { site } from '$lib/site';
import { work } from '$lib/data/work';
import { notes } from '$lib/data/notes';

export const prerender = true;

export function GET() {
	const today = new Date().toISOString().slice(0, 10);
	const urls: { loc: string; lastmod?: string; priority: string }[] = [
		{ loc: '/', priority: '1.0' },
		{ loc: '/projects', priority: '0.9' },
		...work.map((w) => ({ loc: `/projects/${w.slug}`, priority: '0.8' })),
		{ loc: '/notes', priority: '0.7' },
		...notes.map((n) => ({ loc: `/notes/${n.slug}`, lastmod: n.updated ?? n.date, priority: '0.7' })),
		{ loc: '/about', priority: '0.6' },
		{ loc: '/contact', priority: '0.6' },
		{ loc: '/resume', priority: '0.5' }
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(u) =>
			`  <url><loc>${site.url}${u.loc === '/' ? '/' : u.loc}</loc><lastmod>${u.lastmod ?? today}</lastmod><priority>${u.priority}</priority></url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
