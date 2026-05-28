<script lang="ts">
  import {
    CheckCircle2,
    DatabaseZap,
    Mail,
    MessageCircle,
    ShieldCheck,
    ChevronDown,
    ChevronUp
  } from "lucide-svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { language } from "$lib/stores/language";

  // State toggles
  let selectedCurrency = $state<"USD" | "IDR">("IDR");
  let expandedCards = $state<Record<number, boolean>>({});

  const pricing = $derived([
    {
      id: 1,
      title: $language === 'EN' ? "Premium Landing Page" : "Landing Page Premium",
      priceUSD: "$899",
      priceIDR: "Rp 16.000.000",
      detail: $language === 'EN'
        ? "Custom designed to maximize conversions, build credibility, and generate leads."
        : "Dirancang khusus untuk memaksimalkan konversi, membangun kredibilitas, dan menghasilkan prospek.",
      features: $language === 'EN' ? [
        "Up to 3 custom-designed pages",
        "Fully responsive on all screen sizes",
        "On-page SEO basics integrated",
        "Lead capture forms & analytical setups"
      ] : [
        "Hingga 3 halaman desain kustom",
        "Responsif penuh di semua ukuran layar",
        "SEO on-page dasar terintegrasi",
        "Form lead capture & pengaturan analitik"
      ],
      terms: $language === 'EN' ? [
        "50% down payment upfront, 50% before final deployment.",
        "Includes 2 minor revision rounds within agreed scope.",
        "Refunds do not apply after design/custom coding begins.",
        "Delivery timeline is estimated at 5-10 business days."
      ] : [
        "50% uang muka di awal, 50% sebelum deployment final.",
        "Termasuk 2 putaran revisi minor dalam lingkup yang disepakati.",
        "Refund tidak berlaku setelah desain/koding kustom dimulai.",
        "Estimasi waktu pengerjaan 5-10 hari kerja."
      ],
      ctaText: $language === 'EN' ? "Get Started" : "Mulai Sekarang",
      ctaHref: "mailto:hello@aryaaji.com?subject=Premium%20Landing%20Page%20Inquiry"
    },
    {
      id: 2,
      title: $language === 'EN' ? "Custom Web Application" : "Aplikasi Web Kustom",
      priceUSD: "$2,999+",
      priceIDR: "Rp 50.000.000+",
      detail: $language === 'EN'
        ? "Tailored full stack applications built around your exact business process."
        : "Aplikasi full stack yang disesuaikan dengan proses bisnis Anda yang tepat.",
      features: $language === 'EN' ? [
        "End-to-end full stack web build",
        "Secure checkout & Midtrans gateways",
        "Integrations with external tools & APIs",
        "6 months of priority ongoing support"
      ] : [
        "Pembangunan web full stack end-to-end",
        "Checkout aman & gateway Midtrans",
        "Integrasi dengan alat & API eksternal",
        "6 bulan dukungan prioritas berkelanjutan"
      ],
      terms: $language === 'EN' ? [
        "50% down payment upfront, 50% before handover.",
        "Includes 2 minor revision rounds for UI & core workflows.",
        "Support runs for 6 months post-deployment.",
        "Refunds are reviewed based on completed milestones."
      ] : [
        "50% uang muka di awal, 50% sebelum serah terima.",
        "Termasuk 2 putaran revisi minor untuk UI & alur kerja inti.",
        "Dukungan berjalan selama 6 bulan pasca-deployment.",
        "Refund ditinjau berdasarkan milestone yang telah selesai."
      ],
      ctaText: $language === 'EN' ? "Request a Quote" : "Minta Penawaran",
      ctaHref: "https://wa.me/6281998884422?text=Hello%20Aji,%20I'm%20interested%20in%20building%20a%20Custom%20Web%20Application."
    }
  ]);

  function toggleCardExpand(id: number) {
    expandedCards[id] = !expandedCards[id];
  }
</script>

<svelte:head>
  <title>{$language === 'EN' ? 'Services & Pricing' : 'Layanan & Harga'} | Arya Aji Kusuma</title>
  <meta
    name="description"
    content="Professional development services with transparent starting estimates, dual-currency toggles, and clear terms."
  />
