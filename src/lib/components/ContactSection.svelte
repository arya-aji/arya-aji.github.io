<script lang="ts">
  import { Mail, ArrowRight } from "lucide-svelte";
  import { language } from "$lib/stores/language";
</script>

<section class="contact-section section" id="contact">
  <div class="container">
    <div class="contact-header">
      <div class="badge-pill">
        <span>{$language === "EN" ? "Let's Collaborate" : "Mulai Kerja Sama"}</span>
      </div>

      <h2 class="section-title">
        {$language === "EN" ? "Let's Collaborate" : "Mari Berkolaborasi"}
      </h2>

      <p class="section-desc">
        {$language === "EN"
          ? "Whether you need a custom Chrome extension, Python data pipeline, or a fast lightweight web app — send a brief directly."
          : "Baik Anda membutuhkan ekstensi Chrome kustom, pipeline data Python, atau web app modern yang cepat — kirim ringkasan kebutuhan Anda secara langsung."}
      </p>
    </div>

    <!-- 2 Card Horizontal / Side by Side Grid -->
    <div class="contact-grid-2col">
      <!-- Card Kiri: Upwork (Recommended) -->
      <div class="card-col upwork-col">
        <div class="col-badge">
          <svg class="upwork-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.261 0-4.992 2.185-5.614 4.15-1.408-2.128-2.47-4.646-3.08-6.945l-.105-.398H5.972l-.1.398c-.689 2.583-1.895 5.378-3.486 7.697l-.234.341 1.572 1.077.234-.341c1.399-2.039 2.476-4.484 3.125-6.757.72 2.7 2.015 5.765 3.754 8.243l-2.03 9.544h3.832l1.378-6.484c.833.568 1.768.995 2.784 1.246l.542.133.245-.508c.552-1.148 1.442-1.954 2.55-2.316.518-.169 1.07-.257 1.642-.257 3.693 0 6.698-3.005 6.698-6.698S22.254 5.018 18.561 5.018z"/>
          </svg>
          <span>{$language === "EN" ? "Recommended" : "Rekomendasi"}</span>
        </div>
        <h3 class="col-title">{$language === "EN" ? "Hire via Upwork" : "Rekrut via Upwork"}</h3>
        <p class="col-text">
          {$language === "EN"
            ? "Milestone protection, escrow payments, async delivery."
            : "Proteksi milestone, pembayaran aman escrow, hasil kerja asinkron."}
        </p>
        <a
          href="https://upwork.com/freelancers/aryaajik"
          target="_blank"
          rel="noopener noreferrer"
          class="col-btn upwork-btn"
        >
          <span>{$language === "EN" ? "Open Upwork Profile" : "Buka Profil Upwork"}</span>
          <ArrowRight size={15} />
        </a>
      </div>

      <!-- Card Kanan: Direct Email -->
      <div class="card-col email-col">
        <div class="col-badge email-badge">
          <Mail size={16} />
          <span>{$language === "EN" ? "Direct Contact" : "Kontak Langsung"}</span>
        </div>
        <h3 class="col-title">{$language === "EN" ? "Send Direct Email" : "Kirim Email Langsung"}</h3>
        <p class="col-text">
          {$language === "EN"
            ? "Send your brief straight to inbox. 24h response."
            : "Kirim ringkasan brief langsung ke inbox. Respon dalam 24 jam."}
        </p>
        <a
          href="mailto:hello@aryaaji.com"
          class="col-btn email-btn"
        >
          <Mail size={16} />
          <span>hello@aryaaji.com</span>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-section {
    padding: 80px 0;
    position: relative;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .contact-header {
    text-align: center;
    max-width: 640px;
    margin: 0 auto 48px;
  }

  .badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    border-radius: 999px;
    background: var(--accent-surface);
    color: var(--accent);
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 14px;
    border: 1px solid var(--accent-subtle);
  }

  .section-title {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--ctp-text);
    margin: 0 0 14px;
    letter-spacing: -0.02em;
  }

  .section-desc {
    font-size: 1.05rem;
    color: var(--ctp-subtext0);
    line-height: 1.65;
    margin: 0;
  }

  /* 2 Column Horizontal Grid */
  .contact-grid-2col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    align-items: stretch;
  }

  .card-col {
    background: color-mix(in srgb, var(--ctp-mantle) 80%, transparent);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 16px;
    padding: 36px 32px;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .card-col:hover {
    transform: translateY(-3px);
  }

  /* Left Card: Upwork (Recommended) */
  .upwork-col {
    border: 1px solid color-mix(in srgb, #a6e3a1 40%, var(--accent));
    box-shadow: 0 10px 30px -10px color-mix(in srgb, #a6e3a1 15%, transparent);
  }

  .upwork-col:hover {
    border-color: #a6e3a1;
    box-shadow: 0 16px 36px -10px color-mix(in srgb, #a6e3a1 25%, transparent);
  }

  .col-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #a6e3a1;
    margin-bottom: 14px;
  }

  .upwork-icon {
    color: #a6e3a1;
  }

  /* Right Card: Direct Email */
  .email-col {
    border: 1px solid var(--ctp-surface0);
  }

  .email-col:hover {
    border-color: var(--ctp-surface2);
    box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.25);
  }

  .email-badge {
    color: var(--ctp-subtext0);
  }

  .col-title {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin: 0 0 10px;
  }

  .col-text {
    font-size: 0.92rem;
    color: var(--ctp-subtext0);
    line-height: 1.6;
    margin: 0 0 28px;
    flex-grow: 1;
  }

  .col-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 22px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .upwork-btn {
    background: var(--accent);
    color: var(--ctp-base, #1e1e2e);
  }

  .upwork-btn:hover {
    opacity: 0.92;
    transform: translateY(-2px);
  }

  .email-btn {
    background: var(--accent-surface);
    color: var(--accent);
    border: 1px solid var(--accent-subtle);
  }

  .email-btn:hover {
    background: var(--accent);
    color: var(--ctp-base, #1e1e2e);
  }

  @media (max-width: 768px) {
    .contact-grid-2col {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .section-title {
      font-size: 1.8rem;
    }
    .card-col {
      padding: 28px 22px;
    }
  }
</style>
