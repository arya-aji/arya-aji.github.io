<script lang="ts">
  import CaseStudyModal from '$lib/components/CaseStudyModal.svelte';
  import { Star, Tag, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-svelte';
  import { tagColors } from '$lib/data/projects';
  import type { Project } from '$lib/data/projects';
  import { PAGINATION } from '$lib/config';
  import { language } from '$lib/stores/language';

  import { onMount } from 'svelte';
  import { fetchProjects, projectsCache } from '$lib/data/projects';
  import { get } from 'svelte/store';

  let { data } = $props<{ data: { projects: Project[] } }>();
  
  // Try to load from the cached state first
  const cached = get(projectsCache);
  let projects = $state<Project[]>(cached.length > 0 ? cached : data.projects);
  
  let isLoading = $state(projects.length === 0);
  let loadingProgress = $state(0);

  onMount(async () => {
    // If projects are already loaded, do not trigger loading animation
    if (projects.length > 0) {
      isLoading = false;
      return;
    }

    isLoading = true;
    loadingProgress = 5;
    
    // Increment loading progress periodically to give visual progress feedback
    const interval = setInterval(() => {
      if (loadingProgress < 90) {
        loadingProgress += Math.floor(Math.random() * 8) + 4;
      }
    }, 120);

    try {
      const live = await fetchProjects();
      clearInterval(interval);
      loadingProgress = 100;
      
      if (live && live.length > 0) {
        projects = live;
        projectsCache.set(live);
      }
    } catch (err) {
      clearInterval(interval);
      console.error('Failed to fetch live projects:', err);
    } finally {
      setTimeout(() => {
        isLoading = false;
      }, 250); // smooth entry transition
    }
  });

  let featuredProjects = $derived(projects.filter(p => p.featured).slice(0, 3));
  let currentPage = $state(1);
  const itemsPerPage = PAGINATION.projects;
  let caseStudyProject: Project | null = $state(null);

  let selectedCategory = $state<"all" | "extension" | "fullstack" | "dashboard" | "automation">("all");

  let filteredProjects = $derived(
    selectedCategory === "all"
      ? projects
      : projects.filter((p: Project) => p.category === selectedCategory)
  );
  
  let totalPages = $derived(Math.ceil(filteredProjects.length / itemsPerPage));
  let paginatedGridProjects = $derived(filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));

  $effect(() => {
    if (selectedCategory) {
      currentPage = 1;
    }
  });

  let mouseX = $state(0);
  let mouseY = $state(0);
  let hoveredProject: Project | null = $state(null);

  function handleMouseMove(e: MouseEvent, project: Project) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    hoveredProject = project;
  }

  function handleMouseLeave() {
    hoveredProject = null;
  }
</script>

<svelte:head>
  <title>{$language === 'EN' ? 'Projects' : 'Proyek'} | Arya Aji Kusuma</title>
  <meta name="description" content="Projects built by Arya Aji Kusuma — from geospatial dashboards to automation tools." />
</svelte:head>

