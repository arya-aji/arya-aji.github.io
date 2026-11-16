<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import HeroBlur from '$lib/components/HeroBlur.svelte';
	import { services } from '$lib/data/services';
	import { site } from '$lib/site';
	import { onMount } from 'svelte';

	// A hotlinked photograph can fail; hide it so no broken-image glyph shows over the fog.
	let photo: HTMLImageElement | undefined = $state();
	let photoOk = $state(true);
	onMount(() => {
		if (photo && photo.complete && !photo.naturalWidth) photoOk = false;
	});

	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'Person',
			'@id': `${site.url}/#person`,
			name: site.name,
			url: site.url,
			image: `${site.url}/img/arya.webp`,
			jobTitle: 'Full-stack developer',
			email: `mailto:${site.email}`,
			address: { '@type': 'PostalAddress', addressLocality: 'Jakarta', addressCountry: 'ID' },
			alumniOf: { '@type': 'CollegeOrUniversity', name: 'Politeknik Statistika STIS' },
			knowsAbout: ['Chrome extension development', 'Browser automation', 'Internal tools', 'Python automation', 'SvelteKit', 'Next.js', 'FastAPI', 'LLM integration'],
			sameAs: [site.github, site.linkedin, site.upwork]
		},
		{
			'@context': 'https://schema.org',
			'@type': 'ProfessionalService',
			'@id': `${site.url}/#service`,
			name: 'Arya Aji Kusuma, freelance development',
			url: site.url,
			image: `${site.url}${site.ogImage}`,
			founder: { '@id': `${site.url}/#person` },
			areaServed: 'Worldwide',
			address: { '@type': 'PostalAddress', addressLocality: 'Jakarta', addressCountry: 'ID' },
			hasOfferCatalog: {
				'@type': 'OfferCatalog',
				name: 'Services',
				itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.pitch } }))
			}
		}
	];
</script>

<Seo
	title="Arya Aji Kusuma | Chrome Extension & Automation Developer"
	description="Freelance developer in Jakarta who builds Chrome extensions, internal tools and Python automations that remove repetitive work for small teams. Fixed quotes, Upwork escrow."
	{jsonLd}
/>

<section class="hero" aria-labelledby="hero-h">
	<div class="hour" data-slot="hero" data-alt="A landscape at dusk with a calm, pale area on the left for the headline">
		<img
			bind:this={photo}
			hidden={!photoOk}
			onerror={() => (photoOk = false)}
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vallee-brouillard.jpg/1920px-Vallee-brouillard.jpg"
			srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vallee-brouillard.jpg/960px-Vallee-brouillard.jpg 960w, https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vallee-brouillard.jpg/1280px-Vallee-brouillard.jpg 1280w, https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vallee-brouillard.jpg/1920px-Vallee-brouillard.jpg 1920w"
			sizes="100vw"
			width="4210"
			height="2750"
			alt=""
			fetchpriority="high"
			decoding="async"
		/>
	</div>
	<div class="scrim" aria-hidden="true"></div>
	<div class="container stage">
		<div class="copy">
			<h1 id="hero-h">Do it twice? I’ll build the tool.</h1>
			<p class="lead">Chrome extensions, internal tools and automations for small teams.</p>
			<div class="actions">
				<a class="btn" href="/contact">Describe your task</a>
				<a class="text-link" href="#work">See the work</a>
			</div>
		</div>
		<div class="product">
			<HeroBlur />
		</div>
	</div>
</section>

<section class="case" id="work" aria-labelledby="blur-h">
	<div class="container case-grid">
		<figure class="well case-shot" data-slot="blur" data-kind="product" data-alt="Blur Your WhatsApp store image, or a screenshot of the popup in use">
			<img src="/img/blur-your-whatsapp.webp" width="1200" height="751" alt="Blur Your WhatsApp: the extension popup with switches beside a WhatsApp Web chat list" loading="lazy" decoding="async" />
		</figure>
		<div class="case-copy">
			<h2 id="blur-h">Under 20&nbsp;KB, zero dependencies</h2>
			<p class="lead">Blur Your WhatsApp hides chats while you share your screen.</p>
			<dl class="facts">
				<div><dt>Dependencies</dt><dd>None</dd></div>
				<div><dt>Trackers</dt><dd>None</dd></div>
			</dl>
			<p class="links">
				<a href="/projects/blur-your-whatsapp">Read the case study</a>
				<a href="/notes/whatsapp-blur-extension-under-20kb">How it stays small</a>
			</p>
		</div>
	</div>
