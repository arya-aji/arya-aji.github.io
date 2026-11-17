export type WorkKind = 'SaaS product' | 'AI tool' | 'Automation' | 'Internal tools' | 'Browser extension';

export type Work = {
	slug: string;
	title: string;
	kind: WorkKind;
	year: string;
	/** Short line under the title on cards */
	tagline: string;
	/** Status pill on the card thumbnail */
	badge: string;
	summary: string;
	description: string;
	image?: { src: string; alt: string; width: number; height: number };
	stack: string[];
	links: { label: string; href: string }[];
	outcome: string[];
	problem: string;
	approach: string[];
	featured: boolean;
};

// Ordered by focus: full-stack apps, data (BPS), automation, browser extensions.
// Sourced from the READMEs and docs of github.com/arya-aji repositories.
// Private repos and all BPS work get no GitHub link. BPS work is named; never mention the statistical publications.
export const work: Work[] = [
	{
		slug: 'gerbang-dinas',
		title: 'Gerbang Dinas',
		kind: 'SaaS product',
		year: '2026',
		tagline: 'CAT-style tryouts for CPNS, service schools and TKA',
		badge: 'Live',
		summary:
			'A mobile-first tryout platform that copies the real exam screen: server-controlled timer, flag-for-review, autosave, and scores per subtest against the passing grade.',
		description:
			'Gerbang Dinas (gerbangdinas.com), a mobile-first CAT tryout platform for CPNS, service-school and TKA applicants, built with Astro, SvelteKit and Supabase.',
		image: {
			src: '/img/gerbang-dinas.webp',
			alt: 'Gerbang Dinas landing page: “Coba tryout SKD gratis, di layar seperti hari-H” above a participant card to start a free CPNS or Kedinasan tryout.',
			width: 800,
			height: 506
		},
		stack: ['Astro', 'SvelteKit', 'Supabase', 'PostgreSQL', 'Midtrans', 'Cloudflare'],
		links: [{ label: 'Open gerbangdinas.com', href: 'https://gerbangdinas.com' }],
		outcome: [
			'Sized for 1,000 concurrent test-takers',
			'Answer keys never reach the browser',
			'First-year infra budget under Rp1 juta'
		],
		problem:
			'Applicants practise on PDF question banks or apps that look nothing like the real CAT screen, usually on a cheap phone with patchy signal. A lost answer or a timer that resets on reload ruins the whole session.',
		approach: [
			'Three apps over one database: a static Astro landing page on Cloudflare Pages, a SvelteKit tryout app, a SvelteKit admin, and Supabase with row-level security.',
			'The timer runs on the server and every answer autosaves, so a dropped connection or a refresh never costs time or work.',
			'Grading happens server-side with a scorer per question type: right or wrong for TWK and TIU, 1 to 5 per option for TKP, complex multiple choice for TKA.',
			'Exam formats live in a registry, because question counts, durations and passing grades change with each year’s regulation.',
			'AI drafts questions and explanations, but nothing is published until a person reviews it.',
			'Midtrans checkout (QRIS, virtual account, e-wallet) plus teacher classes that only admit whitelisted emails.'
		],
		featured: true
	},
	{
		slug: 'recap-suite',
		title: 'Recap Suite',
		kind: 'AI tool',
		year: '2026',
		tagline: 'Desktop studio that turns comic chapters into narrated recap videos',
		badge: 'Desktop',
		summary:
			'A local-first Electron app: detect and order comic panels, let a vision model describe each scene, write the narration, voice it, and render the video with FFmpeg.',
		description:
			'Recap Suite, a local-first Electron studio that detects comic panels, writes narration with vision AI, generates voice-over and renders recap videos with FFmpeg.',
		stack: ['Electron', 'TypeScript', 'ONNX', 'FFmpeg', 'OpenAI · Gemini · Claude', 'Edge-TTS · Kokoro'],
		links: [],
		outcome: ['Three AI providers, one interface', '16:9 or 9:16, up to 4K', 'API keys encrypted by the OS'],
		problem:
			'Recap creators spend hours per chapter slicing panels, writing narration, recording voice and lining it all up in an editor, and most tools for the job are cloud services that lock their work in.',
		approach: [
			'Webtoon gutter splitting and recursive manga panel detection, with right-to-left or left-to-right ordering and manual crop when detection misses.',
			'Vision adapters for OpenAI, Gemini and Anthropic behind one contract: structured scene analysis, a reusable character cast, narration and per-panel rerun.',
			'Batch text-to-speech through Edge-TTS, a local Kokoro model or OpenAI, with an audio cache so nothing is generated twice.',
			'An FFmpeg compositor for 16:9 or 9:16, 24 to 60 fps, camera motion, background music, subtitles and a CapCut-ready export.',
			'Local-first by design: projects stay on disk, interrupted jobs resume, and keys are stored with the operating system’s safeStorage.'
		],
		featured: true
	},
	{
		slug: 'grambox',
		title: 'Grambox',
		kind: 'SaaS product',
		year: '2026',
		tagline: 'Cached-first JSON API for Instagram profiles, posts and reels',
		badge: 'API',
		summary:
			'A Hono REST API over SQLite and a Python Instaloader service, with scheduled refreshes, a Next.js dashboard, API docs and Lemon Squeezy billing.',
		description:
			'Grambox, a cached-first Instagram profile, posts and reels JSON API built with Hono, SQLite, Drizzle and a Python Instaloader scraper.',
		stack: ['Hono', 'Python', 'SQLite', 'Drizzle', 'Next.js', 'Fumadocs'],
		links: [],
		outcome: ['Repeat calls served from cache', 'API, scraper, dashboard and docs in one monorepo', 'Stores session cookies, never passwords'],
		problem:
			'Developers who need public Instagram data get rate-limited quickly, and scraping it themselves is fragile and slow.',
		approach: [
			'Every response is served from a SQLite cache first; cron jobs refresh profiles in the background.',
			'A separate Python service runs Instaloader with per-account sessions, so the Node API stays fast and simple.',
			'A pnpm monorepo holds the Hono API, the Next.js dashboard and landing page, Fumadocs API reference and shared Drizzle schemas.',
			'Deployed on a single VPS with PM2, with OAuth sign-in and Lemon Squeezy subscriptions.'
		],
		featured: true
	},
	{
		slug: 'cryptospike',
		title: 'CryptoSpike',
		kind: 'SaaS product',
		year: '2026',
		tagline: 'Realtime crypto signals with paper trading up to 500x',
		badge: 'Demo',
		summary:
			'A realtime signals terminal on Supabase with confidence scores and take-profit targets, multi-wallet paper trading, Binance-style leverage and a liquidation engine.',
		description:
			'CryptoSpike, a realtime crypto signals dashboard with paper trading, 1x to 500x leverage simulation and liquidation mechanics, built on React and Supabase Realtime.',
		stack: ['React 19', 'Vite', 'Supabase Realtime', 'Zustand', 'Recharts', 'Tailwind CSS'],
		links: [],
		outcome: ['Leverage simulated from 1x to 500x', 'Auto-trade bot on strong signals', 'Liquidation price math like the real thing'],
		problem: 'Signal channels post calls with no way to test them before risking real money.',
		approach: [
			'Signals stream in through Supabase Realtime with a confidence score, take-profit targets and live P&L.',
			'Several virtual USDT wallets per user, persisted locally with Zustand.',
			'A perpetual-futures simulator with leverage from 1x to 500x, liquidation price calculation and automatic liquidation.',
			'An optional robot opens positions automatically when a signal’s confidence is high enough.'
		],
		featured: false
	},
	{
		slug: 'flashprd',
		title: 'flashPRD',
		kind: 'AI tool',
		year: '2026',
		tagline: 'Turns an app idea into a spec an AI coding assistant can build from',
		badge: 'Prototype',
		summary:
			'A seven-step guided brainstorm that produces a structured PRD plus copy-ready prompts for Claude, ChatGPT and Gemini, exported as Markdown, JSON or a ZIP package.',
		description:
			'flashPRD, a Next.js app that turns an app idea into a structured product requirements document and AI-ready prompts.',
		stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Python'],
		links: [],
		outcome: ['Idea to PRD in minutes', 'Prompts tuned per AI assistant', 'Markdown, JSON or ZIP export'],
		problem:
			'AI coding assistants build the wrong thing when the brief is vague, and writing a proper spec takes longer than people want to spend.',
		approach: [
			'A seven-step questionnaire that collects users, features, data and constraints.',
			'A generator that turns the answers into a structured PRD and task-ready prompts.',
			'A dashboard to keep and revisit every generated spec.'
		],
		featured: false
	},
	{
		slug: 'internal-reporting-tools',
		title: 'In-house reporting tools',
		kind: 'Internal tools',
		year: '2019 to now',
		tagline: 'Web apps and Python jobs that replaced spreadsheet reporting',
		badge: 'BPS',
		summary:
			'Web apps and Python pipelines that replaced spreadsheet-heavy reporting at BPS-Statistics Indonesia, Jakarta Pusat.',
		description:
			'Internal web apps, geospatial dashboards and Python automations at BPS-Statistics Indonesia that made reporting about 40% faster and removed 15+ hours a week of manual data work.',
		stack: ['SvelteKit', 'Next.js', 'FastAPI', 'Python', 'PostgreSQL', 'Prisma', 'Leaflet', 'LLM APIs'],
		links: [],
		outcome: [
			'Reporting about 40% faster',
			'15+ hours a week of manual work removed',
			'Dashboards used by 200+ field officers',
			'About $12,000 a year saved on licences'
		],
		problem:
			'Reports were assembled by hand from many spreadsheets, field progress was tracked in chat groups, and routine write-ups and metadata tagging took analysts hours every week.',
		approach: [
			'Turned the most repeated spreadsheet workflows into small web apps with validated input, so data arrives clean instead of being fixed afterwards.',
			'Wrote scheduled Python jobs that pull, reshape and export data to Excel, CSV or JSON in the formats people already use.',
			'Built geospatial monitoring dashboards so supervisors can see field progress on a map instead of asking for updates.',
			'Replaced paid tools with open-source equivalents where they did the same job.',
			'Added LLM steps for first drafts of routine text and for metadata classification, with a person reviewing the output.'
		],
		featured: false
	},
	{
		slug: 'map-processing-platform',
		title: 'Map Processing Platform',
		kind: 'Internal tools',
		year: '2026',
		tagline: 'Computer-vision pipeline that cleans and indexes BPS field maps',
		badge: 'BPS',
		summary:
			'Operators upload phone photos of paper maps. A worker finds the sheet, fixes perspective and orientation, enhances it, reads the 16-digit area code and checks it against the master list.',
		description:
			'A Next.js, FastAPI and OpenCV pipeline that straightens, enhances and OCRs photographed field maps, then validates and files them in S3-compatible storage.',
		stack: ['Next.js', 'FastAPI', 'OpenCV', 'OCR', 'Redis', 'PostgreSQL', 'S3 (Garage)'],
		links: [],
		outcome: ['Area codes read and validated automatically', 'Images go straight to storage', 'Workers scale on a queue'],
		problem:
			'Thousands of paper field maps were photographed at odd angles and filed by hand. Finding the right map meant reading a small printed code on each photo.',
		approach: [
			'The browser uploads directly to object storage with presigned URLs, so the API never proxies image bytes.',
			'FastAPI queues each image on Redis; an OpenCV worker runs paper detection, perspective correction, orientation, enhancement, upscaling and OCR.',
			'The recognised code is validated against the master list, and anything uncertain goes to a human review screen.',
			'A second geo worker prepares georeferenced output, and the whole stack ships with Docker Compose.'
		],
		featured: true
	},
	{
		slug: 'business-geocoder',
		title: 'Business Geocoder',
		kind: 'Automation',
		year: '2026',
		tagline: 'Turns messy business addresses into coordinates, offline',
		badge: 'BPS',
		summary:
			'A Python geocoder on a private Nominatim server: a six-level fallback search, fuzzy matching for misspelt Jakarta areas, region validation and multithreading.',
		description:
			'A Python geocoder for BPS that runs on a local Nominatim server with waterfall search, fuzzy area matching and Jakarta region validation.',
		stack: ['Python', 'Nominatim', 'Docker', 'Fuzzy matching', 'Multithreading'],
		links: [],
		outcome: ['Six fallback search strategies', 'Results outside Jakarta rejected', 'No API quotas: runs locally'],
		problem:
			'Business addresses in survey data are full of typos, building floors and RT/RW numbers. Public geocoding APIs either miss them or cap the number of calls.',
		approach: [
			'Run Nominatim in Docker, so lookups are private, free and unlimited.',
			'Search in levels: name plus address, full address, two keywords, fuzzy Jakarta area, a regex-cleaned address, then name only.',
			'Fuzzy logic fixes common misspellings of area names, for example “Glora” to “Gelora”.',
			'Every hit is checked against city, state and district, so a match outside Jakarta counts as not found.'
		],
		featured: false
	},
	{
		slug: 'matchamaster',
		title: 'MatchaMaster',
		kind: 'Automation',
		year: '2025',
		tagline: 'Playwright bot that fills the BPS business directory from a spreadsheet',
		badge: 'BPS',
		summary:
			'Python and Playwright automation that reads a validated master sheet, checks it for duplicates, then enters or updates each business on the BPS business directory (MatchaPro) while logging progress to PostgreSQL.',
		description:
			'MatchaMaster, a Python and Playwright bot that enters and updates business-directory records from a master spreadsheet.',
		stack: ['Python', 'Playwright', 'PostgreSQL (Neon)', 'Excel & CSV'],
		links: [],
		outcome: ['Replaces manual form entry', 'Duplicate check before any write', 'Resumable progress log'],
		problem:
			'Field teams had to type thousands of business records into a web directory one form at a time.',
		approach: [
			'A master spreadsheet template that the team fills and a supervisor approves before anything runs.',
			'A mandatory duplicate check, so the bot never creates the same business twice.',
			'Playwright drives the real web forms, and each record’s status is stored in PostgreSQL so a run can stop and resume.',
			'A step-by-step guide written for non-programmers.'
		],
		featured: false
	},
	{
		slug: 'minitube-pip',
		title: 'MiniTube PiP',
		kind: 'Browser extension',
		year: '2026',
		tagline: 'One-click Picture-in-Picture for YouTube',
		badge: 'Live',
		summary:
			'A Chrome extension that pops the current YouTube video into Chrome’s native Picture-in-Picture window with one click, so it keeps playing while you work.',
		description:
			'MiniTube PiP, a lightweight Chrome extension on the Chrome Web Store that opens YouTube videos in Picture-in-Picture with one click.',
		image: {
			src: '/img/minitube-pip.webp',
			alt: 'MiniTube PiP store screenshot: “One Click. Picture-in-Picture.” with a YouTube video popped out into a mini window in three steps.',
			width: 1200,
			height: 800
		},
		stack: ['JavaScript', 'Manifest V3', 'Picture-in-Picture API'],
		links: [{ label: 'Chrome Web Store', href: 'https://chromewebstore.google.com/detail/minitube-pip/nnaefjfojaokboaeojpidgacfpjihaoi' }],
		outcome: ['One click to float a video', 'No extra player, no tracking'],
		problem:
			'Switching between a tutorial tab and an editor breaks concentration, and YouTube’s own Picture-in-Picture control is buried in a right-click menu.',
		approach: [
			'A single toolbar action that finds the playing YouTube video and hands it to Chrome’s native Picture-in-Picture window, always on top.',
			'No custom player and no data collection: it only asks for the permissions it needs.'
		],
		featured: false
	}
];

export const getWork = (slug: string) => work.find((w) => w.slug === slug);
