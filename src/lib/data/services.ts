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
    id: "fast-mvp",
    title_en: "Modern Web Apps & Interactive Dashboards",
    title_id: "Aplikasi Web Modern & Dashboard Interaktif",
    badge: "Core Expertise",
    badgeColor: "#fab387",
    badgeBg: "rgba(250, 179, 135, 0.15)",
    description_en: "Fast, responsive web applications and interactive dashboards built with SvelteKit, React, or Next.js.",
    description_id: "Aplikasi web responsif yang cepat dan dashboard interaktif yang dibangun menggunakan SvelteKit, React, atau Next.js.",
    deliverables_en: [
      "Responsive mobile-first UI with dark/light themes",
      "Interactive charts, live filters & auth/payments",
      "High performance & zero-maintenance static deploy"
    ],
    deliverables_id: [
      "Antarmuka mobile-first responsif & elegan",
      "Grafik interaktif, filter instan & integrasi API",
      "Performa tinggi & deployment statis hemat biaya"
    ],
    idealFor_en: "Founders & teams needing a production-ready web app fast.",
    idealFor_id: "Founder & tim yang butuh rilis web app berkualitas cepat.",
    icon: "LayoutDashboard",
    turnaround_en: "1 – 2 Weeks",
    turnaround_id: "1 – 2 Minggu"
  },
  {
    id: "browser-extensions",
    title_en: "Custom Chrome & Browser Extensions",
    title_id: "Ekstensi Browser & Chrome Kustom",
    badge: "Most Popular",
    badgeColor: "#cba6f7",
    badgeBg: "rgba(203, 166, 247, 0.15)",
    description_en: "Turn repetitive browsing, scraping, or web workflows into 1-click tools running natively in Manifest V3.",
    description_id: "Ubah pekerjaan browser manual, scraping, atau workflow berulang jadi 1-klik alat bantu Manifest V3.",
    deliverables_en: [
      "Manifest V3 extension (Popup, Sidepanel, Background)",
      "Automated DOM scraping, autofill & data extraction",
      "Store-ready package + publishing guide"
    ],
    deliverables_id: [
      "Ekstensi Manifest V3 (Popup, Sidepanel, Background)",
      "Otomasi DOM scraping, autofill & ekstraksi data",
      "Paket ZIP siap rilis ke Chrome Web Store"
    ],
    idealFor_en: "Productivity boosters & custom browser workflows.",
    idealFor_id: "Alat bantu produktivitas & otomasi alur kerja web.",
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
    description_en: "Automate complex data gathering, spreadsheet wrangling (Excel/Sheets), OSM geocoding, and REST API syncs.",
    description_id: "Otomasi penarikan data, pengolahan spreadsheet (Excel/Sheets), geocoding peta OSM, dan sinkronisasi API.",
    deliverables_en: [
      "Self-contained, battle-tested Python scripts",
      "Scheduled/instant automated pipelines",
      "Structured Excel / CSV / JSON reports"
    ],
    deliverables_id: [
      "Script Python mandiri & teruji andal",
      "Pipeline terjadwal / otomatis sekali klik",
      "Laporan terstruktur Excel / CSV / JSON bersih"
    ],
    idealFor_en: "Eliminating tedious manual copy-paste & reporting.",
    idealFor_id: "Menghilangkan pekerjaan manual copy-paste & rekap data.",
    icon: "Cpu",
    turnaround_en: "2 – 4 Days",
    turnaround_id: "2 – 4 Hari"
  }
];
