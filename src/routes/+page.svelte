<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import FeaturedProjects from '$lib/components/FeaturedProjects.svelte';
  import DashboardGrid from '$lib/components/DashboardGrid.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { blackHoleEffect } from '$lib/stores/theme';
  import { onMount } from 'svelte';

  let mounted = $state(false);

  // --- Black Hole state ---
  let bhElementAnims: Animation[] = [];
  let bhParticles: { el: HTMLElement; anim: Animation }[] = [];
  let vortexVisible = $state(false);

  const COLORS = [
    'var(--accent)', 'var(--ctp-text)', 'var(--ctp-surface2)',
    'var(--ctp-overlay1)', 'var(--ctp-subtext0)'
  ];

  onMount(() => { mounted = true; });

  function getTargets(): HTMLElement[] {
    return Array.from(
      document.querySelectorAll<HTMLElement>(
        'nav.navbar, .hero, .featured-projects, .dash-card:not(.funzone-card), .footer, .section-header'
      )
    );
  }

  function cleanupParticles(arr: { el: HTMLElement; anim: Animation }[]) {
    arr.forEach(p => { p.anim.cancel(); p.el.remove(); });
    arr.length = 0;
  }

  function cleanupBlackHole() {
    bhElementAnims.forEach(a => a.cancel());
    bhElementAnims = [];
    cleanupParticles(bhParticles);
  }

  function spawnParticles(
    arr: { el: HTMLElement; anim: Animation }[],
    x: number, y: number, w: number, h: number,
    tx: number, ty: number,
    baseDelay: number, count: number
  ) {
    for (let i = 0; i < count; i++) {
      const size = 3 + Math.random() * 12;
      const px = x + Math.random() * w;
      const py = y + Math.random() * h;

      const scatterAngle = Math.random() * Math.PI * 2;
      const scatterDist = 60 + Math.random() * 140;
      const sx = Math.cos(scatterAngle) * scatterDist;
      const sy = Math.sin(scatterAngle) * scatterDist;

      const toCx = tx - px;
      const toCy = ty - py;

      const el = document.createElement('div');
      el.style.cssText = `
        position:fixed;left:${px}px;top:${py}px;
        width:${size}px;height:${size}px;
        background:${COLORS[i % COLORS.length]};
        border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
        z-index:999;pointer-events:none;
      `;
      document.body.appendChild(el);

      const dur = 1000 + Math.random() * 500;
      const delay = baseDelay + 50 + Math.random() * 250;
      const rot1 = 120 + Math.random() * 240;
      const rot2 = 400 + Math.random() * 320;

      const anim = el.animate([
        { transform: 'translate(0,0) scale(1) rotate(0deg)', opacity: '1' },
        { transform: `translate(${sx}px,${sy}px) scale(1.3) rotate(${rot1}deg)`, opacity: '0.9', offset: 0.35 },
        { transform: `translate(${toCx * 0.7 + sx * 0.3}px,${toCy * 0.7 + sy * 0.3}px) scale(0.4) rotate(${rot2}deg)`, opacity: '0.5', offset: 0.7 },
        { transform: `translate(${toCx}px,${toCy}px) scale(0) rotate(${rot2 + 180}deg)`, opacity: '0' }
      ], {
        duration: dur,
        delay,
        easing: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
        fill: 'forwards'
      });

      const entry = { el, anim };
      arr.push(entry);
      anim.addEventListener('finish', () => {
        el.remove();
        const idx = arr.indexOf(entry);
        if (idx !== -1) arr.splice(idx, 1);
      }, { once: true });
    }
  }

  function spawnBurstFromPoint(arr: { el: HTMLElement; anim: Animation }[], cx: number, cy: number, count: number) {
    for (let i = 0; i < count; i++) {
      const size = 3 + Math.random() * 8;
      const angle = Math.random() * Math.PI * 2;
      const dist = 200 + Math.random() * 350;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;

      const el = document.createElement('div');
      el.style.cssText = `
        position:fixed;left:${cx}px;top:${cy}px;
        width:${size}px;height:${size}px;
        background:${COLORS[i % COLORS.length]};
        border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
        z-index:999;pointer-events:none;
      `;
      document.body.appendChild(el);

      const anim = el.animate([
        { transform: 'translate(0,0) scale(0) rotate(0deg)', opacity: '0' },
        { transform: `translate(${tx * 0.35}px,${ty * 0.35}px) scale(1.3) rotate(180deg)`, opacity: '1', offset: 0.3 },
        { transform: `translate(${tx}px,${ty}px) scale(0) rotate(360deg)`, opacity: '0' }
      ], {
        duration: 800 + Math.random() * 400,
        delay: Math.random() * 300,
        easing: 'ease-out',
        fill: 'forwards'
      });

      const entry = { el, anim };
      arr.push(entry);
      anim.addEventListener('finish', () => {
        el.remove();
        const idx = arr.indexOf(entry);
        if (idx !== -1) arr.splice(idx, 1);
      }, { once: true });
    }
  }

  // ─── Black Hole ───────────────────────────────────────

  function activateBlackHole() {
    cleanupBlackHole();
    vortexVisible = true;

    const targets = getTargets();
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    targets.forEach((el, i) => {
      const delay = i * 120;
      const rect = el.getBoundingClientRect();

      const anim = el.animate([
        { transform: 'scale(1) skew(0deg, 0deg)', opacity: '1', filter: 'blur(0px)' },
        { transform: 'scale(1.04) skew(3deg, 1deg)', opacity: '0.6', filter: 'blur(1px)', offset: 0.2 },
        { transform: 'scale(0.85) skew(-5deg, -3deg)', opacity: '0.25', filter: 'blur(3px)', offset: 0.5 },
        { transform: 'scale(0) skew(10deg, 6deg)', opacity: '0', filter: 'blur(8px)' }
      ], {
        duration: 700,
        delay,
        easing: 'ease-in',
        fill: 'forwards'
      });

      bhElementAnims.push(anim);
      spawnParticles(bhParticles, rect.left, rect.top, rect.width, rect.height, cx, cy, delay, 20);
    });
  }

  function reverseBlackHole() {
    if (bhElementAnims.length === 0) { vortexVisible = false; return; }

    cleanupParticles(bhParticles);
    bhElementAnims.forEach(anim => anim.reverse());

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    spawnBurstFromPoint(bhParticles, cx, cy, 35);

    const last = bhElementAnims[bhElementAnims.length - 1];
    if (last) {
      last.addEventListener('finish', () => {
        vortexVisible = false;
        bhElementAnims.forEach(a => a.cancel());
        bhElementAnims = [];
      }, { once: true });
    }
  }

  $effect(() => {
    if (!mounted) return;
    if ($blackHoleEffect) {
      activateBlackHole();
    } else if (bhElementAnims.length > 0) {
      reverseBlackHole();
    }
  });
