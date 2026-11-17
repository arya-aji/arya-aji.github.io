<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/site';
</script>

<Seo
	title="Resume"
	description="Resume of Arya Aji Kusuma: full-stack developer with 7+ years building web apps, data pipelines and dashboards, Python automation and browser extensions."
	type="profile"
/>

<section class="wrap page">
	<header class="head">
		<h1>Arya Aji Kusuma</h1>
		<p class="lede">Full-stack developer. Focus, in order: web apps, data pipelines and dashboards, workflow automation, browser extensions.</p>
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
				<h3>Freelance full-stack, data and automation developer</h3>
				<p class="when">Self-employed, remote. 2024 to now</p>
				<ul>
					<li><strong>Full-stack:</strong> built and run Gerbang Dinas (gerbangdinas.com), a CAT-style tryout platform on SvelteKit and Supabase with Midtrans checkout and human-reviewed AI questions.</li>
					<li><strong>Full-stack:</strong> built Recap Suite, an Electron studio that turns comic chapters into narrated videos with vision AI, text-to-speech and FFmpeg, and Grambox, a cached-first Instagram JSON API (Hono, SQLite, Python).</li>
					<li><strong>Data and automation:</strong> deliver data pipelines, dashboards and Python automations for clients through Upwork, quoted per milestone.</li>
					<li><strong>Browser extensions:</strong> published MiniTube PiP on the Chrome Web Store, a one-click Picture-in-Picture extension for YouTube.</li>
				</ul>
			</section>

			<section class="job">
				<h3>Computer Specialist (Pranata Komputer Ahli Pertama)</h3>
				<p class="when">BPS-Statistics Indonesia, Jakarta Pusat. 2019 to now</p>
				<ul>
					<li><strong>Full-stack:</strong> built 5+ web apps used across units, making reporting about 40% faster, and replaced paid software with open-source builds, saving about $12,000 a year in licences.</li>
					<li><strong>Data:</strong> delivered geospatial monitoring dashboards used by 200+ field officers, and a computer-vision pipeline (FastAPI, OpenCV, OCR) that straightens and indexes photographed field maps.</li>
					<li><strong>Automation:</strong> wrote Python jobs and Playwright bots that remove 15+ hours a week of repetitive data entry and processing, plus an offline geocoder for business addresses.</li>
					<li><strong>AI:</strong> integrated LLM APIs that automate about 80% of routine content and metadata classification, with human review.</li>
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
			<p>SvelteKit, Next.js, TypeScript, FastAPI, Supabase, PostgreSQL, Prisma, Midtrans</p>
			<h3>Data</h3>
			<p>Data pipelines, dashboards, Leaflet maps, statistical and geospatial analysis, Excel and Google Sheets</p>
			<h3>Automation</h3>
			<p>Python pipelines, Playwright, scheduled jobs, REST APIs, Nominatim geocoding</p>
			<h3>Browser extensions</h3>
			<p>Chrome Manifest V3, content scripts, side panels, DOM extraction</p>
			<h3>AI and computer vision</h3>
			<p>LLM integration, vision models, OpenCV, OCR, text-to-speech</p>
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
		margin-bottom: var(--space-lg);
	}
	.prose h2:not(:first-child) {
		margin-top: var(--space-2xl);
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
