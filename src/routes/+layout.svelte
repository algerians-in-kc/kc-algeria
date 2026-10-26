<script lang="ts">
	// Self-hosted fonts & icons (no third-party requests — privacy/GDPR + perf + reliability).
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/400-italic.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '@fontsource/inter/800.css';
	import '@fontsource/noto-sans-arabic/400.css';
	import '@fontsource/noto-sans-arabic/500.css';
	import '@fontsource/noto-sans-arabic/600.css';
	import '@fontsource/noto-sans-arabic/700.css';
	import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
	import '@fortawesome/fontawesome-free/css/solid.min.css';
	import '@fortawesome/fontawesome-free/css/brands.min.css';
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	// Page transition
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	// Keep preview/staging deploys out of search engines. Any *.vercel.app URL or
	// localhost is treated as non-production and gets noindex; once a real domain is
	// pointed at the site, indexing turns on automatically. Remove/adjust the host
	// check at launch if the production domain isn't the only allowed host.
	const noindex = $derived(/vercel\.app$|localhost|127\.0\.0\.1/.test(page.url.host));
</script>

<svelte:head>
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="theme-color" content="#15803d" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta property="og:site_name" content="Algerians in KC" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://algeriansinKC.com/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://algeriansinKC.com/og-image.png" />
</svelte:head>

<!-- Skip navigation for screen readers / keyboard users -->
<a href="#main-content" class="skip-nav">Skip to main content</a>

<GoogleAnalytics />

{@render children()}

<BackToTop />

<style>
	/* View Transitions API fallback */
	:global(::view-transition-old(root)) {
		animation: 150ms ease-in both fade-out;
	}
	:global(::view-transition-new(root)) {
		animation: 200ms ease-out both fade-in;
	}
	@keyframes fade-out {
		to { opacity: 0; transform: translateY(-4px); }
	}
	@keyframes fade-in {
		from { opacity: 0; transform: translateY(4px); }
	}
</style>
