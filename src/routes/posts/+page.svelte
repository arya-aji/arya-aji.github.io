<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  interface Post {
    slug: string;
    title: string;
    date: string;
    dateDisplay: string;
    summary: string;
    tags: string[];
  }

  const posts: Post[] = [
    {
      slug: 'aws-lambda-handler-gotchas',
      title: 'AWS Lambda InvalidEntrypoint Debugging',
      date: '2025-11-28',
      dateDisplay: 'November 28, 2025',
      summary: 'Runtime.InvalidEntrypoint can mean async handlers, architecture mismatches, or file permissions — CloudWatch won\'t tell you which.',
      tags: ['aws', 'lambda', 'python', 'docker', 'debugging']
    },
    {
      slug: 'aws-cdk-sso-hell',
      title: 'AWS CDK Credentials Hell',
      date: '2025-11-26',
      dateDisplay: 'November 26, 2025',
      summary: 'Fix AWS CDK InvalidClientTokenId error after migrating to AWS SSO. The solution: delete stale ~/.aws/credentials.',
      tags: ['aws', 'cdk', 'sso', 'debugging']
    },
    {
      slug: 'hello-world',
      title: 'Hello World',
      date: '2025-10-19',
      dateDisplay: 'October 19, 2025',
      summary: 'Hey there — What this site is built with and how it works.',
      tags: ['meta', 'web-dev', 'sveltekit']
    },
    {
      slug: 'fastapi-cancel-on-disconnect',
      title: 'Stop Burning CPU on Dead FastAPI Streams',
      date: '2025-07-06',
      dateDisplay: 'July 06, 2025',
      summary: 'Monitor FastAPI client connections and auto-cancel abandoned streaming tasks with structured concurrency.',
      tags: ['fastapi', 'python', 'async', 'streaming']
    },
    {
      slug: 'agno-stop-button',
      title: 'How to Stop AI Streams in Agno',
      date: '2025-07-05',
      dateDisplay: 'July 05, 2025',
      summary: 'Build reliable cancellation for Agno AI streaming with FastAPI, WebSockets, and Redis. 5 battle-tested patterns with real failure modes.',
      tags: ['agno', 'ai-streaming', 'fastapi', 'cancellation', 'redis']
    }
  ];

  const tagColors: Record<string, string> = {
    aws: 'var(--ctp-peach)',
    lambda: 'var(--ctp-yellow)',
    python: 'var(--ctp-blue)',
    docker: 'var(--ctp-sapphire)',
    debugging: 'var(--ctp-red)',
    cdk: 'var(--ctp-mauve)',
    sso: 'var(--ctp-lavender)',
    meta: 'var(--ctp-teal)',
    'web-dev': 'var(--ctp-green)',
    sveltekit: 'var(--ctp-flamingo)',
    fastapi: 'var(--ctp-green)',
    async: 'var(--ctp-sky)',
    streaming: 'var(--ctp-sapphire)',
    agno: 'var(--ctp-mauve)',
    'ai-streaming': 'var(--ctp-pink)',
    cancellation: 'var(--ctp-red)',
    redis: 'var(--ctp-red)',
    async2: 'var(--ctp-sky)'
  };
</script>

<svelte:head>
  <title>Posts | Jason Cameron</title>
  <meta name="description" content="Blog posts by Jason Cameron on software engineering, systems, and more." />
</svelte:head>

<Navbar />

<main class="page-main">
  <div class="container">

    <!-- Breadcrumb -->
    <h1 class="page-title">Posts</h1>
    <p class="page-subtitle">Thoughts on software, systems, and whatever else is rattling around my head.</p>

    <div class="posts-list">
      {#each posts as post}
        <a href="/posts/{post.slug}" class="post-card">
          <div class="post-meta">
            <time class="post-date" datetime={post.date}>{post.dateDisplay}</time>
          </div>
          <h2 class="post-title">{post.title}</h2>
          <p class="post-summary">{post.summary}</p>
          <div class="post-tags">
            {#each post.tags as tag}
              <span class="tag" style="--tag-color: {tagColors[tag] ?? 'var(--accent)'}">
                {tag}
              </span>
            {/each}
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
    max-width: 860px;
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

  /* Posts list */
  .posts-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .post-card {
    display: block;
    padding: 24px 28px;
    border-radius: 14px;
    background: transparent;
    border: 1px solid transparent;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
    position: relative;
  }

  .post-card::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 0;
    background: var(--accent);
    border-radius: 0 2px 2px 0;
    transition: height 0.25s ease;
  }

  .post-card:hover {
    background: var(--ctp-mantle);
    border-color: var(--ctp-surface0);
    opacity: 1;
  }

  .post-card:hover::before {
    height: 60%;
  }

  .post-meta {
    margin-bottom: 6px;
  }

  .post-date {
    font-size: 0.78rem;
    color: var(--ctp-overlay1);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    letter-spacing: 0.02em;
  }

  .post-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--ctp-text);
    margin-bottom: 8px;
    transition: color 0.2s;
    line-height: 1.3;
  }

  .post-card:hover .post-title {
    color: var(--accent);
  }

  .post-summary {
    font-size: 0.9rem;
    color: var(--ctp-subtext0);
    line-height: 1.65;
    margin-bottom: 12px;
  }

  .post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 0.7rem;
    font-weight: 500;
    border: 1px solid var(--tag-color);
    color: var(--tag-color);
    background: color-mix(in srgb, var(--tag-color) 8%, transparent);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  @media (max-width: 600px) {
    .post-card {
      padding: 18px 16px 18px 20px;
    }
  }
</style>
