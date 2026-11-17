<script lang="ts">
	import '@fontsource-variable/archivo/wdth.css';
	import '@fontsource-variable/inter';
	import '@fontsource/press-start-2p/latin-400.css';
	import '$lib/styles/tokens.css';
	import '$lib/styles/base.css';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<Header />
<main id="main">
	{@render children()}
</main>
<Footer />
