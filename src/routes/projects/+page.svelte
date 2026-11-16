<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import { work } from '$lib/data/work';

	// Projects with a picture lead at full width; the text-only ones pair up below them.
	const featured = work.filter((w) => w.image);
	const rest = work.filter((w) => !w.image);
</script>

<Seo
	title="Projects: Chrome extensions, internal tools and SaaS"
	description="Case studies from Arya Aji Kusuma: a sub-20KB WhatsApp privacy extension, internal reporting tools that save 15+ hours a week, and Skui, a SaaS with 1,000+ users."
/>

<section class="wrap page">
	<header class="intro">
		<h1>Work</h1>
		<p class="lede">
			Things I’ve shipped, from browser extensions on the Chrome Web Store to the internal tools that
			replaced a team’s spreadsheets.
		</p>
	</header>
	<div class="featured">
		{#each featured as item}
			<WorkCard {item} headingLevel={2} wide />
		{/each}
	</div>
	<div class="grid">
		{#each rest as item}
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
	.featured {
		display: grid;
		gap: var(--section-gap-s);
		margin-bottom: var(--section-gap-s);
	}
	.grid {
		display: grid;
		gap: var(--space-2xl) var(--space-xl);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 30rem), 1fr));
		align-items: stretch;
	}
</style>
