<script lang="ts">
  import { language } from "$lib/stores/language";
  const EN = "EN";
</script>

<svelte:head>
  <title>{$language === EN ? "Privacy Policy" : "Kebijakan Privasi"} | Arya Aji Kusuma</title>
  <meta name="description" content={$language === EN
    ? "Privacy Policy for platforms and services operated under aryaaji.com."
    : "Kebijakan Privasi untuk platform dan layanan yang dioperasikan di bawah aryaaji.com."} />
</svelte:head>

<main class="legal-page container pt-32 pb-32">
  <div class="legal-header">
    <h1>{$language === EN ? "Privacy Policy" : "Kebijakan Privasi"}</h1>
    <p class="updated">
      {$language === EN ? "Last Updated: May 28, 2026" : "Terakhir Diperbarui: 28 Mei 2026"}
    </p>
  </div>

  <div class="legal-content">
    {#if $language === EN}
      <section>
        <h2>1. Introduction</h2>
        <p>
          We at <strong>aryaaji.com</strong> are highly committed to protecting and respecting the privacy of your personal data. This Privacy Policy explains how we collect, use, process, store, and protect personal information you provide when using our website and platforms under our domain (such as <code>tryout.aryaaji.com</code>).
        </p>
        <p>
          By using our Services, you agree to the collection and use of data in accordance with this Privacy Policy.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We collect several types of information to provide, improve, and secure our Services:</p>
        <ul>
          <li>
            <strong>Authentication Information:</strong> When you register or log into your account via Google OAuth or email, we collect basic account data such as your full name, email address, and your public Google profile photo.
          </li>
          <li>
            <strong>Transaction Data:</strong> When you top up or purchase credits, our system and payment gateway provider (Midtrans) collect your transaction details (order number, payment time, payment status). We <em>never</em> store your credit card information on our local servers; all credit card processing is handled securely by Midtrans, which is PCI-DSS certified.
          </li>
          <li>
            <strong>Exam Activity Data (Tryout):</strong> We store exam answer data, time taken per question, question flagging (uncertain), and tryout pass/fail scores to calculate tryout performance for your personal analytics dashboard.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Use of Your Information</h2>
        <p>The personal data collected will be used to:</p>
        <ul>
          <li>Provide, maintain, and monitor the functionality of our Services.</li>
          <li>Process credit payment transactions securely and in real-time via the Midtrans gateway.</li>
          <li>Display exam score reports, subject-strength analysis charts, and tryout package history you have completed.</li>
          <li>Contact you regarding the status of transaction processing or urgent technical updates related to your account.</li>
          <li>Prevent abuse, fraud, and other suspicious activity on our servers.</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>
          The security of your personal information is very important to us. We implement technical and administrative security measures designed to protect your personal data from unauthorized access, loss, theft, alteration, or misuse. All data exchange between your browser and our servers is encrypted using the secure HTTPS protocol (Secure Sockets Layer/SSL).
        </p>
      </section>

      <section>
        <h2>5. Sharing Information with Third Parties</h2>
        <p>
          We will never sell, rent, trade, or share your personal information with any third party for their own commercial purposes without your written consent. We only share information within the following strict limits:
        </p>
        <ul>
          <li>
            <strong>Payment Gateway Service Provider (Midtrans):</strong> We share order ID details and purchase amounts with Midtrans to securely process your payment authorization.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may disclose your personal information if required by law, court subpoena, or official order from a competent Indonesian judicial authority.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Data Retention</h2>
        <p>
          We retain your personal data for as long as your account is active or as needed to provide Services to you. You have the right to request deletion of your account and all related personal data stored on our servers by sending a deletion request email to us.
        </p>
      </section>

      <section>
        <h2>7. Changes to Privacy Policy</h2>
        <p>
          This Privacy Policy may be modified or updated from time to time. Any changes will be announced directly on this page by updating the "Last Updated" date at the top. Continued use of the Services after updates are published indicates your acceptance of the new Privacy Policy.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>
          For questions, complaints, or requests related to the management of your personal data under this Privacy Policy, you can contact us at:
        </p>
        <p>
          Email: <a href="mailto:hello@aryaaji.com">hello@aryaaji.com</a><br />
          WhatsApp: +62 819 9888 4422
        </p>
      </section>

    {:else}
      <section>
        <h2>1. Pendahuluan</h2>
        <p>
          Kami di <strong>aryaaji.com</strong> berkomitmen tinggi untuk melindungi dan menghormati privasi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, memproses, menyimpan, dan melindungi informasi pribadi yang Anda berikan ketika menggunakan situs web kami serta platform yang berada di bawah domain kami (seperti <code>tryout.aryaaji.com</code>).
        </p>
        <p>
          Dengan menggunakan Layanan kami, Anda setuju atas pengumpulan dan penggunaan data sesuai dengan ketentuan yang diatur dalam Kebijakan Privasi ini.
        </p>
      </section>

      <section>
        <h2>2. Informasi yang Kami Kumpulkan</h2>
        <p>Kami mengumpulkan beberapa jenis informasi untuk memberikan, meningkatkan, dan mengamankan Layanan kami:</p>
        <ul>
          <li>
            <strong>Informasi Otentikasi:</strong> Ketika Anda mendaftar atau masuk ke akun Anda melalui Google OAuth atau email, kami mengumpulkan data dasar akun Anda seperti nama lengkap, alamat email, serta foto profil publik Google Anda.
          </li>
          <li>
            <strong>Data Transaksi:</strong> Apabila Anda melakukan top up atau pembelian kredit, sistem kami dan penyedia gateway pembayaran (Midtrans) mengumpulkan rincian transaksi Anda (nomor pesanan, waktu pembayaran, status pembayaran). Kami <em>tidak pernah</em> menyimpan informasi kartu kredit Anda di server lokal kami; semua pemrosesan kartu kredit diproses secara aman langsung oleh Midtrans yang telah tersertifikasi PCI-DSS.
          </li>
          <li>
            <strong>Data Aktivitas Ujian (Tryout):</strong> Kami menyimpan data jawaban ujian, waktu pengisian soal, penandaan soal (ragu-ragu), serta nilai kelulusan tryout Anda guna menghitung performa hasil tryout untuk visualisasi grafik analitik pribadi Anda.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Penggunaan Informasi Anda</h2>
        <p>Data pribadi yang dikumpulkan akan kami pergunakan untuk:</p>
        <ul>
          <li>Menyediakan, memelihara, dan memantau fungsionalitas Layanan kami.</li>
          <li>Memproses transaksi pembayaran kredit secara aman dan real-time melalui gateway Midtrans.</li>
          <li>Menampilkan laporan nilai ujian, grafik analisis kekuatan materi, serta riwayat paket tryout yang pernah Anda selesaikan.</li>
          <li>Menghubungi Anda perihal status pemrosesan transaksi atau update teknis mendesak terkait akun Anda.</li>
          <li>Mencegah penyalahgunaan, kecurangan, dan aktivitas mencurigakan lainnya di server kami.</li>
        </ul>
      </section>

      <section>
        <h2>4. Keamanan Data</h2>
        <p>
          Keamanan informasi pribadi Anda sangat penting bagi kami. Kami menerapkan langkah-langkah keamanan teknis dan administratif yang dirancang secara optimal untuk melindungi data pribadi Anda dari akses tidak sah, kehilangan, pencurian, pengubahan, atau penyalahgunaan. Seluruh pertukaran data antara browser Anda dan server kami dienkripsi menggunakan protokol aman HTTPS (Secure Sockets Layer/SSL).
        </p>
      </section>

      <section>
        <h2>5. Pembagian Informasi dengan Pihak Ketiga</h2>
        <p>
          Kami tidak akan pernah menjual, menyewakan, memperdagangkan, atau membagikan informasi pribadi Anda kepada pihak ketiga mana pun untuk tujuan komersial mereka sendiri tanpa izin tertulis dari Anda. Kami hanya membagikan informasi dalam batas-batas ketat berikut:
        </p>
        <ul>
          <li>
            <strong>Penyedia Layanan Gateway Pembayaran (Midtrans):</strong> Kami membagikan detail order ID dan nominal pembelian ke sistem Midtrans untuk memproses otorisasi pembayaran Anda secara aman.
          </li>
          <li>
            <strong>Kepatuhan Hukum:</strong> Kami dapat mengungkapkan informasi pribadi Anda jika diwajibkan oleh hukum, panggilan pengadilan, atau perintah resmi dari otoritas peradilan Indonesia yang sah.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Penyimpanan Data</h2>
        <p>
          Kami menyimpan data pribadi Anda selama akun Anda aktif atau selama diperlukan untuk menyediakan Layanan kepada Anda. Anda memiliki hak untuk meminta penghapusan akun beserta seluruh data pribadi terkait yang tersimpan di server kami dengan mengirimkan email permintaan penghapusan ke kami.
        </p>
      </section>

      <section>
        <h2>7. Perubahan Kebijakan Privasi</h2>
        <p>
          Kebijakan Privasi ini dapat diubah atau diperbarui dari waktu ke waktu. Setiap perubahan akan diumumkan langsung di halaman ini dengan memperbarui tanggal "Terakhir Diperbarui" di bagian atas halaman. Melanjutkan penggunaan Layanan setelah pembaruan dipublikasikan menandakan penerimaan Anda atas Kebijakan Privasi yang baru.
        </p>
      </section>

      <section>
        <h2>8. Hubungi Kami</h2>
        <p>
          Untuk pertanyaan, keluhan, atau permintaan terkait pengelolaan data pribadi Anda pada Kebijakan Privasi ini, Anda dapat menghubungi kami di:
        </p>
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
