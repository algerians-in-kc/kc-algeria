<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { businesses, categoryMeta, type BusinessCategory } from '$lib/data/businesses';

	let activeCategory: BusinessCategory | 'all' = $state('all');

	const filtered = $derived(
		activeCategory === 'all' ? businesses : businesses.filter((b) => b.category === activeCategory)
	);

	const counts = $derived({
		all: businesses.length,
		food: businesses.filter((b) => b.category === 'food').length,
		beauty: businesses.filter((b) => b.category === 'beauty').length,
		'home-services': businesses.filter((b) => b.category === 'home-services').length,
	});

	function mapsUrl(address: string) {
		return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
	}

	const tabs: { id: BusinessCategory | 'all'; label: string; icon: string }[] = [
		{ id: 'all', label: 'All Businesses', icon: 'fa-th-large' },
		{ id: 'food', label: 'Food & Drinks', icon: 'fa-utensils' },
		{ id: 'beauty', label: 'Beauty & Care', icon: 'fa-scissors' },
		{ id: 'home-services', label: 'Home Services', icon: 'fa-wrench' },
	];

	const comingSoon = [
		{ icon: 'fa-stethoscope', title: 'Healthcare', color: 'bg-red-50 text-red-600', desc: 'Doctors, dentists, and mental health providers who speak Arabic or French.' },
		{ icon: 'fa-scale-balanced', title: 'Legal Services', color: 'bg-blue-50 text-blue-600', desc: 'Immigration lawyers, general attorneys, and legal consultants.' },
		{ icon: 'fa-calculator', title: 'Finance & Accounting', color: 'bg-green-50 text-green-600', desc: 'Tax preparation, accounting, and financial planning for immigrants.' },
		{ icon: 'fa-house-chimney', title: 'Real Estate', color: 'bg-amber-50 text-amber-600', desc: 'Real estate agents who understand the immigrant experience.' },
	];
</script>

<svelte:head>
	<title>Community Directory — Algerians in KC</title>
	<meta name="description" content="Algerian businesses and Arabic/French-speaking professionals in Kansas City — restaurants, groceries, beauty, HVAC, and more." />
	<link rel="canonical" href="https://algeriansinKC.com/directory" />
</svelte:head>

<PageHeader
	title="Community Directory"
	subtitle="Algerian-owned businesses and professionals in the KC metro."
/>

<div class="max-w-5xl mx-auto px-4 py-10">

	<!-- Add listing banner -->
	<div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
		<div class="flex items-start gap-3">
			<i class="fa-solid fa-bullhorn text-amber-500 mt-0.5 shrink-0 text-lg"></i>
			<div>
				<p class="font-bold text-amber-900 text-sm">Own an Algerian business in KC?</p>
				<p class="text-amber-700 text-sm">Get listed for free — reach thousands of Algerians in the metro.</p>
			</div>
		</div>
		<a href="/contact?subject=directory" class="shrink-0 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors whitespace-nowrap shadow-sm">
			<i class="fa-solid fa-plus mr-1.5"></i>Add Your Business
		</a>
	</div>

	<!-- Category filter tabs -->
	<div class="flex flex-wrap gap-2 mb-8">
		{#each tabs as tab}
			<button
				onclick={() => activeCategory = tab.id}
				class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all border {activeCategory === tab.id
					? 'bg-green-700 text-white border-green-700 shadow-sm'
					: 'bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-700'}"
			>
				<i class="fa-solid {tab.icon} text-xs"></i>
				{tab.label}
				<span class="text-xs font-normal opacity-75 {activeCategory === tab.id ? 'text-green-200' : 'text-gray-400'}">
					({tab.id === 'all' ? counts.all : counts[tab.id as BusinessCategory]})
				</span>
			</button>
		{/each}
	</div>

	<!-- Business cards grid -->
	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
		{#each filtered as b (b.id)}
			<div class="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-green-200 transition-all flex flex-col">
				<!-- Header -->
				<div class="flex items-start justify-between gap-2 mb-3">
					<div>
						<h2 class="font-bold text-gray-900 text-base leading-snug">{b.name}</h2>
						<p class="text-xs text-gray-500 mt-0.5">{b.type}</p>
					</div>
					<span class="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full {categoryMeta[b.category].color} bg-gray-50 border border-gray-100">
						<i class="fa-solid {categoryMeta[b.category].icon} mr-1"></i>{categoryMeta[b.category].label}
					</span>
				</div>

				<!-- Location -->
				<p class="text-sm text-gray-500 flex items-center gap-1.5 mb-3">
					<i class="fa-solid fa-location-dot text-green-500 text-xs shrink-0"></i>
					{b.city}, {b.state}
				</p>

				<!-- Description -->
				<p class="text-sm text-gray-600 leading-relaxed mb-3 flex-1">{b.description}</p>

				<!-- Hours -->
				{#if b.hours}
					<p class="text-xs text-gray-400 flex items-center gap-1.5 mb-3">
						<i class="fa-regular fa-clock text-xs shrink-0"></i>{b.hours}
					</p>
				{/if}

				<!-- Languages -->
				<div class="flex flex-wrap gap-1.5 mb-4">
					{#each b.languages as lang}
						<span class="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-medium">{lang}</span>
					{/each}
				</div>

				<!-- Action buttons -->
				<div class="flex flex-wrap gap-2 mt-auto">
					{#if b.phone}
						<a href="tel:{b.phone}" class="flex items-center gap-1.5 text-xs font-semibold bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg transition-colors">
							<i class="fa-solid fa-phone text-xs"></i>Call
						</a>
					{/if}
					{#if b.booking}
						<a href={b.booking} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-xs font-semibold bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded-lg transition-colors">
							<i class="fa-solid fa-calendar-check text-xs"></i>Book
						</a>
					{/if}
					{#if b.website}
						<a href={b.website} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors">
							<i class="fa-solid fa-globe text-xs"></i>Website
						</a>
					{/if}
					{#if b.address}
						<a href={mapsUrl(b.address)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors">
							<i class="fa-solid fa-map-location-dot text-xs"></i>Directions
						</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<!-- Coming soon categories -->
	<div class="border-t border-gray-100 pt-10">
		<h2 class="text-lg font-bold text-gray-900 mb-1">More categories coming soon</h2>
		<p class="text-sm text-gray-500 mb-6">Know an Algerian professional in these fields? <a href="/contact?subject=directory" class="text-green-600 hover:underline font-medium">Send us their info.</a></p>
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
			{#each comingSoon as cat}
				<div class="bg-white rounded-xl border border-gray-100 p-4">
					<div class="w-9 h-9 {cat.color} rounded-lg flex items-center justify-center mb-3">
						<i class="fa-solid {cat.icon}"></i>
					</div>
					<h3 class="font-semibold text-gray-900 text-sm mb-1">{cat.title}</h3>
					<p class="text-xs text-gray-500 leading-relaxed">{cat.desc}</p>
				</div>
			{/each}
		</div>
	</div>

</div>
