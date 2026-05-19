<script lang="ts">
  import type { PageData } from './$types';
  import { ChevronRight, ShieldCheck } from 'lucide-svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { data }: { data: PageData } = $props();
  let project = $derived(data.project);
</script>

<svelte:head>
  <title>Privacy Policy - {project.title}</title>
</svelte:head>

<Navbar />

<main class="privacy-page container pt-32 pb-32">
  <div class="breadcrumb">
    <a href="/projects">Projects</a>
    <ChevronRight size={14} class="separator" />
    <a href="/projects/{project.slug}">{project.title}</a>
    <ChevronRight size={14} class="separator" />
    <span class="current">Privacy Policy</span>
  </div>

  <div class="content-wrapper">
    <div class="header-section">
      <div class="icon-container">
        <ShieldCheck size={48} strokeWidth={1.5} />
      </div>
      <h1 class="page-title">Privacy Policy</h1>
      <p class="subtitle">For <strong>{project.title}</strong></p>
    </div>
    
    <div class="prose">
      {@html data.privacyPolicy}
    </div>
  </div>
</main>

<Footer />

<style>
  .privacy-page {
    max-width: 800px;
    margin: 0 auto;
    min-height: calc(100vh - 64px);
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 2rem;
    font-size: 0.95rem;
    font-weight: 500;
  }

  .breadcrumb a {
    color: var(--ctp-subtext0);
    text-decoration: none;
    transition: color 0.2s;
  }

  .breadcrumb a:hover {
    color: var(--accent);
  }

  .breadcrumb .separator {
    color: var(--ctp-surface2);
  }

  .breadcrumb .current {
    color: var(--ctp-text);
  }

  .content-wrapper {
    background: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface1);
    border-radius: 24px;
    padding: 4rem;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
  }

  .header-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 4rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--ctp-surface1);
  }

  .icon-container {
    width: 90px;
    height: 90px;
    background: color-mix(in srgb, var(--accent) 15%, transparent);
    color: var(--accent);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .page-title {
    font-size: 3rem;
    font-weight: 800;
    color: var(--ctp-text);
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
  }

  .subtitle {
    font-size: 1.2rem;
    color: var(--ctp-subtext0);
  }

  .subtitle strong {
    color: var(--ctp-text);
  }

  .prose :global(h3) {
    font-size: 1.3rem;
    color: var(--ctp-text);
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .prose :global(h3::before) {
    content: '';
    display: block;
    width: 6px;
    height: 24px;
    background: var(--accent);
    border-radius: 4px;
  }

  .prose :global(p) {
    color: var(--ctp-subtext0);
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
    padding-left: 18px;
  }

  .prose :global(strong) {
    color: var(--ctp-text);
    font-weight: 700;
  }

  .prose :global(em) {
    color: var(--ctp-text);
    font-style: italic;
    background: var(--ctp-surface1);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.95em;
  }

  @media (max-width: 768px) {
    .content-wrapper {
      padding: 2rem;
      border-radius: 16px;
    }
    .page-title {
      font-size: 2rem;
    }
    .icon-container {
      width: 70px;
      height: 70px;
    }
    .icon-container :global(svg) {
      width: 36px;
      height: 36px;
    }
    .prose :global(p) {
      padding-left: 0;
    }
  }
</style>
