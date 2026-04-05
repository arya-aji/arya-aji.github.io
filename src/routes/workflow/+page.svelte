<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';

  const steps = [
    {
      id: 1,
      phase: 'Spark',
      title: 'Idea & Insight',
      emoji: '💡',
      color: '#f5c542',
      description:
        'Every project starts with a spark — a problem worth solving, a user pain point, or an opportunity hiding in plain sight. I collect signals from conversations, observations, and curiosity.',
      details: ['Problem framing', 'Market gap analysis', 'User pain points', 'Opportunity mapping'],
      output: 'A clear "Why" — the core problem statement.',
    },
    {
      id: 2,
      phase: 'Discover',
      title: 'Research & Scoping',
      emoji: '🔍',
      color: '#60a5fa',
      description:
        'Before writing a single line of code, I dig deep. Understanding the users, the constraints, and the competitive landscape ensures we\'re solving the *right* problem.',
      details: ['User research', 'Feasibility check', 'Competitive analysis', 'Scope definition'],
      output: 'A scoped brief: what we build, and what we don\'t.',
    },
    {
      id: 3,
      phase: 'Design',
      title: 'Architecture & Blueprint',
      emoji: '📐',
      color: '#a78bfa',
      description:
        'Fuzzy ideas become concrete blueprints. System architecture, data models, tech stack decisions, and UI/UX flows are all defined before the first commit.',
      details: ['System architecture', 'Tech stack selection', 'Data modeling', 'UI/UX wireframes'],
      output: 'A technical spec & design mockup ready to build.',
    },
    {
      id: 4,
      phase: 'Build',
      title: 'Development & Iteration',
      emoji: '⚙️',
      color: '#34d399',
      description:
        'Rapid, iterative development. From prototype to polished product — features are built in short cycles with continuous testing and feedback loops baked in.',
      details: ['Iterative sprints', 'Feature development', 'Testing & QA', 'Code review'],
      output: 'A working, tested, production-ready product.',
    },
    {
      id: 5,
      phase: 'Ship',
      title: 'Deploy & Launch',
      emoji: '🚀',
      color: '#fb923c',
      description:
        'Taking the project live with confidence. CI/CD pipelines, performance optimisation, and monitoring ensure a smooth launch and a stable, fast experience.',
      details: ['CI/CD pipelines', 'Performance tuning', 'Monitoring & alerts', 'Launch strategy'],
      output: 'Live product — accessible, fast, and observable.',
    },
    {
      id: 6,
      phase: 'Evolve',
      title: 'Reflect & Improve',
      emoji: '🔄',
      color: '#f472b6',
      description:
        'A launched project is just the beginning. Real-world feedback, usage analytics, and retrospectives feed directly into the next iteration — closing the loop.',
      details: ['User feedback', 'Analytics review', 'Retrospective', 'Backlog refinement'],
      output: 'Prioritised improvements — the next spark is already here.',
    },
  ] as const;

  let visibleSteps = $state<Set<number>>(new Set());
  let stepEls: HTMLElement[] = [];

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.step);
            visibleSteps = new Set([...visibleSteps, idx]);
          }
        });
      },
      { threshold: 0.2 }
    );
    stepEls.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Workflow | Arya Aji Kusuma</title>
  <meta
    name="description"
    content="How I turn ideas and insights into shipped projects — a visual walkthrough of my end-to-end development workflow."
  />
</svelte:head>

<Navbar />

