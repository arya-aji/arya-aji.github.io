<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import { work } from '$lib/data/work';

</script>

<Seo
	title="Projects: Chrome extensions, internal tools and SaaS"
	description="Case studies from Arya Aji Kusuma: a sub-20KB WhatsApp privacy extension, internal reporting tools that save 15+ hours a week, and Skui, a SaaS with 1,000+ users."
/>

<section class="wrap page">
	<header class="intro">
		<p class="eyebrow">Projects</p>
		<h1>Things I’ve built</h1>
		<p class="lede">
			Things I’ve shipped, from browser extensions on the Chrome Web Store to the internal tools that
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
