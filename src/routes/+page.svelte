<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import FeaturedProjects from '$lib/components/FeaturedProjects.svelte';
  import DashboardGrid from '$lib/components/DashboardGrid.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Arya Aji Kusuma | Software Engineer</title>
  <meta name="description" content="Portfolio of Arya Aji Kusuma — Software Engineer building web apps, dashboards, and SaaS products." />
</svelte:head>

<Navbar />

<main>
  <Hero />
  <FeaturedProjects />
  <DashboardGrid />
</main>

<Footer />

<style>
  main {
    min-height: calc(100vh - 64px);
  }

</style>
