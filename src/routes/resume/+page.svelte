<script lang="ts">
  import { language } from '$lib/stores/language';
  import { MapPin, Mail, Briefcase, GraduationCap, Code2, ExternalLink } from 'lucide-svelte';

  const summary = {
    EN: "Highly analytical and detail-oriented Computer Technician & Fullstack Developer with 7+ years of experience in government technology. Specialized in engineering performant web applications, building automated statistical workflows, and integrating modern AI capabilities. Proven track record of streamlining legacy manual data entry processes, translating complex requirements into reliable codebases, and designing responsive analytics dashboards.",
    ID: "Teknisi Komputer & Developer Fullstack yang sangat analitis dengan 7+ tahun pengalaman di teknologi pemerintahan. Berspesialisasi dalam rekayasa aplikasi web berkinerja tinggi, membangun alur kerja statistik otomatis, dan mengintegrasikan kemampuan AI modern. Terbukti berhasil merampingkan proses entri data manual yang usang, menerjemahkan kebutuhan kompleks menjadi basis kode yang andal, dan merancang dashboard analitik yang responsif."
  } as const;

  const experience = {
    EN: [
      {
        role: "First Expert Computer Technician",
        company: "Central Government Institution",
        period: "2018 – Present",
        duration: "7 years",
        location: "Jakarta, Indonesia",
        bullets: [
          "Designed and developed 5+ full-stack web applications used across government units, streamlining internal data workflows and improving reporting efficiency by 40%.",
          "Built and deployed Python automation scripts that reduced repetitive data processing tasks by 15+ hours per week for statistical analysts.",
          "Led digital innovation initiatives, proposing and implementing open-source software solutions that saved over $12,000 in annual licensing costs.",
          "Collaborated with cross-functional teams to deliver geospatial monitoring tools and interactive data dashboards, supporting decision-making for 200+ field operations officers.",
          "Integrated AI capabilities (LLM APIs) into internal web applications, automating 80% of routine content generation and metadata classification workflows.",
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
          "Merancang dan mengembangkan 5+ aplikasi web full-stack yang digunakan di berbagai unit pemerintahan, memperlancar alur data internal dan meningkatkan efisiensi pelaporan sebesar 40%.",
          "Membangun dan menyebarkan skrip otomasi Python yang memangkas tugas pemrosesan data berulang hingga 15+ jam per minggu bagi analis statistik.",
          "Memimpin inisiatif inovasi digital dengan mengusulkan dan menerapkan solusi perangkat lunak open-source yang menghemat lebih dari $12.000 dalam biaya lisensi tahunan.",
          "Berkolaborasi lintas tim untuk menghasilkan alat pemantauan geospasial dan dashboard data interaktif, mendukung pengambilan keputusan bagi 200+ petugas operasional lapangan.",
          "Mengintegrasikan kemampuan AI (LLM API) ke dalam aplikasi web internal, mengotomatiskan 80% alur kerja klasifikasi metadata dan pembuatan konten rutin.",
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
  let currentSummary = $derived(summary[lang]);
  let currentExperience = $derived(experience[lang]);
  let currentEducation = $derived(education[lang]);
  let currentSkills = $derived(skills[lang]);
</script>

<svelte:head>
  <title>Resume | Arya Aji Kusuma</title>
  <meta name="description" content="Resume of Arya Aji Kusuma — First Expert Computer Technician with 7 years building full-stack applications, automation tools, and AI-integrated systems in government." />
</svelte:head>

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

    <!-- Resume Grid -->
    <div class="resume-grid">
      
      <!-- Left Column: Summary, Experience, Education -->
      <div class="resume-left-col">
        
        <!-- Profile Summary -->
        <section class="resume-section">
          <div class="section-heading">
            <span class="section-heading-emoji">👤</span>
            <h2>{$language === 'EN' ? 'Professional Summary' : 'Ringkasan Profesional'}</h2>
          </div>
          <div class="summary-card">
            <p>{currentSummary}</p>
          </div>
        </section>

        <!-- Experience -->
        <section class="resume-section">
          <div class="section-heading">
            <Briefcase size={15} />
            <h2>{$language === 'EN' ? 'Experience' : 'Pengalaman'}</h2>
          </div>

          <div class="timeline">
            {#each currentExperience as job}
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content exp-card">
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
              </div>
            {/each}
          </div>
        </section>

        <!-- Education -->
        <section class="resume-section">
          <div class="section-heading">
            <GraduationCap size={15} />
            <h2>{$language === 'EN' ? 'Education' : 'Pendidikan'}</h2>
          </div>

          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content edu-card">
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
            </div>
          </div>
        </section>

      </div>

      <!-- Right Column: Sidebar -->
      <div class="resume-right-col">
        
        <!-- Download CTA -->
        <div class="sidebar-block download-block">
          <a href="/Arya_Aji_Kusuma_Resume.pdf" target="_blank" download class="download-resume-btn">
            <svg class="download-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            {$language === 'EN' ? 'Download Resume PDF' : 'Unduh Resume PDF'}
          </a>
        </div>

        <!-- Skills -->
        <div class="sidebar-block">
          <h3 class="sidebar-title">
            <Code2 size={14} />
            {$language === 'EN' ? 'Skills & Tools' : 'Keahlian & Alat'}
          </h3>
          <div class="skills-sidebar-list">
            {#each currentSkills as group, idx}
              <div class="skill-sidebar-group">
                <h4 class="skill-sidebar-category">
                  <span class="skill-icon">{group.icon}</span>
                  {group.category}
                </h4>
                <div class="skill-tags">
                  {#each group.items as item}
                    <span class="skill-tag color-{idx}">{item}</span>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Quick Contacts -->
        <div class="sidebar-block info-block">
          <h3 class="sidebar-title">
            <span>✉️</span>
            {$language === 'EN' ? 'Quick Contact' : 'Hubungi Cepat'}
          </h3>
          <div class="quick-links">
            <a href="mailto:hello@aryaaji.com" class="quick-link-item">
              <Mail size={14} />
              <span>hello@aryaaji.com</span>
            </a>
            <a href="https://github.com/arya-aji" target="_blank" rel="noopener noreferrer" class="quick-link-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span>github.com/arya-aji</span>
            </a>
            <a href="https://linkedin.com/in/arya-aji-kusuma" target="_blank" rel="noopener noreferrer" class="quick-link-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span>linkedin.com/in/arya-aji-kusuma</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</main>

<style>
  .page-main {
    min-height: calc(100vh - 64px);
    padding: 48px 0 80px;
  }

  .container {
    max-width: 1100px;
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

  /* ── Layout Grid ── */
  .resume-grid {
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    gap: 48px;
    align-items: start;
  }

  .resume-left-col {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .resume-right-col {
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: sticky;
    top: 90px;
  }

  .resume-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .section-heading {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--ctp-surface0);
    color: var(--ctp-subtext0);
  }

  .section-heading-emoji {
    font-size: 0.95rem;
  }

  .section-heading h2 {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--ctp-subtext0);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-family: 'JetBrains Mono', monospace;
  }

  /* ── Summary & Cards ── */
  .summary-card {
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 14px;
    padding: 24px;
    line-height: 1.7;
    font-size: 0.95rem;
    color: var(--ctp-subtext1);
  }

  .exp-card,
  .edu-card {
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 14px;
    padding: 24px;
    transition: border-color 0.2s, transform 0.2s;
  }

  .exp-card:hover,
  .edu-card:hover {
    border-color: color-mix(in srgb, var(--accent) 30%, var(--ctp-surface0));
    transform: translateY(-2px);
  }

  .exp-header,
  .edu-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 18px;
  }

  .exp-role {
    font-size: 1.1rem;
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
    margin-top: 8px;
    line-height: 1.6;
  }

  .exp-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
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
    font-size: 0.7rem;
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
    gap: 10px;
  }

  .exp-bullets li {
    font-size: 0.9rem;
    color: var(--ctp-subtext1);
    line-height: 1.7;
    padding-left: 20px;
    position: relative;
  }

  .exp-bullets li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-size: 0.7rem;
    top: 0.35em;
  }

  /* ── Experience & Education Timeline ── */
  .timeline {
    position: relative;
    padding-left: 24px;
    border-left: 2px solid var(--ctp-surface0);
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .timeline-item {
    position: relative;
  }

  .timeline-dot {
    position: absolute;
    left: -30px;
    top: 26px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--accent);
    border: 2px solid var(--ctp-base);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .timeline-item:hover .timeline-dot {
    transform: scale(1.4);
    box-shadow: 0 0 8px var(--accent);
  }

  /* ── Sidebar blocks ── */
  .sidebar-block {
    background: var(--ctp-mantle);
    border: 1px solid var(--ctp-surface0);
    border-radius: 14px;
    padding: 24px;
    transition: border-color 0.2s ease;
  }

  .sidebar-block:hover {
    border-color: color-mix(in srgb, var(--accent) 20%, var(--ctp-surface0));
  }

  .sidebar-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--ctp-subtext0);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: 'JetBrains Mono', monospace;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--ctp-surface0);
    padding-bottom: 10px;
  }

  /* ── Download CTA ── */
  .download-block {
    background: transparent;
    border: none;
    padding: 0;
  }

  .download-resume-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 14px;
    border-radius: 10px;
    background: var(--accent);
    color: var(--ctp-base);
    font-weight: 700;
    font-size: 0.9rem;
    text-decoration: none;
    transition: transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 12px color-mix(in srgb, var(--accent) 20%, transparent);
  }

  .download-resume-btn:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
    box-shadow: 0 6px 16px color-mix(in srgb, var(--accent) 35%, transparent);
  }

  .download-icon {
    transition: transform 0.2s ease;
  }

  .download-resume-btn:hover .download-icon {
    transform: translateY(1px);
  }

  /* ── Skills in Sidebar ── */
  .skills-sidebar-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .skill-sidebar-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .skill-sidebar-category {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--ctp-text);
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
    font-weight: 600;
    font-family: 'JetBrains Mono', monospace;
  }

  .skill-tag.color-0 {
    background: color-mix(in srgb, var(--ctp-lavender) 8%, var(--ctp-base));
    border: 1px solid color-mix(in srgb, var(--ctp-lavender) 25%, transparent);
    color: var(--ctp-lavender);
  }

  .skill-tag.color-1 {
    background: color-mix(in srgb, var(--ctp-green) 8%, var(--ctp-base));
    border: 1px solid color-mix(in srgb, var(--ctp-green) 25%, transparent);
    color: var(--ctp-green);
  }

  .skill-tag.color-2 {
    background: color-mix(in srgb, var(--ctp-peach) 8%, var(--ctp-base));
    border: 1px solid color-mix(in srgb, var(--ctp-peach) 25%, transparent);
    color: var(--ctp-peach);
  }

  .skill-tag.color-3 {
    background: color-mix(in srgb, var(--ctp-sapphire) 8%, var(--ctp-base));
    border: 1px solid color-mix(in srgb, var(--ctp-sapphire) 25%, transparent);
    color: var(--ctp-sapphire);
  }

  /* ── Quick Contacts ── */
  .quick-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .quick-link-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.82rem;
    color: var(--ctp-subtext1);
    text-decoration: none;
    font-family: 'JetBrains Mono', monospace;
    transition: color 0.2s ease;
  }

  .quick-link-item:hover {
    color: var(--accent);
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .resume-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .resume-right-col {
      position: static;
    }
  }

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
      gap: 12px;
    }

    .exp-right {
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px;
    }

    .name {
      font-size: 1.9rem;
    }
  }
</style>
