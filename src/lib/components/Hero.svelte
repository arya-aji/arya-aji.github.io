<script lang="ts">
  import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-svelte";
  import { language } from "$lib/stores/language";
</script>

<section class="hero" id="hero">
  <div class="container hero-inner">
    <div class="hero-text-col">
      <div class="availability-badge">
        <span class="status-dot pulse"></span>
        <span>
          {#if $language === "EN"}
            Available for Hourly & Fixed-Price Contracts
          {:else}
            Terbuka untuk Kontrak Hourly & Fixed-Price
          {/if}
        </span>
      </div>

      <h1 class="hero-heading">
        {#if $language === "EN"}
          Building modern <span class="accent-name">web applications</span>, automation tools & extensions.
        {:else}
          Membangun <span class="accent-name">aplikasi web modern</span>, alat otomasi & ekstensi browser.
        {/if}
      </h1>

      <p class="hero-bio">
        {#if $language === "EN"}
          Full-stack web developer specializing in fast interactive web applications, custom browser extensions, and Python data pipelines. Built for speed, reliability, and smooth async collaboration.
        {:else}
          Full-stack web developer spesialis aplikasi web interaktif yang cepat, ekstensi browser kustom, dan pipeline data Python. Dirancang untuk hasil cepat, teruji, dan kolaborasi asinkron yang terstruktur.
        {/if}
      </p>

      <div class="hero-actions-container">
        <a 
          href="https://upwork.com/freelancers/aryaajik" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn btn-accent hero-cta-btn"
        >
          <ShieldCheck size={18} />
          {#if $language === "EN"}
            Hire on Upwork
          {:else}
            Rekrut via Upwork
          {/if}
          <ArrowRight size={16} style="margin-left: 4px;" />
        </a>

        <div class="social-links">
          <a
            href="https://github.com/arya-aji"
            target="_blank"
            rel="noopener noreferrer"
            class="social-capsule"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
              ><path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              /></svg
            >
          </a>
          <a
            href="https://www.linkedin.com/in/arya-aji-kusuma"
            target="_blank"
            rel="noopener noreferrer"
            class="social-capsule"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
              ><path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              /></svg
            >
          </a>
          <a
            href="https://www.instagram.com/aryaajikusuma_"
            target="_blank"
            rel="noopener noreferrer"
            class="social-capsule"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
              ><path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              /></svg
            >
          </a>
          <a href="/resume" class="social-capsule" aria-label="Resume" title="Resume (CV)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
              ><path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 3.5L18.5 8H14V3.5zM8 13h8v2H8v-2zm0 4h8v2H8v-2zm0-8h3v2H8V9z"
              /></svg
            >
          </a>
        </div>
      </div>


    </div>
    <!-- /hero-text-col -->
  </div>

  <div class="scroll-indicator" aria-hidden="true">
    <svg class="scroll-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    padding: 80px 0 0;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }

  .hero-inner {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 40px;
  }

  .scroll-indicator {
    display: flex;
    justify-content: center;
    padding: 24px 0 32px;
  }

  .scroll-arrow {
    color: var(--ctp-overlay1);
    animation: bounce 1.8s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); opacity: 0.5; }
    50% { transform: translateY(8px); opacity: 1; }
  }

  .hero-text-col {
    flex: 1;
    max-width: 680px;
  }

  .availability-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 18px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--accent) 18%, var(--ctp-mantle));
    border: 1px solid var(--accent);
    color: var(--ctp-text);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 24px;
    box-shadow: 0 4px 16px -4px var(--accent-subtle);
  }

  .badge-icon {
    font-size: 1.1rem;
    line-height: 1;
  }

  .status-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #a6e3a1;
  }

  .status-dot.pulse {
    box-shadow: 0 0 0 0 rgba(166, 227, 161, 0.7);
    animation: statusPulse 2s infinite;
  }

  @keyframes statusPulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(166, 227, 161, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 6px rgba(166, 227, 161, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(166, 227, 161, 0);
    }
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
    content: "";
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
    border-bottom: 1px solid rgba(var(--accent-rgb, 245, 169, 127), 0.3);
    padding-bottom: 2px;
    font-weight: 500;
    transition: all 0.25s ease;
    text-decoration: none;
  }

  .bio-link:hover {
    border-bottom-color: var(--accent);
    opacity: 1;
  }

  .hero-actions-container {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 36px;
    flex-wrap: wrap;
  }

  .hero-cta-btn {
    text-decoration: none;
    box-shadow: 0 4px 20px color-mix(in srgb, var(--accent) 20%, transparent);
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .hero-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px color-mix(in srgb, var(--accent) 35%, transparent);
  }

  .hero-secondary-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--ctp-surface0) 40%, transparent);
    border: 1px solid var(--ctp-surface1);
    color: var(--ctp-text);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.25s ease;
  }

  .hero-secondary-btn:hover {
    background: var(--ctp-surface1);
    color: var(--accent);
    transform: translateY(-2px);
  }

  .social-links {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .social-capsule {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background: color-mix(in srgb, var(--ctp-crust) 45%, transparent);
    border: 1px solid color-mix(in srgb, var(--ctp-surface0) 50%, transparent);
    color: var(--ctp-subtext1);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    text-decoration: none;
  }

  .social-capsule:hover {
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 10%, var(--ctp-crust));
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  .more-link-capsule {
    background: color-mix(in srgb, var(--accent) 8%, var(--ctp-crust));
    border-color: color-mix(in srgb, var(--accent) 30%, transparent);
    color: var(--accent);
  }

  .more-link-capsule:hover {
    background: var(--accent);
    color: var(--ctp-base);
  }

  .social-divider {
    display: none;
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
    opacity: 0.7;
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
      padding: 72px 0 0;
      min-height: auto;
    }

    .hero-inner {
      padding-top: 20px;
      padding-bottom: 24px;
    }

    .availability-badge {
      font-size: 0.82rem;
      padding: 6px 14px;
      margin-bottom: 18px;
    }

    .hero-heading {
      font-size: 1.85rem;
      line-height: 1.25;
      margin-bottom: 16px;
    }

    .hero-bio {
      font-size: 0.95rem;
      line-height: 1.7;
      margin-bottom: 24px;
      display: block;
    }

    .hero-actions-container {
      flex-direction: column;
      align-items: stretch;
      gap: 16px;
      margin-bottom: 28px;
    }

    .hero-cta-btn {
      width: 100%;
      justify-content: center;
      padding: 14px 24px;
    }

    .social-links {
      justify-content: center;
      gap: 12px;
      margin-bottom: 0;
    }

    .social-capsule {
      width: 44px;
      height: 44px;
    }

    .scroll-indicator {
      padding: 12px 0 20px;
    }
  }
</style>
