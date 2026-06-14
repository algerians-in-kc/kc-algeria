<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { listings, listingCategoryMeta, isActive, daysLeft, type ListingCategory } from '$lib/data/classifieds';

	let activeCategory: ListingCategory | 'all' = $state('all');

	const active = $derived(listings.filter((l) => isActive(l)));

	const filtered = $derived(
		activeCategory === 'all' ? active : active.filter((l) => l.category === activeCategory)
	);

	const counts = $derived({
		all: active.length,
		housing: active.filter((l) => l.category === 'housing').length,
		jobs: active.filter((l) => l.category === 'jobs').length,
		furniture: active.filter((l) => l.category === 'furniture').length,
		cars: active.filter((l) => l.category === 'cars').length,
		services: active.filter((l) => l.category === 'services').length,
		other: active.filter((l) => l.category === 'other').length,
	});

	const tabs: { id: ListingCategory | 'all'; label: string; icon: string }[] = [
		{ id: 'all', label: 'All', icon: 'fa-th-large' },
		{ id: 'housing', label: 'Housing', icon: 'fa-house' },
		{ id: 'jobs', label: 'Jobs', icon: 'fa-briefcase' },
		{ id: 'furniture', label: 'Furniture', icon: 'fa-couch' },
		{ id: 'cars', label: 'Cars', icon: 'fa-car' },
		{ id: 'services', label: 'Services', icon: 'fa-screwdriver-wrench' },
		{ id: 'other', label: 'Other', icon: 'fa-tag' },
	];

	function formatDate(iso: string) {
		return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
	}
</script>

<svelte:head>
	<title>Community Classifieds — Algerians in KC</title>
	<meta name="description" content="Housing, jobs, furniture, and cars within the Algerian community in Kansas City. Posted by community members, free for everyone." />
	<link rel="canonical" href="https://algeriansinKC.com/classifieds" />
</svelte:head>

<PageHeader
	title="Community Classifieds"
	subtitle="Housing, jobs, furniture, and more — shared by Algerians in KC."
/>

