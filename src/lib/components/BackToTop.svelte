<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(false);

	onMount(() => {
		const handler = () => { visible = window.scrollY > 400; };
		window.addEventListener('scroll', handler, { passive: true });
		return () => window.removeEventListener('scroll', handler);
	});
</script>

{#if visible}
	<button
		onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		class="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40 bg-gray-800 hover:bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 no-print"
		aria-label="Back to top"
	>
		<i class="fa-solid fa-chevron-up text-sm"></i>
	</button>
{/if}
