export type Work = {
	slug: string;
	title: string;
	kind: 'Browser extension' | 'SaaS product' | 'Internal tools';
	year: string;
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

export const work: Work[] = [
	{
		slug: 'blur-your-whatsapp',
		title: 'Blur Your WhatsApp',
		kind: 'Browser extension',
		year: '2024',
		summary:
			'A privacy extension that blurs WhatsApp Web chats, names and media during screen sharing. Under 20KB, zero dependencies.',
		description:
			'How Blur Your WhatsApp hides WhatsApp Web chats during screen sharing with a sub-20KB Manifest V3 Chrome extension and zero dependencies.',
		image: {
			src: '/img/blur-your-whatsapp.webp',
			alt: 'Blur Your WhatsApp promo: WhatsApp Web with blurred chat list and the extension popup showing toggles for chat text, contact names, avatars, previews and media.',
			width: 1200,
			height: 751
		},
		stack: ['JavaScript', 'Manifest V3', 'CSS', 'MutationObserver', 'chrome.storage'],
		links: [
			{
				label: 'Chrome Web Store',
				href: 'https://chromewebstore.google.com/detail/blur-your-whatsapp/knhgdpafncoifgmbcfkclhglcifjhpmc'
			},
			{ label: 'Source on GitHub', href: 'https://github.com/arya-aji/blur-your-whatsapp' }
		],
		outcome: ['Under 20KB installed', 'No trackers, no server', 'Survives WhatsApp class-name changes'],
		problem:
			'A WhatsApp notification during a screen share can expose a private conversation to a whole meeting. The blur extensions available at the time were 30MB or more and slowed WhatsApp Web down.',
		approach: [
			'Inject one dynamic style tag instead of wrapping DOM nodes with a framework. The browser applies the blur filter on the GPU.',
			'Unblur on hover with plain CSS :hover, so there are no mouse listeners on hundreds of chat rows and no main-thread work.',
			'Target structural attributes such as data-testid, dir="auto" and role="row" rather than obfuscated class names, so WhatsApp updates do not break it.',
			'Catch newly rendered rows with one lean MutationObserver plus chrome.storage.onChanged, instead of a polling loop.'
		],
		featured: true
	},
	{
		slug: 'internal-reporting-tools',
		title: 'Reporting and field-monitoring tools',
		kind: 'Internal tools',
		year: '2019–now',
		summary:
			'In-house web apps and Python pipelines that replaced spreadsheet-heavy reporting for a large public-sector data team.',
		description:
			'Internal web apps, geospatial dashboards and Python automations that made reporting about 40% faster and removed 15+ hours a week of manual data work.',
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
			'Turned the most repeated spreadsheet workflows into five small web apps with validated input, so data arrives clean instead of being fixed afterwards.',
			'Wrote scheduled Python jobs that pull, reshape and export data to Excel, CSV or JSON in the formats people already use.',
			'Built geospatial monitoring dashboards so supervisors can see field progress on a map instead of asking for updates.',
			'Replaced paid tools with open-source equivalents where they did the same job.',
			'Added LLM steps for first drafts of routine text and for metadata classification, with a person reviewing the output.'
		],
		featured: true
	},
	{
		slug: 'skui',
		title: 'Skui exam simulator',
		kind: 'SaaS product',
		year: '2024',
		summary:
			'A mobile-first practice platform for the SIMAK UI entrance exam, with strict section timers and automated Midtrans payments.',
		description:
			'Skui, a mobile-first SaaS exam simulator for SIMAK UI applicants built with Next.js, FastAPI and PostgreSQL, with automated Midtrans billing and 1,000+ users.',
		image: {
			src: '/img/skui.webp',
			alt: 'Skui promo image: a student on a laptop surrounded by cards for remaining time, a practice question, a score of 85 out of 100 and topic progress.',
			width: 896,
			height: 734
		},
		stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Midtrans'],
		links: [{ label: 'Open Skui', href: 'https://tryout.aryaaji.com' }],
		outcome: ['1,000+ users', 'Fully automated checkout', 'Built and run solo'],
		problem:
			'Applicants wanted to practise under the same time pressure and scoring as the real exam, on the phone they actually study with.',
		approach: [
			'Per-section timers that keep running across reloads, so a refresh cannot buy extra time.',
			'Automated question seeding, so new practice sets go live without manual data entry.',
			'Midtrans checkout wired to account access, so payment unlocks the package without anyone checking transfers.'
		],
		featured: true
	},
	{
		slug: 'minitube-pip',
		title: 'MiniTube PiP',
		kind: 'Browser extension',
		year: '2024',
		summary:
			'One click sends any HTML5 video to a floating Picture-in-Picture window, so a tutorial keeps playing while you work.',
		description:
			'MiniTube PiP, a lightweight Chrome extension that puts any HTML5 video into a floating Picture-in-Picture window with one click.',
		stack: ['JavaScript', 'Manifest V3', 'Picture-in-Picture API'],
		links: [{ label: 'Extension hub', href: 'https://extension.aryaaji.com' }],
		outcome: ['One click to float a video', 'Works on any HTML5 video'],
		problem:
			'Switching between a tutorial tab and an editor breaks concentration, and the built-in Picture-in-Picture control is hidden on many sites.',
		approach: [
			'A single toolbar action that finds the active video on the page and detaches it into an always-on-top window.'
		],
		featured: false
	}
];

export const getWork = (slug: string) => work.find((w) => w.slug === slug);
