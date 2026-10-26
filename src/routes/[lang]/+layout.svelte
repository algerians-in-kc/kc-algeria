<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { LOCALES, pathInLocale } from '$lib/i18n/index';
	import { page } from '$app/state';

	let { data, children } = $props();
	const m = $derived(data.m);
	const lang = $derived(data.lang);

	const hideHelp = $derived(
		page.url.pathname.endsWith('/contact') || page.url.pathname.endsWith('/community')
	);
</script>

<svelte:head>
	{#each LOCALES as l}
		<link rel="alternate" hreflang={l.code} href={pathInLocale(page.url.pathname, l.code)} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={pathInLocale(page.url.pathname, 'en')} />
</svelte:head>

<div class="min-h-screen bg-gray-50 flex flex-col">
	<Header {m} {lang} />
	<main id="main-content" class="flex-1 page-transition">
		{@render children()}
	</main>
	<Footer {m} {lang} />
</div>

{#if !hideHelp}
	<a
		href="/{lang}/newcomer"
		class="md:hidden fixed bottom-5 right-4 z-40 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg px-4 py-3 flex items-center gap-2 text-sm font-bold transition-all active:scale-95 no-print"
		aria-label={m.header.getHelp}
	>
		<i class="fa-solid fa-hands-holding-heart"></i>
		<span>{m.header.getHelp}</span>
	</a>
{/if}
