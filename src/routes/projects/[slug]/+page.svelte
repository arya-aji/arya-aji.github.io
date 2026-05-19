<script lang="ts">
  import type { PageData } from './$types';
  import { ArrowLeft, ExternalLink, ShieldCheck, ChevronRight } from 'lucide-svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { data }: { data: PageData } = $props();
  let project = $derived(data.project);
</script>

<svelte:head>
  <title>{project.title} - Project Details</title>
</svelte:head>

<Navbar />

<main class="project-page container pt-32 pb-32">
  <div class="breadcrumb">
    <a href="/projects">Projects</a>
    <ChevronRight size={14} class="separator" />
    <span class="current">{project.title}</span>
  </div>

  <div class="hero-section">
    {#if project.banner || project.image}
      <div class="hero-image-wrapper">
        <img src={project.banner || project.image} alt={project.title} class="hero-image" />
      </div>
    {/if}
    <div class="hero-content">
      <h1 class="project-title">{project.title}</h1>
      <p class="project-date">{project.dateDisplay}</p>
      
      <div class="tags">
        {#each project.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>

      <div class="action-buttons">
        {#if project.live}
          <a href={project.live} target="_blank" rel="noopener noreferrer" class="btn primary">
            <ExternalLink size={18} /> Live Demo
          </a>
        {/if}
        {#if project.href}
          <a href={project.href} target="_blank" rel="noopener noreferrer" class="btn outline">
            <ExternalLink size={18} /> Store Link
          </a>
        {/if}
        {#if project.privacyPolicy}
          <a href="/projects/{project.slug}/privacy-policy" class="btn secondary">
            <ShieldCheck size={18} /> Privacy Policy
          </a>
        {/if}
      </div>
    </div>
  </div>

  <div class="content-section">
    <div class="content-block">
      <h2>Overview</h2>
      <p>{project.longDesc || project.description}</p>
    </div>

    {#if project.idea}
      <div class="content-block">
        <h2>The Idea</h2>
        <p>{project.idea}</p>
      </div>
    {/if}

    {#if project.problem}
      <div class="content-block">
        <h2>The Problem</h2>
        <p>{project.problem}</p>
      </div>
    {/if}

    {#if project.solution}
      <div class="content-block">
        <h2>The Solution</h2>
        <p>{project.solution}</p>
      </div>
    {/if}

    {#if project.goal}
      <div class="content-block">
        <h2>The Goal</h2>
        <p>{project.goal}</p>
      </div>
    {/if}
  </div>
</main>

<Footer />

<style>
  .project-page {
    max-width: 900px;
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

  .hero-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .hero-image-wrapper {
    width: 100%;
    height: 400px;
    border-radius: 16px;
    overflow: hidden;
    background: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface1);
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }

  .project-title {
    font-size: 3rem;
    font-weight: 800;
    color: var(--ctp-text);
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  .project-date {
    color: var(--ctp-subtext0);
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 2rem;
  }

  .tag {
    padding: 4px 12px;
    background: var(--ctp-surface0);
    color: var(--ctp-text);
    border: 1px solid var(--ctp-surface1);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .action-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
  }

  .btn.primary {
    background: var(--accent);
    color: var(--ctp-base);
  }

  .btn.primary:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  .btn.outline {
    background: transparent;
    color: var(--ctp-text);
    border: 1px solid var(--ctp-surface2);
  }

  .btn.outline:hover {
    background: var(--ctp-surface0);
    border-color: var(--ctp-overlay0);
  }

  .btn.secondary {
    background: var(--ctp-surface1);
    color: var(--ctp-text);
  }

  .btn.secondary:hover {
    background: var(--ctp-surface2);
  }

  .content-section {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .content-block h2 {
    font-size: 1.8rem;
    color: var(--ctp-text);
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .content-block p {
    color: var(--ctp-subtext0);
    line-height: 1.8;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    .hero-image-wrapper {
      height: 250px;
    }
    .project-title {
      font-size: 2rem;
    }
    .content-block h2 {
      font-size: 1.5rem;
    }
  }
</style>
