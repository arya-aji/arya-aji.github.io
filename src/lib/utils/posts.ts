export interface PostMetadata {
  title: string;
  date: string;
  dateDisplay: string;
  summary: string;
  tags: string[];
  image?: string;
}

export interface BlogPost {
  slug: string;
  meta: Record<string, PostMetadata>; // { id: meta, en: meta }
  availableLangs: string[];
}

export const fetchPosts = async (): Promise<BlogPost[]> => {
  const allPostFiles = import.meta.glob('/src/lib/content/posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver() as { metadata: Record<string, any> };
      
      const parts = path.split('/');
      const filename = parts[parts.length - 1];
      const slug = filename.replace('.md', '');

      const meta: Record<string, PostMetadata> = {};
      const availableLangs: string[] = [];

      const image = metadata.image || undefined;

      // Check ID
      if (metadata.title_id) {
          meta['id'] = {
              title: metadata.title_id,
              date: metadata.date,
              dateDisplay: metadata.dateDisplay_id || metadata.dateDisplay || metadata.date,
              summary: metadata.summary_id,
              tags: metadata.tags || [],
              image
          };
          availableLangs.push('id');
      }

      // Check EN
      if (metadata.title_en) {
          meta['en'] = {
              title: metadata.title_en,
              date: metadata.date,
              dateDisplay: metadata.dateDisplay_en || metadata.dateDisplay || metadata.date,
              summary: metadata.summary_en,
              tags: metadata.tags || [],
              image
          };
          availableLangs.push('en');
      }

      // Fallback if no localized prefixes exist
      if (availableLangs.length === 0 && metadata.title) {
          meta['id'] = {
              title: metadata.title,
              date: metadata.date,
              dateDisplay: metadata.dateDisplay || metadata.date,
              summary: metadata.summary,
              tags: metadata.tags || [],
              image
          };
          availableLangs.push('id');
      }
      
      return {
          slug,
          meta,
          availableLangs
      } satisfies BlogPost;
    })
  );

  // Sort by date (newest first)
  const sortedPosts = allPosts.sort((a, b) => {
    const dateA = new Date(a.meta.id?.date || Object.values(a.meta)[0]?.date).getTime();
    const dateB = new Date(b.meta.id?.date || Object.values(b.meta)[0]?.date).getTime();
    return dateB - dateA;
  });

  return sortedPosts;
};
