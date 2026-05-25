<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Settle In — Algerians in KC</title>
	<meta name="description" content="Your complete guide to settling in Kansas City — SSN, driver's license, bank account, housing, health insurance, and schools." />
	<link rel="canonical" href="https://algeriansinKC.com/settle" />
</svelte:head>

<PageHeader
	title="Settle In"
	subtitle="Your step-by-step guide for the first weeks in Kansas City."
	tags={["SSN", "Driver's License", "Bank Account", "Housing", "Health Insurance", "Schools"]}
/>

<div class="max-w-4xl mx-auto px-4 py-10 space-y-6">

	<!-- Step 1 -->
	<div class="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
		<div class="flex items-center gap-3 mb-4">
			<span class="w-9 h-9 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</span>
			<h2 class="text-xl font-bold text-gray-900">Social Security Number (SSN)</h2>
		</div>
		<p class="text-gray-600 mb-4 leading-relaxed">Your SSN is the foundation of everything in the US — work, banking, taxes, and most official processes require it. Do this in your first week if you have work authorization.</p>
		<div class="bg-gray-50 rounded-xl p-4 space-y-2">
			{#each [
				'Go to your local SSA office — Olathe: 150 W. Dennis Ave (call ahead to confirm hours)',
				'Bring: passport, visa, and I-94 arrival record (print from cbp.gov)',
				'Your SSN card arrives by mail in 2–4 weeks',
				'You can start work and open a bank account while waiting — use receipt as proof'
			] as step}
				<div class="flex items-start gap-2 text-sm text-gray-600">
					<i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>
					<span>{step}</span>
				</div>
			{/each}
		</div>
	</div>

	<!-- Step 2 -->
	<div class="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
		<div class="flex items-center gap-3 mb-4">
			<span class="w-9 h-9 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</span>
			<h2 class="text-xl font-bold text-gray-900">Driver's License / State ID</h2>
		</div>
		<p class="text-gray-600 mb-4 leading-relaxed">Your Algerian license lets you drive for up to 90 days after arrival. Get a local license as soon as possible — it's also your main ID in the US.</p>
		<div class="grid md:grid-cols-2 gap-4 mb-4">
			<div class="bg-gray-50 rounded-xl p-4">
				<h3 class="font-semibold text-sm text-gray-700 mb-2">Kansas (Olathe/Overland Park)</h3>
				<ul class="space-y-1.5 text-sm text-gray-600">
					<li class="flex gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>Go to Kansas DMV (ksrevenue.gov)</li>
					<li class="flex gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>Written test + driving test required</li>
					<li class="flex gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>Study the KS driver's manual at home first</li>
				</ul>
			</div>
			<div class="bg-gray-50 rounded-xl p-4">
				<h3 class="font-semibold text-sm text-gray-700 mb-2">Missouri (KC MO side)</h3>
				<ul class="space-y-1.5 text-sm text-gray-600">
					<li class="flex gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>Go to Missouri DOR (dor.mo.gov)</li>
					<li class="flex gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>Written test + driving test required</li>
					<li class="flex gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>Bring SSN + 2 proofs of MO address</li>
				</ul>
			</div>
		</div>
		<div class="bg-amber-50 rounded-xl p-3 text-sm text-amber-800 flex gap-2">
			<i class="fa-solid fa-triangle-exclamation shrink-0 mt-0.5"></i>
			<span><strong>Bring to DMV:</strong> Passport, SSN card, proof of address (utility bill or lease agreement)</span>
		</div>
	</div>

	<!-- Step 3 -->
	<div class="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
		<div class="flex items-center gap-3 mb-4">
			<span class="w-9 h-9 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</span>
			<h2 class="text-xl font-bold text-gray-900">Open a Bank Account</h2>
		</div>
		<p class="text-gray-600 mb-4 leading-relaxed">You can open a bank account even without US credit history. Getting a bank account early lets you receive a salary, build credit, and avoid expensive check-cashing fees.</p>
		<div class="bg-gray-50 rounded-xl p-4 space-y-2 mb-4">
			{#each [
				'Bank of America and Chase both have newcomer-friendly accounts — bring passport + ITIN or SSN',
				'Credit Unions (Meritrust, Mazuma) are often more welcoming and have lower fees',
				'Get a secured credit card immediately — put $500 deposit, use it monthly, pay in full to build credit fast',
				'Your credit score will matter in 6–12 months for housing, car loans, and more'
			] as tip}
				<div class="flex items-start gap-2 text-sm text-gray-600">
					<i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>
					<span>{tip}</span>
				</div>
			{/each}
		</div>
		<div class="bg-blue-50 rounded-xl p-3 text-sm text-blue-800 flex gap-2">
			<i class="fa-solid fa-lightbulb shrink-0 mt-0.5"></i>
			<span><strong>Pro tip:</strong> Building US credit is a long game. Start immediately even with a small secured card.</span>
		</div>
	</div>

	<!-- Step 4 -->
	<div class="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
		<div class="flex items-center gap-3 mb-4">
			<span class="w-9 h-9 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">4</span>
			<h2 class="text-xl font-bold text-gray-900">Finding Housing</h2>
		</div>
		<p class="text-gray-600 mb-4 leading-relaxed">Renting without US credit history is the biggest challenge for newcomers. Here is how to navigate it successfully.</p>
		<div class="bg-gray-50 rounded-xl p-4 space-y-2 mb-4">
			{#each [
				'Offer 2–3 months rent upfront — most landlords will accept without credit check',
				'Ask a community member with US credit history to co-sign if possible',
				'Olathe and Gardner are significantly more affordable than Overland Park',
				'Search Zillow, Apartments.com, and Facebook Marketplace for KC rentals',
				'Avoid leases longer than 1 year until you know which neighborhood you prefer',
				'Document everything in writing — never pay cash without a signed receipt'
			] as tip}
				<div class="flex items-start gap-2 text-sm text-gray-600">
					<i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>
					<span>{tip}</span>
				</div>
			{/each}
		</div>
	</div>

	<!-- Step 5 -->
	<div class="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
		<div class="flex items-center gap-3 mb-4">
			<span class="w-9 h-9 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">5</span>
			<h2 class="text-xl font-bold text-gray-900">Health Insurance</h2>
		</div>
		<p class="text-gray-600 mb-4 leading-relaxed">Healthcare in the US is expensive without insurance. A single ER visit can cost thousands of dollars. Getting covered is urgent.</p>
		<div class="bg-gray-50 rounded-xl p-4 space-y-2">
			{#each [
				'If employed: enroll in your employer\'s plan immediately during your onboarding window',
				'Healthcare.gov marketplace — moving to the US qualifies as a "special enrollment event"',
				'KanCare (Kansas Medicaid) for low-income families — free or very low cost',
				'MO HealthNet for Missouri residents who qualify',
				'Community Health Center of Southeast Kansas has sliding-scale fees — pay what you can afford'
			] as tip}
				<div class="flex items-start gap-2 text-sm text-gray-600">
					<i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>
					<span>{tip}</span>
				</div>
			{/each}
		</div>
	</div>

	<!-- Step 6 -->
	<div class="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
		<div class="flex items-center gap-3 mb-4">
			<span class="w-9 h-9 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">6</span>
			<h2 class="text-xl font-bold text-gray-900">Schools & Childcare</h2>
		</div>
		<p class="text-gray-600 mb-4 leading-relaxed">KC metro has excellent public schools. Your children can enroll immediately — no waiting period.</p>
		<div class="bg-gray-50 rounded-xl p-4 space-y-2">
			{#each [
				'Enroll at your local district school — bring immunization records (or get them done here) and proof of address',
				'Olathe USD 233 and Blue Valley (Overland Park) are among the highest-rated districts in Kansas',
				'ESL (English as a Second Language) programs are available in most schools — request it at enrollment',
				'Lawrence USD 497 is well-regarded for international families near the university',
				'Childcare assistance available through KanCare for qualifying Kansas families'
			] as tip}
				<div class="flex items-start gap-2 text-sm text-gray-600">
					<i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>
					<span>{tip}</span>
				</div>
			{/each}
		</div>
	</div>

	<!-- Personal help -->
	<div id="help" class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-8 text-center">
		<div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
			<i class="fa-solid fa-hands-holding-heart text-green-600 text-2xl"></i>
		</div>
		<h2 class="text-xl font-bold text-gray-900 mb-2">Need someone to walk you through it?</h2>
		<p class="text-gray-600 mb-5 max-w-md mx-auto text-sm leading-relaxed">We connect newcomers with community volunteers who speak Arabic, French, or Tamazight and have navigated this same process in KC.</p>
		<a href="/community#volunteer" class="inline-block bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-xl font-bold transition-colors">
			<i class="fa-solid fa-handshake mr-2"></i>Connect with a Volunteer
		</a>
	</div>

</div>
