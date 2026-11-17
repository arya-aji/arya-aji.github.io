<script lang="ts">
	import { page } from '$app/state';
	import { nav } from '$lib/site';

	let open = $state(false);
	let scrolled = $state(false);

	const isCurrent = (href: string) =>
		!href.includes('#') && (page.url.pathname === href || page.url.pathname.startsWith(href + '/'));

	$effect(() => {
		page.url.pathname;
		open = false;
	});

	// 8-bit coin, drawn with box-shadows on one 2px pixel. o outline, y gold, h highlight.
	const coinMap = ['..oooo..', '.oyyyyo.', 'oyhyyyyo', 'oyhyyyyo', 'oyhyyyyo', 'oyhyyyyo', '.oyyyyo.', '..oooo..'];
	const tone: Record<string, string> = { o: '#6b3d00', y: '#f8c630', h: '#fff4c2' };
	const coin = coinMap
		.flatMap((row, y) => [...row].map((c, x) => (c === '.' ? '' : `${x * 2}px ${y * 2}px 0 ${tone[c]}`)))
		.filter(Boolean)
		.join(',');
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 12)} />

<a class="skip" href="#main">Skip to content</a>

<header class="top" class:scrolled>
	<div class="pill">
		<a class="status" href="/" aria-label="Arya Aji Kusuma, home. Available for projects">
			<span class="coin" aria-hidden="true"><i style={`box-shadow:${coin}`}></i></span>
			<span class="status-text">Available for projects<span class="blink">_</span></span>
			<span class="status-short" aria-hidden="true">Arya Aji</span>
		</a>

		<nav id="site-nav" class:open aria-label="Main">
			<ul>
				{#each nav as item}
					<li>
						<a href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined} onclick={() => (open = false)}>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<a class="btn sm arrow cta" href="/contact">Let’s talk</a>

		<button class="toggle" type="button" aria-expanded={open} aria-controls="site-nav" aria-label={open ? 'Close menu' : 'Open menu'} onclick={() => (open = !open)}>
			<span class="bars" class:x={open} aria-hidden="true"><i></i><i></i></span>
		</button>
	</div>
</header>

