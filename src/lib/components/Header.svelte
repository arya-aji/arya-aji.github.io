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

</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 12)} />

<a class="skip" href="#main">Skip to content</a>

<header class="top" class:scrolled>
	<div class="pill">
		<a class="status" href="/" aria-label="Arya Aji Kusuma, home. Available for projects">
			<span class="dot" aria-hidden="true"></span>
			<span>Available</span>
			<span class="sla"><i class="sep" aria-hidden="true"></i>Replies in 24h</span>
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

	/* Live status chip: a pulsing green dot, then the reply promise */
	.status {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		min-height: 40px;
		padding: 0 16px 0 14px;
		border-radius: var(--radius-pill);
		box-shadow: inset 0 0 0 1px var(--color-rule);
		background: var(--color-paper);
		color: var(--color-ink);
		font-size: var(--text-sm);
		font-weight: 500;
		text-decoration: none;
		white-space: nowrap;
		transition: box-shadow var(--dur-short) var(--ease-out);
	}
	.status:hover {
		color: var(--color-ink);
		box-shadow: inset 0 0 0 1px var(--color-ink);
	}
	.status:focus-visible {
		outline: 2px solid var(--color-focus);
		outline-offset: 3px;
	}
	.dot {
		position: relative;
		width: 8px;
		height: 8px;
		flex: none;
		border-radius: 50%;
		background: var(--color-live);
	}
	.dot::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 50%;
		background: var(--color-live);
		animation: ping 2s var(--ease-out) infinite;
	}
	@keyframes ping {
		from {
			transform: scale(1);
			opacity: 0.6;
		}
		to {
			transform: scale(2.8);
			opacity: 0;
		}
	}
	.sla {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		color: var(--color-muted);
	}
	.sep {
		width: 1px;
		height: 14px;
		background: var(--color-rule);
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
		.sla {
			display: none;
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
