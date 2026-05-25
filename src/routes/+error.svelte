<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} — Algerians in KC</title>
</svelte:head>

<div class="min-h-[60vh] flex items-center justify-center px-4">
	<div class="text-center">
		<div class="text-6xl mb-4">🇩🇿</div>
		<h1 class="text-4xl font-bold text-gray-900 mb-2">{page.status}</h1>
		<p class="text-gray-500 mb-8 max-w-sm mx-auto">
			{#if page.status === 404}
				This page doesn't exist. Let's get you back home.
			{:else}
				Something went wrong. Please try again.
			{/if}
		</p>
		<a href="/" class="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
			Back to Home
		</a>
	</div>
</div>
