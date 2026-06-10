<script lang="ts">
  import {
    theme,
    accent,
    bgEffect,
    ACCENT_COLORS,
    THEME_FLAVORS,
  } from "$lib/stores/theme";
  import {
    Palette,
    CalendarDays,
    MapPin,
    Sparkles,
    ArrowRight,
  } from "lucide-svelte";
  import { onMount } from "svelte";
  import { accentHexMap } from "$lib/data/colors";
  import { formatLocalTime } from "$lib/utils/time";

  let localTime = $state("");

  function updateTime() {
    localTime = formatLocalTime();
  }

  onMount(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<section class="dashboard section" id="dashboard">
  <div class="container">
    <div class="dashboard-grid">
      <!-- Theme Card -->
      <div class="card dash-card theme-card">
        <div class="card-header">
          <Palette size={16} class="accent-icon" />
          <span class="card-title">Theme Customizer</span>
        </div>

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

        <label class="bg-toggle">
          <input type="checkbox" bind:checked={$bgEffect} />
          <span>
            Background effect: <span class="toggle-state" class:on={$bgEffect}>{$bgEffect ? "on" : "off"}</span>
          </span>
        </label>
      </div>

      <!-- Location Card -->
      <div class="card dash-card location-card">
        <div class="card-header">
          <MapPin size={16} class="accent-icon" />
          <span class="card-title">Based In</span>
        </div>

        <div class="location-visual">
          <!-- Geospatial/Grid aesthetic replacement for heavy Leaflet Map -->
          <div class="radar-map">
            <div class="radar-line"></div>
            <div class="radar-ping"></div>
            <div class="radar-ring ring-1"></div>
            <div class="radar-ring ring-2"></div>
            <div class="radar-ring ring-3"></div>
            <div class="coordinates">6.2088° S, 106.8456° E</div>
          </div>
        </div>

        <div class="location-footer">
          <span class="location-name">Jakarta, Indonesia</span>
          <span class="location-time">
            🌙 {localTime}
          </span>
        </div>
      </div>

      <!-- Playground Card -->
      <div class="card dash-card playground-cta-card">
        <div class="card-header">
          <Sparkles size={16} class="accent-icon" />
          <span class="card-title">Creative Playground</span>
        </div>
        <p class="playground-text">
          Experience interactive UI elements, custom animations, and experimental web physics.
        </p>
        <a href="/funzone" class="btn btn-accent playground-btn">
          Enter Playground <ArrowRight size={14} style="margin-left: 4px;" />
        </a>
      </div>

      <!-- Tech Stack (Neofetch) Card -->
      <div class="card dash-card neofetch-card">
        <div class="card-header">
          <Sparkles size={16} class="accent-icon" />
          <span class="card-title">System Specs & Stack</span>
        </div>
        <div class="neofetch-terminal">
          <div class="neofetch-prompt"><span class="prompt-user">aji</span><span class="prompt-at">@</span><span class="prompt-host">io</span>:<span class="prompt-dir">~</span>$ neofetch --skills</div>
          <div class="neofetch-body">
            <div class="neofetch-logo">
              <span>⚡</span>
              <span>⚙️</span>
              <span>🛰️</span>
              <span>🧠</span>
            </div>
            <div class="neofetch-info">
              <div class="info-row"><span class="info-key">OS</span><span class="info-val">SvelteKit SSR (Static)</span></div>
              <div class="info-row"><span class="info-key">Lang</span><span class="info-val">TypeScript / Node / Python</span></div>
              <div class="info-row"><span class="info-key">Core</span><span class="info-val">Svelte 5 / Go / API Design</span></div>
              <div class="info-row"><span class="info-key">Data</span><span class="info-val">PostgreSQL / Redis</span></div>
              <div class="info-row"><span class="info-key">Geo</span><span class="info-val">Leaflet / GIS / WebGL</span></div>
              <div class="info-row"><span class="info-key">AI</span><span class="info-val">OpenAI SDK / VectorDB</span></div>
              <div class="info-row"><span class="info-key">Status</span><span class="info-val active-status">● Ready for Projects</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .dash-card {
    padding: 24px;
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    min-height: 240px;
    min-width: 0;
    overflow: hidden;
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .dash-card:hover {
    border-color: var(--accent);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    color: var(--ctp-text);
    font-weight: 600;
    font-size: 0.95rem;
  }

  .accent-icon {
    color: var(--accent);
  }

  .card-title {
    font-weight: 600;
  }

  /* --- Theme Card --- */
  .theme-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  }

  .theme-btn {
    padding: 6px 12px;
    border-radius: 8px;
    border: 1px solid var(--ctp-surface1);
    background: transparent;
    color: var(--ctp-subtext0);
    font-family: "Montserrat", sans-serif;
    font-size: 0.75rem;
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
    gap: 6px;
    margin-bottom: 16px;
  }

  .accent-dot {
    width: 24px;
    height: 24px;
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
    gap: 8px;
    font-size: 0.8rem;
    color: var(--ctp-subtext0);
    cursor: pointer;
    margin-top: auto;
  }

  .bg-toggle input {
    accent-color: var(--accent);
  }

  .toggle-state {
    font-weight: 600;
    color: var(--ctp-overlay0);
  }

  .toggle-state.on {
    color: var(--accent);
  }

  /* --- Connect Card --- */
  .connect-text {
    font-size: 0.85rem;
    color: var(--ctp-subtext0);
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .connect-btn {
    text-decoration: none;
    width: 100%;
    margin-top: auto;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.88rem;
  }

  /* --- Playground CTA Card --- */
  .playground-text {
    font-size: 0.85rem;
    color: var(--ctp-subtext0);
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .playground-btn {
    text-decoration: none;
    width: 100%;
    margin-top: auto;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.88rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* --- Location Visual (Minimal Grid Radar) --- */
  .location-visual {
    flex: 1;
    margin-bottom: 12px;
    border-radius: 12px;
    overflow: hidden;
    background: var(--ctp-crust);
    border: 1px solid var(--ctp-surface0);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .radar-map {
    position: relative;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .radar-ping {
    width: 8px;
    height: 8px;
    background: var(--accent);
    border-radius: 50%;
    position: relative;
    z-index: 5;
    box-shadow: 0 0 10px var(--accent);
  }

  .radar-ring {
    position: absolute;
    border: 1px dashed color-mix(in srgb, var(--accent) 20%, transparent);
    border-radius: 50%;
    animation: radar-expand 4s infinite linear;
  }

  .ring-1 {
    width: 40px;
    height: 40px;
    animation-delay: 0s;
  }

  .ring-2 {
    width: 80px;
    height: 80px;
    animation-delay: 1.3s;
  }

  .ring-3 {
    width: 120px;
    height: 120px;
    animation-delay: 2.6s;
  }

  .radar-line {
    position: absolute;
    width: 50%;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--accent));
    transform-origin: left center;
    left: 50%;
    top: 50%;
    animation: radar-sweep 5s infinite linear;
    z-index: 2;
  }

  .coordinates {
    position: absolute;
    bottom: 0px;
    font-size: 0.65rem;
    color: var(--ctp-overlay1);
    font-family: "JetBrains Mono", monospace;
  }

  @keyframes radar-expand {
    0% {
      transform: scale(0.3);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes radar-sweep {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .location-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .location-name {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--ctp-text);
  }

  .location-time {
    font-size: 0.8rem;
    color: var(--ctp-subtext0);
    font-family: "JetBrains Mono", "Fira Code", monospace;
  }

  /* --- Neofetch Widget Style --- */
  .neofetch-terminal {
    flex: 1;
    font-family: "JetBrains Mono", monospace;
    background: var(--ctp-crust);
    border: 1px solid var(--ctp-surface0);
    border-radius: 10px;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 0.75rem;
    line-height: 1.4;
  }

  .neofetch-prompt {
    font-weight: 700;
    color: var(--ctp-subtext0);
    margin-bottom: 4px;
    border-bottom: 1px dashed var(--ctp-surface1);
    padding-bottom: 6px;
  }

  .prompt-user {
    color: var(--accent);
  }

  .prompt-at {
    color: var(--ctp-subtext1);
  }

  .prompt-host {
    color: var(--ctp-text);
  }

  .prompt-dir {
    color: var(--accent);
  }

  .neofetch-body {
    display: flex;
    gap: 16px;
    align-items: stretch;
  }

  .neofetch-logo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 36px;
    background: color-mix(in srgb, var(--accent) 8%, var(--ctp-mantle));
    border-radius: 6px;
    padding: 8px 0;
    border: 1px solid color-mix(in srgb, var(--accent) 15%, transparent);
    font-size: 1.1rem;
  }

  .neofetch-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  .info-key {
    color: var(--accent);
    font-weight: 700;
    min-width: 40px;
  }

  .info-val {
    color: var(--ctp-subtext0);
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .active-status {
    color: var(--ctp-green);
    font-weight: bold;
    animation: status-blink 1.5s infinite alternate;
  }

  @keyframes status-blink {
    0% { opacity: 0.7; }
    100% { opacity: 1; }
  }

  @media (max-width: 768px) {
    .dashboard-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .dash-card {
      min-height: auto;
      padding: 18px;
    }
    .location-visual {
      height: 130px;
      flex: none;
    }
  }
</style>
