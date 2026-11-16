<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo title="Message sent" description="Your task description was sent." noindex />

<section class="wrap page prose">
	<h1>Message sent</h1>
	<p class="lede">Thanks. I’ll read your task and reply with a fixed quote within 24 hours.</p>
	<p>Meanwhile, <a href="/projects">see how similar tools turned out</a>.</p>
</section>

<style>
	.page {
		padding-block: var(--space-2xl) var(--section-gap-s);
	}
</style>