<main class="page-main">
  <div class="container">

    <!-- Page header -->
    <div class="page-header">
      <p class="page-eyebrow">Process</p>
      <h1 class="page-title">From Idea to Reality</h1>
      <p class="page-subtitle">
        A visual walkthrough of how raw ideas and insights become shipped, working projects —
        step by step, with intention at every stage.
      </p>
    </div>

    <!-- Flowchart -->
    <div class="flow">
      {#each steps as step, i}
        <!-- Step card -->
        <div
          class="step"
          class:visible={visibleSteps.has(step.id)}
          data-step={step.id}
          bind:this={stepEls[i]}
          style="--step-color: {step.color}; --delay: {i * 80}ms"
        >
          <!-- Left: number + connector line -->
          <div class="step-spine">
            <div class="step-node">
              <span class="step-emoji">{step.emoji}</span>
            </div>
            {#if i < steps.length - 1}
              <div class="step-line"></div>
            {/if}
          </div>

          <!-- Right: content -->
          <div class="step-body">
            <div class="step-meta">
              <span class="step-phase">{step.phase}</span>
              <span class="step-num">0{step.id}</span>
            </div>
            <h2 class="step-title">{step.title}</h2>
            <p class="step-desc">{step.description}</p>

            <div class="step-details">
              {#each step.details as detail}
                <span class="detail-tag">{detail}</span>
              {/each}
            </div>

            <div class="step-output">
              <span class="output-label">Output</span>
              <span class="output-text">{step.output}</span>
            </div>
          </div>
        </div>

        <!-- Arrow between steps -->
        {#if i < steps.length - 1}
          <div class="flow-arrow" class:visible={visibleSteps.has(step.id)}>
            <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
              <line x1="12" y1="0" x2="12" y2="22" stroke="var(--ctp-surface2)" stroke-width="2" stroke-dasharray="4 3"/>
              <polyline points="6,18 12,26 18,18" stroke="var(--ctp-overlay1)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        {/if}
      {/each}
    </div>

    <!-- Bottom tagline -->
    <div class="closing">
      <div class="closing-icon">✦</div>
      <p class="closing-text">Ideas, Realized.</p>
      <p class="closing-sub">Repeat.</p>
    </div>

  </div>
</main>

<Footer />

<style>
  .page-main {
    min-height: calc(100vh - 64px);
    padding: 64px 0 100px;
  }

  /* ── Page header ─────────────────────────────────────── */
  .page-header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 80px;
  }

  .page-eyebrow {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 12px;
    font-family: 'JetBrains Mono', monospace;
  }

  .page-title {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    color: var(--ctp-text);
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 16px;
  }

  .page-subtitle {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--ctp-subtext1);
  }

  /* ── Flow container ──────────────────────────────────── */
  .flow {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  /* ── Step ────────────────────────────────────────────── */
  .step {
    display: grid;
    grid-template-columns: 56px 1fr;
    gap: 0 24px;
    opacity: 0;
    transform: translateX(-24px);
    transition: opacity 0.55s ease var(--delay), transform 0.55s ease var(--delay);
  }

  .step.visible {
    opacity: 1;
    transform: translateX(0);
  }

  /* Spine: node + vertical line */
  .step-spine {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .step-node {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: color-mix(in srgb, var(--step-color) 15%, var(--ctp-surface0));
    border: 2px solid color-mix(in srgb, var(--step-color) 40%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    flex-shrink: 0;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .step.visible .step-node {
    border-color: var(--step-color);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--step-color) 12%, transparent);
  }

  .step-line {
    width: 2px;
    flex: 1;
    min-height: 24px;
    background: linear-gradient(to bottom, var(--step-color), var(--ctp-surface1));
    opacity: 0.35;
    margin: 4px 0;
  }

  /* Body */
  .step-body {
    padding-bottom: 36px;
  }

  .step-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  .step-phase {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--step-color);
    font-family: 'JetBrains Mono', monospace;
  }

  .step-num {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--ctp-overlay1);
    font-family: 'JetBrains Mono', monospace;
  }

  .step-title {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin-bottom: 10px;
    line-height: 1.2;
  }

  .step-desc {
    font-size: 0.95rem;
    line-height: 1.75;
    color: var(--ctp-subtext1);
    margin-bottom: 16px;
  }

  .step-details {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
  }

  .detail-tag {
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 500;
    background: color-mix(in srgb, var(--step-color) 10%, var(--ctp-surface0));
    color: color-mix(in srgb, var(--step-color) 80%, var(--ctp-text));
    border: 1px solid color-mix(in srgb, var(--step-color) 25%, transparent);
  }

  .step-output {
    display: flex;
    align-items: baseline;
    gap: 10px;
    padding: 10px 14px;
    border-radius: 10px;
    background: var(--ctp-surface0);
    border-left: 3px solid var(--step-color);
  }

  .output-label {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--step-color);
    font-family: 'JetBrains Mono', monospace;
    flex-shrink: 0;
  }

  .output-text {
    font-size: 0.88rem;
    color: var(--ctp-subtext0);
    line-height: 1.5;
  }

  /* ── Arrow between steps ─────────────────────────────── */
  .flow-arrow {
    display: flex;
    justify-content: flex-start;
    padding-left: 16px;
    opacity: 0;
    transition: opacity 0.4s ease 0.3s;
    margin: -8px 0;
  }

  .flow-arrow.visible {
    opacity: 1;
  }

  /* ── Closing tagline ─────────────────────────────────── */
  .closing {
    text-align: center;
    margin-top: 64px;
    padding-top: 64px;
    border-top: 1px solid var(--ctp-surface0);
  }

  .closing-icon {
    font-size: 1.5rem;
    color: var(--accent);
    margin-bottom: 12px;
  }

  .closing-text {
    font-size: clamp(2rem, 6vw, 4rem);
    font-weight: 800;
    color: var(--ctp-text);
    letter-spacing: -0.02em;
    line-height: 1;
    margin-bottom: 8px;
  }

  .closing-sub {
    font-size: 1rem;
    color: var(--ctp-overlay1);
    font-family: 'JetBrains Mono', monospace;
  }

  /* ── Responsive ──────────────────────────────────────── */
  @media (max-width: 600px) {
    .step {
      grid-template-columns: 44px 1fr;
      gap: 0 16px;
    }

    .step-node {
      width: 44px;
      height: 44px;
      font-size: 1.2rem;
      border-radius: 12px;
    }

    .step-title {
      font-size: 1.15rem;
    }

    .flow-arrow {
      padding-left: 10px;
    }
  }
</style>
