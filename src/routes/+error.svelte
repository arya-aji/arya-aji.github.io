<script lang="ts">
  import { page } from "$app/stores";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  const messages: Record<
    number,
    { title: string; desc: string; hint: string }
  > = {
    404: {
      title: "Page Not Found",
      desc: "The page you're looking for doesn't exist or has been moved.",
      hint: "Check the URL or head back home.",
    },
    500: {
      title: "Internal Server Error",
      desc: "Something went wrong on our end. This one is on us.",
      hint: "Try refreshing the page, or come back later.",
    },
    403: {
      title: "Forbidden",
      desc: "You don't have permission to access this page.",
      hint: "If you believe this is a mistake, please get in touch.",
    },
  };

  let status = $derived($page.status ?? 404);
  let msg = $derived(
    messages[status] ?? {
      title: "Unexpected Error",
      desc: $page.error?.message ?? "An unexpected error occurred.",
      hint: "Try going back or returning to the home page.",
    },
  );

  // Terminal-style typed output lines
  let lines = $derived([
    `$ curl https://arya-aji.dev${$page.url?.pathname ?? "/???"}`,
    `> HTTP/${status}`,
    `> X-Error: ${msg.title}`,
    `> Content-Type: text/html`,
    ``,
    `  ${msg.desc}`,
    `  ${msg.hint}`,
  ]);
</script>

<svelte:head>
  <title>{status} — {msg.title} | Arya Aji Kusuma</title>
</svelte:head>

<Navbar />

