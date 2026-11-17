<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { services } from '$lib/data/services';
	import { work } from '$lib/data/work';
	import { experience, skills } from '$lib/data/experience';
	import { site } from '$lib/site';
	import { onMount } from 'svelte';

	// Project filter, like the reference: All plus one chip per kind.
	const kinds = ['All', ...new Set(work.map((w) => w.kind))];
	let filter = $state('All');
	const shown = $derived(filter === 'All' ? work : work.filter((w) => w.kind === filter));
	const labels: Record<string, string> = { 'SaaS product': 'SaaS', 'AI tool': 'AI tools', 'Browser extension': 'Extensions' };
	const kindLabel = (k: string) => labels[k] ?? k;

	// Rotating role under the giant name, typed with a caret.
	const roles = ['Chrome Extension Developer', 'Automation Engineer', 'Full-Stack Developer'];
	let typed = $state(roles[0]);
	onMount(() => {
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		let r = 0;
		let n = roles[0].length;
		let deleting = true;
		let wait = 28;
		const id = setInterval(() => {
			if (wait > 0) return void wait--;
			if (deleting) {
				n--;
				if (n === 0) {
					deleting = false;
					r = (r + 1) % roles.length;
					wait = 4;
				}
			} else {
				n++;
				if (n === roles[r].length) {
					deleting = true;
					wait = 32;
				}
			}
			typed = roles[r].slice(0, n);
		}, 60);

		// Reveal sections as they scroll in
		const io = new IntersectionObserver(
			(entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
			{ rootMargin: '0px 0px -10% 0px' }
		);
		document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
		return () => {
			clearInterval(id);
			io.disconnect();
		};
	});

	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'Person',
			'@id': `${site.url}/#person`,
			name: site.name,
			url: site.url,
			image: `${site.url}/img/arya-cutout.webp`,
			jobTitle: 'Full-stack developer',
			email: `mailto:${site.email}`,
			address: { '@type': 'PostalAddress', addressLocality: 'Jakarta', addressCountry: 'ID' },
			alumniOf: { '@type': 'CollegeOrUniversity', name: 'Politeknik Statistika STIS' },
			worksFor: { '@type': 'GovernmentOrganization', name: 'BPS-Statistics Indonesia', url: 'https://www.bps.go.id' },
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

<!-- HERO: giant name, half solid, half outline, portrait standing over it -->
<section class="hero" aria-labelledby="hero-h">
	<div class="container hero-in">
		<h1 id="hero-h" class="mega">
			<span class="solid">Arya</span>
			<span class="outline">Aji</span>
			<span class="visually-hidden">Kusuma, freelance Chrome extension and automation developer</span>
		</h1>

		<img
			class="portrait"
			src="/img/arya-cutout.webp"
			alt="Portrait of Arya Aji Kusuma with arms crossed"
			width="640"
			height="825"
			fetchpriority="high"
			decoding="async"
		/>

		<div class="hero-copy">
			<p class="role" aria-label={roles[0]}><span aria-hidden="true">{typed}</span><span class="caret" aria-hidden="true"></span></p>
			<p class="tag">If I have to do it twice, I build the tool.<br />Chrome extensions, internal tools and automations for small teams.</p>
			<div class="hero-actions">
				<a class="btn arrow" href="#contact">Let’s collaborate</a>
				<a class="btn ghost" href="/resume">
					<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v8m0 0 3.5-3.5M8 10 4.5 6.5M3 13.5h10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
					Resume
				</a>
			</div>
		</div>

		<ul class="hero-social" aria-label="Profiles">
			<li><a href={site.github} rel="me noopener" target="_blank"><svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.33c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.72 1.22 1.88.87 2.34.66.07-.52.28-.87.5-1.07-1.78-.2-3.65-.89-3.65-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0Z" /></svg>GitHub</a></li>
			<li><a href={site.linkedin} rel="me noopener" target="_blank"><svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M3.6 5.3H.9V16h2.7V5.3ZM2.25 0a1.56 1.56 0 1 0 0 3.12 1.56 1.56 0 0 0 0-3.12ZM16 9.9c0-2.88-.62-5.1-3.98-5.1-1.61 0-2.7.89-3.14 1.73h-.05V5.3H6.26V16h2.67v-5.3c0-1.4.27-2.75 2-2.75 1.7 0 1.73 1.6 1.73 2.84V16H16V9.9Z" /></svg>LinkedIn</a></li>
			<li><a href={site.upwork} rel="me noopener" target="_blank"><svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M12.2 9.5c-.7 0-1.37-.3-1.98-.79l.15-.69v-.03c.13-.74.55-1.98 1.83-1.98a1.75 1.75 0 0 1 0 3.5Zm0-5.25c-1.64 0-2.9 1.06-3.42 2.81-.79-1.19-1.39-2.61-1.74-3.81H5.27v4.6a1.6 1.6 0 0 1-3.2 0v-4.6H.3v4.6a3.37 3.37 0 0 0 6.74 0v-.78c.32.67.72 1.35 1.2 1.95l-1.02 4.78h1.8l.74-3.47c.65.41 1.4.68 2.25.68a3.5 3.5 0 0 0 0-6.76Z" /></svg>Upwork</a></li>
			<li><a href={site.extensions} rel="noopener" target="_blank"><svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M6.5 1a1.75 1.75 0 0 1 1.75 1.75V3H11a1 1 0 0 1 1 1v2.75h.25a1.75 1.75 0 1 1 0 3.5H12V14a1 1 0 0 1-1 1H8.25v-.75a1.75 1.75 0 1 0-3.5 0V15H2a1 1 0 0 1-1-1v-3.25h.75a1.75 1.75 0 1 0 0-3.5H1V4a1 1 0 0 1 1-1h2.75v-.25A1.75 1.75 0 0 1 6.5 1Z" /></svg>Extensions</a></li>
		</ul>
	</div>
</section>

<!-- EXPERIENCE -->
<section class="section" id="experience" aria-labelledby="exp-h">
	<div class="container">
		<header class="section-head reveal">
			<div>
				<p class="eyebrow">Experience</p>
				<h2 id="exp-h">Where I’ve worked</h2>
			</div>
			<p>Civil servant at BPS-Statistics Indonesia since 2018, building the internal tools and automations the office runs on. Freelance products and client work on the side.</p>
		</header>

		<ol class="rows">
			{#each experience as job, i}
				<li class="row reveal">
					<span class="idx">{String(i + 1).padStart(2, '0')}</span>
					<div class="row-main">
						<h3>{job.title}</h3>
						<p class="org">{job.org} <span>·</span> {job.where}</p>
						<ul class="points">
							{#each job.points as pt}<li>{pt}</li>{/each}
						</ul>
						<ul class="tag-list" aria-label="Tools">
							{#each job.tags as t}<li>{t}</li>{/each}
						</ul>
						{#if job.link}
							<a class="btn ghost sm arrow row-link" href={job.link.href} rel={job.link.href.startsWith('http') ? 'noopener' : undefined} target={job.link.href.startsWith('http') ? '_blank' : undefined}>{job.link.label}</a>
						{/if}
					</div>
					<span class="when">{job.from} — {job.to}</span>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- PROJECTS -->
<section class="section" id="work" aria-labelledby="work-h">
	<div class="container">
		<header class="section-head reveal">
			<div>
				<p class="eyebrow">Projects</p>
				<h2 id="work-h">Things I’ve built</h2>
			</div>
			<p>From a live tryout SaaS to a computer-vision pipeline and an AI video studio: {work.length} projects pulled from my GitHub.</p>
		</header>

		<div class="filters" role="group" aria-label="Filter projects">
			{#each kinds as k}
				<button type="button" class:on={filter === k} aria-pressed={filter === k} onclick={() => (filter = k)}>{kindLabel(k)}</button>
			{/each}
		</div>

		<div class="grid">
			{#each shown as item (item.slug)}
				<WorkCard {item} />
			{/each}
		</div>
	</div>
</section>

<!-- SERVICES -->
<section class="section" id="services" aria-labelledby="svc-h">
	<div class="container">
		<header class="section-head reveal">
			<div>
				<p class="eyebrow">Services</p>
				<h2 id="svc-h">What I can build for you</h2>
			</div>
			<p>Fixed quote within 24 hours. Paid per milestone through Upwork escrow, released only after you test it.</p>
		</header>

		<ol class="rows">
			{#each services as s, i}
				<li class="row reveal" id={s.id}>
					<span class="idx">{String(i + 1).padStart(2, '0')}</span>
					<div class="row-main">
						<h3>{s.title}</h3>
						<p class="org">{s.pitch}</p>
						<ul class="points">
							{#each s.examples as ex}<li>{ex}</li>{/each}
						</ul>
					</div>
					<span class="when price"><strong>{s.price}</strong><small>{s.timeline}</small></span>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- SKILLS -->
<section class="section" id="skills" aria-labelledby="skills-h">
	<div class="container">
		<header class="section-head reveal">
			<div>
				<p class="eyebrow">Skills</p>
				<h2 id="skills-h">Technical expertise</h2>
			</div>
			<p>The tools I reach for, grouped by the job they do.</p>
		</header>
		<div class="skills">
			{#each skills as g}
				<div class="skill reveal">
					<h3>{g.group}</h3>
					<ul class="tag-list">
						{#each g.items as t}<li>{t}</li>{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CONTACT -->
<section class="section contact" id="contact" aria-labelledby="contact-h">
	<div class="container">
		<p class="eyebrow">Contact</p>
		<h2 id="contact-h" class="big reveal">Let’s automate the boring part together.</h2>
		<p class="contact-note">Open to freelance projects: Chrome extensions, internal tools and data automation. Tell me the chore you repeat; I reply within 24 hours from Jakarta (UTC+7).</p>
		<div class="form-wrap">
			<ContactForm compact secondary={{ label: 'Hire on Upwork', href: site.upwork }} />
		</div>
	</div>
</section>

<style>
	/* ---------- Hero ---------- */
	.hero {
		position: relative;
		overflow: hidden;
		margin-top: -76px; /* slide under the floating nav */
		padding-top: 96px;
	}
	.hero-in {
		position: relative;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		grid-template-areas:
			'name name'
			'copy social';
		min-height: min(100svh, 860px);
		align-content: space-between;
		padding-bottom: 0;
	}
	.mega {
		grid-area: name;
		position: relative;
		z-index: 1;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		max-width: none;
		margin: 0;
		font-size: clamp(4.25rem, 13.2vw, 13rem);
		line-height: 0.82;
		letter-spacing: -0.045em;
		text-transform: uppercase;
		font-variation-settings: 'wdth' 118;
		text-wrap: nowrap;
	}
	.mega > span {
		display: inline-block;
		animation: rise 1s var(--ease-out) both;
	}
	.outline {
		color: transparent;
		-webkit-text-stroke: clamp(1.5px, 0.22vw, 3px) var(--color-ink);
		animation-delay: 120ms !important;
	}
	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(18%);
		}
	}

	.portrait {
		position: absolute;
		z-index: 2;
		left: 50%;
		bottom: 0;
		height: 90%;
		width: auto;
		max-width: none;
		transform: translateX(-50%);
		-webkit-mask-image: linear-gradient(to bottom, #000 82%, transparent 99%);
		mask-image: linear-gradient(to bottom, #000 82%, transparent 99%);
		animation: fade 1.2s var(--ease-out) 200ms both;
		pointer-events: none;
	}
	@keyframes fade {
		from {
			opacity: 0;
			transform: translateX(-50%) translateY(24px);
		}
	}

	.hero-copy {
		grid-area: copy;
		position: relative;
		z-index: 3;
		align-self: center;
		max-width: 30ch;
		padding-block: var(--space-2xl) var(--space-3xl);
	}
	.role {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: clamp(1.3rem, 1vw + 0.9rem, 1.75rem);
		letter-spacing: -0.02em;
		line-height: 1.1;
		white-space: nowrap;
		color: var(--color-ink);
	}
	.caret {
		display: inline-block;
		width: 2px;
		height: 0.95em;
		margin-left: 3px;
		vertical-align: -0.1em;
		background: var(--color-ink);
		animation: blink 1s steps(1) infinite;
	}
	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
	.tag {
		margin-top: var(--space-md);
		color: var(--color-muted);
		font-size: 0.9375rem;
		line-height: 1.6;
	}
	.hero-actions {
		display: grid;
		justify-items: start;
		gap: var(--space-sm);
		margin-top: var(--space-xl);
	}

	.hero-social {
		grid-area: social;
		position: relative;
		z-index: 3;
		align-self: center;
		justify-self: end;
		display: grid;
		justify-items: end;
		gap: var(--space-sm);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.hero-social a {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 8px 16px;
		border-radius: var(--radius-pill);
		background: var(--color-paper);
		box-shadow: inset 0 0 0 1px var(--color-rule);
		color: var(--color-ink);
		font-size: var(--text-sm);
		font-weight: 500;
		text-decoration: none;
		transition: box-shadow var(--dur-short) var(--ease-out), transform var(--dur-short) var(--ease-out);
	}
	.hero-social a:hover {
		box-shadow: inset 0 0 0 1px var(--color-ink);
		transform: translateX(-3px);
	}
	.hero-social svg {
		width: 15px;
		height: 15px;
	}

	@media (max-width: 52rem) {
		.hero {
			margin-top: -76px;
			padding-top: 100px;
		}
		.hero-in {
			grid-template-columns: minmax(0, 1fr);
			grid-template-areas: 'name' 'portrait' 'copy' 'social';
			min-height: 0;
		}
		.mega {
			font-size: clamp(3rem, 16vw, 8rem);
			font-variation-settings: 'wdth' 100;
		}
		.portrait {
			grid-area: portrait;
			position: relative;
			left: auto;
			transform: none;
			justify-self: center;
			height: auto;
			width: min(78vw, 360px);
			margin-top: -10%;
			animation-name: fade-m;
		}
		@keyframes fade-m {
			from {
				opacity: 0;
				transform: translateY(24px);
			}
		}
		.hero-copy {
			padding-block: var(--space-xl) var(--space-lg);
			max-width: none;
		}
		.role {
			white-space: normal;
			min-height: 1.1em;
		}
		.hero-actions {
			display: flex;
			flex-wrap: wrap;
		}
		.hero-social {
			justify-self: start;
			display: flex;
			flex-wrap: wrap;
			padding-bottom: var(--space-xl);
		}
	}

	/* ---------- Sections ---------- */
	.section {
		padding-block: var(--section-gap-s);
	}
	#experience {
		border-top: 1px solid var(--color-rule);
	}

	/* Numbered rows: index · content · date */
	.rows {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.row {
		display: grid;
		grid-template-columns: 72px minmax(0, 1fr) auto;
		gap: var(--space-lg);
		padding-block: var(--space-xl);
		border-top: 1px solid var(--color-rule);
	}
	.row:last-child {
		border-bottom: 1px solid var(--color-rule);
	}
	.idx {
		font-size: var(--text-sm);
		color: var(--color-muted);
		font-variant-numeric: tabular-nums;
		padding-top: 0.4em;
	}
	.row-main h3 {
		font-size: clamp(1.35rem, 1vw + 1rem, 1.85rem);
		max-width: none;
	}
	.org {
		margin-top: var(--space-2xs);
		color: var(--color-muted);
		font-size: 0.9375rem;
		max-width: 60ch;
	}
	.org span {
		margin-inline: 2px;
	}
	.points {
		display: grid;
		gap: var(--space-sm);
		margin: var(--space-lg) 0;
		padding: 0;
		list-style: none;
		max-width: 64ch;
	}
	.points li {
		padding-left: var(--space-md);
		border-left: 2px solid var(--color-ink);
		color: var(--color-ink-2);
		line-height: 1.6;
	}
	.row-link {
		margin-top: var(--space-lg);
	}
	.when {
		font-size: var(--text-sm);
		color: var(--color-muted);
		white-space: nowrap;
		font-variant-numeric: tabular-nums;
		padding-top: 0.4em;
	}
	.price {
		display: grid;
		justify-items: end;
		align-content: start;
		gap: 2px;
	}
	.price strong {
		font-family: var(--font-display);
		font-size: var(--text-lg);
		font-weight: 800;
		color: var(--color-ink);
	}
	@media (max-width: 48rem) {
		.row {
			grid-template-columns: minmax(0, 1fr);
			gap: var(--space-xs);
		}
		.idx,
		.when {
			padding-top: 0;
		}
		.when {
			order: -1;
			justify-self: start;
		}
		.idx {
			order: -2;
		}
		.price {
			justify-items: start;
		}
	}

	/* Project filter + grid */
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
		margin: calc(-1 * var(--space-lg)) 0 var(--space-xl);
	}
	.filters button {
		min-height: 42px;
		padding: 0 20px;
		border: 0;
		border-radius: var(--radius-pill);
		background: var(--color-paper);
		box-shadow: inset 0 0 0 1px var(--color-rule);
		color: var(--color-ink);
		font-size: var(--text-sm);
		font-weight: 500;
		cursor: pointer;
		transition: background-color var(--dur-short) var(--ease-out), color var(--dur-short) var(--ease-out);
	}
	.filters button:hover {
		box-shadow: inset 0 0 0 1px var(--color-ink);
	}
	.filters button.on {
		background: var(--color-ink);
		color: var(--color-paper);
		box-shadow: none;
	}
	.filters button:focus-visible {
		outline: 2px solid var(--color-focus);
		outline-offset: 2px;
	}
	.grid {
		display: grid;
		gap: var(--space-lg);
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
	}
	@media (min-width: 60rem) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	/* Skills */
	.skills {
		display: grid;
		gap: var(--space-lg);
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 19rem), 1fr));
	}
	.skill {
		padding: var(--space-lg);
		border: 1px solid var(--color-rule);
		border-radius: var(--radius-card);
	}
	.skill h3 {
		font-size: var(--text-md);
		font-family: var(--font-body);
		font-weight: 700;
		letter-spacing: 0;
		font-variation-settings: normal;
		margin-bottom: var(--space-md);
	}

	/* Contact */
	.contact {
		padding-block: var(--section-gap) var(--section-gap-s);
	}
	.big {
		max-width: 15ch;
		font-size: clamp(2.75rem, 7vw, 6.25rem);
		line-height: 0.95;
	}
	.contact-note {
		margin-top: var(--space-xl);
		max-width: 56ch;
		color: var(--color-muted);
		font-size: var(--text-lead);
		line-height: 1.5;
	}
	.form-wrap {
		max-width: 680px;
		margin: var(--space-2xl) auto 0;
	}

	/* Scroll reveal (progressive: content is visible without JS) */
	:global(html.js) .reveal {
		opacity: 0;
		transform: translateY(16px);
		transition:
			opacity var(--dur-long) var(--ease-out),
			transform var(--dur-long) var(--ease-out);
	}
	:global(html.js) .reveal:global(.in) {
		opacity: 1;
		transform: none;
	}
	@media (prefers-reduced-motion: reduce) {
		.mega > span,
		.portrait {
			animation: none;
		}
		:global(html.js) .reveal {
			opacity: 1;
			transform: none;
		}
	}
</style>
