<script lang="ts">
  import '$lib/styles/global.css';
  import { theme, accent, bgEffect, snowEffect, mouseTremorEffect, floodEffect, grayWorldEffect } from '$lib/stores/theme';
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

    return () => {
      stopTremor();
      stopFlood();
      document.documentElement.classList.remove('gray-world');
    };
  });

  $effect(() => {
    if (!mounted) return;
    if ($mouseTremorEffect) {
      startTremor();
    } else {
      stopTremor();
    }
  });

  // --- Flood Effect state ---
  let floodActive = false;
  let floodRafId = 0;
  let floodLevel = $state(0);
  let floodDriftEls: { el: HTMLElement; origTransform: string; dx: number; dy: number; rot: number; speed: number }[] = [];
  let floodTargetsCache: HTMLElement[] = [];

  function getFloodTargets(): HTMLElement[] {
    return Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          'nav.navbar', '.footer',
          '.hero', '.featured-projects', '.dash-card', '.dashboard .container', '.section-header',
          '.page-main > *', '.page-main .container > *',
          '.post-card', '.post-article',
          '.grid-card', '.slider-slide',
          '.hero-row', '.photo-col', '.text-col'
        ].join(', ')
      )
    );
  }

  function floodLoop() {
    if (!floodActive) return;

    if (floodLevel < 110) {
      floodLevel += 0.3;
    }

    const waterTop = window.innerHeight * (1 - floodLevel / 100);

    floodTargetsCache.forEach(el => {
      const rect = el.getBoundingClientRect();
      const elCenter = rect.top + rect.height / 2;

      if (elCenter > waterTop) {
        let entry = floodDriftEls.find(d => d.el === el);
        if (!entry) {
          entry = {
            el,
            origTransform: el.style.transform || '',
            dx: (Math.random() - 0.5) * 2,
            dy: -0.3 - Math.random() * 0.5,
            rot: (Math.random() - 0.5) * 0.4,
            speed: 0.6 + Math.random() * 0.6
          };
          floodDriftEls.push(entry);
        }

        entry.dx += (Math.random() - 0.5) * 0.15;
        entry.dy = -0.2 - Math.random() * 0.3;
        entry.rot += (Math.random() - 0.5) * 0.2;

        entry.dx = Math.max(-3, Math.min(3, entry.dx));
        entry.rot = Math.max(-8, Math.min(8, entry.rot));

        const currentTransform = el.style.transform || '';
        const match = currentTransform.match(/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/);
        const curX = match ? parseFloat(match[1]) : 0;
        const curY = match ? parseFloat(match[2]) : 0;

        const nx = curX + entry.dx * entry.speed;
        const ny = curY + entry.dy * entry.speed;

        el.style.transform = `translate(${nx}px,${ny}px) rotate(${entry.rot}deg)`;
        el.style.transition = 'none';
      } else {
        // Remove from drift if element is above water
        const idx = floodDriftEls.findIndex(d => d.el === el);
        if (idx !== -1) {
          floodDriftEls[idx].el.style.transform = floodDriftEls[idx].origTransform;
          floodDriftEls[idx].el.style.transition = '';
          floodDriftEls.splice(idx, 1);
        }
      }
    });

    floodRafId = requestAnimationFrame(floodLoop);
  }

  function startFlood() {
    if (floodActive) return;
    floodActive = true;
    floodLevel = 0;
    floodDriftEls = [];
    floodTargetsCache = getFloodTargets();
    floodRafId = requestAnimationFrame(floodLoop);
  }

  function stopFlood() {
    floodActive = false;
    cancelAnimationFrame(floodRafId);
    floodLevel = 0;
    floodDriftEls.forEach(d => {
      d.el.style.transform = d.origTransform;
      d.el.style.transition = '';
    });
    floodDriftEls = [];
    floodTargetsCache = [];
  }

  $effect(() => {
    if (!mounted) return;
    if ($floodEffect) {
      startFlood();
    } else {
      stopFlood();
    }
  });

  // --- Gray World Effect ---
  $effect(() => {
    if (!mounted) return;
    if ($grayWorldEffect) {
      document.documentElement.classList.add('gray-world');
    } else {
      document.documentElement.classList.remove('gray-world');
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

{#if $floodEffect}
  <div class="flood-overlay" aria-hidden="true">
    <div class="flood-water" style="height: {floodLevel}vh;">
      <div class="flood-wave"></div>
      <div class="flood-wave wave-2"></div>
    </div>
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

  /* --- Flood Effect --- */
  .flood-overlay {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 998;
    overflow: hidden;
  }

  .flood-water {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      to bottom,
      color-mix(in srgb, var(--accent) 15%, transparent) 0%,
      color-mix(in srgb, var(--accent) 30%, transparent) 30%,
      color-mix(in srgb, var(--accent) 45%, transparent) 100%
    );
    transition: height 0.1s linear;
  }

  .flood-wave {
    position: absolute;
    top: -12px;
    left: -5%;
    width: 110%;
    height: 24px;
    background: color-mix(in srgb, var(--accent) 25%, transparent);
    border-radius: 50% 50% 0 0;
    animation: flood-wave-move 3s ease-in-out infinite;
  }

  .flood-wave.wave-2 {
    top: -8px;
    animation-delay: -1.5s;
    animation-duration: 2.5s;
    opacity: 0.6;
  }

  @keyframes flood-wave-move {
    0%, 100% { transform: translateX(-2%) scaleY(1); }
    50% { transform: translateX(2%) scaleY(1.5); }
  }

  /* --- Gray World Effect --- */
  :global(html.gray-world) {
    filter: grayscale(1) !important;
  }

  :global(html.gray-world img),
  :global(html.gray-world svg),
  :global(html.gray-world video),
  :global(html.gray-world canvas),
  :global(html.gray-world picture),
  :global(html.gray-world .leaflet-container-root) {
    visibility: hidden !important;
  }

  :global(html.gray-world *) {
    border-image: none !important;
    background-image: none !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  :global(html.gray-world .accent-dot),
  :global(html.gray-world .dot),
  :global(html.gray-world .status-dot) {
    opacity: 0.3 !important;
  }
</style>
