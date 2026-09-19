<script lang="ts">
	import { SAFETY_LANGS, chrome, guidelines, newcomerScams, type SafetyLang } from '$lib/data/safety';

	let lang = $state<SafetyLang>('en');
	const t = $derived(chrome[lang]);
	const isRtl = $derived(t.dir === 'rtl');
</script>

<svelte:head>
	<title>Stay Safe from Scams — Algerians in KC</title>
	<meta
		name="description"
		content="Protect yourself from scams that target newcomers in Kansas City — bank, government, immigration, job, and rental scams — in English, French, and Arabic."
	/>
	<link rel="canonical" href="https://algeriansinKC.com/safety" />
</svelte:head>

<!-- Hero (translatable, RTL-aware) -->
<section class="bg-gradient-to-br from-green-700 to-green-900 text-white py-12 px-4" dir={t.dir}>
	<div class="max-w-4xl mx-auto">
		<a href="/" class="text-green-200 hover:text-white text-sm mb-5 inline-flex items-center gap-1.5 transition-colors group">
			<i class="fa-solid {isRtl ? 'fa-arrow-right' : 'fa-arrow-left'} text-xs"></i>
			{t.back}
		</a>
		<div class="flex justify-between items-start flex-wrap gap-4">
			<div class="flex items-start gap-3">
				<span class="text-4xl leading-none">🛡️</span>
				<div>
					<h1 class="text-3xl md:text-4xl font-extrabold mb-2">{t.title}</h1>
					<p class="text-green-100 text-base md:text-lg max-w-2xl leading-relaxed">{t.subtitle}</p>
				</div>
			</div>
			<div class="flex gap-1.5 shrink-0">
				{#each SAFETY_LANGS as l}
					<button
						onclick={() => (lang = l.code)}
						class="px-3 py-1.5 rounded-full text-sm font-semibold transition-colors {lang === l.code
							? 'bg-white text-green-800'
							: 'bg-white/15 text-white hover:bg-white/25'}"
					>
						{l.label}
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

<div dir={t.dir} class="bg-gray-50">
	<div class="max-w-4xl mx-auto px-4 py-10 space-y-10">
		<!-- Universal rules -->
		<section>
			<h2 class="text-xl font-bold text-gray-900 mb-4">{t.rulesHeading}</h2>
			<div class="grid sm:grid-cols-2 gap-4">
				{#each guidelines as g}
					<div class="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-3 shadow-sm">
						<span class="text-2xl leading-none shrink-0" aria-hidden="true">{g.icon}</span>
						<p class="text-sm text-gray-700 leading-relaxed">{g[lang]}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Newcomer-specific scams -->
		<section>
			<h2 class="text-xl font-bold text-gray-900 mb-4">{t.newcomerHeading}</h2>
			<div class="grid sm:grid-cols-2 gap-4">
				{#each newcomerScams as g}
					<div class="bg-amber-50 rounded-2xl border border-amber-100 p-5 flex items-start gap-3">
						<span class="text-2xl leading-none shrink-0" aria-hidden="true">{g.icon}</span>
						<p class="text-sm text-amber-900 leading-relaxed">{g[lang]}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- What to do + Report -->
		<div class="grid md:grid-cols-2 gap-4">
			<section class="bg-white rounded-2xl border border-gray-100 p-6">
				<h2 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
					<i class="fa-solid fa-circle-check text-green-600"></i>{t.whatToDoHeading}
				</h2>
				<ul class="space-y-2.5">
					{#each t.whatToDo as step}
						<li class="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
							<i class="fa-solid fa-check text-green-500 mt-1 shrink-0"></i><span>{step}</span>
						</li>
					{/each}
				</ul>
			</section>
			<section class="bg-white rounded-2xl border border-gray-100 p-6">
				<h2 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
					<i class="fa-solid fa-flag text-red-500"></i>{t.reportHeading}
				</h2>
				<ul class="space-y-2.5">
					{#each t.report as item}
						<li class="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
							<i class="fa-solid fa-angle-right text-gray-400 mt-1 shrink-0"></i><span>{item}</span>
						</li>
					{/each}
				</ul>
			</section>
		</div>

		<!-- Ask a volunteer CTA -->
		<section class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-8 text-center">
			<div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
				<i class="fa-solid fa-hands-holding-heart text-green-600 text-2xl"></i>
			</div>
			<h2 class="text-xl font-bold text-gray-900 mb-2">{t.ctaTitle}</h2>
			<p class="text-gray-600 mb-5 max-w-md mx-auto text-sm leading-relaxed">{t.ctaText}</p>
			<a href="/newcomer" class="inline-block bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-xl font-bold transition-colors">
				<i class="fa-solid fa-handshake {isRtl ? 'ms-2' : 'me-2'}"></i>{t.ctaButton}
			</a>
		</section>
	</div>
</div>
