<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { city, slug } = data;

	const worshipIcon = (type: string) =>
		type === 'mosque' ? 'fa-moon' : type === 'church' ? 'fa-cross' : 'fa-dove';
	const worshipColor = (type: string) =>
		type === 'mosque' ? 'text-emerald-600' : type === 'church' ? 'text-blue-600' : 'text-purple-600';

	const stateLabel = city.state === 'KS' ? 'Kansas' : 'Missouri';
</script>

<svelte:head>
	<title>{city.name}, {city.state} — Algerians in KC</title>
	<meta name="description" content="Guide for Algerians living in or moving to {city.name}, {stateLabel} — neighborhoods, mosques, schools, housing, and community connections." />
	<link rel="canonical" href="https://algeriansinKC.com/{slug}" />
	<meta property="og:title" content="{city.name} — Algerian Community Guide" />
	<meta property="og:description" content="{city.tagline}. A guide for Algerians in {city.name}, {stateLabel}." />
	<meta property="og:url" content="https://algeriansinKC.com/{slug}" />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-12 px-4">
	<div class="max-w-4xl mx-auto">
		<a href="/" class="inline-flex items-center gap-1.5 text-green-300 hover:text-white text-sm mb-6 transition-colors">
			<i class="fa-solid fa-arrow-left text-xs"></i> All cities
		</a>
		<div class="flex items-start gap-4">
			<div>
				<div class="flex items-center gap-2 mb-2">
					<span class="bg-green-600/50 text-green-200 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-500/40">
						{city.state}
					</span>
				</div>
				<h1 class="text-3xl md:text-5xl font-extrabold mb-2 tracking-tight">{city.name}</h1>
				<p class="text-green-200 text-lg max-w-2xl">{city.tagline}</p>
			</div>
		</div>
	</div>
</section>

