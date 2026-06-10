<script lang="ts">
  import { language } from "$lib/stores/language";
  const EN = "EN";
</script>

<svelte:head>
  <title>{$language === EN ? "Terms of Service" : "Syarat & Ketentuan"} | Arya Aji Kusuma</title>
  <meta name="description" content={$language === EN
    ? "Terms of Service for platforms and services operated under aryaaji.com."
    : "Syarat dan Ketentuan untuk platform dan layanan yang dioperasikan di bawah aryaaji.com."} />
</svelte:head>

<main class="legal-page container pt-32 pb-32">
  <div class="legal-header">
    <h1>{$language === EN ? "Terms of Service" : "Syarat & Ketentuan"}</h1>
    <p class="updated">
      {$language === EN ? "Last Updated: May 28, 2026" : "Terakhir Diperbarui: 28 Mei 2026"}
    </p>
  </div>

  <div class="legal-content">
    {#if $language === EN}
      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>aryaaji.com</strong>. These Terms of Service govern your use of our website, our SaaS services (including but not limited to the Tryout platform at <code>tryout.aryaaji.com</code>), and all other digital services provided by us.
        </p>
        <p>
          By accessing this site or using our services, you are deemed to have read, understood, and agreed to be bound by the entirety of these Terms of Service. If you do not agree with any part of these terms, please immediately cease using our services.
        </p>
      </section>

      <section>
        <h2>2. Definitions</h2>
        <ul>
          <li><strong>"Services"</strong> refers to the SaaS products, tryout simulation platforms, course materials, software, and digital consulting services provided under the <code>aryaaji.com</code> domain and its subdomains.</li>
          <li><strong>"User"</strong> or <strong>"You"</strong> refers to any individual, institution, or legal entity that accesses, registers, or makes a purchase on our Services.</li>
          <li><strong>"We"</strong> refers to the owner and operator of the <code>aryaaji.com</code> platform (Arya Aji Kusuma).</li>
        </ul>
      </section>

      <section>
        <h2>3. Account Registration & Security</h2>
        <p>
          To use certain features of our Services (such as tracking tryout history or making credit purchases), you are required to create an account via third-party authentication (Google OAuth) or email registration.
        </p>
        <p>
          You are solely responsible for maintaining the confidentiality of your account information and password, as well as any activity that occurs under your account. You agree to immediately notify us of any unauthorized use of your account or any other security breach.
        </p>
      </section>

      <section>
        <h2>4. Tryout Services & Credit Purchases</h2>
        <p>
          Some of our Services provide credit-based access to unlock Tryout packages (such as SIMAK UI Postgraduate).
        </p>
        <ul>
          <li>Credit purchases are made through our official payment gateway provider (Midtrans).</li>
          <li>Package prices are transparently listed in Indonesian Rupiah (IDR) on the purchase page before you complete a transaction.</li>
          <li>Purchased credits will be immediately credited to your account balance after payment is confirmed by the payment gateway.</li>
        </ul>
      </section>

      <section>
        <h2>5. Usage Restrictions</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Copy, redistribute, reverse-engineer, or exploit our tryout question content or platform source code for commercial or third-party purposes without our written permission.</li>
          <li>Use bots, crawlers, scrapers, or other automated tools to illegally access the platform.</li>
          <li>Perform any action that disrupts the stability of our server infrastructure.</li>
        </ul>
      </section>

      <section>
        <h2>6. Intellectual Property Rights</h2>
        <p>
          All designs, text, graphics, logos, originally created question banks, and program source code on this website are protected by copyright and intellectual property laws applicable in the Republic of Indonesia. Ownership remains with us.
        </p>
      </section>

      <section>
        <h2>7. Changes to Terms & Conditions</h2>
        <p>
          We reserve the right to modify, add to, or remove parts of these Terms of Service at any time without prior notice. Changes will take effect immediately upon publication on this page. You are encouraged to review this page periodically for the latest updates.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>If you have questions regarding these Terms of Service, please contact us at:</p>
        <p>
          Email: <a href="mailto:hello@aryaaji.com">hello@aryaaji.com</a><br />
          WhatsApp: +62 819 9888 4422
        </p>
      </section>

    {:else}
      <section>
        <h2>1. Pendahuluan</h2>
        <p>
          Selamat datang di <strong>aryaaji.com</strong>. Syarat dan Ketentuan ini mengatur penggunaan situs web kami, layanan SaaS kami (termasuk namun tidak terbatas pada platform Tryout di <code>tryout.aryaaji.com</code>), dan semua layanan digital lainnya yang disediakan oleh kami.
        </p>
        <p>
          Dengan mengakses situs ini atau menggunakan layanan kami, Anda dianggap telah membaca, memahami, dan menyetujui untuk terikat dengan seluruh isi Syarat dan Ketentuan ini. Jika Anda tidak menyetujui bagian apa pun dari syarat ini, harap segera menghentikan penggunaan layanan kami.
        </p>
      </section>

      <section>
        <h2>2. Definisi</h2>
        <ul>
          <li><strong>"Layanan"</strong> merujuk pada produk SaaS, platform simulasi tryout, konten materi, software, dan layanan konsultasi digital yang disediakan di bawah domain <code>aryaaji.com</code> dan subdomain terkaitnya.</li>
          <li><strong>"Pengguna"</strong> atau <strong>"Anda"</strong> merujuk pada individu, lembaga, atau badan hukum yang mengakses, mendaftar, atau melakukan pembelian pada Layanan kami.</li>
          <li><strong>"Kami"</strong> merujuk pada pemilik dan pengelola platform <code>aryaaji.com</code> (Arya Aji Kusuma).</li>
        </ul>
      </section>

      <section>
        <h2>3. Registrasi Akun & Keamanan</h2>
        <p>
          Untuk menggunakan fitur tertentu pada Layanan kami (seperti melacak riwayat tryout atau melakukan pembelian kredit), Anda diharuskan membuat akun melalui mekanisme otentikasi pihak ketiga (Google OAuth) atau pendaftaran email.
        </p>
        <p>
          Anda bertanggung jawab penuh untuk menjaga kerahasiaan informasi akun dan password Anda, serta aktivitas apa pun yang terjadi di bawah akun Anda. Anda setuju untuk segera memberitahukan kami jika ada penggunaan akun tanpa izin atau pelanggaran keamanan lainnya.
        </p>
      </section>

      <section>
        <h2>4. Layanan Tryout & Pembelian Kredit</h2>
        <p>
          Beberapa Layanan kami menyediakan akses berbasis kredit untuk membuka paket Tryout (seperti SIMAK UI Pascasarjana).
        </p>
        <ul>
          <li>Pembelian kredit dilakukan melalui penyedia gateway pembayaran resmi kami (Midtrans).</li>
          <li>Harga paket tercantum secara transparan dalam mata uang Rupiah (IDR) pada halaman pembelian sebelum Anda menyelesaikan transaksi.</li>
          <li>Kredit yang telah dibeli akan langsung masuk ke saldo akun Anda setelah pembayaran dikonfirmasi oleh gateway pembayaran.</li>
        </ul>
      </section>

      <section>
        <h2>5. Pembatasan Penggunaan</h2>
        <p>Anda setuju untuk tidak:</p>
        <ul>
          <li>Menyalin, mendistribusikan ulang, membongkar (reverse engineering), atau mengeksploitasi konten soal tryout maupun kode sumber platform kami untuk tujuan komersial atau pihak ketiga tanpa izin tertulis dari kami.</li>
          <li>Menggunakan bot, crawler, scraper, atau perangkat otomatis lainnya untuk mengakses platform secara ilegal.</li>
          <li>Melakukan tindakan apa pun yang mengganggu stabilitas infrastruktur server kami.</li>
        </ul>
      </section>

      <section>
        <h2>6. Hak Kekayaan Intelektual</h2>
        <p>
          Seluruh desain, teks, grafis, logo, bank soal yang dibuat secara orisinil, serta kode sumber program pada situs web ini dilindungi oleh hak cipta dan undang-undang hak kekayaan intelektual yang berlaku di Republik Indonesia. Hak milik tetap berada di tangan kami.
        </p>
      </section>

      <section>
        <h2>7. Perubahan Syarat & Ketentuan</h2>
        <p>
          Kami berhak untuk mengubah, memodifikasi, menambah, atau menghapus bagian dari Syarat dan Ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Perubahan akan berlaku segera setelah dipublikasikan di halaman ini. Anda dianjurkan untuk memeriksa halaman ini secara berkala untuk mengetahui pembaruan terbaru.
        </p>
      </section>

      <section>
        <h2>8. Hubungi Kami</h2>
        <p>Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini, silakan hubungi kami di:</p>
        <p>
          Email: <a href="mailto:hello@aryaaji.com">hello@aryaaji.com</a><br />
          WhatsApp: +62 819 9888 4422
        </p>
      </section>
    {/if}
  </div>
</main>


<style>
  .legal-page {
    max-width: 800px;
    margin: 0 auto;
    min-height: calc(100vh - 64px);
    padding-top: 120px;
    padding-bottom: 80px;
  }

  .legal-header {
    border-bottom: 1px solid var(--ctp-surface0);
    padding-bottom: 24px;
    margin-bottom: 40px;
  }

  .legal-header h1 {
    font-size: 2.8rem;
    font-weight: 800;
    color: var(--ctp-text);
    margin-bottom: 8px;
  }

  .updated {
    font-size: 0.9rem;
    color: var(--ctp-subtext0);
    font-family: 'JetBrains Mono', monospace;
  }

  .legal-content {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .legal-content section h2 {
    font-size: 1.4rem;
    color: var(--ctp-text);
    margin-bottom: 12px;
    font-weight: 700;
  }

  .legal-content section p,
  .legal-content section ul li {
    color: var(--ctp-subtext0);
    line-height: 1.8;
    font-size: 1.05rem;
    margin-bottom: 12px;
  }

  .legal-content section ul {
    margin-left: 20px;
    margin-bottom: 16px;
  }

  .legal-content section ul li {
    margin-bottom: 8px;
  }

  .legal-content a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
  }

  .legal-content a:hover {
    text-decoration: underline;
  }

  code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    background: var(--ctp-surface0);
    color: var(--accent);
    padding: 2px 6px;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    .legal-page {
      padding-top: 100px;
      padding-bottom: 48px;
    }
    .legal-header h1 {
      font-size: 2.2rem;
    }
  }
</style>
