<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';

	let lang = $state<'en' | 'fr'>('en');

	type Step = {
		title: string;
		desc: string;
		items: string[];
		note?: { type: 'warning' | 'tip'; text: string };
		split?: {
			left: { title: string; items: string[] };
			right: { title: string; items: string[] };
			warning?: string;
		};
	};

	const content: Record<'en' | 'fr', { steps: Step[]; helpTitle: string; helpDesc: string; helpCta: string }> = {
		en: {
			helpTitle: 'Need someone to walk you through it?',
			helpDesc: 'We connect newcomers with community volunteers who speak Arabic, French, or Tamazight and have navigated this same process in KC.',
			helpCta: 'Connect with a Volunteer',
			steps: [
				{
					title: 'Social Security Number (SSN)',
					desc: "Your SSN is the foundation of everything in the US — work, banking, taxes, and most official processes require it. Do this in your first week if you have work authorization.",
					items: [
						'Go to your local SSA office — Olathe: 150 W. Dennis Ave (call ahead to confirm hours)',
						'Bring: passport, visa, and I-94 arrival record (print from cbp.gov)',
						'Your SSN card arrives by mail in 2–4 weeks',
						'You can start work and open a bank account while waiting — use receipt as proof',
					],
				},
				{
					title: "Driver's License / State ID",
					desc: "Your Algerian license lets you drive for up to 90 days after arrival. Get a local license as soon as possible — it's also your main ID in the US.",
					items: [],
					split: {
						left: {
							title: 'Kansas (Olathe / Overland Park)',
							items: [
								'Go to Kansas DMV (ksrevenue.gov)',
								'Written test + driving test required',
								'Study the KS driver\'s manual at home first',
							],
						},
						right: {
							title: 'Missouri (KC MO side)',
							items: [
								'Go to Missouri DOR (dor.mo.gov)',
								'Written test + driving test required',
								'Bring SSN + 2 proofs of MO address',
							],
						},
						warning: 'Bring to DMV: Passport, SSN card, proof of address (utility bill or lease agreement)',
					},
				},
				{
					title: 'Open a Bank Account',
					desc: "You can open a bank account even without US credit history. Getting a bank account early lets you receive a salary, build credit, and avoid expensive check-cashing fees.",
					items: [
						'Bank of America and Chase both have newcomer-friendly accounts — bring passport + ITIN or SSN',
						'Credit Unions (Meritrust, Mazuma) are often more welcoming and have lower fees',
						'Get a secured credit card immediately — put $500 deposit, use it monthly, pay in full to build credit fast',
						'Your credit score will matter in 6–12 months for housing, car loans, and more',
					],
					note: { type: 'tip', text: 'Building US credit is a long game. Start immediately even with a small secured card.' },
				},
				{
					title: 'Finding Housing',
					desc: "Renting without US credit history is the biggest challenge for newcomers. Here is how to navigate it successfully.",
					items: [
						'Offer 2–3 months rent upfront — most landlords will accept without credit check',
						'Ask a community member with US credit history to co-sign if possible',
						'Olathe and Gardner are significantly more affordable than Overland Park',
						'Search Zillow, Apartments.com, and Facebook Marketplace for KC rentals',
						'Avoid leases longer than 1 year until you know which neighborhood you prefer',
						'Document everything in writing — never pay cash without a signed receipt',
					],
				},
				{
					title: 'Health Insurance',
					desc: "Healthcare in the US is expensive without insurance. A single ER visit can cost thousands of dollars. Getting covered is urgent.",
					items: [
						"If employed: enroll in your employer's plan immediately during your onboarding window",
						'Healthcare.gov marketplace — moving to the US qualifies as a "special enrollment event"',
						'KanCare (Kansas Medicaid) for low-income families — free or very low cost',
						'MO HealthNet for Missouri residents who qualify',
						'Community Health Center of Southeast Kansas has sliding-scale fees — pay what you can afford',
					],
				},
				{
					title: 'Schools & Childcare',
					desc: "KC metro has excellent public schools. Your children can enroll immediately — no waiting period.",
					items: [
						'Enroll at your local district school — bring immunization records (or get them done here) and proof of address',
						'Olathe USD 233 and Blue Valley (Overland Park) are among the highest-rated districts in Kansas',
						'ESL (English as a Second Language) programs are available in most schools — request it at enrollment',
						'Lawrence USD 497 is well-regarded for international families near the university',
						'Childcare assistance available through KanCare for qualifying Kansas families',
					],
				},
			],
		},
		fr: {
			helpTitle: 'Besoin de quelqu\'un pour vous guider ?',
			helpDesc: 'Nous mettons en relation les nouveaux arrivants avec des bénévoles communautaires qui parlent l\'arabe, le français ou le tamazight et ont vécu ce même parcours à KC.',
			helpCta: 'Contacter un bénévole',
			steps: [
				{
					title: 'Numéro de Sécurité Sociale (SSN)',
					desc: "Le SSN est la base de tout aux États-Unis — travail, banque, impôts et la plupart des démarches officielles l'exigent. Faites-le dès la première semaine si vous avez une autorisation de travail.",
					items: [
						'Rendez-vous au bureau SSA local — Olathe : 150 W. Dennis Ave (appelez avant pour confirmer les horaires)',
						'Apportez : passeport, visa et formulaire I-94 (à imprimer sur cbp.gov)',
						'La carte SSN arrive par courrier en 2 à 4 semaines',
						'Vous pouvez commencer à travailler et ouvrir un compte bancaire en attendant — utilisez le reçu comme preuve',
					],
				},
				{
					title: 'Permis de conduire / Carte d\'identité',
					desc: "Votre permis algérien vous autorise à conduire pendant 90 jours après l'arrivée. Obtenez un permis local dès que possible — c'est aussi votre pièce d'identité principale aux États-Unis.",
					items: [],
					split: {
						left: {
							title: 'Kansas (Olathe / Overland Park)',
							items: [
								'Allez au Kansas DMV (ksrevenue.gov)',
								'Test écrit + test de conduite requis',
								'Étudiez le manuel du conducteur KS avant de vous y rendre',
							],
						},
						right: {
							title: 'Missouri (côté KC MO)',
							items: [
								'Allez au Missouri DOR (dor.mo.gov)',
								'Test écrit + test de conduite requis',
								'Apportez SSN + 2 justificatifs d\'adresse MO',
							],
						},
						warning: 'Apportez au DMV : Passeport, carte SSN, justificatif de domicile (facture ou contrat de location)',
					},
				},
				{
					title: 'Ouvrir un compte bancaire',
					desc: "Vous pouvez ouvrir un compte bancaire sans historique de crédit américain. Un compte bancaire vous permet de recevoir un salaire, de construire votre crédit et d'éviter les frais élevés des caisses d'encaissement.",
					items: [
						'Bank of America et Chase ont des comptes adaptés aux nouveaux arrivants — apportez votre passeport + ITIN ou SSN',
						'Les Credit Unions (Meritrust, Mazuma) sont souvent plus accueillantes et ont des frais plus bas',
						'Obtenez immédiatement une carte de crédit sécurisée — déposez 500 $, utilisez-la chaque mois, remboursez intégralement pour construire votre crédit rapidement',
						'Votre score de crédit sera important dans 6 à 12 mois pour le logement, les prêts automobiles et plus encore',
					],
					note: { type: 'tip', text: 'Construire un crédit américain prend du temps. Commencez immédiatement, même avec une petite carte sécurisée.' },
				},
				{
					title: 'Trouver un logement',
					desc: "Louer sans historique de crédit américain est le plus grand défi pour les nouveaux arrivants. Voici comment y faire face avec succès.",
					items: [
						'Proposez 2 à 3 mois de loyer d\'avance — la plupart des propriétaires accepteront sans vérification de crédit',
						'Demandez à un membre de la communauté avec un historique de crédit américain de co-signer si possible',
						'Olathe et Gardner sont nettement plus abordables qu\'Overland Park',
						'Cherchez sur Zillow, Apartments.com et Facebook Marketplace pour les locations à KC',
						'Évitez les baux de plus d\'un an jusqu\'à ce que vous connaissiez le quartier qui vous convient',
						'Documentez tout par écrit — ne payez jamais en espèces sans reçu signé',
					],
				},
				{
					title: 'Assurance maladie',
					desc: "Les soins de santé aux États-Unis sont très chers sans assurance. Une seule visite aux urgences peut coûter des milliers de dollars. Être couvert est urgent.",
					items: [
						'Si vous êtes employé : inscrivez-vous au plan de votre employeur immédiatement lors de votre intégration',
						'Healthcare.gov — déménager aux États-Unis est considéré comme un « événement spécial d\'inscription »',
						'KanCare (Medicaid du Kansas) pour les familles à faibles revenus — gratuit ou à très faible coût',
						'MO HealthNet pour les résidents du Missouri qui remplissent les conditions',
						'Le Community Health Center of Southeast Kansas propose des tarifs dégressifs selon vos revenus',
					],
				},
				{
					title: 'Écoles et garde d\'enfants',
					desc: "Le métro KC dispose d'excellentes écoles publiques. Vos enfants peuvent s'inscrire immédiatement — pas de délai d'attente.",
					items: [
						'Inscrivez vos enfants à l\'école du quartier — apportez les dossiers de vaccination (ou faites-les ici) et un justificatif de domicile',
						'Olathe USD 233 et Blue Valley (Overland Park) sont parmi les meilleurs districts scolaires du Kansas',
						'Les programmes ESL (Anglais langue seconde) sont disponibles dans la plupart des écoles — demandez-les à l\'inscription',
						'Lawrence USD 497 est reconnu pour les familles internationales près de l\'université',
						'Aide à la garde d\'enfants disponible via KanCare pour les familles au Kansas qui remplissent les conditions',
					],
				},
			],
		},
	};

	const t = $derived(content[lang]);
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

