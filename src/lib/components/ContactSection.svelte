<script lang="ts">
  import ContactForm from "$lib/components/ContactForm.svelte";
  import { Mail, Clock, ShieldCheck, ArrowRight } from "lucide-svelte";
  import { language } from "$lib/stores/language";
</script>

<section class="contact-section section" id="contact">
  <div class="container">
    <div class="contact-grid">
      <!-- Left Side: Pitch & Direct Upwork Card -->
      <div class="contact-pitch">
        <div class="badge-pill">
          <ShieldCheck size={14} />
          <span>{$language === "EN" ? "Let's Collaborate" : "Mulai Kerja Sama"}</span>
        </div>

        <h2 class="section-title">
          {$language === "EN" 
            ? "Ready to automate or build your project?" 
            : "Siap membangun atau mengotomasi proyek Anda?"}
        </h2>

        <p class="section-desc">
          {$language === "EN"
            ? "Whether you need a custom Chrome extension, Python data pipeline, or a fast lightweight web app — send a brief or connect directly on Upwork."
            : "Baik Anda membutuhkan ekstensi Chrome kustom, otomasi data Python, atau web app modern yang cepat — kirim ringkasan kebutuhan Anda atau hubungi langsung via Upwork."}
        </p>

        <!-- Upwork Escrow Card -->
        <div class="upwork-highlight-card">
          <div class="upwork-badge">
            <ShieldCheck size={16} />
            <span>{$language === "EN" ? "Recommended Platform" : "Platform Rekomendasi"}</span>
          </div>
          <h3>{$language === "EN" ? "Hire Directly via Upwork" : "Rekrut Langsung via Upwork"}</h3>
          <p>
            {$language === "EN"
              ? "Enjoy milestone protection, secure escrow payments, and clear async deliverables."
              : "Dapatkan jaminan milestone, pembayaran escrow aman, dan hasil kerja asinkron yang terukur."}
          </p>
          <a
            href="https://upwork.com/freelancers/aryaajik"
            target="_blank"
            rel="noopener noreferrer"
            class="upwork-direct-btn"
          >
            <span>{$language === "EN" ? "Open Upwork Profile" : "Buka Profil Upwork"}</span>
            <ArrowRight size={15} />
          </a>
        </div>

        <!-- Quick Assurance Stats -->
        <div class="intake-assurances">
          <div class="assurance-item">
            <Clock size={16} class="icon" />
            <span>{$language === "EN" ? "24h Response Time" : "Respons dalam 24 Jam"}</span>
          </div>
          <div class="assurance-item">
            <Mail size={16} class="icon" />
            <span>hello@aryaaji.com</span>
          </div>
        </div>
      </div>

      <!-- Right Side: Contact Form -->
      <div class="contact-form-container">
        <div class="form-card">
          <h3 class="form-title">
            {$language === "EN" ? "Send a Project Inquiry" : "Kirim Pesan / Brief Proyek"}
          </h3>
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-section {
    padding: 80px 0 100px;
    position: relative;
    overflow: hidden;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 48px;
    align-items: flex-start;
  }

  .contact-pitch {
    max-width: 520px;
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
    line-height: 1.2;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .section-desc {
    font-size: 1rem;
    color: var(--ctp-subtext0);
    line-height: 1.65;
    margin-bottom: 28px;
  }

  .upwork-highlight-card {
    background: var(--ctp-mantle);
    border: 1px solid var(--accent-subtle);
    border-radius: 14px;
    padding: 24px;
    margin-bottom: 28px;
    position: relative;
    box-shadow: 0 10px 30px -10px var(--accent-subtle);
  }

  .upwork-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
  }

  .upwork-highlight-card h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin: 0 0 8px;
  }

  .upwork-highlight-card p {
    font-size: 0.88rem;
    color: var(--ctp-subtext0);
    line-height: 1.5;
    margin: 0 0 16px;
  }

  .upwork-direct-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 8px;
    background: var(--accent);
    color: var(--ctp-base, #1e1e2e);
    font-weight: 600;
    font-size: 0.88rem;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .upwork-direct-btn:hover {
    transform: translateY(-2px);
    opacity: 0.92;
  }

  .intake-assurances {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .assurance-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    color: var(--ctp-subtext1);
    font-weight: 500;
  }

  :global(.assurance-item .icon) {
    color: var(--accent);
  }

  .contact-form-container {
    width: 100%;
  }

  .form-card {
    background: var(--card-bg, rgba(255, 255, 255, 0.03));
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--ctp-surface0);
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
  }

  .form-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin-top: 0;
    margin-bottom: 24px;
  }

  @media (max-width: 900px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .contact-pitch {
      max-width: 100%;
    }
    .form-card {
      padding: 24px;
    }
  }
</style>
