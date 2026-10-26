<script lang="ts">
	let { m, lang }: { m: any; lang: string } = $props();
	const base = $derived(`/${lang}`);

	const cities = [
		{ label: 'Olathe', slug: 'olathe' },
		{ label: 'Overland Park', slug: 'overland-park' },
		{ label: 'Gardner', slug: 'gardner' },
		{ label: 'Lawrence', slug: 'lawrence' },
		{ label: 'Kansas City, MO', slug: 'kansas-city-mo' },
		{ label: 'Lenexa', slug: 'lenexa' },
		{ label: 'Shawnee', slug: 'shawnee' },
		{ label: "Lee's Summit", slug: 'lees-summit' },
		{ label: 'Independence', slug: 'independence' }
	];
</script>

<footer class="bg-gray-900 text-gray-400 mt-16">
	<div class="max-w-6xl mx-auto px-4 py-12">
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
			<div class="sm:col-span-2 lg:col-span-1">
				<div class="flex items-center gap-2 mb-3">
					<span class="text-xl">🇩🇿</span>
					<span class="text-white font-bold text-lg">{m.header.brand1} {m.header.brand2}</span>
				</div>
				<p class="text-sm leading-relaxed mb-3">{m.footer.tagline}</p>
				<p class="text-sm text-gray-500">مرحبا بكم</p>
				<p class="text-sm text-gray-500">Bienvenue</p>
				<p class="text-sm text-gray-500">Ansuf Yiswen</p>
				<div class="flex gap-3 mt-4">
					<a href="mailto:contact@algeriansinKC.com" class="text-gray-500 hover:text-white transition-colors" aria-label={m.footer.email}>
						<i class="fa-solid fa-envelope text-lg"></i>
					</a>
				</div>
			</div>

			<div>
				<h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{m.footer.gettingStarted}</h3>
				<ul class="space-y-2.5 text-sm">
					<li><a href="{base}/settle" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-house text-xs text-green-500"></i>{m.nav.settle}</a></li>
					<li><a href="{base}/safety" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-shield-halved text-xs text-green-500"></i>{m.nav.safety}</a></li>
					<li><a href="{base}/rights" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-scale-balanced text-xs text-green-500"></i>{m.nav.rights}</a></li>
					<li><a href="{base}/work" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-briefcase text-xs text-green-500"></i>{m.nav.work}</a></li>
					<li><a href="{base}/directory" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-address-book text-xs text-green-500"></i>{m.nav.directory}</a></li>
				</ul>
			</div>

			<div>
				<h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{m.footer.community}</h3>
				<ul class="space-y-2.5 text-sm">
					<li><a href="{base}/events" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-calendar text-xs text-green-500"></i>{m.nav.events}</a></li>
					<li><a href="{base}/worship" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-dove text-xs text-green-500"></i>{m.nav.worship}</a></li>
					<li><a href="{base}/community" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-handshake text-xs text-green-500"></i>{m.nav.community}</a></li>
					<li><a href="{base}/about" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-circle-info text-xs text-green-500"></i>{m.nav.about}</a></li>
					<li><a href="{base}/contact" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-paper-plane text-xs text-green-500"></i>{m.footer.contact}</a></li>
				</ul>
			</div>

			<div>
				<h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{m.footer.cities}</h3>
				<ul class="space-y-2 text-sm">
					{#each cities as city}
						<li>
							<a href="{base}/{city.slug}" class="flex items-center gap-2 hover:text-white transition-colors">
								<i class="fa-solid fa-location-dot text-xs text-green-500"></i>{city.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
			<span>© {new Date().getFullYear()} {m.header.brand1} {m.header.brand2} · {m.footer.builtWith}</span>
			<div class="flex gap-4">
				<a href="{base}/privacy" class="hover:text-gray-400 transition-colors">{m.footer.privacy}</a>
				<a href="{base}/terms" class="hover:text-gray-400 transition-colors">{m.footer.terms}</a>
				<a href="{base}/contact" class="hover:text-gray-400 transition-colors">{m.footer.contact}</a>
			</div>
		</div>
	</div>
</footer>
