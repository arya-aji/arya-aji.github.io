<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { FileText } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Resume | Arya Aji Kusuma</title>
  <meta name="description" content="Resume of Arya Aji Kusuma — software developer specializing in geospatial tools, web apps, and data-driven solutions." />
</svelte:head>

<Navbar />

<main class="page-main">
  <div class="container">
    <div class="resume-hero">
      <div class="icon-wrap">
        <FileText size={48} />
      </div>
      <h1>Resume</h1>
      <p class="subtitle">This page is coming soon.</p>
      <p class="description">
        In the meantime, feel free to check out my 
        <a href="/projects">projects</a> or 
        <a href="/about">learn more about me</a>.
      </p>
    </div>
  </div>
</main>

<Footer />

<style>
  .page-main {
    min-height: calc(100vh - 140px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .container {
    max-width: 600px;
    text-align: center;
  }

  .resume-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .icon-wrap {
    color: var(--accent);
    opacity: 0.8;
  }

  h1 {
    font-size: 2rem;
    color: var(--ctp-text);
    margin: 0;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--ctp-subtext0);
    margin: 0;
  }

  .description {
    color: var(--ctp-subtext1);
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
  }

  .description a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
  }

  .description a:hover {
    text-decoration: underline;
  }
</style>
