export type Service = {
	id: string;
	title: string;
	pitch: string;
	examples: string[];
	timeline: string;
	price: string;
};

// Order is the focus order: full-stack, data, automation, then browser extensions.
export const services: Service[] = [
	{
		id: 'fullstack',
		title: 'Full-stack web apps',
		pitch:
			'Replace the shared spreadsheet that everyone is afraid to touch with a small web app that has real validation, a real login and payments if you need them.',
		examples: [
			'Internal tools, admin panels and approval flows',
			'SaaS MVPs with auth and Midtrans or Lemon Squeezy billing',
			'Mobile-first apps that work on cheap phones and weak signal'
		],
		timeline: '1 to 2 weeks',
		price: 'Quoted per scope'
	},
	{
		id: 'data',
		title: 'Data pipelines and dashboards',
		pitch:
			'Turn scattered Excel files and exports into one clean database, then put the numbers people ask for on a live dashboard or map.',
		examples: [
			'Clean, merge and validate messy Excel and Google Sheets data',
			'Dashboards with live filters, charts and maps',
			'Geocoding addresses and statistical analysis'
		],
		timeline: 'Scoped per dataset',
		price: 'Quoted per scope'
	},
	{
		id: 'automation',
		title: 'Workflow automation',
		pitch:
			'A Python job or bot that does the copy-paste, form-filling and reporting for you, on a schedule or on demand.',
		examples: [
			'Bots that fill web forms from a spreadsheet',
			'Syncing data between REST APIs',
			'Scheduled reports to Excel, CSV or PDF'
		],
		timeline: '2 to 4 days',
		price: 'Quoted per task'
	},
	{
		id: 'extensions',
		title: 'Browser extensions',
		pitch:
			'Turn a repetitive browser task into a one-click tool that runs where your team already works.',
		examples: [
			'Scrape or export data from a web app that has no export button',
			'Autofill forms from a sheet or CRM',
			'Add missing buttons, filters or shortcuts to tools you use daily'
		],
		timeline: '3 to 5 days',
		price: '$149 to $349'
	}
];

export const steps = [
	{
		title: 'Describe the task',
		text: 'Tell me what you do by hand today and how often. Screenshots or a screen recording help most.'
	},
	{
		title: 'Get a fixed quote',
		text: 'Within 24 hours you get a scope, a price and a delivery date. No hourly surprises.'
	},
	{
		title: 'Pay per milestone',
		text: 'Work runs through Upwork escrow. Funds are released only after you test and approve each milestone.'
	},
	{
		title: 'Receive the handover',
		text: 'Source code, a short guide and, for extensions, a Chrome Web Store-ready package.'
	}
];
