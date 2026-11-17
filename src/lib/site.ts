export const site = {
	url: 'https://aryaaji.com',
	name: 'Arya Aji Kusuma',
	shortName: 'Arya Aji',
	role: 'Freelance developer for browser extensions, internal tools and automation',
	email: 'hello@aryaaji.com',
	location: 'Jakarta, Indonesia',
	upwork: 'https://www.upwork.com/freelancers/aryaajik',
	github: 'https://github.com/arya-aji',
	linkedin: 'https://www.linkedin.com/in/arya-aji-kusuma',
	extensions: 'https://extension.aryaaji.com',
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