<div class="max-w-5xl mx-auto px-4 py-10">

	<!-- Submit banner -->
	<div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
		<div class="flex items-start gap-3">
			<i class="fa-solid fa-bullhorn text-green-600 mt-0.5 shrink-0 text-lg"></i>
			<div>
				<p class="font-bold text-green-900 text-sm">Have something to sell, rent, or share?</p>
				<p class="text-green-700 text-sm">Posting is free. All listings reviewed before going live.</p>
			</div>
		</div>
		<a href="/contact?subject=classified" class="shrink-0 bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors whitespace-nowrap shadow-sm">
			<i class="fa-solid fa-plus mr-1.5"></i>Submit a Listing
		</a>
	</div>

	<!-- How it works (only show when no listings yet) -->
	{#if active.length === 0}
		<div class="bg-white rounded-2xl border border-gray-100 p-8 mb-8 text-center">
			<div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
				<i class="fa-solid fa-tags text-green-600 text-2xl"></i>
			</div>
			<h2 class="text-xl font-bold text-gray-900 mb-3">The classifieds board is live</h2>
			<p class="text-gray-600 max-w-lg mx-auto leading-relaxed mb-6">
				No active listings yet — be the first. Whether you have furniture to sell, a room to rent, or a job lead, share it with the community.
			</p>
			<div class="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
				<div class="bg-gray-50 rounded-xl p-4">
					<div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 text-green-600 font-bold">1</div>
					<p class="text-xs text-gray-600 leading-snug">Submit your listing via the form</p>
				</div>
				<div class="bg-gray-50 rounded-xl p-4">
					<div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 text-green-600 font-bold">2</div>
					<p class="text-xs text-gray-600 leading-snug">We review and post within 24 hours</p>
				</div>
				<div class="bg-gray-50 rounded-xl p-4">
					<div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 text-green-600 font-bold">3</div>
					<p class="text-xs text-gray-600 leading-snug">Listings stay up for 30 days</p>
				</div>
			</div>
			<a href="/contact?subject=classified" class="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-sm">
				<i class="fa-solid fa-plus mr-2"></i>Post the First Listing
			</a>
		</div>
	{:else}
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
						({tab.id === 'all' ? counts.all : counts[tab.id as ListingCategory]})
					</span>
				</button>
			{/each}
		</div>

		<!-- Listings grid -->
		<div class="grid sm:grid-cols-2 gap-4 mb-10">
			{#each filtered as l (l.id)}
				{@const meta = listingCategoryMeta[l.category]}
				{@const days = daysLeft(l)}
				<div class="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-green-200 transition-all flex flex-col">
					<!-- Header -->
					<div class="flex items-start justify-between gap-2 mb-3">
						<div class="flex-1 min-w-0">
							<h2 class="font-bold text-gray-900 text-base leading-snug">{l.title}</h2>
							<p class="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
								<i class="fa-solid fa-location-dot text-green-500 text-xs"></i>{l.city}
								<span class="text-gray-300">·</span>
								<span>Posted {formatDate(l.postedDate)}</span>
							</p>
						</div>
						<span class="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full {meta.color} {meta.bgColor} border border-gray-100">
							<i class="fa-solid {meta.icon} mr-1"></i>{meta.label}
						</span>
					</div>

					<!-- Price -->
					{#if l.price}
						<p class="text-lg font-bold text-green-700 mb-2">{l.price}</p>
					{/if}

					<!-- Description -->
					<p class="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{l.description}</p>

					<!-- Footer -->
					<div class="flex items-center justify-between gap-2 mt-auto pt-3 border-t border-gray-50">
						<span class="text-xs text-gray-400">
							<i class="fa-regular fa-clock mr-1"></i>{days} day{days === 1 ? '' : 's'} left
						</span>
						<a href="/contact?subject={l.contactSubject}" class="text-xs font-semibold bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg transition-colors">
							<i class="fa-solid fa-envelope text-xs mr-1"></i>Contact
						</a>
					</div>
				</div>
			{/each}
		</div>

		{#if filtered.length === 0}
			<div class="bg-white rounded-2xl border border-gray-100 p-10 text-center mb-10">
				<i class="fa-solid fa-inbox text-gray-300 text-4xl mb-3"></i>
				<p class="text-gray-500 text-sm">No listings in this category right now. <a href="/contact?subject=classified" class="text-green-600 hover:underline font-medium">Be the first to post.</a></p>
			</div>
		{/if}
	{/if}

	<!-- Rules / how it works -->
	<div class="bg-gray-50 rounded-2xl border border-gray-100 p-6">
		<h2 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
			<i class="fa-solid fa-circle-info text-green-600"></i>How the classifieds work
		</h2>
		<ul class="space-y-2.5 text-sm text-gray-600">
			<li class="flex items-start gap-2">
				<i class="fa-solid fa-check text-green-600 mt-1 text-xs shrink-0"></i>
				<span><strong class="text-gray-900">Posting is free</strong> for everyone in the community.</span>
			</li>
			<li class="flex items-start gap-2">
				<i class="fa-solid fa-check text-green-600 mt-1 text-xs shrink-0"></i>
				<span><strong class="text-gray-900">All listings are reviewed</strong> before going live — usually within 24 hours.</span>
			</li>
			<li class="flex items-start gap-2">
				<i class="fa-solid fa-check text-green-600 mt-1 text-xs shrink-0"></i>
				<span><strong class="text-gray-900">Contact stays private.</strong> When someone is interested, they reach us first — we forward the message so your phone and email aren't public.</span>
			</li>
			<li class="flex items-start gap-2">
				<i class="fa-solid fa-check text-green-600 mt-1 text-xs shrink-0"></i>
				<span><strong class="text-gray-900">Listings stay up for 30 days</strong>, then auto-expire. You can repost anytime.</span>
			</li>
			<li class="flex items-start gap-2">
				<i class="fa-solid fa-xmark text-red-500 mt-1 text-xs shrink-0"></i>
				<span><strong class="text-gray-900">No scams, MLMs, or anything haram.</strong> We curate to keep trust high.</span>
			</li>
		</ul>
	</div>

</div>
