import type { RequestHandler } from './$types';
import { createRecord } from '$lib/server/airtable';
import {
	getIp,
	createRateLimiter,
	sanitize,
	escapeHtml,
	notifyCoordinators,
	verifyTurnstile,
} from '$lib/server/forms';

const rateLimit = createRateLimiter(3, 10 * 60 * 1000);

function toArray(val: unknown): string[] {
	if (!Array.isArray(val)) return [];
	return val.map((v) => sanitize(v, 100)).filter(Boolean).slice(0, 20);
}

export const POST: RequestHandler = async ({ request }) => {
	const ip = getIp(request);
	if (rateLimit(ip)) {
		return json({ error: 'Too many requests. Please wait a few minutes.' }, 429);
	}

	let body: Record<string, unknown>;
	try {
		body = await request.json();
	} catch {
		return json({ error: 'Invalid request' }, 400);
	}

	// Honeypot
	if (body.website) return json({ ok: true }, 200);

	if (!(await verifyTurnstile(body.turnstileToken, ip))) {
		return json({ error: 'Verification failed. Please reload the page and try again.' }, 403);
	}

	const name = sanitize(body.name, 120);
	const contact = sanitize(body.contact, 200);
	const city = sanitize(body.city, 100);
	const arrivalStatus = sanitize(body.arrivalStatus, 100);
	const urgency = sanitize(body.urgency, 100);
	const details = sanitize(body.details, 2000);
	const languages = toArray(body.languages);
	const needs = toArray(body.needs);
	const preferWomanVolunteer = body.preferWomanVolunteer === true;
	const consent = body.consent === true;

	if (name.length < 2 || contact.length < 3) {
		return json({ error: 'Please provide your name and a way to reach you.' }, 400);
	}
	if (needs.length === 0) {
		return json({ error: 'Please tell us what you need help with.' }, 400);
	}
	if (!consent) {
		return json({ error: 'Please agree to be connected with a volunteer.' }, 400);
	}

	const fields = {
		Name: name,
		Contact: contact,
		City: city,
		Languages: languages,
		ArrivalStatus: arrivalStatus,
		Needs: needs,
		PreferWomanVolunteer: preferWomanVolunteer,
		Urgency: urgency,
		Consent: consent,
		Status: 'New',
		Source: 'Website',
	};

	const record = await createRecord('Newcomer Requests', fields);

	await notifyCoordinators({
		subject: `[Newcomer] Help request — ${name}${preferWomanVolunteer ? ' (prefers woman volunteer)' : ''}`,
		html: `
			<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
				<h2 style="color: #15803d;">New newcomer help request</h2>
				<p style="color:#6b7280;font-size:13px;">${record.ok ? '✓ Saved to Airtable.' : '⚠ Not saved to Airtable — record below is the only copy.'}</p>
				<table style="border-collapse: collapse; width: 100%; font-size: 14px;">
					<tr><td style="padding:6px 0;color:#6b7280;">Name</td><td style="padding:6px 0;font-weight:bold;">${escapeHtml(name)}</td></tr>
					<tr><td style="padding:6px 0;color:#6b7280;">Contact</td><td style="padding:6px 0;">${escapeHtml(contact)}</td></tr>
					<tr><td style="padding:6px 0;color:#6b7280;">City</td><td style="padding:6px 0;">${escapeHtml(city) || '—'}</td></tr>
					<tr><td style="padding:6px 0;color:#6b7280;">Languages</td><td style="padding:6px 0;">${escapeHtml(languages.join(', ')) || '—'}</td></tr>
					<tr><td style="padding:6px 0;color:#6b7280;">Arrival</td><td style="padding:6px 0;">${escapeHtml(arrivalStatus) || '—'}</td></tr>
					<tr><td style="padding:6px 0;color:#6b7280;">Needs</td><td style="padding:6px 0;">${escapeHtml(needs.join(', '))}</td></tr>
					<tr><td style="padding:6px 0;color:#6b7280;">Prefers woman volunteer</td><td style="padding:6px 0;">${preferWomanVolunteer ? 'Yes' : 'No'}</td></tr>
					<tr><td style="padding:6px 0;color:#6b7280;">Urgency</td><td style="padding:6px 0;">${escapeHtml(urgency) || '—'}</td></tr>
				</table>
				<hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb;" />
				<p style="white-space:pre-wrap;color:#374151;line-height:1.6;">${escapeHtml(details)}</p>
			</div>
		`,
	});

	return json({ ok: true }, 200);
};

function json(payload: unknown, status: number): Response {
	return new Response(JSON.stringify(payload), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}
