// "Know Your Rights" content — companion to the Stay Safe from Scams page. A lot of
// harm to newcomers isn't a trick; it's legal exploitation that works only because
// people don't know their rights (wage theft, kept deposits, illegal evictions).
//
// SCOPE: general principles + "who to call", NOT a legal manual. Laws differ between
// Kansas and Missouri and change over time — hence the disclaimer and the Get Help
// list. English + French only; Arabic must be added by a native speaker.
//
// ⚠️ The organizations in `getHelp` are real but their details (phone, eligibility)
// must be VERIFIED/CONFIRMED by the team before this page is treated as launched.

export type RightsLang = 'en' | 'fr';

export const RIGHTS_LANGS: { code: RightsLang; label: string }[] = [
	{ code: 'en', label: 'English' },
	{ code: 'fr', label: 'Français' },
];

type Item = { icon: string; en: string; fr: string };

export const chrome: Record<
	RightsLang,
	{
		dir: 'ltr' | 'rtl';
		back: string;
		title: string;
		subtitle: string;
		disclaimer: string;
		renterHeading: string;
		workerHeading: string;
		policeHeading: string;
		getHelpHeading: string;
		getHelpNote: string;
		alsoReadTitle: string;
		alsoReadText: string;
		alsoReadButton: string;
		ctaTitle: string;
		ctaText: string;
		ctaButton: string;
	}
> = {
	en: {
		dir: 'ltr',
		back: 'Back to home',
		title: 'Know Your Rights',
		subtitle:
			'You have rights in the US — no matter your language or immigration status. Knowing them is how you avoid being taken advantage of.',
		disclaimer:
			'This is general information to help you understand your rights — it is not legal advice. Laws differ between Kansas and Missouri and can change. For your situation, talk to one of the free or low-cost organizations below, or a licensed attorney.',
		renterHeading: 'As a renter',
		workerHeading: 'As a worker',
		policeHeading: 'If police or immigration stops you',
		getHelpHeading: 'Where to get real help',
		getHelpNote: 'Free or low-cost, and used to helping immigrants. Save these before you need them.',
		alsoReadTitle: 'Also read: Stay Safe from Scams',
		alsoReadText: 'The warning signs of the scams that most often target newcomers.',
		alsoReadButton: 'Stay Safe from Scams',
		ctaTitle: 'Not sure what to do?',
		ctaText:
			"Don't face it alone. Ask a community volunteer who has been through it — before you sign, pay, or agree to anything.",
		ctaButton: 'Ask a Volunteer',
	},
	fr: {
		dir: 'ltr',
		back: "Retour à l'accueil",
		title: 'Connaissez vos droits',
		subtitle:
			"Vous avez des droits aux États-Unis — quels que soient votre langue ou votre statut d'immigration. Les connaître, c'est éviter de vous faire exploiter.",
		disclaimer:
			"Ceci est une information générale pour vous aider à comprendre vos droits — ce n'est pas un conseil juridique. Les lois diffèrent entre le Kansas et le Missouri et peuvent changer. Pour votre situation, adressez-vous à l'un des organismes gratuits ou à faible coût ci-dessous, ou à un avocat agréé.",
		renterHeading: 'En tant que locataire',
		workerHeading: 'En tant que travailleur',
		policeHeading: "Si la police ou l'immigration vous arrête",
		getHelpHeading: 'Où trouver une vraie aide',
		getHelpNote: "Gratuit ou à faible coût, et habitué à aider les immigrants. Gardez ces contacts avant d'en avoir besoin.",
		alsoReadTitle: 'À lire aussi : Se protéger des arnaques',
		alsoReadText: 'Les signaux des arnaques qui ciblent le plus souvent les nouveaux arrivants.',
		alsoReadButton: 'Se protéger des arnaques',
		ctaTitle: 'Vous ne savez pas quoi faire ?',
		ctaText:
			"N'y faites pas face seul. Demandez à un bénévole de la communauté qui est passé par là — avant de signer, payer ou accepter quoi que ce soit.",
		ctaButton: 'Demander à un bénévole',
	},
};

