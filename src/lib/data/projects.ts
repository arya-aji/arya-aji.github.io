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

export const allProjects: Project[] = [];

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

