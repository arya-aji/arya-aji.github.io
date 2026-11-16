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

<header class="site-header">
	<div class="wrap bar">
		<a class="mark" href="/">
			<span class="mono" aria-hidden="true">aa</span>
			<span class="name">Arya Aji Kusuma</span>
		</a>

		<button
			class="toggle"
			type="button"
			aria-expanded={open}
			aria-controls="site-nav"
			onclick={() => (open = !open)}
		>
			<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
				{#if open}
					<path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				{:else}
					<path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				{/if}
			</svg>
			Menu
		</button>

		<nav id="site-nav" class:open aria-label="Main">
			<ul>
				{#each nav as item}
					<li>
						<a href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>{item.label}</a>
					</li>
				{/each}
			</ul>
			<a class="btn cta" href="/contact">Start a project</a>
		</nav>
	</div>
</header>

<style>
	.skip {
		position: absolute;
		left: 1rem;
		top: -4rem;
		background: var(--accent);
		color: var(--on-accent);
		padding: 0.5rem 0.9rem;
		border-radius: var(--r-card);
		z-index: 20;
	}
	.skip:focus {
		top: 0.75rem;
	}

	.site-header {
		position: sticky;
		top: 0;
		z-index: 10;
		background: color-mix(in srgb, var(--bg) 92%, transparent);
		backdrop-filter: saturate(1.4) blur(10px);
		border-bottom: 1px solid var(--line);
	}
	.bar {
		display: flex;
		align-items: center;
		gap: 1rem;
		min-height: 4rem;
	}

	.mark {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		color: var(--heading);
		text-decoration: none;
		font-family: var(--font-display);
		font-weight: 700;
		letter-spacing: -0.01em;
		margin-right: auto;
	}
	.mono {
		display: grid;
		place-items: center;
		width: 2.1rem;
		height: 2.1rem;
		border-radius: 50%;
		background: var(--accent);
		color: var(--on-accent);
		font-weight: 760;
		letter-spacing: -0.04em;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	nav ul {
		display: flex;
		gap: 0.15rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	nav ul a {
		display: block;
		padding: 0.45rem 0.75rem;
		border-radius: var(--r-chip);
		color: var(--text);
		text-decoration: none;
		font-weight: 600;
	}
	nav ul a:hover {
		background: var(--column);
		color: var(--heading);
	}
	nav ul a[aria-current='page'] {
		background: var(--accent-tint);
		color: var(--accent);
	}
	.cta {
		padding: 0.55em 1em;
		font-size: 0.97rem;
	}

	.toggle {
		display: none;
		align-items: center;
		gap: 0.4rem;
		font: 600 0.95rem var(--font-body);
		color: var(--heading);
		background: var(--column);
		border: 0;
		border-radius: var(--r-chip);
		padding: 0.45rem 0.85rem;
		cursor: pointer;
	}

	@media (max-width: 820px) {
		.toggle {
			display: inline-flex;
		}
		nav {
			display: none;
			position: absolute;
			left: 0;
			right: 0;
			top: 100%;
			flex-direction: column;
			align-items: stretch;
			padding: 0.75rem var(--gutter) 1.25rem;
			background: var(--bg);
			border-bottom: 1px solid var(--line);
			box-shadow: var(--shadow);
		}
		nav.open {
			display: flex;
		}
		nav ul {
			flex-direction: column;
		}
		nav ul a {
			padding: 0.75rem 0.9rem;
			border-radius: var(--r-card);
		}
		.cta {
			margin-top: 0.5rem;
		}
	}
	@media (max-width: 420px) {
		.name {
			display: none;
		}
	}
</style>
