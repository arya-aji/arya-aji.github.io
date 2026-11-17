<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { env } from '$env/dynamic/public';
	import { site } from '$lib/site';

	const key = env.PUBLIC_WEB3FORMS_KEY ?? '';

	// compact: name, email and message only (home page). secondary: an extra link button beside Send.
	let { compact = false, secondary }: { compact?: boolean; secondary?: { label: string; href: string } } = $props();

	let message = $state('');
	let sending = $state(false);

	// The home page's "Your task" card hands its text over in ?task=
	onMount(() => {
		const t = new URLSearchParams(window.location.search).get('task');
		if (t && !message) message = t.slice(0, 2000);
	});
	let error = $state('');

	async function submit(event: SubmitEvent) {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;
		if (!form.reportValidity()) return;
		if (!key) {
			error = `The form is not configured yet. Email me directly at ${site.email}.`;
			return;
		}
		sending = true;
		error = '';
		try {
			const data = new FormData(form);
			data.append('access_key', key);
			data.append('subject', `New project inquiry from ${data.get('name')}`);
			data.append('from_name', 'aryaaji.com');
			const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
			const json = await res.json();
			if (!json.success) throw new Error(json.message);
			await goto('/thank-you');
		} catch {
			error = `Your message didn’t send. Try again, or email ${site.email}.`;
		} finally {
			sending = false;
		}
	}
</script>

<form onsubmit={submit} novalidate={false}>
	<div class="row">
		<label>
			<span>Your name</span>
			<input name="name" required autocomplete="name" />
		</label>
		<label>
			<span>Email</span>
			<input name="email" type="email" required autocomplete="email" />
		</label>
	</div>

	{#if !compact}
	<div class="row">
		<label>
			<span>What kind of tool?</span>
			<select name="project_type">
				<option>Chrome extension</option>
				<option>Internal tool or dashboard</option>
				<option>Data or workflow automation</option>
				<option>Not sure yet</option>
			</select>
		</label>
		<label>
			<span>Budget (optional)</span>
			<select name="budget">
				<option value="">Prefer to get a quote first</option>
				<option>Under $300</option>
				<option>$300 to $1,000</option>
				<option>$1,000 to $3,000</option>
				<option>Over $3,000</option>
			</select>
		</label>
	</div>
	{/if}

	<label>
		<span>What do you do by hand today?</span>
		<textarea
			name="message"
			bind:value={message}
			rows="4"
			required
			placeholder="For example: every Friday we copy 200 order IDs from our admin panel into a Google Sheet, then look up each customer’s email in HubSpot."
		></textarea>
	</label>



	<div class="visually-hidden" aria-hidden="true"><input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" /></div>

	{#if error}<p class="error" role="alert">{error}</p>{/if}

	<div class="send">
		<button class="btn arrow" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'}</button>
		{#if secondary}<a class="btn ghost arrow" href={secondary.href} rel="noopener" target="_blank">{secondary.label}</a>{/if}
	</div>
	<p class="small">You’ll get a reply with a fixed quote within 24 hours.</p>
</form>

<style>
	form {
		display: grid;
		gap: var(--space-lg);
	}
	.row {
		display: grid;
		gap: var(--space-lg);
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	}
	label {
		display: grid;
		gap: var(--space-xs);
		font-size: var(--text-sm);
		font-weight: 600;
		color: var(--color-ink);
	}
	.send {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
	}
	input,
	select,
	textarea {
		font: inherit;
		font-weight: 400;
		font-size: 1rem;
		color: var(--color-ink);
		background: var(--color-paper);
		border: 1px solid var(--color-rule);
		border-radius: var(--radius-inner);
		transition: border-color var(--dur-short) var(--ease-out);
		min-height: 48px;
		padding: var(--space-sm) var(--space-md);
		width: 100%;
	}
	input:hover,
	select:hover,
	textarea:hover {
		border-color: color-mix(in oklab, var(--color-ink) 30%, var(--color-rule));
	}
	input:focus,
	select:focus,
	textarea:focus {
		outline: 3px solid color-mix(in oklab, var(--color-ink) 12%, transparent);
		outline-offset: 0;
		border-color: var(--color-ink);
	}
	textarea {
		resize: vertical;
	}
	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.error {
		margin: 0;
		padding: var(--space-sm) var(--space-md);
		border-radius: var(--r-card);
		background: color-mix(in srgb, var(--ctp-red) 14%, var(--bg));
		color: var(--heading);
		outline: 1px solid color-mix(in srgb, var(--ctp-red) 45%, transparent);
	}
	.small {
		margin: 0;
		color: var(--subtext);
		font-size: var(--step--1);
	}
</style>
