<script lang="ts">
	import { page } from '$app/state';
	import { nav } from '$lib/site';

	let open = $state(false);
	const isCurrent = (href: string) =>
		!href.includes('#') && (page.url.pathname === href || page.url.pathname.startsWith(href + '/'));

	$effect(() => {
		page.url.pathname;
		open = false;
	});
</script>

<a class="skip" href="#main">Skip to content</a>

<header class="slab">
	<div class="container bar">
		<a class="mark" href="/" aria-label="Arya Aji Kusuma, home">Arya Aji Kusuma</a>

		<button class="toggle" type="button" aria-expanded={open} aria-controls="site-nav" onclick={() => (open = !open)}>
			{open ? 'Close' : 'Menu'}
		</button>

		<nav id="site-nav" class:open aria-label="Main">
			<ul>
				{#each nav as item}
					<li><a href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>{item.label}</a></li>
				{/each}
			</ul>
			<a class="btn cta" href="/contact">Start a project</a>
		</nav>
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
		background: var(--color-accent);
		color: var(--color-accent-ink);
	}
	.skip:focus {
		top: var(--space-sm);
	}

	/* The slab: one heavy full-width bar, slate glass */
	.slab {
		position: sticky;
		top: 0;
		z-index: var(--z-sticky-nav);
		background: color-mix(in oklab, var(--color-paper) 88%, transparent);
		-webkit-backdrop-filter: blur(var(--glass-blur)) saturate(1.35);
		backdrop-filter: blur(var(--glass-blur)) saturate(1.35);
		box-shadow: inset 0 -1px 0 var(--color-rule);
	}
	.bar {
		display: flex;
		align-items: center;
		gap: var(--space-lg);
		min-height: 72px;
	}
	.mark {
		margin-right: auto;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 1.125rem;
		letter-spacing: -0.01em;
		color: var(--color-ink);
		text-decoration: none;
	}
	.mark:hover {
		color: var(--color-ink);
	}
	.mark:focus-visible {
		outline: 2px solid var(--color-focus);
		outline-offset: 4px;
	}

	nav {
		display: flex;
		align-items: center;
		gap: var(--space-lg);
	}
	nav ul {
		display: flex;
		gap: var(--space-2xs);
		list-style: none;
		margin: 0;
		padding: 0;
	}
	nav ul a {
		display: block;
		padding: var(--space-xs) var(--space-sm);
		border-radius: var(--radius-pill);
		color: var(--color-ink-2);
		font-weight: 600;
		font-size: 0.9375rem;
		text-decoration: none;
		transition: background-color var(--dur-short) var(--ease-out);
	}
	nav ul a:hover {
		background: color-mix(in oklab, var(--color-light) 6%, transparent);
		color: var(--color-ink);
	}
	nav ul a:active {
		background: color-mix(in oklab, var(--color-light) 10%, transparent);
	}
	nav ul a:focus-visible {
		outline: 2px solid var(--color-focus);
		outline-offset: 2px;
	}
	nav ul a[aria-current='page'] {
		color: var(--color-ink);
		background: color-mix(in oklab, var(--color-light) 8%, transparent);
	}

	.toggle {
		display: none;
		min-height: 44px;
		padding: 0 var(--space-md);
		border: 0;
		border-radius: var(--radius-pill);
		background: color-mix(in oklab, var(--color-light) 6%, transparent);
		color: var(--color-ink);
		font-weight: 600;
		cursor: pointer;
	}
	.toggle:hover {
		background: color-mix(in oklab, var(--color-light) 10%, transparent);
	}
	.toggle:active {
		background: color-mix(in oklab, var(--color-light) 14%, transparent);
	}
	.toggle:focus-visible {
		outline: 2px solid var(--color-focus);
		outline-offset: 2px;
	}

	@media (max-width: 60rem) {
		.toggle {
			display: inline-flex;
			align-items: center;
		}
		nav {
			display: none;
			position: absolute;
			inset: 100% 0 auto 0;
			flex-direction: column;
			align-items: stretch;
			gap: var(--space-md);
			padding: var(--space-md) var(--gutter) var(--space-lg);
			background: var(--color-paper);
			box-shadow: inset 0 -1px 0 var(--color-rule);
		}
		nav.open {
			display: flex;
		}
		nav ul {
			flex-direction: column;
		}
		nav ul a {
			padding: var(--space-sm) var(--space-md);
			font-size: 1.0625rem;
		}
	}
</style>
