<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import { work } from '$lib/data/work';

</script>

<Seo
	title="Projects: full-stack apps, data, automation and extensions"
	description="Case studies from Arya Aji Kusuma: Gerbang Dinas, a live CAT tryout SaaS; Recap Suite, an AI video studio; a computer-vision map pipeline; automation bots; and internal tools that save 15+ hours a week."
/>

<section class="wrap page">
	<header class="intro">
		<p class="eyebrow">Projects</p>
		<h1>Things I’ve built</h1>
		<p class="lede">
			Things I’ve shipped, from a live tryout SaaS and an AI video studio to the internal tools that
			replaced a team’s spreadsheets.
		</p>
	</header>
	<div class="grid">
		{#each work as item}
			<WorkCard {item} headingLevel={2} />
		{/each}
	</div>
</section>

<style>
	.page {
		padding-block: var(--space-2xl) var(--section-gap-s);
	}
	.intro {
		margin-bottom: var(--space-2xl);
	}
	.grid {
		display: grid;
		gap: var(--space-lg);
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
	}
	@media (min-width: 60rem) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
