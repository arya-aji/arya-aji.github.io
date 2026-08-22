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
  <title>Arya Aji Kusuma | Automation Tools, Chrome Extensions & Web Apps</title>
  <meta name="description" content="Full-stack web developer specializing in fast web applications, custom Chrome extensions, and Python data automation. Available for project and contract work on Upwork." />
</svelte:head>

<main>
  <Hero />
  <ServicesGrid />
  <FeaturedProjects projects={featuredProjects} />
  <ContactSection />
  <AboutSection />
</main>

<style>
  main {
    min-height: calc(100vh - 64px);
    overflow-x: hidden;
    max-width: 100vw;
  }
</style>
