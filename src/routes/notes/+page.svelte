<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { notes } from '$lib/data/notes';
	const sorted = [...notes].sort((a, b) => b.date.localeCompare(a.date));
	const fmt = (d: string) =>
		new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
</script>

<Seo
	title="Notes on building small, fast tools"
	description="Short write-ups by Arya Aji Kusuma on Chrome extension performance, automation and working with AI coding assistants."
/>

<section class="wrap page">
	<h1>Notes</h1>
	<p class="lede">Short write-ups on building small, fast tools: what worked, what I deleted, and why.</p>
	<ul class="list">
		{#each sorted as n}
			<li>
				<time datetime={n.date}>{fmt(n.date)}</time>
				<div>
					<h2><a href={`/notes/${n.slug}`}>{n.title}</a></h2>
					<p>{n.description}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>

<style>
	.page {
		padding-block: clamp(2.5rem, 6vw, 4.5rem) clamp(4rem, 8vw, 6rem);
	}
	.list {
		list-style: none;
		padding: 0;
		margin: 3rem 0 0;
		max-width: 52rem;
	}
	.list li {
		display: grid;
		gap: 0.25rem 2rem;
		padding-block: 1.75rem;
		border-top: 1px solid var(--line);
	}
	@media (min-width: 720px) {
		.list li {
			grid-template-columns: 8rem 1fr;
		}
	}
	time {
		color: var(--subtext);
		font-size: var(--step--1);
		padding-top: 0.35rem;
	}
	h2 {
		font-size: var(--step-2);
		margin-bottom: 0.4rem;
	}
	h2 a {
		color: var(--heading);
		text-decoration: none;
	}
	h2 a:hover {
		color: var(--accent);
		text-decoration: underline;
	}
	.list p {
		color: var(--subtext);
		margin: 0;
	}
</style>
