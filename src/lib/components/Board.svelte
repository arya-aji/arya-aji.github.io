<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const tasks = [
		{
			chore: 'Copy 214 order IDs from the admin panel into a Google Sheet',
			cost: '3½ h every Friday',
			tool: 'Chrome extension that exports the orders in one click',
			kind: 'Extension',
			tone: 'yellow',
			time: '3–5 days',
			price: '$149–$349'
		},
		{
			chore: 'Merge five regional spreadsheets into the Monday report',
			cost: '2 h every week',
			tool: 'Python job that builds the report and emails it at 7am',
			kind: 'Automation',
			tone: 'green',
			time: '2–4 days',
			price: 'Fixed quote'
		},
		{
			chore: 'Chase field teams for status updates in chat groups',
			cost: 'All week, all day',
			tool: 'Dashboard where teams log progress on a live map',
			kind: 'Internal tool',
			tone: 'teal',
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
		tasks.forEach((_, i) => t.push(setTimeout(() => (moved = i + 1), 800 + i * 600)));
		t.push(setTimeout(() => (playing = false), 800 + tasks.length * 600 + 400));
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
			<span class="count">{tasks.length - moved} left</span>
		</header>
		<ol class="cards">
			{#each tasks as t, i}
				<li class="card" class:gone={i < moved}>
					<p class="title">{t.chore}</p>
					<p class="meta"><span class="chip">{t.cost}</span></p>
				</li>
			{/each}
			<li class="composer" id="your-task">
				<form onsubmit={describe}>
					<label for="task">Your task</label>
					<div class="row">
						<textarea
							id="task"
							name="task"
							rows="2"
							bind:value={task}
							placeholder="What do you do by hand every week?"
						></textarea>
						<button class="btn" type="submit">Describe it</button>
					</div>
				</form>
			</li>
		</ol>
	</section>

	<div class="mover" aria-hidden="true">
		<span class="who">aa</span>
		<svg class="arrow" viewBox="0 0 48 16" width="48" height="16"><path d="M1 8h42m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
	</div>

	<section class="col auto" aria-labelledby="col-auto">
		<header>
			<h2 id="col-auto"><span class="dot" aria-hidden="true"></span>Automated</h2>
			<span class="count">{moved} done</span>
		</header>
		<ol class="cards">
			{#each tasks as t, i}
				<li class="card tone-{t.tone}" class:in={i < moved} class:arrive={playing && i < moved}>
					<p class="title">{t.tool}</p>
					<p class="meta">
						<span class="chip kind">{t.kind}</span>
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
		gap: 0.75rem;
		grid-template-columns: minmax(0, 1fr);
		padding: 0.75rem;
		background: var(--board);
		border: 1px solid var(--line);
		border-radius: var(--r-panel);
	}
	@media (min-width: 880px) {
		.board {
			grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
			align-items: start;
			padding: 1rem;
		}
	}

	.col {
		background: var(--column);
		border-radius: 14px;
		padding: 0.75rem;
	}
	.col header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.1rem 0.3rem 0.6rem;
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
		padding: 0.1rem 0.6rem;
	}

	.cards {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.5rem;
	}

	/* A card's coloured label stripe sits on its top edge, painted into the
	   background so it follows the corner radius. */
	.card {
		--stripe: var(--line-strong);
		background:
			linear-gradient(var(--stripe), var(--stripe)) top / 100% 5px no-repeat,
			var(--card);
		border-radius: var(--r-card);
		padding: 0.8rem 0.85rem 0.65rem;
		box-shadow: var(--shadow);
		transition:
			transform 0.2s cubic-bezier(0.16, 1, 0.3, 1),
			box-shadow 0.2s ease;
	}
	.hand .card {
		--stripe: var(--hand);
	}
	.tone-yellow {
		--stripe: var(--ctp-yellow);
	}
	.tone-green {
		--stripe: var(--ctp-green);
	}
	.tone-teal {
		--stripe: var(--ctp-teal);
	}
	.title {
		margin: 0;
		color: var(--heading);
		font-weight: 600;
		line-height: 1.4;
	}
	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
		margin: 0.5rem 0 0;
	}
	.kind {
		font-weight: 700;
		background: var(--board);
	}

	/* By hand: a moved card stays, struck through, at full contrast */
	.hand .card.gone {
		--stripe: var(--line-strong);
		background:
			linear-gradient(var(--stripe), var(--stripe)) top / 100% 5px no-repeat,
			var(--column);
		box-shadow: inset 0 0 0 1px var(--line-strong);
	}
	@media (max-width: 879px) {
		.hand .card {
			padding: 0.7rem 0.8rem 0.55rem;
		}
		.hand .meta {
			margin-top: 0.35rem;
		}
	}
	.hand .card.gone .title {
		color: var(--subtext);
		text-decoration: line-through;
		text-decoration-color: var(--hand);
		text-decoration-thickness: 2px;
	}

	/* Automated: picked-up feel on hover, like a card in hand */
	.auto .card.in:hover {
		transform: translateY(-2px) rotate(-0.4deg);
		box-shadow: var(--shadow-lift);
	}
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
		gap: 0.45rem;
		padding: 0.7rem;
		border: 1.5px dashed var(--line-strong);
		border-radius: var(--r-card);
	}
	.composer label {
		font-weight: 700;
		font-size: 0.95rem;
		color: var(--heading);
	}
	.row {
		display: grid;
		gap: 0.5rem;
	}
	@media (min-width: 520px) {
		.row {
			grid-template-columns: minmax(0, 1fr) auto;
			align-items: end;
		}
	}
	.composer textarea {
		font: inherit;
		color: var(--text);
		background: var(--card);
		border: 1.5px solid var(--line-strong);
		border-radius: 8px;
		padding: 0.55rem 0.7rem;
		resize: vertical;
		min-height: 3.1rem;
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

	/* The person who moves the work: between columns on desktop, between the
	   stacked columns (arrow pointing down) on mobile */
	.mover {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		color: var(--accent);
	}
	.mover .arrow {
		transform: rotate(90deg);
		width: 32px;
	}
	@media (min-width: 880px) {
		.mover {
			flex-direction: column;
			padding-top: 5rem;
		}
		.mover .arrow {
			transform: none;
			width: 48px;
		}
	}
	.who {
		display: grid;
		place-items: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background: var(--accent);
		color: var(--on-accent);
		font-family: var(--font-display);
		font-weight: 760;
		letter-spacing: -0.04em;
	}

	.note {
		margin: 0.6rem 0 0;
		font-size: var(--step--1);
		color: var(--subtext);
	}
</style>
