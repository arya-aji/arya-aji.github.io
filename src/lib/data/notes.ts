export type Note = {
	slug: string;
	title: string;
	description: string;
	date: string;
	updated?: string;
};

export const notes: Note[] = [
	{
		slug: 'steering-ai-to-write-small-code',
		title: 'Steering an AI assistant to write small code',
		description:
			'AI coding tools reach for React templates and npm packages by default. Here is how I set strict rules so the output stays tiny and fast.',
		date: '2026-09-17'
	}
];
