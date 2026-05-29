<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ContactForm from "$lib/components/ContactForm.svelte";
  import { Mail, MessageCircle, Clock } from "lucide-svelte";
  import { language } from "$lib/stores/language";
</script>

<svelte:head>
  <title>{$language === 'EN' ? 'Contact' : 'Kontak'} | Arya Aji Kusuma</title>
  <meta name="description" content="Get in touch with Aji. Submit your project brief, category, and budget estimates securely." />
</svelte:head>

<Navbar />

<main class="contact-page container pt-32 pb-32">
  <div class="contact-intro">
    <span class="eyebrow">{$language === 'EN' ? 'Connect' : 'Hubungi'}</span>
    <h1>{$language === 'EN' ? 'Ready to build your next dream project?' : 'Siap membangun proyek impian Anda berikutnya?'}</h1>
    <p>
      {$language === 'EN'
        ? "Let's collaborate to turn your unique goals into beautiful, scalable web applications, landing pages, or automated enterprise systems."
        : 'Mari berkolaborasi untuk mewujudkan tujuan unik Anda menjadi aplikasi web yang indah dan skalabel, landing page, atau sistem enterprise yang terotomasi.'}
    </p>

    <div class="intake-guides">
      <div class="guide-item">
        <Clock size={18} class="guide-icon" />
        <div>
          <h3>{$language === 'EN' ? '24-Hour Review' : 'Tinjauan 24 Jam'}</h3>
          <p>{$language === 'EN' ? 'I review every incoming brief and respond with an estimate within 24 business hours.' : 'Saya meninjau setiap brief yang masuk dan merespons dengan estimasi dalam 24 jam kerja.'}</p>
        </div>
      </div>
      <div class="guide-item">
        <Mail size={18} class="guide-icon" />
        <div>
          <h3>{$language === 'EN' ? 'Direct Email' : 'Email Langsung'}</h3>
          <p>{$language === 'EN' ? 'Submissions go straight to my secure inbox at' : 'Pengiriman langsung ke inbox aman saya di'} <strong>hello@aryaaji.com</strong>.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="form-wrapper">
    <ContactForm />
  </div>
</main>

<Footer />

<style>
  .contact-page {
    max-width: 1120px;
    margin: 0 auto;
    min-height: calc(100vh - 64px);
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 48px;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 80px;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  .contact-intro {
    max-width: 480px;
    min-width: 0;
    overflow-wrap: break-word;
    word-break: break-word;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 12px;
  }

  .contact-intro h1 {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    line-height: 1.15;
    font-weight: 800;
    color: var(--ctp-text);
    margin: 0 0 20px 0;
  }

  .contact-intro p {
    color: var(--ctp-subtext1);
    font-size: 1.05rem;
    line-height: 1.8;
    margin: 0 0 36px 0;
  }

  .intake-guides {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-top: 1px solid var(--ctp-surface0);
    padding-top: 28px;
  }

  .guide-item {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  .guide-icon {
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 4px;
  }

  .guide-item h3 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin: 0 0 4px 0;
  }

  .guide-item p {
    font-size: 0.9rem;
    color: var(--ctp-subtext0);
    line-height: 1.5;
    margin: 0;
  }

  .form-wrapper {
    width: 100%;
    min-width: 0;
    overflow: hidden;
  }

  @media (max-width: 960px) {
    .contact-page {
      grid-template-columns: 1fr;
      gap: 40px;
      padding-top: 100px;
      padding-bottom: 48px;
    }

    .contact-intro {
      max-width: 100%;
    }

    .contact-intro h1 {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 480px) {
    .contact-page {
      gap: 28px;
      padding-top: 80px;
      padding-bottom: 32px;
    }
  }
</style>
