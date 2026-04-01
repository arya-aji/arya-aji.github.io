<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { Star, Tag, ExternalLink } from 'lucide-svelte';

  interface Project {
    slug: string;
    title: string;
    date: string;
    dateDisplay: string;
    description: string;
    tags: string[];
    stars?: number;
    href?: string;
    featured?: boolean;
  }

  const projects: Project[] = [
    {
      slug: 'geomon',
      title: 'Geomon',
      date: '2025-10-02',
      dateDisplay: 'Oct 2025',
      description: 'A geospatial monitoring app for BPS Jakarta Pusat. Tracks and visualizes statistical work area data in real-time.',
      tags: ['svelte', 'geospasial', 'monitoring', 'bps', 'vercel'],
      href: 'https://github.com/arya-aji/geomon',
      featured: true
    },
    {
      slug: 'script-matchapro-mobile',
      title: 'MatchaPro Mobile Script',
      date: '2026-01-18',
      dateDisplay: 'Jan 2026',
      description: 'Automation script for MatchaPro Mobile. Built with Python to automate workflows within the mobile application.',
      tags: ['python', 'automation', 'mobile', 'scripting'],
      href: 'https://github.com/arya-aji/script-matchapro-mobile',
      featured: true
    },
    {
      slug: 'sbr-dashboard',
      title: 'SBR Dashboard',
      date: '2024-07-04',
      dateDisplay: 'Jul 2024',
      description: 'A TypeScript-based data visualization dashboard with a modern and interactive UI. Live on Vercel.',
      tags: ['typescript', 'dashboard', 'data-visualization', 'vercel'],
      href: 'https://github.com/arya-aji/sbr-dashboard'
    },
    {
      slug: 'polly-vote',
      title: 'Polly Vote',
      date: '2025-08-13',
      dateDisplay: 'Aug 2025',
      description: 'A secure and easy-to-use web-based e-voting system. Built with JavaScript for digital polling and voting needs.',
      tags: ['javascript', 'e-voting', 'web', 'polling'],
      href: 'https://github.com/arya-aji/polly-vote'
    },
    {
      slug: 'geocoding-auto',
      title: 'Geocoding Auto',
      date: '2025-12-29',
      dateDisplay: 'Dec 2025',
      description: 'A Python-based geocoding automation tool to batch-convert addresses to geographic coordinates efficiently.',
      tags: ['python', 'geocoding', 'automation', 'geospasial'],
      href: 'https://github.com/arya-aji/geocoding_auto'
    },
    {
      slug: 'automation',
      title: 'Automation Scripts',
      date: '2025-06-09',
      dateDisplay: 'Jun 2025',
      description: 'A collection of Python scripts to automate various routine tasks and workflows. Covers use cases from data processing to file management.',
      tags: ['python', 'automation', 'scripting', 'productivity'],
      href: 'https://github.com/arya-aji/automation'
    },
    {
      slug: 'poly-ind',
      title: 'Poly Ind',
      date: '2025-08-20',
      dateDisplay: 'Aug 2025',
      description: 'A JavaScript web app deployed to Vercel. A web development project with a modern UI.',
      tags: ['javascript', 'web', 'vercel'],
      href: 'https://github.com/arya-aji/poly-ind'
    },
    {
      slug: 'sanqua',
      title: 'Sanqua',
      date: '2025-04-26',
      dateDisplay: 'Apr 2025',
      description: 'A JavaScript web project hosted on GitHub Pages. Displays interactive content accessible directly in the browser.',
      tags: ['javascript', 'web', 'github-pages'],
      href: 'https://github.com/arya-aji/sanqua'
    },
    {
      slug: 'web-portfolio',
      title: 'Web Portfolio',
      date: '2026-04-01',
      dateDisplay: 'Apr 2026',
      description: 'This very portfolio website! Built with SvelteKit, TypeScript, and a customizable Catppuccin theme.',
      tags: ['svelte', 'sveltekit', 'typescript', 'portfolio', 'catppuccin'],
      href: 'https://github.com/arya-aji',
      featured: true
    }
  ];

  const tagColors: Record<string, string> = {
    golang: 'var(--ctp-sapphire)', 'distributed-systems': 'var(--ctp-blue)',
    mapreduce: 'var(--ctp-teal)', hadoop: 'var(--ctp-yellow)', p2p: 'var(--ctp-green)',
    'web-ui': 'var(--ctp-lavender)', svelte: 'var(--ctp-flamingo)',
    security: 'var(--ctp-red)', ai: 'var(--ctp-mauve)', 'anti-bot': 'var(--ctp-peach)',
    defense: 'var(--ctp-green)', 'proof-of-work': 'var(--ctp-yellow)',
    sveltekit: 'var(--ctp-flamingo)', typescript: 'var(--ctp-blue)', portfolio: 'var(--ctp-lavender)',
    meta: 'var(--ctp-teal)', privacy: 'var(--ctp-green)', encryption: 'var(--ctp-sky)',
    'photo-sharing': 'var(--ctp-rosewater)', 'web-development': 'var(--ctp-blue)',
    django: 'var(--ctp-green)', caddy: 'var(--ctp-sapphire)', flower: 'var(--ctp-peach)',
    postgres: 'var(--ctp-blue)', valkey: 'var(--ctp-red)', docker: 'var(--ctp-blue)',
    hackathons: 'var(--ctp-mauve)', gin: 'var(--ctp-teal)', redis: 'var(--ctp-red)',
    analytics: 'var(--ctp-lavender)', kubernetes: 'var(--ctp-blue)', k3s: 'var(--ctp-sapphire)',
    cybersecurity: 'var(--ctp-red)', ctf: 'var(--ctp-peach)', bootstrap: 'var(--ctp-mauve)',
    education: 'var(--ctp-green)', react: 'var(--ctp-sky)', express: 'var(--ctp-yellow)',
    cohere: 'var(--ctp-pink)', hackathon: 'var(--ctp-flamingo)', fintech: 'var(--ctp-green)',
    python: 'var(--ctp-blue)', opencv: 'var(--ctp-teal)', html: 'var(--ctp-peach)',
    scss: 'var(--ctp-pink)', praw: 'var(--ctp-orange)', playwright: 'var(--ctp-green)',
    ffmpeg: 'var(--ctp-red)', automation: 'var(--ctp-sky)', 'react-native': 'var(--ctp-sky)',
    devops: 'var(--ctp-green)', cloudflare: 'var(--ctp-peach)', 'github-pages': 'var(--ctp-overlay2)',
    blog: 'var(--ctp-lavender)', web: 'var(--ctp-blue)'
  };
