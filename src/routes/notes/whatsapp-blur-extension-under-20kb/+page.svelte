<script lang="ts">
	import NoteLayout from '$lib/components/NoteLayout.svelte';
</script>

<NoteLayout slug="whatsapp-blur-extension-under-20kb" image="/img/blur-your-whatsapp.webp">
	<p>
		You share your screen in a meeting, and a WhatsApp notification slides in with a private message for
		everyone to read. I went looking for an extension that blurs WhatsApp Web. The ones I found weighed 30MB
		or more, just to blur a few lines of text.
	</p>
	<p>
		So I built <a href="/projects/blur-your-whatsapp">Blur Your WhatsApp</a>. The whole extension is under
		20KB, has zero dependencies, no trackers, and does nothing on the main thread while you scroll. These are
		the four decisions that made that possible.
	</p>

	<h2>1. Think in CSS, not JavaScript</h2>
	<p>
		The obvious approach is to find every chat row and wrap or re-render it. That means a framework, a virtual
		DOM and a lot of code. Instead, the extension injects a single <code>&lt;style&gt;</code> tag into the
		page. The blur itself is a CSS <code>filter: blur()</code>, which the browser applies on the GPU. Turning
		the feature on or off is just rewriting that one tag.
	</p>
	<pre><code>{`// Simplified: one style tag, rebuilt whenever settings change
const style = document.createElement('style');
style.textContent = buildRules(settings); // e.g. [role="row"] { filter: blur(6px) }
document.documentElement.append(style);`}</code></pre>

	<h2>2. Unblur with :hover, not event listeners</h2>
	<p>
		My first draft attached <code>mouseenter</code> and <code>mouseleave</code> listeners to chat bubbles.
		With hundreds of rows, that is hundreds of listeners and work on the main thread every time the mouse
		moves. Plain CSS <code>:hover</code> with a 120ms transition does the same job on the compositor thread.
		Zero JavaScript, smooth at 60fps.
	</p>

	<h2>3. Ignore class names</h2>
	<p>
		WhatsApp Web ships obfuscated class names that change with every update, which is why many extensions
		break every few weeks. The selectors here target structure instead: attributes such as
		<code>data-testid</code>, <code>dir="auto"</code>, <code>[role="row"]</code> and
		<code>[aria-label]</code>, with a fallback scan for the media gallery drawer.
	</p>

	<h2>4. Observe, don’t poll</h2>
	<p>
		WhatsApp virtualises its lists: rows are destroyed and recreated as you scroll. Rather than running a
		<code>setInterval</code> loop to re-apply the blur, one lean <code>MutationObserver</code> notices new
		rows, and <code>chrome.storage.onChanged</code> applies settings changes instantly across tabs. When
		nothing changes, nothing runs.
	</p>

	<h2>The result</h2>
	<ul>
		<li>Total size under 20KB</li>
		<li>Zero dependencies and zero trackers</li>
		<li>No measurable effect on memory or scrolling</li>
	</ul>
	<p>
		The same rules apply to any extension I build for clients: start from what the browser already does well,
		and only write JavaScript for what CSS cannot do.
	</p>
</NoteLayout>
