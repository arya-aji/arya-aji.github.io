<script lang="ts">
  import { Tag, ExternalLink } from 'lucide-svelte';
  import type { Project } from '$lib/data/projects';
  import { tagColors } from '$lib/data/projects';
  import CaseStudyModal from '$lib/components/CaseStudyModal.svelte';

  let { projects = [] }: { projects: Project[] } = $props();

  let mouseX = $state(0);
  let mouseY = $state(0);
  let hoveredProjectObj: Project | null = $state(null);
  let mouseRafPending = false;
  let caseStudyProject: Project | null = $state(null);

  function handleMouseMove(e: MouseEvent, project: Project) {
    if (mouseRafPending) return;
    mouseRafPending = true;
    requestAnimationFrame(() => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      hoveredProjectObj = project;
      mouseRafPending = false;
    });
  }

  function handleMouseLeave() {
    hoveredProjectObj = null;
  }
</script>

<section class="featured-projects section" id="projects">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Selected Work</h2>
    </div>

    <div class="projects-list">
      {#each projects as project, idx}
        <div class="project-row">
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div 
            class="project-card-wrapper" 
            class:reverse={idx % 2 !== 0}
            onmousemove={(e) => handleMouseMove(e, project)} 
            onmouseleave={handleMouseLeave}
          >
            
            <!-- Left side: Browser Frame Visual -->
            <div class="project-visual-side">
              <div class="browser-frame">
                <div class="browser-header">
                  <div class="browser-dots">
                    <span class="browser-dot red"></span>
                    <span class="browser-dot yellow"></span>
                    <span class="browser-dot green"></span>
                  </div>
                  <div class="browser-address">
                    {project.live ? project.live.replace('https://', '').replace('http://', '').replace('www.', '') : `${project.name}.dev`}
                  </div>
                </div>
                <div class="browser-content">
                  {#if project.image}
                    <div class="preview-image" role="img" aria-label="Project Preview" style="background-image: url('{project.image}');"></div>
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

            <!-- Right side: Information and Actions -->
            <div class="project-info-side">
              <div class="project-info-content">
                <div class="project-date-badge">{project.dateDisplay}</div>
                <h3 class="project-name">
                  {project.name.charAt(0).toUpperCase() + project.name.slice(1)}
                </h3>
                <p class="project-long-desc">{project.longDesc}</p>
                
                <div class="project-tags">
                  <Tag size={14} class="tag-icon" />
                  {#each project.tags as tag}
                    <span class="tag" style="--tag-color: {tagColors[tag] || 'var(--accent)'}">
                      {tag}
                    </span>
                  {/each}
                </div>
              </div>

              <div class="project-actions">
                <button class="action-btn case-study" onclick={() => caseStudyProject = project}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  Glance
                </button>
                {#if project.live}
                  <a href={project.live} target="_blank" rel="noopener noreferrer" class="action-btn primary">
                    <ExternalLink size={16} /> Demo
                  </a>
                {/if}
              </div>
            </div>

          </div>
        </div>
      {/each}
    </div>
  </div>

  {#if hoveredProjectObj && (hoveredProjectObj.gif || hoveredProjectObj.image)}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="floating-video-popup" style="--x: {mouseX + 20}px; --y: {mouseY + 20}px; background-image: url('{hoveredProjectObj.gif || hoveredProjectObj.image}');"></div>
  {/if}
</section>

{#if caseStudyProject}
  <CaseStudyModal project={caseStudyProject} onclose={() => caseStudyProject = null} />
{/if}

<style>
  .featured-projects {
    overflow: hidden;
    max-width: 100vw;
    padding: 80px 0;
  }

  .section-header {
    margin-bottom: 48px;
  }

  .section-title {
    font-size: 2rem;
    font-weight: 800;
    color: var(--ctp-text);
    letter-spacing: -0.01em;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 64px;
    width: 100%;
  }

  .project-row {
    width: 100%;
    box-sizing: border-box;
  }

  .project-card-wrapper {
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    border-radius: 20px;
    overflow: hidden;
    background: color-mix(in srgb, var(--ctp-mantle) 80%, transparent);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid color-mix(in srgb, var(--ctp-surface0) 40%, transparent);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    min-height: 400px;
  }

  .project-card-wrapper:hover {
    border-color: var(--accent);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.2), 0 0 32px color-mix(in srgb, var(--accent) 4%, transparent);
    transform: translateY(-3px);
  }

  /* Alternating side logic */
  .project-card-wrapper.reverse {
    grid-template-columns: 1fr 1.15fr;
  }

  .project-card-wrapper.reverse .project-visual-side {
    order: 2;
    border-right: none;
    border-left: 1px solid color-mix(in srgb, var(--ctp-surface0) 40%, transparent);
  }

  .project-card-wrapper.reverse .project-info-side {
    order: 1;
  }

  .project-visual-side {
    padding: 32px;
    background: color-mix(in srgb, var(--ctp-crust) 25%, transparent);
    border-right: 1px solid color-mix(in srgb, var(--ctp-surface0) 40%, transparent);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* Browser Frame mockup */
  .browser-frame {
    background: color-mix(in srgb, var(--ctp-crust) 75%, transparent);
    border-radius: 12px;
    border: 1px solid color-mix(in srgb, var(--ctp-surface0) 60%, transparent);
    overflow: hidden;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 260px;
  }

  .browser-header {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    background: color-mix(in srgb, var(--ctp-mantle) 50%, transparent);
    border-bottom: 1px solid color-mix(in srgb, var(--ctp-surface0) 60%, transparent);
    position: relative;
  }

  .browser-dots {
    display: flex;
    gap: 6px;
    position: absolute;
    left: 16px;
  }

  .browser-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .browser-dot.red { background: #ff5f56; }
  .browser-dot.yellow { background: #ffbd2e; }
  .browser-dot.green { background: #27c93f; }

  .browser-address {
    margin: 0 auto;
    background: color-mix(in srgb, var(--ctp-crust) 80%, transparent);
    border: 1px solid color-mix(in srgb, var(--ctp-surface0) 40%, transparent);
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: var(--ctp-subtext1);
    padding: 3px 24px;
    border-radius: 6px;
    width: 200px;
    max-width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }

  .browser-content {
    flex: 1;
    background: var(--ctp-base);
    position: relative;
    overflow: hidden;
    min-height: 220px;
  }

  .preview-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: top center;
    transition: background-position 2.5s ease-in-out;
  }

  /* Premium hover image scroll effect */
  .project-card-wrapper:hover .preview-image {
    background-position: bottom center;
  }

  .preview-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ctp-overlay0);
  }

  /* Information side styling */
  .project-info-side {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
  }

  .project-date-badge {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.8rem;
    color: var(--accent);
    margin-bottom: 8px;
    display: inline-block;
    font-weight: 600;
  }

  .project-name {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--ctp-text);
    margin: 0 0 12px 0;
    letter-spacing: -0.019em;
  }

  .project-long-desc {
    color: var(--ctp-subtext0);
    font-size: 0.96rem;
    line-height: 1.7;
    margin: 0;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
  }

  .tag-icon {
    color: var(--ctp-overlay1);
    margin-right: 4px;
  }

  .tag {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 6px;
    background: color-mix(in srgb, var(--tag-color, var(--accent)) 8%, transparent);
    color: var(--tag-color, var(--accent));
    border: 1px solid color-mix(in srgb, var(--tag-color, var(--accent)) 15%, transparent);
  }

  .project-actions {
    display: flex;
    gap: 12px;
  }

  .action-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 11px 20px;
    border-radius: 8px;
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
  }

  .action-btn.case-study {
    background: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface1);
    color: var(--ctp-text);
  }

  .action-btn.case-study:hover {
    background: var(--ctp-surface1);
    border-color: var(--accent);
    color: var(--accent);
  }

  .action-btn.primary {
    background: var(--accent);
    color: var(--ctp-base);
    border: 1px solid var(--accent);
    box-shadow: 0 4px 12px color-mix(in srgb, var(--accent) 20%, transparent);
  }

  .action-btn.primary:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px color-mix(in srgb, var(--accent) 30%, transparent);
  }

  /* Hover visual popup */
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
    .floating-video-popup {
      display: none !important;
    }

    .project-card-wrapper,
    .project-card-wrapper.reverse {
      grid-template-columns: 1fr;
      max-width: 100%;
      min-height: auto;
    }
    
    .project-visual-side,
    .project-card-wrapper.reverse .project-visual-side {
      order: 1;
      border-right: none;
      border-left: none;
      border-bottom: 1px solid var(--ctp-surface0);
      padding: 24px;
    }

    .project-info-side,
    .project-card-wrapper.reverse .project-info-side {
      order: 2;
      padding: 24px;
    }

    .browser-frame {
      min-height: 200px;
    }
    
    .browser-content {
      min-height: 180px;
    }

    .project-name {
      font-size: 1.4rem;
    }

    .project-actions {
      flex-direction: column;
    }
  }

  @media (max-width: 600px) {
    .featured-projects {
      padding: 48px 0;
    }

    .section-header {
      margin-bottom: 24px;
    }

    .section-title {
      font-size: 1.6rem;
    }

    .projects-list {
      gap: 32px;
    }

    .project-visual-side,
    .project-card-wrapper.reverse .project-visual-side,
    .project-info-side,
    .project-card-wrapper.reverse .project-info-side {
      padding: 16px;
    }

    .project-info-side {
      gap: 16px;
    }
  }
</style>
