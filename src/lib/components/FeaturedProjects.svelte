<script lang="ts">
  import { Star, Tag, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-svelte';

  import type { Project } from '$lib/data/projects';

  import { tagColors } from '$lib/data/projects';
  import CaseStudyModal from '$lib/components/CaseStudyModal.svelte';

  let { projects = [] }: { projects: Project[] } = $props();

  let mouseX = $state(0);
  let mouseY = $state(0);
  let hoveredProjectObj: Project | null = $state(null);
  let currentIndex = $state(0);
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

  let terminalLogs = $state<Record<string, string[]>>({});

  function triggerSimulation(slug: string, name: string) {
    if (terminalLogs[slug] && terminalLogs[slug].length > 0) return;
    terminalLogs[slug] = [];
    const lines = [
      `aji@io:~$ cd ${name}`,
      `aji@io:~/${name}$ npm run build`,
      `✓ built in 480ms`,
      `aji@io:~/${name}$ ./start --live`,
      `🚀 active at localhost:3000`
    ];

    let i = 0;
    function printLine() {
      if (i < lines.length) {
        terminalLogs[slug] = [...(terminalLogs[slug] || []), lines[i]];
        i++;
        setTimeout(printLine, 100 + Math.random() * 80);
      }
    }
    printLine();
  }

  $effect(() => {
    if (projects.length > 0) {
      const activeProject = projects[currentIndex];
      if (activeProject && (!terminalLogs[activeProject.slug] || terminalLogs[activeProject.slug].length === 0)) {
        triggerSimulation(activeProject.slug, activeProject.name);
      }
    }
  });

  function nextSlide() {
    if (projects.length <= 1) return;
    currentIndex = (currentIndex + 1) % projects.length;
  }

  function prevSlide() {
    if (projects.length <= 1) return;
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  }
</script>

<section class="featured-projects section" id="projects">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">
        <Star size={22} />
        Ideas, Realized
      </h2>
      {#if projects.length > 1}
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
      {/if}
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
                    <div class="terminal-shell">
                      {#each (terminalLogs[project.slug] || []) as line}
                        <div class="shell-line">{line}</div>
                      {/each}
                      {#if !(terminalLogs[project.slug]?.length >= 5)}
                        <div class="shell-cursor">▌</div>
                      {/if}
                    </div>

                    {#if (terminalLogs[project.slug]?.length >= 5)}
                      <div class="terminal-preview fade-in">
                        {#if project.image}
                          <div class="preview-placeholder has-image" role="img" aria-label="Project Preview" style="background-image: url('{project.image}'); background-size: contain; background-repeat: no-repeat; background-position: center;"></div>
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
                    {/if}
                  </div>
                </div>
              </div>

              <!-- Right side: Information and Actions -->
              <div class="project-info-side">
                <div class="project-info-content">
                  {#if project.idea}
                    <div class="project-idea">
                      <span class="idea-keyword">idea</span> <span class="idea-eq">=</span> <span class="idea-value">"{project.idea}"</span>
                    </div>
                  {/if}
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
                  <button class="action-btn case-study" onclick={() => caseStudyProject = project}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    Glance
                  </button>
                  {#if project.live}
                    <a href={project.live} target="_blank" rel="noopener noreferrer" class="action-btn primary">
                      <ExternalLink size={18} /> Demo
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
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  /* Idea line on project card */
  .project-idea {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.82rem;
    line-height: 1.5;
    margin-bottom: 8px;
    padding: 6px 10px;
    background: var(--ctp-mantle);
    border-left: 3px solid var(--accent);
    border-radius: 0 6px 6px 0;
    word-break: break-word;
  }

  .idea-keyword {
    color: var(--accent);
    font-weight: 700;
  }

  .idea-eq {
    color: var(--ctp-subtext0);
  }

  .idea-value {
    color: var(--ctp-text);
    font-style: italic;
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
    background: color-mix(in srgb, var(--ctp-mantle) 80%, transparent);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid color-mix(in srgb, var(--ctp-surface0) 50%, transparent);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    min-height: 380px;
    min-width: 0;
  }

  .project-card-wrapper:hover {
    border-color: var(--accent);
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.15), 0 0 30px color-mix(in srgb, var(--accent) 5%, transparent);
    transform: translateY(-2px);
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
    font-size: 0.82rem;
    color: var(--ctp-subtext1);
    letter-spacing: 0.02em;
  }
  
  .project-date-badge {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.85rem;
    color: var(--ctp-overlay2);
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
    position: relative;
    min-height: 220px;
  }

  .terminal-shell {
    flex: 1;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: var(--ctp-subtext0);
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: left;
  }

  .shell-line {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .shell-cursor {
    color: var(--accent);
    animation: shell-blink 1s step-end infinite;
    display: inline-block;
  }

  @keyframes shell-blink {
    50% { opacity: 0; }
  }

  .terminal-preview {
    position: absolute;
    inset: 16px;
    background: var(--ctp-surface0);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    z-index: 10;
  }

  .fade-in {
    animation: fade-in-preview 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes fade-in-preview {
    from { opacity: 0; transform: scale(0.98); }
    to { opacity: 1; transform: scale(1); }
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

  .action-btn.case-study {
    background: color-mix(in srgb, var(--accent) 10%, var(--ctp-surface0));
    color: var(--accent);
    border: 1.5px solid color-mix(in srgb, var(--accent) 30%, transparent);
    cursor: pointer;
    font-family: inherit;
  }

  .action-btn.case-study:hover {
    background: color-mix(in srgb, var(--accent) 18%, var(--ctp-surface0));
    border-color: var(--accent);
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
    
    .terminal-preview {
      min-height: 160px;
    }
    
    .project-info-side {
      padding: 16px;
      min-width: 0;
      overflow: hidden;
    }

    .project-name {
      word-break: break-word;
      font-size: 1.25rem;
    }

    .project-long-desc {
      word-break: break-word;
      font-size: 0.9rem;
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
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
