<script lang="ts">
  import { language } from "$lib/stores/language";
  import { MapPin } from "lucide-svelte";
</script>

<section class="about-section section" id="about">
  <div class="container">
    <div class="about-card">
      <div class="about-header">
        <h2 class="section-title">
          {$language === "EN" ? "About Me" : "Tentang Saya"}
        </h2>
      </div>

      <div class="about-content">
        <div class="profile-col">
          <div class="photo-wrapper">
            <img
              src="/photo.png"
              alt="Arya Aji Kusuma"
              class="photo-img"
              loading="lazy"
            />
          </div>
          <div class="profile-meta">
            <h3 class="profile-name">Arya Aji Kusuma</h3>
            <span class="profile-loc">
              <MapPin size={14} class="loc-icon" />
              Jakarta, Indonesia
            </span>
          </div>
        </div>

        <div class="text-col">
          <p class="about-philosophy">
            {#if $language === "EN"}
              Building applications from real problems — not from theory. Every project starts with an observation: is there a tedious manual process? A workflow that can be automated? If yes, I build the tool for it.
            {:else}
              Bikin aplikasi dari masalah nyata — bukan dari teori. Setiap proyek dimulai dari observasi: ada proses manual yang bikin orang capek? Ada workflow yang bisa diotomatisin? Kalau iya, saya bikin alatnya.
            {/if}
          </p>

          <div class="social-icons">
            <a
              href="https://github.com/arya-aji"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon-btn"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/arya-aji-kusuma"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon-btn"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/aryaajikusuma_"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon-btn"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about-section {
    padding: 32px 0 48px;
    position: relative;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .about-card {
    background: color-mix(in srgb, var(--ctp-mantle) 80%, transparent);
    border: 1px solid var(--ctp-surface0);
    border-radius: 20px;
    padding: 36px 40px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.15);
    transition: border-color 0.3s ease, transform 0.3s ease;
  }

  .about-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--ctp-lavender));
  }

  .about-card:hover {
    border-color: color-mix(in srgb, var(--accent) 35%, var(--ctp-surface0));
    transform: translateY(-2px);
  }

  .about-header {
    margin-bottom: 24px;
  }

  .section-title {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--ctp-text);
    margin: 0;
    letter-spacing: -0.01em;
  }

  .about-content {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 36px;
    align-items: center;
  }

  /* Profile Column */
  .profile-col {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .photo-wrapper {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, var(--accent), var(--ctp-lavender));
    box-shadow: 0 6px 18px color-mix(in srgb, var(--accent) 25%, transparent);
    flex-shrink: 0;
  }

  .photo-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    display: block;
  }

  .profile-meta {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .profile-name {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin: 0;
    line-height: 1.3;
  }

  .profile-loc {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8rem;
    color: var(--ctp-subtext0);
    font-family: "JetBrains Mono", monospace;
  }

  :global(.loc-icon) {
    color: var(--accent);
    flex-shrink: 0;
  }

  /* Text Column */
  .text-col {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .about-philosophy {
    font-size: 1.02rem;
    line-height: 1.8;
    color: var(--ctp-subtext1);
    margin: 0;
    font-weight: 500;
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .social-icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: var(--ctp-crust);
    border: 1px solid var(--ctp-surface0);
    color: var(--ctp-subtext0);
    text-decoration: none;
    transition: all 0.25s ease;
  }

  .social-icon-btn:hover {
    color: var(--accent);
    border-color: var(--accent);
    background: color-mix(in srgb, var(--accent) 12%, var(--ctp-crust));
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .about-card {
      padding: 24px 20px;
    }

    .about-content {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .about-philosophy {
      font-size: 0.95rem;
      line-height: 1.7;
    }
  }
</style>
