<script lang="ts">
	import type { Snippet } from 'svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { notes } from '$lib/data/notes';
	import { site } from '$lib/site';

	let { slug, image, children }: { slug: string; image?: string; children: Snippet } = $props();
	const note = $derived(notes.find((n) => n.slug === slug)!);
	const fmt = (d: string) =>
		new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

	const jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: note.title,
		description: note.description,
		datePublished: note.date,
		dateModified: note.updated ?? note.date,
		url: `${site.url}/notes/${note.slug}`,
		mainEntityOfPage: `${site.url}/notes/${note.slug}`,
		...(image ? { image: site.url + image } : {}),
		author: { '@type': 'Person', name: site.name, url: site.url },
		publisher: { '@type': 'Person', name: site.name, url: site.url }
	});
</script>

<Seo title={note.title} description={note.description} type="article" {image} {jsonLd} />

<article class="wrap note">
	<nav class="crumbs" aria-label="Breadcrumb"><a href="/notes">Notes</a></nav>
	<header>
		<h1>{note.title}</h1>
		<p class="meta"><time datetime={note.date}>{fmt(note.date)}</time></p>
	</header>
	<div class="prose content">
		{@render children()}
	</div>
	<aside class="ask prose">
		<p>
			I build small, fast tools like this for teams. <a href="/contact">Describe your task</a> and get a fixed
			quote within 24 hours.
		</p>
	</aside>
</article>

<style>
	.note {
		padding-block: 2rem clamp(4rem, 8vw, 6rem);
	}
	.crumbs {
		font-size: var(--step--1);
		margin-bottom: 2.5rem;
	}
	header {
		max-width: 48rem;
		margin-bottom: 2.5rem;
	}
	h1 {
		font-size: var(--step-4);
	}
	.meta {
		color: var(--subtext);
	}
	.content :global(h2) {
		font-size: var(--step-2);
		margin-top: 2.5rem;
	}
	.content :global(code) {
		font-family: var(--font-code);
		font-size: 0.9em;
		background: var(--column);
		color: var(--heading);
		padding: 0.1em 0.35em;
		border-radius: 4px;
	}
	.content :global(pre) {
		background: var(--ctp-crust);
		color: var(--text);
		border: 1px solid var(--line);
		padding: 1.1rem 1.25rem;
		border-radius: var(--r-card);
		overflow-x: auto;
		font-size: 0.9rem;
		line-height: 1.55;
	}
	.content :global(pre code) {
		background: none;
		padding: 0;
		color: inherit;
	}
	.content :global(figure) {
		margin: 2rem 0;
	}
	.content :global(img) {
		border-radius: var(--r-panel);
		border: 1px solid var(--line);
	}
	.ask {
		margin-top: 3.5rem;
		padding-top: 1.5rem;
		border-top: 2px solid var(--accent);
	}
</style>