<main class="error-main">
  <div class="container">
    <!-- Background grid lines decoration -->
    <div class="grid-bg" aria-hidden="true"></div>

    <div class="error-content">
      <!-- Big glitchy status code -->
      <div class="status-display" data-text={status}>
        <span class="status-code" aria-label="Error {status}">{status}</span>
      </div>

      <!-- Error title -->
      <h1 class="error-title">{msg.title}</h1>

      <!-- Terminal output block -->
      <div
        class="terminal-block"
        role="complementary"
        aria-label="Error details"
      >
        <div class="terminal-bar">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
          <span class="terminal-filename">error.log</span>
        </div>
        <div class="terminal-body">
          {#each lines as line, i}
            <div class="terminal-line" style="animation-delay: {i * 60}ms">
              {#if line === ""}
                <br />
              {:else if line.startsWith("$")}
                <span class="t-prompt">$</span>
                <span class="t-cmd">{line.slice(1)}</span>
              {:else if line.startsWith(">")}
                <span class="t-header">{line}</span>
              {:else}
                <span class="t-body">{line}</span>
              {/if}
            </div>
          {/each}
          <div class="terminal-line t-cursor-line">
            <span class="t-prompt">$</span>
            <span class="t-blink">▌</span>
          </div>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="error-actions">
        <a href="/" class="btn-primary">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline
              points="9 22 9 12 15 12 15 22"
            />
          </svg>
          Go Home
        </a>
        <button class="btn-secondary" onclick={() => history.back()}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
          </svg>
          Go Back
        </button>
        <a href="/projects" class="btn-ghost">Browse Projects →</a>
      </div>
    </div>
  </div>
</main>

<Footer />

<style>
  .error-main {
    min-height: calc(100vh - 64px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 24px;
    position: relative;
    overflow: hidden;
  }

  .container {
    max-width: 700px;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  /* Subtle grid background */
  .grid-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    background-image: linear-gradient(
        color-mix(in srgb, var(--accent) 5%, transparent) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        color-mix(in srgb, var(--accent) 5%, transparent) 1px,
        transparent 1px
      );
    background-size: 48px 48px;
    pointer-events: none;
    mask-image: radial-gradient(
      ellipse 80% 80% at 50% 50%,
      black 30%,
      transparent 100%
    );
  }

  .error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 32px;
  }

  /* ─── Big glitchy status code ──────────────────── */
  .status-display {
    position: relative;
    line-height: 1;
  }

  .status-code {
    font-family: "JetBrains Mono", "Fira Code", monospace;
    font-size: clamp(6rem, 20vw, 10rem);
    font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 2px var(--accent);
    letter-spacing: -0.04em;
    position: relative;
    animation: glitch-main 4s infinite;
    display: block;
  }

  /* Glitch pseudo-layers */
  .status-display::before,
  .status-display::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-family: "JetBrains Mono", "Fira Code", monospace;
    font-size: clamp(6rem, 20vw, 10rem);
    font-weight: 900;
    letter-spacing: -0.04em;
    overflow: hidden;
    pointer-events: none;
  }

  .status-display::before {
    color: color-mix(in srgb, var(--ctp-red) 60%, transparent);
    -webkit-text-stroke: 0;
    clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
    animation: glitch-before 4s infinite;
    left: -3px;
  }

  .status-display::after {
    color: color-mix(in srgb, var(--ctp-blue) 60%, transparent);
    -webkit-text-stroke: 0;
    clip-path: polygon(0 60%, 100% 60%, 100% 75%, 0 75%);
    animation: glitch-after 4s infinite;
    left: 3px;
  }

  @keyframes glitch-main {
    0%,
    94%,
    100% {
      transform: none;
      filter: none;
    }
    95% {
      transform: skewX(-2deg);
      filter: blur(0.4px);
    }
    96% {
      transform: skewX(2deg);
    }
    97% {
      transform: none;
    }
    98% {
      transform: skewX(-1deg);
    }
  }
  @keyframes glitch-before {
    0%,
    93%,
    100% {
      transform: translateX(0);
      opacity: 0;
    }
    94%,
    97% {
      transform: translateX(-4px);
      opacity: 0.8;
    }
    95% {
      transform: translateX(4px);
      opacity: 0.6;
    }
  }
  @keyframes glitch-after {
    0%,
    93%,
    100% {
      transform: translateX(0);
      opacity: 0;
    }
    94%,
    97% {
      transform: translateX(4px);
      opacity: 0.8;
    }
    96% {
      transform: translateX(-2px);
      opacity: 0.5;
    }
  }

  /* ─── Error title ──────────────────────────────── */
  .error-title {
    font-size: clamp(1.4rem, 4vw, 2rem);
    font-weight: 700;
    color: var(--ctp-text);
    margin: -16px 0 0;
  }

  /* ─── Terminal block ───────────────────────────── */
  .terminal-block {
    width: 100%;
    background: color-mix(in srgb, var(--ctp-crust) 90%, transparent);
    border: 1px solid var(--ctp-surface0);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
    text-align: left;
  }

  .terminal-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 16px;
    background: var(--ctp-mantle);
    border-bottom: 1px solid var(--ctp-surface0);
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .dot-red {
    background: #ff5f57;
  }
  .dot-yellow {
    background: #febc2e;
  }
  .dot-green {
    background: #28c840;
  }

  .terminal-filename {
    margin-left: 8px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.75rem;
    color: var(--ctp-overlay0);
  }

  .terminal-body {
    padding: 20px 24px;
    font-family: "JetBrains Mono", "Fira Code", monospace;
    font-size: 0.82rem;
    line-height: 1.7;
  }

  .terminal-line {
    opacity: 0;
    animation: line-appear 0.3s ease forwards;
  }

  @keyframes line-appear {
    from {
      opacity: 0;
      transform: translateX(-6px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .t-prompt {
    color: var(--accent);
    margin-right: 6px;
  }
  .t-cmd {
    color: var(--ctp-text);
  }
  .t-header {
    color: var(--ctp-subtext0);
  }
  .t-body {
    color: var(--ctp-subtext1);
  }

  .t-cursor-line {
    opacity: 1;
    animation: none;
    margin-top: 4px;
  }
  .t-blink {
    color: var(--accent);
    animation: blink 1s step-end infinite;
    margin-left: 2px;
  }
  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0;
    }
  }

  /* ─── Action buttons ───────────────────────────── */
  .error-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn-primary {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: var(--accent);
    color: var(--ctp-base);
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    transition: all 0.2s;
    box-shadow: 0 4px 16px color-mix(in srgb, var(--accent) 30%, transparent);
  }
  .btn-primary:hover {
    opacity: 0.88;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px color-mix(in srgb, var(--accent) 40%, transparent);
  }

  .btn-secondary {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: var(--ctp-surface0);
    color: var(--ctp-text);
    border: 1px solid var(--ctp-surface1);
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s;
    font-family: "Montserrat", sans-serif;
  }
  .btn-secondary:hover {
    background: var(--ctp-surface1);
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-2px);
  }

  .btn-ghost {
    padding: 12px 20px;
    color: var(--ctp-subtext0);
    text-decoration: none;
    font-size: 0.88rem;
    font-weight: 500;
    transition: color 0.2s;
  }
  .btn-ghost:hover {
    color: var(--accent);
    opacity: 1;
  }

  @media (max-width: 480px) {
    .error-actions {
      flex-direction: column;
      width: 100%;
    }
    .btn-primary,
    .btn-secondary {
      width: 100%;
      justify-content: center;
    }
  }
</style>
