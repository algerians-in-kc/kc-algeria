import { en } from './en';
import { fr } from './fr';
import { ar } from './ar';
import { kab } from './kab';

// Supported languages. `dir` drives RTL for Arabic.
export const LOCALES = [
	{ code: 'en', name: 'English', native: 'English', dir: 'ltr', flag: '🇬🇧' },
	{ code: 'fr', name: 'French', native: 'Français', dir: 'ltr', flag: '🇫🇷' },
	{ code: 'ar', name: 'Arabic', native: 'العربية', dir: 'rtl', flag: '🇩🇿' },
	{ code: 'kab', name: 'Kabyle', native: 'Taqbaylit', dir: 'ltr', flag: 'ⵣ' }
] as const;

export type LocaleCode = (typeof LOCALES)[number]['code'];

export const DEFAULT_LOCALE: LocaleCode = 'en';
export const LOCALE_CODES = LOCALES.map((l) => l.code) as LocaleCode[];

export function isLocale(code: unknown): code is LocaleCode {
	return typeof code === 'string' && (LOCALE_CODES as string[]).includes(code);
}
export function localeMeta(code: string) {
	return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}
export function dirOf(code: string): 'ltr' | 'rtl' {
	return localeMeta(code).dir;
}

const DICTS: Record<string, Record<string, unknown>> = { en, fr, ar, kab };

// Fallback chains — untranslated keys fall back gracefully so no page ever breaks.
// Kabyle falls back to French (most Kabyle speakers also read French) then English.
const CHAINS: Record<string, string[]> = {
	en: ['en'],
	fr: ['en', 'fr'],
	ar: ['en', 'ar'],
	kab: ['en', 'fr', 'kab']
};

function isObj(v: unknown): v is Record<string, unknown> {
	return !!v && typeof v === 'object' && !Array.isArray(v);
}
function deepMerge(base: any, over: any): any {
	const out: any = Array.isArray(base) ? [...base] : { ...base };
	for (const k of Object.keys(over)) {
		out[k] = isObj(base?.[k]) && isObj(over[k]) ? deepMerge(base[k], over[k]) : over[k];
	}
	return out;
}

/** Fully-resolved message object for a locale (with fallbacks applied). */
export function getMessages(code: string): any {
	const chain = CHAINS[code] || CHAINS[DEFAULT_LOCALE];
	return chain.reduce((acc, c) => deepMerge(acc, DICTS[c] || {}), {} as any);
}

/** Replace the first path segment with another locale (for the language switcher). */
export function pathInLocale(pathname: string, code: string): string {
	const parts = pathname.split('/');
	if (isLocale(parts[1])) {
		parts[1] = code;
	} else {
		parts.splice(1, 0, code);
	}
	return parts.join('/') || `/${code}`;
}

/** Pick the best supported locale from an Accept-Language header. */
export function negotiateLocale(acceptLanguage: string | null): LocaleCode {
	if (!acceptLanguage) return DEFAULT_LOCALE;
	const wanted = acceptLanguage
		.split(',')
		.map((p) => p.trim().split(';')[0].toLowerCase());
	for (const w of wanted) {
		const base = w.split('-')[0];
		if (base === 'ar') return 'ar';
		if (base === 'fr') return 'fr';
		if (base === 'kab' || base === 'kab-dz') return 'kab';
		if (base === 'en') return 'en';
	}
	return DEFAULT_LOCALE;
}
