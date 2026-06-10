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
  logo?: string;
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
    description: "A browser extension that enables YouTube and other video platforms to launch in Picture-in-Picture mode with a single click.",
    longDesc: "MiniTube PiP is a lightweight browser extension that forces video elements into Picture-in-Picture mode, enabling users to watch videos while multitasking. It bypasses custom player blocks and integrates seamlessly with popular video sites.",
    tags: ["javascript", "extension", "productivity", "video", "web"],
    featured: true,
    visible: true,
    category: "extension",
    stars: 0,
    contributors: 0,
    live: "https://extension.aryaaji.com/minitube",
    github: "https://github.com/arya-aji/minitube-pip",
    image: "https://wffdsuclzqpefdntiqcr.supabase.co/storage/v1/object/public/assets/screenshot_1_one_click_pip__1__1780824382066.png",
    logo: "https://wffdsuclzqpefdntiqcr.supabase.co/storage/v1/object/public/assets/logo-minitube-pip_1780834815214.png",
    challenges: [],
    results: []
  },
  {
    slug: "skui",
    title: "Siap Kuliah UI (SKUI)",
    name: "skui",
    org: "arya-aji",
    date: "2026-05-28",
    dateDisplay: "May 2026",
    description: "A premium, mobile-first simulation tryout platform for SIMAK UI Pascasarjana and undergraduate entry exams, featuring active timer tracking, in-depth explanation keys, and automated question seeding.",
    longDesc: "Siap Kuliah UI (SKUI) is a high-performance preparation SaaS designed for SIMAK UI and UTBK aspirants. Replicating real-world exam conditions, the platform features a strict mobile-first test taking flow, live timer tracking, doubt flag markings, and automated autosave. Candidates receive immediate diagnostic analytics and comprehensive answer explanations. The backend integrates Better-Auth, Prisma, and PostgreSQL with a programmatic question seeder and secure Midtrans payments.",
    idea: "Mobile-first mock exam simulation and automated high-quality question generators for SIMAK UI and UTBK.",
    problem: "Aspirants struggle to access high-quality, mobile-friendly simulator engines matching real SIMAK UI constraints, while admins spend immense effort seeding realistic question banks manually.",
    solution: "Built a robust SaaS simulator using Next.js, Prisma, and PostgreSQL. Integrated an LLM seeder to automatically draft complete 140-question exam packs, and implemented secure local payment flows using the Midtrans Snap SDK.",
    goal: "To empower students with a seamless, highly realistic prep engine while giving admins robust tools to generate, customize, and monetize premium test material.",
    tags: ["nextjs", "typescript", "prisma", "postgresql", "better-auth", "midtrans", "llm"],
    featured: true,
    visible: true,
    category: "fullstack",
    stars: 0,
    contributors: 0,
    live: "https://tryout.aryaaji.com",
    image: "https://wffdsuclzqpefdntiqcr.supabase.co/storage/v1/object/public/assets/hero__1__1780828583702.webp",
    logo: "https://wffdsuclzqpefdntiqcr.supabase.co/storage/v1/object/public/assets/logo-skui_1780887132042.png",
    challenges: [],
    results: []
  },
  {
    slug: "blur-your-whatsapp",
    title: "Blur Your WhatsApp",
    name: "blur-your-whatsapp",
    org: "arya-aji",
    date: "2024-03-01",
    dateDisplay: "Mar 2024",
    description: "A lightweight browser extension that blurs WhatsApp Web chat previews and contact names for privacy when sharing your screen.",
    longDesc: "Blur Your WhatsApp is a browser extension that adds a privacy layer to WhatsApp Web by blurring chat list previews, contact names, and message snippets. Designed for people who share their screen during meetings or work in public spaces, it activates with a single click and can be toggled on or off instantly without refreshing the page.",
    tags: ["javascript", "extension", "privacy", "productivity", "web"],
    featured: false,
    visible: true,
    category: "extension",
    stars: 0,
    contributors: 0,
    live: "https://extension.aryaaji.com",
    github: "https://github.com/arya-aji/blur-your-whatsapp",
    image: "https://wffdsuclzqpefdntiqcr.supabase.co/storage/v1/object/public/assets/unnamed_1780828301993.png",
    logo: "https://wffdsuclzqpefdntiqcr.supabase.co/storage/v1/object/public/assets/logo-blur-your-whatsapp_1780887167751.png",
    challenges: [],
    results: []
  }
];

export const projects = allProjects;

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
      image: p.banner || p.gif || p.thumbnailUrl || "/placeholder.jpg",
      logo: p.thumbnailUrl || "",
      live: p.demoUrl || undefined,
      github: p.githubUrl || undefined,
      visible: true,
      category: p.category === "portfolio" ? "fullstack" : p.category
    }));
  } catch (err) {
    console.error("Error fetching projects from API, falling back to static projects list:", err);
    return projects;
  }
}

export { tagColors } from "$lib/data/colors";
