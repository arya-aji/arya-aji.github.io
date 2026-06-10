

<svelte:head>
  <title>Refund & Cancellation Policy | Arya Aji Kusuma</title>
  <meta name="description" content="Refund and Cancellation Policy for platforms and services operated under aryaaji.com." />
</svelte:head>


<main class="legal-page container pt-32 pb-32">
  <div class="legal-header">
    <h1>Refund & Cancellation Policy</h1>
    <p class="updated">Terakhir Diperbarui: 28 Mei 2026</p>
  </div>

  <div class="legal-content">
    <section>
      <h2>1. Produk & Layanan Digital</h2>
      <p>
        Seluruh produk dan layanan yang dijual di <strong>aryaaji.com</strong> serta subdomain terkait (termasuk <code>tryout.aryaaji.com</code>) adalah berupa **produk digital** (akses paket ujian, kredit tryout, dan layanan optimasi kode/SaaS).
      </p>
      <p>
        Karena produk kami bersifat non-fisik dan langsung didistribusikan secara instan ke dalam akun pengguna sesaat setelah transaksi terkonfirmasi sukses, maka **seluruh transaksi pembelian bersifat final dan tidak dapat dibatalkan atau dikembalikan (non-refundable)**.
      </p>
    </section>

    <section>
      <h2>2. Kebijakan Pengembalian Dana (Refund)</h2>
      <p>
        Sebagai aturan umum, dana yang telah dibayarkan untuk pembelian kredit ujian atau akses layanan SaaS tidak dapat di-refund. Namun, kami dapat mempertimbangkan permohonan pengembalian dana hanya dalam kondisi khusus berikut:
      </p>
      <ul>
        <li>
          <strong>Duplikasi Transaksi Akibat Gangguan Sistem:</strong> Apabila akun Anda terpotong saldonya atau ter-charge dua kali untuk satu pesanan yang sama dikarenakan kegagalan/gangguan sistem koneksi gateway pembayaran, Anda berhak mengajukan refund untuk nominal transaksi yang ganda tersebut.
        </li>
        <li>
          <strong>Kredit Tidak Masuk Setelah 24 Jam:</strong> Apabila pembayaran Anda telah dinyatakan sukses oleh gateway pembayaran (Midtrans) tetapi saldo kredit/akses tryout tidak bertambah atau teraktivasi di akun Anda dalam waktu 24 jam kerja karena kendala teknis pada platform kami, Anda berhak mengajukan permohonan pembatalan dan pengembalian dana penuh.
        </li>
      </ul>
      <p>
        Permohonan refund di luar kondisi khusus di atas (misalnya: salah memilih paket, berubah pikiran setelah bertransaksi, atau kegagalan perangkat pribadi saat mengerjakan ujian) **tidak dapat kami setujui**.
      </p>
    </section>

    <section>
      <h2>3. Prosedur Pengajuan Refund</h2>
      <p>
        Untuk mengajukan permohonan pengembalian dana berdasarkan kondisi khusus di atas, harap ikuti langkah berikut:
      </p>
      <ol>
        <li>Kirimkan email ke <a href="mailto:hello@aryaaji.com">hello@aryaaji.com</a> dengan subjek email <strong>"Pengajuan Refund - [Order ID Anda]"</strong>.</li>
        <li>Lampirkan bukti pembayaran yang sah (invoice dari Midtrans, bukti transfer bank, atau bukti mutasi rekening).</li>
        <li>Tuliskan deskripsi kronologi kendala teknis yang Anda alami beserta screenshot kendala tersebut.</li>
        <li>Tuliskan rincian akun bank tujuan pengembalian dana (Nama Bank, Nomor Rekening, dan Nama Pemilik Rekening).</li>
      </ol>
      <p>
        Setiap pengajuan yang masuk akan kami evaluasi dan proses dalam waktu maksimal **7 (tujuh) hari kerja**. Apabila pengajuan disetujui, dana akan ditransfer kembali ke rekening bank Anda setelah dikurangi biaya administrasi antarbank (jika ada).
      </p>
    </section>

    <section>
      <h2>4. Kebijakan Pembatalan Layanan (Cancellation)</h2>
      <p>
        Pengguna dapat berhenti menggunakan Layanan kami kapan saja dengan cara berhenti masuk (log out) atau menghapus akun mereka. Karena model transaksi kami berbasis pembelian kredit eceran (non-langganan otomatis berulang/non-recurring subscription), tidak ada kebijakan tagihan masa depan yang perlu dibatalkan secara manual.
      </p>
      <p>
        Apabila di masa mendatang kami mengimplementasikan model langganan berulang (recurring billing), Anda dapat membatalkan langganan kapan saja melalui panel pengaturan akun Anda. Pembatalan langganan akan menghentikan tagihan untuk siklus berikutnya, sementara akses Anda tetap aktif hingga siklus berjalan berakhir.
      </p>
    </section>

    <section>
      <h2>5. Tidak Ada Kebijakan Pengembalian Barang Fisik (No Return Policy)</h2>
      <p>
        Karena platform kami sepenuhnya berbasis komputasi awan dan sistem digital, kami tidak mengirimkan barang fisik dalam bentuk apa pun. Oleh karena itu, **ketentuan mengenai pengembalian barang secara fisik (return), penukaran barang fisik, atau ongkos kirim pengembalian tidak berlaku di platform kami**.
      </p>
    </section>

    <section>
      <h2>6. Hubungi Kami</h2>
      <p>
        Jika Anda memiliki pertanyaan lebih lanjut mengenai Kebijakan Pengembalian Dana dan Pembatalan ini, silakan hubungi kami di:
      </p>
      <p>
        Email: <a href="mailto:hello@aryaaji.com">hello@aryaaji.com</a><br />
        WhatsApp: +62 819 9888 4422
      </p>
    </section>
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
  .legal-content section ul li,
  .legal-content section ol li {
    color: var(--ctp-subtext0);
    line-height: 1.8;
    font-size: 1.05rem;
    margin-bottom: 12px;
  }

  .legal-content section ul,
  .legal-content section ol {
    margin-left: 20px;
    margin-bottom: 16px;
  }

  .legal-content section ul li,
  .legal-content section ol li {
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
