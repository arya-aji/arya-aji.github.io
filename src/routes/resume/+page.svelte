<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { language } from '$lib/stores/language';
  import { MapPin, Mail, Briefcase, GraduationCap, Code2, ExternalLink } from 'lucide-svelte';

  const experience = {
    EN: [
      {
        role: "First Expert Computer Technician",
        company: "Central Government Institution",
        period: "2018 – Present",
        duration: "7 years",
        location: "Jakarta, Indonesia",
        bullets: [
          "Designed and developed full-stack web applications used across government units, streamlining internal data workflows and reporting systems.",
          "Built and deployed automation scripts that reduced repetitive data processing tasks by hours per week for statistical analysts.",
          "Led digital innovation initiatives, proposing and implementing software solutions aligned with government modernization programs.",
          "Collaborated with cross-functional teams to deliver geospatial monitoring tools and interactive data dashboards for field operations.",
          "Integrated AI capabilities into web applications to automate content generation and data analysis workflows.",
        ],
      },
    ],
    ID: [
      {
        role: "Pranata Komputer Ahli Pertama",
        company: "Instansi Pemerintah Pusat",
        period: "2018 – Sekarang",
        duration: "7 tahun",
        location: "Jakarta, Indonesia",
        bullets: [
          "Merancang dan mengembangkan aplikasi web full-stack yang digunakan di berbagai unit pemerintahan untuk memperlancar alur data internal dan sistem pelaporan.",
          "Membangun dan menyebarkan skrip otomasi yang mengurangi tugas pemrosesan data berulang hingga berjam-jam per minggu bagi analis statistik.",
          "Memimpin inisiatif inovasi digital dengan mengusulkan dan mengimplementasikan solusi perangkat lunak selaras program modernisasi pemerintah.",
          "Berkolaborasi lintas tim untuk menghasilkan alat pemantauan geospasial dan dashboard data interaktif bagi operasional lapangan.",
          "Mengintegrasikan kemampuan AI ke dalam aplikasi web untuk mengotomasi pembuatan konten dan alur analisis data.",
        ],
      },
    ],
  } as const;

  const education = {
    EN: {
      degree: "D4 — Applied Statistics",
      institution: "Politeknik Statistika STIS",
      period: "2014 – 2018",
      location: "Jakarta, Indonesia",
      note: "State polytechnic under BPS-Statistics Indonesia, specializing in applied statistics and data science.",
    },
    ID: {
      degree: "D4 — Statistika Terapan",
      institution: "Politeknik Statistika STIS",
      period: "2014 – 2018",
      location: "Jakarta, Indonesia",
      note: "Politeknik negeri di bawah BPS-Statistik Indonesia, berspesialisasi dalam statistika terapan dan ilmu data.",
    },
  } as const;

  const skills = {
    EN: [
      {
        category: "Fullstack Development",
        icon: "💻",
        items: ["SvelteKit", "Next.js", "FastAPI", "Python", "TypeScript", "JavaScript", "PostgreSQL", "Prisma"],
      },
      {
        category: "Data & Statistics",
        icon: "📊",
        items: ["Statistical Analysis", "Data Visualization", "Dashboard Development", "Report Automation", "Geospatial Analysis"],
      },
      {
        category: "Scripting & Automation",
        icon: "⚙️",
        items: ["Python Scripting", "Workflow Automation", "Batch Processing", "Excel Automation", "API Integration"],
      },
      {
        category: "AI Integration",
        icon: "🤖",
        items: ["LLM Integration", "AI-powered Features", "Prompt Engineering", "Automated Content Generation"],
      },
    ],
    ID: [
      {
        category: "Pengembangan Fullstack",
        icon: "💻",
        items: ["SvelteKit", "Next.js", "FastAPI", "Python", "TypeScript", "JavaScript", "PostgreSQL", "Prisma"],
      },
      {
        category: "Data & Statistik",
        icon: "📊",
        items: ["Analisis Statistik", "Visualisasi Data", "Pengembangan Dashboard", "Otomasi Laporan", "Analisis Geospasial"],
      },
      {
        category: "Skrip & Otomasi",
        icon: "⚙️",
        items: ["Skrip Python", "Otomasi Alur Kerja", "Pemrosesan Batch", "Otomasi Excel", "Integrasi API"],
      },
      {
        category: "Integrasi AI",
        icon: "🤖",
        items: ["Integrasi LLM", "Fitur Berbasis AI", "Prompt Engineering", "Generasi Konten Otomatis"],
      },
    ],
  } as const;

  type Lang = 'EN' | 'ID';
  let lang = $derived($language as Lang);
  let currentExperience = $derived(experience[lang]);
  let currentEducation = $derived(education[lang]);
  let currentSkills = $derived(skills[lang]);
