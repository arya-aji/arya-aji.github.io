<script lang="ts">
	import type { Work } from '$lib/data/work';
	let { item, headingLevel = 3 }: { item: Work; headingLevel?: 2 | 3 } = $props();

	const isExternal = (href: string) => href.startsWith('http');
</script>

<article class="card">
	<a class="thumb" href={`/projects/${item.slug}`} tabindex="-1" aria-hidden="true">
		{#if item.image}
			<img src={item.image.src} alt="" width={item.image.width} height={item.image.height} loading="lazy" decoding="async" />
		{:else}
			<span class="plate-kind">{item.kind}</span>
			<span class="mono">{item.title}</span>
			<ul class="stat">
				{#each item.outcome.slice(0, 2) as o}<li>{o}</li>{/each}
			</ul>
		{/if}
		<span class="badge" class:live={item.badge === 'Live'}>{item.badge}</span>
	</a>

	<div class="body">
		<svelte:element this={`h${headingLevel}`} class="title">
			<a href={`/projects/${item.slug}`}>{item.title}</a>
		</svelte:element>
		<p class="sub">{item.tagline}</p>
		<p class="tldr"><strong>TLDR</strong> {item.summary}</p>
		<ul class="tag-list" aria-label="Stack">
			{#each item.stack.slice(0, 4) as t}<li>{t}</li>{/each}
		</ul>
		<p class="actions">
			<a class="btn ghost sm" href={`/projects/${item.slug}`}>Case study</a>
			{#if item.links[0]}
				<a class="btn ghost sm arrow" href={item.links[0].href} rel={isExternal(item.links[0].href) ? 'noopener' : undefined} target={isExternal(item.links[0].href) ? '_blank' : undefined}>
					{item.links[0].label}
				</a>
			{/if}
		</p>
	</div>
</article>

<style>
	.card {
		display: flex;
		flex-direction: column;
		height: 100%;
		border: 1px solid var(--color-rule);
		border-radius: var(--radius-card);
		background: var(--color-paper);
		overflow: hidden;
		transition:
			transform var(--dur-short) var(--ease-out),
			box-shadow var(--dur-short) var(--ease-out),
			border-color var(--dur-short) var(--ease-out);
	}
	.card:hover {
		transform: translateY(-3px);
		border-color: color-mix(in oklab, var(--color-ink) 22%, var(--color-rule));
		box-shadow: var(--shadow-card);
	}

	.thumb {
		position: relative;
		display: grid;
		place-items: center;
		aspect-ratio: 16 / 10;
		padding: var(--space-lg);
		background: var(--color-well);
		border-bottom: 1px solid var(--color-rule);
		text-decoration: none;
		overflow: hidden;
	}
	.thumb img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		transition: transform var(--dur-long) var(--ease-out);
	}
	.card:hover .thumb img {
		transform: scale(1.03);
	}
	/* No screenshot (in-house work under NDA): a typographic plate instead */
	/* No screenshot: the project name as an outlined poster */
	.thumb:not(:has(img)) {
		place-items: center start;
		background:
			radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--color-ink) 14%, transparent) 1px, transparent 0) 0 0 / 16px 16px,
			var(--color-well);
	}
	.plate-kind {
		position: absolute;
		top: var(--space-lg);
		left: var(--space-lg);
		font-size: var(--text-xs);
		font-weight: 500;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		color: var(--color-muted);
	}
	.mono {
		max-width: min(11ch, 100%);
		overflow-wrap: anywhere;
		font-family: var(--font-display);
		font-weight: 900;
		font-variation-settings: 'wdth' 118;
		font-size: clamp(2rem, 3.6vw, 3.1rem);
		line-height: 0.9;
		letter-spacing: -0.04em;
		text-transform: uppercase;
		color: transparent;
		-webkit-text-stroke: 1.5px var(--color-ink);
		transition: color var(--dur-long) var(--ease-out);
	}
	.card:hover .mono {
		color: var(--color-ink);
	}
	.stat {
		position: absolute;
		left: var(--space-lg);
		bottom: var(--space-lg);
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.stat li {
		font-size: var(--text-xs);
		font-weight: 600;
		padding: 4px 10px;
		border-radius: var(--radius-pill);
		background: var(--color-ink);
		color: var(--color-paper);
	}
	.badge {
		position: absolute;
		top: var(--space-md);
		right: var(--space-md);
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 5px 12px;
		border-radius: var(--radius-pill);
		background: var(--color-paper);
		box-shadow: var(--shadow-float);
		font-size: var(--text-xs);
		font-weight: 600;
		color: var(--color-ink);
	}
	.badge.live::before {
		content: '';
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--color-live);
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		flex: 1;
		padding: var(--space-lg);
	}
	.title {
		font-size: var(--text-title);
		max-width: none;
	}
	.title a {
		color: var(--color-ink);
		text-decoration: none;
	}
	.title a:hover {
		text-decoration: underline;
		text-decoration-thickness: 2px;
	}
	.sub {
		margin-top: calc(-1 * var(--space-2xs));
		color: var(--color-muted);
		font-size: var(--text-sm);
	}
	.tldr {
		color: var(--color-ink-2);
		font-size: 0.9375rem;
		line-height: 1.6;
	}
	.tldr strong {
		color: var(--color-ink);
		font-weight: 800;
		margin-right: 4px;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
		margin-top: auto;
		padding-top: var(--space-xs);
	}
</style>