<style>
	.skip {
		position: absolute;
		left: var(--space-md);
		top: calc(-1 * var(--space-3xl));
		z-index: var(--z-tooltip);
		padding: var(--space-xs) var(--space-md);
		border-radius: var(--radius-pill);
		background: var(--color-ink);
		color: var(--color-paper);
	}
	.skip:focus {
		top: var(--space-sm);
	}

	/* A floating pill, centred, that lifts off the page once you scroll */
	.top {
		position: sticky;
		top: 0;
		z-index: var(--z-sticky-nav);
		display: flex;
		justify-content: center;
		padding: var(--space-md) var(--space-md) 0;
		pointer-events: none;
	}
	.pill {
		pointer-events: auto;
		position: relative;
		display: flex;
		align-items: center;
		gap: var(--space-lg);
		width: min(100%, 980px);
		min-height: 60px;
		padding: 8px 8px 8px 10px;
		border-radius: var(--radius-pill);
		background: var(--glass);
		-webkit-backdrop-filter: blur(var(--glass-blur)) saturate(1.4);
		backdrop-filter: blur(var(--glass-blur)) saturate(1.4);
		box-shadow: inset 0 0 0 1px var(--color-rule);
		transition: box-shadow var(--dur-short) var(--ease-out);
	}
	.scrolled .pill {
		box-shadow: inset 0 0 0 1px var(--color-rule), var(--shadow-float);
	}

	/* 8-bit status chip: notched pixel corners, pixel font, a spinning coin */
	.status {
		--px: 3px;
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 10px;
		min-height: 40px;
		padding: 0 16px 0 12px;
		background: var(--color-ink);
		color: var(--color-paper);
		font-family: 'Press Start 2P', ui-monospace, monospace;
		font-size: 9px;
		line-height: 1;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		text-decoration: none;
		white-space: nowrap;
		image-rendering: pixelated;
		clip-path: polygon(
			0 var(--px), var(--px) var(--px), var(--px) 0,
			calc(100% - var(--px)) 0, calc(100% - var(--px)) var(--px), 100% var(--px),
			100% calc(100% - var(--px)), calc(100% - var(--px)) calc(100% - var(--px)), calc(100% - var(--px)) 100%,
			var(--px) 100%, var(--px) calc(100% - var(--px)), 0 calc(100% - var(--px))
		);
		transition: background-color var(--dur-micro) steps(2);
	}
	.status:hover {
		color: var(--color-paper);
		background: #1f1f1f;
	}
	.status:focus-visible {
		outline: 2px solid var(--color-focus);
		outline-offset: 3px;
	}
	.coin {
		position: relative;
		width: 16px;
		height: 16px;
		flex: none;
		animation: spin 1.2s steps(1) infinite;
	}
	.coin i {
		position: absolute;
		top: 0;
		left: 0;
		width: 2px;
		height: 2px;
	}
	@keyframes spin {
		0% { transform: scaleX(1); }
		25% { transform: scaleX(0.5); }
		50% { transform: scaleX(0.15); }
		75% { transform: scaleX(0.5); }
	}
	/* Hover: the coin pops up, like a pickup */
	.status:hover .coin {
		animation: spin 0.4s steps(1) infinite, pop 0.5s steps(5) both;
	}
	@keyframes pop {
		0% { translate: 0 0; }
		40% { translate: 0 -6px; }
		100% { translate: 0 0; }
	}
	.blink {
		margin-left: 2px;
		animation: blink 1s steps(1) infinite;
	}
	@keyframes blink {
		50% { opacity: 0; }
	}
	.status-short {
		display: none;
	}

	nav {
		margin-left: auto;
	}
	nav ul {
		display: flex;
		align-items: center;
		gap: var(--space-2xs);
		list-style: none;
		margin: 0;
		padding: 0;
	}
	nav a {
		display: inline-flex;
		align-items: center;
		min-height: 40px;
		padding: 0 14px;
		border-radius: var(--radius-pill);
		color: var(--color-ink-2);
		font-size: var(--text-sm);
		font-weight: 500;
		line-height: 1;
		text-decoration: none;
		transition:
			background-color var(--dur-short) var(--ease-out),
			color var(--dur-short) var(--ease-out);
	}
	nav a:hover,
	nav a[aria-current='page'] {
		color: var(--color-ink);
		background: var(--color-paper-2);
	}

	.cta {
		min-height: 44px;
	}

	.toggle {
		display: none;
		width: 44px;
		height: 44px;
		border: 0;
		border-radius: 50%;
		background: var(--color-ink);
		color: var(--color-paper);
		cursor: pointer;
		place-items: center;
	}
	.bars {
		display: grid;
		gap: 5px;
	}
	.bars i {
		display: block;
		width: 16px;
		height: 1.5px;
		background: currentColor;
		transition: transform var(--dur-short) var(--ease-out);
	}
	.bars.x i:first-child {
		transform: translateY(3.25px) rotate(45deg);
	}
	.bars.x i:last-child {
		transform: translateY(-3.25px) rotate(-45deg);
	}

	@media (max-width: 64rem) {
		.status-text {
			display: none;
		}
		.status-short {
			display: inline;
		}
	}
	@media (max-width: 52rem) {
		.toggle {
			display: grid;
		}
		.cta {
			margin-left: auto;
		}
		nav {
			display: none;
			position: absolute;
			top: calc(100% + 8px);
			left: 0;
			right: 0;
			padding: var(--space-sm);
			border-radius: var(--radius-card);
			background: var(--color-paper);
			box-shadow: inset 0 0 0 1px var(--color-rule), var(--shadow-float);
		}
		nav.open {
			display: block;
		}
		nav ul {
			flex-direction: column;
			align-items: stretch;
		}
		nav a {
			display: flex;
			padding: 14px 16px;
			border-radius: var(--radius-inner);
			font-size: 1.0625rem;
		}
	}
	@media (max-width: 24rem) {
		.cta {
			display: none;
		}
		.toggle {
			margin-left: auto;
		}
	}
</style>