export const renterRights: Item[] = [
	{
		icon: '🔑',
		en: 'A landlord cannot evict you by changing the locks, removing your things, or shutting off utilities. A real eviction must go through a court.',
		fr: "Un propriétaire ne peut pas vous expulser en changeant les serrures, en enlevant vos affaires ou en coupant les services. Une vraie expulsion doit passer par un tribunal.",
	},
	{
		icon: '💵',
		en: 'Your security deposit must be returned, minus only real, itemized damages. Ask for the deductions in writing.',
		fr: "Votre caution doit vous être rendue, moins uniquement des dommages réels et détaillés. Demandez les déductions par écrit.",
	},
	{
		icon: '⚖️',
		en: 'It is illegal for a landlord to refuse you based on your religion, national origin, race, or having children (Fair Housing).',
		fr: "Il est illégal pour un propriétaire de vous refuser en raison de votre religion, origine, race ou du fait d'avoir des enfants (Fair Housing).",
	},
	{
		icon: '📝',
		en: 'Get everything in writing and keep your lease and every rent receipt. A verbal promise is hard to prove.',
		fr: "Mettez tout par écrit et conservez votre bail et chaque reçu de loyer. Une promesse verbale est difficile à prouver.",
	},
];

export const workerRights: Item[] = [
	{
		icon: '💰',
		en: 'You must be paid at least minimum wage for every hour you work — regardless of your immigration status. Not being paid is wage theft, and it is illegal.',
		fr: "Vous devez être payé au moins le salaire minimum pour chaque heure travaillée — quel que soit votre statut d'immigration. Ne pas être payé est un vol de salaire, et c'est illégal.",
	},
	{
		icon: '🛂',
		en: 'No employer can take or hold your passport or immigration documents. They belong to you.',
		fr: "Aucun employeur ne peut prendre ou garder votre passeport ou vos documents d'immigration. Ils vous appartiennent.",
	},
	{
		icon: '🦺',
		en: 'You have the right to a safe workplace, and to report unsafe conditions without being punished for it.',
		fr: "Vous avez droit à un lieu de travail sûr, et de signaler des conditions dangereuses sans être puni pour cela.",
	},
	{
		icon: '🚩',
		en: 'Be careful with "cash only, no records" jobs — they make it easy for an employer to underpay you and deny it later.',
		fr: "Méfiez-vous des emplois « payés en espèces, sans trace » — ils permettent à un employeur de vous sous-payer et de le nier ensuite.",
	},
];

export const policeRights: Item[] = [
	{
		icon: '🤐',
		en: 'You have the right to stay silent. You can say: "I want to remain silent." You do not have to discuss your immigration status.',
		fr: "Vous avez le droit de garder le silence. Vous pouvez dire : « Je veux garder le silence. » Vous n'êtes pas obligé de parler de votre statut d'immigration.",
	},
	{
		icon: '👨‍⚖️',
		en: 'You have the right to a lawyer. You can say: "I want to speak to a lawyer." Do not sign anything you do not understand.',
		fr: "Vous avez droit à un avocat. Vous pouvez dire : « Je veux parler à un avocat. » Ne signez rien que vous ne comprenez pas.",
	},
	{
		icon: '🚪',
		en: 'You do not have to open your door without a warrant signed by a judge. Ask them to slide it under the door so you can read it.',
		fr: "Vous n'êtes pas obligé d'ouvrir votre porte sans un mandat signé par un juge. Demandez qu'on le glisse sous la porte pour que vous puissiez le lire.",
	},
	{
		icon: '🧊',
		en: 'Stay calm, keep your hands visible, and do not run. Never show false documents — carry only real ones.',
		fr: "Restez calme, gardez les mains visibles et ne courez pas. Ne montrez jamais de faux documents — ne portez que de vrais documents.",
	},
];

// Real organizations — VERIFY current details before treating this page as launched.
export const getHelp: { name: string; site: string }[] = [
	{ name: 'Kansas Legal Services', site: 'kansaslegalservices.org' },
	{ name: 'Legal Aid of Western Missouri', site: 'lawmo.org' },
	{ name: 'El Centro (Kansas City, KS)', site: 'elcentroinc.com' },
	{ name: 'Della Lamb Community Services', site: 'dellalamb.org' },
	{ name: 'Jewish Vocational Service (JVS) Kansas City', site: 'jvskc.org' },
	{ name: 'National immigration legal help directory', site: 'immigrationadvocates.org/legaldirectory' },
];
