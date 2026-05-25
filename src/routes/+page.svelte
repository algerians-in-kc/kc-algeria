<svelte:head>
	<title>Algerians in KC — Your Home Away from Home in Kansas City</title>
	<meta name="description" content="A community resource for Algerians living in the Kansas City metro area — Olathe, Overland Park, Gardner, Lawrence, and KC Missouri." />
	<link rel="canonical" href="https://algeriansinKC.com" />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-br from-green-700 to-green-900 text-white py-16 px-4">
	<div class="max-w-4xl mx-auto text-center">
		<div class="text-5xl mb-4">🇩🇿</div>
		<h1 class="text-3xl md:text-5xl font-bold mb-4">
			Algerians in <span class="text-amber-400">Kansas City</span>
		</h1>
		<p class="text-green-100 text-lg md:text-xl mb-3 max-w-2xl mx-auto">
			Your home away from home. A practical guide and community for Algerians across the KC metro area.
		</p>
		<p class="text-green-300 text-sm mb-8">مرحبا بكم · Bienvenue · Ansuf deg wemkan-agi</p>
		<div class="flex flex-wrap justify-center gap-3">
			<a href="/settle" class="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
				I Just Arrived
			</a>
			<a href="/community" class="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
				Join the Community
			</a>
		</div>
		<p class="text-green-400 text-xs mt-6">Covering Olathe · Overland Park · Gardner · Lawrence · Kansas City MO</p>
	</div>
</section>

<!-- Quick links -->
<section class="max-w-6xl mx-auto px-4 py-12">
	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
		<a href="/settle" class="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-green-200 transition-all group">
			<div class="text-3xl mb-3">🏠</div>
			<h2 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700">Settle In</h2>
			<p class="text-gray-500 text-sm">SSN, driver's license, bank account, housing, schools — everything for your first weeks.</p>
		</a>

		<a href="/work" class="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-green-200 transition-all group">
			<div class="text-3xl mb-3">💼</div>
			<h2 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700">Find Work</h2>
			<p class="text-gray-500 text-sm">US resume tips, degree recognition, job boards, and Algerian professionals to connect with.</p>
		</a>

		<a href="/directory" class="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-green-200 transition-all group">
			<div class="text-3xl mb-3">📋</div>
			<h2 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700">Directory</h2>
			<p class="text-gray-500 text-sm">Algerian businesses, Arabic/French-speaking doctors, lawyers, accountants, and more.</p>
		</a>

		<a href="/events" class="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-green-200 transition-all group">
			<div class="text-3xl mb-3">📅</div>
			<h2 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700">Events</h2>
			<p class="text-gray-500 text-sm">Community gatherings, cultural events, Independence Day celebrations, and more.</p>
		</a>

		<a href="/worship" class="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-green-200 transition-all group">
			<div class="text-3xl mb-3">🕊️</div>
			<h2 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700">Places of Worship</h2>
			<p class="text-gray-500 text-sm">Mosques, churches, and faith communities welcoming the Algerian community in KC.</p>
		</a>

		<a href="/community" class="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-green-200 transition-all group">
			<div class="text-3xl mb-3">🤝</div>
			<h2 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700">Connect</h2>
			<p class="text-gray-500 text-sm">WhatsApp groups, classifieds, and ways to meet other Algerians in your city.</p>
		</a>
	</div>
</section>

<!-- Need help banner -->
<section class="bg-green-50 border-y border-green-100 py-10 px-4">
	<div class="max-w-3xl mx-auto text-center">
		<h2 class="text-2xl font-bold text-gray-900 mb-3">Just arrived in KC?</h2>
		<p class="text-gray-600 mb-6">We connect newcomers with community members who have been here longer — someone who speaks your language, knows the area, and has been through it all.</p>
		<a href="/settle#help" class="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
			Get Personal Help
		</a>
	</div>
</section>

<!-- Cities -->
<section class="max-w-6xl mx-auto px-4 py-12">
	<h2 class="text-xl font-bold text-gray-900 mb-6 text-center">We cover the entire KC corridor</h2>
	<div class="flex flex-wrap justify-center gap-3">
		{#each ['Olathe', 'Overland Park', 'Gardner', 'Lawrence', 'Kansas City MO', 'Lenexa', 'Shawnee', "Lee's Summit", 'Independence'] as city}
			<span class="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium">{city}</span>
		{/each}
	</div>
</section>
