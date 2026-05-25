<svelte:head>
	<title>About — Algerians in KC</title>
	<meta name="description" content="The story behind Algerians in KC — why we built it, who it's for, and how you can get involved." />
	<link rel="canonical" href="https://algeriansinKC.com/about" />
</svelte:head>

<div class="bg-gradient-to-br from-green-700 to-green-900 text-white py-12 px-4">
	<div class="max-w-3xl mx-auto">
		<a href="/" class="text-green-200 hover:text-white text-sm mb-4 inline-flex items-center gap-1 transition-colors">
			<i class="fa-solid fa-arrow-left text-xs"></i> Back to home
		</a>
		<h1 class="text-3xl md:text-4xl font-extrabold mb-2">About This Site</h1>
		<p class="text-green-100 text-lg">Built for the community, by the community.</p>
	</div>
</div>

<div class="max-w-3xl mx-auto px-4 py-10 space-y-8">

	<div class="bg-white rounded-2xl border border-gray-100 p-8">
		<h2 class="text-xl font-bold text-gray-900 mb-4">Our Story</h2>
		<div class="space-y-4 text-gray-600 leading-relaxed">
			<p>Moving to America is exciting and exhausting. There are a hundred things to figure out and not always someone who speaks your language to help you navigate them.</p>
			<p>This site was built because that resource didn't exist for Algerians in Kansas City. A place where someone who just landed at KCI airport could find out where to get their SSN, which neighborhoods are Algerian-friendly, where to find familiar food, and most importantly — how to reach someone who has been through it all before.</p>
			<p>We cover the full KC corridor: <strong>Lawrence → Olathe → Overland Park → Gardner → Kansas City MO</strong> — home to over 5,000 Algerians and North Africans.</p>
		</div>
	</div>

	<div class="bg-white rounded-2xl border border-gray-100 p-8">
		<h2 class="text-xl font-bold text-gray-900 mb-4">Who We Serve</h2>
		<p class="text-gray-600 mb-4 leading-relaxed">This site is for the entire Algerian community — no matter your background, religion, or how long you've been here.</p>
		<div class="grid sm:grid-cols-2 gap-4">
			{#each [
				{ icon: 'fa-plane-arrival', title: 'Newcomers', desc: 'Just arrived and need a roadmap for the first weeks.' },
				{ icon: 'fa-people-group', title: 'Established residents', desc: 'Already here but looking to connect with the community.' },
				{ icon: 'fa-graduation-cap', title: 'Students', desc: 'At KU, JCCC, or other KC-area schools.' },
				{ icon: 'fa-briefcase', title: 'Professionals', desc: 'Navigating the US job market and career advancement.' },
			] as card}
				<div class="bg-gray-50 rounded-xl p-4 flex gap-3">
					<i class="fa-solid {card.icon} text-green-600 mt-0.5 shrink-0"></i>
					<div>
						<h3 class="font-semibold text-gray-900 text-sm">{card.title}</h3>
						<p class="text-xs text-gray-500 mt-0.5 leading-relaxed">{card.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="bg-white rounded-2xl border border-gray-100 p-8">
		<h2 class="text-xl font-bold text-gray-900 mb-4">Our Values</h2>
		<div class="space-y-4">
			{#each [
				{ icon: 'fa-users', title: 'Community first', desc: 'Every decision is made with the community in mind. This site serves people, not ads.' },
				{ icon: 'fa-heart', title: 'Welcoming to all', desc: 'Muslim, Christian, secular — Algerian identity is bigger than religion. Everyone belongs here.' },
				{ icon: 'fa-shield-halved', title: 'Safe and private', desc: 'We don\'t sell your data. We don\'t require accounts. Your privacy is respected.' },
				{ icon: 'fa-hand-holding-heart', title: 'Service over self', desc: 'This site is run by volunteers. We are here to serve, not to profit.' },
			] as value}
				<div class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
					<div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
						<i class="fa-solid {value.icon} text-green-600"></i>
					</div>
					<div>
						<h3 class="font-semibold text-gray-900">{value.title}</h3>
						<p class="text-sm text-gray-500 mt-0.5 leading-relaxed">{value.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 p-8 text-center">
		<div class="text-3xl mb-3">🇩🇿</div>
		<h2 class="text-xl font-bold text-gray-900 mb-2">Want to contribute?</h2>
		<p class="text-gray-600 mb-5 text-sm max-w-md mx-auto leading-relaxed">Whether you want to add a business to the directory, volunteer to help newcomers, share local knowledge, or just say hello — we would love to hear from you.</p>
		<a href="/contact" class="inline-block bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-xl font-bold transition-colors">
			<i class="fa-solid fa-paper-plane mr-2"></i>Get in Touch
		</a>
	</div>

</div>
