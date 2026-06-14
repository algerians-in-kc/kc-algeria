<footer class="bg-gray-900 text-gray-400 mt-16">
	<div class="max-w-6xl mx-auto px-4 py-12">
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
			<div class="sm:col-span-2 lg:col-span-1">
				<div class="flex items-center gap-2 mb-3">
					<span class="text-xl">🇩🇿</span>
					<span class="text-white font-bold text-lg">Algerians in KC</span>
				</div>
				<p class="text-sm leading-relaxed mb-3">Your home away from home in Kansas City.</p>
				<p class="text-sm text-gray-500">مرحبا بكم</p>
				<p class="text-sm text-gray-500">Bienvenue</p>
				<p class="text-sm text-gray-500">Ansuf Yiswen</p>
				<div class="flex gap-3 mt-4">
					<a href="mailto:contact@algeriansinKC.com" class="text-gray-500 hover:text-white transition-colors" aria-label="Email">
						<i class="fa-solid fa-envelope text-lg"></i>
					</a>
				</div>
			</div>

			<div>
				<h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Getting Started</h3>
				<ul class="space-y-2.5 text-sm">
					<li><a href="/settle" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-house text-xs text-green-500"></i>Settle In</a></li>
					<li><a href="/work" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-briefcase text-xs text-green-500"></i>Find Work</a></li>
					<li><a href="/directory" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-address-book text-xs text-green-500"></i>Directory</a></li>
				</ul>
			</div>

			<div>
				<h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Community</h3>
				<ul class="space-y-2.5 text-sm">
					<li><a href="/events" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-calendar text-xs text-green-500"></i>Events</a></li>
					<li><a href="/worship" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-dove text-xs text-green-500"></i>Worship</a></li>
					<li><a href="/community" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-handshake text-xs text-green-500"></i>Connect</a></li>
					<li><a href="/about" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-circle-info text-xs text-green-500"></i>About</a></li>
					<li><a href="/contact" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-paper-plane text-xs text-green-500"></i>Contact</a></li>
				</ul>
			</div>

			<div>
				<h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Cities We Cover</h3>
				<ul class="space-y-2 text-sm">
					{#each [
						{ label: 'Olathe', slug: 'olathe' },
						{ label: 'Overland Park', slug: 'overland-park' },
						{ label: 'Gardner', slug: 'gardner' },
						{ label: 'Lawrence', slug: 'lawrence' },
						{ label: 'Kansas City, MO', slug: 'kansas-city-mo' },
						{ label: 'Lenexa', slug: 'lenexa' },
						{ label: 'Shawnee', slug: 'shawnee' },
						{ label: "Lee's Summit", slug: 'lees-summit' },
						{ label: 'Independence', slug: 'independence' },
					] as city}
						<li>
							<a href="/{city.slug}" class="flex items-center gap-2 hover:text-white transition-colors">
								<i class="fa-solid fa-location-dot text-xs text-green-500"></i>{city.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
			<span>© {new Date().getFullYear()} Algerians in KC · Built with love for the community</span>
			<div class="flex gap-4">
				<a href="/privacy" class="hover:text-gray-400 transition-colors">Privacy</a>
				<a href="/terms" class="hover:text-gray-400 transition-colors">Terms</a>
				<a href="/contact" class="hover:text-gray-400 transition-colors">Contact</a>
			</div>
		</div>
	</div>
</footer>
