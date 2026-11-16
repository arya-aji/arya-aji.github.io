<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const tasks = [
		{
			chore: 'Copy 214 order IDs from the admin panel into a Google Sheet',
			cost: '3½ h every Friday',
			tool: 'Chrome extension that exports the orders in one click',
			kind: 'Extension',
			time: '3–5 days',
			price: '$149–$349'
		},
		{
			chore: 'Merge five regional spreadsheets into the Monday report',
			cost: '2 h every week',
			tool: 'Python job that builds the report and emails it at 7am',
			kind: 'Automation',
			time: '2–4 days',
			price: 'Fixed quote'
		},
		{
			chore: 'Chase field teams for status updates in chat groups',
			cost: 'All week, all day',
			tool: 'Dashboard where teams log progress on a live map',
			kind: 'Internal tool',
			time: '1–2 weeks',
			price: 'Fixed quote'
		}
	];

	// How many tasks have moved to "Automated". Starts complete so the page
	// is correct without JavaScript; the move plays once after hydration.
	let moved = $state(tasks.length);
	let playing = $state(false);
	let task = $state('');

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		moved = 0;
		playing = true;
		const t: ReturnType<typeof setTimeout>[] = [];
		tasks.forEach((_, i) => t.push(setTimeout(() => (moved = i + 1), 900 + i * 650)));
		t.push(setTimeout(() => (playing = false), 900 + tasks.length * 650 + 400));
		return () => t.forEach(clearTimeout);
	});

	function describe(e: SubmitEvent) {
		e.preventDefault();
		const q = task.trim();
		goto(q ? `/contact?task=${encodeURIComponent(q)}` : '/contact');
	}
</script>

