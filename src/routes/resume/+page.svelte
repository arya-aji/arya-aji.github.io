<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/site';
</script>

<Seo
	title="Resume"
	description="Resume of Arya Aji Kusuma: full-stack developer with 7+ years building internal tools, Python automation and LLM features, plus data pipelines, browser extensions and SaaS products."
	type="profile"
/>

<section class="wrap page">
	<header class="head">
		<h1>Arya Aji Kusuma</h1>
		<p class="lede">Full-stack developer for web apps, data pipelines, automation and browser extensions.</p>
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
					<li>Built and run Gerbang Dinas (gerbangdinas.com), a CAT-style tryout platform on SvelteKit and Supabase with Midtrans checkout and human-reviewed AI questions.</li>
					<li>Built Recap Suite, an Electron studio that turns comic chapters into narrated videos with vision AI, text-to-speech and FFmpeg.</li>
					<li>Built Grambox, a cached-first Instagram JSON API (Hono, SQLite, Python), and MiniTube PiP, a Chrome extension.</li>
					<li>Deliver full-stack web apps, data pipelines, automations and browser extensions for clients through Upwork.</li>
				</ul>
			</section>

			<section class="job">
				<h3>Computer Specialist (Pranata Komputer Ahli Pertama)</h3>
				<p class="when">BPS-Statistics Indonesia, Jakarta Pusat. 2019 to now</p>
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
		padding-block: var(--space-2xl) var(--section-gap-s);
	}
	.head {
		border-bottom: 2px solid var(--heading);
		padding-bottom: var(--space-lg);
		margin-bottom: var(--space-xl);
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
		gap: var(--space-2xl);
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
		margin-bottom: var(--space-xl);
	}
	.job h3 {
		font-size: var(--step-1);
		margin-bottom: var(--space-3xs);
	}
	.when {
		color: var(--subtext);
		margin-bottom: var(--space-sm);
	}
	.job ul {
		padding-left: var(--space-lg);
		display: grid;
		gap: var(--space-2xs);
	}
	aside h3 {
		font-size: var(--step-0);
		margin: var(--space-lg) 0 var(--space-3xs);
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
