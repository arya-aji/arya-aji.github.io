<script lang="ts">
  import { Star, Tag } from 'lucide-svelte';
  import { ArrowRight } from 'lucide-svelte';

  const projects = [
    {
      org: 'arya-aji',
      name: 'geomon',
      description: 'Geospatial Work Area Monitoring App for BPS',
      longDesc: 'Aplikasi Geospasial Monitoring Wilkerstat untuk BPS Jakarta Pusat. Memantau dan memvisualisasikan data wilayah kerja statistik secara real-time.',
      stars: 0,
      contributors: 1,
      tags: ['svelte', 'geospasial', 'bps', 'data-viz'],
      href: 'https://github.com/arya-aji/geomon'
    },
    {
      org: 'arya-aji',
      name: 'sbr-dashboard',
      description: '📊 A highly interactive TypeScript-based Dashboard',
      longDesc: 'Dashboard visualisasi data berbasis TypeScript dengan tampilan modern dan interaktif. Berfungsi untuk menyajikan analitik data dengan chart yang optimal.',
      stars: 0,
      contributors: 1,
      tags: ['typescript', 'dashboard', 'analytics', 'vercel'],
      href: 'https://github.com/arya-aji/sbr-dashboard'
    }
  ];

  const tagColors: Record<string, string> = {
    svelte: 'var(--ctp-red)',
    geospasial: 'var(--ctp-green)',
    bps: 'var(--ctp-blue)',
    'data-viz': 'var(--ctp-peach)',
    typescript: 'var(--ctp-sapphire)',
    dashboard: 'var(--ctp-teal)',
    analytics: 'var(--ctp-mauve)',
    vercel: 'var(--ctp-yellow)'
  };
</script>

<section class="featured-projects section" id="projects">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">
        <Star size={22} />
        Featured Projects
      </h2>
      <a href="/projects" class="section-link">
        View all <ArrowRight size={16} />
      </a>
    </div>

    <div class="projects-grid">
      {#each projects as project}
        <a href={project.href} class="project-card-wrapper">
          <!-- Terminal-style card -->
          <div class="terminal-card">
            <div class="terminal-header">
              <div class="terminal-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <div class="star-count">
                {project.stars.toLocaleString()}
                <Star size={14} fill="currentColor" />
              </div>
            </div>
            <div class="terminal-content-row">
              <div class="terminal-body">
              <p class="repo-name">
                <span class="repo-org">{project.org}</span>
                <span class="repo-sep"> / </span>
                <span class="repo-project">{project.name}</span>
              </p>
              <p class="repo-desc">{project.description}</p>
              <div class="contributors">
                {#each Array(Math.min(project.contributors, 5)) as _, i}
                  <div class="avatar" style="left: {i * 20}px; background: hsl({i * 60}, 60%, 50%);">
                    {#if i === 4 && project.contributors > 5}
                      +{project.contributors - 4}
                    {/if}
                  </div>
                {/each}
                <span class="contrib-text" style="margin-left: {Math.min(project.contributors, 5) * 20 + 16}px">
                  {project.contributors} Contributor{project.contributors > 1 ? 's' : ''}
                </span>
              </div>
            </div>
            <div class="terminal-preview">
              <div class="preview-placeholder" aria-label="Project Preview">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

          <!-- Info section below -->
          <div class="project-info">
            <h3 class="project-name">
              {project.name.charAt(0).toUpperCase() + project.name.slice(1)}
            </h3>
            <p class="project-desc">{project.longDesc}</p>
            <div class="project-tags">
              <Tag size={14} class="tag-icon" />
              {#each project.tags as tag}
                <span class="tag" style="--tag-color: {tagColors[tag] || 'var(--accent)'}">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .project-card-wrapper {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    overflow: hidden;
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    transition: all 0.3s ease;
  }

  .project-card-wrapper:hover {
    border-color: var(--ctp-surface1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    opacity: 1;
  }

  .terminal-card {
    background: var(--ctp-crust);
    border-radius: 12px;
    margin: 12px;
    overflow: hidden;
  }

  .terminal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
  }

  .terminal-dots {
    display: flex;
    gap: 6px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .dot.red { background: #ff5f57; }
  .dot.yellow { background: #febc2e; }
  .dot.green { background: #28c840; }

  .star-count {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--ctp-subtext0);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  .terminal-content-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 16px 16px;
    gap: 16px;
  }

  .terminal-body {
    flex: 1;
  }

  .terminal-preview {
    flex-shrink: 0;
  }

  .preview-placeholder {
    width: 130px;
    height: 85px;
    background: var(--ctp-surface0);
    border: 2px dashed var(--ctp-surface1);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ctp-overlay0);
    transition: all 0.3s ease;
  }

  .project-card-wrapper:hover .preview-placeholder {
    border-color: var(--accent);
    color: var(--accent);
    transform: scale(1.02);
  }

  .repo-name {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }

  .repo-org {
    color: var(--ctp-subtext0);
  }

  .repo-sep {
    color: var(--ctp-overlay0);
  }

  .repo-project {
    color: var(--accent);
    font-weight: 600;
  }

  .repo-desc {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.8rem;
    color: var(--ctp-subtext0);
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .contributors {
    display: flex;
    align-items: center;
    position: relative;
    height: 32px;
  }

  .avatar {
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid var(--ctp-crust);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    font-weight: 700;
    color: white;
  }

  .contrib-text {
    font-size: 0.75rem;
    color: var(--ctp-overlay1);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  .project-info {
    padding: 20px 24px 24px;
  }

  .project-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--ctp-text);
    margin-bottom: 8px;
  }

  .project-desc {
    font-size: 0.875rem;
    color: var(--ctp-subtext0);
    line-height: 1.6;
    margin-bottom: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .project-tags {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    color: var(--ctp-overlay0);
  }

  .tag {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 500;
    border: 1px solid var(--tag-color);
    color: var(--tag-color);
    background: color-mix(in srgb, var(--tag-color) 8%, transparent);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
