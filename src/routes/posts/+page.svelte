<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';
  import { tagColors } from '$lib/data/colors';
  import { PAGINATION } from '$lib/config';

  let { data } = $props();
  
  let currentLang = $state('id');

  let langPosts = $derived(data.posts.map((post: any) => {
    const meta = post.meta[currentLang] || post.meta['id'] || Object.values(post.meta)[0];
    return { ...post, activeMeta: meta };
  }));

  let currentPage = $state(1);
  const itemsPerPage = PAGINATION.posts;
  
  let totalPages = $derived(Math.ceil(langPosts.length / itemsPerPage));
  let paginatedPosts = $derived(langPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));

  $effect(() => {
    // Reset page whenever language changes
    currentLang;
    currentPage = 1;
  });

  function handleCoverError(img: HTMLImageElement) {
    const src = img.getAttribute('src') || '';
    if (src.endsWith('.svg')) {
      img.setAttribute('src', src.replace('.svg', '.jpg'));
    } else if (src.endsWith('.jpg')) {
      img.setAttribute('src', src.replace('.jpg', '.png'));
    } else {
      img.onerror = null;
      img.parentElement!.style.display = 'none';
      (img.parentElement!.nextElementSibling as HTMLElement).style.display = 'flex';
    }
  }
</script>

<svelte:head>
  <title>Posts | Arya Aji Kusuma</title>
  <meta name="description" content="Blog posts by Arya Aji Kusuma on software development, geospatial tools, and more." />
</svelte:head>

<Navbar />

