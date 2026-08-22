<script lang="ts">
  import { Mail, Clock, ShieldCheck, ArrowRight } from "lucide-svelte";
  import { language } from "$lib/stores/language";
</script>

<section class="contact-section section" id="contact">
  <div class="container">
    <div class="contact-card">
      <div class="contact-header">
        <div class="badge-pill">
          <ShieldCheck size={14} />
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

      <div class="contact-methods-grid">
        <!-- Upwork Card (Recommended) -->
        <div class="method-card upwork-card">
          <div class="method-badge">
            <ShieldCheck size={15} />
            <span>{$language === "EN" ? "Recommended" : "Rekomendasi"}</span>
          </div>
          <h3 class="method-title">Upwork</h3>
          <p class="method-desc">
            {$language === "EN"
              ? "Hire directly with milestone protection, secure escrow payments, and async delivery."
              : "Rekrut langsung dengan proteksi milestone, pembayaran escrow aman, dan hasil kerja asinkron."}
          </p>
          <a
            href="https://upwork.com/freelancers/aryaajik"
            target="_blank"
            rel="noopener noreferrer"
            class="method-btn upwork-btn"
          >
            <span>{$language === "EN" ? "Open Upwork Profile" : "Buka Profil Upwork"}</span>
            <ArrowRight size={15} />
          </a>
        </div>

        <!-- Direct Email Card -->
        <div class="method-card email-card">
          <div class="method-badge email-badge">
            <Clock size={15} />
            <span>{$language === "EN" ? "24h Response" : "Respon 24 Jam"}</span>
          </div>
          <h3 class="method-title">Direct Email</h3>
          <p class="method-desc">
            {$language === "EN"
              ? "Send your initial project brief or questions straight to my inbox."
              : "Kirim ringkasan awal proyek atau pertanyaan Anda langsung ke email saya."}
          </p>
          <a
            href="mailto:hello@aryaaji.com"
            class="method-btn email-btn"
          >
            <Mail size={16} />
            <span>hello@aryaaji.com</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-section {
    padding: 60px 0 70px;
    position: relative;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .contact-card {
    background: color-mix(in srgb, var(--ctp-mantle) 80%, transparent);
    border: 1px solid var(--ctp-surface0);
    border-radius: 20px;
    padding: 48px 40px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  .contact-header {
    max-width: 640px;
    margin: 0 auto 40px;
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
    margin-bottom: 16px;
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

  .contact-methods-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    max-width: 840px;
    margin: 0 auto;
    text-align: left;
  }

  .method-card {
    background: var(--ctp-crust);
    border: 1px solid var(--ctp-surface0);
    border-radius: 16px;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .method-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
    box-shadow: 0 12px 30px -10px var(--accent-subtle);
  }

  .upwork-card {
    border-color: var(--accent-subtle);
  }

  .method-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--accent);
    margin-bottom: 12px;
  }

  .email-badge {
    color: var(--ctp-subtext1);
  }

  .method-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin: 0 0 10px;
  }

  .method-desc {
    font-size: 0.9rem;
    color: var(--ctp-subtext0);
    line-height: 1.55;
    margin: 0 0 24px;
    flex-grow: 1;
  }

  .method-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 20px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.92rem;
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
    .contact-card {
      padding: 32px 20px;
    }
    .section-title {
      font-size: 1.8rem;
    }
    .section-desc {
      font-size: 0.95rem;
    }
  }
</style>
