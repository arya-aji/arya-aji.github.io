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
		<h1>Work</h1>
		<p class="lede">
			Things I've shipped, from browser extensions on the Chrome Web Store to the internal tools that
			replaced a team's spreadsheets.
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
		padding-block: clamp(2.5rem, 6vw, 4.5rem) clamp(4rem, 8vw, 6rem);
	}
	.intro {
		margin-bottom: 3rem;
	}
	.grid {
		display: grid;
		gap: 3rem 2rem;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 30rem), 1fr));
	}
</style>
