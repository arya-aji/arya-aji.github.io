import adapter from '@sveltejs/adapter-static';
import { relative, sep } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => {
			const relativePath = relative(import.meta.dirname, filename);
			const pathSegments = relativePath.toLowerCase().split(sep);
			const isExternalLibrary = pathSegments.includes('node_modules');
			return isExternalLibrary ? undefined : true;
		}
	},
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			// Warn instead of failing for 404s (useful for WIP showcase/blog links)
			handleHttpError: ({ path, referrer, message, status }) => {
				if (status === 404) {
					console.warn(`[prerender] Ignoring 404 for path: ${path} (linked from ${referrer})`);
					return;
				}
				throw new Error(message);
			}
		},
		// If deploying to https://arya-aji.github.io/web-portfolio/
		// uncomment and set your repo name:
		// paths: { base: '/web-portfolio' }
	}
};

export default config;
