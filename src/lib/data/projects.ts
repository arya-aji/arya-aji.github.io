import { externalLinks } from "$lib/data/externalLinks";

export interface Challenge {
  title: string;
  how: string;
}

export interface ResultStat {
  metric: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  name: string;
  org: string;
  date: string;
  dateDisplay: string;
  description: string;
  longDesc?: string;
  idea?: string;
  problem?: string;
  solution?: string;
  goal?: string;
  privacyPolicy?: string;
  challenges?: Challenge[];
  results?: ResultStat[];
  tags: string[];
  stars?: number;
  contributors?: number;
  href?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  visible?: boolean;
  image?: string;
  banner?: string;
  gif?: string;
  category: "extension" | "fullstack" | "dashboard" | "automation";
}

export const allProjects: Project[] = [
  {
    slug: "minitube-pip",
    title: "MiniTube PiP",
    name: "minitube-pip",
    org: "arya-aji",
    date: "2026-06-05",
    dateDisplay: "Jun 2026",
    description:
      "A browser extension that enables YouTube and other video platforms to launch in Picture-in-Picture mode with a single click.",
    longDesc:
      "MiniTube PiP is a lightweight browser extension that forces video elements into Picture-in-Picture mode, enabling users to watch videos while multitasking. It bypasses custom player blocks and integrates seamlessly with popular video sites.",
    idea: "One-click Picture-in-Picture mode for YouTube and other video elements.",
    problem:
      "Users want to browse other sites or work while watching YouTube videos, but the native Picture-in-Picture option is often buried in submenus or blocked by custom players.",
    solution:
      "Built a browser extension that programmatically requests Picture-in-Picture for video players with a simple toolbar trigger or hotkey.",
    goal: "To provide a seamless, hassle-free Picture-in-Picture multitasking experience across all video platforms.",
    tags: ["javascript", "extension", "productivity", "video", "web"],
    github: "https://github.com/arya-aji/minitube-pip",
    live: "https://extension.aryaaji.com/minitube",
    featured: true,
    visible: true,
    category: "extension",
  },
  {
    slug: "skui",
    title: "Siap Kuliah UI (SKUI)",
    name: "skui",
    org: "arya-aji",
    date: "2026-05-28",
    dateDisplay: "May 2026",
    description:
      "A premium, mobile-first simulation tryout platform for SIMAK UI Pascasarjana and undergraduate entry exams, featuring active timer tracking, in-depth explanation keys, and automated question seeding.",
    longDesc:
      "Siap Kuliah UI (SKUI) is a high-performance preparation SaaS designed for SIMAK UI and UTBK aspirants. Replicating real-world exam conditions, the platform features a strict mobile-first test taking flow, live timer tracking, doubt flag markings, and automated autosave. Candidates receive immediate diagnostic analytics and comprehensive answer explanations. The backend integrates Better-Auth, Prisma, and PostgreSQL with a programmatic question seeder and secure Midtrans payments.",
    idea: "Mobile-first mock exam simulation and automated high-quality question generators for SIMAK UI and UTBK.",
    problem:
      "Aspirants struggle to access high-quality, mobile-friendly simulator engines matching real SIMAK UI constraints, while admins spend immense effort seeding realistic question banks manually.",
    solution:
      "Built a robust SaaS simulator using Next.js, Prisma, and PostgreSQL. Integrated an LLM seeder to automatically draft complete 140-question exam packs, and implemented secure local payment flows using the Midtrans Snap SDK.",
    goal: "To empower students with a seamless, highly realistic prep engine while giving admins robust tools to generate, customize, and monetize premium test material.",
    tags: ["nextjs", "typescript", "prisma", "postgresql", "better-auth", "midtrans", "llm"],
    live: "https://tryout.aryaaji.com",
    image: "/assets/simakui.webp",
    banner: "/assets/simakui.webp",
    gif: "/assets/simakui.webp",
    featured: true,
    visible: true,
    category: "fullstack",
  },
  {
    slug: "geomon",
    title: "Geomon",
    name: "geomon",
    org: "arya-aji",
    date: "2024-08-01",
    dateDisplay: "Aug 2024",
    description:
      "A geospatial monitoring web application built for BPS Jakarta Pusat to track and visualize field survey activities across districts in real time.",
    longDesc:
      "Geomon is a full-stack geospatial monitoring platform developed for BPS (Badan Pusat Statistik) Jakarta Pusat. The application enables supervisors to monitor field enumerator positions, track survey completion rates per district, and visualize geographic data through an interactive map interface. Built with a Python FastAPI backend and a Svelte frontend, it integrates Leaflet for map rendering and PostgreSQL for spatial data storage.",
    idea: "Real-time geospatial monitoring of BPS field survey activities to improve efficiency and oversight.",
    problem:
      "BPS Jakarta Pusat supervisors had no centralized tool to monitor field enumerator progress, leading to delayed reporting and difficulty identifying coverage gaps across districts.",
    solution:
      "Developed a full-stack web app with interactive Leaflet maps, enumerator tracking, and district-level progress dashboards. Deployed within the BPS internal network for secure access.",
    goal: "To give BPS supervisors real-time visibility into field operations and geographic survey coverage.",
    tags: ["python", "fastapi", "svelte", "geospasial", "bps", "dashboard"],
    live: "https://geomon.vercel.app",
    featured: false,
    visible: true,
    category: "dashboard",
  },
  {
    slug: "sbr-dashboard",
    title: "SBR Dashboard",
    name: "sbr-dashboard",
    org: "arya-aji",
    date: "2023-11-01",
    dateDisplay: "Nov 2023",
    description:
      "A data visualization dashboard for analyzing and presenting statistical survey results with interactive charts, filters, and exportable reports.",
    longDesc:
      "SBR Dashboard is a data visualization web application designed to transform raw statistical survey data into actionable insights. The dashboard features interactive charts, cross-tabulation tools, dynamic filtering by demographic variables, and PDF/Excel export capabilities. Built to support analyst workflows within a government statistical environment.",
    idea: "Turn raw survey tabulations into interactive, shareable visual reports for statistical analysts.",
    problem:
      "Analysts spent hours manually creating charts and tables in spreadsheet software — a repetitive process with inconsistent formatting and no interactivity.",
    solution:
      "Built a web-based dashboard with dynamic chart generation, customizable filters, and one-click report exports. Integrated directly with the existing data pipeline.",
    goal: "To streamline the reporting workflow for statistical analysts and improve data communication quality.",
    tags: ["python", "javascript", "data-viz", "dashboard", "analytics", "automation"],
    live: "https://sbr-dashboard.vercel.app",
    featured: false,
    visible: true,
    category: "dashboard",
  },
  {
    slug: "blur-your-whatsapp",
    title: "Blur Your WhatsApp",
    name: "blur-your-whatsapp",
    org: "arya-aji",
    date: "2024-03-01",
    dateDisplay: "Mar 2024",
    description:
      "A lightweight browser extension that blurs WhatsApp Web chat previews and contact names for privacy when sharing your screen.",
    longDesc:
      "Blur Your WhatsApp is a browser extension that adds a privacy layer to WhatsApp Web by blurring chat list previews, contact names, and message snippets. Designed for people who share their screen during meetings or work in public spaces, it activates with a single click and can be toggled on or off instantly without refreshing the page.",
    idea: "A one-click privacy toggle for WhatsApp Web to protect sensitive conversations during screen sharing.",
    problem:
      "Professionals sharing screens in meetings or recordings frequently expose private WhatsApp conversations, contact names, and message previews unintentionally.",
    solution:
      "Built a minimal browser extension using vanilla JavaScript and CSS injection that selectively blurs WhatsApp Web UI elements with a toggle — no permissions beyond activeTab required.",
    goal: "To provide a frictionless, install-and-forget privacy tool for WhatsApp Web users who frequently share their screens.",
    tags: ["javascript", "extension", "privacy", "productivity", "web"],
    github: "https://github.com/arya-aji/blur-your-whatsapp",
    live: externalLinks.extensions.url,
    image: "/assets/blur-my-whatsapp.png",
    banner: "/assets/banner-blur-my-whatsapp.png",
    gif: "/assets/banner-blur-my-whatsapp.png",
    featured: false,
    visible: true,
    category: "extension",
  },
  {
    slug: "automation-scripts",
    title: "Automation Scripts",
    name: "automation",
    org: "arya-aji",
    date: "2023-06-01",
    dateDisplay: "Jun 2023",
    description:
      "A collection of Python automation scripts built to eliminate repetitive government data processing tasks — from Excel transformations to scheduled report generation.",
    longDesc:
      "A growing library of Python scripts developed to automate repetitive workflows in a government statistical context. Tasks covered include bulk Excel transformation and cleaning, automated PDF report generation from templates, scheduled data pulls from internal APIs, and batch file management. Each script is documented and parameterized for reuse across different datasets and periods.",
    idea: "Eliminate hours of manual data processing with reusable, well-documented automation scripts.",
    problem:
      "Staff spent significant time on repetitive tasks — merging spreadsheets, reformatting reports, and manually running the same procedures month after month.",
    solution:
      "Wrote modular Python scripts with clear parameters and documentation. Scripts handle data cleaning, transformation, and output generation automatically with minimal input.",
    goal: "To reduce manual effort, minimize human error, and free up analyst time for higher-value work.",
    tags: ["python", "automation", "scripting", "analytics"],
    github: "https://github.com/arya-aji/automation",
    featured: false,
    visible: true,
    category: "automation",
  },
].map((project) => ({
  ...project,
  image: project.image || "/placeholder.jpg",
}));

export const projects = allProjects.filter(p => p.visible === true);

export async function fetchProjects(fetchFn?: typeof fetch): Promise<Project[]> {
  const f = fetchFn || fetch;
  const apiKey = "e40a02c0d8d21c3b8839efcbdecd839ef42c";
  const url = "https://data.aryaaji.com/api/projects";
  try {
    const res = await f(url, {
      headers: {
        "x-api-key": apiKey
      }
    });
    if (!res.ok) throw new Error(`API returned status ${res.status}`);
    const data = await res.json();
    return data.map((p: any) => ({
      ...p,
      image: p.thumbnailUrl || "/placeholder.jpg",
      live: p.demoUrl || undefined,
      github: p.githubUrl || undefined,
      visible: true
    }));
  } catch (err) {
    console.error("Error fetching projects from API, falling back to static projects list:", err);
    return projects;
  }
}

export { tagColors } from "$lib/data/colors";
