<script lang="ts">
  import { Zap, ExternalLink } from 'lucide-svelte';

  const commits = [
    {
      repo: 'nyx',
      message: 'feat: integrate latest commits fetching and display in project overview',
      additions: 305,
      deletions: 23,
      url: 'https://github.com/JasonLovesDoggo/nyx/commit/d73346658330be57a5f34bf2391b5ad32b519341'
    },
    {
      repo: 'Katib',
      message: 'Merge pull request #4 from JasonLovesDoggo/feature/github-streak-endp…',
      additions: 41,
      deletions: 8,
      url: 'https://github.com/JasonLovesDoggo/Katib/commit/dca9afc8c1c732d9ccbf9391e77b1fe289e2e05c'
    },
    {
      repo: 'Katib',
      message: 'Add author filtering to GetMostRecentCommit function',
      additions: 41,
      deletions: 8,
      url: 'https://github.com/JasonLovesDoggo/Katib/commit/e1e1d7df68e7c9e975d35f7394b7509ace215c80'
    }
  ];

  // GitHub-style contribution colors
  const langColors = [
    'var(--ctp-green)', 'var(--ctp-blue)', 'var(--ctp-sapphire)',
    'var(--ctp-teal)', 'var(--ctp-sky)', 'var(--ctp-mauve)',
    'var(--ctp-red)', 'var(--ctp-peach)', 'var(--ctp-yellow)',
    'var(--ctp-flamingo)'
  ];

  const langWidths = [25, 18, 14, 10, 8, 7, 6, 5, 4, 3];
</script>

<div class="card commits-card">
  <div class="card-header">
    <div class="header-left">
      <Zap size={16} />
      <span class="card-title">Recent Commits</span>
    </div>
    <a href="/projects" class="info-link">[info]</a>
  </div>

  <div class="commit-list">
    {#each commits as commit}
      <a href={commit.url} target="_blank" rel="noopener noreferrer" class="commit-item">
        <div class="commit-info">
          <span class="commit-repo">{commit.repo}:</span>
          <span class="commit-msg">{commit.message}</span>
        </div>
        <div class="commit-stats">
          <span class="stat-add">+{commit.additions}</span>
          <span class="stat-sep">/</span>
          <span class="stat-del">-{commit.deletions}</span>
        </div>
      </a>
    {/each}
  </div>

  <div class="commits-footer">
    <a href="https://github.com/jasonlovesdoggo" target="_blank" rel="noopener noreferrer" class="gh-link">
      View on GitHub <ExternalLink size={14} />
    </a>

    <div class="lang-bar">
      {#each langWidths as width, i}
        <div
          class="lang-segment"
          style="width: {width}%; background: {langColors[i]}"
        ></div>
      {/each}
    </div>
  </div>
</div>

<style>
  .commits-card {
    padding: 20px;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--ctp-text);
  }

  .card-title {
    font-weight: 600;
    font-size: 0.9rem;
  }

  .info-link {
    font-size: 0.75rem;
    color: var(--accent);
    text-decoration: none;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  .info-link:hover {
    text-decoration: underline;
  }

  .commit-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }

  .commit-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: background 0.15s ease;
  }

  .commit-item:hover {
    background: var(--ctp-surface0);
    opacity: 1;
  }

  .commit-info {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    flex: 1;
  }

  .commit-repo {
    font-weight: 600;
    font-size: 0.82rem;
    color: var(--ctp-text);
    white-space: nowrap;
  }

  .commit-msg {
    font-size: 0.82rem;
    color: var(--ctp-subtext0);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .commit-stats {
    display: flex;
    align-items: center;
    gap: 2px;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.75rem;
    white-space: nowrap;
  }

  .stat-add {
    color: var(--ctp-green);
    font-weight: 600;
  }

  .stat-sep {
    color: var(--ctp-overlay0);
  }

  .stat-del {
    color: var(--ctp-red);
    font-weight: 600;
  }

  .commits-footer {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .gh-link {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--accent);
    text-decoration: none;
    white-space: nowrap;
  }

  .gh-link:hover {
    text-decoration: underline;
  }

  .lang-bar {
    flex: 1;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
  }

  .lang-segment {
    height: 100%;
    transition: width 0.3s ease;
  }

  .lang-segment:first-child {
    border-radius: 4px 0 0 4px;
  }

  .lang-segment:last-child {
    border-radius: 0 4px 4px 0;
  }
</style>
