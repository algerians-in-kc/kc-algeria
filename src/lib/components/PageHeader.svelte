<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
		tags?: string[];
		backHref?: string;
		backLabel?: string;
	}

	let { title, subtitle, tags = [], backHref = '/', backLabel = 'Back to home' }: Props = $props();
</script>

<div class="bg-gradient-to-br from-green-700 to-green-900 text-white py-12 px-4">
	<div class="max-w-4xl mx-auto">
		<a
			href={backHref}
			class="text-green-200 hover:text-white text-sm mb-5 inline-flex items-center gap-1.5 transition-colors group"
		>
			<i class="fa-solid fa-arrow-left text-xs group-hover:-translate-x-0.5 transition-transform"></i>
			{backLabel}
		</a>
		<h1 class="text-3xl md:text-4xl font-extrabold mb-2">{title}</h1>
		{#if subtitle}
			<p class="text-green-100 text-lg">{subtitle}</p>
		{/if}
		{#if tags.length > 0}
			<div class="flex flex-wrap gap-2 mt-4">
				{#each tags as tag}
					<span class="bg-white/15 text-xs px-3 py-1 rounded-full backdrop-blur-sm">{tag}</span>
				{/each}
			</div>
		{/if}
	</div>
</div>
