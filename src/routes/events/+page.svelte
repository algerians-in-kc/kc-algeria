<svelte:head>
	<title>Events — Algerians in KC</title>
	<meta name="description" content="Community events, cultural gatherings, and celebrations for Algerians in the Kansas City area." />
	<link rel="canonical" href="https://algeriansinKC.com/events" />
</svelte:head>

<div class="bg-gradient-to-br from-green-700 to-green-900 text-white py-12 px-4">
	<div class="max-w-4xl mx-auto">
		<a href="/" class="text-green-200 hover:text-white text-sm mb-4 inline-flex items-center gap-1 transition-colors">
			<i class="fa-solid fa-arrow-left text-xs"></i> Back to home
		</a>
		<h1 class="text-3xl md:text-4xl font-extrabold mb-2">Events</h1>
		<p class="text-green-100 text-lg">Community gatherings and cultural events across KC.</p>
	</div>
</div>

<div class="max-w-4xl mx-auto px-4 py-10">

	<div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
		<div class="flex items-start gap-3">
			<i class="fa-solid fa-calendar-plus text-amber-600 shrink-0 mt-0.5"></i>
			<div>
				<p class="font-bold text-amber-900 text-sm">Organizing a community event?</p>
				<p class="text-amber-700 text-sm">Get it listed here for free — reach the entire KC Algerian community.</p>
			</div>
		</div>
		<a href="/contact?subject=event" class="shrink-0 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors whitespace-nowrap">
			Submit an Event
		</a>
	</div>

	<!-- Recurring / known events -->
	<div class="space-y-5 mb-10">
		<h2 class="text-xl font-bold text-gray-900">Recurring Events</h2>

		<div class="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
			<div class="flex items-start gap-4">
				<div class="bg-green-100 text-green-700 rounded-xl px-3 py-2 text-center min-w-[56px] shrink-0">
					<div class="text-xs font-bold uppercase tracking-wide">Jul</div>
					<div class="text-2xl font-extrabold leading-tight">5</div>
				</div>
				<div class="flex-1">
					<div class="flex items-start justify-between gap-2 flex-wrap">
						<h3 class="font-bold text-gray-900">Algerian Independence Day Celebration</h3>
						<span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium shrink-0">Annual · July 5</span>
					</div>
					<p class="text-sm text-gray-500 mt-1.5 leading-relaxed">Annual community celebration of Algeria's independence. Food, music, and togetherness. Details announced closer to the date — join our WhatsApp group to be notified.</p>
					<a href="/community" class="inline-flex items-center gap-1 mt-3 text-xs text-green-600 font-semibold hover:underline">
						<i class="fa-brands fa-whatsapp"></i> Join WhatsApp to get notified
					</a>
				</div>
			</div>
		</div>

		<div class="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
			<div class="flex items-start gap-4">
				<div class="bg-amber-100 text-amber-700 rounded-xl px-3 py-2 text-center min-w-[56px] shrink-0">
					<div class="text-xs font-bold uppercase tracking-wide">TBD</div>
					<div class="text-2xl font-extrabold leading-tight">—</div>
				</div>
				<div class="flex-1">
					<div class="flex items-start justify-between gap-2 flex-wrap">
						<h3 class="font-bold text-gray-900">Community Dinners & Gatherings</h3>
						<span class="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium shrink-0">Recurring</span>
					</div>
					<p class="text-sm text-gray-500 mt-1.5 leading-relaxed">Informal community dinners and meetups throughout the year — a chance to meet fellow Algerians, share a meal, and feel at home. Watch this page or join the WhatsApp group for upcoming dates.</p>
				</div>
			</div>
		</div>

		<div class="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
			<div class="flex items-start gap-4">
				<div class="bg-sky-100 text-sky-700 rounded-xl px-3 py-2 text-center min-w-[56px] shrink-0">
					<div class="text-xs font-bold uppercase tracking-wide">TBD</div>
					<div class="text-2xl font-extrabold leading-tight">—</div>
				</div>
				<div class="flex-1">
					<div class="flex items-start justify-between gap-2 flex-wrap">
						<h3 class="font-bold text-gray-900">Newcomer Welcome Meetups</h3>
						<span class="text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full font-medium shrink-0">Recurring</span>
					</div>
					<p class="text-sm text-gray-500 mt-1.5 leading-relaxed">Informal meetups specifically for new arrivals — a chance to meet people, ask questions, and get oriented in KC. Organized by community volunteers.</p>
					<a href="/contact?subject=newcomer" class="inline-flex items-center gap-1 mt-3 text-xs text-sky-600 font-semibold hover:underline">
						<i class="fa-solid fa-user-plus"></i> Get notified about the next one
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="bg-green-50 rounded-2xl border border-green-100 p-6 text-center">
		<i class="fa-solid fa-bell text-green-600 text-2xl mb-3 block"></i>
		<h2 class="text-lg font-bold text-gray-900 mb-2">Never miss an event</h2>
		<p class="text-gray-600 text-sm mb-4">The best way to stay updated is to join your city's WhatsApp group. Events are announced there first.</p>
		<a href="/community" class="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-bold transition-colors">
			<i class="fa-brands fa-whatsapp mr-2"></i>Join Your City Group
		</a>
	</div>

</div>
