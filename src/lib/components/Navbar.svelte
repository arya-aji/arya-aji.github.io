<script lang="ts">
  import { Menu, X } from "lucide-svelte";
  import { page } from "$app/stores";
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
  } from "$lib/stores/theme";
  import type { ThemeFlavor, AccentColor } from "$lib/stores/theme";

  let navPanelOpen = $state(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/workflow", label: "Workflow" },
    { href: "/posts", label: "Posts" },
    { href: "/projects", label: "Projects" },
  ];

  const moreLinks = [
    { href: "/resume", label: "Resume", external: false, wip: true },
  ];

  // Breadcrumb
  let segments = $derived(
    $page.url.pathname === "/"
      ? []
      : $page.url.pathname.split("/").filter(Boolean),
  );
  let crumbs = $derived(
    segments.map((seg, i) => ({
      label: seg,
      href: "/" + segments.slice(0, i + 1).join("/"),
    })),
  );

  function closePanel() {
    navPanelOpen = false;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape" && navPanelOpen) closePanel();
  }

  // Accent color CSS var lookup (for swatch preview)
  import { accentSwatchMap } from "$lib/data/colors";
</script>

<svelte:window onkeydown={handleKeydown} />

<nav class="navbar">
  <div class="navbar-inner">
    <!-- Logo + breadcrumb -->
    <div class="logo-path">
      <a href="/" class="logo-home" aria-label="Home">~</a>
      <span class="bc-sep">/</span>
      {#each crumbs as crumb, i}
        {#if i === crumbs.length - 1}
          <span class="bc-current">{crumb.label}</span>
        {:else}
          <a href={crumb.href} class="bc-link">{crumb.label}</a>
        {/if}
        {#if i < crumbs.length - 1}
          <span class="bc-sep">/</span>
        {/if}
      {/each}
      <span class="logo-cursor">▌</span>
    </div>

    <!-- Desktop nav links -->
    <div class="nav-links desktop-only">
      {#each navLinks as link}
        <a href={link.href} class="nav-link">{link.label}</a>
      {/each}
      <button
        class="nav-link more-btn"
        onclick={() => (navPanelOpen = true)}
        aria-expanded={navPanelOpen}
      >
        More...
      </button>
    </div>

    <!-- Mobile hamburger -->
    <button
      class="mobile-toggle mobile-only"
      onclick={() => (navPanelOpen = true)}
      aria-label="Toggle menu"
    >
      <Menu size={24} />
    </button>
  </div>
</nav>

<!-- Backdrop -->
{#if navPanelOpen}
  <button
    class="panel-backdrop"
    onclick={closePanel}
    aria-label="Close navigation panel"
  ></button>
{/if}

<!-- Right-side navigation panel -->
<div class="nav-panel" class:open={navPanelOpen} inert={!navPanelOpen}>
  <!-- Header -->
  <div class="panel-header">
    <span class="panel-title">Navigation</span>
    <button
      class="panel-close"
      onclick={closePanel}
      aria-label="Close navigation panel"
    >
      <X size={20} />
    </button>
  </div>

  <!-- Theme section -->
  <div class="panel-section">
    <div class="section-label">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="4" /><path
          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
        />
      </svg>
      Theme
    </div>

    <!-- Flavor buttons -->
    <div class="flavor-grid">
      {#each THEME_FLAVORS as flavor}
        <button
          class="flavor-btn"
          class:active={$theme === flavor.value}
          onclick={() => theme.set(flavor.value as ThemeFlavor)}
        >
          {flavor.label}
        </button>
      {/each}
    </div>

    <!-- Accent swatches -->
    <div class="accent-grid">
      {#each ACCENT_COLORS as color}
        <button
          class="accent-swatch"
          class:active={$accent === color}
          style="background: {accentSwatchMap[color]};"
          onclick={() => accent.set(color as AccentColor)}
          aria-label={color}
          title={color}
        ></button>
      {/each}
    </div>

    <!-- Background effect toggle -->
    <label class="bg-effect-toggle">
      <input type="checkbox" bind:checked={$bgEffect} />
      <span class="toggle-box"></span>
      <span class="toggle-label"
        >Background effect: <span class="toggle-state"
          >{$bgEffect ? "on" : "off"}</span
        ></span
      >
    </label>
  </div>

  <div class="panel-divider"></div>

  <!-- Main nav links -->
  <div class="panel-nav">
    {#each navLinks as link}
      <a href={link.href} class="panel-link" onclick={closePanel}
        >{link.label}</a
      >
    {/each}
  </div>

  <div class="panel-divider"></div>

  <!-- More links -->
  <div class="panel-nav">
    <span class="panel-section-label">MORE</span>
    {#each moreLinks as link}
      <a href={link.href} class="panel-link" onclick={closePanel}
        >{link.label}</a
      >
    {/each}
  </div>

  <div class="panel-divider"></div>

  <!-- Fun Zone -->
  <!-- <div class="panel-section">
    <div class="section-label">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
      </svg>
      Fun Zone
    </div>

    <label class="bg-effect-toggle">
      <input type="checkbox" checked={$snowEffect} onchange={() => { if ($grayWorldEffect) grayWorldEffect.set(false); snowEffect.update(v => !v); }} />
      <span class="toggle-box"></span>
      <span class="toggle-label">Let it snow: <span class="toggle-state">{$snowEffect ? 'on' : 'off'}</span></span>
    </label>

    <label class="bg-effect-toggle">
      <input type="checkbox" checked={$blackHoleEffect} onchange={() => { if ($grayWorldEffect) grayWorldEffect.set(false); blackHoleEffect.update(v => !v); }} />
      <span class="toggle-box"></span>
      <span class="toggle-label">Black Hole: <span class="toggle-state">{$blackHoleEffect ? 'on' : 'off'}</span></span>
    </label>

    <label class="bg-effect-toggle">
      <input type="checkbox" checked={$mouseTremorEffect} onchange={() => { if ($grayWorldEffect) grayWorldEffect.set(false); mouseTremorEffect.update(v => !v); }} />
      <span class="toggle-box"></span>
      <span class="toggle-label">Mouse Tremor: <span class="toggle-state">{$mouseTremorEffect ? 'on' : 'off'}</span></span>
    </label>

    <label class="bg-effect-toggle">
      <input type="checkbox" checked={$floodEffect} onchange={() => { if ($grayWorldEffect) grayWorldEffect.set(false); floodEffect.update(v => !v); }} />
      <span class="toggle-box"></span>
      <span class="toggle-label">Flood: <span class="toggle-state">{$floodEffect ? 'on' : 'off'}</span></span>
    </label>

    <label class="bg-effect-toggle">
      <input type="checkbox" checked={$grayWorldEffect} onchange={() => { if (!$grayWorldEffect) { [snowEffect, blackHoleEffect, mouseTremorEffect, floodEffect].forEach(e => e.set(false)); } grayWorldEffect.update(v => !v); }} />
      <span class="toggle-box"></span>
      <span class="toggle-label">Gray World: <span class="toggle-state">{$grayWorldEffect ? 'on' : 'off'}</span></span>
    </label>
  </div> -->
</div>

<style>
  /* ─── Navbar ─────────────────────────────────────────── */
  .navbar {
    position: sticky;
    top: 0;
    z-index: 200;
    background: color-mix(in srgb, var(--ctp-base) 80%, transparent);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid
      color-mix(in srgb, var(--ctp-surface0) 50%, transparent);
    transition: background 0.3s ease;
  }

  .navbar-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* ─── Logo breadcrumb ────────────────────────────────── */
  .logo-path {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: "JetBrains Mono", "Fira Code", monospace;
    font-size: 1rem;
    font-weight: 600;
    flex-shrink: 0;
  }
  .logo-home {
    color: var(--ctp-text);
    text-decoration: none;
    transition: color 0.2s;
  }
  .logo-home:hover {
    color: var(--accent);
    opacity: 1;
  }
  .logo-cursor {
    color: var(--accent);
    animation: blink 1s step-end infinite;
    line-height: 1;
    margin-left: -4px;
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
  .bc-sep {
    color: var(--ctp-overlay0);
    user-select: none;
  }
  .bc-link {
    color: var(--ctp-subtext0);
    text-decoration: none;
    transition: color 0.15s;
  }
  .bc-link:hover {
    color: var(--accent);
    opacity: 1;
  }
  .bc-current {
    color: var(--accent);
  }

  /* ─── Desktop nav links ──────────────────────────────── */
  .nav-links {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nav-link {
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--ctp-subtext1);
    text-decoration: none;
    transition: all 0.2s ease;
    background: none;
    border: none;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
  }
  .nav-link:hover {
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    opacity: 1;
  }
  .more-btn {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  /* ─── Mobile ─────────────────────────────────────────── */
  .mobile-toggle {
    background: none;
    border: none;
    color: var(--ctp-text);
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: background 0.2s;
  }
  .mobile-toggle:hover {
    background: var(--ctp-surface0);
  }
  .desktop-only {
    display: flex;
  }
  .mobile-only {
    display: none;
  }
  @media (max-width: 768px) {
    .desktop-only {
      display: none;
    }
    .mobile-only {
      display: flex;
    }
  }

  /* ─── Backdrop ───────────────────────────────────────── */
  .panel-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 299;
    animation: fade-in 0.2s ease;
    border: none;
    padding: 0;
    cursor: default;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* ─── Navigation Panel ───────────────────────────────── */
  .nav-panel {
    position: fixed;
    top: 0;
    right: 0;
    height: 100dvh;
    width: 320px;
    max-width: 90vw;
    background: var(--ctp-mantle);
    border-left: 1px solid var(--ctp-surface0);
    z-index: 300;
    display: flex;
    flex-direction: column;
    gap: 0;
    transform: translateX(100%);
    transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
  }
  .nav-panel.open {
    transform: translateX(0);
  }

  /* Panel header */
  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px 16px;
    border-bottom: 1px solid var(--ctp-surface0);
    flex-shrink: 0;
  }
  .panel-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--ctp-text);
    letter-spacing: 0.01em;
  }
  .panel-close {
    background: none;
    border: none;
    color: var(--ctp-subtext0);
    cursor: pointer;
    padding: 6px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    transition: all 0.15s;
  }
  .panel-close:hover {
    background: var(--ctp-surface0);
    color: var(--ctp-text);
  }

  /* Panel sections */
  .panel-section {
    padding: 20px 24px 4px;
  }

  .section-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--ctp-subtext1);
    margin-bottom: 14px;
  }

  /* Flavor buttons */
  .flavor-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    margin-bottom: 12px;
  }
  .flavor-btn {
    padding: 7px 4px;
    border-radius: 6px;
    font-size: 0.78rem;
    font-weight: 500;
    background: var(--ctp-surface0);
    border: 1px solid transparent;
    color: var(--ctp-subtext1);
    cursor: pointer;
    transition: all 0.15s;
    font-family: "Montserrat", sans-serif;
  }
  .flavor-btn:hover {
    border-color: var(--accent);
    color: var(--ctp-text);
  }
  .flavor-btn.active {
    background: transparent;
    border-color: var(--accent);
    color: var(--ctp-text);
  }

  /* Accent swatches */
  .accent-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 6px;
    margin-bottom: 14px;
  }
  .accent-swatch {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 6px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.15s;
  }
  .accent-swatch:hover {
    transform: scale(1.15);
  }
  .accent-swatch.active {
    border-color: var(--ctp-text);
    transform: scale(1.12);
  }

  /* Background effect toggle */
  .bg-effect-toggle {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 4px 0 16px;
    user-select: none;
  }
  .bg-effect-toggle input {
    display: none;
  }
  .toggle-box {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 2px solid var(--accent);
    background: transparent;
    flex-shrink: 0;
    transition: background 0.15s;
    position: relative;
  }
  .bg-effect-toggle input:checked + .toggle-box {
    background: var(--accent);
  }
  .bg-effect-toggle input:checked + .toggle-box::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 3px;
    width: 5px;
    height: 8px;
    border: 2px solid var(--ctp-base);
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
  }
  .toggle-label {
    font-size: 0.82rem;
    font-family: "JetBrains Mono", monospace;
    color: var(--ctp-subtext1);
  }
  .toggle-state {
    color: var(--accent);
  }

  /* Divider */
  .panel-divider {
    height: 1px;
    background: var(--ctp-surface0);
    margin: 4px 0;
    flex-shrink: 0;
  }

  /* Nav links in panel */
  .panel-nav {
    padding: 8px 12px;
    display: flex;
    flex-direction: column;
  }
  .panel-section-label {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--ctp-overlay2);
    padding: 8px 12px 4px;
    font-family: "Montserrat", sans-serif;
  }
  .panel-link {
    padding: 14px 12px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    color: var(--ctp-text);
    text-decoration: none;
    transition: all 0.15s;
  }
  .panel-link:hover {
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    color: var(--accent);
    opacity: 1;
    padding-left: 16px;
  }
</style>
