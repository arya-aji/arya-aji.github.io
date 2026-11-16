<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { site } from '$lib/site';
	import { steps } from '$lib/data/services';
</script>

<Seo
	title="Start a project"
	description="Describe the repetitive task you want gone. Arya Aji Kusuma replies within 24 hours with a fixed quote for a Chrome extension, internal tool or automation."
/>

<section class="wrap page">
	<div class="grid">
		<div>
			<h1>Describe your task</h1>
			<p class="lede">
				Tell me what you do by hand and how often. You'll get a scope, a price and a delivery date within 24
				hours.
			</p>
			<ContactForm />
		</div>
		<aside>
			<h2>Prefer another channel?</h2>
			<p><a href={`mailto:${site.email}`}>{site.email}</a></p>
			<p><a href={site.upwork} rel="noopener" target="_blank">Hire me on Upwork</a> with escrow protection.</p>
			<h2>What happens next</h2>
			<ol>
				{#each steps as s}<li><strong>{s.title}.</strong> {s.text}</li>{/each}
			</ol>
		</aside>
	</div>
</section>

<style>
	.page {
		padding-block: clamp(2.5rem, 6vw, 4.5rem) clamp(4rem, 8vw, 6rem);
	}
	.grid {
		display: grid;
		gap: 3rem;
		grid-template-columns: minmax(0, 1fr);
	}
	@media (min-width: 940px) {
		.grid {
			grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
		}
	}
	h1 {
		font-size: var(--step-4);
	}
	.lede {
		margin-bottom: 2.5rem;
	}
	aside {
		padding: 1.75rem;
		background: var(--column);
		border-radius: var(--r-panel);
		align-self: start;
	}
	aside h2 {
		font-size: var(--step-1);
	}
	aside h2:not(:first-child) {
		margin-top: 2rem;
	}
	aside ol {
		padding-left: 1.2rem;
		display: grid;
		gap: 0.6rem;
		margin: 0;
	}
</style>
