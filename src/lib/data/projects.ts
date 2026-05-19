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
  gif?: string;
}

export const projects: Project[] = [
  {
    slug: 'blur-your-whatsapp',
    title: 'Blur Your Whatsapp',
    name: 'blur-your-whatsapp',
    org: 'arya-aji',
    date: '2026-05-19',
    dateDisplay: 'May 2026',
    description: 'Chrome extension to maximize WhatsApp privacy in public places. Blurs chats, names, groups, and images. 100% local, no data sent to servers, and completely free.',
    longDesc: 'A Chrome extension designed to maximize WhatsApp Web privacy in public spaces. It enables users to selectively blur chats, names, groups, images, and other sensitive elements. The extension operates 100% locally with absolutely no data transmitted to external servers, ensuring complete security and privacy. And of course, it is completely free.',
    idea: 'Maximize WhatsApp privacy in public places with zero data collection',
    problem: 'Using WhatsApp Web in public spaces exposes personal chats, group names, and sensitive images to shoulder surfers. Existing solutions either require subscriptions or send telemetry data to third-party servers.',
    solution: 'Built a lightweight Chrome extension that injects CSS to selectively blur WhatsApp Web elements (messages, contact names, profile pictures). The blur is removed only on hover. All logic runs locally in the browser with absolutely no external data transmission.',
    tags: ['chrome-extension', 'javascript', 'privacy', 'css'],
    href: 'https://github.com/arya-aji/blur-your-whatsapp',
    github: 'https://github.com/arya-aji/blur-your-whatsapp',
    image: '/blur-wa-1.png',
    gif: '/blur-wa-2.png',
    featured: true
  },

].map(project => ({
  ...project,
  image: project.image || '/placeholder.jpg'
}));

export { tagColors } from '$lib/data/colors';