</section>

<section class="run" aria-labelledby="run-h">
	<div class="container run-grid">
		<div class="run-head">
			<h2 id="run-h">Tools a data team runs every week</h2>
			<p class="lead">In-house work for a large data organisation, 2019 to now.</p>
			<p><a href="/projects/internal-reporting-tools">See how they were built</a></p>
		</div>
		<div class="glass ledger">
			<p class="ledger-title">What each tool replaced</p>
			<ol>
				<li><span class="ini" aria-hidden="true">R</span><span class="what">Reporting web apps<small>5 shipped</small></span><span class="res">About 40% faster reports</span></li>
				<li><span class="ini" aria-hidden="true">P</span><span class="what">Python data jobs<small>run on a schedule</small></span><span class="res">15+ hours a week</span></li>
				<li><span class="ini" aria-hidden="true">F</span><span class="what">Field dashboards<small>maps, live progress</small></span><span class="res">200+ officers</span></li>
				<li><span class="ini" aria-hidden="true">O</span><span class="what">Open-source swaps<small>paid software retired</small></span><span class="res">About $12,000 a year</span></li>
			</ol>
		</div>
	</div>
</section>

<section class="skui" aria-labelledby="skui-h">
	<div class="container skui-grid">
		<div class="skui-copy">
			<h2 id="skui-h">Skui, a SaaS I run alone</h2>
			<p class="lead">Timed practice exams with checkout built in.</p>
			<dl class="facts">
				<div><dt>Users</dt><dd>1,000+</dd></div>
				<div><dt>Payments</dt><dd>Midtrans, automated</dd></div>
				<div><dt>Stack</dt><dd>Next.js, FastAPI, PostgreSQL</dd></div>
			</dl>
			<p class="links"><a href="/projects/skui">Read the case study</a><a href="https://tryout.aryaaji.com" rel="noopener" target="_blank">Open Skui</a></p>
		</div>
		<figure class="well skui-shot" data-slot="skui" data-kind="product" data-alt="A screenshot of a Skui practice exam on a phone">
			<img src="/img/skui.webp" width="896" height="734" alt="Skui promo: a timed practice question, a score of 85 out of 100 and topic progress" loading="lazy" decoding="async" />
		</figure>
	</div>
</section>

