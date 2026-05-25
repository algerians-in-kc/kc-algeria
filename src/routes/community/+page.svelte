<svelte:head>
	<title>Connect — Algerians in KC</title>
	<meta name="description" content="Join the Algerian community in Kansas City — WhatsApp groups, classifieds, and volunteer network." />
</svelte:head>

<div class="bg-green-700 text-white py-10 px-4">
	<div class="max-w-4xl mx-auto">
		<a href="/" class="text-green-200 hover:text-white text-sm mb-4 inline-block">← Back to home</a>
		<h1 class="text-3xl md:text-4xl font-bold mb-2">Connect</h1>
		<p class="text-green-100 text-lg">Meet other Algerians in KC and get involved in the community.</p>
	</div>
</div>

<div class="max-w-4xl mx-auto px-4 py-10 space-y-8">

	<!-- WhatsApp groups -->
	<div class="bg-white rounded-xl border border-gray-100 p-6">
		<h2 class="text-xl font-bold text-gray-900 mb-4">💬 Community WhatsApp Groups</h2>
		<p class="text-gray-600 mb-4">The fastest way to connect with Algerians near you. Groups by city:</p>
		<div class="grid sm:grid-cols-2 gap-3">
			{#each ['Olathe / Gardner', 'Overland Park', 'Lawrence', 'Kansas City MO', 'General KC Algeria'] as group}
				<div class="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
					<span class="text-sm font-medium text-gray-700">{group}</span>
					<span class="text-xs text-gray-400 italic">Link coming soon</span>
				</div>
			{/each}
		</div>
		<p class="text-sm text-gray-400 mt-4">To get the WhatsApp group links, <a href="mailto:contact@algeriansinKC.com" class="text-green-600 hover:underline">send us an email</a> and we'll add you.</p>
	</div>

	<!-- Volunteer -->
	<div id="volunteer" class="bg-white rounded-xl border border-gray-100 p-6">
		<h2 class="text-xl font-bold text-gray-900 mb-2">🤝 Newcomer Volunteer Network</h2>
		<p class="text-gray-600 mb-4">Community members who volunteer to help newcomers in their first weeks — airport pickup, orientation, answering questions in Arabic, French, or Tamazight.</p>
		<div class="grid sm:grid-cols-2 gap-4">
			<div class="bg-green-50 rounded-lg p-4">
				<h3 class="font-semibold text-gray-900 mb-1">I just arrived — I need help</h3>
				<p class="text-sm text-gray-500 mb-3">Connect with a volunteer who has been through it.</p>
				<a href="mailto:contact@algeriansinKC.com?subject=I just arrived - need help" class="text-sm font-medium text-green-700 hover:underline">Request help →</a>
			</div>
			<div class="bg-amber-50 rounded-lg p-4">
				<h3 class="font-semibold text-gray-900 mb-1">I want to volunteer</h3>
				<p class="text-sm text-gray-500 mb-3">Give back and help someone like you were helped.</p>
				<a href="mailto:contact@algeriansinKC.com?subject=I want to volunteer" class="text-sm font-medium text-amber-700 hover:underline">Sign up →</a>
			</div>
		</div>
	</div>

	<!-- Classifieds -->
	<div id="list" class="bg-white rounded-xl border border-gray-100 p-6">
		<h2 class="text-xl font-bold text-gray-900 mb-2">📦 Community Classifieds</h2>
		<p class="text-gray-600 mb-4">Buy, sell, or give away within the community. Jobs, housing, furniture, cars, services.</p>
		<div class="bg-gray-50 rounded-lg p-4 text-center text-gray-500 text-sm">
			Coming soon — classifieds board is under development.
		</div>
	</div>

	<!-- List your business -->
	<div class="bg-white rounded-xl border border-gray-100 p-6">
		<h2 class="text-xl font-bold text-gray-900 mb-2">📋 List Your Business or Service</h2>
		<p class="text-gray-600 mb-4">Are you an Algerian business owner or professional in KC? Get listed in the community directory for free.</p>
		<a href="mailto:contact@algeriansinKC.com?subject=Directory listing request" class="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
			Request a Free Listing
		</a>
	</div>

</div>
