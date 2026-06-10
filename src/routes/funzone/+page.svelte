<script lang="ts">
  import {
    theme,
    accent,
    bgEffect,
    snowEffect,
    blackHoleEffect,
    mouseTremorEffect,
    floodEffect,
    grayWorldEffect,
    ACCENT_COLORS,
    THEME_FLAVORS,
  } from '$lib/stores/theme';
  import { Sparkles, Palette, ArrowLeft } from 'lucide-svelte';
  import { onMount } from 'svelte';
  import { accentHexMap } from '$lib/data/colors';

  let mounted = $state(false);

  // --- Black Hole state ---
  let bhElementAnims: Animation[] = [];
  let bhParticles: { el: HTMLElement; anim: Animation }[] = [];
  let vortexVisible = $state(false);

  const COLORS = [
    'var(--accent)', 'var(--ctp-text)', 'var(--ctp-surface2)',
    'var(--ctp-overlay1)', 'var(--ctp-subtext0)'
  ];

  onMount(() => { 
    mounted = true; 
    return () => {
      // Clean up effects when leaving funzone
      snowEffect.set(false);
      blackHoleEffect.set(false);
      mouseTremorEffect.set(false);
      floodEffect.set(false);
      grayWorldEffect.set(false);
      cleanupBlackHole();
    };
  });

  const otherEffects = [
    snowEffect,
    blackHoleEffect,
    mouseTremorEffect,
    floodEffect,
  ];

  function toggleGrayWorld() {
    if ($grayWorldEffect) {
      grayWorldEffect.set(false);
    } else {
      otherEffects.forEach((e) => e.set(false));
      grayWorldEffect.set(true);
    }
  }

  function toggleEffect(effect: typeof snowEffect) {
    if ($grayWorldEffect) grayWorldEffect.set(false);
    effect.update((v) => !v);
  }

  function activateRandom() {
    const allEffects = [...otherEffects, grayWorldEffect];
    allEffects.forEach((e) => e.set(false));
    const pick = allEffects[Math.floor(Math.random() * allEffects.length)];
    if (pick === grayWorldEffect) {
      grayWorldEffect.set(true);
    } else {
      pick.set(true);
    }
  }

  function getTargets(): HTMLElement[] {
    return Array.from(
      document.querySelectorAll<HTMLElement>(
        'nav.navbar, .playground-header, .effects-grid-section, .dash-card, .footer, .playground-hero'
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
  <title>Creative Playground | Arya Aji Kusuma</title>
  <meta name="description" content="Welcome to the experimental creative playground. Toggle custom Web Animations API effects like Black Hole, Flood, Tremor, and Snow." />
</svelte:head>


<main class="playground-main">
  <div class="container">
    <div class="playground-header">
      <a href="/" class="back-link">
        <ArrowLeft size={16} /> Back to Portfolio
      </a>
      <h1 class="playground-title">Creative Playground</h1>
      <p class="playground-subtitle">
        An experimental zone showcasing creative web interactions. Toggle page-wide effects below and watch the interface react.
      </p>
    </div>

    <div class="playground-grid">
      <!-- Effects Controller Card -->
      <div class="card dash-card effects-card">
        <div class="card-header">
          <Sparkles size={18} class="accent-icon" />
          <span class="card-title">Toggle Interactive Effects</span>
        </div>
        
        <p class="card-desc">These effects dynamically manipulate the DOM, trigger customized particles, or run physics-based animations across the entire page.</p>

        <div class="effects-buttons">
          <button
            class="effect-btn"
            class:active={$snowEffect}
            onclick={() => toggleEffect(snowEffect)}
          >
            <span class="effect-icon">❄️</span>
            <div class="effect-info">
              <span class="effect-label">Snow Effect</span>
              <span class="effect-sub">Falls from the sky</span>
            </div>
          </button>

          <button
            class="effect-btn"
            class:active={$blackHoleEffect}
            onclick={() => toggleEffect(blackHoleEffect)}
          >
            <span class="effect-icon">🕳️</span>
            <div class="effect-info">
              <span class="effect-label">Black Hole</span>
              <span class="effect-sub">Consumes DOM nodes</span>
            </div>
          </button>

          <button
            class="effect-btn"
            class:active={$mouseTremorEffect}
            onclick={() => toggleEffect(mouseTremorEffect)}
          >
            <span class="effect-icon">📳</span>
            <div class="effect-info">
              <span class="effect-label">Tremor Effect</span>
              <span class="effect-sub">Shakes elements on movement</span>
            </div>
          </button>

          <button
            class="effect-btn"
            class:active={$floodEffect}
            onclick={() => toggleEffect(floodEffect)}
          >
            <span class="effect-icon">🌊</span>
            <div class="effect-info">
              <span class="effect-label">Flood Effect</span>
              <span class="effect-sub">Water level rises & drifts</span>
            </div>
          </button>

          <button
            class="effect-btn gray-world-btn"
            class:active={$grayWorldEffect}
            onclick={toggleGrayWorld}
          >
            <span class="effect-icon">🩶</span>
            <div class="effect-info">
              <span class="effect-label">Gray World</span>
              <span class="effect-sub">Removes all colorful style</span>
            </div>
          </button>

          <button class="effect-btn random-btn" onclick={activateRandom}>
            <span class="effect-icon">🎲</span>
            <div class="effect-info">
              <span class="effect-label">Randomize</span>
              <span class="effect-sub">Picks an effect at random</span>
            </div>
          </button>
        </div>

        <div class="effect-status-banner">
          {#if $floodEffect}
            🌊 Water is rising! Watch the page float...
          {:else if $grayWorldEffect}
            🩶 The world has turned gray.
          {:else if $blackHoleEffect}
            🕳️ Black Hole active. DOM nodes consumed into the core!
          {:else if $mouseTremorEffect}
            📳 Tremor active. Move your mouse or scroll to shake the page.
          {:else if $snowEffect}
            ❄️ Snow is falling gently down the screen.
          {:else}
            ✨ Select an effect above to test.
          {/if}
        </div>
      </div>

      <!-- Theme & Customizer Card -->
      <div class="card dash-card theme-card">
        <div class="card-header">
          <Palette size={18} class="accent-icon" />
          <span class="card-title">Theme Customizer</span>
        </div>
        <p class="card-desc">Switch the Catppuccin palette flavor and accent theme across the site globally.</p>

        <div class="theme-section">
          <span class="section-label">Palette Flavor</span>
          <div class="theme-buttons">
            {#each THEME_FLAVORS as flavor}
              <button
                class="theme-btn"
                class:active={$theme === flavor.value}
                onclick={() => theme.set(flavor.value)}
              >
                {flavor.label}
              </button>
            {/each}
          </div>
        </div>

        <div class="theme-section">
          <span class="section-label">Accent Palette</span>
          <div class="accent-grid">
            {#each ACCENT_COLORS as color}
              <button
                class="accent-dot"
                class:active={$accent === color}
                style="background: {accentHexMap[color]}"
                onclick={() => accent.set(color)}
                aria-label="Set accent to {color}"
              ></button>
            {/each}
          </div>
        </div>

        <label class="bg-toggle">
          <input type="checkbox" bind:checked={$bgEffect} />
          <span>Enable animated gradient background blobs</span>
        </label>
      </div>
    </div>
  </div>
</main>


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
  .playground-main {
    min-height: calc(100vh - 64px);
    padding: 60px 0 80px;
    background: var(--ctp-base);
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .playground-header {
    margin-bottom: 40px;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
    margin-bottom: 16px;
    transition: transform 0.2s ease;
  }

  .back-link:hover {
    transform: translateX(-4px);
  }

  .playground-title {
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin-bottom: 12px;
  }

  .playground-subtitle {
    font-size: 1.1rem;
    color: var(--ctp-subtext0);
    line-height: 1.6;
    max-width: 700px;
  }

  .playground-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 24px;
  }

  .dash-card {
    padding: 28px;
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 18px;
    display: flex;
    flex-direction: column;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    color: var(--ctp-text);
  }

  .card-title {
    font-size: 1.1rem;
    font-weight: 600;
  }

  .accent-icon {
    color: var(--accent);
  }

  .card-desc {
    font-size: 0.88rem;
    color: var(--ctp-subtext0);
    line-height: 1.5;
    margin-bottom: 24px;
  }

  /* --- Effects Buttons --- */
  .effects-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 24px;
  }

  .effect-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border-radius: 12px;
    border: 1px solid var(--ctp-surface0);
    background: var(--ctp-crust);
    cursor: pointer;
    text-align: left;
    transition: all 0.2s ease;
  }

  .effect-btn:hover {
    border-color: var(--accent);
    background: color-mix(in srgb, var(--accent) 5%, var(--ctp-crust));
    transform: translateY(-2px);
  }

  .effect-btn.active {
    border-color: var(--accent);
    background: color-mix(in srgb, var(--accent) 10%, var(--ctp-crust));
    box-shadow: 0 4px 16px color-mix(in srgb, var(--accent) 15%, transparent);
  }

  .effect-icon {
    font-size: 1.6rem;
    flex-shrink: 0;
  }

  .effect-info {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .effect-label {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--ctp-text);
  }

  .effect-sub {
    font-size: 0.72rem;
    color: var(--ctp-overlay1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .effect-btn.active .effect-label {
    color: var(--accent);
  }

  .random-btn {
    border-style: dashed;
  }

  .random-btn:hover {
    border-style: solid;
  }

  .effect-status-banner {
    padding: 12px 16px;
    background: var(--ctp-surface0);
    border-radius: 10px;
    font-size: 0.85rem;
    color: var(--ctp-text);
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    margin-top: auto;
  }

  /* --- Theme Panel --- */
  .theme-section {
    margin-bottom: 20px;
  }

  .section-label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--ctp-subtext1);
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .theme-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .theme-btn {
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid var(--ctp-surface1);
    background: transparent;
    color: var(--ctp-subtext0);
    font-family: inherit;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .theme-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  .theme-btn.active {
    background: var(--accent);
    color: var(--ctp-base);
    border-color: var(--accent);
    font-weight: 600;
  }

  .accent-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
  }

  .accent-dot {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    outline: none;
  }

  .accent-dot:hover {
    transform: scale(1.15);
  }

  .accent-dot.active {
    border-color: var(--ctp-text);
    box-shadow:
      0 0 0 2px var(--ctp-base),
      0 0 0 4px var(--ctp-text);
    transform: scale(1.1);
  }

  .bg-toggle {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.85rem;
    color: var(--ctp-subtext1);
    cursor: pointer;
    margin-top: 10px;
    padding-top: 20px;
    border-top: 1px solid var(--ctp-surface0);
  }

  .bg-toggle input {
    accent-color: var(--accent);
    width: 16px;
    height: 16px;
  }

  /* --- Black Hole overlay --- */
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

  @media (max-width: 768px) {
    .playground-grid {
      grid-template-columns: 1fr;
    }
    
    .playground-title {
      font-size: 2.2rem;
    }

    .effects-buttons {
      grid-template-columns: 1fr;
    }
  }
</style>
