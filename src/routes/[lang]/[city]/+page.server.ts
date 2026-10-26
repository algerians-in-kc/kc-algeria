import { error } from '@sveltejs/kit';
import { getCityBySlug } from '$lib/data/cities';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const city = getCityBySlug(params.city);
	if (!city) error(404, `No city page found for "${params.city}"`);
	return { city, slug: params.city };
};
