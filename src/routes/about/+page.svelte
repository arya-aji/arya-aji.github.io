<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>About Me | Arya Aji Kusuma</title>
  <meta name="description" content="Developer based in Jakarta, Indonesia. Building useful web apps, geospatial tools, and automation scripts." />
</svelte:head>

<Navbar />

<main class="page-main">
  <div class="container">

    <h1 class="page-title">About Me</h1>

    <!-- Hero row: photo left, text right -->
    <div class="hero-row">
      <div class="photo-col">
        <div class="photo-placeholder">
          <div class="photo-inner">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span class="photo-hint">Photo</span>
          </div>
        </div>
        <div class="photo-caption">Arya Aji Kusuma</div>
        <div class="photo-sub">Jakarta, Indonesia · Developer</div>
      </div>

      <div class="text-col">
        <div class="about-body">
          <p>
            Hey! I'm Arya Aji Kusuma
            <a href="https://github.com/arya-aji" target="_blank" rel="noopener noreferrer" class="inline-link">(@arya-aji)</a>
            — a developer based in
            <a href="https://maps.google.com/?q=Jakarta" target="_blank" rel="noopener noreferrer" class="inline-link">Jakarta, Indonesia</a>.
            I enjoy building projects that are useful and have a real impact.
          </p>

          <p>
            Some of my notable projects include
            <a href="https://geomon.vercel.app" target="_blank" rel="noopener noreferrer" class="inline-link">Geomon</a>,
            a geospatial monitoring app for BPS Jakarta Pusat,
            <a href="https://sbr-dashboard.vercel.app" target="_blank" rel="noopener noreferrer" class="inline-link">SBR Dashboard</a>,
            a TypeScript-based data visualization dashboard, and
            <a href="https://github.com/arya-aji/automation" target="_blank" rel="noopener noreferrer" class="inline-link">automation scripts</a>
            in Python to streamline work processes.
          </p>

          <p>
            Outside of coding, I'm interested in geospatial technology, data analysis, and
            always eager to learn new things. Feel free to reach out if you'd like to chat!
          </p>
        </div>

        <div class="social-links">
          <a href="https://github.com/arya-aji" target="_blank" rel="noopener noreferrer" class="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/arya-aji-kusuma" target="_blank" rel="noopener noreferrer" class="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>



  </div>
</main>

<Footer />

<style>
  .page-main {
    min-height: calc(100vh - 64px);
    padding: 40px 0 24px;
  }

  .container {
    max-width: 860px;
    margin: 0 auto;
    padding: 0 24px;
  }



  /* Title */
  .page-title {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin-bottom: 36px;
    line-height: 1.2;
  }

  /* ── Hero row ── */
  .hero-row {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 40px;
    align-items: start;
    margin-bottom: 56px;
  }

  /* Photo column */
  .photo-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .photo-placeholder {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 20px;
    background: var(--ctp-surface0);
    border: 2px dashed var(--ctp-surface2);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: border-color 0.2s;
  }

  .photo-placeholder:hover {
    border-color: var(--accent);
  }

  .photo-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: var(--ctp-overlay0);
  }

  .photo-hint {
    font-size: 0.78rem;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    color: var(--ctp-overlay0);
  }

  .photo-caption {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--ctp-text);
  }

  .photo-sub {
    font-size: 0.75rem;
    color: var(--ctp-subtext0);
    text-align: center;
    line-height: 1.4;
  }

  /* Text column */
  .text-col {
    display: flex;
    flex-direction: column;
  }

  .about-body {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 28px;
  }

  .about-body p {
    font-size: 1rem;
    line-height: 1.85;
    color: var(--ctp-subtext1);
  }

  .inline-link {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
    font-weight: 500;
    transition: opacity 0.2s;
  }

  .inline-link:hover { opacity: 0.75; }



  /* Social buttons */
  .social-links {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .social-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 10px;
    background: var(--ctp-surface0);
    color: var(--ctp-text);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    border: 1px solid var(--ctp-surface1);
    transition: all 0.2s ease;
  }

  .social-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 8%, var(--ctp-surface0));
    opacity: 1;
  }



  /* Responsive */
  @media (max-width: 640px) {
    .hero-row {
      grid-template-columns: 1fr;
    }

    .photo-col {
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }

    .photo-placeholder {
      width: 100px;
      flex-shrink: 0;
    }
  }
</style>
