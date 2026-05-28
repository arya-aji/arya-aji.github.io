<script lang="ts">
  import { Send, AlertCircle, Loader2 } from "lucide-svelte";
  import { language } from "$lib/stores/language";
  import { PUBLIC_WEB3FORMS_KEY } from '$env/static/public';
  import { goto } from '$app/navigation';

  let name = $state("");
  let email = $state("");
  let projectType = $state("landing-page");
  let budget = $state("15m");
  let message = $state("");

  let loading = $state(false);
  let errorMsg = $state("");

  const budgets = [
    { value: "under-15m", label: "< Rp 15M" },
    { value: "15m", label: "Rp 15M - 30M" },
    { value: "30m-50m", label: "Rp 30M - 50M" },
    { value: "50m+", label: "Rp 50M+" }
  ];

  let projectTypes = $derived([
    { value: "landing-page", label: $language === 'EN' ? "Premium Landing Page" : "Landing Page Premium" },
    { value: "web-app", label: $language === 'EN' ? "Custom Web Application" : "Aplikasi Web Kustom" },
    { value: "automation", label: $language === 'EN' ? "Enterprise & Workflow Automation" : "Otomasi Enterprise & Alur Kerja" },
    { value: "maintenance", label: $language === 'EN' ? "Application Maintenance" : "Pemeliharaan Aplikasi" },
    { value: "other", label: $language === 'EN' ? "Other Business Inquiry" : "Pertanyaan Bisnis Lainnya" }
  ]);

  async function handleSubmit(event: Event) {
    event.preventDefault();
    if (!name || !email || !message) {
      errorMsg = $language === 'EN'
        ? "Please fill in all required fields."
        : "Harap lengkapi semua kolom yang wajib diisi.";
      return;
    }

    loading = true;
    errorMsg = "";

    try {
      const formData = new FormData();
      formData.append("access_key", PUBLIC_WEB3FORMS_KEY);
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
        goto('/thank-you');
      } else {
        throw new Error(data.message || ($language === 'EN' ? "Failed to send message." : "Gagal mengirim pesan."));
      }
    } catch (err: any) {
      errorMsg = err.message || ($language === 'EN'
        ? "A system error occurred. Please try again or contact via WhatsApp."
        : "Terjadi kesalahan sistem. Silakan coba lagi atau hubungi via WhatsApp.");
    } finally {
      loading = false;
    }
  }
</script>

<div class="contact-form-container">
  <form onsubmit={handleSubmit} class="contact-form">
      {#if errorMsg}
        <div class="error-banner">
          <AlertCircle size={18} />
          <span>{errorMsg}</span>
        </div>
      {/if}

      <div class="form-row">
        <div class="form-group">
          <label for="form-name">{$language === 'EN' ? 'Full Name' : 'Nama Lengkap'} <span class="required">*</span></label>
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
          <label for="form-email">{$language === 'EN' ? 'Email Address' : 'Alamat Email'} <span class="required">*</span></label>
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
        <label for="form-type">{$language === 'EN' ? 'Service Category' : 'Kategori Layanan'}</label>
        <select id="form-type" bind:value={projectType} disabled={loading}>
          {#each projectTypes as type}
            <option value={type.value}>{type.label}</option>
          {/each}
        </select>
      </div>

      <div class="form-group">
        <label>{$language === 'EN' ? 'Project Budget Estimate' : 'Estimasi Budget Proyek'}</label>
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
        <label for="form-message">{$language === 'EN' ? 'Brief Project Description' : 'Deskripsi Brief Singkat Proyek'} <span class="required">*</span></label>
        <textarea
          id="form-message"
          bind:value={message}
          rows="5"
          placeholder={$language === 'EN'
            ? "Briefly describe the main features, target audience, and project deadline..."
            : "Jelaskan secara singkat fitur utama, target audiens, dan deadline proyek Anda..."}
          required
          disabled={loading}
        ></textarea>
      </div>

      <button type="submit" class="btn primary submit-btn" disabled={loading}>
        {#if loading}
          <Loader2 size={17} class="spinner-icon" />
          <span>{$language === 'EN' ? 'Sending...' : 'Mengirim...'}</span>
        {:else}
          <Send size={17} />
          <span>{$language === 'EN' ? 'Send Project Inquiry' : 'Kirim Penawaran Proyek'}</span>
        {/if}
      </button>
    </form>
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
