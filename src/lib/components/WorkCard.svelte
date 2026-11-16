<script lang="ts">
	import type { Work } from '$lib/data/work';
	let { item, headingLevel = 3 }: { item: Work; headingLevel?: 2 | 3 } = $props();
</script>

<article class="card" class:text-only={!item.image}>
	{#if item.image}
		<a class="cover" href={`/projects/${item.slug}`} tabindex="-1" aria-hidden="true">
			<img src={item.image.src} alt="" width={item.image.width} height={item.image.height} loading="lazy" decoding="async" />
		</a>
	{/if}
	<div class="body">
		<svelte:element this={`h${headingLevel}`} class="title">
			<a href={`/projects/${item.slug}`}>{item.title}</a>
		</svelte:element>
		<p class="kind">{item.kind}, {item.year}</p>
		<p class="summary">{item.summary}</p>
		{#if !item.image}
			<ul class="outcomes" aria-label="Outcome">
				{#each item.outcome as o}<li>{o}</li>{/each}
			</ul>
		{/if}
	</div>
</article>

<style>
	.card {
		display: grid;
		gap: 1rem;
		align-content: start;
	}
	.text-only {
		padding: 1.25rem;
		background: var(--board);
		border: 1px solid var(--line);
		border-radius: var(--r-panel);
	}
	.cover {
		display: block;
		aspect-ratio: 16 / 10;
		border-radius: var(--r-panel);
		overflow: hidden;
		border: 1px solid var(--line);
		background: var(--column);
	}
	.cover img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top left;
	}
	.title {
		font-size: var(--step-2);
		margin-bottom: 0.25rem;
	}
	.title a {
		color: var(--heading);
		text-decoration: none;
	}
	.title a:hover {
		color: var(--accent);
		text-decoration: underline;
		text-decoration-thickness: 2px;
	}
	.kind {
		margin: 0 0 0.6rem;
		font-size: var(--step--1);
		color: var(--subtext);
	}
	.summary {
		color: var(--subtext);
		margin: 0;
	}
	.outcomes {
		list-style: none;
		padding: 0;
		margin: 1rem 0 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}
	.outcomes li {
		font-size: var(--step--1);
		padding: 0.25em 0.7em;
		border-radius: var(--r-chip);
		background: var(--auto-tint);
		color: var(--heading);
	}
</style>
