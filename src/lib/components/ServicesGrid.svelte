<script lang="ts">
  import { CheckCircle2, Clock, Sparkles, ArrowRight, ShieldCheck, Boxes, Cpu, LayoutDashboard } from "lucide-svelte";
  import { language } from "$lib/stores/language";
  import { serviceOfferings } from "$lib/data/services";
</script>

<section class="services-section section" id="services">
  <div class="container">
    <!-- Header -->
    <div class="section-header">
      <div class="badge-pill">
        <span>{$language === "EN" ? "What I Build" : "Layanan Spesialis"}</span>
      </div>
      <h2 class="section-title">
        {$language === "EN" ? "Fixed-Scope Sprints for Fast Results" : "Pengerjaan Cepat dengan Lingkup Jelas"}
      </h2>
      <p class="section-subtitle">
        {$language === "EN" 
          ? "No endless hourly drag. Clear deliverables, fast turnaround, and async milestone updates." 
          : "Tanpa biaya jam kerja membengkak. Hasil terukur, pengerjaan cepat, dan update milestone asinkron."}
      </p>
    </div>

    <!-- 3 Services Cards Grid -->
    <div class="services-grid">
      {#each serviceOfferings as service}
        <div class="service-card" style="--badge-color: {service.badgeColor};">
          <!-- Top Row: Badge & Turnaround -->
          <div class="card-header">
            <div class="service-badge" style="color: {service.badgeColor}; background: {service.badgeBg}; border-color: {service.badgeColor};">
              <span class="badge-dot" style="background: {service.badgeColor};"></span>
              <span>{service.badge}</span>
            </div>
            <div class="turnaround-pill">
              <Clock size={13} />
              <span>{$language === "EN" ? service.turnaround_en : service.turnaround_id}</span>
            </div>
          </div>

          <!-- Icon + Title -->
          <div class="card-title-row">
            <div class="service-icon-box" style="color: {service.badgeColor}; background: {service.badgeBg}; border-color: {service.badgeColor};">
              {#if service.icon === "Boxes"}
                <Boxes size={22} />
              {:else if service.icon === "Cpu"}
                <Cpu size={22} />
              {:else}
                <LayoutDashboard size={22} />
              {/if}
            </div>
            <h3 class="service-title">
              {$language === "EN" ? service.title_en : service.title_id}
            </h3>
          </div>

          <!-- Description -->
          <p class="service-desc">
            {$language === "EN" ? service.description_en : service.description_id}
          </p>

          <!-- Deliverables Checklist -->
          <div class="deliverables-container">
            <div class="deliverables-tag">
              {$language === "EN" ? "DELIVERABLES" : "YANG DIDAPATKAN"}
            </div>
            <ul class="deliverables-list">
              {#each ($language === "EN" ? service.deliverables_en : service.deliverables_id) as item}
                <li>
                  <CheckCircle2 size={16} class="check-icon" style="color: {service.badgeColor};" />
                  <span>{item}</span>
                </li>
              {/each}
            </ul>
          </div>

          <!-- Footer Action -->
          <div class="card-footer">
            <div class="ideal-for-text">
              <span class="ideal-label">{$language === "EN" ? "Best for:" : "Cocok untuk:"}</span>
              <span>{$language === "EN" ? service.idealFor_en : service.idealFor_id}</span>
            </div>

            <a 
              href="https://upwork.com/freelancers/aryaajik" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="service-cta-btn"
            >
              <span>{$language === "EN" ? "Hire on Upwork" : "Pesan via Upwork"}</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      {/each}
    </div>

    <!-- Assurance Banner -->
    <div class="assurance-banner">
      <div class="assurance-icon">
        <ShieldCheck size={24} />
      </div>
      <div class="assurance-text">
        <h4>{$language === "EN" ? "Protected via Upwork Escrow" : "Aman & Terjamin via Upwork Escrow"}</h4>
        <p>
          {$language === "EN"
            ? "Funds are only released once you test and approve each delivered milestone. Zero financial risk."
            : "Dana baru dilepaskan setelah Anda menguji dan menyetujui setiap deliverable. 100% bebas risiko."}
        </p>
      </div>
      <a 
        href="#contact" 
        class="direct-inquiry-link"
      >
        {$language === "EN" ? "Direct Inquiry" : "Tanya Langsung"} &rarr;
      </a>
    </div>
  </div>
</section>

<style>
  .services-section {
    padding: 80px 0;
    position: relative;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .section-header {
    text-align: center;
    max-width: 680px;
    margin: 0 auto 52px;
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
    font-size: 2.3rem;
    font-weight: 800;
    color: var(--ctp-text);
    margin: 0 0 14px;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  .section-subtitle {
    font-size: 1.05rem;
    color: var(--ctp-subtext0);
    line-height: 1.6;
    margin: 0;
  }

  /* Grid Layout */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 28px;
    margin-bottom: 40px;
  }

  /* Premium Glassmorphic Card */
  .service-card {
    background: color-mix(in srgb, var(--ctp-mantle) 70%, transparent);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid color-mix(in srgb, var(--ctp-surface0) 70%, transparent);
    border-radius: 20px;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), 
                border-color 0.28s ease, 
                box-shadow 0.28s ease;
  }

  .service-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--badge-color, var(--accent));
    opacity: 0.7;
    transition: opacity 0.28s ease;
  }

  .service-card:hover {
    transform: translateY(-5px);
    border-color: color-mix(in srgb, var(--badge-color) 60%, var(--ctp-surface0));
    box-shadow: 0 20px 40px -15px color-mix(in srgb, var(--badge-color) 18%, transparent);
  }

  .service-card:hover::before {
    opacity: 1;
  }

  /* Header inside Card */
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
    gap: 12px;
  }

  .service-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 4px 12px;
    border-radius: 999px;
    border: 1px solid;
  }

  .badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  .turnaround-pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8rem;
    color: var(--ctp-subtext0);
    font-weight: 600;
    font-family: 'JetBrains Mono', monospace;
    background: color-mix(in srgb, var(--ctp-crust) 60%, transparent);
    padding: 3px 10px;
    border-radius: 6px;
    border: 1px solid var(--ctp-surface0);
  }

  /* Title Row */
  .card-title-row {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 14px;
  }

  .service-icon-box {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid;
  }

  .service-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin: 0;
    line-height: 1.35;
  }

  .service-desc {
    font-size: 0.92rem;
    color: var(--ctp-subtext0);
    line-height: 1.6;
    margin: 0 0 24px;
  }

  /* Deliverables Box */
  .deliverables-container {
    background: color-mix(in srgb, var(--ctp-crust) 60%, transparent);
    border: 1px solid color-mix(in srgb, var(--ctp-surface0) 50%, transparent);
    border-radius: 14px;
    padding: 18px 20px;
    margin-bottom: 24px;
    flex-grow: 1;
  }

  .deliverables-tag {
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: var(--ctp-subtext1);
    margin-bottom: 12px;
  }

  .deliverables-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .deliverables-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.86rem;
    color: var(--ctp-text);
    line-height: 1.45;
  }

  :global(.check-icon) {
    flex-shrink: 0;
    margin-top: 1px;
  }

  /* Footer & Action */
  .card-footer {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .ideal-for-text {
    font-size: 0.82rem;
    color: var(--ctp-subtext0);
    line-height: 1.45;
    display: flex;
    gap: 6px;
    align-items: baseline;
  }

  .ideal-label {
    font-weight: 700;
    color: var(--ctp-subtext1);
    white-space: nowrap;
  }

  .service-cta-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 12px 18px;
    border-radius: 10px;
    background: var(--accent-surface);
    color: var(--accent);
    border: 1px solid var(--accent-subtle);
    font-size: 0.92rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.22s ease;
  }

  .service-cta-btn:hover {
    background: var(--accent);
    color: var(--ctp-base, #1e1e2e);
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px -6px var(--accent-subtle);
  }

  /* Assurance Banner */
  .assurance-banner {
    background: color-mix(in srgb, var(--ctp-mantle) 80%, transparent);
    border: 1px solid var(--ctp-surface0);
    border-radius: 16px;
    padding: 20px 28px;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .assurance-icon {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    background: color-mix(in srgb, #a6e3a1 15%, transparent);
    color: #a6e3a1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid color-mix(in srgb, #a6e3a1 30%, transparent);
  }

  .assurance-text {
    flex: 1;
    min-width: 260px;
  }

  .assurance-text h4 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin: 0 0 4px;
  }

  .assurance-text p {
    font-size: 0.86rem;
    color: var(--ctp-subtext0);
    margin: 0;
    line-height: 1.45;
  }

  .direct-inquiry-link {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--accent);
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.2s ease;
    padding: 8px 16px;
    border-radius: 8px;
    background: var(--accent-surface);
    border: 1px solid var(--accent-subtle);
  }

  .direct-inquiry-link:hover {
    background: var(--accent);
    color: var(--ctp-base, #1e1e2e);
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 1.75rem;
    }
    .services-grid {
      grid-template-columns: 1fr;
    }
    .service-card {
      padding: 24px 20px;
    }
    .assurance-banner {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      padding: 20px;
    }
    .direct-inquiry-link {
      width: 100%;
      text-align: center;
    }
  }
</style>
