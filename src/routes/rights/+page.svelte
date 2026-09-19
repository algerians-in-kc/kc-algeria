<script lang="ts">
	import {
		RIGHTS_LANGS,
		chrome,
		renterRights,
		workerRights,
		policeRights,
		getHelp,
		type RightsLang,
	} from '$lib/data/rights';

	let lang = $state<RightsLang>('en');
	const t = $derived(chrome[lang]);
	const isRtl = $derived(t.dir === 'rtl');

	const groups = $derived([
		{ heading: t.renterHeading, icon: 'fa-house', items: renterRights },
		{ heading: t.workerHeading, icon: 'fa-briefcase', items: workerRights },
		{ heading: t.policeHeading, icon: 'fa-shield-halved', items: policeRights },
	]);
</script>

<svelte:head>
	<title>Know Your Rights — Algerians in KC</title>
	<meta
		name="description"
		content="Know your rights in Kansas City as an immigrant — renter rights, worker rights, and what to do if police or immigration stops you. Plus free local legal help."
	/>
	<link rel="canonical" href="https://algeriansinKC.com/rights" />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-br from-green-700 to-green-900 text-white py-12 px-4" dir={t.dir}>
	<div class="max-w-4xl mx-auto">
		<a href="/" class="text-green-200 hover:text-white text-sm mb-5 inline-flex items-center gap-1.5 transition-colors">
			<i class="fa-solid {isRtl ? 'fa-arrow-right' : 'fa-arrow-left'} text-xs"></i>
			{t.back}
		</a>
		<div class="flex justify-between items-start flex-wrap gap-4">
			<div class="flex items-start gap-3">
				<span class="text-4xl leading-none">⚖️</span>
				<div>
					<h1 class="text-3xl md:text-4xl font-extrabold mb-2">{t.title}</h1>
					<p class="text-green-100 text-base md:text-lg max-w-2xl leading-relaxed">{t.subtitle}</p>
				</div>
			</div>
			<div class="flex gap-1.5 shrink-0">
				{#each RIGHTS_LANGS as l}
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
		<!-- Disclaimer -->
		<div class="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-start gap-3">
			<i class="fa-solid fa-circle-info text-blue-500 text-lg mt-0.5 shrink-0"></i>
			<p class="text-sm text-blue-900 leading-relaxed">{t.disclaimer}</p>
		</div>

		<!-- Rights groups -->
		{#each groups as group}
			<section>
				<h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2.5">
					<span class="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center shrink-0">
						<i class="fa-solid {group.icon} text-green-600"></i>
					</span>
					{group.heading}
				</h2>
				<div class="grid sm:grid-cols-2 gap-4">
					{#each group.items as item}
						<div class="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-3 shadow-sm">
							<span class="text-2xl leading-none shrink-0" aria-hidden="true">{item.icon}</span>
							<p class="text-sm text-gray-700 leading-relaxed">{item[lang]}</p>
						</div>
					{/each}
				</div>
			</section>
		{/each}

		<!-- Get help -->
		<section class="bg-white rounded-2xl border border-gray-100 p-6">
			<h2 class="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
				<i class="fa-solid fa-hand-holding-hand text-green-600"></i>{t.getHelpHeading}
			</h2>
			<p class="text-sm text-gray-500 mb-4">{t.getHelpNote}</p>
			<div class="grid sm:grid-cols-2 gap-2.5">
				{#each getHelp as org}
					<a
						href="https://{org.site}"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center justify-between gap-2 bg-gray-50 hover:bg-green-50 border border-gray-100 rounded-xl px-4 py-3 transition-colors"
					>
						<span class="text-sm font-medium text-gray-800">{org.name}</span>
						<i class="fa-solid fa-arrow-up-right-from-square text-gray-400 text-xs shrink-0"></i>
					</a>
				{/each}
			</div>
		</section>

		<!-- Cross-link to scams page -->
		<a href="/safety" class="flex items-center gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-5 hover:bg-amber-100 transition-colors">
			<span class="text-3xl shrink-0">🛡️</span>
			<div class="flex-1">
				<p class="font-bold text-amber-900">{t.alsoReadTitle}</p>
				<p class="text-sm text-amber-800">{t.alsoReadText}</p>
			</div>
			<i class="fa-solid {isRtl ? 'fa-arrow-left' : 'fa-arrow-right'} text-amber-600 shrink-0"></i>
		</a>

		<!-- Ask a volunteer -->
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
