<script lang="ts">
  import { theme, accent, bgEffect, ACCENT_COLORS, THEME_FLAVORS } from '$lib/stores/theme';
  import type { ThemeFlavor, AccentColor } from '$lib/stores/theme';
  import { Palette, CalendarDays, MapPin, Info } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let clickCount = $state(0);
  let globalCount = $state(793402);
  let localTime = $state('');
  
  let mapElement: HTMLElement | undefined = $state();
  let mapInstance: any;

  const accentColorMap: Record<string, string> = {
    rosewater: '#dc8a78', flamingo: '#dd7878', pink: '#ea76cb', mauve: '#8839ef',
    red: '#d20f39', maroon: '#e64553', peach: '#fe640b', yellow: '#df8e1d',
    green: '#40a02b', teal: '#179299', sky: '#04a5e5', sapphire: '#209fb5',
    blue: '#1e66f5', lavender: '#7287fd'
  };

  function handleClick() {
    clickCount++;
    globalCount++;
  }

  function updateTime() {
    const now = new Date();
    localTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }

  onMount(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    let isMounted = true;

    if (typeof window !== 'undefined' && mapElement) {
      (async () => {
        const L = await import('leaflet');
        await import('leaflet/dist/leaflet.css');
        if (!isMounted) return;
        
        mapInstance = L.map(mapElement, {
          zoomControl: false,
          attributionControl: false
          // default behavior enables dragging & touchZoom
        }).setView([-6.1754, 106.8272], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19
        }).addTo(mapInstance);
      })();
    }

    return () => {
      isMounted = false;
      clearInterval(interval);
      if (mapInstance) mapInstance.remove();
    };
  });
</script>

<section class="dashboard section" id="dashboard">
  <div class="container">
    <div class="dashboard-grid">
      <!-- Location Card -->
      <div class="card dash-card location-card">
        <div class="card-header">
          <MapPin size={16} />
          <span class="card-title">Currently Based In</span>
          <span class="location-pin">📍</span>
        </div>

        <div class="map-container">
          <div
            bind:this={mapElement}
            class="leaflet-container-root"
            style="width: 100%; height: 100%; filter: grayscale(1) opacity(0.85) {$theme !== 'latte' ? 'invert(0.9) hue-rotate(180deg)' : ''};"
          ></div>
        </div>

        <div class="location-footer">
          <span class="location-name">Jakarta, ID</span>
          <span class="location-time">
            🌙 {localTime}
          </span>
        </div>
      </div>

      <!-- Theme Card -->
      <div class="card dash-card theme-card">
        <div class="card-header">
          <Palette size={16} />
          <span class="card-title">Theme</span>
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
              style="background: {accentColorMap[color]}"
              onclick={() => accent.set(color)}
              aria-label="Set accent to {color}"
            ></button>
          {/each}
        </div>

        <label class="bg-toggle">
          <input type="checkbox" bind:checked={$bgEffect} />
          <span>Background effect: <span class="toggle-state" class:on={$bgEffect}>{$bgEffect ? 'on' : 'off'}</span></span>
        </label>
      </div>

      <!-- Connect Card -->
      <div class="card dash-card connect-card">
        <div class="card-header">
          <CalendarDays size={16} />
          <span class="card-title">Let's Connect</span>
        </div>
        <p class="connect-text">Always open to interesting projects and conversations.</p>
        <a href="mailto:aryaaku999@gmail.com" class="btn btn-accent connect-btn">
          <CalendarDays size={16} />
          Book a Chat
        </a>
      </div>

      <!-- Clicker Card -->
      <div class="card dash-card clicker-card">
        <button class="info-btn" aria-label="Info">
          <Info size={16} />
        </button>

        <div class="clicker-count">{globalCount.toLocaleString()}</div>

        <button class="btn btn-accent click-btn" onclick={handleClick}>
          CLICK ME
        </button>

        <p class="click-personal">you've clicked {clickCount} times</p>
      </div>
    </div>
  </div>
</section>

<style>
  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .dash-card {
    padding: 20px;
    display: flex;
    flex-direction: column;
    min-height: 240px;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    color: var(--ctp-text);
    font-weight: 600;
    font-size: 0.9rem;
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
    padding: 6px 14px;
    border-radius: 8px;
    border: 1px solid var(--ctp-surface1);
    background: transparent;
    color: var(--ctp-subtext0);
    font-family: 'Montserrat', sans-serif;
    font-size: 0.78rem;
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
    margin-bottom: 16px;
  }

  .accent-dot {
    width: 28px;
    height: 28px;
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
    box-shadow: 0 0 0 2px var(--ctp-base), 0 0 0 4px var(--ctp-text);
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
  }

  /* --- Location Card --- */
  .location-pin {
    margin-left: auto;
  }

  .map-container {
    flex: 1;
    margin-bottom: 12px;
    border-radius: 12px;
    overflow: hidden;
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
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  /* --- Clicker Card --- */
  .clicker-card {
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
  }

  .info-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    color: var(--ctp-overlay0);
    cursor: pointer;
    padding: 4px;
    border-radius: 50%;
    transition: color 0.2s;
  }

  .info-btn:hover {
    color: var(--ctp-text);
  }

  .clicker-count {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent);
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 12px;
    line-height: 1;
  }

  .click-btn {
    padding: 10px 28px;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }

  .click-btn:active {
    transform: scale(0.95);
  }

  .click-personal {
    font-size: 0.75rem;
    color: var(--ctp-subtext0);
  }

  @media (max-width: 1024px) {
    .dashboard-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .dashboard-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
