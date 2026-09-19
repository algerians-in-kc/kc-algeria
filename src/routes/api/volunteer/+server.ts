import type { RequestHandler } from './$types';
import { createRecord } from '$lib/server/airtable';
import {
	getIp,
	createRateLimiter,
	sanitize,
	escapeHtml,
	isValidEmail,
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

	// Honeypot — bots fill this, humans leave it empty.
	if (body.website) return json({ ok: true }, 200);

	if (!(await verifyTurnstile(body.turnstileToken, ip))) {
		return json({ error: 'Verification failed. Please reload the page and try again.' }, 403);
	}

	const name = sanitize(body.name, 120);
	const email = sanitize(body.email, 200);
	const phone = sanitize(body.phone, 40);
	const city = sanitize(body.city, 100);
	const availability = sanitize(body.availability, 100);
	const why = sanitize(body.why, 2000);
	const languages = toArray(body.languages);
	const helpTypes = toArray(body.helpTypes);
	const canHelpWomenFamilies = body.canHelpWomenFamilies === true;
	const consent = body.consent === true;
	const codeOfConduct = body.codeOfConduct === true;

	if (name.length < 2 || !isValidEmail(email)) {
		return json({ error: 'Please provide your name and a valid email.' }, 400);
	}
	if (languages.length === 0 || helpTypes.length === 0) {
		return json({ error: 'Please select at least one language and one way to help.' }, 400);
	}
	if (!consent || !codeOfConduct) {
		return json({ error: 'Please agree to the consent and code of conduct.' }, 400);
	}

	const fields = {
		Name: name,
		Email: email,
		Phone: phone,
		City: city,
		Languages: languages,
		HelpTypes: helpTypes,
		Availability: availability,
		CanHelpWomenFamilies: canHelpWomenFamilies,
		Why: why,
		Status: 'Applied',
		Source: 'Website',
	};

	const record = await createRecord('Volunteers', fields);

	await notifyCoordinators({
		subject: `[Volunteer] New sign-up — ${name}`,
		replyTo: email,
		html: `
			<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
				<h2 style="color: #15803d;">New volunteer sign-up</h2>
				<p style="color:#6b7280;font-size:13px;">${record.ok ? '✓ Saved to Airtable.' : '⚠ Not saved to Airtable — record below is the only copy.'}</p>
				<table style="border-collapse: collapse; width: 100%; font-size: 14px;">
					<tr><td style="padding:6px 0;color:#6b7280;">Name</td><td style="padding:6px 0;font-weight:bold;">${escapeHtml(name)}</td></tr>
					<tr><td style="padding:6px 0;color:#6b7280;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
					<tr><td style="padding:6px 0;color:#6b7280;">Phone</td><td style="padding:6px 0;">${escapeHtml(phone) || '—'}</td></tr>
					<tr><td style="padding:6px 0;color:#6b7280;">City</td><td style="padding:6px 0;">${escapeHtml(city) || '—'}</td></tr>
					<tr><td style="padding:6px 0;color:#6b7280;">Languages</td><td style="padding:6px 0;">${escapeHtml(languages.join(', '))}</td></tr>
					<tr><td style="padding:6px 0;color:#6b7280;">Can help with</td><td style="padding:6px 0;">${escapeHtml(helpTypes.join(', '))}</td></tr>
					<tr><td style="padding:6px 0;color:#6b7280;">Availability</td><td style="padding:6px 0;">${escapeHtml(availability) || '—'}</td></tr>
					<tr><td style="padding:6px 0;color:#6b7280;">Women/families</td><td style="padding:6px 0;">${canHelpWomenFamilies ? 'Yes' : 'No'}</td></tr>
				</table>
				<hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb;" />
				<p style="white-space:pre-wrap;color:#374151;line-height:1.6;">${escapeHtml(why)}</p>
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
