<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { language } from '$lib/stores/language';
  import { CheckCircle2, ArrowLeft, Mail } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Thank You | Arya Aji Kusuma</title>
  <meta name="description" content="Pesan Anda sudah terkirim. Terima kasih sudah menghubungi Arya Aji Kusuma." />
  <meta name="robots" content="noindex" />
</svelte:head>

<Navbar />

<main class="page-main">
  <div class="container">
    <div class="thank-you-card">
      <div class="icon-wrap">
        <CheckCircle2 size={44} />
      </div>

      <h1>
        {$language === 'EN' ? 'Thank You!' : 'Terima Kasih!'}
      </h1>

      <p class="lead">
        {$language === 'EN'
          ? 'Your message has been received. I\'ll get back to you as soon as possible.'
          : 'Pesan Anda sudah saya terima. Akan saya balas secepat mungkin.'}
      </p>

      <div class="note">
        <Mail size={14} />
        <span>
          {$language === 'EN'
            ? 'Expect a reply within 24 business hours at '
            : 'Balasan akan dikirim dalam waktu 24 jam kerja ke '}
          <strong>hello@aryaaji.com</strong>
        </span>
      </div>

      <div class="actions">
        <a href="/" class="btn-back">
          <ArrowLeft size={15} />
          {$language === 'EN' ? 'Back to Home' : 'Kembali ke Beranda'}
        </a>
        <a href="/projects" class="btn-projects">
          {$language === 'EN' ? 'Browse Projects' : 'Lihat Proyek'}
        </a>
      </div>
    </div>
  </div>
</main>

<Footer />

<style>
  .page-main {
    min-height: calc(100vh - 64px);
    display: flex;
    align-items: center;
    padding: 48px 0 80px;
  }

  .container {
    max-width: 560px;
    margin: 0 auto;
    padding: 0 24px;
    width: 100%;
  }

  .thank-you-card {
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 20px;
    padding: 52px 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .icon-wrap {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--ctp-green) 12%, transparent);
    color: var(--ctp-green);
    display: grid;
    place-items: center;
    margin-bottom: 4px;
  }

  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: var(--ctp-text);
    line-height: 1.1;
    margin: 0;
  }

  .lead {
    font-size: 1rem;
    color: var(--ctp-subtext1);
    line-height: 1.7;
    max-width: 400px;
    margin: 0;
  }

  .note {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.82rem;
    color: var(--ctp-subtext0);
    background: var(--ctp-base);
    border: 1px dashed var(--ctp-surface1);
    padding: 10px 16px;
    border-radius: 8px;
    line-height: 1.5;
  }

  .note strong {
    color: var(--ctp-text);
  }

  .actions {
    display: flex;
    gap: 12px;
    margin-top: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn-back {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 11px 20px;
    border-radius: 10px;
    border: 1px solid var(--ctp-surface1);
    background: transparent;
    color: var(--ctp-subtext1);
    font-size: 0.88rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
  }

  .btn-back:hover {
    border-color: var(--accent);
    color: var(--accent);
    opacity: 1;
  }

  .btn-projects {
    display: inline-flex;
    align-items: center;
    padding: 11px 20px;
    border-radius: 10px;
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
    color: var(--accent);
    font-size: 0.88rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
  }

  .btn-projects:hover {
    background: color-mix(in srgb, var(--accent) 18%, transparent);
    border-color: var(--accent);
    opacity: 1;
  }

  @media (max-width: 480px) {
    .thank-you-card {
      padding: 36px 24px;
    }

    h1 {
      font-size: 1.7rem;
    }
  }
</style>
