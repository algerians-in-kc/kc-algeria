<svelte:head>
	<title>Community Directory — Algerians in KC</title>
	<meta name="description" content="Algerian businesses and Arabic/French-speaking professionals in Kansas City — doctors, lawyers, accountants, restaurants, and more." />
	<link rel="canonical" href="https://algeriansinKC.com/directory" />
</svelte:head>

<div class="bg-gradient-to-br from-green-700 to-green-900 text-white py-12 px-4">
	<div class="max-w-4xl mx-auto">
		<a href="/" class="text-green-200 hover:text-white text-sm mb-4 inline-flex items-center gap-1 transition-colors">
			<i class="fa-solid fa-arrow-left text-xs"></i> Back to home
		</a>
		<h1 class="text-3xl md:text-4xl font-extrabold mb-2">Community Directory</h1>
		<p class="text-green-100 text-lg">Algerian businesses and professionals who speak your language.</p>
	</div>
</div>

<div class="max-w-4xl mx-auto px-4 py-10">

	<div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
		<div class="flex items-start gap-3">
			<i class="fa-solid fa-bullhorn text-amber-600 mt-0.5 shrink-0"></i>
			<div>
				<p class="font-bold text-amber-900 text-sm">This directory is growing</p>
				<p class="text-amber-700 text-sm">Are you an Algerian professional or business owner in KC? Get listed for free.</p>
			</div>
		</div>
		<a href="/contact?subject=directory" class="shrink-0 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors whitespace-nowrap">
			<i class="fa-solid fa-plus mr-1.5"></i>Add Listing
		</a>
	</div>

	<div class="space-y-8">
		{#each [
			{ icon: 'fa-stethoscope', title: 'Healthcare', color: 'text-red-500 bg-red-50', desc: 'Doctors, dentists, and mental health providers who speak Arabic or French.' },
			{ icon: 'fa-scale-balanced', title: 'Legal Services', color: 'text-blue-500 bg-blue-50', desc: 'Immigration lawyers, general attorneys, and legal consultants.' },
			{ icon: 'fa-calculator', title: 'Finance & Accounting', color: 'text-green-500 bg-green-50', desc: 'Tax preparation, accounting, and financial planning for immigrants.' },
			{ icon: 'fa-house-chimney', title: 'Real Estate', color: 'text-amber-500 bg-amber-50', desc: 'Real estate agents who understand the immigrant experience.' },
			{ icon: 'fa-utensils', title: 'Food & Restaurants', color: 'text-orange-500 bg-orange-50', desc: 'Algerian and North African food, groceries, and catering in KC.' },
			{ icon: 'fa-wrench', title: 'Home & Auto Services', color: 'text-gray-500 bg-gray-50', desc: 'Mechanics, contractors, and home services from trusted community members.' },
		] as cat}
			<div>
				<div class="flex items-center gap-3 mb-4">
					<span class="w-9 h-9 {cat.color} rounded-lg flex items-center justify-center shrink-0">
						<i class="fa-solid {cat.icon}"></i>
					</span>
					<div>
						<h2 class="text-lg font-bold text-gray-900">{cat.title}</h2>
						<p class="text-xs text-gray-500">{cat.desc}</p>
					</div>
				</div>
				<div class="bg-white rounded-2xl border border-gray-100 p-5">
					<div class="flex items-center gap-3 text-gray-400">
						<i class="fa-solid fa-clock text-sm"></i>
						<p class="text-sm italic">Listings coming soon. <a href="/contact?subject=directory" class="text-green-600 hover:underline not-italic font-medium">Be the first to list in this category.</a></p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
