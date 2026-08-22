<script lang="ts">
  import { language } from '$lib/stores/language';
</script>

<svelte:head>
  <title>{$language === 'EN' ? 'About Me' : 'Tentang Saya'} | Arya Aji Kusuma</title>
  <meta name="description" content="I'm Arya Aji Kusuma — a developer from Jakarta building SaaS platforms, browser extensions, and full-stack web apps. Passionate about turning ideas into real, working products." />
</svelte:head>

<main class="page-main">
  <div class="container">

    <h1 class="page-title">{$language === 'EN' ? 'About Me' : 'Tentang Saya'}</h1>

    <!-- Hero row: photo left, text right -->
    <div class="hero-row">
      <div class="photo-col">
        <div class="photo-wrapper">
          <img src="/photo.png" alt="Arya Aji Kusuma" class="photo-img" loading="lazy" />
        </div>
        <div class="photo-info-wrapper">
          <div class="photo-caption">Arya Aji Kusuma</div>
          <div class="photo-sub">Jakarta, Indonesia · Developer</div>
        </div>
      </div>

      <div class="text-col">
        <div class="about-body">
          {#if $language === 'EN'}
          <p>
            Hey! I'm Arya Aji Kusuma
            <a href="https://github.com/arya-aji" target="_blank" rel="noopener noreferrer" class="inline-link">(@arya-aji)</a>
            — a developer based in
            <a href="https://maps.google.com/?q=Jakarta" target="_blank" rel="noopener noreferrer" class="inline-link">Jakarta, Indonesia</a>.
            I'm passionate about turning ideas into reality — bridging the gap between
            concepts and execution to build products that truly make a difference.
          </p>

          <p>
            From a rough idea to a fully deployed product, I enjoy the entire journey. Right now I'm building
            <a href="https://tryout.aryaaji.com" target="_blank" rel="noopener noreferrer" class="inline-link">Siap Kuliah UI (SKUI)</a>,
            a mobile-first SaaS exam simulator for SIMAK UI aspirants, and
            <a href="https://github.com/arya-aji/blur-your-whatsapp" target="_blank" rel="noopener noreferrer" class="inline-link">Blur Your WhatsApp</a>,
            a privacy-focused browser extension for WhatsApp Web.
          </p>

          <p>
            Beyond personal projects, I work as a software developer in a government institution — building
            full-stack web applications, automation tools, and internal systems. If you have an idea, let's turn it into something real.
          </p>
          {:else}
          <p>
            Halo! Saya Arya Aji Kusuma
            <a href="https://github.com/arya-aji" target="_blank" rel="noopener noreferrer" class="inline-link">(@arya-aji)</a>
            — seorang developer berbasis di
            <a href="https://maps.google.com/?q=Jakarta" target="_blank" rel="noopener noreferrer" class="inline-link">Jakarta, Indonesia</a>.
            Saya berdedikasi tinggi dalam mengubah ide menjadi kenyataan — menjembatani kesenjangan antara
            konsep dan eksekusi untuk membangun produk yang benar-benar membuat perbedaan.
          </p>

          <p>
            Dari ide kasar hingga produk yang terdeploy, saya menikmati seluruh prosesnya. Saat ini saya sedang membangun
            <a href="https://tryout.aryaaji.com" target="_blank" rel="noopener noreferrer" class="inline-link">Siap Kuliah UI (SKUI)</a>,
            platform SaaS simulasi ujian mobile-first untuk calon mahasiswa SIMAK UI, dan
            <a href="https://github.com/arya-aji/blur-your-whatsapp" target="_blank" rel="noopener noreferrer" class="inline-link">Blur Your WhatsApp</a>,
            ekstensi browser yang berfokus pada privasi untuk WhatsApp Web.
          </p>

          <p>
            Di luar proyek pribadi, saya kerja sebagai software developer di instansi pemerintah — bikin aplikasi full-stack, automation tools, dan sistem internal. Kalau ada ide, yuk dibikin jadi sesuatu yang nyata.
          </p>
          {/if}
        </div>

        <div class="social-links">
          <a href="https://github.com/arya-aji" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/arya-aji-kusuma" target="_blank" rel="noopener noreferrer" class="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="https://www.instagram.com/aryaajikusuma_" target="_blank" rel="noopener noreferrer" class="social-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            Instagram
          </a>
        </div>
      </div>
    </div>

    <!-- Philosophy block -->
    <div class="philosophy-section">
      <div class="philosophy-card">
        <div class="philosophy-icon">💡</div>
        <p class="philosophy-text">
          {#if $language === 'EN'}
            Building applications from real problems — not from theory. Every project starts with an observation: is there a tedious manual process? A workflow that can be automated? If yes, I build the tool for it.
          {:else}
            Bikin aplikasi dari masalah nyata — bukan dari teori. Setiap proyek dimulai dari observasi: ada proses manual yang bikin orang capek? Ada workflow yang bisa diotomatisin? Kalau iya, saya bikin alatnya.
          {/if}
        </p>
      </div>
    </div>

  </div>
</main>

<style>
  .page-main {
    min-height: calc(100vh - 64px);
    padding: 60px 0 80px;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* Title */
  .page-title {
    font-size: 2.6rem;
    font-weight: 800;
    color: var(--ctp-text);
    margin-bottom: 48px;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  /* ── Hero row ── */
  .hero-row {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 48px;
    align-items: start;
    margin-bottom: 64px;
  }

  /* Photo column */
  .photo-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .photo-wrapper {
    position: relative;
    border-radius: 24px;
    padding: 4px;
    background: linear-gradient(135deg, var(--accent), transparent);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
  }

  .photo-wrapper::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(135deg, var(--accent), var(--ctp-lavender));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  .photo-wrapper:hover {
    transform: scale(1.03) translateY(-2px);
  }

  .photo-wrapper:hover::after {
    opacity: 1;
  }

  .photo-img {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 20px;
    object-fit: cover;
    display: block;
  }

  .photo-caption {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--ctp-text);
    text-align: center;
  }

  .photo-sub {
    font-size: 0.78rem;
    color: var(--ctp-subtext0);
    text-align: center;
    line-height: 1.4;
    font-family: 'JetBrains Mono', monospace;
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
    margin-bottom: 32px;
  }

  .about-body p {
    font-size: 1rem;
    line-height: 1.85;
    color: var(--ctp-subtext1);
  }

  .inline-link {
    color: var(--accent);
    text-decoration: underline dotted;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
    font-weight: 600;
    transition: opacity 0.2s;
  }

  .inline-link:hover { opacity: 0.8; }

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
    padding: 11px 20px;
    border-radius: 10px;
    background: var(--ctp-mantle);
    color: var(--ctp-text);
    text-decoration: none;
    font-size: 0.88rem;
    font-weight: 600;
    border: 1px solid var(--ctp-surface0);
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .social-btn:hover {
    border-color: var(--accent);
    color: var(--ctp-base);
    background: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px color-mix(in srgb, var(--accent) 25%, transparent);
    opacity: 1;
  }

  /* ── Philosophy Section ── */
  .philosophy-section {
    margin-top: 32px;
    padding-top: 40px;
    border-top: 1px solid var(--ctp-surface0);
  }

  .philosophy-card {
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 16px;
    padding: 24px 28px;
    display: flex;
    align-items: flex-start;
    gap: 18px;
    transition: border-color 0.2s ease, transform 0.2s ease;
    border-left: 3px solid var(--accent);
  }

  .philosophy-card:hover {
    border-color: color-mix(in srgb, var(--accent) 40%, var(--ctp-surface0));
    transform: translateY(-2px);
  }

  .philosophy-icon {
    font-size: 1.6rem;
    line-height: 1;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .philosophy-text {
    font-size: 1.02rem;
    color: var(--ctp-text);
    line-height: 1.8;
    margin: 0;
    font-weight: 500;
  }

  @media (max-width: 640px) {
    .hero-row {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .photo-col {
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }

    .photo-info-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }

    .photo-wrapper {
      width: 120px;
      flex-shrink: 0;
    }
  }
</style>
