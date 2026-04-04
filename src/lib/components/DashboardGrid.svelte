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
  } from "$lib/stores/theme";
  import type { ThemeFlavor, AccentColor } from "$lib/stores/theme";
  import {
    Palette,
    CalendarDays,
    MapPin,
    Sparkles,
    FileText,
    FolderGit2,
    ArrowRight,
    Tag,
  } from "lucide-svelte";
  import { onMount } from "svelte";
  import type L from "leaflet";
  import { projects, tagColors } from "$lib/data/projects";
  import { fetchPosts } from "$lib/utils/posts";
  import type { BlogPost } from "$lib/utils/posts";

  const latestProject = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )[0];

  let latestPost: BlogPost | null = $state(null);

  let localTime = $state("");

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

  import { accentHexMap } from "$lib/data/colors";
  import { formatLocalTime } from "$lib/utils/time";

  let mapElement: HTMLElement | undefined = $state();
  let mapInstance: L.Map | undefined;

  function updateTime() {
    localTime = formatLocalTime();
  }

  onMount(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    let isMounted = true;

    fetchPosts().then((posts) => {
      if (posts.length > 0) latestPost = posts[0];
    });

    if (typeof window !== "undefined" && mapElement) {
      (async () => {
        try {
          const L = await import("leaflet");
          await import("leaflet/dist/leaflet.css");
          if (!isMounted) return;

          mapInstance = L.map(mapElement, {
            zoomControl: false,
            attributionControl: false,
          }).setView([-6.1754, 106.8272], 12);

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
          }).addTo(mapInstance);
        } catch {
          // Leaflet failed to load — map will show empty
        }
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
              style="background: {accentHexMap[color]}"
              onclick={() => accent.set(color)}
              aria-label="Set accent to {color}"
            ></button>
          {/each}
        </div>

        <label class="bg-toggle">
          <input type="checkbox" bind:checked={$bgEffect} />
          <span
            >Background effect: <span class="toggle-state" class:on={$bgEffect}
              >{$bgEffect ? "on" : "off"}</span
            ></span
          >
        </label>
      </div>

      <!-- Connect Card -->
      <div class="card dash-card connect-card">
        <div class="card-header">
          <CalendarDays size={16} />
          <span class="card-title">Let's Connect</span>
        </div>
        <p class="connect-text">
          Got an idea? Let's turn it into your next dream project.
        </p>
        <a
          href="mailto:aryaaku999@gmail.com"
          class="btn btn-accent connect-btn"
        >
          <CalendarDays size={16} />
          Let's Build It
        </a>
      </div>

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
            style="width: 100%; height: 100%; filter: grayscale(1) opacity(0.85) {$theme !==
            'latte'
              ? 'invert(0.9) hue-rotate(180deg)'
              : ''};"
          ></div>
        </div>

        <div class="location-footer">
          <span class="location-name">Jakarta, ID</span>
          <span class="location-time">
            🌙 {localTime}
          </span>
        </div>
      </div>

      <!-- Fun Zone Card -->
      <div class="card dash-card funzone-card">
        <div class="card-header">
          <Sparkles size={16} />
          <span class="card-title">Fun Zone</span>
        </div>

        <div class="fun-effects">
          <button
            class="fun-effect-btn"
            class:active={$snowEffect}
            onclick={() => toggleEffect(snowEffect)}
          >
            <span class="fun-effect-icon">❄️</span>
            <span class="fun-effect-label">Snow</span>
          </button>

          <button
            class="fun-effect-btn"
            class:active={$blackHoleEffect}
            onclick={() => toggleEffect(blackHoleEffect)}
          >
            <span class="fun-effect-icon">🕳️</span>
            <span class="fun-effect-label">Black Hole</span>
          </button>

          <button
            class="fun-effect-btn"
            class:active={$mouseTremorEffect}
            onclick={() => toggleEffect(mouseTremorEffect)}
          >
            <span class="fun-effect-icon">📳</span>
            <span class="fun-effect-label">Tremor</span>
          </button>

          <button
            class="fun-effect-btn"
            class:active={$floodEffect}
            onclick={() => toggleEffect(floodEffect)}
          >
            <span class="fun-effect-icon">🌊</span>
            <span class="fun-effect-label">Flood</span>
          </button>

          <button
            class="fun-effect-btn gray-world-btn"
            class:active={$grayWorldEffect}
            onclick={toggleGrayWorld}
          >
            <span class="fun-effect-icon">🩶</span>
            <span class="fun-effect-label">Gray World</span>
          </button>

          <button class="fun-effect-btn random-btn" onclick={activateRandom}>
            <span class="fun-effect-icon">🎲</span>
            <span class="fun-effect-label">Random</span>
          </button>
        </div>

        <div class="fun-status">
          {#if $floodEffect}
            🌊 Water is rising...
          {:else if $grayWorldEffect}
            🩶 Color has left the world...
          {:else if $blackHoleEffect}
            🕳️ Cards are being consumed...
          {:else if $mouseTremorEffect}
            📳 Move your mouse faster!
          {:else if $snowEffect}
            ❄️ It's snowing!
          {:else}
            ✨ Try toggling some effects!
          {/if}
        </div>
      </div>

      <!-- Latest Post Card -->
      <div class="card dash-card latest-card span-2">
        <div class="card-header">
          <FileText size={16} />
          <span class="card-title">Latest Post</span>
        </div>
        {#if latestPost}
          {@const meta =
            latestPost.meta["en"] || Object.values(latestPost.meta)[0]}
          <a href="/posts/{latestPost.slug}" class="latest-link">
            <h3 class="latest-name">{meta.title}</h3>
            <p class="latest-desc">{meta.summary}</p>
            <div class="latest-footer">
              <span class="latest-date">{meta.dateDisplay}</span>
              <div class="latest-tags">
                {#each meta.tags.slice(0, 3) as tag}
                  <span class="mini-tag">{tag}</span>
                {/each}
              </div>
            </div>
          </a>
        {:else}
          <p class="latest-empty">No posts yet.</p>
        {/if}
        <a href="/posts" class="latest-view-all">
          View all posts <ArrowRight size={14} />
        </a>
      </div>

      <!-- Latest Project Card -->
      <div class="card dash-card latest-card span-2">
        <div class="card-header">
          <FolderGit2 size={16} />
          <span class="card-title">Latest Project</span>
        </div>
        {#if latestProject}
          <a
            href={latestProject.github || `/projects/${latestProject.slug}`}
            target={latestProject.github ? "_blank" : undefined}
            rel={latestProject.github ? "noopener noreferrer" : undefined}
            class="latest-link"
          >
            <h3 class="latest-name">{latestProject.title}</h3>
            <p class="latest-desc">{latestProject.description}</p>
            <div class="latest-footer">
              <span class="latest-date">{latestProject.dateDisplay}</span>
              <div class="latest-tags">
                {#each latestProject.tags.slice(0, 3) as tag}
                  <span
                    class="mini-tag"
                    style="--tag-color: {tagColors[tag] || 'var(--accent)'}"
                    >{tag}</span
                  >
                {/each}
              </div>
            </div>
          </a>
        {/if}
        <a href="/projects" class="latest-view-all">
          View all projects <ArrowRight size={14} />
        </a>
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
    font-family: "Montserrat", sans-serif;
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
    font-family: "JetBrains Mono", "Fira Code", monospace;
  }

  /* --- Fun Zone Card --- */
  .fun-effects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-bottom: 16px;
    flex: 1;
  }

  .fun-effect-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 16px 8px;
    border-radius: 12px;
    border: 1px solid var(--ctp-surface1);
    background: var(--ctp-crust);
    cursor: pointer;
    transition: all 0.2s ease;
    outline: none;
  }

  .fun-effect-btn:hover {
    border-color: var(--accent);
    background: color-mix(in srgb, var(--accent) 8%, var(--ctp-crust));
    transform: translateY(-2px);
  }

  .fun-effect-btn.active {
    border-color: var(--accent);
    background: color-mix(in srgb, var(--accent) 15%, var(--ctp-crust));
    box-shadow: 0 0 12px color-mix(in srgb, var(--accent) 25%, transparent);
  }

  .fun-effect-icon {
    font-size: 1.4rem;
  }

  .fun-effect-label {
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--ctp-subtext0);
    font-family: "JetBrains Mono", "Fira Code", monospace;
  }

  .fun-effect-btn.active .fun-effect-label {
    color: var(--accent);
    font-weight: 600;
  }

  .random-btn {
    border-style: dashed;
  }

  .random-btn:hover {
    border-style: solid;
  }

  /* Rainbow border when Gray World is active */
  :global(html.gray-world) .gray-world-btn.active {
    position: relative;
    border-color: transparent !important;
    background: transparent !important;
    overflow: hidden;
    filter: none !important;
    z-index: 0;
    border-radius: 12px;
  }

  :global(html.gray-world) .gray-world-btn.active::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      #ff0000,
      #ff8800,
      #ffff00,
      #00ff00,
      #0088ff,
      #8800ff,
      #ff0088,
      #ff0000
    );
    animation: rainbow-spin 2s linear infinite;
    z-index: -2;
  }

  :global(html.gray-world) .gray-world-btn.active::after {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 9px;
    background: #ffffff;
    z-index: -1;
  }

  :global(html.gray-world) .gray-world-btn.active .fun-effect-icon,
  :global(html.gray-world) .gray-world-btn.active .fun-effect-label {
    color: #000000 !important;
  }

  @keyframes rainbow-spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  .fun-status {
    font-size: 0.78rem;
    color: var(--ctp-subtext0);
    margin-top: auto;
  }

  /* --- Latest Post / Project Cards --- */
  .span-2 {
    grid-column: span 2;
  }

  .latest-card {
    justify-content: flex-start;
  }

  .latest-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 14px 16px;
    border-radius: 12px;
    background: var(--ctp-crust);
    border: 1px solid var(--ctp-surface0);
    transition: all 0.2s ease;
    flex: 1;
  }

  .latest-link:hover {
    border-color: var(--accent);
    background: color-mix(in srgb, var(--accent) 5%, var(--ctp-crust));
  }

  .latest-link:hover .latest-name {
    color: var(--accent);
  }

  .latest-name {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--ctp-text);
    transition: color 0.2s;
    line-height: 1.3;
  }

  .latest-desc {
    font-size: 0.82rem;
    color: var(--ctp-subtext0);
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .latest-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 4px;
  }

  .latest-date {
    font-size: 0.75rem;
    color: var(--ctp-overlay1);
    font-family: "JetBrains Mono", "Fira Code", monospace;
    white-space: nowrap;
  }

  .latest-tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .mini-tag {
    font-size: 0.7rem;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid var(--tag-color, var(--ctp-surface2));
    color: var(--tag-color, var(--ctp-subtext0));
    font-family: "JetBrains Mono", "Fira Code", monospace;
  }

  .latest-empty {
    font-size: 0.85rem;
    color: var(--ctp-overlay0);
    flex: 1;
    display: flex;
    align-items: center;
  }

  .latest-view-all {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8rem;
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    margin-top: 12px;
    transition: opacity 0.2s;
  }

  .latest-view-all:hover {
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    .dashboard-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .span-2 {
      grid-column: span 1;
    }
  }

  @media (max-width: 640px) {
    .dashboard-grid {
      grid-template-columns: 1fr;
    }
    .span-2 {
      grid-column: span 1;
    }
  }
</style>