<div class="board" aria-label="Example board: typical manual tasks and the tools that replace them">
	<section class="col hand" aria-labelledby="col-hand">
		<header>
			<h2 id="col-hand"><span class="dot" aria-hidden="true"></span>By hand</h2>
			<span class="count">{tasks.length - moved}</span>
		</header>
		<ol class="cards">
			{#each tasks as t, i}
				<li class="card" class:gone={i < moved}>
					<p class="title">{t.chore}</p>
					<p class="meta"><span class="chip hand">{t.cost}</span></p>
				</li>
			{/each}
			<li class="composer">
				<form onsubmit={describe}>
					<label for="task">Your task</label>
					<textarea
						id="task"
						name="task"
						rows="3"
						bind:value={task}
						placeholder="What do you do by hand every week?"
					></textarea>
					<button class="btn" type="submit">Describe it</button>
				</form>
			</li>
		</ol>
	</section>

	<div class="mover" aria-hidden="true">
		<span class="who">aa</span>
		<svg viewBox="0 0 48 16" width="48" height="16"><path d="M1 8h42m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
	</div>

	<section class="col auto" aria-labelledby="col-auto">
		<header>
			<h2 id="col-auto"><span class="dot" aria-hidden="true"></span>Automated</h2>
			<span class="count">{moved}</span>
		</header>
		<ol class="cards">
			{#each tasks as t, i}
				<li class="card" class:in={i < moved} class:arrive={playing && i < moved}>
					<p class="label"><span class="chip auto">{t.kind}</span></p>
					<p class="title">{t.tool}</p>
					<p class="meta">
						<span class="chip"><svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M8 4.5V8l2.5 1.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" /></svg>{t.time}</span>
						<span class="chip">{t.price}</span>
					</p>
				</li>
			{/each}
		</ol>
	</section>
</div>
<p class="note">Example tasks, the kind I take on. Extension prices are listed; everything else gets a fixed quote once you describe the task.</p>

<style>
	.board {
		display: grid;
		gap: 1rem;
		grid-template-columns: minmax(0, 1fr);
		padding: clamp(0.75rem, 2vw, 1.25rem);
		background: var(--board);
		border: 1px solid var(--line);
		border-radius: var(--r-panel);
	}
	@media (min-width: 880px) {
		.board {
			grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
			align-items: start;
		}
	}

	.col {
		background: var(--column);
		border-radius: 14px;
		padding: 0.85rem;
	}
	.col header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.15rem 0.35rem 0.75rem;
	}
	.col h2 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin: 0;
		font-size: 1.05rem;
		letter-spacing: -0.01em;
	}
	.hand h2 .dot {
		color: var(--hand);
	}
	.auto h2 .dot {
		color: var(--auto);
	}
	.count {
		font-size: var(--step--1);
		font-variant-numeric: tabular-nums;
		color: var(--subtext);
		background: var(--board);
		border-radius: var(--r-chip);
		min-width: 1.8rem;
		text-align: center;
		padding: 0.05rem 0.5rem;
	}

	.cards {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.6rem;
	}
	.card {
		background: var(--card);
		border-radius: var(--r-card);
		padding: 0.8rem 0.9rem;
		box-shadow: var(--shadow);
	}
	.title {
		margin: 0;
		color: var(--heading);
		font-weight: 600;
		line-height: 1.4;
	}
	.label {
		margin: 0 0 0.45rem;
	}
	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
		margin: 0.6rem 0 0;
	}

	/* By hand: a moved card stays as a struck-through ghost of itself */
	.hand .card {
		transition:
			opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
			filter 0.5s ease;
	}
	.hand .card.gone {
		opacity: 0.68;
		filter: saturate(0.4);
		box-shadow: none;
	}
	.hand .card.gone .title {
		text-decoration: line-through;
		text-decoration-color: var(--hand);
		text-decoration-thickness: 2px;
	}

	/* Automated: cards exist in the layout but are invisible until moved in */
	.auto .card {
		opacity: 0;
		transform: translateX(-24px);
	}
	.auto .card.in {
		opacity: 1;
		transform: none;
	}
	.auto .card.arrive {
		animation: arrive 0.7s cubic-bezier(0.16, 1, 0.3, 1);
	}
	@keyframes arrive {
		0% {
			opacity: 0;
			transform: translateX(-48px) rotate(-1.5deg);
			box-shadow: var(--shadow-lift);
		}
		60% {
			opacity: 1;
			transform: translateX(4px) rotate(0.4deg);
			box-shadow: var(--shadow-lift);
		}
		100% {
			transform: none;
		}
	}

	.composer form {
		display: grid;
		gap: 0.5rem;
		padding: 0.8rem;
		border: 1.5px dashed var(--line-strong);
		border-radius: var(--r-card);
	}
	.composer label {
		font-weight: 700;
		font-size: 0.95rem;
		color: var(--heading);
	}
	.composer textarea {
		font: inherit;
		color: var(--text);
		background: var(--card);
		border: 1.5px solid var(--line-strong);
		border-radius: 8px;
		padding: 0.6rem 0.7rem;
		resize: vertical;
		min-height: 4.5rem;
	}
	.composer textarea::placeholder {
		color: var(--ctp-subtext0);
	}
	.composer textarea:focus {
		outline: 3px solid var(--accent);
		outline-offset: 0;
		border-color: var(--accent);
	}
	.composer .btn {
		justify-self: start;
	}

	.mover {
		display: none;
	}
	@media (min-width: 880px) {
		.mover {
			display: grid;
			justify-items: center;
			gap: 0.5rem;
			padding-top: 5.5rem;
			color: var(--accent);
		}
	}
	.who {
		display: grid;
		place-items: center;
		width: 2.6rem;
		height: 2.6rem;
		border-radius: 50%;
		background: var(--accent);
		color: var(--on-accent);
		font-family: var(--font-display);
		font-weight: 760;
		letter-spacing: -0.04em;
	}

	.note {
		margin: 0.75rem 0 0;
		font-size: var(--step--1);
		color: var(--subtext);
	}
</style>
