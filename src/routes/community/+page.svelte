<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Connect — Algerians in KC</title>
	<meta name="description" content="Connect with the Algerian community in Kansas City — WhatsApp groups by city, newcomer volunteer network, classifieds, and more." />
	<link rel="canonical" href="https://algeriansinKC.com/community" />
</svelte:head>

<PageHeader
	title="Connect"
	subtitle="Meet other Algerians in KC and get involved in the community."
/>

<div class="max-w-4xl mx-auto px-4 py-10 space-y-8">

	<!-- WhatsApp groups -->
	<div class="bg-white rounded-2xl border border-gray-100 p-6">
		<div class="flex items-center gap-3 mb-5">
			<span class="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center shrink-0">
				<i class="fa-brands fa-whatsapp text-green-600 text-xl"></i>
			</span>
			<h2 class="text-xl font-bold text-gray-900">Community WhatsApp Groups</h2>
		</div>
		<p class="text-gray-600 mb-5 text-sm leading-relaxed">The fastest way to connect with Algerians near you. Groups are organized by city so conversations stay relevant to your area.</p>
		<div class="grid sm:grid-cols-2 gap-3 mb-4">
			{#each [
				{ city: 'Olathe / Gardner', size: 'Largest group' },
				{ city: 'Overland Park', size: 'Very active' },
				{ city: 'Lawrence, KS', size: 'University area' },
				{ city: 'Kansas City, MO', size: 'Missouri side' },
				{ city: 'General KC Algeria', size: 'All cities' },
			] as group}
				<div class="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
					<div class="flex items-center gap-2">
						<i class="fa-brands fa-whatsapp text-green-500"></i>
						<span class="text-sm font-medium text-gray-800">{group.city}</span>
					</div>
					<span class="text-xs text-gray-400">{group.size}</span>
				</div>
			{/each}
		</div>
		<div class="bg-green-50 rounded-xl p-4 flex items-start gap-3">
			<i class="fa-solid fa-circle-info text-green-600 mt-0.5 shrink-0"></i>
			<p class="text-sm text-green-800">To get WhatsApp group links, <a href="/contact" class="font-semibold hover:underline">send us a message</a> with your city and we'll add you within 24 hours.</p>
		</div>
	</div>

	<!-- Volunteer network -->
	<div id="volunteer" class="bg-white rounded-2xl border border-gray-100 p-6">
		<div class="flex items-center gap-3 mb-5">
			<span class="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
				<i class="fa-solid fa-hands-holding-heart text-amber-600"></i>
			</span>
			<h2 class="text-xl font-bold text-gray-900">Newcomer Volunteer Network</h2>
		</div>
		<p class="text-gray-600 mb-5 text-sm leading-relaxed">Community members who volunteer their time to help newcomers in their first weeks — airport pickup, orientation tours, help with paperwork, answering questions in Arabic, French, or Tamazight.</p>
		<div class="grid sm:grid-cols-2 gap-4">
			<div class="bg-green-50 rounded-xl p-5 border border-green-100">
				<div class="text-2xl mb-2">✈️</div>
				<h3 class="font-bold text-gray-900 mb-1">I just arrived — I need help</h3>
				<p class="text-sm text-gray-500 mb-4 leading-relaxed">Connect with a volunteer who has been through the same journey and can guide you through the first weeks.</p>
				<a href="/contact?subject=newcomer" class="inline-block text-sm font-bold text-green-700 bg-white border border-green-200 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
					Request Help <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
				</a>
			</div>
			<div class="bg-amber-50 rounded-xl p-5 border border-amber-100">
				<div class="text-2xl mb-2">🤝</div>
				<h3 class="font-bold text-gray-900 mb-1">I want to volunteer</h3>
				<p class="text-sm text-gray-500 mb-4 leading-relaxed">Give back to the community. Your experience in KC is valuable to someone just arriving today.</p>
				<a href="/contact?subject=volunteer" class="inline-block text-sm font-bold text-amber-700 bg-white border border-amber-200 px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors">
					Sign Up <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
				</a>
			</div>
		</div>
	</div>

	<!-- Classifieds -->
	<div id="classifieds" class="bg-white rounded-2xl border border-gray-100 p-6">
		<div class="flex items-center gap-3 mb-5">
			<span class="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
				<i class="fa-solid fa-tags text-purple-600"></i>
			</span>
			<h2 class="text-xl font-bold text-gray-900">Community Classifieds</h2>
		</div>
		<p class="text-gray-600 mb-4 text-sm">Buy, sell, or give away within the community. Jobs, housing, furniture, cars, and services.</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
			{#each [
				{ icon: 'fa-briefcase', label: 'Jobs' },
				{ icon: 'fa-house', label: 'Housing' },
				{ icon: 'fa-couch', label: 'Furniture' },
				{ icon: 'fa-car', label: 'Cars' },
			] as cat}
				<div class="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
					<i class="fa-solid {cat.icon} text-gray-400 text-xl mb-1 block"></i>
					<span class="text-xs text-gray-500 font-medium">{cat.label}</span>
				</div>
			{/each}
		</div>
		<div class="bg-purple-50 rounded-xl p-4 text-center">
			<p class="text-sm text-purple-800 font-medium mb-2">Classifieds board coming soon</p>
			<p class="text-xs text-purple-600">In the meantime, post in our WhatsApp groups or <a href="/contact" class="underline">contact us</a> to list something.</p>
		</div>
	</div>

	<!-- List your business -->
	<div id="list" class="bg-white rounded-2xl border border-gray-100 p-6">
		<div class="flex items-center gap-3 mb-5">
			<span class="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
				<i class="fa-solid fa-store text-blue-600"></i>
			</span>
			<h2 class="text-xl font-bold text-gray-900">List Your Business or Service</h2>
		</div>
		<p class="text-gray-600 mb-5 text-sm leading-relaxed">Are you an Algerian business owner or professional in KC? Get listed in the community directory for free. Reach 5,000+ Algerians who are looking for trusted professionals.</p>
		<div class="flex flex-wrap gap-2 mb-5">
			{#each ['Doctor', 'Dentist', 'Lawyer', 'Accountant', 'Real Estate', 'Restaurant', 'Mechanic', 'Contractor', 'Tutor'] as tag}
				<span class="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100">{tag}</span>
			{/each}
		</div>
		<a href="/contact?subject=directory" class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
			<i class="fa-solid fa-plus mr-2"></i>Request a Free Listing
		</a>
	</div>

</div>
