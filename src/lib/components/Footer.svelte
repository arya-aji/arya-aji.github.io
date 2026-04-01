<script lang="ts">
  import { onMount } from 'svelte';

  let localTime = $state('00:00:00');

  onMount(() => {
    function updateTime() {
      const now = new Date();
      localTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  });
</script>

<footer class="footer">
  <div class="footer-inner">
    <!-- Webring — top-right floating -->
    <div class="webring">
      <span class="webring-label">Webrings:</span>
      <a href="https://ctp-webr.ing/" target="_blank" rel="noopener noreferrer" class="webring-name">cpt</a>
      <a href="https://ctp-webr.ing/json/previous" class="webring-nav">&lt;</a>
      <span class="webring-sep">|</span>
      <a href="https://ctp-webr.ing/json/next" class="webring-nav">&gt;</a>
    </div>

    <!-- Main footer bar -->
    <div class="footer-bar">
      <!-- Left -->
      <div class="footer-left">
        <span class="copyright">© 2026 Jason Cameron</span>
        <span class="status">
          <span class="status-dot"></span>
          <span>All Services <span class="status-nominal">Nominal</span></span>
        </span>
      </div>

      <!-- Right -->
      <div class="footer-right">
        <span class="footer-time">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span class="time-value">{localTime}</span>
        </span>

        <span class="footer-views">infinite views</span>

        <a
          href="https://github.com/JasonLovesDoggo/nyx/commit/b5f95e5"
          target="_blank"
          rel="noopener noreferrer"
          class="commit-hash"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          b5f95e5
        </a>

        <div class="footer-socials">
          <a href="https://github.com/jasonlovesdoggo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/jsoncameron/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--ctp-surface0);
    margin-top: 40px;
    background: var(--ctp-mantle);
  }

  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* Webring row */
  .webring {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;
    padding: 8px 0 6px;
    font-size: 0.72rem;
    color: var(--ctp-overlay0);
    border-bottom: 1px solid color-mix(in srgb, var(--ctp-surface0) 40%, transparent);
  }

  .webring-label {
    color: var(--ctp-overlay0);
  }

  .webring-name {
    color: var(--accent);
    font-weight: 600;
    text-decoration: none;
  }

  .webring-name:hover {
    opacity: 0.8;
  }

  .webring-nav {
    color: var(--ctp-overlay1);
    text-decoration: none;
    padding: 1px 5px;
    border: 1px solid var(--ctp-surface1);
    border-radius: 3px;
    font-size: 0.65rem;
    line-height: 1.4;
    transition: all 0.15s;
  }

  .webring-nav:hover {
    border-color: var(--accent);
    color: var(--accent);
    opacity: 1;
  }

  .webring-sep {
    color: var(--ctp-surface1);
    user-select: none;
  }

  /* Main footer bar */
  .footer-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    gap: 16px;
  }

  .footer-left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .copyright {
    font-size: 0.78rem;
    color: var(--ctp-subtext0);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 0.78rem;
    color: var(--ctp-subtext0);
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--ctp-green);
    box-shadow: 0 0 5px var(--ctp-green);
    flex-shrink: 0;
  }

  .status-nominal {
    color: var(--accent);
  }

  /* Right side */
  .footer-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .footer-time {
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.75rem;
    color: var(--ctp-overlay0);
  }

  .time-value {
    color: var(--accent);
  }

  .footer-views {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.75rem;
    color: var(--ctp-subtext0);
    white-space: nowrap;
  }

  .commit-hash {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.72rem;
    color: var(--ctp-overlay0);
    text-decoration: none;
    transition: color 0.2s;
  }

  .commit-hash:hover {
    color: var(--accent);
    opacity: 1;
  }

  .footer-socials {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .footer-socials a {
    color: var(--ctp-overlay1);
    transition: color 0.2s;
    display: flex;
    align-items: center;
  }

  .footer-socials a:hover {
    color: var(--accent);
    opacity: 1;
  }

  @media (max-width: 768px) {
    .footer-bar {
      flex-wrap: wrap;
      height: auto;
      padding: 12px 0;
      gap: 12px;
    }

    .footer-right {
      flex-wrap: wrap;
      gap: 12px;
    }
  }
</style>
