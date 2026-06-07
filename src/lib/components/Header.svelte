<script lang="ts">
	import { page } from '$app/state';

	import { onMount } from 'svelte';

	let menuOpen = $state(false);

	onMount(() => {
		const handler = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (menuOpen && !target.closest('header')) menuOpen = false;
		};
		document.addEventListener('click', handler);
		return () => document.removeEventListener('click', handler);
	});

	const nav = [
		{ href: '/settle', label: 'Settle In', icon: 'fa-house' },
		{ href: '/work', label: 'Find Work', icon: 'fa-briefcase' },
		{ href: '/directory', label: 'Directory', icon: 'fa-address-book' },
		{ href: '/events', label: 'Events', icon: 'fa-calendar' },
		{ href: '/worship', label: 'Worship', icon: 'fa-dove' },
		{ href: '/community', label: 'Connect', icon: 'fa-handshake' },
	];

	function isActive(href: string) {
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}
</script>

<header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
	<div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
		<a href="/" class="flex items-center gap-2.5 shrink-0">
			<span class="text-2xl leading-none">🇩🇿</span>
			<div class="leading-tight">
				<span class="font-extrabold text-gray-900 text-lg">Algerians</span>
				<span class="font-extrabold text-green-600 text-lg"> in KC</span>
			</div>
		</a>

		<!-- Desktop nav -->
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
			<a href="/about" class="text-sm text-gray-500 hover:text-gray-700 px-2 py-1 transition-colors">About</a>
			<a href="/community#volunteer" class="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
				<i class="fa-solid fa-handshake mr-1.5"></i>Get Help
			</a>
		</div>

		<!-- Mobile menu button -->
		<button
			onclick={() => (menuOpen = !menuOpen)}
			class="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
			aria-label="Toggle menu"
			aria-expanded={menuOpen}
		>
			<i class="fa-solid {menuOpen ? 'fa-xmark' : 'fa-bars'} text-lg"></i>
		</button>
	</div>

	<!-- Mobile menu -->
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
					<a href="/about" onclick={() => (menuOpen = false)} class="px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">About</a>
					<a href="/community#volunteer" onclick={() => (menuOpen = false)} class="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors mt-1">
						<i class="fa-solid fa-handshake"></i>Get Help
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>
