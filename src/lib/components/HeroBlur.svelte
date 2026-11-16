<script lang="ts">
	// The owner's real extension, rebuilt as its popup so a visitor can try it.
	// Sample chats only: names and messages are examples.
	const chats = [
		{ initial: 'E', name: 'Example Studio', msg: 'Invoice 0042 is attached, due Friday' },
		{ initial: 'M', name: 'Mum', msg: 'Dinner at seven? Bring the charger' },
		{ initial: 'C', name: 'Example Client', msg: 'Can we move the call to 3pm?' }
	];

	// Messages start clear and names blurred, so the first screen shows the effect, not three smudged rows.
	let settings = $state({ text: false, names: true, photos: true });
	const on = $derived(settings.text || settings.names || settings.photos);
</script>

<div class="pane glass" data-slot="hero-product" data-kind="product" data-alt="A screenshot of the Blur Your WhatsApp popup over a blurred WhatsApp Web chat list">
	<div class="head">
		<p class="title">Blur Your WhatsApp</p>
	</div>

	<ul class="chats" aria-label="Example chat list">
		{#each chats as c}
			<li>
				<span class="avatar" class:blur={settings.photos} aria-hidden="true">{c.initial}</span>
				<span class="who">
					<span class="name" class:blur={settings.names}>{c.name}</span>
					<span class="msg" class:blur={settings.text}>{c.msg}</span>
				</span>
			</li>
		{/each}
	</ul>

	<fieldset class="switches">
		<legend class="visually-hidden">What to blur</legend>
		<label><span>Messages</span><input type="checkbox" role="switch" bind:checked={settings.text} /></label>
		<label><span>Contact names</span><input type="checkbox" role="switch" bind:checked={settings.names} /></label>
		<label><span>Profile photos</span><input type="checkbox" role="switch" bind:checked={settings.photos} /></label>
	</fieldset>

	<div class="foot">
		<p class="state" role="status">
			{#if on}<span class="ok">Safe to share your screen</span>{:else}<span class="open">Everything visible</span>{/if}
		</p>
		<p class="note">My own extension. Flip the switches.</p>
	</div>
</div>

<style>
	.pane {
		/* Deeper smoke than the shared glass, so the popup holds over pale fog with or without the photograph */
		background: color-mix(in oklab, var(--color-paper) 84%, transparent);
		box-shadow: inset 0 1px 0 color-mix(in oklab, var(--color-light) 30%, transparent), var(--shadow-card);
		width: 100%;
		max-width: 440px;
		padding: var(--space-lg);
		display: grid;
		gap: var(--space-md);
		overflow: visible;
	}
	.head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: var(--space-md);
	}
	.title {
		font-weight: 600;
		color: var(--color-ink);
	}

	.chats {
		list-style: none;
		margin: 0;
		padding: 0;
		border-radius: var(--radius-inner);
		background: color-mix(in oklab, var(--color-light) 5%, transparent);
	}
	.chats li {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-sm) var(--space-md);
	}
	.chats li + li {
		box-shadow: inset 0 1px 0 color-mix(in oklab, var(--color-light) 7%, transparent);
	}
	.avatar {
		flex: none;
		display: grid;
		place-items: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: color-mix(in oklab, var(--color-light) 12%, transparent);
		color: var(--color-ink);
		font-weight: 600;
	}
	.who {
		display: grid;
		min-width: 0;
	}
	.name {
		font-weight: 600;
		color: var(--color-ink);
	}
	.msg {
		font-size: var(--text-sm);
		color: var(--color-ink-2);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.name,
	.msg,
	.avatar {
		transition: filter var(--dur-short) var(--ease-out);
	}
	.blur {
		filter: blur(6px);
	}

	.switches {
		border: 0;
		margin: 0;
		padding: 0;
		display: grid;
	}
	.switches label {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
		min-height: 44px;
		color: var(--color-ink-2);
		cursor: pointer;
	}
	.switches label + label {
		box-shadow: inset 0 1px 0 color-mix(in oklab, var(--color-light) 7%, transparent);
	}
	input[role='switch'] {
		appearance: none;
		flex: none;
		position: relative;
		width: 40px;
		height: 24px;
		margin: 0;
		border-radius: var(--radius-pill);
		background: color-mix(in oklab, var(--color-light) 16%, transparent);
		cursor: pointer;
		transition: background-color var(--dur-short) var(--ease-out);
	}
	input[role='switch']::after {
		content: '';
		position: absolute;
		top: 3px;
		left: 3px;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: var(--color-ink);
		transition: transform var(--dur-short) var(--ease-out);
	}
	input[role='switch']:checked {
		background: var(--color-accent);
	}
	input[role='switch']:checked::after {
		transform: translateX(16px);
		background: var(--color-accent-ink);
	}
	input[role='switch']:hover {
		box-shadow: 0 0 0 4px color-mix(in oklab, var(--color-accent) 18%, transparent);
	}
	input[role='switch']:active::after {
		transform: scale(0.9);
	}
	input[role='switch']:checked:active::after {
		transform: translateX(16px) scale(0.9);
	}
	input[role='switch']:focus-visible {
		outline: 2px solid var(--color-focus);
		outline-offset: 2px;
	}
	input[role='switch']:disabled {
		opacity: 0.55;
		cursor: not-allowed;
	}

	.foot {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--space-2xs) var(--space-md);
	}
	.note {
		font-size: var(--text-sm);
		color: var(--color-ink-2);
	}
	.state {
		font-variant-numeric: tabular-nums;
		font-size: var(--text-sm);
		font-weight: 600;
	}
	.ok {
		color: var(--color-accent);
	}
	.open {
		color: var(--color-accent-2);
	}

	@media (prefers-reduced-motion: reduce) {
		.name,
		.msg,
		.avatar,
		input[role='switch'],
		input[role='switch']::after {
			transition: none;
		}
	}
</style>
