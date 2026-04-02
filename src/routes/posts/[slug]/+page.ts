import { error } from '@sveltejs/kit';

export const load = async ({ params, url }) => {
    try {
        const modules = import.meta.glob('../../../lib/content/posts/*.md');
        let lang = url.searchParams.get('lang');

        const matchPath = `../../../lib/content/posts/${params.slug}.md`;
        const resolver = modules[matchPath];

        if (!resolver) {
            error(404, `Post not found: ${params.slug}`);
        }

        const post = await resolver() as any;
        const metadata = post.metadata;

        const availableLangs = {
          id: !!metadata.title_id || (!!metadata.title && !metadata.title_en),
          en: !!metadata.title_en
        };

        if (!lang) {
           lang = availableLangs.id ? 'id' : 'en';
        }

        const activeMeta = {
          title: lang === 'en' ? metadata.title_en : (metadata.title_id || metadata.title),
          date: metadata.date,
          dateDisplay: lang === 'en' ? (metadata.dateDisplay_en || metadata.dateDisplay || metadata.date) : (metadata.dateDisplay_id || metadata.dateDisplay || metadata.date),
          summary: lang === 'en' ? metadata.summary_en : (metadata.summary_id || metadata.summary),
          tags: metadata.tags || []
        };

        return {
            content: post.default,
            meta: activeMeta,
            lang,
            slug: params.slug,
            availableLangs
        };
    } catch (e) {
        console.error("Error loading markdown:", e);
        error(404, `Could not find a blog post with slug: ${params.slug}`);
    }
};