<main class="page-main">
  <div class="container">
    <h1 class="page-title">{$language === 'EN' ? 'Projects' : 'Proyek'}</h1>
    <p class="page-subtitle">
      {$language === 'EN' 
        ? 'I have built many projects over the years. Below are the key public ones, while the rest are internal or government projects. Click any to learn more.' 
        : 'Saya telah membangun banyak proyek selama bertahun-tahun. Berikut adalah proyek publik utama, sedangkan sisanya merupakan proyek internal atau pemerintah. Klik salah satu untuk info lebih lanjut.'}
    </p>

    {#if isLoading}
      <div class="loader-container">
        <div class="loader-card">
          <div class="loader-title">{$language === 'EN' ? 'Loading Projects...' : 'Memuat Proyek...'}</div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width: {loadingProgress}%"></div>
          </div>
          <div class="progress-text">{loadingProgress}%</div>
        </div>
        
        <!-- Skeleton Grid -->
        <div class="skeleton-grid">
          {#each Array(3) as _}
            <div class="skeleton-card">
              <div class="skeleton-header">
                <div class="skeleton-logo"></div>
                <div class="skeleton-title-line"></div>
              </div>
              <div class="skeleton-body">
                <div class="skeleton-line"></div>
                <div class="skeleton-line short"></div>
              </div>
              <div class="skeleton-footer">
                <div class="skeleton-badge"></div>
                <div class="skeleton-button"></div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {:else}
      <!-- 3 Curated Featured Projects -->
      {#if featuredProjects.length > 0}
        <section class="featured-trio-section">
          <div class="featured-trio-header">
            <span class="featured-trio-badge">{$language === 'EN' ? 'Selected Highlights' : 'Karya Pilihan'}</span>
            <h2 class="featured-trio-title">{$language === 'EN' ? 'Featured Projects' : 'Proyek Unggulan'}</h2>
          </div>

          <div class="featured-trio-grid">
            {#each featuredProjects as project}
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <div 
                class="featured-trio-card"
                onmousemove={(e) => handleMouseMove(e, project)}
                onmouseleave={handleMouseLeave}
              >
                <div class="trio-media-frame">
                  {#if project.image}
                    <div class="trio-thumb has-img" style="background-image: url('{project.image}');" role="img" aria-label="{project.title}"></div>
                  {:else}
                    <div class="trio-thumb">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                    </div>
                  {/if}
                  <span class="trio-date-tag">{project.dateDisplay}</span>
                </div>

                <div class="trio-body">
                  <h3 class="trio-title">{project.title}</h3>
                  <p class="trio-desc">{project.description || project.longDesc}</p>

                  <div class="trio-tags">
                    {#each project.tags.slice(0, 3) as tag}
                      <span class="trio-tag" style="--tag-color: {tagColors[tag] || 'var(--accent)'}">
                        {tag}
                      </span>
                    {/each}
                  </div>

                  <div class="trio-actions">
                    <button class="trio-btn glance-btn" onclick={() => caseStudyProject = project}>
                      {$language === 'EN' ? 'Glance' : 'Lihat'}
                    </button>
                    {#if project.live}
                      <a href={project.live} target="_blank" rel="noopener noreferrer" class="trio-btn live-btn">
                        <span>{$language === 'EN' ? 'Demo' : 'Demo'}</span>
                        <ExternalLink size={13} />
                      </a>
                    {/if}
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </section>
      {/if}

      <!-- Grid List for All Projects -->
      {#if projects.length > 0}
        <div class="projects-filter-bar">
          <h2 class="grid-section-title">
            {#if selectedCategory === 'all'}
              {$language === 'EN' ? 'All Projects' : 'Semua Proyek'}
            {:else if selectedCategory === 'extension'}
              <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; display: inline-flex;">
                <span>{$language === 'EN' ? 'Browser Extensions' : 'Ekstensi Browser'}</span>
                <a href="https://extension.aryaaji.com" target="_blank" rel="noopener noreferrer" style="font-size: 0.85rem; color: var(--accent); font-weight: 600; display: inline-flex; align-items: center; gap: 4px; text-decoration: none; padding: 4px 12px; border-radius: 99px; background: color-mix(in srgb, var(--accent) 8%, transparent); border: 1px solid color-mix(in srgb, var(--accent) 15%, transparent); transition: all 0.2s;">
                  {$language === 'EN' ? 'View all extensions' : 'Lihat semua ekstensi'}
                  <ExternalLink size={12} />
                </a>
              </div>
            {:else if selectedCategory === 'fullstack'}
              {$language === 'EN' ? 'Fullstack Apps' : 'Aplikasi Fullstack'}
            {:else if selectedCategory === 'dashboard'}
              {$language === 'EN' ? 'Dashboards' : 'Dashboard'}
            {:else if selectedCategory === 'automation'}
              {$language === 'EN' ? 'Automation' : 'Automasi'}
            {/if}
          </h2>
          <div class="filter-tabs">
            <button class="filter-tab-btn" class:active={selectedCategory === 'all'} onclick={() => selectedCategory = 'all'}>
              {$language === 'EN' ? 'All' : 'Semua'}
            </button>
            <button class="filter-tab-btn" class:active={selectedCategory === 'extension'} onclick={() => selectedCategory = 'extension'}>
              {$language === 'EN' ? 'Extensions' : 'Ekstensi'}
            </button>
            <button class="filter-tab-btn" class:active={selectedCategory === 'fullstack'} onclick={() => selectedCategory = 'fullstack'}>
              Fullstack
            </button>
            <button class="filter-tab-btn" class:active={selectedCategory === 'dashboard'} onclick={() => selectedCategory = 'dashboard'}>
              Dashboard
            </button>
            <button class="filter-tab-btn" class:active={selectedCategory === 'automation'} onclick={() => selectedCategory = 'automation'}>
              {$language === 'EN' ? 'Automation' : 'Automasi'}
            </button>
          </div>
        </div>
        <div class="projects-grid">
          {#each paginatedGridProjects as project}
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div
              class="grid-card"
              class:featured-grid={project.featured}
              onmousemove={(e) => handleMouseMove(e, project)}
              onmouseleave={handleMouseLeave}
            >
              <!-- Card media thumbnail / screenshot -->
              <div class="grid-card-media">
                {#if project.image}
                  <div class="grid-media-thumb has-image" style="background-image: url('{project.image}');" role="img" aria-label="{project.title} Preview"></div>
                {:else}
                  <div class="grid-media-thumb">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                  </div>
                {/if}
              </div>

              <div class="card-header">
                <div class="card-title-row" style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                  {#if project.logo}
                    <img src={project.logo} alt="" style="width: 26px; height: 26px; border-radius: 6px; object-fit: contain; background: #ffffff; padding: 2px; border: 1px solid var(--ctp-surface1); flex-shrink: 0;" />
                  {/if}
                  <h2 class="grid-project-name" style="margin: 0;">{project.title}</h2>
                  {#if project.stars}
                    <span class="grid-stars">
                      <Star size={12} fill="currentColor" />
                      {project.stars.toLocaleString()}
                    </span>
                  {/if}
                </div>
                <time class="grid-project-date" datetime={project.date}>{project.dateDisplay}</time>
              </div>

              <!-- Masalah -> Solusi -> Hasil narrative -->
              {#if project.problem && project.solution}
                <div class="grid-narrative-summary">
                  <p class="narrative-line"><strong class="narrative-tag">{$language === 'EN' ? 'Problem:' : 'Masalah:'}</strong> <span>{project.problem}</span></p>
                  <p class="narrative-line"><strong class="narrative-tag">{$language === 'EN' ? 'Solution:' : 'Solusi:'}</strong> <span>{project.solution}</span></p>
                  {#if project.results && project.results.length > 0}
                    <p class="narrative-line"><strong class="narrative-tag">{$language === 'EN' ? 'Result:' : 'Hasil:'}</strong> <span>{project.results.map(r => `${r.metric} ${r.label}`).join(' · ')}</span></p>
                  {/if}
                </div>
              {:else}
                <p class="grid-project-desc">{project.description}</p>
              {/if}

              <div class="card-footer">
                <div class="grid-project-tags">
                  {#each project.tags.slice(0, 3) as tag}
                    <span class="grid-tag" style="--tag-color: {tagColors[tag] ?? 'var(--accent)'}">
                      {tag}
                    </span>
                  {/each}
                  {#if project.tags.length > 3}
                    <span class="tag-more">+{project.tags.length - 3}</span>
                  {/if}
                </div>
                <div class="card-actions">
                  <button class="grid-case-btn" onclick={() => caseStudyProject = project} title="View Case Study">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    {$language === 'EN' ? 'Case Study' : 'Studi Kasus'}
                  </button>
                  {#if project.github}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="grid-action-icon-link"
                      title="View GitHub Repository"
                      aria-label="GitHub for {project.title}"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  {/if}
                  {#if project.live}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="grid-action-icon-link"
                      title="Open Live Demo"
                      aria-label="Open {project.title}"
                    >
                      <ExternalLink size={15} />
                    </a>
                  {/if}
                </div>
              </div>
            </div>
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
              <ChevronLeft size={16} /> {$language === 'EN' ? 'Previous' : 'Sebelumnya'}
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
              {$language === 'EN' ? 'Next' : 'Berikutnya'} <ChevronRight size={16} />
            </button>
          </div>
        {/if}
      {/if}
    {/if}
  </div>
</main>

{#if hoveredProject && (hoveredProject.banner || hoveredProject.gif)}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="floating-video-popup" style="--x: {mouseX + 20}px; --y: {mouseY + 20}px; background-image: url('{hoveredProject.banner || hoveredProject.gif}');"></div>
{/if}

{#if caseStudyProject}
  <CaseStudyModal project={caseStudyProject} onclose={() => caseStudyProject = null} />
{/if}


<style>
  .page-main {
    min-height: calc(100vh - 64px);
    padding: 96px 0 24px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .page-title {
    font-size: 2.6rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin-bottom: 12px;
  }

  .page-subtitle {
    font-size: 1.05rem;
    color: var(--ctp-subtext0);
    margin-bottom: 32px;
  }

  /* --- 3 Featured Projects (Trio Grid) --- */
  .featured-trio-section {
    margin-bottom: 56px;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--ctp-surface0);
  }

  .featured-trio-header {
    margin-bottom: 24px;
  }

  .featured-trio-badge {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 12%, transparent);
    padding: 3px 10px;
    border-radius: 999px;
    margin-bottom: 8px;
    border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
  }

  .featured-trio-title {
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--ctp-text);
    margin: 0;
    letter-spacing: -0.01em;
  }

  .featured-trio-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .featured-trio-card {
    background: color-mix(in srgb, var(--ctp-mantle) 75%, transparent);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--ctp-surface0);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .featured-trio-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
    box-shadow: 0 16px 36px -10px color-mix(in srgb, var(--accent) 20%, transparent);
  }

  .trio-media-frame {
    height: 180px;
    position: relative;
    background: var(--ctp-crust);
    overflow: hidden;
    border-bottom: 1px solid var(--ctp-surface0);
  }

  .trio-thumb {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: transform 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ctp-overlay0);
  }

  .featured-trio-card:hover .trio-thumb {
    transform: scale(1.04);
  }

  .trio-date-tag {
    position: absolute;
    top: 12px;
    right: 12px;
    background: color-mix(in srgb, var(--ctp-base) 85%, transparent);
    border: 1px solid var(--ctp-surface0);
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--ctp-subtext0);
    font-family: 'JetBrains Mono', monospace;
    backdrop-filter: blur(8px);
  }

  .trio-body {
    padding: 22px 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .trio-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin: 0 0 8px;
    line-height: 1.35;
  }

  .trio-desc {
    font-size: 0.86rem;
    color: var(--ctp-subtext0);
    line-height: 1.5;
    margin: 0 0 16px;
    flex-grow: 1;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .trio-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 20px;
  }

  .trio-tag {
    font-size: 0.72rem;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 6px;
    background: color-mix(in srgb, var(--tag-color, var(--accent)) 10%, transparent);
    color: var(--tag-color, var(--accent));
    border: 1px solid color-mix(in srgb, var(--tag-color, var(--accent)) 20%, transparent);
    font-family: 'JetBrains Mono', monospace;
  }

  .trio-actions {
    display: flex;
    gap: 10px;
    margin-top: auto;
  }

  .trio-btn {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 0.82rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .glance-btn {
    background: var(--ctp-surface0);
    color: var(--ctp-text);
    border: 1px solid var(--ctp-surface1);
  }

  .glance-btn:hover {
    background: var(--ctp-surface1);
    color: var(--accent);
  }

  .live-btn {
    background: var(--accent-surface);
    color: var(--accent);
    border: 1px solid var(--accent-subtle);
  }

  .live-btn:hover {
    background: var(--accent);
    color: var(--ctp-base, #1e1e2e);
  }

  @media (max-width: 960px) {
    .featured-trio-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .case-badge-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .case-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 12%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
    font-family: 'JetBrains Mono', monospace;
  }

  .case-badge-pill {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--ctp-subtext0);
    font-family: 'JetBrains Mono', monospace;
  }

  .case-grid {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 36px;
    align-items: center;
  }

  .case-title {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--ctp-text);
    margin-bottom: 12px;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  .case-description {
    font-size: 0.95rem;
    color: var(--ctp-subtext1);
    line-height: 1.7;
    margin-bottom: 20px;
  }

  .case-narrative-pills {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }

  .narrative-pill-item {
    background: var(--ctp-crust);
    border: 1px solid var(--ctp-surface0);
    border-radius: 10px;
    padding: 10px 14px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .narrative-pill-label {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--accent);
    font-family: 'JetBrains Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .narrative-pill-item p {
    font-size: 0.88rem;
    color: var(--ctp-subtext0);
    line-height: 1.5;
    margin: 0;
  }

  .case-tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .cs-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 6px;
    background: color-mix(in srgb, var(--accent) 8%, var(--ctp-crust));
    color: var(--accent);
    border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
  }

  .case-action-col {
    display: flex;
    flex-direction: column;
  }

  .case-action-card {
    background: var(--ctp-crust);
    border: 1px solid var(--ctp-surface0);
    border-radius: 16px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .case-preview-frame {
    border-radius: 10px;
    overflow: hidden;
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface1);
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .case-preview-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }

  .case-action-buttons {
    display: flex;
    gap: 10px;
  }

  .case-cta-btn {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn.primary {
    background: var(--accent);
    color: var(--ctp-crust);
    border: 1px solid var(--accent);
  }

  .btn.primary:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px color-mix(in srgb, var(--accent) 25%, transparent);
  }

  .btn.secondary {
    background: var(--ctp-surface0);
    color: var(--ctp-text);
    border: 1px solid var(--ctp-surface1);
  }

  .btn.secondary:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  @media (max-width: 900px) {
    .case-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }

  /* --- Slider Header Controls --- */
  .slider-header-controls {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
  }

  .slider-controls {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .slider-btn {
    background: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface1);
    color: var(--ctp-text);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .slider-btn:hover {
    background: color-mix(in srgb, var(--accent) 15%, transparent);
    border-color: var(--accent);
    color: var(--accent);
    transform: scale(1.05);
  }

  .slider-dots-top { display: flex; gap: 8px; align-items: center; }
  .slider-dot {
    width: 24px; height: 4px; border-radius: 4px;
    background: var(--ctp-surface1);
    border: none; cursor: pointer; transition: all 0.3s ease;
  }
  .slider-dot.active { background: var(--accent); width: 36px; }
  .slider-dot:hover:not(.active) { background: var(--ctp-surface2); }

  /* --- Slider Track --- */
  .slider-viewport {
    overflow: hidden;
    width: 100%;
    border-radius: 18px;
    padding: 6px 0;
    margin-bottom: 40px;
  }

  .slider-track {
    display: flex;
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
    width: 100%;
  }

  .slider-slide {
    flex: 0 0 100%;
    min-width: 100%;
    box-sizing: border-box;
    padding: 0 6px;
  }

  /* --- Highlight Card --- */
  .project-card-wrapper {
    text-decoration: none;
    color: inherit;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    border-radius: 18px;
    overflow: hidden;
    background: color-mix(in srgb, var(--ctp-mantle) 80%, transparent);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid color-mix(in srgb, var(--ctp-surface0) 50%, transparent);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    min-height: 340px;
    position: relative;
    height: 100%;
  }

  .project-card-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 3px;
    background: var(--accent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card-wrapper:hover {
    border-color: var(--accent);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.15), 0 0 30px color-mix(in srgb, var(--accent) 5%, transparent);
    transform: translateY(-2px);
  }

  .project-card-wrapper:hover::before {
    opacity: 1;
  }

  .project-card-wrapper.featured {
    border-color: color-mix(in srgb, var(--accent) 30%, var(--ctp-surface0));
  }

  .project-card-wrapper.featured::before {
    opacity: 0.6;
  }

  .project-visual-side {
    padding: 24px;
    background: color-mix(in srgb, var(--ctp-crust) 30%, transparent);
    border-right: 1px solid color-mix(in srgb, var(--ctp-surface0) 50%, transparent);
    display: flex;
    flex-direction: column;
  }

  .terminal-card {
    background: color-mix(in srgb, var(--ctp-crust) 65%, transparent);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid color-mix(in srgb, var(--ctp-surface0) 70%, transparent);
    box-shadow: 0 12px 32px rgba(0,0,0,0.25);
    position: relative;
  }

  .terminal-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.08), transparent);
    pointer-events: none;
  }

  .terminal-header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 12px 16px;
    border-bottom: 1px solid color-mix(in srgb, var(--ctp-surface0) 70%, transparent);
    background: color-mix(in srgb, var(--ctp-mantle) 40%, transparent);
  }

  .terminal-dots {
    position: absolute;
    left: 16px;
    display: flex;
    gap: 8px;
  }
  
  .repo-name-header {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.85rem;
    color: var(--ctp-subtext1);
  }
  
  .project-date-badge {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.85rem;
    color: var(--ctp-overlay1);
    margin-bottom: 14px;
    margin-top: -6px;
  }
  .dot { width: 14px; height: 14px; border-radius: 50%; }
  .dot.red { background: #ff5f57; }
  .dot.yellow { background: #febc2e; }
  .dot.green { background: #28c840; }

  .terminal-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 16px;
    gap: 16px;
  }

  .repo-org { color: var(--ctp-subtext0); }
  .repo-sep { color: var(--ctp-overlay0); }
  .repo-project { color: var(--accent); font-weight: 600; }

  .terminal-preview {
    flex: 1;
    display: flex;
    min-height: 140px;
    background: var(--ctp-surface0);
    border-radius: 8px;
    overflow: hidden;
  }

  .preview-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ctp-overlay0);
    transition: all 0.3s ease;
  }

  .preview-placeholder.has-image {
    color: transparent;
    background-size: cover;
    background-position: top center;
    transition: background-position 2.5s ease-in-out;
  }

  .project-card-wrapper:hover .preview-placeholder.has-image {
    background-position: bottom center;
  }

  .project-card-wrapper:hover .preview-placeholder:not(.has-image) {
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 10%, transparent);
  }

  .project-info-side {
    padding: 32px 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project-info-content { margin-bottom: 32px; }

  .title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .highlight-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--ctp-text);
  }

  .stars {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--ctp-yellow);
    font-weight: 600;
    font-size: 0.9rem;
  }

  .slider-narrative-box {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 20px;
    background: var(--ctp-crust);
    border: 1px solid var(--ctp-surface0);
    border-radius: 10px;
    padding: 12px 16px;
  }

  .slider-narrative-line {
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--ctp-subtext0);
    margin: 0;
  }

  .slider-narrative-line strong {
    color: var(--accent);
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .project-long-desc {
    font-size: 1rem;
    color: var(--ctp-subtext0);
    line-height: 1.7;
    margin-bottom: 24px;
  }

  .highlight-tags {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    color: var(--ctp-overlay0);
  }

  .highlight-tag {
    display: inline-flex;
    align-items: center;
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid var(--tag-color);
    color: var(--tag-color);
    background: color-mix(in srgb, var(--tag-color) 8%, transparent);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  .project-actions {
    display: flex;
    gap: 16px;
    margin-top: auto;
  }

  .action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    font-family: inherit;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .action-btn.outline {
    background: transparent;
    color: var(--ctp-text);
    border: 2px solid var(--ctp-surface2);
  }

  .action-btn.outline:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-2px);
  }

  .action-btn.primary {
    background: var(--accent);
    color: var(--ctp-crust);
    border: none;
  }

  .action-btn.primary:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px color-mix(in srgb, var(--accent) 30%, transparent);
  }

  .action-btn.case-study {
    background: color-mix(in srgb, var(--accent) 10%, var(--ctp-surface0));
    color: var(--accent);
    border: 1.5px solid color-mix(in srgb, var(--accent) 30%, transparent);
    cursor: pointer;
  }

  .action-btn.case-study:hover {
    background: color-mix(in srgb, var(--accent) 18%, var(--ctp-surface0));
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  /* --- Grid List for Remaining Projects --- */
  .grid-section-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin-bottom: 20px;
    padding-top: 24px;
    border-top: 1px solid var(--ctp-surface0);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .grid-card {
    display: flex;
    flex-direction: column;
    padding: 20px 20px 22px;
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 16px;
    text-decoration: none;
    color: inherit;
    transition: all 0.25s ease;
    position: relative;
    overflow: hidden;
  }

  .grid-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--accent);
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .grid-card:hover {
    border-color: var(--accent);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15), 0 0 16px color-mix(in srgb, var(--accent) 8%, transparent);
    transform: translateY(-4px);
    opacity: 1;
  }

  .grid-card:hover::before { opacity: 1; }

  .grid-card.featured-grid {
    border-color: color-mix(in srgb, var(--accent) 30%, var(--ctp-surface0));
  }
  .grid-card.featured-grid::before { opacity: 0.5; }

  /* Grid Card Media Thumbnail */
  .grid-card-media {
    width: 100%;
    height: 140px;
    border-radius: 10px;
    overflow: hidden;
    background: var(--ctp-crust);
    border: 1px solid var(--ctp-surface0);
    margin-bottom: 14px;
  }

  .grid-media-thumb {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ctp-overlay0);
    background-size: cover;
    background-position: top center;
    transition: background-position 2s ease-in-out, transform 0.3s ease;
  }

  .grid-card:hover .grid-media-thumb.has-image {
    background-position: bottom center;
    transform: scale(1.02);
  }

  .card-header { margin-bottom: 10px; }

  .card-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 4px;
  }

  .grid-project-name {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--ctp-text);
    transition: color 0.2s;
    line-height: 1.3;
  }

  .grid-card:hover .grid-project-name {
    color: var(--accent);
  }

  .grid-stars {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--ctp-yellow);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .grid-project-date {
    font-size: 0.72rem;
    color: var(--ctp-overlay0);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  /* Grid narrative summary */
  .grid-narrative-summary {
    background: color-mix(in srgb, var(--ctp-crust) 70%, transparent);
    border: 1px solid color-mix(in srgb, var(--ctp-surface0) 60%, transparent);
    border-radius: 8px;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 14px;
  }

  .narrative-line {
    font-size: 0.8rem;
    line-height: 1.5;
    color: var(--ctp-subtext0);
    margin: 0;
  }

  .narrative-tag {
    color: var(--accent);
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    text-transform: uppercase;
  }

  .grid-project-desc {
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
    padding-top: 6px;
  }

  .card-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }

  .grid-case-btn {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border-radius: 6px;
    font-size: 0.72rem;
    font-weight: 600;
    background: color-mix(in srgb, var(--accent) 10%, var(--ctp-surface0));
    color: var(--accent);
    border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
    cursor: pointer;
    font-family: inherit;
    transition: all 0.15s;
    white-space: nowrap;
    text-decoration: none;
  }

  .grid-case-btn:hover {
    background: color-mix(in srgb, var(--accent) 18%, var(--ctp-surface0));
    border-color: var(--accent);
  }

  .grid-action-icon-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface1);
    color: var(--ctp-subtext0);
    transition: all 0.2s ease;
    text-decoration: none;
  }

  .grid-action-icon-link:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 10%, var(--ctp-surface0));
    transform: translateY(-1px);
  }

  .grid-project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .grid-tag {
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

  .grid-card:hover :global(.ext-icon) {
    color: var(--accent);
  }

  /* --- Floating Hover Popup --- */
  .floating-video-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 320px;
    height: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 12px;
    border: 3px solid var(--accent);
    box-shadow: 0 20px 60px rgba(0,0,0,0.8);
    pointer-events: none;
    z-index: 9999;
    transform: translate3d(var(--x), var(--y), 0);
    will-change: transform;
    animation: popupFadeIn 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @keyframes popupFadeIn {
    0% { opacity: 0; filter: blur(4px); transform: translate3d(var(--x), calc(var(--y) + 20px), 0) scale(0.9); }
    100% { opacity: 1; filter: blur(0); transform: translate3d(var(--x), var(--y), 0) scale(1); }
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 992px) {
    .floating-video-popup {
      display: none !important;
    }

    .slider-slide {
      min-width: 0;
      width: 100%;
    }

    .project-card-wrapper {
      grid-template-columns: 1fr;
      max-width: 100%;
    }
    
    .project-visual-side {
      border-right: none;
      border-bottom: 1px solid var(--ctp-surface0);
      padding: 16px;
      min-width: 0;
    }

    .terminal-header {
      justify-content: flex-start;
      gap: 12px;
    }

    .terminal-dots {
      position: static;
      flex-shrink: 0;
    }

    .repo-name-header {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .project-info-side {
      padding: 24px;
      min-width: 0;
      overflow: hidden;
    }

    .project-name {
      word-break: break-word;
    }

    .project-long-desc {
      word-break: break-word;
    }
  }

  @media (max-width: 640px) {
    .page-title {
      font-size: 2.2rem;
    }
    
    .projects-grid {
      grid-template-columns: 1fr;
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

  /* --- Filter Bar & Tabs --- */
  .projects-filter-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding-top: 24px;
    border-top: 1px solid var(--ctp-surface0);
    flex-wrap: wrap;
    gap: 16px;
  }

  .projects-filter-bar .grid-section-title {
    margin-bottom: 0;
    padding-top: 0;
    border-top: none;
  }

  .filter-tabs {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .filter-tab-btn {
    padding: 8px 16px;
    border-radius: 8px;
    background: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface1);
    color: var(--ctp-text);
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Montserrat', sans-serif;
  }

  .filter-tab-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 5%, var(--ctp-surface0));
  }

  .filter-tab-btn.active {
    background: var(--accent);
    color: var(--ctp-crust);
    border-color: var(--accent);
  }

  @media (max-width: 768px) {
    .projects-filter-bar {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  /* --- Loader & Skeletons --- */
  .loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 40px;
    width: 100%;
  }

  .loader-card {
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    padding: 24px 32px;
    border-radius: 16px;
    width: 100%;
    max-width: 480px;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }

  .loader-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--ctp-text);
    margin-bottom: 16px;
    font-family: 'Montserrat', sans-serif;
  }

  .progress-bar-track {
    background: var(--ctp-surface0);
    height: 8px;
    border-radius: 999px;
    overflow: hidden;
    margin-bottom: 10px;
    position: relative;
  }

  .progress-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent) 0%, var(--ctp-lavender) 100%);
    box-shadow: 0 0 12px var(--accent);
    transition: width 0.15s ease-out;
  }

  .progress-text {
    font-size: 0.85rem;
    font-family: 'JetBrains Mono', monospace;
    color: var(--ctp-overlay0);
  }

  .skeleton-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    width: 100%;
  }

  .skeleton-card {
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 14px;
    padding: 22px 24px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }

  .skeleton-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      color-mix(in srgb, var(--ctp-surface1) 20%, transparent) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    animation: skeleton-shimmer 1.5s infinite;
  }

  @keyframes skeleton-shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  .skeleton-header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .skeleton-logo {
    width: 30px;
    height: 30px;
    border-radius: 6px;
    background: var(--ctp-surface0);
  }

  .skeleton-title-line {
    height: 16px;
    width: 120px;
    border-radius: 4px;
    background: var(--ctp-surface0);
  }

  .skeleton-body {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
    flex: 1;
  }

  .skeleton-line {
    height: 12px;
    border-radius: 4px;
    background: var(--ctp-surface0);
    width: 100%;
  }

  .skeleton-line.short {
    width: 60%;
  }

  .skeleton-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }

  .skeleton-badge {
    height: 18px;
    width: 50px;
    border-radius: 999px;
    background: var(--ctp-surface0);
  }

  .skeleton-button {
    height: 24px;
    width: 70px;
    border-radius: 8px;
    background: var(--ctp-surface0);
  }

  @media (max-width: 1024px) {
    .skeleton-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .skeleton-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
