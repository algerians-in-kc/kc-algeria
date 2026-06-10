<script lang="ts">
	import { intersect } from '$lib/actions/intersect';

	const cities = ['Olathe', 'Overland Park', 'Gardner', 'Lawrence', 'Kansas City MO', 'Lenexa', 'Shawnee', "Lee's Summit", 'Independence'];

	const sections = [
		{ href: '/settle', icon: 'fa-house', emoji: '🏠', title: 'Settle In', desc: "SSN, driver's license, bank account, housing, schools — your complete first-weeks checklist.", color: 'green' },
		{ href: '/work', icon: 'fa-briefcase', emoji: '💼', title: 'Find Work', desc: 'US resume tips, degree recognition, top KC employers, and networking with Algerian professionals.', color: 'blue' },
		{ href: '/directory', icon: 'fa-address-book', emoji: '📋', title: 'Directory', desc: 'Algerian businesses and Arabic/French-speaking doctors, lawyers, accountants near you.', color: 'purple' },
		{ href: '/events', icon: 'fa-calendar', emoji: '📅', title: 'Events', desc: 'Community gatherings, cultural events, Independence Day celebrations, and more.', color: 'amber' },
		{ href: '/worship', icon: 'fa-dove', emoji: '🕊️', title: 'Places of Worship', desc: 'Mosques, churches, and faith communities that welcome the Algerian community.', color: 'sky' },
		{ href: '/community', icon: 'fa-handshake', emoji: '🤝', title: 'Connect', desc: 'WhatsApp groups by city, classifieds, volunteer network, and newcomer support.', color: 'rose' },
	];

	const stats = [
		{ number: '5,000+', label: 'Algerians in KC' },
		{ number: '5', label: 'Cities covered' },
		{ number: '3', label: 'Languages' },
		{ number: '100%', label: 'Free resource' },
	];
</script>

<svelte:head>
	<title>Algerians in KC — Your Home Away from Home in Kansas City</title>
	<meta name="description" content="The go-to resource for Algerians living in the Kansas City metro — Olathe, Overland Park, Gardner, Lawrence, and KC Missouri. Settle in, find work, connect with the community." />
	<link rel="canonical" href="https://algeriansinKC.com" />
	<meta property="og:title" content="Algerians in KC — Your Home Away from Home" />
	<meta property="og:description" content="The go-to resource for Algerians living in the Kansas City metro area." />
	<meta property="og:url" content="https://algeriansinKC.com" />
	<script type="application/ld+json">{JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Algerians in KC",
		"description": "Community resource for Algerians living in the Kansas City metro area",
		"url": "https://algeriansinKC.com",
		"areaServed": "Kansas City Metro Area",
		"knowsLanguage": ["Arabic", "French", "Berber", "English"]
	})}</script>
</svelte:head>

<!-- Hero -->
<section class="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white overflow-hidden">
	<div class="absolute inset-0 opacity-5">
		<div class="absolute top-10 right-10 w-96 h-96 rounded-full bg-white"></div>
		<div class="absolute -bottom-20 -left-10 w-80 h-80 rounded-full bg-white"></div>
	</div>
	<div class="relative max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
		<div class="text-6xl mb-5 leading-none">🇩🇿</div>
		<h1 class="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
			Algerians in <span class="text-amber-400">Kansas City</span>
		</h1>
		<p class="text-green-100 text-lg md:text-xl max-w-2xl mx-auto mb-2 leading-relaxed">
			Your home away from home. A practical guide and community hub for Algerians across the KC metro.
		</p>
		<p class="text-green-300 text-sm mb-8 tracking-wide">
			<span class="font-arabic">مرحبا بكم</span> · Bienvenue · Ansuf Yiswen
		</p>
		<div class="flex flex-wrap justify-center gap-3 mb-10">
			<a href="/settle" class="bg-white text-green-800 px-7 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors shadow-lg">
				<i class="fa-solid fa-plane-arrival mr-2"></i>I Just Arrived
			</a>
			<a href="/community" class="bg-amber-500 hover:bg-amber-400 text-white px-7 py-3 rounded-xl font-bold transition-colors shadow-lg">
				<i class="fa-solid fa-handshake mr-2"></i>Join the Community
			</a>
		</div>
		<!-- Stats -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
			{#each stats as stat}
				<div class="bg-white/10 backdrop-blur-sm rounded-xl py-3 px-2">
					<div class="text-2xl font-extrabold text-amber-400">{stat.number}</div>
					<div class="text-xs text-green-200 mt-0.5">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- City pills -->
<div class="bg-green-900 py-3 px-4">
	<div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-4 gap-y-1">
		{#each [
			{ label: 'Olathe', slug: 'olathe' },
			{ label: 'Overland Park', slug: 'overland-park' },
			{ label: 'Gardner', slug: 'gardner' },
			{ label: 'Lawrence', slug: 'lawrence' },
			{ label: 'Kansas City MO', slug: 'kansas-city-mo' },
			{ label: 'Lenexa', slug: 'lenexa' },
			{ label: 'Shawnee', slug: 'shawnee' },
			{ label: "Lee's Summit", slug: 'lees-summit' },
			{ label: 'Independence', slug: 'independence' },
		] as city}
			<a href="/{city.slug}" class="text-green-300 hover:text-white text-xs font-medium transition-colors">
				<i class="fa-solid fa-location-dot text-green-500 mr-1"></i>{city.label}
			</a>
		{/each}
	</div>
