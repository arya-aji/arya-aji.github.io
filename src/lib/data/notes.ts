export type Note = {
	slug: string;
	title: string;
	description: string;
	date: string;
	updated?: string;
};

export const notes: Note[] = [
	{
		slug: 'whatsapp-blur-extension-under-20kb',
		title: 'How I built a WhatsApp Web blur extension in under 20KB',
		description:
			'Four rules that kept Blur Your WhatsApp under 20KB with zero dependencies: think in CSS, unblur with :hover, ignore class names, and observe instead of polling.',
		date: '2026-09-10'
	},
	{
		slug: 'steering-ai-to-write-small-code',
		title: 'Steering an AI assistant to write small code',
		description:
			'AI coding tools reach for React templates and npm packages by default. Here is how I set strict rules so the output stays tiny and fast.',
		date: '2026-09-17'
	}
];
