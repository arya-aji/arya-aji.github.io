<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import FeaturedProjects from '$lib/components/FeaturedProjects.svelte';
  import DashboardGrid from '$lib/components/DashboardGrid.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

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

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }
  }
</style>
