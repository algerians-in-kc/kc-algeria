import { error } from '@sveltejs/kit';
import { isLocale, getMessages, localeMeta } from '$lib/i18n/index';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	if (!isLocale(params.lang)) throw error(404, 'Unknown language');
	return {
		lang: params.lang,
		m: getMessages(params.lang),
		meta: localeMeta(params.lang)
	};
};
