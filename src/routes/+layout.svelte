<script lang="ts">
  import '$lib/styles/global.css';
  import { theme, accent, bgEffect } from '$lib/stores/theme';
  import { onMount } from 'svelte';
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
  let mounted = $state(false);

  onMount(() => {
    document.documentElement.setAttribute('data-theme', $theme);
    document.documentElement.setAttribute('data-accent', $accent);
    mounted = true;
  });
</script>

<svelte:head>
  <title>Arya Aji Kusuma</title>
  <meta name="description" content="Arya Aji Kusuma - Developer from Jakarta, Indonesia. Building web applications, tools, and geospatial systems." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

{#if $bgEffect}
  <div class="bg-effect">
    <div class="bg-blob"></div>
    <div class="bg-blob"></div>
    <div class="bg-blob"></div>
  </div>
{/if}

<div class="app" class:mounted>
  {@render children()}
</div>

<style>
  .app {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .app.mounted {
    opacity: 1;
  }
</style>
