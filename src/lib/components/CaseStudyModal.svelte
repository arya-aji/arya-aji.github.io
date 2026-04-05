<script lang="ts">
  import { onMount } from 'svelte';
  import type { Project } from '$lib/data/projects';
  import { tagColors } from '$lib/data/projects';
  import { ExternalLink } from 'lucide-svelte';

  let { project, onclose }: { project: Project; onclose: () => void } = $props();

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') onclose();
  }

  onMount(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  });
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Backdrop -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="modal-backdrop" onclick={onclose} aria-hidden="true"></div>

<!-- Modal -->
<div class="modal" role="dialog" aria-modal="true" aria-label="{project.title} Case Study">
  <!-- Close button -->
  <button class="modal-close" onclick={onclose} aria-label="Close">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  </button>

  <!-- Hero image -->
  <div class="modal-hero">
    <img src={project.image} alt="{project.title} screenshot" class="hero-img" />
    <div class="hero-overlay">
      <span class="hero-tag">Case Study</span>
    </div>
  </div>

  <div class="modal-body">
    <!-- Header -->
    <div class="modal-header">
      <div class="modal-meta">
        <span class="meta-org">{project.org} / {project.name}</span>
        <span class="meta-date">{project.dateDisplay}</span>
      </div>
      <h2 class="modal-title">{project.title}</h2>
      <div class="modal-tags">
        {#each project.tags as tag}
          <span class="modal-tag" style="--tag-color: {tagColors[tag] ?? 'var(--accent)'}">
            {tag}
          </span>
        {/each}
      </div>
    </div>

    <!-- Sections -->
    <div class="sections">

      {#if project.idea}
        <div class="cs-section">
          <div class="cs-section-label">
            <span class="cs-icon">💡</span> Idea
          </div>
          <div class="cs-content idea-block">
            <span class="idea-keyword">idea</span><span class="idea-eq"> = </span><span class="idea-val">"{project.idea}"</span>
          </div>
        </div>
      {/if}

      {#if project.problem}
        <div class="cs-section">
          <div class="cs-section-label">
            <span class="cs-icon">🎯</span> Problem
          </div>
          <p class="cs-content cs-text">{project.problem}</p>
        </div>
      {/if}

      {#if project.solution}
        <div class="cs-section">
          <div class="cs-section-label">
            <span class="cs-icon">⚙️</span> Solution & Tech
          </div>
          <p class="cs-content cs-text">{project.solution}</p>
        </div>
      {/if}

      {#if project.challenges && project.challenges.length > 0}
        <div class="cs-section">
          <div class="cs-section-label">
            <span class="cs-icon">🧩</span> Challenges & How I Solved Them
          </div>
          <div class="cs-content challenge-list">
            {#each project.challenges as c}
              <div class="challenge-item">
                <p class="challenge-title">{c.title}</p>
                <p class="challenge-how">{c.how}</p>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      {#if project.results && project.results.length > 0}
        <div class="cs-section">
          <div class="cs-section-label">
            <span class="cs-icon">📊</span> Results & Impact
          </div>
          <div class="cs-content results-grid">
            {#each project.results as r}
              <div class="result-card">
                <span class="result-metric">{r.metric}</span>
                <span class="result-label">{r.label}</span>
              </div>
            {/each}
          </div>
        </div>
      {/if}

    </div>

    <!-- Actions -->
    <div class="modal-actions">
      {#if project.github}
        <a href={project.github} target="_blank" rel="noopener noreferrer" class="action-btn outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3-.3 6-1.5 6-6.4a5.1 5.1 0 0 0-1.4-3.6 4.9 4.9 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.8 12.8 0 0 0-7 0C4.1 1.7 3 2 3 2a4.9 4.9 0 0 0-.1 3.5A5.1 5.1 0 0 0 1.5 9.1c0 4.9 3 6.1 6 6.4-.4.4-.8 1.1-.8 2.2V22"/><path d="M9 20c-4.5 1.5-5-2.5-7-3"/></svg>
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

<style>
  /* Backdrop */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 500;
    animation: fade-in 0.2s ease;
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Modal container */
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(760px, 96vw);
    max-height: 90dvh;
    background: var(--ctp-base);
    border: 1px solid var(--ctp-surface1);
    border-radius: 20px;
    z-index: 501;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    animation: modal-in 0.25s cubic-bezier(0.34, 1.4, 0.64, 1);
    box-shadow: 0 32px 80px rgba(0,0,0,0.5);
  }

  @keyframes modal-in {
    from { opacity: 0; transform: translate(-50%, calc(-50% + 24px)) scale(0.96); }
    to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }

  /* Close button */
  .modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 10;
    background: var(--ctp-surface0);
    border: 1px solid var(--ctp-surface1);
    color: var(--ctp-subtext1);
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.15s;
  }
  .modal-close:hover {
    background: var(--ctp-surface1);
    color: var(--ctp-text);
  }

  /* Hero image */
  .modal-hero {
    flex-shrink: 0;
    height: 240px;
    position: relative;
    overflow: hidden;
    background: var(--ctp-mantle);
  }

  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 40%, var(--ctp-base));
    display: flex;
    align-items: flex-end;
    padding: 16px 24px;
  }

  .hero-tag {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 12%, var(--ctp-base));
    border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
    padding: 4px 12px;
    border-radius: 999px;
    font-family: 'JetBrains Mono', monospace;
  }

  /* Scrollable body */
  .modal-body {
    overflow-y: auto;
    padding: 28px 28px 24px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* Header */
  .modal-header {
    margin-bottom: 28px;
  }

  .modal-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
  }

  .meta-org {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: var(--ctp-subtext0);
  }

  .meta-date {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: var(--ctp-overlay1);
  }

  .modal-title {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--ctp-text);
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 14px;
  }

  .modal-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .modal-tag {
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 500;
    border: 1px solid var(--tag-color);
    color: var(--tag-color);
    background: color-mix(in srgb, var(--tag-color) 8%, transparent);
    font-family: 'JetBrains Mono', monospace;
  }

  /* Sections */
  .sections {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 28px;
  }

  .cs-section {
    border-left: 2px solid var(--ctp-surface1);
    padding-left: 18px;
  }

  .cs-section-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 10px;
    font-family: 'JetBrains Mono', monospace;
  }

  .cs-icon { font-size: 1rem; }

  .cs-content { }

  /* Idea block */
  .idea-block {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.88rem;
    padding: 10px 14px;
    background: var(--ctp-mantle);
    border-radius: 8px;
    border-left: 3px solid var(--accent);
    line-height: 1.6;
  }

  .idea-keyword { color: var(--accent); font-weight: 700; }
  .idea-eq { color: var(--ctp-subtext0); }
  .idea-val { color: var(--ctp-text); font-style: italic; }

  /* Text content */
  .cs-text {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--ctp-subtext1);
    margin: 0;
  }

  /* Challenges */
  .challenge-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .challenge-item {
    padding: 14px 16px;
    background: var(--ctp-mantle);
    border-radius: 10px;
    border: 1px solid var(--ctp-surface0);
  }

  .challenge-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--ctp-text);
    margin: 0 0 6px;
  }

  .challenge-how {
    font-size: 0.88rem;
    line-height: 1.7;
    color: var(--ctp-subtext0);
    margin: 0;
  }

  /* Results */
  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
  }

  .result-card {
    padding: 16px 14px;
    background: color-mix(in srgb, var(--accent) 6%, var(--ctp-mantle));
    border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: center;
  }

  .result-metric {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--accent);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .result-label {
    font-size: 0.78rem;
    color: var(--ctp-subtext0);
    line-height: 1.4;
  }

  /* Actions */
  .modal-actions {
    display: flex;
    gap: 12px;
    padding-top: 4px;
    border-top: 1px solid var(--ctp-surface0);
    padding-top: 20px;
    flex-shrink: 0;
  }

  .action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 11px 22px;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
    font-family: inherit;
    border: none;
    cursor: pointer;
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

  /* Mobile */
  @media (max-width: 600px) {
    .modal { border-radius: 16px 16px 0 0; top: auto; bottom: 0; left: 0; right: 0; transform: none; width: 100%; max-height: 92dvh; animation: modal-in-mobile 0.3s cubic-bezier(0.34, 1.2, 0.64, 1); }
    @keyframes modal-in-mobile { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
    .modal-hero { height: 180px; }
    .modal-body { padding: 20px 20px 16px; }
    .modal-title { font-size: 1.4rem; }
    .results-grid { grid-template-columns: repeat(2, 1fr); }
    .modal-actions { flex-direction: column; }
  }
</style>
