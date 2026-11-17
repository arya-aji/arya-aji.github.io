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

// Anchors on the home page; `count` is the small bracketed figure under each label.
export const nav = [
	{ href: '/#experience', label: 'Experience', count: '7y+' },
	{ href: '/#work', label: 'Work', count: '4' },
	{ href: '/#services', label: 'Services', count: '3' },
	{ href: '/notes', label: 'Notes', count: '2' },
	{ href: '/#contact', label: 'Contact' }
] as const;
