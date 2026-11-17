<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/site';
</script>

<Seo
	title="About Arya Aji Kusuma"
	description="Arya Aji Kusuma is a Jakarta-based full-stack developer with an applied statistics background who builds Chrome extensions, internal tools and automations."
	type="profile"
/>

<section class="wrap page">
	<div class="grid">
		<div class="prose">
			<h1>About</h1>
			<p class="lede">
				I’m Arya Aji Kusuma, a full-stack developer in Jakarta. I describe myself as professionally lazy: if I
				have to do something twice, I’d rather build a tool that does it.
			</p>
			<p>
				I studied applied statistics at Politeknik Statistika STIS, then spent the following years building
				in-house software for a large data organisation. Most of that work came down to one habit: noticing
				what people repeat every week and making it disappear. That produced five internal web apps, a set of
				Python jobs that save analysts more than 15 hours a week, and dashboards that 200+ field officers use
				daily.
			</p>
			<p>
				Since 2024 I’ve also built my own products. <a href="/projects/blur-your-whatsapp">Blur Your WhatsApp</a>
				is a privacy extension under 20KB. <a href="/projects/skui">Skui</a> is an exam simulator with 1,000+
				users. Building products end to end, payments included, keeps me honest about what clients actually
				need.
			</p>

			<h2>How I like to work</h2>
			<ul>
				<li>Small, well-defined scope with a fixed price.</li>
				<li>Async and written-first. I reply within 24 hours.</li>
				<li>You get the source code and a short guide at the end.</li>
				<li>AI tools speed me up; I still review every line for size and correctness.</li>
			</ul>

			<h2>Tools I use most</h2>
			<ul class="tag-list">
				{#each ['SvelteKit', 'Next.js', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Prisma', 'Chrome Manifest V3', 'Google Apps Script', 'LLM APIs', 'Leaflet'] as t}
					<li>{t}</li>
				{/each}
			</ul>

			<p class="actions">
				<a class="btn" href="/contact">Describe your task</a>
				<a class="btn ghost" href="/resume">Read the resume</a>
			</p>
		</div>
		<img src="/img/arya-cutout.webp" alt="Pixel-art portrait of Arya Aji Kusuma with arms crossed" width="640" height="825" />
	</div>
</section>

<style>
	.page {
		padding-block: var(--space-2xl) var(--section-gap-s);
	}
	.grid {
		display: grid;
		gap: var(--space-2xl);
		grid-template-columns: minmax(0, 1fr);
	}
	@media (min-width: 900px) {
		.grid {
			grid-template-columns: minmax(0, 1fr) 20rem;
			align-items: start;
		}
	}
	img {
		max-width: 20rem;
		background: var(--color-well);
		border-radius: var(--r-panel);
		padding-top: var(--space-xl);
		-webkit-mask-image: linear-gradient(to bottom, #000 85%, transparent);
		mask-image: linear-gradient(to bottom, #000 85%, transparent);
	}
	h2 {
		font-size: var(--step-2);
		margin-top: var(--space-2xl);
		margin-bottom: var(--space-md);
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
		margin-top: var(--space-xl);
	}
</style>
