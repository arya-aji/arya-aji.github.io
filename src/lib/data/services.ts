export interface ServiceOffering {
  id: string;
  title_en: string;
  title_id: string;
  badge: string;
  badgeColor: string;
  badgeBg: string;
  description_en: string;
  description_id: string;
  deliverables_en: string[];
  deliverables_id: string[];
  idealFor_en: string;
  idealFor_id: string;
  icon: string;
  turnaround_en: string;
  turnaround_id: string;
}

export const serviceOfferings: ServiceOffering[] = [
  {
    id: "browser-extensions",
    title_en: "Custom Chrome & Browser Extensions",
    title_id: "Ekstensi Browser & Chrome Kustom",
    badge: "Most Popular",
    badgeColor: "#cba6f7",
    badgeBg: "rgba(203, 166, 247, 0.15)",
    description_en: "Turn repetitive browsing, scraping, or web actions into 1-click tools running natively in Manifest V3.",
    description_id: "Ubah pekerjaan browser manual, scraping, atau alur kerja berulang jadi 1-klik alat bantu Manifest V3.",
    deliverables_en: [
      "Manifest V3 compliant extension",
      "Custom popup, side panel, or background worker",
      "DOM automation, auto-fill, or web scraping",
      "Ready-to-publish store zip package"
    ],
    deliverables_id: [
      "Ekstensi standar Manifest V3",
      "Popup kustom, panel samping, atau background worker",
      "Otomasi DOM, auto-fill, atau web scraping",
      "Paket ZIP siap diunggah ke Chrome Web Store"
    ],
    idealFor_en: "Teams needing productivity boosters, privacy protectors, or internal workflow helpers.",
    idealFor_id: "Tim yang butuh alat bantu produktivitas, proteksi privasi, atau otomatisasi kerja internal.",
    icon: "Boxes",
    turnaround_en: "3 – 5 Days",
    turnaround_id: "3 – 5 Hari"
  },
  {
    id: "data-automation",
    title_en: "Python Data & Workflow Automation",
    title_id: "Otomasi Data & Workflow Python",
    badge: "High ROI",
    badgeColor: "#89b4fa",
    badgeBg: "rgba(137, 180, 250, 0.15)",
    description_en: "Automate complex data gathering, spreadsheet wrangling (Excel/Google Sheets), OSM geocoding, and REST API syncs.",
    description_id: "Otomasi penarikan data, pengolahan spreadsheet (Excel/Google Sheets), geocoding peta OSM, dan sinkronisasi API.",
    deliverables_en: [
      "Robust, self-contained Python / Node scripts",
      "Scheduled or triggered execution",
      "Clean Excel / CSV / JSON structured reports",
      "Complete deployment & run documentation"
    ],
    deliverables_id: [
      "Script Python / Node yang mandiri dan teruji",
      "Jadwal eksekusi otomatis atau pemicu instan",
      "Laporan terstruktur Excel / CSV / JSON bersih",
      "Dokumentasi lengkap cara pakai dan deployment"
    ],
    idealFor_en: "Businesses wasting hours doing manual copy-paste, reporting, or data verification.",
    idealFor_id: "Bisnis yang membuang waktu berjam-jam untuk copy-paste manual, pelaporan, atau validasi data.",
    icon: "Cpu",
    turnaround_en: "2 – 4 Days",
    turnaround_id: "2 – 4 Hari"
  },
  {
    id: "fast-mvp",
    title_en: "Interactive Web MVPs & Dashboards",
    title_id: "Web App Ringan & Dashboard Interaktif",
    badge: "Fixed-Price Sprints",
    badgeColor: "#fab387",
    badgeBg: "rgba(250, 179, 135, 0.15)",
    description_en: "Fast, lightweight modern web applications and interactive portals built with SvelteKit or Next.js.",
    description_id: "Aplikasi web modern, cepat, dan portal interaktif yang dibangun menggunakan SvelteKit atau Next.js.",
    deliverables_en: [
      "Responsive, mobile-first web interface",
      "Dynamic interactive charts, tables, & filters",
      "API integrations & payment gateways",
      "High performance & zero-maintenance static deploy"
    ],
    deliverables_id: [
      "Antarmuka responsif mobile-first",
      "Grafik interaktif dinamis, tabel, & filter",
      "Integrasi API & sistem pembayaran",
      "Performa tinggi & deployment statis hemat biaya"
    ],
    idealFor_en: "Founders, creators, and teams needing a working proof-of-concept or internal tool quickly.",
    idealFor_id: "Founder, kreator, dan tim yang butuh validasi produk cepat atau dashboard operasional.",
    icon: "LayoutDashboard",
    turnaround_en: "1 – 2 Weeks",
    turnaround_id: "1 – 2 Minggu"
  }
];