</script>

<svelte:head>
  <title>Arya Aji Kusuma | Software Engineer</title>
  <meta name="description" content="Portfolio of Arya Aji Kusuma — Software Engineer building web apps, dashboards, and SaaS products." />
</svelte:head>

<Navbar />

<main>
  <Hero />
  <FeaturedProjects />
  <DashboardGrid />
</main>

<Footer />

{#if vortexVisible}
  <div class="blackhole-overlay">
    <div class="blackhole-vortex" class:collapsing={!$blackHoleEffect}>
      <div class="vortex-ring ring-outer"></div>
      <div class="vortex-ring ring-mid"></div>
      <div class="vortex-ring ring-inner"></div>
      <div class="vortex-core"></div>
    </div>
  </div>
{/if}

<style>
  main {
    min-height: calc(100vh - 64px);
  }

  .blackhole-overlay {
    position: fixed;
    inset: 0;
    z-index: 100;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .blackhole-vortex {
    width: 160px;
    height: 160px;
    position: relative;
    animation: vortex-appear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .blackhole-vortex.collapsing {
    animation: vortex-collapse 0.8s ease-in forwards;
  }

  .vortex-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 3px solid var(--accent);
  }

  .ring-outer {
    opacity: 0.35;
    animation: vortex-spin 3s linear infinite;
  }

  .ring-mid {
    inset: 20px;
    border-color: var(--ctp-text);
    opacity: 0.25;
    animation: vortex-spin 2s linear infinite reverse;
  }

  .ring-inner {
    inset: 40px;
    border-width: 2px;
    opacity: 0.5;
    animation: vortex-spin 1.2s linear infinite;
  }

  .vortex-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 36px;
    height: 36px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
    box-shadow:
      0 0 40px var(--accent),
      0 0 80px color-mix(in srgb, var(--accent) 50%, transparent),
      0 0 120px color-mix(in srgb, var(--accent) 20%, transparent);
    animation: vortex-pulse 0.8s ease-in-out infinite alternate;
  }

  @keyframes vortex-appear {
    0% { transform: scale(0) rotate(-180deg); opacity: 0; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  @keyframes vortex-collapse {
    0% { transform: scale(1); opacity: 1; }
    70% { transform: scale(1.2); opacity: 0.8; }
    100% { transform: scale(0); opacity: 0; }
  }

  @keyframes vortex-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes vortex-pulse {
    0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.6; }
    100% { transform: translate(-50%, -50%) scale(1.4); opacity: 1; }
  }
</style>
