<script lang="ts">
  import { Star, Tag, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-svelte';

  import { projects as allProjects, tagColors } from '$lib/data/projects';

  const projects = allProjects.slice(0, 3);

  let mouseX = $state(0);
  let mouseY = $state(0);
  let hoveredProjectObj: any = $state(null);
  let currentIndex = $state(0);

  function handleMouseMove(e: MouseEvent, project: any) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    hoveredProjectObj = project;
  }

  function handleMouseLeave() {
    hoveredProjectObj = null;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % projects.length;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  }
</script>

<section class="featured-projects section" id="projects">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">
        <Star size={22} />
        Featured Projects
      </h2>
      <div class="slider-controls">
        <button class="slider-btn" onclick={prevSlide} aria-label="Previous project">
          <ChevronLeft size={20} />
        </button>
        <div class="slider-dots-top">
          {#each projects as _, i}
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

    <div class="slider-viewport">
      <div class="slider-track" style="transform: translateX(-{currentIndex * 100}%);">
        {#each projects as project}
          <div class="slider-slide">
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="project-card-wrapper" onmousemove={(e) => handleMouseMove(e, project)} onmouseleave={handleMouseLeave}>
              
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
                      <span class="repo-org">{project.org}</span>
                      <span class="repo-sep"> / </span>
                      <span class="repo-project">{project.name}</span>
                    </div>
                  </div>
                  <div class="terminal-content">
                    <div class="terminal-preview">
                      {#if project.image}
                        <div class="preview-placeholder has-image" aria-label="Project Preview" style="background-image: url('{project.image}'); background-size: cover; background-position: center;"></div>
                      {:else}
                        <div class="preview-placeholder" aria-label="Project Preview">
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
                  <h3 class="project-name">
                    {project.name.charAt(0).toUpperCase() + project.name.slice(1)}
                  </h3>
                  <div class="project-date-badge">{project.dateDisplay}</div>
                  <p class="project-long-desc">{project.longDesc}</p>
                  
                  <div class="project-tags">
                    <Tag size={16} class="tag-icon" />
                    {#each project.tags as tag}
                      <span class="tag" style="--tag-color: {tagColors[tag] || 'var(--accent)'}">
                        {tag}
                      </span>
                    {/each}
                  </div>
                </div>

                <div class="project-actions">
                  {#if project.github}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" class="action-btn outline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3-.3 6-1.5 6-6.4a5.1 5.1 0 0 0-1.4-3.6 4.9 4.9 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.8 12.8 0 0 0-7 0C4.1 1.7 3 2 3 2a4.9 4.9 0 0 0-.1 3.5A5.1 5.1 0 0 0 1.5 9.1c0 4.9 3 6.1 6 6.4-.4.4-.8 1.1-.8 2.2V22"/><path d="M9 20c-4.5 1.5-5-2.5-7-3"/></svg>
                      View Source
                    </a>
                  {/if}
                  {#if project.live}
                    <a href={project.live} target="_blank" rel="noopener noreferrer" class="action-btn primary">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  {#if hoveredProjectObj && hoveredProjectObj.gif}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="floating-video-popup" style="--x: {mouseX + 20}px; --y: {mouseY + 20}px; background-image: url('{hoveredProjectObj.gif}');"></div>
  {/if}
</section>

<style>
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
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

  .slider-dots-top {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .slider-dot {
    width: 24px;
    height: 4px;
    border-radius: 4px;
    background: var(--ctp-surface1);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .slider-dot.active {
    background: var(--accent);
    width: 36px;
  }

  .slider-dot:hover:not(.active) {
    background: var(--ctp-surface2);
  }

  .slider-viewport {
    overflow: hidden;
    width: 100%;
    border-radius: 18px;
    padding: 6px 0;
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
    padding: 0 6px; /* spacing to not clip shadow */
  }

  .project-card-wrapper {
    text-decoration: none;
    color: inherit;
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    border-radius: 18px;
    overflow: hidden;
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    transition: all 0.3s ease;
    min-height: 380px;
  }

  .project-card-wrapper:hover {
    border-color: var(--ctp-surface1);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  .project-visual-side {
    padding: 24px;
    background: color-mix(in srgb, var(--ctp-crust) 50%, transparent);
    border-right: 1px solid var(--ctp-surface0);
    display: flex;
    flex-direction: column;
  }

  .terminal-card {
    background: var(--ctp-crust);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid var(--ctp-surface0);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }

  .terminal-header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 12px 16px;
    border-bottom: 1px solid var(--ctp-surface0);
    background: color-mix(in srgb, var(--ctp-mantle) 50%, transparent);
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

  .dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }

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

  .repo-info {
    flex-shrink: 0;
  }

  .repo-name {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 1rem;
    margin-bottom: 8px;
  }

  .repo-org { color: var(--ctp-subtext0); }
  .repo-sep { color: var(--ctp-overlay0); }
  .repo-project { color: var(--accent); font-weight: 600; }

  .repo-desc {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.85rem;
    color: var(--ctp-subtext0);
    line-height: 1.6;
  }

  .terminal-preview {
    flex: 1;
    display: flex;
    min-height: 160px;
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
  }

  .project-card-wrapper:hover .preview-placeholder:not(.has-image) {
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 10%, transparent);
  }

  .project-info-side {
    padding: 36px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project-info-content {
    margin-bottom: 32px;
  }

  .project-name {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin-bottom: 12px;
    transition: color 0.2s;
  }

  .project-card-wrapper:hover .project-name {
    color: var(--accent);
  }

  .project-long-desc {
    font-size: 1.05rem;
    color: var(--ctp-subtext0);
    line-height: 1.7;
    margin-bottom: 24px;
  }

  .project-tags {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    color: var(--ctp-overlay0);
  }

  .tag {
    display: inline-flex;
    align-items: center;
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 0.8rem;
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
    padding: 12px 24px;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 600;
    font-family: inherit;
    text-decoration: none;
    transition: all 0.2s ease;
    flex: 1;
  }

  .action-btn.primary {
    background: var(--accent);
    color: var(--ctp-crust);
  }

  .action-btn.primary:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px color-mix(in srgb, var(--accent) 30%, transparent);
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

  @media (max-width: 992px) {
    .project-card-wrapper {
      grid-template-columns: 1fr;
    }
    
    .project-visual-side {
      border-right: none;
      border-bottom: 1px solid var(--ctp-surface0);
      padding: 16px;
    }
    
    .terminal-preview {
      min-height: 200px;
    }
    
    .project-info-side {
      padding: 24px;
    }

    .project-actions {
      flex-direction: column;
    }
  }

  @media (max-width: 600px) {
    .section-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
    
    .slider-controls {
      width: 100%;
      justify-content: space-between;
    }
  }
</style>
