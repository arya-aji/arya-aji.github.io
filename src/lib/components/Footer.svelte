<script lang="ts">
	import { site } from '$lib/site';
	const year = new Date().getFullYear();
</script>

<footer class="foot">
	<div class="container cols">
		<div class="intro">
			<p class="name">Arya Aji Kusuma</p>
			<p class="muted">Professionally lazy developer. If I do it twice, I build the tool.</p>
			<ul class="socials">
				<li><a href={site.github} rel="me noopener" target="_blank">GitHub</a></li>
				<li><a href={site.linkedin} rel="me noopener" target="_blank">LinkedIn</a></li>
				<li><a href={site.upwork} rel="me noopener" target="_blank">Upwork</a></li>
			</ul>
		</div>
		<nav aria-label="Site">
			<h2>Navigation</h2>
			<ul>
				<li><a href="/#experience">Experience</a></li>
				<li><a href="/projects">Work</a></li>
				<li><a href="/#services">Services</a></li>
				<li><a href="/notes">Notes</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
		<div>
			<h2>Focus areas</h2>
			<ul class="plain">
				<li>Full-stack web apps</li>
				<li>Data pipelines & dashboards</li>
				<li>Workflow automation</li>
				<li>Browser extensions</li>
			</ul>
		</div>
		<div>
			<h2>Get in touch</h2>
			<ul>
				<li><a href={`mailto:${site.email}`}>{site.email}</a></li>
				<li class="plain-li">{site.location} · UTC+7</li>
				<li><a href="/contact">Project form</a></li>
				<li><a href="/resume">Resume</a></li>
			</ul>
		</div>
	</div>
	<div class="container legal">
		<p>© {year} Arya Aji Kusuma</p>
		<p>Built once, so you don’t have to do it twice.</p>
	</div>
</footer>

<style>
	.foot {
		background: var(--color-paper);
		padding-top: var(--space-3xl);
		border-top: 1px solid var(--color-rule);
	}
	.cols {
		display: grid;
		gap: var(--space-xl) var(--gap-columns);
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	.intro {
		grid-column: 1 / -1;
	}
	@media (min-width: 56rem) {
		.cols {
			grid-template-columns: minmax(0, 4fr) repeat(3, minmax(0, 2.5fr));
		}
		.intro {
			grid-column: auto;
		}
	}
	.name {
		font-family: var(--font-display);
		font-weight: 900;
		font-variation-settings: 'wdth' 112;
		letter-spacing: var(--tracking-display);
		font-size: var(--text-xl);
		color: var(--color-ink);
	}
	.muted {
		margin-top: var(--space-xs);
		color: var(--color-muted);
		max-width: 32ch;
	}
	h2 {
		font-family: var(--font-body);
		font-size: var(--text-xs);
		font-weight: 500;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		font-variation-settings: normal;
		color: var(--color-muted);
		margin-bottom: var(--space-md);
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--space-xs);
		font-size: 0.9375rem;
	}
	.plain li,
	.plain-li {
		color: var(--color-ink-2);
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
	.socials {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
		margin-top: var(--space-lg);
	}
	.socials a {
		display: inline-flex;
		padding: 6px 14px;
		border-radius: var(--radius-pill);
		box-shadow: inset 0 0 0 1px var(--color-rule);
		font-size: var(--text-sm);
		font-weight: 500;
		color: var(--color-ink);
	}
	.socials a:hover {
		box-shadow: inset 0 0 0 1px var(--color-ink);
		text-decoration: none;
	}
	.legal {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--space-xs) var(--space-lg);
		margin-top: var(--space-2xl);
		padding-block: var(--space-lg);
		border-top: 1px solid var(--color-rule);
		font-size: var(--text-sm);
		color: var(--color-muted);
	}
</style>
