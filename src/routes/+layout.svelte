<script lang="ts">
  import '$lib/styles/global.css';
  import { theme, accent, bgEffect, snowEffect, mouseTremorEffect } from '$lib/stores/theme';
  import { onMount } from 'svelte';
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
  let mounted = $state(false);

  // --- Mouse Tremor state ---
  let tremorActive = false;
  let tremorRafId = 0;
  let lastX = 0;
  let lastY = 0;
  let speed = 0;

  function getTremorTargets(): HTMLElement[] {
    return Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          'nav.navbar', '.footer',
          // Home
          '.hero', '.featured-projects', '.dash-card', '.dashboard .container', '.section-header',
          // All other pages: target direct children of page-main and common elements
          '.page-main > *', '.page-main .container > *',
          '.post-card', '.post-article',
          '.grid-card', '.slider-slide',
          '.hero-row', '.photo-col', '.text-col'
        ].join(', ')
      )
    );
  }

  function onPointerMove(e: MouseEvent | PointerEvent) {
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    speed = Math.min(Math.sqrt(dx * dx + dy * dy), 120);
  }

  function onTouchMove(e: TouchEvent) {
    const t = e.touches[0];
    const dx = t.clientX - lastX;
    const dy = t.clientY - lastY;
    lastX = t.clientX;
    lastY = t.clientY;
    speed = Math.min(Math.sqrt(dx * dx + dy * dy), 120);
  }

  function onScroll() {
    speed = Math.min(speed + 15, 120);
  }

  function tremorLoop() {
    if (!tremorActive) return;

    const intensity = speed / 120;
    const targets = getTremorTargets();

    targets.forEach(el => {
      if (intensity < 0.02) {
        el.style.transform = '';
        return;
      }
      const tx = (Math.random() - 0.5) * intensity * 12;
      const ty = (Math.random() - 0.5) * intensity * 12;
      const rot = (Math.random() - 0.5) * intensity * 3;
      el.style.transform = `translate(${tx}px,${ty}px) rotate(${rot}deg)`;
    });

    speed *= 0.92;
    tremorRafId = requestAnimationFrame(tremorLoop);
  }

  function startTremor() {
    if (tremorActive) return;
    tremorActive = true;
    lastX = 0; lastY = 0; speed = 0;
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    tremorRafId = requestAnimationFrame(tremorLoop);
  }

  function stopTremor() {
    tremorActive = false;
    cancelAnimationFrame(tremorRafId);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('scroll', onScroll);
    getTremorTargets().forEach(el => { el.style.transform = ''; });
  }

  onMount(() => {
    document.documentElement.setAttribute('data-theme', $theme);
    document.documentElement.setAttribute('data-accent', $accent);
    mounted = true;
  });

  $effect(() => {
    if (!mounted) return;
    if ($mouseTremorEffect) {
      startTremor();
    } else {
      stopTremor();
    }
  });
</script>

<svelte:head>
  <title>Arya Aji Kusuma</title>
  <meta name="description" content="Arya Aji Kusuma - Developer from Jakarta, Indonesia. Building web applications, tools, and geospatial systems." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

{#if $bgEffect}
  <div class="bg-effect">
    <div class="bg-blob"></div>
    <div class="bg-blob"></div>
    <div class="bg-blob"></div>
  </div>
{/if}

{#if $snowEffect}
  <div class="snow-container" aria-hidden="true">
    {#each Array(60) as _, i}
      <div
        class="snowflake"
        style="
          left: {Math.random() * 100}%;
          animation-duration: {4 + Math.random() * 6}s;
          animation-delay: {Math.random() * 5}s;
          opacity: {0.4 + Math.random() * 0.6};
          font-size: {6 + Math.random() * 12}px;
        "
      >❄</div>
    {/each}
  </div>
{/if}

<div class="app" class:mounted>
  {@render children()}
</div>

<style>
  .app {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .app.mounted {
    opacity: 1;
  }

  .snow-container {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
  }

  .snowflake {
    position: absolute;
    top: -20px;
    color: var(--ctp-text);
    animation: snowfall linear infinite;
    will-change: transform;
  }

  @keyframes snowfall {
    0% {
      transform: translateY(-10px) translateX(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) translateX(40px) rotate(360deg);
      opacity: 0.2;
    }
  }
</style>