</script>

<svelte:head>
  <title>Resume | Arya Aji Kusuma</title>
  <meta name="description" content="Resume of Arya Aji Kusuma — First Expert Computer Technician with 7 years building full-stack applications, automation tools, and AI-integrated systems in government." />
</svelte:head>

<Navbar />

<main class="page-main">
  <div class="container">

    <!-- Header -->
    <div class="resume-header">
      <div class="header-left">
        <h1 class="name">Arya Aji Kusuma</h1>
        <p class="title-tag">
          {$language === 'EN'
            ? 'Fullstack Developer · Data Analyst · Government Tech'
            : 'Developer Fullstack · Analis Data · Teknologi Pemerintahan'}
        </p>
        <div class="header-meta">
          <span class="meta-item">
            <MapPin size={13} />
            Jakarta, Indonesia
          </span>
          <span class="meta-sep">·</span>
          <a href="mailto:hello@aryaaji.com" class="meta-item meta-link">
            <Mail size={13} />
            hello@aryaaji.com
          </a>
          <span class="meta-sep">·</span>
          <a href="https://github.com/arya-aji" target="_blank" rel="noopener noreferrer" class="meta-item meta-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            arya-aji
          </a>
          <span class="meta-sep">·</span>
          <a href="https://linkedin.com/in/arya-aji-kusuma" target="_blank" rel="noopener noreferrer" class="meta-item meta-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            arya-aji-kusuma
          </a>
        </div>
      </div>
      <div class="header-right">
        <a href="/projects" class="view-work-btn">
          <ExternalLink size={14} />
          {$language === 'EN' ? 'View Projects' : 'Lihat Proyek'}
        </a>
      </div>
    </div>

    <div class="resume-body">

      <!-- Experience -->
      <section class="resume-section">
        <div class="section-heading">
          <Briefcase size={15} />
          <h2>{$language === 'EN' ? 'Experience' : 'Pengalaman'}</h2>
        </div>

        {#each currentExperience as job}
          <div class="exp-card">
            <div class="exp-header">
              <div class="exp-left">
                <h3 class="exp-role">{job.role}</h3>
                <p class="exp-company">{job.company}</p>
              </div>
              <div class="exp-right">
                <span class="exp-period">{job.period}</span>
                <span class="exp-duration">{job.duration}</span>
                <span class="exp-location">
                  <MapPin size={11} />
                  {job.location}
                </span>
              </div>
            </div>
            <ul class="exp-bullets">
              {#each job.bullets as bullet}
                <li>{bullet}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </section>

      <!-- Education -->
      <section class="resume-section">
        <div class="section-heading">
          <GraduationCap size={15} />
          <h2>{$language === 'EN' ? 'Education' : 'Pendidikan'}</h2>
        </div>

        <div class="edu-card">
          <div class="edu-header">
            <div class="edu-left">
              <h3 class="exp-role">{currentEducation.degree}</h3>
              <p class="exp-company">{currentEducation.institution}</p>
              <p class="edu-note">{currentEducation.note}</p>
            </div>
            <div class="exp-right">
              <span class="exp-period">{currentEducation.period}</span>
              <span class="exp-location">
                <MapPin size={11} />
                {currentEducation.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section class="resume-section">
        <div class="section-heading">
          <Code2 size={15} />
          <h2>{$language === 'EN' ? 'Skills' : 'Keahlian'}</h2>
        </div>

        <div class="skills-grid">
          {#each currentSkills as group}
            <div class="skill-group">
              <h3 class="skill-category">
                <span class="skill-icon">{group.icon}</span>
                {group.category}
              </h3>
              <div class="skill-tags">
                {#each group.items as item}
                  <span class="skill-tag">{item}</span>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </section>

    </div>
  </div>
</main>

<Footer />

<style>
  .page-main {
    min-height: calc(100vh - 64px);
    padding: 48px 0 80px;
  }

  .container {
    max-width: 860px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ── Header ── */
  .resume-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 48px;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--ctp-surface0);
  }

  .name {
    font-size: 2.4rem;
    font-weight: 800;
    color: var(--ctp-text);
    line-height: 1.1;
    margin-bottom: 8px;
  }

  .title-tag {
    font-size: 0.88rem;
    color: var(--accent);
    font-weight: 600;
    font-family: 'JetBrains Mono', monospace;
    margin-bottom: 16px;
  }

  .header-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .meta-item {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8rem;
    color: var(--ctp-subtext1);
    font-family: 'JetBrains Mono', monospace;
  }

  .meta-link {
    color: var(--ctp-subtext1);
    text-decoration: none;
    transition: color 0.15s;
  }

  .meta-link:hover {
    color: var(--accent);
    opacity: 1;
  }

  .meta-sep {
    color: var(--ctp-surface2);
  }

  .view-work-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 10px 18px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
    color: var(--accent);
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.2s ease;
  }

  .view-work-btn:hover {
    background: color-mix(in srgb, var(--accent) 18%, transparent);
    border-color: var(--accent);
    transform: translateY(-1px);
    opacity: 1;
  }

  /* ── Resume Body ── */
  .resume-body {
    display: flex;
    flex-direction: column;
    gap: 44px;
  }

  .resume-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .section-heading {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--ctp-surface0);
    color: var(--ctp-subtext0);
  }

  .section-heading h2 {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--ctp-subtext0);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-family: 'JetBrains Mono', monospace;
  }

  /* ── Cards ── */
  .exp-card,
  .edu-card {
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 14px;
    padding: 24px;
    transition: border-color 0.2s;
  }

  .exp-card:hover,
  .edu-card:hover {
    border-color: color-mix(in srgb, var(--accent) 30%, var(--ctp-surface0));
  }

  .exp-header,
  .edu-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
  }

  .exp-role {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin-bottom: 4px;
  }

  .exp-company {
    font-size: 0.88rem;
    color: var(--accent);
    font-weight: 600;
  }

  .edu-note {
    font-size: 0.82rem;
    color: var(--ctp-subtext0);
    margin-top: 6px;
    line-height: 1.55;
  }

  .exp-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    flex-shrink: 0;
  }

  .exp-period {
    font-size: 0.8rem;
    font-family: 'JetBrains Mono', monospace;
    color: var(--ctp-subtext1);
    font-weight: 600;
    white-space: nowrap;
  }

  .exp-duration {
    font-size: 0.72rem;
    font-family: 'JetBrains Mono', monospace;
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
    padding: 2px 9px;
    border-radius: 999px;
  }

  .exp-location {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    font-size: 0.72rem;
    color: var(--ctp-overlay1);
    font-family: 'JetBrains Mono', monospace;
  }

  .exp-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  .exp-bullets li {
    font-size: 0.9rem;
    color: var(--ctp-subtext1);
    line-height: 1.7;
    padding-left: 18px;
    position: relative;
  }

  .exp-bullets li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-size: 0.65rem;
    top: 0.38em;
  }

  /* ── Skills ── */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .skill-group {
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 14px;
    padding: 20px;
    transition: border-color 0.2s;
  }

  .skill-group:hover {
    border-color: color-mix(in srgb, var(--accent) 25%, var(--ctp-surface0));
  }

  .skill-category {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--ctp-text);
    margin-bottom: 12px;
  }

  .skill-icon {
    font-size: 0.95rem;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .skill-tag {
    display: inline-flex;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 500;
    background: color-mix(in srgb, var(--accent) 7%, var(--ctp-base));
    border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
    color: var(--ctp-subtext1);
    font-family: 'JetBrains Mono', monospace;
  }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .resume-header {
      flex-direction: column;
      gap: 20px;
    }

    .meta-sep { display: none; }

    .view-work-btn {
      width: 100%;
      justify-content: center;
    }

    .exp-header,
    .edu-header {
      flex-direction: column;
      gap: 10px;
    }

    .exp-right {
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px;
    }

    .skills-grid {
      grid-template-columns: 1fr;
    }

    .name {
      font-size: 1.9rem;
    }
  }
</style>
