<script lang="ts">
	// Cloudflare Turnstile widget (free, privacy-friendly CAPTCHA). Renders nothing when
	// PUBLIC_TURNSTILE_SITE_KEY isn't set, so the forms keep working before it's wired up.
	// Tokens are single-use: call reset() after every submit attempt to get a fresh one.
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';

	let { token = $bindable('') }: { token: string } = $props();

	const siteKey = env.PUBLIC_TURNSTILE_SITE_KEY;
	let container: HTMLDivElement | undefined = $state();
	let widgetId: string | undefined;

	export function reset() {
		token = '';
		if (widgetId !== undefined) (window as any).turnstile?.reset(widgetId);
	}

	let scriptPromise: Promise<void> | undefined;
	function loadScript(): Promise<void> {
		if ((window as any).turnstile) return Promise.resolve();
		scriptPromise ??= new Promise((resolve, reject) => {
			const s = document.createElement('script');
			s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
			s.async = true;
			s.onload = () => resolve();
			s.onerror = () => reject(new Error('turnstile-script'));
			document.head.appendChild(s);
		});
		return scriptPromise;
	}

	onMount(() => {
		if (!siteKey) return;
		let cancelled = false;
		loadScript()
			.then(() => {
				if (cancelled || !container) return;
				widgetId = (window as any).turnstile.render(container, {
					sitekey: siteKey,
					callback: (t: string) => (token = t),
					'expired-callback': () => (token = ''),
					'error-callback': () => (token = ''),
				});
			})
			.catch(() => {});
		return () => {
			cancelled = true;
			if (widgetId !== undefined) (window as any).turnstile?.remove(widgetId);
		};
	});
</script>

{#if siteKey}
	<div bind:this={container}></div>
{/if}
