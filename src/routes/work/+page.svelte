<svelte:head>
	<title>Find Work — Algerians in KC</title>
	<meta name="description" content="Navigate the US job market as an Algerian professional in Kansas City — resume tips, degree recognition, top employers, and networking." />
	<link rel="canonical" href="https://algeriansinKC.com/work" />
</svelte:head>

<div class="bg-gradient-to-br from-green-700 to-green-900 text-white py-12 px-4">
	<div class="max-w-4xl mx-auto">
		<a href="/" class="text-green-200 hover:text-white text-sm mb-4 inline-flex items-center gap-1 transition-colors">
			<i class="fa-solid fa-arrow-left text-xs"></i> Back to home
		</a>
		<h1 class="text-3xl md:text-4xl font-extrabold mb-2">Find Work</h1>
		<p class="text-green-100 text-lg">Navigate the US job market as an Algerian professional in KC.</p>
	</div>
</div>

<div class="max-w-4xl mx-auto px-4 py-10 space-y-6">

	<div class="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
		<div class="flex items-center gap-3 mb-4">
			<span class="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
				<i class="fa-solid fa-file-lines text-blue-600"></i>
			</span>
			<h2 class="text-xl font-bold text-gray-900">US Resume vs. Algerian CV</h2>
		</div>
		<p class="text-gray-600 mb-4">The US resume is very different from what you are used to. Getting this right is the single biggest thing you can do to improve your job search.</p>
		<div class="grid md:grid-cols-2 gap-4">
			<div class="bg-red-50 rounded-xl p-4">
				<h3 class="text-sm font-bold text-red-700 mb-2">❌ Algerian CV habits to drop</h3>
				<ul class="space-y-1.5 text-sm text-gray-600">
					{#each ['Photo on the resume', 'Date of birth / age', 'Marital status', 'Long paragraphs about duties', '3–5 page documents', 'References listed upfront'] as item}
						<li class="flex gap-2"><i class="fa-solid fa-xmark text-red-400 mt-0.5 shrink-0"></i>{item}</li>
					{/each}
				</ul>
			</div>
			<div class="bg-green-50 rounded-xl p-4">
				<h3 class="text-sm font-bold text-green-700 mb-2">✅ US resume best practices</h3>
				<ul class="space-y-1.5 text-sm text-gray-600">
					{#each ['1 page max for most roles', 'Lead with achievements, not duties', 'Quantify results: "Increased X by 30%"', 'American English spelling', 'Tailored to each job posting', 'LinkedIn profile is equally important'] as item}
						<li class="flex gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>{item}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<div class="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
		<div class="flex items-center gap-3 mb-4">
			<span class="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
				<i class="fa-solid fa-graduation-cap text-purple-600"></i>
			</span>
			<h2 class="text-xl font-bold text-gray-900">Getting Your Algerian Degree Recognized</h2>
		</div>
		<p class="text-gray-600 mb-4">Your degree is valid but may need a credential evaluation for some roles — especially healthcare, engineering, education, and government.</p>
		<div class="bg-gray-50 rounded-xl p-4 space-y-2 mb-4">
			{#each [
				'Use WES (wes.org) or ECE (ece.org) — both are widely accepted US credential evaluators',
				'Cost: ~$200 · Timeline: 4–8 weeks (or 7 days for rush service)',
				'IT, tech, and many private sector roles often skip this — skills and portfolio matter more',
				'Engineering: check with Kansas or Missouri licensing board for your specific field',
				'Teaching: Kansas KSDE and Missouri DESE have their own foreign credential processes'
			] as tip}
				<div class="flex items-start gap-2 text-sm text-gray-600">
					<i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>
					<span>{tip}</span>
				</div>
			{/each}
		</div>
	</div>

	<div class="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
		<div class="flex items-center gap-3 mb-4">
			<span class="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
				<i class="fa-solid fa-magnifying-glass text-amber-600"></i>
			</span>
			<h2 class="text-xl font-bold text-gray-900">Where to Find Jobs in KC</h2>
		</div>
		<div class="grid md:grid-cols-2 gap-4 mb-4">
			<div class="bg-gray-50 rounded-xl p-4">
				<h3 class="text-sm font-bold text-gray-700 mb-3">Job Boards</h3>
				<ul class="space-y-2 text-sm text-gray-600">
					{#each [
						{ name: 'LinkedIn', note: 'Most important — keep profile updated' },
						{ name: 'Indeed.com', note: 'Largest US job board' },
						{ name: 'Glassdoor', note: 'Jobs + salary data + reviews' },
						{ name: 'Handshake', note: 'If enrolled at KU or JCCC' },
					] as item}
						<li class="flex justify-between gap-2">
							<span class="font-medium">{item.name}</span>
							<span class="text-gray-400 text-xs text-right">{item.note}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div class="bg-gray-50 rounded-xl p-4">
				<h3 class="text-sm font-bold text-gray-700 mb-3">Major KC Employers</h3>
				<ul class="space-y-1.5 text-sm text-gray-600">
					{#each ['Oracle/Cerner (healthcare IT)', 'T-Mobile / Sprint', 'Garmin (GPS/tech)', 'H&R Block (finance)', 'Hallmark (marketing)', 'Black & Veatch (engineering)', 'Burns & McDonnell (engineering)'] as employer}
						<li class="flex gap-2"><i class="fa-solid fa-building text-gray-400 text-xs mt-0.5 shrink-0"></i>{employer}</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="bg-blue-50 rounded-xl p-3 text-sm text-blue-800 flex gap-2">
			<i class="fa-solid fa-lightbulb shrink-0 mt-0.5"></i>
			<span><strong>Johnson County</strong> (Overland Park/Olathe area) has the strongest IT and engineering job market in the KC metro.</span>
		</div>
	</div>

	<div class="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
		<div class="flex items-center gap-3 mb-4">
			<span class="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center shrink-0">
				<i class="fa-solid fa-people-group text-green-600"></i>
			</span>
			<h2 class="text-xl font-bold text-gray-900">Networking in KC</h2>
		</div>
		<p class="text-gray-600 mb-4">In the US, <strong>who you know matters as much as what you know</strong>. Start building your network from day one.</p>
		<div class="bg-gray-50 rounded-xl p-4 space-y-2">
			{#each [
				'Connect with Algerian professionals in KC via our community WhatsApp groups',
				'Meetup.com — find KC tech, engineering, and business networking events',
				'Johnson County Community College (JCCC) offers free career services and networking events',
				'Olathe and Overland Park Chambers of Commerce hold regular business mixers',
				'LinkedIn: connect with people at your target companies before applying'
			] as tip}
				<div class="flex items-start gap-2 text-sm text-gray-600">
					<i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>
					<span>{tip}</span>
				</div>
			{/each}
		</div>
	</div>

	<div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100 p-6 text-center">
		<div class="text-3xl mb-3">💼</div>
		<h2 class="text-xl font-bold text-gray-900 mb-2">Community job board coming soon</h2>
		<p class="text-gray-600 mb-4 text-sm">Are you an Algerian professional hiring, or looking for a job in KC? Get connected through the community.</p>
		<a href="/community" class="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-bold transition-colors">
			<i class="fa-solid fa-handshake mr-2"></i>Connect with the Community
		</a>
	</div>

</div>