<!-- Language toggle -->
<div class="max-w-4xl mx-auto px-4 pt-6 flex justify-end">
	<div class="inline-flex items-center bg-gray-100 rounded-xl p-1 gap-0.5" role="group" aria-label="Language selector">
		<button
			onclick={() => (lang = 'en')}
			class="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all {lang === 'en' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}"
		>
			🇺🇸 English
		</button>
		<button
			onclick={() => (lang = 'fr')}
			class="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all {lang === 'fr' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}"
		>
			🇫🇷 Français
		</button>
	</div>
</div>

<div class="max-w-4xl mx-auto px-4 py-6 space-y-6">

	{#each t.steps as step, i}
		<div class="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
			<div class="flex items-center gap-3 mb-4">
				<span class="w-9 h-9 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</span>
				<h2 class="text-xl font-bold text-gray-900">{step.title}</h2>
			</div>
			<p class="text-gray-600 mb-4 leading-relaxed">{step.desc}</p>

			{#if step.split}
				<div class="grid md:grid-cols-2 gap-4 mb-4">
					<div class="bg-gray-50 rounded-xl p-4">
						<h3 class="font-semibold text-sm text-gray-700 mb-2">{step.split.left.title}</h3>
						<ul class="space-y-1.5 text-sm text-gray-600">
							{#each step.split.left.items as item}
								<li class="flex gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>{item}</li>
							{/each}
						</ul>
					</div>
					<div class="bg-gray-50 rounded-xl p-4">
						<h3 class="font-semibold text-sm text-gray-700 mb-2">{step.split.right.title}</h3>
						<ul class="space-y-1.5 text-sm text-gray-600">
							{#each step.split.right.items as item}
								<li class="flex gap-2"><i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>{item}</li>
							{/each}
						</ul>
					</div>
				</div>
				{#if step.split.warning}
					<div class="bg-amber-50 rounded-xl p-3 text-sm text-amber-800 flex gap-2">
						<i class="fa-solid fa-triangle-exclamation shrink-0 mt-0.5"></i>
						<span><strong>{lang === 'en' ? 'Bring to DMV' : 'Apportez au DMV'} :</strong> {step.split.warning.replace(/^Bring to DMV: |^Apportez au DMV : /, '')}</span>
					</div>
				{/if}
			{:else if step.items.length}
				<div class="bg-gray-50 rounded-xl p-4 space-y-2">
					{#each step.items as item}
						<div class="flex items-start gap-2 text-sm text-gray-600">
							<i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>
							<span>{item}</span>
						</div>
					{/each}
				</div>
			{/if}

			{#if step.note}
				<div class="mt-4 {step.note.type === 'tip' ? 'bg-blue-50' : 'bg-amber-50'} rounded-xl p-3 text-sm {step.note.type === 'tip' ? 'text-blue-800' : 'text-amber-800'} flex gap-2">
					<i class="fa-solid {step.note.type === 'tip' ? 'fa-lightbulb' : 'fa-triangle-exclamation'} shrink-0 mt-0.5"></i>
					<span><strong>{lang === 'en' ? 'Pro tip' : 'Conseil'} :</strong> {step.note.text}</span>
				</div>
			{/if}
		</div>
	{/each}

	<!-- Personal help -->
	<div id="help" class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-8 text-center">
		<div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
			<i class="fa-solid fa-hands-holding-heart text-green-600 text-2xl"></i>
		</div>
		<h2 class="text-xl font-bold text-gray-900 mb-2">{t.helpTitle}</h2>
		<p class="text-gray-600 mb-5 max-w-md mx-auto text-sm leading-relaxed">{t.helpDesc}</p>
		<a href="/community#volunteer" class="inline-block bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-xl font-bold transition-colors">
			<i class="fa-solid fa-handshake mr-2"></i>{t.helpCta}
		</a>
	</div>

</div>
