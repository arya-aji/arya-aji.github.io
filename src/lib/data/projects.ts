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
    slug: 'geomon',
    title: 'Geomon',
    name: 'geomon',
    org: 'arya-aji',
    date: '2025-10-02',
    dateDisplay: 'Oct 2025',
    description: 'A geospatial monitoring app for BPS Jakarta Pusat. Tracks and visualizes statistical work area data in real-time. Built to handle large coordinate datasets swiftly and reliably.',
    longDesc: 'Aplikasi Geospasial Monitoring Wilkerstat untuk BPS Jakarta Pusat. Memantau dan memvisualisasikan data wilayah kerja statistik secara real-time. Dibangun menggunakan Svelte, sistem ini dapat mengolah koordinat spasial besar dengan cepat dan andal secara interaktif.',
    idea: 'Make an app that simplify geospatial monitoring for statistical work areas',
    stars: 0,
    contributors: 1,
    tags: ['svelte', 'geospasial', 'monitoring', 'bps', 'vercel'],
    href: 'https://github.com/arya-aji/geomon',
    github: 'https://github.com/arya-aji/geomon',
    live: 'https://geomon.vercel.app',
    image: '/placeholder.jpg',
    gif: '/placeholder.jpg',
    featured: true
  },
  {
    slug: 'script-matchapro-mobile',
    title: 'MatchaPro Mobile Script',
    name: 'script-matchapro-mobile',
    org: 'arya-aji',
    date: '2026-01-18',
    dateDisplay: 'Jan 2026',
    description: 'Automation script for MatchaPro Mobile. Built with Python to automate repetitive workflows and data entry processes within the mobile application environment efficiently.',
    longDesc: 'Automation script for MatchaPro Mobile. Built with Python to automate repetitive workflows and data entry processes within the mobile application environment efficiently. Significantly reduces manual work hours.',
    idea: 'Make a script that automate repetitive mobile data entry workflows',
    stars: 0,
    contributors: 1,
    tags: ['python', 'automation', 'mobile', 'scripting'],
    href: 'https://github.com/arya-aji/script-matchapro-mobile',
    github: 'https://github.com/arya-aji/script-matchapro-mobile',
    featured: true
  },
  {
    slug: 'sbr-dashboard',
    title: 'SBR Dashboard',
    name: 'sbr-dashboard',
    org: 'arya-aji',
    date: '2024-07-04',
    dateDisplay: 'Jul 2024',
    description: 'A TypeScript-based data visualization dashboard with a modern and interactive UI. Designed for high-performance chart rendering and intuitive data exploration. Live on Vercel.',
    longDesc: 'Dashboard visualisasi data berbasis TypeScript dengan tampilan modern dan interaktif. Berfungsi untuk menyajikan analitik data dengan chart yang optimal, performa tinggi, dan mudah dinavigasikan oleh pengguna akhir untuk inferensi data yang lebih cerdas.',
    stars: 0,
    contributors: 1,
    tags: ['typescript', 'dashboard', 'data-visualization', 'vercel'],
    href: 'https://github.com/arya-aji/sbr-dashboard',
    github: 'https://github.com/arya-aji/sbr-dashboard',
    live: 'https://sbr-dashboard.vercel.app'
  },
  {
    slug: 'polly-vote',
    title: 'Polly Vote',
    name: 'polly-vote',
    org: 'arya-aji',
    date: '2025-08-13',
    dateDisplay: 'Aug 2025',
    description: 'A secure and easy-to-use web-based e-voting system. Built with JavaScript for digital polling and voting needs, ensuring anonymity and reliable tallying.',
    longDesc: 'A secure and easy-to-use web-based e-voting system. Built with JavaScript for digital polling and voting needs, ensuring anonymity and reliable tallying across organizational implementations.',
    stars: 0,
    contributors: 1,
    tags: ['javascript', 'e-voting', 'web', 'polling'],
    href: 'https://github.com/arya-aji/polly-vote',
    github: 'https://github.com/arya-aji/polly-vote'
  },
  {
    slug: 'geocoding-auto',
    title: 'Geocoding Auto',
    name: 'geocoding_auto',
    org: 'arya-aji',
    date: '2025-12-29',
    dateDisplay: 'Dec 2025',
    description: 'A Python-based geocoding automation tool to batch-convert addresses to geographic coordinates efficiently, minimizing manual lookups and API quota usage.',
    longDesc: 'A Python-based geocoding automation tool designed to batch-convert thousands of text addresses to precise geographic coordinates efficiently, minimizing manual lookups and saving valuable API quota usage during big data workflows.',
    stars: 0,
    contributors: 1,
    tags: ['python', 'geocoding', 'automation', 'geospasial'],
    href: 'https://github.com/arya-aji/geocoding_auto',
    github: 'https://github.com/arya-aji/geocoding_auto'
  },
  {
    slug: 'automation',
    title: 'Automation Scripts',
    name: 'automation',
    org: 'arya-aji',
    date: '2025-06-09',
    dateDisplay: 'Jun 2025',
    description: 'A collection of Python scripts to automate various routine tasks and workflows. Covers use cases from data processing and transformation to filesystem management.',
    longDesc: 'A curated collection of Python scripts written to automate various routine programming tasks and system workflows. Covers intricate use cases ranging from data processing and database transformation to heavy filesystem management.',
    stars: 0,
    contributors: 1,
    tags: ['python', 'automation', 'scripting', 'productivity'],
    href: 'https://github.com/arya-aji/automation',
    github: 'https://github.com/arya-aji/automation'
  },
  {
    slug: 'poly-ind',
    title: 'Poly Ind',
    name: 'poly-ind',
    org: 'arya-aji',
    date: '2025-08-20',
    dateDisplay: 'Aug 2025',
    description: 'A JavaScript web app deployed to Vercel. A web development project demonstrating modern UI components and state management.',
    longDesc: 'A versatile JavaScript web app deployed natively to Vercel. It stands as a web development project actively demonstrating modern user-interface components, client-side routing, and robust frontend state management solutions.',
    stars: 0,
    contributors: 1,
    tags: ['javascript', 'web', 'vercel'],
    href: 'https://github.com/arya-aji/poly-ind',
    github: 'https://github.com/arya-aji/poly-ind'
  },
  {
    slug: 'sanqua',
    title: 'Sanqua',
    name: 'sanqua',
    org: 'arya-aji',
    date: '2025-04-26',
    dateDisplay: 'Apr 2025',
    description: 'A JavaScript web project hosted on GitHub Pages. Displays interactive content and micro-animations accessible directly in the browser.',
    longDesc: 'A creative JavaScript web project successfully hosted on GitHub Pages. The project displays highly interactive layout content and smooth micro-animations that make standard browsing feel robust directly within standard web standards.',
    stars: 0,
    contributors: 1,
    tags: ['javascript', 'web', 'github-pages'],
    href: 'https://github.com/arya-aji/sanqua',
    github: 'https://github.com/arya-aji/sanqua'
  },
  {
    slug: 'web-portfolio',
    title: 'Web Portfolio',
    name: 'web-portfolio',
    org: 'arya-aji',
    date: '2026-04-01',
    dateDisplay: 'Apr 2026',
    description: 'This very portfolio website! Built natively with SvelteKit, TypeScript, and a highly customizable Catppuccin color theme system supporting multiple variants.',
    longDesc: 'The source code powering this exact portfolio website. Engineered natively using modern SvelteKit and TypeScript frameworks. Equipped with a meticulously designed, highly customizable implementation of the Catppuccin color themes natively injected via CSS vars.',
    idea: 'Make a portfolio website that feels alive and fun to explore',
    stars: 0,
    contributors: 1,
    tags: ['svelte', 'sveltekit', 'typescript', 'portfolio', 'catppuccin'],
    href: 'https://github.com/arya-aji',
    github: 'https://github.com/arya-aji/arya-aji.github.io',
    featured: true
  }
].map(project => ({
  ...project,
  image: project.image || '/placeholder.jpg'
}));

export { tagColors } from '$lib/data/colors';
