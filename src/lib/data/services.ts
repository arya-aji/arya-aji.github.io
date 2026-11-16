export type Service = {
	id: string;
	title: string;
	pitch: string;
	examples: string[];
	timeline: string;
	price: string;
};

export const services: Service[] = [
	{
		id: 'extensions',
		title: 'Chrome extensions',
		pitch:
			'Turn a repetitive browser task into a one-click tool that runs where your team already works.',
		examples: [
			'Scrape or export data from a web app that has no export button',
			'Autofill forms from a sheet or CRM',
			'Add missing buttons, filters or shortcuts to tools you use daily'
		],
		timeline: '3 to 5 days',
		price: '$149 to $349'
	},
	{
		id: 'internal-tools',
		title: 'Internal tools and dashboards',
		pitch:
			'Replace the shared spreadsheet that everyone is afraid to touch with a small web app that has real validation and a real login.',
		examples: [
			'Admin panels and approval flows',
			'Dashboards with live filters and maps',
			'Payments and auth for an MVP'
		],
		timeline: '1 to 2 weeks',
		price: 'Quoted per scope'
	},
	{
		id: 'automation',
		title: 'Data and workflow automation',
		pitch:
			'A Python job that does the copy-paste, reshaping and reporting for you, on a schedule or on demand.',
		examples: [
			'Excel and Google Sheets clean-up and merging',
			'Syncing data between REST APIs',
			'Geocoding addresses with OpenStreetMap'
		],
		timeline: '2 to 4 days',
		price: 'Quoted per task'
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
