<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/site';

	let {
		title,
		description,
		image = site.ogImage,
		type = 'website',
		noindex = false,
		jsonLd = undefined
	}: {
		title: string;
		description: string;
		image?: string;
		type?: 'website' | 'article' | 'profile';
		noindex?: boolean;
		jsonLd?: Record<string, unknown> | Record<string, unknown>[];
	} = $props();

	const path = $derived(page.url.pathname === '/' ? '/' : page.url.pathname.replace(/\/$/, ''));
	const canonical = $derived(site.url + path);
	const fullTitle = $derived(title.includes(site.name) ? title : `${title} | ${site.name}`);
	const imageUrl = $derived(image.startsWith('http') ? image : site.url + image);
	const ld = $derived(jsonLd ? JSON.stringify(jsonLd).replace(/</g, '\\u003c') : '');
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	{#if noindex}<meta name="robots" content="noindex, follow" />{/if}

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	{#if ld}
		{@html `<script type="application/ld+json">${ld}</script>`}
	{/if}
</svelte:head>
