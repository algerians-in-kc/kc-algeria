// Minimal Airtable client. Coordinators manage volunteers and newcomer requests in
// Airtable; the site just creates records. When the env vars aren't set the caller
// falls back to email-only, so the forms work before Airtable is wired up.
import { env } from '$env/dynamic/private';

export function airtableConfigured(): boolean {
	return Boolean(env.AIRTABLE_API_KEY && env.AIRTABLE_BASE_ID);
}

export async function createRecord(
	table: string,
	fields: Record<string, unknown>,
): Promise<{ ok: boolean; error?: string }> {
	const apiKey = env.AIRTABLE_API_KEY;
	const baseId = env.AIRTABLE_BASE_ID;
	if (!apiKey || !baseId) return { ok: false, error: 'not-configured' };

	try {
		const res = await fetch(
			`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`,
			{
				method: 'POST',
				headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
				// typecast lets Airtable coerce values and create select options on the fly,
				// so the base's field wording just needs to match src/lib/data/intake.ts.
				body: JSON.stringify({ fields, typecast: true }),
			},
		);
		if (!res.ok) {
			console.error('[Airtable] error', res.status, await res.text());
			return { ok: false, error: `airtable-${res.status}` };
		}
		return { ok: true };
	} catch (err) {
		console.error('[Airtable] fetch error', err);
		return { ok: false, error: 'airtable-fetch' };
	}
}
