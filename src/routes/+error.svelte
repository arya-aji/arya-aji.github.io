<script lang="ts">
	import { page } from '$app/state';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo title={page.status === 404 ? 'Page not found' : 'Something went wrong'} description="This page could not be loaded." noindex />

<section class="wrap page prose">
	<h1>{page.status === 404 ? 'This page does not exist' : 'This page failed to load'}</h1>
	<p class="lede">
		{page.status === 404
			? 'The link may be old, or the address has a typo.'
			: 'Reload the page. If it keeps happening, email hello@aryaaji.com.'}
	</p>
	<p><a class="btn" href="/">Go to the homepage</a></p>
</section>

<style>
	.page {
		padding-block: var(--space-2xl) var(--section-gap-s);
	}
</style>
