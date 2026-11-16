<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import { site } from '$lib/site';

	let { data } = $props();
	const item = $derived(data.item);

	const jsonLd = $derived([
		{
			'@context': 'https://schema.org',
			'@type': item.kind === 'Internal tools' ? 'CreativeWork' : 'SoftwareApplication',
			name: item.title,
			description: item.description,
			url: `${site.url}/projects/${item.slug}`,
			...(item.image ? { image: site.url + item.image.src } : {}),
			...(item.kind === 'Internal tools'
				? {}
				: {
						applicationCategory:
							item.kind === 'Browser extension' ? 'BrowserApplication' : 'EducationalApplication',
						operatingSystem: item.kind === 'Browser extension' ? 'Chrome' : 'Web'
					}),
			author: { '@type': 'Person', name: site.name, url: site.url }
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Work', item: `${site.url}/projects` },
				{ '@type': 'ListItem', position: 2, name: item.title, item: `${site.url}/projects/${item.slug}` }
			]
		}
	]);
</script>

<Seo title={`${item.title}: case study`} description={item.description} image={item.image?.src} type="article" {jsonLd} />

<article class="wrap page">
	<nav class="crumbs" aria-label="Breadcrumb"><a href="/projects">Work</a> / <span aria-current="page">{item.title}</span></nav>

	<header class="head">
		<h1>{item.title}</h1>
		<p class="kind">{item.kind}, {item.year}</p>
		<p class="lede">{item.summary}</p>
		{#if item.links.length}
			<p class="links">
				{#each item.links as l, i}
					<a class={i === 0 ? 'btn' : 'btn ghost'} href={l.href} rel="noopener" target="_blank">{l.label}</a>
				{/each}
			</p>
		{/if}
	</header>

	<ul class="outcome" aria-label="Outcome">
		{#each item.outcome as o}<li>{o}</li>{/each}
	</ul>

	{#if item.image}
		<img class="shot" src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} fetchpriority="high" />
	{/if}

	<div class="body prose">
		<h2>The problem</h2>
		<p>{item.problem}</p>

		<h2>What I built</h2>
		<ul class="approach">
			{#each item.approach as a}<li>{a}</li>{/each}
		</ul>

		<h2>Stack</h2>
		<ul class="tag-list">
			{#each item.stack as s}<li>{s}</li>{/each}
		</ul>

		{#if item.slug === 'blur-your-whatsapp'}
			<p class="note-link">
				Full write-up: <a href="/notes/whatsapp-blur-extension-under-20kb">how the extension stays under 20KB</a>.
			</p>
		{/if}
	</div>

	<aside class="ask">
		<h2>Have a task like this?</h2>
		<p>Describe what you do by hand today. You'll get a fixed quote within 24 hours.</p>
		<a class="btn" href="/contact">Describe your task</a>
	</aside>

	<section class="others" aria-labelledby="others-h">
		<h2 id="others-h">More work</h2>
		<div class="grid">
			{#each data.others as o}<WorkCard item={o} />{/each}
		</div>
	</section>
</article>

<style>
	.page {
		padding-block: 2rem clamp(4rem, 8vw, 6rem);
	}
	.crumbs {
		font-size: var(--step--1);
		color: var(--subtext);
		margin-bottom: 2.5rem;
	}
	.head {
		max-width: 50rem;
	}
	.kind {
		color: var(--subtext);
		margin: -0.25rem 0 1rem;
	}
	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 1.75rem;
	}
	.outcome {
		list-style: none;
		padding: 0;
		margin: 2.5rem 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
	}
	.outcome li {
		padding: 1rem 1rem 1rem 0;
		font-family: var(--font-display);
		font-weight: 650;
		font-size: var(--step-1);
		line-height: 1.25;
	}
	.shot {
		border-radius: var(--r-panel);
		border: 1px solid var(--line);
		margin-bottom: 3rem;
		width: 100%;
		max-width: 60rem;
	}
	.body h2 {
		font-size: var(--step-2);
		margin-top: 2.25rem;
	}
	.approach {
		padding-left: 1.2rem;
		display: grid;
		gap: 0.7rem;
	}
	.note-link {
		margin-top: 2rem;
	}
	.ask {
		margin-top: 4rem;
		padding: 2rem;
		border-radius: var(--r-panel);
		background: var(--column);
		max-width: 50rem;
	}
	.ask h2 {
		font-size: var(--step-2);
	}
	.others {
		margin-top: 5rem;
	}
	.others h2 {
		font-size: var(--step-3);
		margin-bottom: 1.5rem;
	}
	.grid {
		display: grid;
		gap: 2.5rem 2rem;
		grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
	}
</style>
