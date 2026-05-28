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
  image?: string;
  banner?: string;
  gif?: string;
}

export const projects: Project[] = [
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
  }
].map((project) => ({
  ...project,
  image: project.image || "/placeholder.jpg",
}));

export { tagColors } from "$lib/data/colors";
