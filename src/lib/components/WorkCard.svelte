<script lang="ts">
	import type { Work } from '$lib/data/work';
	let { item, headingLevel = 3 }: { item: Work; headingLevel?: 2 | 3 } = $props();
</script>

<article class="card">
	<a class="cover" href={`/projects/${item.slug}`} tabindex="-1" aria-hidden="true">
		{#if item.image}
			<img src={item.image.src} alt="" width={item.image.width} height={item.image.height} loading="lazy" decoding="async" />
		{:else}
			<div class="placeholder">
				{#each item.outcome.slice(0, 2) as o}
					<span>{o}</span>
				{/each}
			</div>
		{/if}
	</a>
	<div class="body">
		<p class="kind">{item.kind}, {item.year}</p>
		<svelte:element this={`h${headingLevel}`} class="title">
			<a href={`/projects/${item.slug}`}>{item.title}</a>
		</svelte:element>
		<p>{item.summary}</p>
	</div>
</article>

<style>
	.card {
		display: grid;
		gap: 1rem;
		align-content: start;
	}
	.cover {
		display: block;
		aspect-ratio: 16 / 10;
		border-radius: var(--r-panel);
		overflow: hidden;
		border: 1px solid var(--line);
		background: var(--column);
		color: var(--heading);
		text-decoration: none;
	}
	.cover img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top left;
	}
	.placeholder {
		height: 100%;
		display: grid;
		align-content: end;
		padding: 1.5rem;
		gap: 0.5rem;
		background: var(--column);
	}
	.placeholder span {
		justify-self: start;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: var(--step-1);
		line-height: 1.2;
		padding: 0.35em 0.75em;
		border-radius: var(--r-card);
		background: var(--card);
		color: var(--heading);
		box-shadow: var(--shadow);
	}
	.kind {
		margin: 0 0 0.25rem;
		font-size: var(--step--1);
		color: var(--subtext);
	}
	.title {
		font-size: var(--step-2);
		margin-bottom: 0.4rem;
	}
	.title a {
		color: var(--heading);
		text-decoration: none;
	}
	.title a:hover {
		color: var(--accent);
		text-decoration: underline;
	}
	.body p:last-child {
		color: var(--subtext);
		margin: 0;
	}
</style>
