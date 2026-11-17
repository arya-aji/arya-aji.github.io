export const site = {
	url: 'https://aryaaji.com',
	name: 'Arya Aji Kusuma',
	shortName: 'Arya Aji',
	role: 'Freelance full-stack, data and automation developer',
	email: 'hello@aryaaji.com',
	location: 'Jakarta, Indonesia',
	upwork: 'https://www.upwork.com/freelancers/aryaajik',
	github: 'https://github.com/arya-aji',
	linkedin: 'https://www.linkedin.com/in/arya-aji-kusuma',
	ogImage: '/og.png'
} as const;

// Anchors on the home page.
export const nav = [
	{ href: '/#experience', label: 'Experience' },
	{ href: '/#work', label: 'Work' },
	{ href: '/#services', label: 'Services' },
	{ href: '/notes', label: 'Notes' },
	{ href: '/#contact', label: 'Contact' }
] as const;
