export type Role = {
	title: string;
	org: string;
	where: string;
	from: string;
	to: string;
	points: string[];
	tags: string[];
	link?: { label: string; href: string };
};

// Day job at BPS is shown openly; never mention the statistical publications.
export const experience: Role[] = [
	{
		title: 'Freelance Full-Stack & Automation Developer',
		org: 'Self-employed',
		where: 'Remote · Clients worldwide',
		from: '2024',
		to: 'Now',
		points: [
			'Build full-stack web apps, data pipelines, automations and browser extensions for small teams, quoted per milestone through Upwork escrow.',
			'Built and run Gerbang Dinas solo: a CAT-style tryout platform on SvelteKit and Supabase with Midtrans checkout and AI-drafted, human-reviewed questions.',
			'Shipped Recap Suite, an Electron studio that turns comic chapters into narrated videos with vision AI, text-to-speech and FFmpeg.'
		],
		tags: ['SvelteKit', 'Supabase', 'Electron', 'Manifest V3', 'Python'],
		link: { label: 'Hire on Upwork', href: 'https://www.upwork.com/freelancers/aryaajik' }
	},
	{
		title: 'Computer Specialist (Pranata Komputer)',
		org: 'BPS-Statistics Indonesia, Jakarta Pusat',
		where: 'Jakarta · On-site',
		from: '2019',
		to: 'Now',
		points: [
			'Turned spreadsheet-heavy reporting into 5+ validated web apps, making reports about 40% faster.',
			'Wrote scheduled Python jobs that remove 15+ hours a week of copy-paste and reshaping.',
			'Shipped geospatial monitoring dashboards used by 200+ field officers, and retired paid software worth about $12,000 a year.',
			'Added LLM steps that automate about 80% of routine drafting and metadata classification, with a human reviewing.',
			'Built a computer-vision pipeline that straightens, enhances and OCRs photographed field maps, and Playwright bots that replace manual form entry.'
		],
		tags: ['Python', 'FastAPI', 'OpenCV', 'Playwright', 'PostgreSQL', 'LLM APIs'],
		link: { label: 'Read the case study', href: '/projects/internal-reporting-tools' }
	},
	{
		title: 'D4 Applied Statistics',
		org: 'Politeknik Statistika STIS',
		where: 'Jakarta',
		from: '2014',
		to: '2018',
		points: [
			'Applied statistics degree: the reason every tool I build starts from the data people actually have, not the data they wish they had.'
		],
		tags: ['Statistics', 'Data analysis', 'R', 'Python']
	}
];

// Focus order: full-stack, data, automation, browser extensions.
export const skills: { group: string; items: string[] }[] = [
	{ group: 'Full-stack', items: ['SvelteKit', 'Next.js', 'TypeScript', 'FastAPI', 'Supabase', 'Tailwind CSS', 'Midtrans'] },
	{ group: 'Data & dashboards', items: ['PostgreSQL', 'Prisma', 'Drizzle', 'Excel & Google Sheets', 'Statistical analysis', 'Leaflet maps'] },
	{ group: 'Automation', items: ['Python pipelines', 'Playwright', 'Scheduled jobs', 'REST APIs', 'Geocoding (Nominatim)'] },
	{ group: 'Browser extensions', items: ['Chrome Manifest V3', 'Content scripts', 'Side panels', 'DOM extraction', 'chrome.storage'] },
	{ group: 'AI & computer vision', items: ['LLM integration', 'Vision models', 'OpenCV', 'OCR', 'Text-to-speech'] },
	{ group: 'Shipping', items: ['Docker', 'GitHub Actions', 'Cloudflare', 'Vercel', 'Chrome Web Store'] }
];
