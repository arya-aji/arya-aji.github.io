<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Board from '$lib/components/Board.svelte';
	import { work } from '$lib/data/work';
	import { services, steps } from '$lib/data/services';
	import { site } from '$lib/site';

	const lead = work.find((w) => w.slug === 'blur-your-whatsapp')!;
	const rest = work.filter((w) => w.featured && w.slug !== lead.slug);

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
			knowsAbout: [
				'Chrome extension development',
				'Browser automation',
				'Internal tools',
				'Python automation',
				'SvelteKit',
				'Next.js',
				'FastAPI',
				'LLM integration'
			],
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
				itemListElement: services.map((s) => ({
					'@type': 'Offer',
					itemOffered: { '@type': 'Service', name: s.title, description: s.pitch }
				}))
			}
		}
	];
</script>

<Seo
	title="Arya Aji Kusuma | Chrome Extension & Automation Developer"
	description="Freelance developer in Jakarta who builds Chrome extensions, internal tools and Python automations that remove repetitive work for small teams. Fixed quotes, Upwork escrow."
	{jsonLd}
/>

<section class="hero">
	<div class="wrap">
		<div class="intro">
			<h1>If you do it twice, I'll make it a tool.</h1>
			<p class="lede">
				I'm Arya, a freelance developer in Jakarta. I build Chrome extensions, internal tools and Python
				automations that take repetitive work off small teams.
			</p>
		</div>
		<Board />
	</div>
</section>

