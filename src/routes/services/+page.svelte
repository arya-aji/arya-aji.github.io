<script lang="ts">
  import {
    BarChart3,
    Bot,
    CheckCircle2,
    CreditCard,
    DatabaseZap,
    ExternalLink,
    Mail,
    MessageCircle,
    MonitorCog,
    ShieldCheck,
    Sparkles,
    Wrench,
    X,
  } from "lucide-svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  const services = [
    {
      icon: Sparkles,
      title: "Landing page development",
      label: "Landing page",
      description:
        "Fast, focused pages for promotions, business profiles, product launches, or campaign funnels that need a clear message and polished delivery.",
    },
    {
      icon: MonitorCog,
      title: "Web application development",
      label: "Web app",
      description:
        "Custom web apps for internal workflows, dashboards, data input, business operations, and lightweight tools built around your process.",
    },
    {
      icon: Wrench,
      title: "Maintenance ERPNext",
      label: "ERPNext care",
      description:
        "Technical support, light configuration, troubleshooting, and ongoing care for ERPNext setups that need practical maintenance.",
    },
    {
      icon: Bot,
      title: "Data automation and scripting",
      label: "Automation",
      description:
        "Scripts that clean data, reduce repetitive work, pull information from sources, and make recurring workflows faster.",
    },
    {
      icon: BarChart3,
      title: "Dashboard and statistical data processing",
      label: "Data dashboard",
      description:
        "Statistical data processing, visualization, and dashboards that help teams read trends, indicators, and operational signals.",
    },
    {
      icon: CreditCard,
      title: "Payment gateway integration",
      label: "Payment integration",
      description:
        "Payment integration for landing pages or web apps, adjusted to your checkout flow, business rules, and preferred provider.",
    },
  ];

  const pricing = [
    {
      title: "Landing page",
      price: "Starts from Rp1.500.000",
      detail: "Best for business profiles, services, products, or simple campaigns.",
    },
    {
      title: "Simple web app",
      price: "Starts from Rp3.000.000",
      detail: "For small custom apps with a clear core feature set.",
    },
    {
      title: "Application maintenance",
      price: "Starts from Rp1.500.000/month",
      detail: "Routine care, minor updates, monitoring, and troubleshooting.",
    },
    {
      title: "Custom automation",
      price: "Starts from Rp750.000",
      detail: "Data scripts, workflow automation, or small internal tools.",
    },
  ];

  const terms = [
    "The project scope is defined from the brief, feature requirements, and agreed deliverables before work begins.",
    "Pricing may change when new features, integrations, pages, or revisions are added outside the original scope.",
    "Each project includes 2 minor revision rounds for copy, small layout adjustments, colors, or UI details within scope.",
    "Payment starts with a 50% down payment before work begins, with the final payment due before handover or final deployment.",
    "Timeline depends on project complexity, client-provided materials, access availability, and feedback speed.",
    "Cancellation after work has started may be charged based on the progress already completed.",
    "Refunds are reviewed based on project progress and the agreed scope. Refunds do not apply to completed, delivered, deployed, or already-used work.",
    "All services are digital or custom project work. No physical product shipping or product return applies.",
    "Clients are responsible for providing required materials, access, content, assets, and feedback on time.",
  ];

  const policies = [
    {
      title: "Order process",
      text: "Clients can request a quote by email or WhatsApp. I will review the brief, confirm the scope, share the estimate, and start after the agreed down payment.",
    },
    {
      title: "Refund and return policy",
      text: "These services are digital or custom project work. There is no physical product delivery or product return. Refunds are handled based on project progress and the agreed scope.",
    },
    {
      title: "Payment flow",
      text: "Payments are made in Indonesian Rupiah. If online payment is enabled, the payment page will remain part of this website flow and will not redirect buyers to another business website.",
    },
  ];

  let termsModalOpen = $state(false);

  function closeTermsModal() {
    termsModalOpen = false;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && termsModalOpen) closeTermsModal();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
  <title>Services | Arya Aji Kusuma</title>
  <meta
    name="description"
    content="Services for landing page development, web apps, ERPNext maintenance, data automation, statistical dashboards, and payment gateway integration. Built by Aji."
  />
</svelte:head>

<Navbar />