</svelte:head>

<Navbar />

<main class="services-page">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container hero-grid">
      <div class="hero-copy">
        <span class="eyebrow">{$language === 'EN' ? 'Pricing' : 'Harga'}</span>
        <h1>{$language === 'EN' ? 'Transparent rates for premium web builds.' : 'Tarif transparan untuk web premium.'}</h1>
        <p>
          {$language === 'EN'
            ? 'Simplified, direct estimates tailored for landing pages and custom web applications. Review features and integrated terms of service directly in each package card.'
            : 'Estimasi sederhana dan langsung yang disesuaikan untuk landing page dan aplikasi web kustom. Tinjau fitur dan syarat layanan terintegrasi langsung di setiap kartu paket.'}
        </p>
        <div class="hero-actions">
          <a href="/contact" class="btn primary">
            <Mail size={17} />
            {$language === 'EN' ? 'Go to Contact Form' : 'Ke Formulir Kontak'}
          </a>
          <a
            href="https://wa.me/6281998884422"
            target="_blank"
            rel="noopener noreferrer"
            class="btn secondary"
          >
            <MessageCircle size={17} />
            {$language === 'EN' ? 'Chat on WhatsApp' : 'Chat di WhatsApp'}
          </a>
        </div>
      </div>

      <div class="hero-panel" aria-label="Business contact summary">
        <div class="panel-topline">
          <ShieldCheck size={18} color="var(--accent)" />
          <span>Arya Aji</span>
        </div>
        <div class="contact-list">
          <a href="mailto:hello@aryaaji.com">
            <Mail size={17} />
            hello@aryaaji.com
          </a>
          <a
            href="https://wa.me/6281998884422"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={17} />
            +62 819 9888 4422
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Simplified Pricing Section with Toggle -->
  <section class="section alt-section" id="pricing">
    <div class="container">
      <div class="pricing-controls">
        <div class="section-header-compact">
          <span class="section-kicker">{$language === 'EN' ? 'Choose Currency' : 'Pilih Mata Uang'}</span>
          <h2>{$language === 'EN' ? 'Select your preferred billing currency:' : 'Pilih mata uang tagihan yang Anda inginkan:'}</h2>
        </div>
        
        <!-- Premium Slider Switch Toggle -->
        <div class="currency-toggle-wrapper">
          <button 
            type="button"
            class="currency-btn" 
            class:active={selectedCurrency === "USD"} 
            onclick={() => selectedCurrency = "USD"}
          >
            USD ($)
          </button>
          <button 
            type="button"
            class="currency-btn" 
            class:active={selectedCurrency === "IDR"} 
            onclick={() => selectedCurrency = "IDR"}
          >
            IDR (Rp)
          </button>
        </div>
      </div>

      <div class="pricing-grid">
        {#each pricing as item}
          {@const isExpanded = !!expandedCards[item.id]}
          <article class="price-card" class:expanded={isExpanded}>
            <div class="card-header">
              <h3>{item.title}</h3>
              <div class="price-display">
                {#if selectedCurrency === "USD"}
                  <span class="price-amount">{item.priceUSD} <span class="currency-tag">USD</span></span>
                {:else}
                  <span class="price-amount">{item.priceIDR} <span class="currency-tag">IDR</span></span>
                {/if}
              </div>
              <p class="detail">{item.detail}</p>
            </div>

            <!-- Features & Terms Expandable Toggle -->
            <button
              type="button"
              class="expand-toggle-btn"
              onclick={() => toggleCardExpand(item.id)}
            >
              <span>{isExpanded ? ($language === 'EN' ? 'Hide' : 'Sembunyikan') : ($language === 'EN' ? 'View' : 'Lihat')} {$language === 'EN' ? 'Features & Terms' : 'Fitur & Syarat'}</span>
              {#if isExpanded}
                <ChevronUp size={16} />
              {:else}
                <ChevronDown size={16} />
              {/if}
            </button>

            {#if isExpanded}
              <div class="expanded-content">
                <div class="features-section">
                  <h4>{$language === 'EN' ? "What's Included" : 'Yang Termasuk'}</h4>
                  <ul class="features-list">
                    {#each item.features as feature}
                      <li>
                        <CheckCircle2 size={15} class="feature-icon" />
                        <span>{feature}</span>
                      </li>
                    {/each}
                  </ul>
                </div>

                <div class="terms-section">
                  <h4>{$language === 'EN' ? 'Terms of Service' : 'Syarat Layanan'}</h4>
                  <ul class="terms-list">
                    {#each item.terms as term}
                      <li>
                        <span class="bullet">•</span>
                        <span>{term}</span>
                      </li>
                    {/each}
                  </ul>
                </div>
              </div>
            {/if}

            <a href={item.ctaHref} class="btn primary cta-btn">
              {item.ctaText}
            </a>
          </article>
        {/each}
      </div>

      <p class="price-note">
        {$language === 'EN'
          ? 'All transaction values are charged and processed in Indonesian Rupiah. USD pricing serves as a benchmark reference for global clients. Final rates align to detailed scopes.'
          : 'Semua nilai transaksi dikenakan biaya dan diproses dalam Rupiah Indonesia. Harga USD berfungsi sebagai referensi tolok ukur untuk klien global. Tarif final mengikuti lingkup detail.'}
      </p>
    </div>
  </section>

  <!-- Dedicated SaaS & Retail Section (Separated from Premium Agency Services) -->
  <section class="section saas-section" id="saas-pricing">
    <div class="container">
      <div class="saas-header">
        <span class="section-kicker">{$language === 'EN' ? 'Self-Serve SaaS Products' : 'Produk SaaS Mandiri'}</span>
        <h2>{$language === 'EN' ? 'My SaaS Products & Retail Packages' : 'Produk SaaS & Paket Retail Saya'}</h2>
        <p class="saas-intro">
          {$language === 'EN'
            ? 'Review digital credit bundles and starter plans for active web applications built and operated by me. Transactions are fully processed via secure local payment gateways.'
            : 'Tinjau paket kredit digital dan paket starter untuk aplikasi web aktif yang dibangun dan dioperasikan oleh saya. Transaksi sepenuhnya diproses melalui gateway pembayaran lokal yang aman.'}
        </p>
      </div>

      <div class="saas-card-wrapper">
        <div class="saas-card-header">
          <div class="saas-badge">{$language === 'EN' ? 'Active Product' : 'Produk Aktif'}</div>
          <h3>Siap Kuliah UI (SKUI) — Exam Simulator</h3>
          <p class="saas-desc">
            {$language === 'EN'
              ? 'A premium, mobile-first preparation platform for graduate (Pascasarjana) and undergraduate entry exams with dynamic timer simulators, answer analyses, and automatic question seeding.'
              : 'Platform persiapan mobile-first premium untuk ujian masuk pascasarjana dan sarjana dengan simulator timer dinamis, analisis jawaban, dan seeding soal otomatis.'}
          </p>
        </div>

        <div class="saas-bundle-grid">
          <div class="bundle-box">
            <span class="bundle-name">{$language === 'EN' ? 'Starter Pack' : 'Paket Starter'}</span>
            <div class="bundle-price">Rp 15.000</div>
            <p class="bundle-desc">{$language === 'EN' ? 'Learning credit access sufficient for completing <strong>3 full tryouts</strong> on the SKUI platform.' : 'Akses kredit belajar yang cukup untuk pengerjaan <strong>3 tryout lengkap</strong> di platform SKUI.'}</p>
          </div>

          <div class="bundle-box popular">
            <div class="popular-tag">{$language === 'EN' ? 'Most Popular' : 'Paling Populer'}</div>
            <span class="bundle-name">{$language === 'EN' ? 'Standard Pack' : 'Paket Standard'}</span>
            <div class="bundle-price">Rp 30.000</div>
            <p class="bundle-desc">{$language === 'EN' ? 'Learning credit access sufficient for completing <strong>12 full tryouts</strong> on the SKUI platform.' : 'Akses kredit belajar yang cukup untuk pengerjaan <strong>12 tryout lengkap</strong> di platform SKUI.'}</p>
          </div>

          <div class="bundle-box">
            <span class="bundle-name">{$language === 'EN' ? 'Pro Pack' : 'Paket Pro'}</span>
            <div class="bundle-price">Rp 50.000</div>
            <p class="bundle-desc">{$language === 'EN' ? 'Best-value learning credit access, sufficient for completing <strong>25 full tryouts</strong> on the SKUI platform.' : 'Akses kredit belajar terbaik dan paling hemat, cukup untuk pengerjaan <strong>25 tryout lengkap</strong> di platform SKUI.'}</p>
          </div>
        </div>

        <div class="saas-card-footer">
          <div class="saas-trust-badges">
            <span class="trust-badge">🛡️ {$language === 'EN' ? 'Secured by Midtrans' : 'Diamankan oleh Midtrans'}</span>
            <span class="trust-badge">⚡ {$language === 'EN' ? 'Instant Digital Delivery' : 'Pengiriman Digital Instan'}</span>
          </div>
          <a href="https://tryout.aryaaji.com" target="_blank" rel="noopener noreferrer" class="btn primary saas-cta-btn">
            {$language === 'EN' ? 'Buy Credits on SKUI App' : 'Beli Kredit di Aplikasi SKUI'}
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Conversion Promo CTA -->
  <section class="section contact-section" id="contact">
    <div class="container contact-wrap-simplified">
      <div class="contact-header-text">
        <span class="section-kicker">{$language === 'EN' ? 'Get in Touch' : 'Hubungi Kami'}</span>
        <h2>{$language === 'EN' ? 'Ready to build something amazing?' : 'Siap membangun sesuatu yang luar biasa?'}</h2>
        <p>
          {$language === 'EN'
            ? "Let's collaborate to bring your ideas to life. Submit your requirements securely via the direct intake form, or start a chat directly on WhatsApp."
            : 'Mari berkolaborasi untuk mewujudkan ide Anda. Kirimkan kebutuhan Anda dengan aman melalui formulir intake langsung, atau mulai chat langsung di WhatsApp.'}
        </p>
      </div>

      <div class="contact-actions-promo">
        <a href="/contact" class="btn primary contact-promo-btn">
          <Mail size={17} />
          {$language === 'EN' ? 'Go to Contact Form' : 'Ke Formulir Kontak'}
        </a>
        <a
          href="https://wa.me/6281998884422"
          target="_blank"
          rel="noopener noreferrer"
          class="btn secondary whatsapp-promo-btn"
        >
          <MessageCircle size={17} />
          {$language === 'EN' ? 'Chat on WhatsApp' : 'Chat di WhatsApp'}
        </a>
      </div>

      <div class="signature">
        <DatabaseZap size={16} color="var(--accent)" />
        <span>Built by Aji.</span>
      </div>
    </div>
  </section>
</main>

<Footer />

<style>
  .services-page {
    min-height: calc(100vh - 64px);
  }

  .container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .hero-section {
    padding: 72px 0 56px;
    border-bottom: 1px solid var(--ctp-surface0);
  }

  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 48px;
    align-items: center;
  }

  .hero-copy {
    max-width: 720px;
  }

  .eyebrow,
  .section-kicker {
    display: inline-flex;
    align-items: center;
    font-family: "JetBrains Mono", "Fira Code", monospace;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 12px;
  }

  h1, h2, h3, h4, p {
    margin: 0;
  }

  .hero-copy h1 {
    max-width: 760px;
    font-size: 3rem;
    line-height: 1.1;
    color: var(--ctp-text);
    margin-bottom: 20px;
  }

  .hero-copy p {
    color: var(--ctp-subtext1);
    line-height: 1.8;
    font-size: 1rem;
  }

  .hero-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 28px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 42px;
    padding: 10px 18px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid transparent;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    transition:
      border-color 0.2s ease,
      background 0.2s ease,
      color 0.2s ease;
  }

  .btn.primary {
    color: var(--ctp-base);
    background: var(--accent);
  }

  .btn.secondary {
    color: var(--ctp-text);
    background: var(--ctp-surface0);
    border-color: var(--ctp-surface1);
  }

  .btn:hover {
    border-color: var(--accent);
  }

  .hero-panel {
    border: 1px solid var(--ctp-surface1);
    border-radius: 8px;
    background: var(--ctp-mantle);
    padding: 22px;
  }

  .panel-topline {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--ctp-text);
    font-weight: 700;
    margin-bottom: 18px;
  }

  .contact-list {
    display: grid;
    gap: 10px;
  }

  .contact-list a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--ctp-subtext1);
    text-decoration: none;
    font-size: 0.9rem;
    word-break: break-word;
  }

  .contact-list a:hover {
    color: var(--accent);
  }

  .section {
    padding: 64px 0;
  }

  .alt-section {
    background: color-mix(in srgb, var(--ctp-mantle) 70%, transparent);
    border-block: 1px solid var(--ctp-surface0);
  }

  /* Pricing controls & Header */
  .pricing-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 40px;
    border-bottom: 1px solid var(--ctp-surface0);
    padding-bottom: 24px;
  }

  .section-header-compact h2 {
    color: var(--ctp-text);
    font-size: 1.6rem;
    line-height: 1.2;
  }

  /* Currency Switch Toggle */
  .currency-toggle-wrapper {
    display: flex;
    background: var(--ctp-crust);
    border: 1px solid var(--ctp-surface0);
    padding: 4px;
    border-radius: 10px;
  }

  .currency-btn {
    padding: 8px 16px;
    border-radius: 7px;
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--ctp-subtext1);
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: "JetBrains Mono", monospace;
    transition: all 0.2s ease;
  }

  .currency-btn.active {
    background: var(--accent);
    color: var(--ctp-base);
  }

  /* Pricing Cards layout */
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    max-width: 1000px;
    margin-inline: auto;
  }

  .price-card {
    display: flex;
    flex-direction: column;
    padding: 32px;
    border-radius: 16px;
    background: var(--ctp-base);
    border: 1px solid var(--ctp-surface0);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .price-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: var(--accent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .price-card:hover {
    border-color: color-mix(in srgb, var(--accent) 30%, var(--ctp-surface1));
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
  }

  .price-card:hover::before {
    opacity: 0.8;
  }

  .card-header h3 {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--ctp-text);
    margin-bottom: 12px;
  }

  .price-display {
    margin-bottom: 14px;
  }

  .price-amount {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--accent);
    letter-spacing: -0.01em;
  }

  .currency-tag {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--ctp-subtext1);
    font-family: "JetBrains Mono", monospace;
    margin-left: 4px;
  }

  .detail {
    color: var(--ctp-subtext0);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  /* Expand toggle */
  .expand-toggle-btn {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;
    padding: 12px 16px;
    border-radius: 8px;
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    color: var(--ctp-text);
    font-size: 0.88rem;
    font-weight: 600;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    transition: all 0.2s ease;
  }

  .expand-toggle-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  /* Expanded area styling */
  .expanded-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 24px;
    animation: slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .features-section h4,
  .terms-section h4 {
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--ctp-subtext1);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 12px;
    font-family: "JetBrains Mono", monospace;
  }

  .features-list,
  .terms-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .features-list li,
  .terms-list li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  :global(.features-list li .feature-icon) {
    color: var(--accent);
    flex-shrink: 0;
    margin-top: 3px;
  }

  .features-list li span,
  .terms-list li span {
    color: var(--ctp-subtext0);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .terms-list li .bullet {
    color: var(--accent);
    font-weight: bold;
    flex-shrink: 0;
  }

  .cta-btn {
    width: 100%;
    margin-top: auto;
  }

  .price-note {
    margin-top: 32px;
    font-size: 0.88rem;
    color: var(--ctp-subtext1);
    text-align: center;
    line-height: 1.6;
    max-width: 800px;
    margin-inline: auto;
  }

  /* Promo Section */
  .contact-section {
    padding-top: 20px;
  }

  .contact-wrap-simplified {
    border-top: 1px solid var(--ctp-surface0);
    padding-top: 48px;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 48px;
    align-items: center;
  }

  .contact-header-text p {
    margin-top: 14px;
    color: var(--ctp-subtext1);
    line-height: 1.8;
    font-size: 1.05rem;
  }

  .contact-actions-promo {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .contact-promo-btn {
    width: 100%;
  }

  .whatsapp-promo-btn {
    width: 100%;
    border-color: color-mix(in srgb, var(--accent) 30%, var(--ctp-surface1));
  }

  .whatsapp-promo-btn:hover {
    background: color-mix(in srgb, var(--accent) 8%, var(--ctp-base));
  }

  /* --- SaaS Section Styling --- */
  .saas-section {
    background: color-mix(in srgb, var(--ctp-crust) 60%, transparent);
    border-block: 1px solid var(--ctp-surface0);
  }

  .saas-header {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 40px;
  }

  .saas-header h2 {
    color: var(--ctp-text);
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 12px;
  }

  .saas-intro {
    color: var(--ctp-subtext1);
    font-size: 1rem;
    line-height: 1.7;
  }

  .saas-card-wrapper {
    background: var(--ctp-base);
    border: 1px solid var(--ctp-surface0);
    border-radius: 20px;
    padding: 40px;
    max-width: 1000px;
    margin: 0 auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .saas-card-header {
    margin-bottom: 32px;
    border-bottom: 1px solid var(--ctp-surface0);
    padding-bottom: 24px;
  }

  .saas-badge {
    display: inline-flex;
    padding: 4px 12px;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 12%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
    border-radius: 999px;
    margin-bottom: 12px;
    font-family: "JetBrains Mono", monospace;
  }

  .saas-card-header h3 {
    font-size: 1.5rem;
    color: var(--ctp-text);
    font-weight: 800;
    margin-bottom: 10px;
  }

  .saas-desc {
    color: var(--ctp-subtext0);
    font-size: 0.95rem;
    line-height: 1.6;
    max-width: 820px;
  }

  .saas-bundle-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 36px;
  }

  .bundle-box {
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 14px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    transition: all 0.25s ease;
  }

  .bundle-box:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  .bundle-box.popular {
    border-color: color-mix(in srgb, var(--accent) 45%, var(--ctp-surface1));
    background: color-mix(in srgb, var(--accent) 3%, var(--ctp-base));
  }

  .popular-tag {
    position: absolute;
    top: -12px;
    background: var(--accent);
    color: var(--ctp-base);
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    padding: 3px 10px;
    border-radius: 999px;
  }

  .bundle-name {
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--ctp-subtext1);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 12px;
    font-family: "JetBrains Mono", monospace;
  }

  .bundle-price {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--accent);
    margin-bottom: 12px;
  }

  .bundle-desc {
    color: var(--ctp-subtext0);
    font-size: 0.85rem;
    line-height: 1.5;
  }

  .saas-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    border-top: 1px solid var(--ctp-surface0);
    padding-top: 24px;
  }

  .saas-trust-badges {
    display: flex;
    gap: 16px;
  }

  .trust-badge {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--ctp-subtext1);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .saas-cta-btn {
    min-width: 220px;
  }

  @media (max-width: 768px) {
    .saas-bundle-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    
    .saas-card-footer {
      flex-direction: column;
      align-items: stretch;
      gap: 20px;
      text-align: center;
    }

    .saas-trust-badges {
      justify-content: center;
      flex-wrap: wrap;
    }

    .saas-cta-btn {
      width: 100%;
    }
  }

  .signature {
    grid-column: 1 / -1;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 26px;
    color: var(--ctp-subtext0);
    font-family: "JetBrains Mono", "Fira Code", monospace;
    font-size: 0.85rem;
  }

  @media (max-width: 960px) {
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 28px;
    }

    .hero-panel {
      max-width: 420px;
    }

    .pricing-grid {
      grid-template-columns: 1fr;
      max-width: 600px;
    }

    .contact-wrap-simplified {
      grid-template-columns: 1fr;
      gap: 36px;
    }
  }

  @media (max-width: 640px) {
    .container {
      padding: 0 18px;
    }

    .hero-section {
      padding: 48px 0 40px;
    }

    .hero-copy h1 {
      font-size: 2.2rem;
    }

    .pricing-controls {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    .currency-toggle-wrapper {
      width: 100%;
    }

    .currency-btn {
      flex: 1;
      text-align: center;
    }

    .section {
      padding: 48px 0;
    }

    .section-header-compact h2,
    .contact-wrap-simplified h2 {
      font-size: 1.55rem;
    }

    .btn {
      width: 100%;
    }
  }
</style>
