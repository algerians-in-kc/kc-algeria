<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
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

	const hideHelp = $derived(
		page.url.pathname === '/contact' || page.url.pathname === '/community'
	);
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/fontawesome.min.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/solid.min.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/brands.min.css" />
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

<div class="min-h-screen bg-gray-50 flex flex-col">
	<Header />
	<main id="main-content" class="flex-1 page-transition">
		{@render children()}
	</main>
	<Footer />
</div>

<!-- Floating help button — mobile only, hides on contact/community pages -->
{#if !hideHelp}
	<a
		href="/community#volunteer"
		class="md:hidden fixed bottom-5 right-4 z-40 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg px-4 py-3 flex items-center gap-2 text-sm font-bold transition-all active:scale-95 no-print"
		aria-label="Get help from the community"
	>
		<i class="fa-solid fa-hands-holding-heart"></i>
		<span>Get Help</span>
	</a>
{/if}

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
