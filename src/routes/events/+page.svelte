<svelte:head>
	<title>Events — Algerians in KC</title>
	<meta name="description" content="Community events, cultural gatherings, and celebrations for Algerians in the Kansas City area." />
</svelte:head>

<div class="bg-green-700 text-white py-10 px-4">
	<div class="max-w-4xl mx-auto">
		<a href="/" class="text-green-200 hover:text-white text-sm mb-4 inline-block">← Back to home</a>
		<h1 class="text-3xl md:text-4xl font-bold mb-2">Events</h1>
		<p class="text-green-100 text-lg">Community gatherings and cultural events across KC.</p>
	</div>
</div>

<div class="max-w-4xl mx-auto px-4 py-10">

	<div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 text-center">
		<p class="text-amber-800 font-medium">📢 Organizing a community event? Get it listed here for free.</p>
		<a href="/community" class="inline-block mt-3 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
			Submit an Event
		</a>
	</div>

	<!-- Recurring events -->
	<div class="space-y-5">
		<h2 class="text-xl font-bold text-gray-900">Upcoming & Recurring</h2>

		<div class="bg-white rounded-xl border border-gray-100 p-5">
			<div class="flex items-start gap-4">
				<div class="bg-green-100 text-green-700 rounded-lg px-3 py-2 text-center min-w-14">
					<div class="text-xs font-medium uppercase">Jul</div>
					<div class="text-2xl font-bold">5</div>
				</div>
				<div>
					<h3 class="font-bold text-gray-900">Algerian Independence Day</h3>
					<p class="text-sm text-gray-500 mt-1">Annual community celebration — July 5th. Details announced closer to the date.</p>
					<span class="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Annual</span>
				</div>
			</div>
		</div>

		<div class="bg-white rounded-xl border border-gray-100 p-5">
			<div class="flex items-start gap-4">
				<div class="bg-amber-100 text-amber-700 rounded-lg px-3 py-2 text-center min-w-14">
					<div class="text-xs font-medium uppercase">TBD</div>
					<div class="text-2xl font-bold">—</div>
				</div>
				<div>
					<h3 class="font-bold text-gray-900">Community Iftar / Gathering</h3>
					<p class="text-sm text-gray-500 mt-1">Community dinners and gatherings throughout the year. Watch this page for announcements.</p>
					<span class="inline-block mt-2 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Recurring</span>
				</div>
			</div>
		</div>

		<div class="text-center py-8 text-gray-400">
			<p class="text-sm">More events coming soon. <a href="/community" class="text-green-600 hover:underline">Join our WhatsApp group</a> to be notified.</p>
		</div>
	</div>
</div>
