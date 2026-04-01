<script lang="ts">
  import { Menu, X, ChevronDown } from 'lucide-svelte';

  let mobileOpen = $state(false);
  let moreOpen = $state(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/posts', label: 'Posts' },
    { href: '/projects', label: 'Projects' },
    { href: '/pics', label: 'Pics' }
  ];

  const moreLinks = [
    { href: '/resume.pdf', label: 'Resume' },
    { href: '/tutorials', label: 'Tutorials' },
    { href: '#', label: 'Notes' },
    { href: '#', label: 'Terminal' }
  ];
</script>

<nav class="navbar">
  <div class="navbar-inner">
    <a href="/" class="logo" aria-label="Home">
      <span class="logo-tilde">~/</span>
      <span class="logo-cursor">▌</span>
    </a>

    <div class="nav-links desktop-only">
      {#each navLinks as link}
        <a href={link.href} class="nav-link">{link.label}</a>
      {/each}

      <div class="more-dropdown" role="menu">
        <button
          class="nav-link more-btn"
          onclick={() => (moreOpen = !moreOpen)}
          aria-expanded={moreOpen}
        >
          More...
        </button>
        {#if moreOpen}
          <div class="dropdown-menu">
            {#each moreLinks as link}
              <a href={link.href} class="dropdown-item">{link.label}</a>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <button
      class="mobile-toggle mobile-only"
      onclick={() => (mobileOpen = !mobileOpen)}
      aria-label="Toggle menu"
    >
      {#if mobileOpen}
        <X size={24} />
      {:else}
        <Menu size={24} />
      {/if}
    </button>
  </div>

  {#if mobileOpen}
    <div class="mobile-menu">
      {#each navLinks as link}
        <a href={link.href} class="mobile-link" onclick={() => (mobileOpen = false)}>{link.label}</a>
      {/each}
      <div class="mobile-divider"></div>
      {#each moreLinks as link}
        <a href={link.href} class="mobile-link" onclick={() => (mobileOpen = false)}>{link.label}</a>
      {/each}
    </div>
  {/if}
</nav>

<style>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    background: color-mix(in srgb, var(--ctp-base) 80%, transparent);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid color-mix(in srgb, var(--ctp-surface0) 50%, transparent);
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

  .logo {
    display: flex;
    align-items: center;
    gap: 0;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .logo:hover {
    opacity: 1;
  }

  .logo-tilde {
    color: var(--ctp-text);
    transition: color 0.3s;
  }

  .logo:hover .logo-tilde {
    color: var(--accent);
  }

  .logo-cursor {
    color: var(--accent);
    animation: blink 1s step-end infinite;
    font-size: 1rem;
    margin-left: 1px;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .logo:hover .logo-cursor {
    animation: wiggle 0.4s ease-in-out;
  }

  @keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(8deg); }
    75% { transform: rotate(-8deg); }
  }

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
    font-family: 'Montserrat', sans-serif;
  }

  .nav-link:hover {
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    opacity: 1;
  }

  .more-dropdown {
    position: relative;
  }

  .more-btn {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .dropdown-menu {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 12px;
    padding: 8px;
    min-width: 160px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    animation: dropdown-in 0.2s ease;
  }

  @keyframes dropdown-in {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .dropdown-item {
    display: block;
    padding: 10px 14px;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--ctp-subtext1);
    text-decoration: none;
    transition: all 0.15s ease;
  }

  .dropdown-item:hover {
    background: var(--ctp-surface0);
    color: var(--accent);
    opacity: 1;
  }

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

  .mobile-menu {
    padding: 16px 24px;
    border-top: 1px solid var(--ctp-surface0);
    display: flex;
    flex-direction: column;
    gap: 4px;
    animation: mobile-in 0.2s ease;
  }

  @keyframes mobile-in {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .mobile-link {
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--ctp-subtext1);
    text-decoration: none;
    transition: all 0.15s ease;
  }

  .mobile-link:hover {
    background: var(--ctp-surface0);
    color: var(--accent);
    opacity: 1;
  }

  .mobile-divider {
    height: 1px;
    background: var(--ctp-surface0);
    margin: 8px 0;
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
</style>
