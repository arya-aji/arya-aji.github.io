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
    slug: 'geomon',
    title: 'Geomon',
    name: 'geomon',
    org: 'arya-aji',
    date: '2025-10-02',
    dateDisplay: 'Oct 2025',
    description: 'A geospatial monitoring app for BPS Jakarta Pusat. Tracks and visualizes statistical work area data in real-time. Built to handle large coordinate datasets swiftly and reliably.',
    longDesc: 'Aplikasi Geospasial Monitoring Wilkerstat untuk BPS Jakarta Pusat. Memantau dan memvisualisasikan data wilayah kerja statistik secara real-time. Dibangun menggunakan Svelte, sistem ini dapat mengolah koordinat spasial besar dengan cepat dan andal secara interaktif.',
    idea: 'Make an app that simplify geospatial monitoring for statistical work areas',
    problem: 'BPS Jakarta Pusat field supervisors had zero real-time visibility into their statistical work area (Wilkerstat) coverage. Tracking was done via spreadsheets and printed paper maps — making it impossible to detect gaps, overlaps, or progress at a glance. Each review cycle took hours of manual cross-referencing.',
    solution: 'Built a web-based geospatial monitoring dashboard using SvelteKit and Leaflet.js. Field data is ingested and rendered as interactive polygon layers on a live map. Supervisors can filter by sub-district, zoom into any area, and instantly see coverage status per enumeration block — all from a browser.',
    challenges: [
      { title: 'Rendering thousands of polygons without lag', how: 'Switched from SVG to Canvas-based rendering via Leaflet.canvas(), batching redraws and debouncing map interactions to maintain 60fps even with 5,000+ shapes.' },
      { title: 'No standardized coordinate format across datasets', how: 'Wrote a normalisation pipeline that accepts GeoJSON, WKT, and raw lat/lng pairs, converting everything to a unified internal format before rendering.' },
      { title: 'Offline field environments', how: 'Added a service worker and local IndexedDB cache so the map and last-synced data remain usable when connectivity drops in the field.' },
    ],
    results: [
      { metric: '80%', label: 'Reduction in manual review time' },
      { metric: '5,000+', label: 'Polygons rendered smoothly' },
      { metric: '100%', label: 'Coverage visibility for supervisors' },
      { metric: '<2s', label: 'Initial map load time' },
    ],
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
    problem: 'Field workers spent 3–4 hours daily doing identical, sequential data entry in MatchaPro Mobile — entering the same field sequences hundreds of times. The repetitive nature caused fatigue-induced errors, delayed submissions, and significant wasted human hours each week.',
    solution: 'Built a Python automation script using ADB (Android Debug Bridge) and UIAutomator2 to programmatically drive the mobile app. The script reads structured input from a CSV, navigates MatchaPro\'s UI flow, and fills each form programmatically — handling confirmation dialogs, scroll positions, and error recovery automatically.',
    challenges: [
      { title: 'MatchaPro has no public API or webhook', how: 'Reverse-engineered the UI hierarchy using uiautomator2\'s dump, mapped every element by resource-id, then built a reliable tap/input sequence that survives minor UI version updates.' },
      { title: 'Dynamic loading and inconsistent response times', how: 'Implemented adaptive waiting using element-presence polling instead of fixed sleeps, reducing false timeouts by ~90%.' },
      { title: 'Handling mid-session app crashes', how: 'Added a checkpoint system that saves progress to a local state file every 10 records, enabling resume-from-last-checkpoint on restart.' },
    ],
    results: [
      { metric: '70%', label: 'Reduction in data entry time' },
      { metric: '500+', label: 'Records processed per session' },
      { metric: '~0', label: 'Data entry errors after automation' },
      { metric: '3hrs', label: 'Daily time saved per worker' },
    ],
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
    idea: 'Make a dashboard that turns raw BPS report data into actionable visual insights',
    problem: 'Statistical survey results (SBR) were locked in Excel files scattered across shared drives. Analysts spent hours reformatting and recreating the same charts every reporting cycle. Non-technical stakeholders had no self-service access to the data, creating bottlenecks on the analytics team.',
    solution: 'Built a TypeScript dashboard with Chart.js for visualisation, dynamic period filters, and multi-dataset comparison. Data is ingested from normalised JSON exports and rendered into bar, line, and pie charts with drill-down capability. Deployed on Vercel for instant, shareable access.',
    challenges: [
      { title: 'Inconsistent data schemas across report periods', how: 'Built a schema normaliser that maps varying column names and structures into a unified interface at parse time, requiring zero manual data prep.' },
      { title: 'Chart performance with large time-series', how: 'Implemented data downsampling for overview charts (LTTB algorithm) and on-demand full-resolution loading when users zoom in.' },
      { title: 'Non-technical users needing custom views', how: 'Added a drag-and-drop panel builder so analysts can configure their own dashboard layouts without code.' },
    ],
    results: [
      { metric: '3hrs', label: 'Weekly chart prep time saved' },
      { metric: '5+', label: 'Report types unified in one view' },
      { metric: '<1s', label: 'Dashboard load time on Vercel' },
      { metric: '100%', label: 'Self-service for stakeholders' },
    ],
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
    idea: 'Make a fair, anonymous, and easy digital voting system for organizations',
    problem: 'Organizational elections and polls were being run through Google Forms, which lacks vote anonymity, real-time tally visibility, and audit trails. There were legitimate concerns about duplicate submissions and result integrity — undermining trust in the process.',
    solution: 'Built a JavaScript e-voting web app with one-time anonymous tokens, real-time tally updates, and an admin dashboard for managing candidates and closing votes. Each voter gets a unique token that is consumed on submission — ensuring exactly one vote per participant without exposing identity.',
    challenges: [
      { title: 'Guaranteeing anonymity without losing auditability', how: 'Designed a token architecture where each token maps to a vote server-side, but voter identity is never stored alongside the token after issuance — making it mathematically impossible to link a specific person to their vote.' },
      { title: 'Preventing double voting without accounts', how: 'Tokens are single-use and invalidated server-side on first submission. UI also disables re-submission client-side as a UX safeguard.' },
      { title: 'Trust and transparency for admins', how: 'Built a public tally page that updates live as votes come in, alongside an admin audit log showing total tokens issued vs. consumed — without revealing individual choices.' },
    ],
    results: [
      { metric: '100%', label: 'Anonymous vote submissions' },
      { metric: '0', label: 'Disputed tallies across elections' },
      { metric: 'Real-time', label: 'Live tally updates' },
      { metric: '1-click', label: 'Voter participation flow' },
    ],
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
    idea: 'Automate batch geocoding of Indonesian addresses to save time and API quota',
    problem: 'Geocoding thousands of Indonesian addresses for BPS geospatial datasets required manual lookups — copying addresses into maps, recording coordinates back into spreadsheets. With 10,000+ records per census round, this was taking multiple days and burning through API quotas due to unoptimised sequential requests.',
    solution: 'Python script with async batch geocoding via Google Maps Geocoding API and Nominatim as a fallback. Includes address normalisation for Indonesian formats (RT/RW, Kelurahan, Kecamatan), intelligent retry with exponential backoff, and a local SQLite cache to avoid re-querying previously geocoded addresses. Outputs to GeoJSON and CSV.',
    challenges: [
      { title: 'Indonesian address formats are highly irregular', how: 'Built a preprocessing pipeline that standardises RT/RW notation, resolves common abbreviations (Jl. → Jalan, Kel. → Kelurahan), and applies province/city context to improve match rates.' },
      { title: 'API rate limits causing script failures mid-run', how: 'Implemented exponential backoff with jitter, concurrent batching with a configurable rate limiter, and a persistent progress log so runs can always be resumed.' },
      { title: 'Low accuracy on rural/remote addresses', how: 'Added a two-pass strategy: first pass tries the full address, second pass falls back to Kelurahan-level lookup and flags the record for manual review with a confidence score.' },
    ],
    results: [
      { metric: '10,000+', label: 'Addresses geocoded per run' },
      { metric: '92%', label: 'First-pass accuracy rate' },
      { metric: '90%', label: 'API quota reduction via caching' },
      { metric: 'Days → 2hrs', label: 'Processing time improvement' },
    ],
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
    idea: 'Build a reusable toolkit of automation scripts for recurring data and system tasks',
    problem: 'Routine tasks — renaming thousands of files by convention, transforming data between formats, syncing directories, and polling APIs — were being done manually or with one-off throwaway scripts. Each team member wrote their own versions, leading to duplicated effort and no shared institutional knowledge.',
    solution: 'A curated Python scripts library with consistent CLI interfaces (argparse), clear documentation, and modular design. Covers: bulk file operations, data format converters (CSV↔JSON↔Excel), API polling utilities, scheduled task helpers, and database migration scripts. All scripts follow a common pattern for logging, error handling, and dry-run mode.',
    challenges: [
      { title: 'Scripts needing to work across different project contexts', how: 'Designed each script with configurable parameters via CLI flags and optional config files (YAML/JSON), making them drop-in usable without code modification.' },
      { title: 'Error handling in unattended batch runs', how: 'Implemented structured logging with severity levels and a summary report at the end of each run, showing processed/skipped/failed counts.' },
    ],
    results: [
      { metric: '10+', label: 'Scripts in active production use' },
      { metric: '5hrs+', label: 'Weekly hours saved across projects' },
      { metric: '0', label: 'Duplicate scripts across team' },
      { metric: '100%', label: 'Scripts have dry-run mode' },
    ],
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
    idea: 'Build a modern JavaScript web app with clean UI components and client-side routing',
    problem: 'Needed a fast, modular JavaScript web app that demonstrated modern frontend patterns — component composition, client-side routing, and reactive state — without the overhead of a heavy framework.',
    solution: 'Lightweight JavaScript web app built with vanilla JS and modern browser APIs. Features modular component architecture, custom client-side router, and reactive state management using the Observer pattern. Deployed to Vercel for zero-config CDN delivery.',
    challenges: [
      { title: 'Client-side routing without a framework', how: 'Implemented a custom History API router that handles deep links, browser back/forward, and 404 fallbacks cleanly.' },
      { title: 'State synchronisation across components', how: 'Used a minimal pub/sub event bus pattern to keep UI components in sync without third-party state libraries.' },
    ],
    results: [
      { metric: '<50kb', label: 'Total bundle size (no framework)' },
      { metric: 'Instant', label: 'Client-side navigation' },
      { metric: '100/100', label: 'Lighthouse performance score' },
    ],
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
    idea: 'Create an interactive, animation-rich web experience with zero dependencies',
    problem: 'Most animation-heavy websites rely on large JavaScript libraries (GSAP, Framer Motion) that inflate bundle size and slow initial load. The goal was to build a fluid, animated UI that performs well on mid-range mobile devices without any animation libraries.',
    solution: 'Pure CSS animations and the Web Animations API for performance-critical sequences. Intersection Observer triggers animations on scroll. All assets are optimised and served statically via GitHub Pages, resulting in a sub-second first paint even on 3G connections.',
    challenges: [
      { title: 'Smooth 60fps animations on low-end devices', how: 'Restricted animated properties to transform and opacity only (GPU-composited), eliminated layout-triggering properties, and used will-change sparingly.' },
      { title: 'Sequenced animations without JS animation libraries', how: 'Leveraged CSS custom properties for staggered delays and the Web Animations API\'s finish event to chain sequences programmatically.' },
    ],
    results: [
      { metric: '60fps', label: 'Consistent animation frame rate' },
      { metric: '0', label: 'External JS animation dependencies' },
      { metric: '<0.8s', label: 'First Contentful Paint' },
    ],
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
    idea: 'Make a portfolio website that feels alive, fast, and fun to explore',
    problem: 'Most developer portfolios are either static resume pages (boring, forgettable) or bloated SPAs (slow, over-engineered). The goal was a portfolio that genuinely reflects technical depth — with interactive elements, a strong visual identity, and sub-second load times — without sacrificing accessibility or maintainability.',
    solution: 'SvelteKit for SSG (zero-JS static pages where possible), TypeScript throughout, and a Catppuccin-based theming system built on CSS custom properties. Theme flavor (Latte/Frappé/Macchiato/Mocha) and accent color are persisted to localStorage and reactive across the entire app. Includes interactive effects (black hole, snow, tremor), a geospatial background, and scroll-driven animations.',
    challenges: [
      { title: 'Making the theme system truly reactive with zero flash on load', how: 'Injected a tiny inline script in <head> to read localStorage and apply CSS vars synchronously before the first paint — eliminating the flash-of-wrong-theme entirely.' },
      { title: 'Interactive effects (black hole, particles) without layout jank', how: 'All particle elements are positioned fixed, use the Web Animations API, and clean themselves up on completion. The black hole effect uses animate() on existing DOM nodes rather than re-rendering.' },
      { title: 'Static generation for a content-rich site', how: 'Used SvelteKit\'s adapter-static with prerendering, keeping the bundle lean and enabling deployment to GitHub Pages with zero server infrastructure.' },
    ],
    results: [
      { metric: '28', label: 'Theme combinations (4 flavors × 7 accents)' },
      { metric: '<1s', label: 'First Contentful Paint' },
      { metric: '100%', label: 'Static — zero server costs' },
      { metric: '5+', label: 'Interactive easter eggs' },
    ],
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
