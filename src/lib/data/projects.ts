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
    name: "blur-your-whatsapp",
    org: "arya-aji",
    date: "2024-02",
    dateDisplay: "Feb 2024",
    description: "Ekstensi browser Chrome untuk menyamarkan pesan dan kontak WhatsApp Web demi menjaga privasi di ruang publik.",
    longDesc: "Privacy-focused Chrome extension to blur sensitive WhatsApp Web chat details, contact names, and media previews.",
    problem: "Privasi chat WhatsApp Web sering terekspos saat bekerja di kafe, kantor, atau ruang publik terbuka.",
    solution: "Membuat ekstensi browser Manifest V3 yang otomatis mengaburkan pesan, foto profil, dan preview media dengan toggle cepat.",
    results: [
      { metric: "100%", label: "Privacy Protection" },
      { metric: "Fast", label: "Zero Latency" }
    ],
    tags: ["Chrome Extension", "JavaScript", "CSS", "Manifest V3"],
    category: "extension",
    live: "https://extension.aryaaji.com",
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
    const data = await res.json();
    return data.map((p: any) => ({
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
  } catch (err) {
    console.error("Error fetching projects from API, falling back to static projects list:", err);
    return projects;
  }
}

export { tagColors } from "$lib/data/colors";

