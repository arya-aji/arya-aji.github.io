import { writable } from 'svelte/store';

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
  logo?: string;
  banner?: string;
  gif?: string;
  category: "extension" | "fullstack" | "dashboard" | "automation";
}

export const allProjects: Project[] = [
  {
    slug: "skui",
    title: "Siap Kuliah UI (SKUI)",
    name: "skui",
    org: "arya-aji",
    date: "2024-05",
    dateDisplay: "May 2024",
    description: "Platform simulasi ujian mobile-first untuk calon mahasiswa SIMAK UI dengan timer dinamis dan automated billing.",
    longDesc: "A mobile-first SaaS exam simulator for SIMAK UI aspirants with dynamic time tracking and automated Midtrans payment checkout.",
    problem: "Calon mahasiswa kesulitan latihan simulasi ujian dengan batas waktu ketat dan format penilaian yang menyerupai ujian aslinya.",
    solution: "Membangun platform SaaS mobile-first dengan timer dinamis, mesin seeding soal otomatis, dan integrasi Midtrans API.",
    results: [
      { metric: "1,000+", label: "Active Users" },
      { metric: "100%", label: "Automated Billing" }
    ],
    tags: ["Next.js", "FastAPI", "PostgreSQL", "TailwindCSS", "Midtrans"],
    category: "fullstack",
    live: "https://tryout.aryaaji.com",
    github: "https://github.com/arya-aji",
    featured: true,
    visible: true,
    image: "/skui.png"
  },
  {
    slug: "blur-your-whatsapp",
    title: "Blur Your WhatsApp",
    name: "Blur Your WhatsApp",
    org: "arya-aji",
    date: "2024-03",
    dateDisplay: "Mar 2024",
    description: "A lightweight browser extension that blurs WhatsApp Web chat previews and contact names for privacy when sharing your screen.",
    longDesc: "A lightweight browser extension that blurs WhatsApp Web chat previews and contact names for privacy when sharing your screen.",
    problem: "Sharing your screen or working in public spaces exposes private WhatsApp Web chats, contact names, and media previews.",
    solution: "Built a Manifest V3 Chrome extension that instantly applies CSS blur filters across sensitive elements with zero performance overhead.",
    results: [
      { metric: "100%", label: "Privacy Protection" },
      { metric: "0ms", label: "Zero Latency" }
    ],
    tags: ["javascript", "extension", "privacy", "productivity", "web"],
    category: "extension",
    live: "https://chromewebstore.google.com/detail/blur-your-whatsapp/knhgdpafncoifgmbcfkclhglcifjhpmc",
    github: "https://github.com/arya-aji/blur-your-whatsapp",
    featured: true,
    visible: true,
    image: "/blur-wa.png"
  }
];

export const projects = allProjects;

export const projectsCache = writable<Project[]>([]);

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
    const apiData = await res.json();
    const mapped = apiData.map((p: any) => ({
      ...p,
      image: p.banner || p.gif || p.thumbnailUrl || p.image || "/placeholder.jpg",
      logo: p.thumbnailUrl || p.logo || "",
      live: p.demoUrl || p.live || undefined,
      github: p.githubUrl || p.github || (p.slug ? `https://github.com/arya-aji/${p.slug}` : undefined),
      problem: p.problem || undefined,
      solution: p.solution || undefined,
      results: p.results || undefined,
      visible: true,
      category: p.category === "portfolio" ? "fullstack" : p.category
    }));

    // Merge API data with local projects (avoid duplicate slugs)
    const localSlugs = new Set(projects.map(p => p.slug));
    const uniqueApi = mapped.filter((p: any) => !localSlugs.has(p.slug));
    return [...projects, ...uniqueApi];
  } catch (err) {
    console.error("Error fetching projects from API, falling back to static projects list:", err);
    return projects;
  }
}

export { tagColors } from "$lib/data/colors";

