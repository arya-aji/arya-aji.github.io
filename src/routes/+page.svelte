<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import FeaturedProjects from '$lib/components/FeaturedProjects.svelte';
  import DashboardGrid from '$lib/components/DashboardGrid.svelte';
  import RecentCommits from '$lib/components/RecentCommits.svelte';
  import LatestPosts from '$lib/components/LatestPosts.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />

<main>
  <Hero />
  <FeaturedProjects />
  <DashboardGrid />

  <section class="activity-section">
    <div class="container">
      <div class="activity-grid">
        <RecentCommits />
        <LatestPosts />
      </div>
    </div>
  </section>
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

  .activity-section {
    padding: 32px 0;
  }

  .activity-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: 768px) {
    .activity-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
