<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import ServicesGrid from '$lib/components/ServicesGrid.svelte';
  import FeaturedProjects from '$lib/components/FeaturedProjects.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import ContactSection from '$lib/components/ContactSection.svelte';
  import type { Project } from '$lib/data/projects';

  let { data } = $props<{ data: { projects: Project[] } }>();
  let featuredProjects = $derived(data.projects.filter((p: Project) => p.featured));
</script>

<svelte:head>
  <title>Arya Aji Kusuma | Full-Stack Builder & Automation Specialist</title>
  <meta name="description" content="Custom Chrome extensions, Python data automation workflows, and lightweight web applications. Available for fixed-price contracts on Upwork." />
</svelte:head>

<main>
  <Hero />
  <ServicesGrid />
  <FeaturedProjects projects={featuredProjects} />
  <AboutSection />
  <ContactSection />
</main>

<style>
  main {
    min-height: calc(100vh - 64px);
    overflow-x: hidden;
    max-width: 100vw;
  }
</style>
