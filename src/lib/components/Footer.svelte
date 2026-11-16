<script lang="ts">
	import { site } from '$lib/site';
	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="wrap grid">
		<div>
			<p class="sign">If you do it twice, I'll make it a tool.</p>
			<p class="muted">
				Arya Aji Kusuma, freelance developer in {site.location}. Async, in English or Indonesian, with
				clients anywhere.
			</p>
			<a class="btn" href="/contact">Describe your task</a>
		</div>
		<nav aria-label="Footer">
			<div>
				<h2>Site</h2>
				<ul>
					<li><a href="/projects">Work</a></li>
					<li><a href="/#services">Services</a></li>
					<li><a href="/#process">Process</a></li>
					<li><a href="/notes">Notes</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="/resume">Resume</a></li>
				</ul>
			</div>
			<div>
				<h2>Elsewhere</h2>
				<ul>
					<li><a href={`mailto:${site.email}`}>{site.email}</a></li>
					<li><a href={site.upwork} rel="me noopener" target="_blank">Upwork</a></li>
					<li><a href={site.github} rel="me noopener" target="_blank">GitHub</a></li>
					<li><a href={site.linkedin} rel="me noopener" target="_blank">LinkedIn</a></li>
				</ul>
			</div>
		</nav>
	</div>
	<div class="wrap legal">© {year} Arya Aji Kusuma. Colours: Catppuccin.</div>
</footer>

<style>
	.site-footer {
		background: var(--board);
		border-top: 1px solid var(--line);
		padding-top: clamp(3rem, 7vw, 4.5rem);
	}
	.grid {
		display: grid;
		gap: 2.5rem;
	}
	@media (min-width: 780px) {
		.grid {
			grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
		}
	}
	.sign {
		font-family: var(--font-display);
		font-size: var(--step-3);
		font-weight: 720;
		line-height: 1.08;
		letter-spacing: -0.03em;
		color: var(--heading);
		max-width: 16ch;
		margin-bottom: 0.75rem;
	}
	.muted {
		color: var(--subtext);
		max-width: 44ch;
		margin-bottom: 1.5rem;
	}
	nav {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
	}
	h2 {
		font-size: 1rem;
		letter-spacing: 0;
		margin-bottom: 0.75rem;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.5rem;
	}
	ul a {
		color: var(--text);
		overflow-wrap: anywhere;
	}
	ul a:hover {
		color: var(--accent);
	}
	.legal {
		margin-top: 3rem;
		padding-block: 1.25rem;
		border-top: 1px solid var(--line);
		font-size: var(--step--1);
		color: var(--subtext);
	}
</style>
