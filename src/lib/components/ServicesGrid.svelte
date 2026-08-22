<script lang="ts">
  import { CheckCircle2, Clock, Sparkles, ArrowRight, Shield } from "lucide-svelte";
  import { language } from "$lib/stores/language";
  import { serviceOfferings } from "$lib/data/services";
</script>

<section class="services-section section" id="services">
  <div class="container">
    <div class="section-header">
      <div class="badge-pill">
        <Sparkles size={14} />
        <span>{$language === "EN" ? "What I Can Build For You" : "Layanan Yang Bisa Dikerjakan"}</span>
      </div>
      <h2 class="section-title">
        {$language === "EN" ? "Fixed-Scope Sprints for Fast Results" : "Pengerjaan Cepat dengan Lingkup Jelas"}
      </h2>
      <p class="section-subtitle">
        {$language === "EN" 
          ? "No endless hourly drag. Clear requirements, transparent milestones, and reliable async communication." 
          : "Tanpa biaya jam kerja membengkak. Kebutuhan jelas, milestone transparan, dan komunikasi asinkron yang teratur."}
      </p>
    </div>

    <div class="services-grid">
      {#each serviceOfferings as service}
        <div class="service-card">
          <div class="card-header">
            <span class="service-badge" style="color: {service.badgeColor}; background: {service.badgeBg}; border: 1px solid {service.badgeColor};">
              {service.badge}
            </span>
            <span class="turnaround-tag">
              <Clock size={13} />
              {$language === "EN" ? service.turnaround_en : service.turnaround_id}
            </span>
          </div>

          <h3 class="service-title">
            {$language === "EN" ? service.title_en : service.title_id}
          </h3>

          <p class="service-desc">
            {$language === "EN" ? service.description_en : service.description_id}
          </p>

          <div class="deliverables-box">
            <h4 class="deliverables-title">
              {$language === "EN" ? "Key Deliverables:" : "Yang Anda Dapatkan:"}
            </h4>
            <ul class="deliverables-list">
              {#each ($language === "EN" ? service.deliverables_en : service.deliverables_id) as item}
                <li>
                  <CheckCircle2 size={15} class="check-icon" />
                  <span>{item}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="card-footer">
            <div class="ideal-for">
              <strong>{$language === "EN" ? "Best For:" : "Cocok Untuk:"}</strong>
              <p>{$language === "EN" ? service.idealFor_en : service.idealFor_id}</p>
            </div>
            
            <a 
              href="https://upwork.com/freelancers/aryaajik" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="service-cta-btn"
            >
              <span>{$language === "EN" ? "Request on Upwork" : "Pesan via Upwork"}</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      {/each}
    </div>

    <!-- Assurance banner -->
    <div class="assurance-banner">
      <div class="assurance-icon">
        <Shield size={22} />
      </div>
      <div class="assurance-text">
        <h4>{$language === "EN" ? "Protected via Upwork Escrow" : "Aman & Terjamin via Upwork Escrow"}</h4>
        <p>
          {$language === "EN"
            ? "Funds are only released once you test and approve the delivered milestones. Zero financial risk."
            : "Dana baru dilepaskan setelah Anda menguji dan menyetujui hasil deliverable. Bebas risiko."}
        </p>
      </div>
      <a 
        href="/contact" 
        class="direct-inquiry-link"
      >
        {$language === "EN" ? "Have a custom question? Contact" : "Ada pertanyaan khusus? Hubungi"} &rarr;
      </a>
    </div>
  </div>
</section>

<style>
  .services-section {
    padding: 80px 0;
    background: transparent;
    position: relative;
  }

  .section-header {
    text-align: center;
    max-width: 680px;
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
    font-size: 2rem;
    font-weight: 800;
    color: var(--ctp-text);
    margin-bottom: 12px;
    letter-spacing: -0.02em;
  }

  .section-subtitle {
    font-size: 1rem;
    color: var(--ctp-subtext0);
    line-height: 1.6;
    margin: 0;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    margin-bottom: 40px;
  }

  .service-card {
    background: var(--card-bg, rgba(255, 255, 255, 0.03));
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--card-border, var(--ctp-surface0));
    border-radius: 16px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .service-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
    box-shadow: 0 12px 30px -10px var(--accent-subtle);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    flex-wrap: wrap;
    gap: 8px;
  }

  .service-badge {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 3px 10px;
    border-radius: 6px;
    background: var(--accent);
    color: var(--ctp-base, #1e1e2e);
  }

  .turnaround-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8rem;
    color: var(--ctp-subtext0);
    font-weight: 500;
  }

  .service-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin-bottom: 10px;
    line-height: 1.35;
  }

  .service-desc {
    font-size: 0.92rem;
    color: var(--ctp-subtext0);
    line-height: 1.55;
    margin-bottom: 20px;
  }

  .deliverables-box {
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 20px;
    flex-grow: 1;
  }

  .deliverables-title {
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--ctp-subtext1);
    margin-bottom: 10px;
  }

  .deliverables-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .deliverables-list li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 0.85rem;
    color: var(--ctp-text);
    line-height: 1.4;
  }

  :global(.check-icon) {
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 2px;
  }

  .card-footer {
    margin-top: auto;
  }

  .ideal-for {
    font-size: 0.82rem;
    color: var(--ctp-subtext0);
    margin-bottom: 18px;
    border-top: 1px dashed var(--ctp-surface0);
    padding-top: 12px;
  }

  .ideal-for strong {
    color: var(--ctp-text);
    display: block;
    margin-bottom: 2px;
  }

  .ideal-for p {
    margin: 0;
    line-height: 1.4;
  }

  .service-cta-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 11px 16px;
    border-radius: 8px;
    background: var(--accent-surface);
    color: var(--accent);
    border: 1px solid var(--accent-subtle);
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .service-cta-btn:hover {
    background: var(--accent);
    color: var(--ctp-base, #1e1e2e);
    border-color: var(--accent);
  }

  .assurance-banner {
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 12px;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .assurance-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: var(--accent-surface);
    color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .assurance-text {
    flex: 1;
    min-width: 260px;
  }

  .assurance-text h4 {
    font-size: 0.98rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin: 0 0 4px;
  }

  .assurance-text p {
    font-size: 0.85rem;
    color: var(--ctp-subtext0);
    margin: 0;
    line-height: 1.45;
  }

  .direct-inquiry-link {
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--accent);
    text-decoration: none;
    white-space: nowrap;
    transition: opacity 0.2s;
  }

  .direct-inquiry-link:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 1.6rem;
    }
    .assurance-banner {
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;
    }
  }
</style>
