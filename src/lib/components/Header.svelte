<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { LOCALES, pathInLocale } from '$lib/i18n/index';

	let { m, lang }: { m: any; lang: string } = $props();

	let menuOpen = $state(false);
	let langOpen = $state(false);

	onMount(() => {
		const handler = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (menuOpen && !target.closest('header')) menuOpen = false;
			if (langOpen && !target.closest('.lang-switch')) langOpen = false;
		};
		document.addEventListener('click', handler);
		return () => document.removeEventListener('click', handler);
	});

	const base = $derived(`/${lang}`);
	const nav = $derived([
		{ href: `${base}/settle`, label: m.nav.settle, icon: 'fa-house' },
		{ href: `${base}/safety`, label: m.nav.safety, icon: 'fa-shield-halved' },
		{ href: `${base}/work`, label: m.nav.work, icon: 'fa-briefcase' },
		{ href: `${base}/directory`, label: m.nav.directory, icon: 'fa-address-book' },
		{ href: `${base}/events`, label: m.nav.events, icon: 'fa-calendar' },
		{ href: `${base}/worship`, label: m.nav.worship, icon: 'fa-dove' },
		{ href: `${base}/community`, label: m.nav.community, icon: 'fa-handshake' }
	]);
	const current = $derived(LOCALES.find((l) => l.code === lang) ?? LOCALES[0]);

	function isActive(href: string) {
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}
</script>

<header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
	<div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
		<a href={base} class="flex items-center gap-2.5 shrink-0">
			<span class="text-2xl leading-none">🇩🇿</span>
			<div class="leading-tight">
				<span class="font-extrabold text-gray-900 text-lg">{m.header.brand1}</span>
				<span class="font-extrabold text-green-600 text-lg"> {m.header.brand2}</span>
			</div>
		</a>

		<nav class="hidden lg:flex items-center gap-0.5">
			{#each nav as item}
				<a
					href={item.href}
					class="px-3 py-2 text-sm font-medium rounded-lg transition-colors {isActive(item.href)
						? 'bg-green-50 text-green-700'
						: 'text-gray-600 hover:text-green-700 hover:bg-green-50'}"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="hidden lg:flex items-center gap-2">
			<!-- Language switcher -->
			<div class="lang-switch relative">
				<button
					onclick={() => (langOpen = !langOpen)}
					class="flex items-center gap-1.5 text-sm text-gray-600 hover:text-green-700 px-2.5 py-1.5 rounded-lg hover:bg-green-50 transition-colors"
					aria-label="Language"
					aria-expanded={langOpen}
				>
					<i class="fa-solid fa-globe"></i>
					<span>{current.native}</span>
					<i class="fa-solid fa-angle-down text-xs"></i>
				</button>
				{#if langOpen}
					<div class="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
						{#each LOCALES as l}
							<a
								href={pathInLocale(page.url.pathname, l.code)}
								lang={l.code}
								dir={l.dir}
								onclick={() => (langOpen = false)}
								class="flex items-center gap-2 px-3 py-2 text-sm hover:bg-green-50 {l.code === lang
									? 'text-green-700 font-semibold'
									: 'text-gray-700'}"
							>
								<span>{l.flag}</span>{l.native}
							</a>
						{/each}
					</div>
				{/if}
			</div>
			<a href="{base}/about" class="text-sm text-gray-500 hover:text-gray-700 px-2 py-1 transition-colors">{m.nav.about}</a>
			<a href="{base}/newcomer" class="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
				<i class="fa-solid fa-handshake mr-1.5"></i>{m.header.getHelp}
			</a>
		</div>

		<button
			onclick={() => (menuOpen = !menuOpen)}
			class="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
			aria-label={m.header.menu}
			aria-expanded={menuOpen}
		>
			<i class="fa-solid {menuOpen ? 'fa-xmark' : 'fa-bars'} text-lg"></i>
		</button>
	</div>

	{#if menuOpen}
		<div class="lg:hidden border-t border-gray-100 bg-white shadow-lg">
			<nav class="px-4 py-3 flex flex-col gap-1">
				{#each nav as item}
					<a
						href={item.href}
						onclick={() => (menuOpen = false)}
						class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors {isActive(item.href)
							? 'bg-green-50 text-green-700'
							: 'text-gray-700 hover:bg-green-50 hover:text-green-700'}"
					>
						<i class="fa-solid {item.icon} w-4 text-center text-green-600"></i>
						{item.label}
					</a>
				{/each}
				<div class="border-t border-gray-100 mt-2 pt-2 flex flex-col gap-1">
					<a href="{base}/about" onclick={() => (menuOpen = false)} class="px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">{m.nav.about}</a>
					<a href="{base}/newcomer" onclick={() => (menuOpen = false)} class="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors mt-1">
						<i class="fa-solid fa-handshake"></i>{m.header.getHelp}
					</a>
				</div>
				<!-- Mobile language switcher -->
				<div class="border-t border-gray-100 mt-2 pt-2 flex flex-wrap gap-1">
					{#each LOCALES as l}
						<a
							href={pathInLocale(page.url.pathname, l.code)}
							lang={l.code}
							dir={l.dir}
							onclick={() => (menuOpen = false)}
							class="flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg {l.code === lang
								? 'bg-green-50 text-green-700 font-semibold'
								: 'text-gray-700 hover:bg-gray-50'}"
						>
							<span>{l.flag}</span>{l.native}
						</a>
					{/each}
				</div>
			</nav>
		</div>
	{/if}
</header>
