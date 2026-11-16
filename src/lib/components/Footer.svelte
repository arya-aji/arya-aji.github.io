<script lang="ts">
	import { site } from '$lib/site';
	const year = new Date().getFullYear();
</script>

<footer class="foot">
	<div class="container cols">
		<div class="intro">
			<p class="name">Arya Aji Kusuma</p>
			<p class="muted">Chrome extensions, internal tools and automation. {site.location}.</p>
		</div>
		<nav aria-label="Site">
			<h2>Site</h2>
			<ul>
				<li><a href="/projects">Work</a></li>
				<li><a href="/#services">Services</a></li>
				<li><a href="/notes">Notes</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/resume">Resume</a></li>
			</ul>
		</nav>
		<nav aria-label="Contact">
			<h2>Contact</h2>
			<ul>
				<li><a href={`mailto:${site.email}`}>{site.email}</a></li>
				<li><a href="/contact">Project form</a></li>
				<li><a href={site.upwork} rel="me noopener" target="_blank">Upwork</a></li>
				<li><a href={site.github} rel="me noopener" target="_blank">GitHub</a></li>
				<li><a href={site.linkedin} rel="me noopener" target="_blank">LinkedIn</a></li>
			</ul>
		</nav>
	</div>
	<div class="container legal">
		<p>© {year} Arya Aji Kusuma</p>
		<p data-credits>
			Photographs: <a href="https://commons.wikimedia.org/wiki/File:Vallee-brouillard.jpg" rel="noopener" target="_blank">Thomas Bresson</a> (CC BY 3.0, Wikimedia Commons)
		</p>
	</div>
</footer>

<style>
	.foot {
		background: var(--color-shade);
		padding-top: var(--space-3xl);
	}
	.cols {
		display: grid;
		gap: var(--space-xl) var(--gap-columns);
		grid-template-columns: minmax(0, 1fr);
	}
	@media (min-width: 48rem) {
		.cols {
			grid-template-columns: minmax(0, 6fr) minmax(0, 3fr) minmax(0, 3fr);
		}
	}
	.name {
		font-family: var(--font-display);
		font-weight: 600;
		letter-spacing: var(--tracking-display);
		font-size: var(--text-2xl);
		color: var(--color-ink);
	}
	.muted {
		margin-top: var(--space-xs);
		color: var(--color-muted);
	}
	h2 {
		font-family: var(--font-body);
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0;
		color: var(--color-muted);
		margin-bottom: var(--space-sm);
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--space-xs);
	}
	ul a {
		color: var(--color-ink-2);
		text-decoration: none;
		overflow-wrap: anywhere;
	}
	ul a:hover {
		color: var(--color-ink);
		text-decoration: underline;
	}
	ul a:focus-visible,
	.legal a:focus-visible {
		outline: 2px solid var(--color-focus);
		outline-offset: 2px;
	}
	.legal {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--space-xs) var(--space-lg);
		margin-top: var(--space-2xl);
		padding-block: var(--space-lg);
		box-shadow: inset 0 1px 0 var(--color-rule);
		font-size: var(--text-sm);
		color: var(--color-muted);
	}
	.legal a {
		color: var(--color-ink-2);
	}
</style>