<div class="max-w-4xl mx-auto px-4 py-10 space-y-8">

	<!-- Overview -->
	<div class="bg-white rounded-2xl border border-gray-100 p-6">
		<h2 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
			<i class="fa-solid fa-city text-green-600"></i> About {city.name}
		</h2>
		<p class="text-gray-600 leading-relaxed mb-4">{city.intro}</p>
		<div class="bg-green-50 rounded-xl p-4 border border-green-100">
			<p class="text-sm text-green-800 leading-relaxed">
				<i class="fa-solid fa-users text-green-600 mr-2"></i>
				<strong>Algerian community:</strong> {city.algerianNote}
			</p>
		</div>
	</div>

	<!-- Housing & Commute -->
	<div class="grid md:grid-cols-2 gap-4">
		<div class="bg-white rounded-2xl border border-gray-100 p-6">
			<h2 class="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
				<i class="fa-solid fa-house text-amber-500"></i> Housing
			</h2>
			<div class="mb-3">
				<span class="text-xs text-gray-500 uppercase font-semibold tracking-wide">Avg 2BR rent</span>
				<p class="text-xl font-bold text-gray-900 mt-0.5">{city.housing.avg2br}</p>
			</div>
			<p class="text-sm text-gray-600 leading-relaxed">{city.housing.tip}</p>
		</div>
		<div class="bg-white rounded-2xl border border-gray-100 p-6">
			<h2 class="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
				<i class="fa-solid fa-car text-blue-500"></i> Commute
			</h2>
			<p class="text-sm text-gray-600 leading-relaxed">{city.commute}</p>
			<div class="mt-3 bg-amber-50 rounded-lg p-3 text-xs text-amber-800 flex gap-2">
				<i class="fa-solid fa-triangle-exclamation shrink-0 mt-0.5"></i>
				<span>A car is essential in the KC metro — public transit is limited outside of downtown KCMO.</span>
			</div>
		</div>
	</div>

	<!-- Neighborhoods -->
	<div class="bg-white rounded-2xl border border-gray-100 p-6">
		<h2 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
			<i class="fa-solid fa-map-location-dot text-green-600"></i> Neighborhoods to Consider
		</h2>
		<div class="space-y-3">
			{#each city.neighborhoods as n}
				<div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
					<i class="fa-solid fa-location-dot text-green-500 mt-0.5 shrink-0"></i>
					<div>
						<span class="font-semibold text-gray-900 text-sm">{n.name}</span>
						<p class="text-xs text-gray-500 mt-0.5">{n.note}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Places of Worship -->
	<div class="bg-white rounded-2xl border border-gray-100 p-6">
		<h2 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
			<i class="fa-solid fa-dove text-sky-500"></i> Places of Worship
		</h2>
		<div class="space-y-3">
			{#each city.worship as w}
				<div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
					<i class="fa-solid {worshipIcon(w.type)} {worshipColor(w.type)} mt-0.5 shrink-0"></i>
					<div>
						<span class="font-semibold text-gray-900 text-sm">{w.name}</span>
						{#if w.note}
							<p class="text-xs text-gray-500 mt-0.5">{w.note}</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
		<p class="text-xs text-gray-400 mt-4">
			<i class="fa-solid fa-circle-info mr-1"></i>
			See our full <a href="/worship" class="text-green-600 hover:underline">Places of Worship guide</a> for more details, addresses, and prayer times.
		</p>
	</div>

	<!-- Schools -->
	<div class="bg-white rounded-2xl border border-gray-100 p-6">
		<h2 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
			<i class="fa-solid fa-school text-purple-500"></i> Schools
		</h2>
		<div class="space-y-3">
			{#each city.schools as s}
				<div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
					<div class="flex items-center justify-between mb-1">
						<span class="font-semibold text-gray-900 text-sm">{s.name}</span>
						<span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{s.rating}</span>
					</div>
					<p class="text-xs text-gray-500 leading-relaxed">{s.note}</p>
				</div>
			{/each}
		</div>
		<p class="text-xs text-gray-400 mt-4">
			<i class="fa-solid fa-circle-info mr-1"></i>
			Verify school assignments at <span class="font-medium">GreatSchools.org</span> — assignments depend on your exact address.
		</p>
	</div>

	<!-- Amenities -->
	<div class="bg-white rounded-2xl border border-gray-100 p-6">
		<h2 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
			<i class="fa-solid fa-star text-amber-500"></i> Key Amenities
		</h2>
		<ul class="space-y-2">
			{#each city.amenities as item}
				<li class="flex items-start gap-2 text-sm text-gray-600">
					<i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>
					<span>{item}</span>
				</li>
			{/each}
		</ul>
	</div>

	<!-- WhatsApp / Community CTA -->
	<div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-8 text-center">
		<div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
			<i class="fa-solid fa-handshake text-green-600 text-xl"></i>
		</div>
		<h2 class="text-xl font-bold text-gray-900 mb-2">
			{#if city.whatsappGroup}
				Connect with Algerians in {city.name}
			{:else}
				Connect with the KC Algerian community
			{/if}
		</h2>
		<p class="text-gray-600 text-sm mb-5 max-w-md mx-auto leading-relaxed">
			{#if city.whatsappGroup}
				There is an active WhatsApp group for Algerians in {city.name}. Join to ask questions, find help, and meet neighbors.
			{:else}
				While there isn't a dedicated {city.name} WhatsApp group yet, the main KC Algerian group is very active and covers the whole metro — including {city.name}.
			{/if}
		</p>
		<a href="/community" class="inline-block bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-xl font-bold transition-colors shadow-md">
			<i class="fa-brands fa-whatsapp mr-2"></i>Join WhatsApp Groups
		</a>
	</div>

	<!-- Other cities -->
	<div class="pt-2">
		<p class="text-sm text-gray-500 text-center mb-4">Explore other cities in the KC metro</p>
		<div class="flex flex-wrap justify-center gap-2">
			{#each [
				{ slug: 'olathe', name: 'Olathe' },
				{ slug: 'overland-park', name: 'Overland Park' },
				{ slug: 'gardner', name: 'Gardner' },
				{ slug: 'lenexa', name: 'Lenexa' },
				{ slug: 'shawnee', name: 'Shawnee' },
				{ slug: 'lawrence', name: 'Lawrence' },
				{ slug: 'kansas-city-mo', name: 'KC, MO' },
				{ slug: 'lees-summit', name: "Lee's Summit" },
				{ slug: 'independence', name: 'Independence' },
			].filter(c => c.slug !== slug) as c}
				<a href="/{c.slug}" class="text-sm bg-white border border-gray-200 hover:border-green-300 hover:text-green-700 text-gray-600 px-3 py-1.5 rounded-lg transition-colors">
					{c.name}
				</a>
			{/each}
		</div>
	</div>

</div>
