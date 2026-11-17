<script lang="ts">
	import NoteLayout from '$lib/components/NoteLayout.svelte';
</script>

<NoteLayout slug="steering-ai-to-write-small-code">
	<p>
		I use AI coding assistants every day, and they make me faster. They also have a strong default: ask for
		"a WhatsApp blur extension" and you get a React template, a bundler, a couple of npm packages and event
		listeners everywhere. It works, and it is far heavier than it needs to be.
	</p>
	<p>
		When I built <a href="https://chromewebstore.google.com/detail/blur-your-whatsapp/knhgdpafncoifgmbcfkclhglcifjhpmc" rel="noopener" target="_blank">Blur Your WhatsApp</a>, the interesting part was not
		the code. It was steering the assistant away from that default. I treat it like a capable junior
		developer: it writes quickly, but it needs explicit constraints.
	</p>

	<h2>Set the constraints before the first prompt</h2>
	<p>These were the rules I gave it, and I repeated them whenever a draft drifted:</p>
	<ul>
		<li>No frameworks and no dependencies. Plain JavaScript only.</li>
		<li>If CSS can do it, CSS does it. Blur, hover and transitions belong in a stylesheet.</li>
		<li>No event listeners on individual elements.</li>
		<li>Never select by class name on a site you don’t control.</li>
		<li>No polling. React to changes with observers.</li>
	</ul>

	<h2>Review for weight, not just correctness</h2>
	<p>
		A draft that works can still be wrong for the job. I read every change asking two questions: does this add
		something that runs on every frame or scroll, and could the browser already do this for free? Most of my
		edits were deletions.
	</p>

	<h2>Fundamentals are the steering wheel</h2>
	<p>
		The assistant sped up implementation a lot. But knowing about the compositor thread, list virtualisation
		and why obfuscated class names break is what let me say no to its first answer. AI amplifies whatever
		judgement you bring to it, so the judgement still has to be yours.
	</p>
	<p>
		The full technical breakdown is in
		<a href="/notes/whatsapp-blur-extension-under-20kb">how I built a WhatsApp Web blur extension in under 20KB</a>.
	</p>
</NoteLayout>