<section class="offer" id="services" aria-labelledby="offer-h">
	<div class="container offer-grid">
		<div class="offer-head">
			<h2 id="offer-h">Three tools, quoted within a day</h2>
			<p class="lead">Paid per milestone through Upwork escrow.</p>
		</div>
		<table>
			<caption class="visually-hidden">Services, delivery and price</caption>
			<thead><tr><th scope="col">Tool</th><th scope="col">Typical job</th><th scope="col">Delivery</th><th scope="col">Price</th></tr></thead>
			<tbody>
				{#each services as s}
					<tr id={s.id}>
						<th scope="row">{s.title}</th>
						<td>{s.examples[0]}</td>
						<td class="num">{s.timeline}</td>
						<td class="num">{s.price}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<section class="close" aria-labelledby="close-h">
	<div class="container close-grid">
		<h2 id="close-h">Tell me the chore you repeat.</h2>
		<dl class="contact-list">
			<div><dt>Email</dt><dd><a class="mail" href={`mailto:${site.email}`}>{site.email}</a></dd></div>
			<div><dt>Where</dt><dd>Jakarta, UTC+7</dd></div>
			<div><dt>Reply</dt><dd>Within 24 hours</dd></div>
		</dl>
		<div class="actions">
			<a class="btn" href="/contact">Describe your task</a>
			<a class="btn ghost" href={site.upwork} rel="noopener" target="_blank">Hire on Upwork</a>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		isolation: isolate;
		min-height: calc(100dvh - 72px);
		display: grid;
		align-items: center;
		padding-block: var(--space-2xl) var(--space-3xl);
		background: var(--color-paper);
		color: var(--color-ink);
	}
	/* If the photograph fails, the fog colour keeps the head legible */
	.hour {
		position: absolute;
		inset: 0;
		z-index: -2;
		background: linear-gradient(to bottom, var(--color-fog), var(--color-well-2));
	}
	.hour > img {
		color: transparent;
		object-position: 40% 55%;
		animation: drift 48s var(--ease-in-out) infinite alternate;
	}
	@keyframes drift {
		from {
			transform: scale(1.06) translateX(0);
		}
		to {
			transform: scale(1.06) translateX(-3%);
		}
	}
	/* Fog behind the text only; the foot fades into slate */
	.scrim {
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			radial-gradient(ellipse 46% 52% at 24% 54%, color-mix(in oklab, var(--color-fog) 80%, transparent), transparent 80%),
			linear-gradient(to bottom, transparent 70%, var(--color-paper));
	}

	.stage {
		display: grid;
		gap: var(--space-2xl);
		grid-template-columns: minmax(0, 1fr);
		align-items: end;
	}
	@media (min-width: 60rem) {
		.stage {
			grid-template-columns: minmax(0, 6fr) minmax(0, 5fr);
			align-items: center;
		}
	}

	.copy h1 {
		color: var(--color-day-ink);
		max-width: 12ch;
		line-height: 1.02;
	}
	.copy .lead {
		margin-top: var(--space-lg);
		color: var(--color-day-muted);
		max-width: 30ch;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-md) var(--space-lg);
		margin-top: var(--space-xl);
	}
	.text-link {
		color: var(--color-day-ink);
		font-weight: 600;
		text-underline-offset: 0.25em;
		min-height: 44px;
		display: inline-flex;
		align-items: center;
	}
	.text-link:hover {
		color: var(--color-day-ink);
	}
	.text-link:active {
		color: var(--color-day-muted);
	}
	.text-link:focus-visible {
		outline: 2px solid var(--color-accent-deep);
		outline-offset: 3px;
	}

	.product {
		display: grid;
		justify-items: center;
		gap: var(--space-sm);
	}

	/* Sections below the hero: slate, bone wells, one glass ledger */
	.case,
	.skui {
		padding-block: var(--section-gap-s) var(--section-gap);
	}
	.run {
		padding-block: var(--section-gap);
		background: var(--color-paper-2);
	}
	.offer {
		padding-block: var(--section-gap-l) var(--section-gap);
	}
	.close {
		padding-block: var(--section-gap-s);
		background: var(--color-paper-2);
	}

	.case-grid,
	.skui-grid,
	.run-grid {
		display: grid;
		gap: var(--space-2xl) var(--gap-columns);
		grid-template-columns: minmax(0, 1fr);
		align-items: center;
	}
	@media (min-width: 60rem) {
		.case-grid {
			grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
		}
		.skui-grid {
			grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
		}
		.run-grid {
			grid-template-columns: minmax(0, 4fr) minmax(0, 7fr);
			gap: var(--space-2xl) var(--space-3xl);
		}
	}

	.well {
		margin: 0;
		aspect-ratio: 5 / 4;
		background: var(--color-well);
	}
	.well > img {
		position: absolute;
		inset: var(--space-xl);
		width: calc(100% - 2 * var(--space-xl));
		height: calc(100% - 2 * var(--space-xl));
		object-fit: contain;
		box-shadow: none;
		background: transparent;
	}

	.case-copy h2,
	.skui-copy h2 {
		max-width: 14ch;
	}
	.case-copy .lead,
	.skui-copy .lead,
	.run-head .lead,
	.offer-head .lead {
		margin-top: var(--space-md);
		color: var(--color-ink-2);
	}
	.facts {
		margin: var(--space-xl) 0 0;
		display: grid;
	}
	.facts div {
		display: flex;
		justify-content: space-between;
		gap: var(--space-md);
		padding-block: var(--space-sm);
		box-shadow: inset 0 -1px 0 var(--color-rule);
	}
	.facts dt {
		color: var(--color-muted);
	}
	.facts dd {
		margin: 0;
		font-weight: 600;
		color: var(--color-ink);
		text-align: right;
	}
	.links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs) var(--space-lg);
		margin-top: var(--space-lg);
		font-weight: 600;
	}
	.links a:focus-visible,
	.run-head a:focus-visible,
	.mail:focus-visible {
		outline: 2px solid var(--color-focus);
		outline-offset: 3px;
	}
	.links a:active,
	.run-head a:active,
	.mail:active {
		color: var(--color-accent-deep);
	}

	/* A run as an account list */
	.run-head p:last-child {
		margin-top: var(--space-lg);
		font-weight: 600;
	}
	.ledger {
		padding: var(--space-lg);
	}
	.ledger-title {
		font-weight: 600;
		color: var(--color-ink);
		padding: 0 var(--space-xs) var(--space-md);
	}
	.ledger ol {
		list-style: none;
		margin: 0;
		padding: 0;
		border-radius: var(--radius-inner);
		background: color-mix(in oklab, var(--color-light) 4%, transparent);
	}
	.ledger li {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr) auto;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-md);
	}
	@media (max-width: 35rem) {
		.ledger li {
			grid-template-columns: auto minmax(0, 1fr);
		}
		.res {
			grid-column: 2;
			text-align: left;
		}
	}
	.ledger li + li {
		box-shadow: inset 0 1px 0 color-mix(in oklab, var(--color-light) 7%, transparent);
	}
	.ini {
		display: grid;
		place-items: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--color-light) 16%, transparent);
		color: var(--color-ink-2);
		font-size: var(--text-sm);
		font-weight: 600;
	}
	.what {
		display: grid;
		color: var(--color-ink);
		font-weight: 600;
	}
	.what small {
		font-size: var(--text-sm);
		font-weight: 400;
		color: var(--color-muted);
	}
	.res {
		font-variant-numeric: tabular-nums;
		color: var(--color-accent-2);
		font-weight: 600;
		text-align: right;
	}

	/* What I build: a table */
	.offer-grid {
		display: grid;
		gap: var(--space-2xl);
	}
	table {
		width: 100%;
		border-collapse: collapse;
	}
	thead th {
		text-align: left;
		font-size: var(--text-sm);
		font-weight: 600;
		color: var(--color-muted);
		padding: 0 var(--space-md) var(--space-sm) 0;
		white-space: nowrap;
	}
	tbody th,
	tbody td {
		text-align: left;
		vertical-align: baseline;
		padding: var(--space-lg) var(--space-md) var(--space-lg) 0;
		box-shadow: inset 0 1px 0 var(--color-rule);
	}
	tbody th {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: var(--text-title);
		letter-spacing: var(--tracking-display);
		color: var(--color-ink);
		width: 32%;
	}
	tbody td {
		color: var(--color-ink-2);
	}
	tbody td.num {
		white-space: nowrap;
		color: var(--color-ink);
	}
	tbody tr:first-child th,
	tbody tr:first-child td {
		box-shadow: inset 0 1px 0 var(--color-accent);
	}
	@media (max-width: 48rem) {
		thead {
			display: none;
		}
		tbody tr {
			display: grid;
			grid-template-columns: minmax(0, 1fr) auto;
			gap: var(--space-2xs) var(--space-md);
			padding-block: var(--space-lg);
			box-shadow: inset 0 1px 0 var(--color-rule);
		}
		tbody th,
		tbody td {
			padding: 0;
			box-shadow: none;
			width: auto;
		}
		tbody th {
			grid-column: 1 / -1;
		}
		tbody td:nth-child(2) {
			grid-column: 1 / -1;
		}
		tbody tr:first-child {
			box-shadow: inset 0 1px 0 var(--color-accent);
		}
		tbody tr:first-child th,
		tbody tr:first-child td {
			box-shadow: none;
		}
	}

	/* Close: the plain contact, a statement over three facts */
	.close-grid {
		display: grid;
		gap: var(--space-2xl);
	}
	.close h2 {
		font-size: var(--text-display);
		max-width: 16ch;
	}
	.contact-list {
		margin: 0;
		display: grid;
		gap: var(--space-lg) var(--gap-columns);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
	}
	.contact-list div {
		padding-top: var(--space-md);
		box-shadow: inset 0 1px 0 var(--color-rule);
	}
	.contact-list dt {
		font-size: var(--text-sm);
		color: var(--color-muted);
	}
	.contact-list dd {
		margin: var(--space-2xs) 0 0;
		font-family: var(--font-display);
		font-size: var(--text-xl);
		letter-spacing: var(--tracking-display);
		color: var(--color-ink);
	}
	.mail {
		color: var(--color-ink);
		overflow-wrap: anywhere;
	}
	.mail:hover {
		color: var(--color-accent-hi);
	}
	.close .actions {
		margin-top: 0;
	}

	@media (max-width: 60rem) {
		.hero {
			padding-top: var(--space-xl);
		}
		.product {
			justify-items: stretch;
		}
		.scrim {
			background:
				linear-gradient(to bottom, color-mix(in oklab, var(--color-fog) 82%, transparent) 0, color-mix(in oklab, var(--color-fog) 55%, transparent) 38%, transparent 55%),
				linear-gradient(to bottom, transparent 70%, var(--color-paper));
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.hour > img {
			animation: none;
			transform: none;
		}
	}
</style>
