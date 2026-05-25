<script lang="ts">
	let menuOpen = $state(false);

	const nav = [
		{ href: '/settle', label: 'Settle In' },
		{ href: '/work', label: 'Find Work' },
		{ href: '/directory', label: 'Directory' },
		{ href: '/events', label: 'Events' },
		{ href: '/worship', label: 'Worship' },
		{ href: '/community', label: 'Community' },
	];
</script>

<header class="bg-white border-b border-gray-200 sticky top-0 z-50">
	<div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
		<a href="/" class="flex items-center gap-2">
			<span class="text-2xl">🇩🇿</span>
			<div>
				<span class="font-bold text-gray-900 text-lg leading-none">Algerians</span>
				<span class="text-green-600 font-bold text-lg leading-none"> in KC</span>
			</div>
		</a>

		<!-- Desktop nav -->
		<nav class="hidden md:flex items-center gap-1">
			{#each nav as item}
				<a href={item.href} class="px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
					{item.label}
				</a>
			{/each}
		</nav>

		<!-- Mobile menu button -->
		<button
			onclick={() => menuOpen = !menuOpen}
			class="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
			aria-label="Toggle menu"
		>
			{#if menuOpen}
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
			{:else}
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
			{/if}
		</button>
	</div>

	<!-- Mobile menu -->
	{#if menuOpen}
		<nav class="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
			{#each nav as item}
				<a
					href={item.href}
					onclick={() => menuOpen = false}
					class="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
				>
					{item.label}
				</a>
			{/each}
		</nav>
	{/if}
</header>
