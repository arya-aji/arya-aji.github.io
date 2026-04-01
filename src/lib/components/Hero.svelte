<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';
</script>

<section class="hero" id="hero">
  <div class="container">
    <h1 class="hero-heading">
      Hey! I'm <span class="accent-name">Jason Cameron</span>
    </h1>

    <p class="hero-bio">
      I'm currently working as a Senior SWE @
      <a href="https://stan.store" target="_blank" rel="noopener noreferrer" class="bio-link">Stan</a>.
      I've written software that is trusted by
      <a href="https://policytoolbox.iiep.unesco.org" target="_blank" rel="noopener noreferrer" class="bio-link">The United Nations</a>,
      <a href="https://git.kernel.org" target="_blank" rel="noopener noreferrer" class="bio-link">The Linux Foundation</a>,
      <a href="https://wiki.archlinux.org" target="_blank" rel="noopener noreferrer" class="bio-link">Arch Linux</a>,
      <a href="https://gitlab.gnome.org" target="_blank" rel="noopener noreferrer" class="bio-link">GNOME</a>,
      <a href="https://jasoncameron.dev/projects/anubis#valve" target="_blank" rel="noopener noreferrer" class="bio-link">Valve</a>,
      <a href="https://trac.ffmpeg.org" target="_blank" rel="noopener noreferrer" class="bio-link">FFmpeg</a>
      and many others<sup><a href="/projects/anubis" class="ref-link">[1]</a></sup>.
      Seeing code I wrote actually help people at scale is what keeps me building.
      Currently building AI that helps people articulate their ideas and share them at scale.
    </p>

    <div class="social-links">
      <a href="https://github.com/JasonLovesDoggo" target="_blank" rel="noopener noreferrer" class="social-link">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        <span>GitHub</span>
      </a>
      <span class="social-divider">|</span>
      <a href="https://www.linkedin.com/in/jsoncameron/" target="_blank" rel="noopener noreferrer" class="social-link">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        <span>LinkedIn</span>
      </a>
      <span class="social-divider">|</span>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="social-link">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        <span>X</span>
      </a>
      <span class="social-divider">|</span>
      <a href="/about" class="social-link more-link">
        More about me <ArrowRight size={16} />
      </a>
    </div>

    <div class="work-history">
      <a href="https://stan.store" target="_blank" rel="noopener noreferrer" class="work-item current">
        <div class="work-icon stan-icon">$</div>
        <span class="work-name">Stan</span>
      </a>
      <span class="work-sep">/</span>
      <span class="work-item past">
        <div class="work-icon sb-icon">&#x2B21;</div>
        <span class="work-name">StorageBox</span>
        <span class="work-label">(Past)</span>
      </span>
      <span class="work-sep">/</span>
      <span class="work-item past">
        <div class="work-icon hc-icon">HC</div>
        <span class="work-name">Hack Canada</span>
        <span class="work-label">(Past)</span>
      </span>
    </div>
  </div>
</section>

<style>
  .hero {
    padding: 80px 0 40px;
  }

  .hero-heading {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 24px;
    color: var(--ctp-text);
  }

  .accent-name {
    color: var(--accent);
    position: relative;
  }

  .accent-name::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--accent);
    opacity: 0.3;
    border-radius: 2px;
  }

  .hero-bio {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--ctp-subtext1);
    max-width: 680px;
    margin-bottom: 28px;
  }

  .bio-link {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1.5px;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .bio-link:hover {
    opacity: 0.8;
  }

  .ref-link {
    color: var(--accent);
    font-size: 0.75rem;
    text-decoration: none;
  }

  .social-links {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 36px;
    flex-wrap: wrap;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--ctp-subtext0);
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .social-link:hover {
    color: var(--accent);
    opacity: 1;
  }

  .more-link {
    color: var(--accent);
  }

  .social-divider {
    color: var(--ctp-surface2);
    user-select: none;
  }

  .work-history {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .work-item {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .work-item:hover {
    opacity: 0.8;
  }

  .work-item.current .work-name {
    color: var(--ctp-text);
    font-weight: 600;
  }

  .work-item.past {
    opacity: 0.55;
  }

  .work-item.past .work-name {
    color: var(--ctp-subtext0);
    font-weight: 500;
  }

  .work-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 700;
  }

  .stan-icon {
    background: #2cb67d;
    color: white;
    border-radius: 50%;
  }

  .sb-icon {
    background: #6366f1;
    color: white;
  }

  .hc-icon {
    background: #f5f5f4;
    color: #333;
    font-size: 0.7rem;
    font-weight: 800;
    border-radius: 8px;
  }

  .work-name {
    font-size: 0.9rem;
  }

  .work-label {
    font-size: 0.75rem;
    color: var(--ctp-overlay0);
  }

  .work-sep {
    color: var(--ctp-surface2);
    font-size: 1.2rem;
    user-select: none;
  }

  @media (max-width: 768px) {
    .hero {
      padding: 48px 0 24px;
    }

    .hero-heading {
      font-size: 2rem;
    }

    .hero-bio {
      font-size: 0.95rem;
    }
  }
</style>
