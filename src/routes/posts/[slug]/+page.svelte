<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { ArrowLeft, Calendar } from 'lucide-svelte';

  let { data } = $props();
  let PostContent = $derived(data.content);
</script>

<svelte:head>
  <title>{data.meta.title} | Arya Aji Kusuma</title>
  <meta name="description" content={data.meta.summary} />
</svelte:head>

<Navbar />

<main class="page-main">
  <article class="post-article">
    <div class="post-header">
      <div class="header-nav">
        <a href="/posts" class="back-link">
          <ArrowLeft size={18} /> Back to posts
        </a>
        
        {#if data.availableLangs.en && data.availableLangs.id}
          <div class="post-lang-toggle">
            <a href="?lang=id" class="lang-badge {data.lang !== 'en' ? 'active' : ''}">ID</a>
            <span class="lang-div">/</span>
            <a href="?lang=en" class="lang-badge {data.lang === 'en' ? 'active' : ''}">EN</a>
          </div>
        {/if}
      </div>
      
      <h1 class="post-title">{data.meta.title}</h1>
      
      <div class="post-meta">
        <Calendar size={16} />
        <time datetime={data.meta.date}>{data.meta.dateDisplay}</time>
      </div>

      <div class="post-tags">
        {#each data.meta.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    </div>

    <!-- The Svelte Component output of MDSvex -->
    <div class="markdown-body">
      <PostContent currentLang={data.lang} />
    </div>
  </article>
</main>

<Footer />

<style>
  .page-main {
    min-height: calc(100vh - 64px);
    padding: 60px 0 60px;
  }

  .post-article {
    max-width: 760px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--ctp-subtext0);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.2s;
  }

  .back-link:hover {
    color: var(--accent);
  }

  .post-lang-toggle {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--ctp-surface0);
    padding: 4px 10px;
    border-radius: 999px;
  }

  .lang-badge {
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--ctp-subtext0);
    transition: all 0.2s;
  }

  .lang-badge:hover { color: var(--ctp-text); }
  .lang-badge.active { color: var(--accent); }
  .lang-div { color: var(--ctp-surface1); font-size: 0.8rem; }

  .post-header {
    margin-bottom: 48px;
    padding-bottom: 32px;
    border-bottom: 1px dashed var(--ctp-surface1);
  }

  .post-title {
    font-size: 2.8rem;
    font-weight: 800;
    color: var(--ctp-text);
    line-height: 1.25;
    margin-bottom: 24px;
    letter-spacing: -0.02em;
  }

  .post-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--ctp-overlay1);
    font-size: 0.95rem;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    margin-bottom: 20px;
  }

  .post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tag {
    display: inline-flex;
    padding: 4px 12px;
    background: var(--ctp-surface0);
    color: var(--ctp-text);
    border: 1px solid var(--ctp-surface1);
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 500;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  @media (max-width: 640px) {
    .post-title {
      font-size: 2.2rem;
    }
  }

  /* --- Markdown Body Global Styles --- */
  .markdown-body {
    font-size: 1.1rem;
    line-height: 1.75;
    color: var(--ctp-subtext1);
  }

  :global(.markdown-body h2) {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin-top: 2em;
    margin-bottom: 1em;
  }

  :global(.markdown-body h3) {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin-top: 1.5em;
    margin-bottom: 1em;
  }

  :global(.markdown-body p) {
    margin-bottom: 1.5em;
  }

  :global(.markdown-body a) {
    color: var(--accent);
    text-decoration: underline;
    text-decoration-style: dotted;
    text-underline-offset: 4px;
    transition: all 0.2s;
  }

  :global(.markdown-body a:hover) {
    opacity: 0.8;
  }

  :global(.markdown-body ul), :global(.markdown-body ol) {
    margin-bottom: 1.5em;
    padding-left: 1.5em;
  }

  :global(.markdown-body li) {
    margin-bottom: 0.5em;
  }

  :global(.markdown-body blockquote) {
    border-left: 4px solid var(--accent);
    background: color-mix(in srgb, var(--ctp-surface0) 50%, transparent);
    margin: 1.5em 0;
    padding: 1em 1.5em;
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: var(--ctp-subtext0);
  }

  :global(.markdown-body pre) {
    background: var(--ctp-mantle);
    padding: 1.25em;
    border-radius: 12px;
    overflow-x: auto;
    margin-bottom: 1.5em;
    border: 1px solid var(--ctp-surface0);
  }

  :global(.markdown-body code) {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.9em;
    background: var(--ctp-surface0);
    padding: 0.2em 0.4em;
    border-radius: 4px;
    color: var(--ctp-text);
  }

  :global(.markdown-body pre code) {
    background: transparent;
    padding: 0;
    border-radius: 0;
    color: inherit;
  }

  /* Syntax highlighting (Prism tokens, Catppuccin Mocha) */
  :global(.markdown-body code .token.comment),
  :global(.markdown-body code .token.prolog),
  :global(.markdown-body code .token.doctype),
  :global(.markdown-body code .token.cdata) {
    color: var(--ctp-overlay1);
    font-style: italic;
  }

  :global(.markdown-body code .token.punctuation) {
    color: var(--ctp-overlay2);
  }

  :global(.markdown-body code .token.keyword),
  :global(.markdown-body code .token.important),
  :global(.markdown-body code .token.atrule) {
    color: var(--ctp-mauve);
  }

  :global(.markdown-body code .token.string),
  :global(.markdown-body code .token.attr-value),
  :global(.markdown-body code .token.template-string) {
    color: var(--ctp-green);
  }

  :global(.markdown-body code .token.number),
  :global(.markdown-body code .token.boolean) {
    color: var(--ctp-peach);
  }

  :global(.markdown-body code .token.function) {
    color: var(--ctp-blue);
  }

  :global(.markdown-body code .token.class-name),
  :global(.markdown-body code .token.builtin) {
    color: var(--ctp-yellow);
  }

  :global(.markdown-body code .token.property),
  :global(.markdown-body code .token.constant),
  :global(.markdown-body code .token.symbol) {
    color: var(--ctp-peach);
  }

  :global(.markdown-body code .token.operator) {
    color: var(--ctp-sky);
  }

  :global(.markdown-body code .token.tag) {
    color: var(--ctp-flamingo);
  }

  :global(.markdown-body code .token.attr-name) {
    color: var(--ctp-yellow);
  }

  :global(.markdown-body code .token.selector) {
    color: var(--ctp-mauve);
  }

  :global(.markdown-body code .token.regex) {
    color: var(--ctp-teal);
  }

  :global(.markdown-body code .token.variable) {
    color: var(--ctp-red);
  }

  :global(.markdown-body code .token.inserted) {
    color: var(--ctp-green);
  }

  :global(.markdown-body code .token.deleted) {
    color: var(--ctp-red);
  }

  :global(.markdown-body img) {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin: 1.5em 0;
    border: 1px solid var(--ctp-surface1);
    display: block;
  }
</style>