<section class="section" id="services">
	<div class="wrap">
		<div class="section-head">
			<h2>What I build</h2>
			<p>Three kinds of tools. Each one replaces a task someone on your team does by hand, every week.</p>
		</div>
		<ul class="lanes">
			{#each services as s, i}
				<li class="lane" id={s.id}>
					<div class="lane-head">
						<span class="chip {i === 0 ? 'accent' : 'auto'}"><span class="dot" aria-hidden="true"></span>{i === 0 ? 'Specialty' : 'Also'}</span>
						<h3>{s.title}</h3>
						<p>{s.pitch}</p>
					</div>
					<ul class="examples" aria-label={`${s.title} examples`}>
						{#each s.examples as e}<li>{e}</li>{/each}
					</ul>
					<dl class="terms">
						<div><dt>Delivery</dt><dd>{s.timeline}</dd></div>
						<div><dt>Price</dt><dd>{s.price}</dd></div>
					</dl>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="section" id="work">
	<div class="wrap">
		<div class="section-head">
			<h2>Done</h2>
			<p>Tools I've shipped: my own products, and in-house tools built for a large data team.</p>
		</div>

		<article class="lead">
			<a class="lead-img" href={`/projects/${lead.slug}`} tabindex="-1" aria-hidden="true">
				<img src={lead.image!.src} alt="" width={lead.image!.width} height={lead.image!.height} loading="lazy" decoding="async" />
			</a>
			<div class="lead-body">
				<p class="kind"><span class="chip auto">{lead.kind}</span></p>
				<h3><a href={`/projects/${lead.slug}`}>{lead.title}</a></h3>
				<p>{lead.summary}</p>
				<ul class="outcomes">
					{#each lead.outcome as o}<li>{o}</li>{/each}
				</ul>
				<p class="lead-links">
					<a href={`/projects/${lead.slug}`}>Read the case study</a>
					<a href="/notes/whatsapp-blur-extension-under-20kb">How it stays under 20KB</a>
				</p>
			</div>
		</article>

		<div class="pair">
			{#each rest as w}
				<article class="mini">
					<p class="kind"><span class="chip auto">{w.kind}</span></p>
					<h3><a href={`/projects/${w.slug}`}>{w.title}</a></h3>
					<p>{w.summary}</p>
					<ul class="outcomes">
						{#each w.outcome.slice(0, 3) as o}<li>{o}</li>{/each}
					</ul>
				</article>
			{/each}
		</div>
		<p class="more"><a class="btn ghost" href="/projects">See all work</a></p>
	</div>
</section>

<section class="section" id="process">
	<div class="wrap">
		<div class="section-head">
			<h2>How a project moves</h2>
			<p>Fixed price, paid per milestone through Upwork escrow. You only release money for work you've tested.</p>
		</div>
		<ol class="flow">
			{#each steps as step, i}
				<li>
					<span class="step-n" aria-hidden="true">{i + 1}</span>
					<div class="flow-card">
						<h3>{step.title}</h3>
						<p>{step.text}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="section" id="about">
	<div class="wrap about">
		<img src="/img/arya.webp" alt="Pixel-art portrait of Arya Aji Kusuma, arms crossed" width="640" height="960" loading="lazy" decoding="async" />
		<div class="prose">
			<h2>Lazy on purpose</h2>
			<p>
				I studied applied statistics, then spent seven years building in-house software for a large data
				organisation. Most of that job came down to one habit: spotting the task people repeat every week, and
				making it disappear.
			</p>
			<p>
				You work with me directly, async and in plain English. I reply within 24 hours, and you get the source
				code when we're done.
			</p>
			<div class="actions">
				<a class="btn" href="/contact">Describe your task</a>
				<a class="btn ghost" href={site.upwork} rel="noopener" target="_blank">Hire me on Upwork</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		padding-block: clamp(2.25rem, 6vw, 4.5rem) clamp(3rem, 7vw, 5rem);
	}
	.intro {
		display: grid;
		gap: 0.5rem 3rem;
		margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
	}
	@media (min-width: 980px) {
		.intro {
			grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
			align-items: end;
		}
	}
	.intro h1 {
		margin: 0;
		max-width: 14ch;
	}
	.intro .lede {
		margin: 0;
	}

	/* Services as swimlanes */
	.lanes {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 1rem;
	}
	.lane {
		display: grid;
		gap: 1rem 2rem;
		padding: 1.25rem;
		background: var(--board);
		border: 1px solid var(--line);
		border-radius: var(--r-panel);
	}
	.lane:first-child {
		border-color: color-mix(in srgb, var(--accent) 55%, var(--line));
	}
	@media (min-width: 900px) {
		.lane {
			padding: 1.75rem;
			grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr) 12rem;
			align-items: start;
		}
	}
	.lane-head h3 {
		font-size: var(--step-2);
		margin: 0.6rem 0 0.4rem;
	}
	.lane-head p {
		margin: 0;
		color: var(--subtext);
	}
	.chip.accent .dot {
		color: var(--accent);
	}
	.chip.auto .dot {
		color: var(--auto);
	}
	.examples {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.5rem;
	}
	.examples li {
		background: var(--card);
		border-radius: var(--r-card);
		padding: 0.6rem 0.8rem;
		box-shadow: var(--shadow);
		line-height: 1.4;
	}
	.terms {
		margin: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.6rem;
	}
	@media (min-width: 900px) {
		.terms {
			grid-template-columns: 1fr;
		}
	}
	.terms div {
		background: var(--column);
		border-radius: var(--r-card);
		padding: 0.6rem 0.8rem;
	}
	.terms dt {
		font-size: var(--step--1);
		color: var(--subtext);
	}
	.terms dd {
		margin: 0;
		font-weight: 700;
		font-size: 1.1rem;
		color: var(--heading);
	}

	/* Done */
	.lead {
		display: grid;
		gap: 1.5rem 2.5rem;
		padding: clamp(1rem, 2.5vw, 1.5rem);
		background: var(--board);
		border: 1px solid var(--line);
		border-radius: var(--r-panel);
	}
	@media (min-width: 900px) {
		.lead {
			grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
			align-items: center;
		}
	}
	.lead-img img {
		border-radius: 12px;
		box-shadow: var(--shadow);
	}
	.lead-body h3 {
		font-size: var(--step-3);
		margin: 0.6rem 0 0.5rem;
	}
	.kind {
		margin: 0;
	}
	h3 a {
		color: var(--heading);
		text-decoration: none;
	}
	h3 a:hover {
		color: var(--accent);
		text-decoration: underline;
		text-decoration-thickness: 2px;
	}
	.outcomes {
		list-style: none;
		padding: 0;
		margin: 1rem 0 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}
	.outcomes li {
		font-size: var(--step--1);
		padding: 0.25em 0.7em;
		border-radius: var(--r-chip);
		background: var(--auto-tint);
		color: var(--heading);
	}
	.lead-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.5rem;
		margin: 1.5rem 0 0;
		font-weight: 600;
	}
	.pair {
		display: grid;
		gap: 1rem;
		margin-top: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
	}
	.mini {
		padding: clamp(1.1rem, 2.5vw, 1.5rem);
		background: var(--card);
		border-radius: var(--r-panel);
		box-shadow: var(--shadow);
	}
	.mini h3 {
		font-size: var(--step-2);
		margin: 0.6rem 0 0.4rem;
	}
	.mini p {
		color: var(--subtext);
		margin: 0;
	}
	.more {
		margin: 2rem 0 0;
	}

	/* Process as a four-column flow */
	.flow {
		list-style: none;
		margin: 0;
		padding: clamp(0.75rem, 2vw, 1.1rem);
		display: grid;
		gap: 0.75rem;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
		background: var(--board);
		border: 1px solid var(--line);
		border-radius: var(--r-panel);
	}
	.flow li {
		background: var(--column);
		border-radius: 14px;
		padding: 0.85rem;
		display: grid;
		gap: 0.6rem;
		align-content: start;
	}
	.step-n {
		font-family: var(--font-display);
		font-weight: 760;
		color: var(--accent);
		font-size: 1.05rem;
		padding-left: 0.2rem;
	}
	.flow-card {
		background: var(--card);
		border-radius: var(--r-card);
		box-shadow: var(--shadow);
		padding: 0.9rem 1rem;
	}
	.flow-card h3 {
		margin-bottom: 0.35rem;
	}
	.flow-card p {
		margin: 0;
		color: var(--subtext);
	}

	/* About */
	.about {
		display: grid;
		gap: 2.5rem;
		align-items: center;
	}
	@media (min-width: 820px) {
		.about {
			grid-template-columns: 17rem minmax(0, 1fr);
		}
	}
	.about img {
		width: 100%;
		max-width: 17rem;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		border-radius: var(--r-panel);
		box-shadow: var(--shadow);
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 1.75rem;
	}
</style>