<main class="page-main">
  <div class="container">

    <!-- Breadcrumb -->
    <div class="header-row">
      <div class="header-titles">
        <h1 class="page-title">Posts</h1>
        <p class="page-subtitle">Thoughts on software, systems, and whatever else is rattling around my head.</p>
      </div>
      
      <div class="lang-switch">
        <button 
          class="lang-btn {currentLang === 'id' ? 'active' : ''}" 
          onclick={() => currentLang = 'id'}
        >
          ID
        </button>
        <button 
          class="lang-btn {currentLang === 'en' ? 'active' : ''}" 
          onclick={() => currentLang = 'en'}
        >
          EN
        </button>
      </div>
    </div>

    <div class="posts-list">
      {#each paginatedPosts as post}
        <a href="/posts/{post.slug}?lang={currentLang}" class="post-card">
          <div class="post-content">
            <div class="post-meta">
              <time class="post-date" datetime={post.activeMeta.date}>{post.activeMeta.dateDisplay}</time>
            </div>
            <h2 class="post-title">{post.activeMeta.title}</h2>
            <p class="post-summary">{post.activeMeta.summary}</p>
            <div class="post-tags">
              {#each post.activeMeta.tags as tag}
                <span class="tag" style="--tag-color: {tagColors[tag] ?? 'var(--accent)'}">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
          {#if post.activeMeta.image}
            <div class="post-image">
              <img
                src={post.activeMeta.image}
                alt={post.activeMeta.title}
                loading="lazy"
                onerror={(e) => { const img = e.currentTarget; img.onerror = null; img.parentElement.style.display = 'none'; img.parentElement.nextElementSibling.style.display = 'flex'; }}
              />
            </div>
            <div class="post-image-placeholder" style="display:none">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            </div>
          {:else}
            <div class="post-image">
              <img
                src="/posts/{post.slug}/cover.svg"
                alt={post.activeMeta.title}
                loading="lazy"
                onerror={(e) => handleCoverError(e.currentTarget)}
              />
            </div>
            <div class="post-image-placeholder" style="display:none">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            </div>
          {/if}
        </a>
      {/each}
    </div>

    <!-- Pagination Controls -->
    {#if totalPages > 1}
      <div class="pagination">
        <button 
          class="page-btn" 
          disabled={currentPage === 1} 
          onclick={() => currentPage--}
        >
          <ChevronLeft size={16} /> Previous
        </button>
        
        <div class="page-numbers">
          {#each Array(totalPages) as _, i}
            <button 
              class="page-num {currentPage === i + 1 ? 'active' : ''}" 
              onclick={() => currentPage = i + 1}
            >
              {i + 1}
            </button>
          {/each}
        </div>

        <button 
          class="page-btn" 
          disabled={currentPage === totalPages} 
          onclick={() => currentPage++}
        >
          Next <ChevronRight size={16} />
        </button>
      </div>
    {/if}
  </div>
</main>

<Footer />

<style>
  .page-main {
    min-height: calc(100vh - 64px);
    padding: 40px 0 32px;
  }

  .container {
    max-width: 860px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 40px;
  }

  .lang-switch {
    display: flex;
    background: var(--ctp-surface0);
    border-radius: 8px;
    padding: 4px;
    gap: 4px;
  }

  .lang-btn {
    padding: 6px 14px;
    font-size: 0.85rem;
    font-weight: 600;
    font-family: inherit;
    border-radius: 6px;
    background: transparent;
    border: none;
    color: var(--ctp-subtext0);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .lang-btn:hover {
    color: var(--ctp-text);
  }

  .lang-btn.active {
    background: color-mix(in srgb, var(--accent) 15%, transparent);
    color: var(--accent);
  }

  .page-title {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin-bottom: 10px;
  }

  .page-subtitle {
    font-size: 1rem;
    color: var(--ctp-subtext0);
    margin-bottom: 40px;
  }

  /* Posts list */
  .posts-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .post-card {
    display: flex;
    gap: 24px;
    align-items: stretch;
    padding: 24px 28px;
    border-radius: 14px;
    background: transparent;
    border: 1px solid transparent;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
    position: relative;
  }

  .post-image-placeholder {
    flex-shrink: 0;
    width: 140px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--ctp-surface0) 50%, transparent);
    border: 1px solid var(--ctp-surface1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ctp-overlay0);
    transition: all 0.2s ease;
  }

  .post-image {
    flex-shrink: 0;
    width: 140px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--ctp-surface1);
    transition: all 0.2s ease;
  }

  .post-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .post-card:hover .post-image {
    border-color: var(--accent);
  }

  .post-card:hover .post-image-placeholder {
    border-color: var(--accent);
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 10%, transparent);
  }

  .post-content {
    flex-grow: 1;
  }

  .post-card::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 0;
    background: var(--accent);
    border-radius: 0 2px 2px 0;
    transition: height 0.25s ease;
  }

  .post-card:hover {
    background: var(--ctp-mantle);
    border-color: var(--ctp-surface0);
    opacity: 1;
  }

  .post-card:hover::before {
    height: 60%;
  }

  .post-meta {
    margin-bottom: 6px;
  }

  .post-date {
    font-size: 0.78rem;
    color: var(--ctp-overlay1);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    letter-spacing: 0.02em;
  }

  .post-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--ctp-text);
    margin-bottom: 8px;
    transition: color 0.2s;
    line-height: 1.3;
  }

  .post-card:hover .post-title {
    color: var(--accent);
  }

  .post-summary {
    font-size: 0.9rem;
    color: var(--ctp-subtext0);
    line-height: 1.65;
    margin-bottom: 12px;
  }

  .post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 0.7rem;
    font-weight: 500;
    border: 1px solid var(--tag-color);
    color: var(--tag-color);
    background: color-mix(in srgb, var(--tag-color) 8%, transparent);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  @media (max-width: 600px) {
    .post-card {
      flex-direction: column;
      gap: 16px;
      padding: 18px 16px 18px 20px;
    }

    .post-image-placeholder {
      width: 100%;
      aspect-ratio: 2 / 1;
    }

    .post-image {
      width: 100%;
      aspect-ratio: 2 / 1;
    }
  }

  /* --- Pagination --- */
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 48px;
  }

  .page-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface1);
    border-radius: 8px;
    color: var(--ctp-text);
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .page-btn:hover:not(:disabled) {
    background: var(--ctp-surface1);
    color: var(--accent);
    border-color: var(--accent);
  }

  .page-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .page-numbers {
    display: flex;
    gap: 8px;
  }

  .page-num {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface1);
    border-radius: 8px;
    color: var(--ctp-text);
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .page-num:hover:not(.active) {
    background: var(--ctp-surface0);
  }

  .page-num.active {
    background: var(--accent);
    color: var(--ctp-crust);
    border-color: var(--accent);
  }

  @media (max-width: 640px) {
    .pagination {
      gap: 12px;
    }
    .page-btn {
      padding: 8px 12px;
      font-size: 0.8rem;
    }
    .page-num {
      width: 32px;
      height: 32px;
      font-size: 0.8rem;
    }
  }
</style>