</script>

<svelte:head>
  <title>Projects | Jason Cameron</title>
  <meta name="description" content="Projects built by Jason Cameron — from distributed systems to AI tools." />
</svelte:head>

<Navbar />

<main class="page-main">
  <div class="container">

    <!-- Breadcrumb -->
    <h1 class="page-title">Projects</h1>
    <p class="page-subtitle">{projects.length} projects built over the years. Click any to learn more.</p>

    <div class="projects-grid">
      {#each projects as project}
        <a
          href={project.href ?? `/projects/${project.slug}`}
          target={project.href ? '_blank' : undefined}
          rel={project.href ? 'noopener noreferrer' : undefined}
          class="project-card"
          class:featured={project.featured}
        >
          <div class="card-header">
            <div class="card-title-row">
              <h2 class="project-name">{project.title}</h2>
              {#if project.stars}
                <span class="stars">
                  <Star size={12} fill="currentColor" />
                  {project.stars.toLocaleString()}
                </span>
              {/if}
            </div>
            <time class="project-date" datetime={project.date}>{project.dateDisplay}</time>
          </div>
          <p class="project-desc">{project.description}</p>
          <div class="card-footer">
            <div class="project-tags">
              {#each project.tags.slice(0, 4) as tag}
                <span class="tag" style="--tag-color: {tagColors[tag] ?? 'var(--accent)'}">
                  {tag}
                </span>
              {/each}
              {#if project.tags.length > 4}
                <span class="tag-more">+{project.tags.length - 4}</span>
              {/if}
            </div>
            {#if project.href}
              <ExternalLink size={14} class="ext-icon" />
            {/if}
          </div>
        </a>
      {/each}
    </div>
  </div>
</main>

<Footer />

<style>
  .page-main {
    min-height: calc(100vh - 64px);
    padding: 40px 0 24px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 32px;
    font-size: 0.85rem;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  .bc-link {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
  }

  .bc-link:hover { opacity: 0.75; }
  .bc-sep { color: var(--ctp-overlay0); }
  .bc-current { color: var(--ctp-subtext0); }

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

  /* Grid */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  /* Card */
  .project-card {
    display: flex;
    flex-direction: column;
    padding: 22px 24px;
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 14px;
    text-decoration: none;
    color: inherit;
    transition: all 0.25s ease;
    position: relative;
    overflow: hidden;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent);
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .project-card:hover {
    border-color: var(--ctp-surface1);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    opacity: 1;
  }

  .project-card:hover::before {
    opacity: 1;
  }

  .project-card.featured {
    border-color: color-mix(in srgb, var(--accent) 30%, var(--ctp-surface0));
  }

  .project-card.featured::before {
    opacity: 0.5;
  }

  .card-header {
    margin-bottom: 10px;
  }

  .card-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 4px;
  }

  .project-name {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--ctp-text);
    transition: color 0.2s;
    line-height: 1.3;
  }

  .project-card:hover .project-name {
    color: var(--accent);
  }

  .stars {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--ctp-yellow);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .project-date {
    font-size: 0.72rem;
    color: var(--ctp-overlay0);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  .project-desc {
    font-size: 0.85rem;
    color: var(--ctp-subtext0);
    line-height: 1.65;
    flex: 1;
    margin-bottom: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 8px;
    margin-top: auto;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    padding: 2px 9px;
    border-radius: 999px;
    font-size: 0.67rem;
    font-weight: 500;
    border: 1px solid var(--tag-color);
    color: var(--tag-color);
    background: color-mix(in srgb, var(--tag-color) 8%, transparent);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  .tag-more {
    display: inline-flex;
    align-items: center;
    padding: 2px 9px;
    border-radius: 999px;
    font-size: 0.67rem;
    color: var(--ctp-overlay0);
    background: var(--ctp-surface0);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  :global(.ext-icon) {
    color: var(--ctp-overlay0);
    flex-shrink: 0;
    transition: color 0.2s;
  }

  .project-card:hover :global(.ext-icon) {
    color: var(--accent);
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
