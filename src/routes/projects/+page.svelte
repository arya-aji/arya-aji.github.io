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

  let sliderProjects = $derived(projects.slice(0, 10));

  let currentIndex = $state(0);
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

  function nextSlide() {
    if (sliderProjects.length <= 1) return;
    currentIndex = (currentIndex + 1) % sliderProjects.length;
  }

  function prevSlide() {
    if (sliderProjects.length <= 1) return;
    currentIndex = (currentIndex - 1 + sliderProjects.length) % sliderProjects.length;
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
      <!-- Top Slider (up to 10 projects) -->
      {#if sliderProjects.length > 0}
        {#if sliderProjects.length > 1}
          <div class="slider-header-controls">
            <div class="slider-controls">
              <button class="slider-btn" onclick={prevSlide} aria-label="Previous project">
                <ChevronLeft size={20} />
              </button>
              <div class="slider-dots-top">
                {#each sliderProjects as _, i}
                  <button 
                    class="slider-dot {i === currentIndex ? 'active' : ''}" 
                    onclick={() => currentIndex = i}
                    aria-label="Go to project {i + 1}"
                  ></button>
                {/each}
              </div>
              <button class="slider-btn" onclick={nextSlide} aria-label="Next project">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        {/if}

        <div class="slider-viewport">
          <div class="slider-track" style="transform: translateX(-{currentIndex * 100}%);">
            {#each sliderProjects as highlight}
              <div class="slider-slide">
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="project-card-wrapper featured" onmousemove={(e) => handleMouseMove(e, highlight)} onmouseleave={handleMouseLeave}>
                  
                  <!-- Left side: Visuals & Terminal -->
                  <div class="project-visual-side">
                    <div class="terminal-card">
                      <div class="terminal-header">
                        <div class="terminal-dots">
                          <span class="dot red"></span>
                          <span class="dot yellow"></span>
                          <span class="dot green"></span>
                        </div>
                        <div class="repo-name-header">
                          <span class="repo-org">arya-aji</span>
                          <span class="repo-sep"> / </span>
                          <span class="repo-project">{highlight.slug}</span>
                        </div>
                      </div>
                      <div class="terminal-content">
                        <div class="terminal-preview">
                          {#if highlight.image}
                            <div class="preview-placeholder has-image" role="img" aria-label="Project Preview" style="background-image: url('{highlight.image}');"></div>
                          {:else}
                            <div class="preview-placeholder" role="img" aria-label="Project Preview">
                              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21 15 16 10 5 21"/>
                              </svg>
                            </div>
                          {/if}
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Right side: Information and Actions -->
                  <div class="project-info-side">
                    <div class="project-info-content">
                      <div class="title-row" style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                        {#if highlight.logo}
                          <img src={highlight.logo} alt="" style="width: 38px; height: 38px; border-radius: 8px; object-fit: contain; background: #ffffff; padding: 3px; border: 1px solid var(--ctp-surface1); flex-shrink: 0;" />
                        {/if}
                        <h3 class="highlight-name" style="margin: 0;">{highlight.title}</h3>
                        {#if highlight.stars}
                          <span class="stars">
                            <Star size={16} fill="currentColor" />
                            {highlight.stars.toLocaleString()}
                          </span>
                        {/if}
                      </div>
                      <div class="project-date-badge">{highlight.dateDisplay}</div>
                      <p class="project-long-desc">{highlight.description}</p>
                      
                      <div class="highlight-tags">
                        <Tag size={16} class="tag-icon" />
                        {#each highlight.tags as tag}
                          <span class="highlight-tag" style="--tag-color: {tagColors[tag] || 'var(--accent)'}">
                            {tag}
                          </span>
                        {/each}
                      </div>
                    </div>

                    <div class="project-actions">
                      <button class="action-btn case-study" onclick={() => caseStudyProject = highlight}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        {$language === 'EN' ? 'Glance' : 'Lihat Sekilas'}
                      </button>
                      {#if highlight.live}
                        <a href={highlight.live} target="_blank" rel="noopener noreferrer" class="action-btn primary">
                          <ExternalLink size={18} /> {$language === 'EN' ? 'Demo' : 'Demo'}
                        </a>
                      {/if}
                    </div>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Grid List for All Projects -->
      {#if projects.length > 0}
        <div class="projects-filter-bar">
          <h2 class="grid-section-title">
            {#if selectedCategory === 'all'}
              {$language === 'EN' ? 'All Projects' : 'Semua Proyek'}
            {:else if selectedCategory === 'extension'}
              {$language === 'EN' ? 'Browser Extensions' : 'Ekstensi Browser'}
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
              <div class="card-header">
                <div class="card-title-row" style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                  {#if project.logo}
                    <img src={project.logo} alt="" style="width: 30px; height: 30px; border-radius: 6px; object-fit: contain; background: #ffffff; padding: 2px; border: 1px solid var(--ctp-surface1); flex-shrink: 0;" />
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
              <p class="grid-project-desc">{project.description}</p>
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    {$language === 'EN' ? 'Case Study' : 'Studi Kasus'}
                  </button>
                  {#if project.live}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="grid-ext-link"
                      title="Open live site"
                      aria-label="Open {project.title}"
                    >
                      <ExternalLink size={16} />
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
    margin-bottom: 24px;
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
  }

  .card-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .grid-case-btn {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    border-radius: 8px;
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

  .grid-ext-link {
    display: flex;
    align-items: center;
    color: var(--ctp-overlay0);
    transition: color 0.2s;
    flex-shrink: 0;
  }

  .grid-ext-link:hover {
    color: var(--accent);
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
