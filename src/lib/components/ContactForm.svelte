<script lang="ts">
  import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-svelte";

  let name = $state("");
  let email = $state("");
  let projectType = $state("landing-page");
  let budget = $state("15m");
  let message = $state("");

  let loading = $state(false);
  let success = $state(false);
  let errorMsg = $state("");

  const budgets = [
    { value: "under-15m", label: "< Rp 15M" },
    { value: "15m", label: "Rp 15M - 30M" },
    { value: "30m-50m", label: "Rp 30M - 50M" },
    { value: "50m+", label: "Rp 50M+" }
  ];

  const projectTypes = [
    { value: "landing-page", label: "Premium Landing Page" },
    { value: "web-app", label: "Custom Web Application" },
    { value: "automation", label: "Enterprise & Workflow Automation" },
    { value: "maintenance", label: "Application Maintenance" },
    { value: "other", label: "Other Business Inquiry" }
  ];

  async function handleSubmit(event: Event) {
    event.preventDefault();
    if (!name || !email || !message) {
      errorMsg = "Harap lengkapi semua kolom yang wajib diisi.";
      return;
    }

    loading = true;
    errorMsg = "";

    try {
      // Menggunakan Web3Forms (layanan pengiriman form gratis langsung ke email Anda)
      // Akses key ini khusus dikonfigurasi untuk meneruskan form ke hello@aryaaji.com
      const formData = new FormData();
      formData.append("access_key", "c0627798-e7bc-49cb-ba6c-2f960f274a44"); // Anda dapat menggantinya dengan key Anda sendiri dari web3forms.com secara gratis
      formData.append("subject", `New Project Inquiry from ${name}`);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("project_type", projectType);
      formData.append("budget", budget);
      formData.append("message", message);
      formData.append("from_name", "Arya Aji Portfolio");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        success = true;
        name = "";
        email = "";
        message = "";
      } else {
        throw new Error(data.message || "Gagal mengirim pesan.");
      }
    } catch (err: any) {
      errorMsg = err.message || "Terjadi kesalahan sistem. Silakan coba lagi atau hubungi via WhatsApp.";
    } finally {
      loading = false;
    }
  }
</script>

<div class="contact-form-container">
  {#if success}
    <div class="success-card">
      <div class="success-icon">
        <CheckCircle2 size={40} />
      </div>
      <h3>Pesan Terkirim!</h3>
      <p>
        Terima kasih, <strong>{name || "rekan"}</strong>. Detail kebutuhan proyek Anda telah terkirim secara instan ke email saya di <strong>hello@aryaaji.com</strong>.
      </p>
      <p class="follow-up-note">
        Saya akan meninjau singkat brief Anda dan memberikan estimasi awal dalam waktu maksimal 24 jam.
      </p>
      <button class="btn secondary reset-btn" onclick={() => success = false} type="button">
        Kirim Pesan Lain
      </button>
    </div>
  {:else}
    <form onsubmit={handleSubmit} class="contact-form">
      {#if errorMsg}
        <div class="error-banner">
          <AlertCircle size={18} />
          <span>{errorMsg}</span>
        </div>
      {/if}

      <div class="form-row">
        <div class="form-group">
          <label for="form-name">Nama Lengkap <span class="required">*</span></label>
          <input 
            type="text" 
            id="form-name" 
            bind:value={name} 
            placeholder="Aji Kusuma" 
            required 
            disabled={loading}
          />
        </div>

        <div class="form-group">
          <label for="form-email">Alamat Email <span class="required">*</span></label>
          <input 
            type="email" 
            id="form-email" 
            bind:value={email} 
            placeholder="aji@company.com" 
            required 
            disabled={loading}
          />
        </div>
      </div>

      <div class="form-group">
        <label for="form-type">Kategori Layanan</label>
        <select id="form-type" bind:value={projectType} disabled={loading}>
          {#each projectTypes as type}
            <option value={type.value}>{type.label}</option>
          {/each}
        </select>
      </div>

      <div class="form-group">
        <label>Estimasi Budget Proyek</label>
        <div class="budget-swatches">
          {#each budgets as b}
            <button
              class="budget-swatch-btn"
              class:active={budget === b.value}
              onclick={() => budget = b.value}
              type="button"
              disabled={loading}
            >
              {b.label}
            </button>
          {/each}
        </div>
      </div>

      <div class="form-group">
        <label for="form-message">Deskripsi Brief Singkat Proyek <span class="required">*</span></label>
        <textarea 
          id="form-message" 
          bind:value={message} 
          rows="5" 
          placeholder="Jelaskan secara singkat fitur utama, target audiens, dan deadline proyek Anda..." 
          required 
          disabled={loading}
        ></textarea>
      </div>

      <button type="submit" class="btn primary submit-btn" disabled={loading}>
        {#if loading}
          <Loader2 size={17} class="spinner-icon" />
          <span>Mengirim...</span>
        {:else}
          <Send size={17} />
          <span>Kirim Penawaran Proyek</span>
        {/if}
      </button>
    </form>
  {/if}
</div>

<style>
  .contact-form-container {
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 16px;
    padding: 36px;
    max-width: 720px;
    margin: 0 auto;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
  }

  .success-card {
    text-align: center;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .success-icon {
    color: var(--ctp-green);
    background: color-mix(in srgb, var(--ctp-green) 12%, transparent);
    width: 72px;
    height: 72px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin-bottom: 8px;
  }

  .success-card h3 {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin: 0;
  }

  .success-card p {
    color: var(--ctp-subtext0);
    font-size: 1.05rem;
    line-height: 1.7;
    margin: 0;
    max-width: 500px;
  }

  .follow-up-note {
    font-size: 0.9rem !important;
    color: var(--ctp-overlay1) !important;
    background: var(--ctp-base);
    padding: 12px 18px;
    border-radius: 8px;
    border: 1px dashed var(--ctp-surface1);
  }

  .reset-btn {
    margin-top: 12px;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .error-banner {
    display: flex;
    align-items: center;
    gap: 10px;
    background: color-mix(in srgb, var(--ctp-red) 10%, transparent);
    border: 1px solid var(--ctp-red);
    color: var(--ctp-red);
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 0.9rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-group label {
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--ctp-text);
  }

  .required {
    color: var(--ctp-red);
  }

  input, select, textarea {
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid var(--ctp-surface1);
    background: var(--ctp-base);
    color: var(--ctp-text);
    font-family: inherit;
    font-size: 0.95rem;
    outline: none;
    transition: all 0.2s ease;
  }

  input:focus, select:focus, textarea:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent);
  }

  /* Budget Swatches */
  .budget-swatches {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }

  .budget-swatch-btn {
    padding: 10px 4px;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--ctp-subtext1);
    background: var(--ctp-base);
    border: 1px solid var(--ctp-surface1);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
  }

  .budget-swatch-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  .budget-swatch-btn.active {
    background: var(--accent);
    color: var(--ctp-base);
    border-color: var(--accent);
    box-shadow: 0 4px 12px color-mix(in srgb, var(--accent) 20%, transparent);
  }

  .submit-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 24px;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
  }

  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px color-mix(in srgb, var(--accent) 25%, transparent);
  }

  .submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  :global(.spinner-icon) {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (max-width: 640px) {
    .contact-form-container {
      padding: 24px 18px;
    }
    .form-row {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .budget-swatches {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
