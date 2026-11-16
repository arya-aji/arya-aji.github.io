<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/site';
</script>

<Seo
	title="Resume"
	description="Resume of Arya Aji Kusuma: full-stack developer with 7+ years building internal tools, Python automation and LLM features, plus Chrome extensions and SaaS products."
	type="profile"
/>

<section class="wrap page">
	<header class="head">
		<h1>Arya Aji Kusuma</h1>
		<p class="lede">Full-stack developer for internal tools, browser extensions and automation.</p>
		<p class="contact">
			{site.location}<br />
			<a href={`mailto:${site.email}`}>{site.email}</a><br />
			<a href={site.linkedin} rel="noopener" target="_blank">LinkedIn</a> and
			<a href={site.github} rel="noopener" target="_blank">GitHub</a>
		</p>
	</header>

	<div class="cols">
		<div class="prose">
			<h2>Experience</h2>

			<section class="job">
				<h3>Freelance full-stack and automation developer</h3>
				<p class="when">Self-employed, remote. 2024 to now</p>
				<ul>
					<li>Built and run Skui, a mobile-first exam simulator with automated Midtrans billing and 1,000+ users.</li>
					<li>Published Blur Your WhatsApp, a sub-20KB privacy extension on the Chrome Web Store, and MiniTube PiP.</li>
					<li>Deliver Chrome extensions, internal tools and Python automations for clients through Upwork.</li>
				</ul>
			</section>

			<section class="job">
				<h3>Full-stack developer (in-house)</h3>
				<p class="when">In-house, large public-sector data organisation, Jakarta. 2018 to now</p>
				<ul>
					<li>Built 5+ full-stack web apps used across units, making reporting about 40% faster.</li>
					<li>Wrote Python automations that remove 15+ hours a week of repetitive data processing.</li>
					<li>Replaced paid software with open-source builds, saving about $12,000 a year in licences.</li>
					<li>Delivered geospatial monitoring tools and dashboards used by 200+ field officers.</li>
					<li>Integrated LLM APIs that automate about 80% of routine content and metadata classification.</li>
				</ul>
			</section>

			<h2>Education</h2>
			<section class="job">
				<h3>D4 Applied Statistics</h3>
				<p class="when">Politeknik Statistika STIS, Jakarta. 2014 to 2018</p>
			</section>
		</div>

		<aside>
			<h2>Skills</h2>
			<h3>Full-stack</h3>
			<p>SvelteKit, Next.js, TypeScript, FastAPI, Python, PostgreSQL, Prisma</p>
			<h3>Browser</h3>
			<p>Chrome Manifest V3, content scripts, side panels, DOM extraction</p>
			<h3>Automation</h3>
			<p>Python pipelines, Excel and Google Sheets, REST APIs, OpenStreetMap geocoding</p>
			<h3>Data and AI</h3>
			<p>Statistical analysis, dashboards, geospatial analysis, LLM integration</p>
			<h3>Languages</h3>
			<p>Indonesian (native), English (professional)</p>
		</aside>
	</div>
</section>

<style>
	.page {
		padding-block: clamp(2.5rem, 6vw, 4.5rem) clamp(4rem, 8vw, 6rem);
	}
	.head {
		border-bottom: 2px solid var(--heading);
		padding-bottom: 1.5rem;
		margin-bottom: 2.5rem;
	}
	.head h1 {
		font-size: var(--step-4);
	}
	.contact {
		margin: 0;
		color: var(--subtext);
	}
	.cols {
		display: grid;
		gap: 3rem;
		grid-template-columns: minmax(0, 1fr);
	}
	@media (min-width: 900px) {
		.cols {
			grid-template-columns: minmax(0, 1fr) 19rem;
		}
	}
	h2 {
		font-size: var(--step-2);
	}
	.job {
		margin-bottom: 2rem;
	}
	.job h3 {
		font-size: var(--step-1);
		margin-bottom: 0.2rem;
	}
	.when {
		color: var(--subtext);
		margin-bottom: 0.6rem;
	}
	.job ul {
		padding-left: 1.2rem;
		display: grid;
		gap: 0.35rem;
	}
	aside h3 {
		font-size: var(--step-0);
		margin: 1.25rem 0 0.2rem;
	}
	aside p {
		color: var(--subtext);
		margin: 0;
	}
	@media print {
		:global(.site-header),
		:global(.site-footer) {
			display: none;
		}
	}
</style>
