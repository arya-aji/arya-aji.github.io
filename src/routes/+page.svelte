<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import FeaturedProjects from '$lib/components/FeaturedProjects.svelte';
  import DashboardGrid from '$lib/components/DashboardGrid.svelte';
  import type { Project } from '$lib/data/projects';

  let { data } = $props<{ data: { projects: Project[] } }>();
  let featuredProjects = $derived(data.projects.filter((p: Project) => p.featured));
</script>

<svelte:head>
  <title>Arya Aji Kusuma | Turning Ideas Into Dream Projects</title>
  <meta name="description" content="I turn ideas and insights into dream projects — web apps, geospatial dashboards, and data-driven tools. Let's build something together." />
</svelte:head>

<main>
  <Hero />
  <FeaturedProjects projects={featuredProjects} />
  <DashboardGrid projects={data.projects} />
</main>

<style>
  main {
    min-height: calc(100vh - 64px);
    overflow-x: hidden;
    max-width: 100vw;
  }
</style>
