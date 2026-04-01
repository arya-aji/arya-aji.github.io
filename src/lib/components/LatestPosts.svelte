<script lang="ts">
  import { FileText, ExternalLink } from 'lucide-svelte';

  const posts = [
    {
      title: 'AWS Lambda InvalidEntrypoint Debugging',
      date: 'Nov 28, 2025',
      href: '/posts/aws-lambda-handler-gotchas'
    },
    {
      title: 'AWS CDK Credentials Hell',
      date: 'Nov 26, 2025',
      href: '/posts/aws-cdk-sso-hell'
    },
    {
      title: 'Hello World',
      date: 'Oct 19, 2025',
      href: '/posts/hello-world'
    },
    {
      title: 'Stop Burning CPU on Dead FastAPI Streams',
      date: 'Jul 06, 2025',
      href: '/posts/fastapi-cancel-on-disconnect'
    }
  ];
</script>

<div class="card posts-card">
  <div class="card-header">
    <div class="header-left">
      <FileText size={16} />
      <span class="card-title">Latest Posts</span>
    </div>
    <a href="/posts" class="header-link">
      <ExternalLink size={14} />
    </a>
  </div>

  <div class="posts-list">
    {#each posts as post}
      <a href={post.href} class="post-item">
        <span class="post-title">{post.title}</span>
        <span class="post-dash">—</span>
        <span class="post-date">{post.date}</span>
      </a>
    {/each}
  </div>
</div>

<style>
  .posts-card {
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

  .header-link {
    color: var(--accent);
    display: flex;
    align-items: center;
    transition: color 0.2s;
  }

  .posts-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .post-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: background 0.15s ease;
  }

  .post-item:hover {
    background: var(--ctp-surface0);
    opacity: 1;
  }

  .post-title {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--ctp-text);
    flex: 1;
  }

  .post-dash {
    color: var(--ctp-overlay0);
    user-select: none;
  }

  .post-date {
    font-size: 0.78rem;
    color: var(--ctp-subtext0);
    white-space: nowrap;
  }
</style>
