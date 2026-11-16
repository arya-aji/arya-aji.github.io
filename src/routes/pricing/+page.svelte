<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<!-- Old URL kept so existing links work. Cloudflare also redirects it with a 301. -->
<Seo title="Pricing" description="Prices are listed with each service." noindex />
<svelte:head>
	<meta http-equiv="refresh" content="0; url=/#services" />
</svelte:head>

<section class="wrap page prose">
	<h1>Pricing moved</h1>
	<p>Prices are now listed with each service. <a href="/#services">See services and prices</a>.</p>
</section>

<style>
	.page {
		padding-block: var(--space-2xl);
	}
</style>