</div>

<!-- Sections grid -->
<section class="max-w-6xl mx-auto px-4 py-14">
	<h2 class="text-2xl font-bold text-gray-900 text-center mb-2">Everything you need in one place</h2>
	<p class="text-gray-500 text-center mb-10 max-w-lg mx-auto text-sm">Built by and for the Algerian community in KC. Free, always.</p>
	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
		{#each sections as s, i}
			<a href={s.href} use:intersect={i * 70} class="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-green-200 transition-all duration-200">
				<div class="text-4xl mb-4 leading-none">{s.emoji}</div>
				<h2 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{s.title}</h2>
				<p class="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
				<span class="text-green-600 text-sm font-semibold group-hover:underline">
					Explore <i class="fa-solid fa-arrow-right text-xs ml-1"></i>
				</span>
			</a>
		{/each}
	</div>
</section>

<!-- Help banner -->
<section class="bg-gradient-to-r from-green-50 to-emerald-50 border-y border-green-100 py-14 px-4">
	<div class="max-w-3xl mx-auto text-center">
		<div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
			<i class="fa-solid fa-hands-holding-heart text-green-600 text-2xl"></i>
		</div>
		<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Just arrived in KC?</h2>
		<p class="text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed">
			We connect newcomers with community members who have been here longer — someone who speaks your language, knows the area, and has been through it all before.
		</p>
		<a href="/settle#help" class="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-3.5 rounded-xl font-bold transition-colors shadow-md">
			<i class="fa-solid fa-person-walking-arrow-right mr-2"></i>Get Personal Help
		</a>
	</div>
</section>

<!-- Why this exists -->
<section class="max-w-4xl mx-auto px-4 py-14">
	<div class="grid md:grid-cols-2 gap-10 items-center">
		<div>
			<h2 class="text-2xl font-bold text-gray-900 mb-4">Built for people like us</h2>
			<p class="text-gray-600 leading-relaxed mb-4">
				Moving to America is exciting and hard. Finding your community, navigating the paperwork, understanding how things work — it all takes time no one tells you about.
			</p>
			<p class="text-gray-600 leading-relaxed mb-4">
				This site is what we wish we had when we first arrived. A practical guide, a directory of people who speak your language, and a community that actually knows the KC area.
			</p>
			<a href="/about" class="text-green-600 font-semibold hover:underline text-sm">
				Read our story <i class="fa-solid fa-arrow-right text-xs ml-1"></i>
			</a>
		</div>
		<div class="grid grid-cols-2 gap-4">
			{#each [
				{ icon: 'fa-comments', label: 'Arabic, French & Berber support' },
				{ icon: 'fa-shield-halved', label: 'Safe, private community' },
				{ icon: 'fa-clock', label: 'Updated regularly' },
				{ icon: 'fa-heart', label: 'Run by volunteers' },
			] as item}
				<div class="bg-white rounded-xl border border-gray-100 p-4 text-center">
					<i class="fa-solid {item.icon} text-green-600 text-2xl mb-2 block"></i>
					<p class="text-xs text-gray-600 font-medium leading-snug">{item.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
