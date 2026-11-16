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
				I'm Arya, a freelance developer in Jakarta. I build Chrome extensions, internal tools and automations
				for small teams.
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
		<div class="svc-board">
			{#each services as s, i}
				<section class="svc-col" class:lead-col={i === 0} id={s.id} aria-labelledby={`svc-${s.id}`}>
					<h3 id={`svc-${s.id}`}>{s.title}</h3>
					<p class="pitch">{s.pitch}</p>
					<ul class="examples" aria-label={`Tasks a ${s.title.toLowerCase()} project takes over`}>
						{#each s.examples as e}<li class="tone-{s.id}">{e}</li>{/each}
					</ul>
					<p class="terms">
						<span class="chip"><svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M8 4.5V8l2.5 1.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" /></svg>{s.timeline}</span>
						<span class="chip price">{s.price}</span>
					</p>
				</section>
			{/each}
		</div>
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
				<h3><a href={`/projects/${lead.slug}`}>{lead.title}</a></h3>
				<p class="kind">{lead.kind}, {lead.year}</p>
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
					<h3><a href={`/projects/${w.slug}`}>{w.title}</a></h3>
					<p class="kind">{w.kind}, {w.year}</p>
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
		padding-block: 1.5rem 3rem;
	}
	@media (min-width: 760px) {
		.hero {
			padding-block: 2.25rem 4.5rem;
		}
	}
	.intro {
		display: grid;
		gap: 0.5rem 3rem;
		margin-bottom: 1.25rem;
	}
	.intro h1 {
		font-size: clamp(2.2rem, 1.4rem + 3.2vw, 3.6rem);
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
	@media (max-width: 759px) {
		.intro .lede {
			font-size: 1.08rem;
		}
	}

	/* Services: one board, a column per service, the chores it absorbs as cards */
	.svc-board {
		display: grid;
		gap: 0.75rem;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 19rem), 1fr));
		padding: 0.75rem;
		background: var(--board);
		border: 1px solid var(--line);
		border-radius: var(--r-panel);
	}
	@media (min-width: 760px) {
		.svc-board {
			padding: 1rem;
		}
	}
	.svc-col {
		display: flex;
		flex-direction: column;
		background: var(--column);
		border-radius: 14px;
		padding: 1rem;
	}
	.lead-col {
		box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--accent) 60%, transparent);
	}
	.svc-col h3 {
		font-size: var(--step-2);
		margin: 0 0 0.4rem;
	}
	.pitch {
		color: var(--subtext);
		margin-bottom: 1rem;
	}
	.examples {
		list-style: none;
		margin: 0 0 1rem;
		padding: 0;
		display: grid;
		gap: 0.5rem;
	}
	.examples li {
		--stripe: var(--ctp-teal);
		background:
			linear-gradient(var(--stripe), var(--stripe)) top / 100% 4px no-repeat,
			var(--card);
		border-radius: var(--r-card);
		padding: 0.75rem 0.85rem 0.6rem;
		box-shadow: var(--shadow);
		line-height: 1.4;
		color: var(--heading);
	}
	.examples li.tone-extensions {
		--stripe: var(--ctp-yellow);
	}
	.examples li.tone-automation {
		--stripe: var(--ctp-green);
	}
	.terms {
		margin: auto 0 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}
	.terms .chip {
		background: var(--board);
		font-size: 0.92rem;
	}
	.terms .price {
		font-weight: 700;
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
		margin: 0 0 0.3rem;
	}
	.kind {
		margin: 0 0 0.6rem;
		font-size: var(--step--1);
		color: var(--subtext);
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
		margin: 0 0 0.3rem;
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
