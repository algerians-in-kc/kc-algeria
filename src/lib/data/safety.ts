// Scam-awareness content for the "Stay Safe from Scams" page. Newcomers are heavily
// targeted, so this covers the universal rules plus the scams that specifically
// target immigrants.
//
// LANGUAGES: English + French only for now. Arabic was intentionally NOT shipped —
// it must be written/reviewed by a native speaker before going live (a wrong
// translation on a safety page erodes trust). To add it back: re-add 'ar' to
// SafetyLang, SAFETY_LANGS (with dir handling), the `chrome` map, and an `ar` key on
// every card. The page + hero already carry RTL support (dir/isRtl), so no page
// changes are needed — just fill in reviewed strings here.

export type SafetyLang = 'en' | 'fr';

export const SAFETY_LANGS: { code: SafetyLang; label: string }[] = [
	{ code: 'en', label: 'English' },
	{ code: 'fr', label: 'Français' },
];

type Card = { icon: string; en: string; fr: string };

export const chrome: Record<
	SafetyLang,
	{
		dir: 'ltr' | 'rtl';
		back: string;
		title: string;
		subtitle: string;
		rulesHeading: string;
		newcomerHeading: string;
		whatToDoHeading: string;
		whatToDo: string[];
		reportHeading: string;
		report: string[];
		ctaTitle: string;
		ctaText: string;
		ctaButton: string;
	}
> = {
	en: {
		dir: 'ltr',
		back: 'Back to home',
		title: 'Stay Safe from Scams',
		subtitle:
			'Scammers count on urgency and fear, and newcomers are a favorite target. Know these rules — they hold true no matter what a caller or message claims.',
		rulesHeading: 'Rules that always hold true',
		newcomerHeading: 'Scams that target newcomers',
		whatToDoHeading: 'What to do if it happens',
		whatToDo: [
			'Hang up or stop replying. You do not owe anyone an answer.',
			'Never pay or share personal information under pressure.',
			'Take your time — call the company or agency back on their official number.',
			'Talk to someone you trust before you act.',
		],
		reportHeading: 'Report it',
		report: [
			'Federal Trade Commission — reportfraud.ftc.gov',
			'Local police (non-emergency line)',
			'Your bank, immediately, if you shared card or account details',
		],
		ctaTitle: 'Not sure if something is a scam?',
		ctaText:
			"Don't decide alone. Ask a community volunteer who has been here — before you pay or share anything.",
		ctaButton: 'Ask a Volunteer',
	},
	fr: {
		dir: 'ltr',
		back: "Retour à l'accueil",
		title: 'Se protéger des arnaques',
		subtitle:
			"Les arnaqueurs comptent sur l'urgence et la peur, et les nouveaux arrivants sont une cible de choix. Retenez ces règles — elles restent vraies quoi que prétende un appelant ou un message.",
		rulesHeading: 'Des règles toujours valables',
		newcomerHeading: 'Arnaques qui ciblent les nouveaux arrivants',
		whatToDoHeading: 'Que faire si cela arrive',
		whatToDo: [
			"Raccrochez ou arrêtez de répondre. Vous ne devez d'explication à personne.",
			'Ne payez jamais et ne partagez aucune information sous la pression.',
			"Prenez votre temps — rappelez l'entreprise ou l'administration à son numéro officiel.",
			"Parlez-en à une personne de confiance avant d'agir.",
		],
		reportHeading: 'Signaler',
		report: [
			'Federal Trade Commission — reportfraud.ftc.gov',
			'Police locale (ligne non urgente)',
			'Votre banque, immédiatement, si vous avez partagé vos coordonnées bancaires',
		],
		ctaTitle: 'Vous avez un doute ?',
		ctaText:
			'Ne décidez pas seul. Demandez à un bénévole de la communauté qui connaît le pays — avant de payer ou de partager quoi que ce soit.',
		ctaButton: 'Demander à un bénévole',
	},
};

export const guidelines: Card[] = [
	{
		icon: '🏦',
		en: 'Your bank will never call you asking for your PIN, password, or full card number.',
		fr: 'Votre banque ne vous appellera jamais pour demander votre code PIN, votre mot de passe ou votre numéro de carte complet.',
	},
	{
		icon: '🏛️',
		en: "Government agencies (IRS, Social Security, immigration) don't call demanding immediate payment by gift card or wire transfer.",
		fr: "Les administrations (impôts, sécurité sociale, immigration) n'appellent jamais pour exiger un paiement immédiat par carte-cadeau ou virement.",
	},
	{
		icon: '👨‍👩‍👧',
		en: 'A relative "in trouble" who calls asking for urgent money and says "don\'t tell anyone" — hang up and call them back on their known number.',
		fr: "Un proche « en difficulté » qui appelle pour de l'argent en urgence et dit « n'en parle à personne » — raccrochez et rappelez-le sur son numéro connu.",
	},
	{
		icon: '🎁',
		en: 'No legitimate company or agency asks you to pay a bill or fine using gift cards.',
		fr: 'Aucune entreprise ou administration légitime ne vous demandera de régler une facture ou une amende avec des cartes-cadeaux.',
	},
	{
		icon: '⏱️',
		en: 'If they create panic and urgency ("act now or else"), that pressure itself is the scam.',
		fr: "S'ils créent panique et urgence (« agissez maintenant sinon »), cette pression est elle-même l'arnaque.",
	},
	{
		icon: '📞',
		en: "Real organizations don't ask you to stay on the phone while you go to the bank or an ATM.",
		fr: "Les organismes sérieux ne vous demandent jamais de rester en ligne pendant que vous allez à la banque ou au distributeur.",
	},
	{
		icon: '💻',
		en: 'Never give remote access to your computer or phone to someone who called you unprompted.',
		fr: "Ne donnez jamais un accès à distance à votre ordinateur ou téléphone à quelqu'un qui vous a appelé sans que vous l'ayez demandé.",
	},
];

export const newcomerScams: Card[] = [
	{
		icon: '🛂',
		en: 'USCIS and immigration officials will never call or email demanding payment or threatening deportation. Never pay anyone who promises to "speed up" your case.',
		fr: "L'USCIS et les services d'immigration ne vous appelleront ni ne vous écriront jamais pour exiger un paiement ou menacer d'expulsion. Ne payez jamais quelqu'un qui promet d'« accélérer » votre dossier.",
	},
	{
		icon: '💼',
		en: 'A job that asks you to pay a fee, buy equipment, or share your bank login before you start is a scam.',
		fr: "Un emploi qui vous demande de payer des frais, d'acheter du matériel ou de partager vos identifiants bancaires avant de commencer est une arnaque.",
	},
	{
		icon: '🏠',
		en: "Never pay a deposit or rent for an apartment you haven't seen in person, and never send money by wire, gift card, or app to \"hold\" a place.",
		fr: "Ne payez jamais de caution ou de loyer pour un logement que vous n'avez pas visité en personne, et n'envoyez jamais d'argent par virement, carte-cadeau ou application pour « réserver » un logement.",
	},
	{
		icon: '⚖️',
		en: 'Only a licensed attorney or an accredited representative can give legal or immigration advice. A "notario" is not a lawyer in the US.',
		fr: "Seul un avocat agréé ou un représentant accrédité peut donner des conseils juridiques ou d'immigration. Un « notario » n'est pas un avocat aux États-Unis.",
	},
	{
		icon: '🏆',
		en: 'If a "prize" or "inheritance" requires you to pay a fee first, it is fake.',
		fr: "Si un « prix » ou un « héritage » exige que vous payiez des frais d'abord, c'est un faux.",
	},
];