<main class="services-page">
  <section class="hero-section">
    <div class="container hero-grid">
      <div class="hero-copy">
        <span class="eyebrow">Services</span>
        <h1>Build web apps, automation, and dashboards that are ready to use.</h1>
        <p>
          Development services for landing pages, web applications, ERPNext,
          data automation, statistical dashboards, and payment integration.
          Practical delivery, clear scope, and business-ready output.
        </p>
        <div class="hero-actions">
          <a href="mailto:hello@aryaaji.com" class="btn primary">
            <Mail size={17} />
            Request a quote
          </a>
          <a
            href="https://wa.me/6281998884422"
            target="_blank"
            rel="noopener noreferrer"
            class="btn secondary"
          >
            <MessageCircle size={17} />
            Order via WhatsApp
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

  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-kicker">What I can help with</span>
        <h2>Services</h2>
      </div>

      <div class="service-grid">
        {#each services as service}
          {@const Icon = service.icon}
          <article class="service-card">
            <div class="service-icon">
              <Icon size={21} />
            </div>
            <div class="service-content">
              <span>{service.label}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="section alt-section">
    <div class="container">
      <div class="section-header">
        <span class="section-kicker">Pricing</span>
        <h2>Starting estimates</h2>
      </div>

      <div class="pricing-grid">
        {#each pricing as item}
          <article class="price-card">
            <h3>{item.title}</h3>
            <p class="price">{item.price}</p>
            <p>{item.detail}</p>
          </article>
        {/each}
      </div>

      <p class="price-note">
        Final pricing depends on scope, feature complexity, third-party
        integrations, and deployment requirements. All transaction values are
        listed and charged in Indonesian Rupiah.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header compact-header">
        <span class="section-kicker">Order and policies</span>
        <h2>Clear buying flow and service policies.</h2>
      </div>

      <div class="policy-grid">
        {#each policies as policy}
          <article class="policy-card">
            <h3>{policy.title}</h3>
            <p>{policy.text}</p>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="terms-summary">
        <div>
          <span class="section-kicker">Terms of Service</span>
          <h2>Simple, clear working terms.</h2>
          <p>
            Projects start with agreed scope, 2 minor revision rounds, 50% down
            payment, and final payment before handover or deployment.
          </p>
        </div>
        <button
          class="btn secondary terms-trigger"
          type="button"
          onclick={() => (termsModalOpen = true)}
        >
          View full terms
        </button>
      </div>
    </div>
  </section>

  {#if termsModalOpen}
    <button
      class="modal-backdrop"
      type="button"
      aria-label="Close terms modal"
      onclick={closeTermsModal}
    ></button>

    <div
      class="terms-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
    >
      <div class="modal-header">
        <div>
          <span class="section-kicker">Terms of Service</span>
          <h2 id="terms-modal-title">Project terms</h2>
        </div>
        <button
          class="modal-close"
          type="button"
          aria-label="Close terms modal"
          onclick={closeTermsModal}
        >
          <X size={20} />
        </button>
      </div>

      <div class="terms-list">
        {#each terms as term}
          <div class="term-item">
            <CheckCircle2 size={18} color="var(--accent)" />
            <p>{term}</p>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <section class="section contact-section">
    <div class="container contact-wrap">
      <div>
        <span class="section-kicker">Business contact</span>
        <h2>Ready to discuss a project?</h2>
        <p>
          To place an order, send a short brief, key requirements, timeline,
          and references if you have them. I can help shape the scope so the
          estimate is clearer.
        </p>
      </div>
      <div class="contact-actions">
        <a href="mailto:hello@aryaaji.com" class="btn primary">
          <Mail size={17} />
          Request a quote
        </a>
        <a
          href="https://wa.me/6281998884422"
          target="_blank"
          rel="noopener noreferrer"
          class="btn secondary"
        >
          <ExternalLink size={17} />
          Order via WhatsApp
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

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  .hero-copy h1 {
    max-width: 760px;
    font-size: 3rem;
    line-height: 1.1;
    color: var(--ctp-text);
    margin-bottom: 20px;
  }

  .hero-copy p,
  .contact-wrap p,
  .price-note {
    color: var(--ctp-subtext1);
    line-height: 1.8;
    font-size: 1rem;
  }

  .hero-actions,
  .contact-actions {
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
    opacity: 1;
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
    opacity: 1;
  }

  .section {
    padding: 64px 0;
  }

  .alt-section {
    background: color-mix(in srgb, var(--ctp-mantle) 70%, transparent);
    border-block: 1px solid var(--ctp-surface0);
  }

  .section-header {
    margin-bottom: 28px;
  }

  .compact-header {
    max-width: 680px;
  }

  .section-header h2,
  .contact-wrap h2 {
    color: var(--ctp-text);
    font-size: 2rem;
    line-height: 1.2;
  }

  .service-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .service-card,
  .price-card {
    border: 1px solid var(--ctp-surface1);
    border-radius: 8px;
    background: var(--ctp-base);
  }

  .service-card {
    display: flex;
    gap: 16px;
    padding: 20px;
  }

  .service-icon {
    width: 42px;
    height: 42px;
    border-radius: 8px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 12%, transparent);
  }

  .service-content span {
    display: block;
    color: var(--accent);
    font-size: 0.78rem;
    font-family: "JetBrains Mono", "Fira Code", monospace;
    margin-bottom: 8px;
  }

  .service-content h3,
  .price-card h3 {
    color: var(--ctp-text);
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 10px;
  }

  .service-content p,
  .price-card p,
  .term-item p {
    color: var(--ctp-subtext1);
    line-height: 1.7;
    font-size: 0.92rem;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 16px;
  }

  .price-card {
    padding: 20px;
  }

  .price-card .price {
    color: var(--accent);
    font-weight: 700;
    font-size: 1.05rem;
    line-height: 1.45;
    margin-bottom: 12px;
  }

  .price-note {
    margin-top: 18px;
    font-size: 0.9rem;
  }

  .policy-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .policy-card {
    padding: 20px;
    border: 1px solid var(--ctp-surface1);
    border-radius: 8px;
    background: var(--ctp-base);
  }

  .policy-card h3 {
    color: var(--ctp-text);
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 10px;
  }

  .policy-card p {
    color: var(--ctp-subtext1);
    line-height: 1.7;
    font-size: 0.92rem;
  }

  .terms-summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
    padding: 24px;
    border: 1px solid var(--ctp-surface1);
    border-radius: 8px;
    background: var(--ctp-base);
  }

  .terms-summary h2,
  .modal-header h2 {
    color: var(--ctp-text);
    font-size: 1.45rem;
    line-height: 1.25;
    margin-bottom: 12px;
  }

  .terms-summary p {
    max-width: 680px;
    color: var(--ctp-subtext1);
    line-height: 1.75;
    font-size: 0.95rem;
  }

  .terms-trigger {
    flex-shrink: 0;
    margin-top: 0;
  }

  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 299;
    border: 0;
    padding: 0;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .terms-modal {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 300;
    width: min(720px, calc(100vw - 32px));
    max-height: min(760px, calc(100dvh - 48px));
    overflow-y: auto;
    transform: translate(-50%, -50%);
    padding: 24px;
    border: 1px solid var(--ctp-surface1);
    border-radius: 8px;
    background: var(--ctp-mantle);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
  }

  .modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 18px;
  }

  .modal-close {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border: 1px solid var(--ctp-surface1);
    border-radius: 8px;
    color: var(--ctp-text);
    background: var(--ctp-surface0);
    cursor: pointer;
    flex-shrink: 0;
  }

  .modal-close:hover {
    color: var(--accent);
    border-color: var(--accent);
  }

  .terms-list {
    display: grid;
    gap: 12px;
  }

  .term-item {
    display: grid;
    grid-template-columns: 20px minmax(0, 1fr);
    gap: 12px;
    padding: 16px;
    border: 1px solid var(--ctp-surface1);
    border-radius: 8px;
    background: var(--ctp-base);
  }

  .contact-section {
    padding-top: 20px;
  }

  .contact-wrap {
    border-top: 1px solid var(--ctp-surface0);
    padding-top: 48px;
  }

  .contact-wrap > div:first-child {
    max-width: 680px;
  }

  .contact-wrap p {
    margin-top: 14px;
  }

  .signature {
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

    .service-grid,
    .pricing-grid,
    .policy-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
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

    .section {
      padding: 48px 0;
    }

    .section-header h2,
    .contact-wrap h2 {
      font-size: 1.55rem;
    }

    .service-grid,
    .pricing-grid,
    .policy-grid {
      grid-template-columns: 1fr;
    }

    .service-card {
      padding: 18px;
    }

    .btn {
      width: 100%;
    }

    .terms-summary {
      align-items: stretch;
      flex-direction: column;
      padding: 20px;
    }

    .terms-trigger {
      width: 100%;
    }

    .terms-modal {
      width: calc(100vw - 24px);
      max-height: calc(100dvh - 24px);
      padding: 18px;
    }
  }
</style>
