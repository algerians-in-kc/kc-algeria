import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';

// Simple in-memory rate limiter: max 3 submissions per IP per 10 minutes
const rateMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
	const now = Date.now();
	const entry = rateMap.get(ip);

	if (!entry || now > entry.resetAt) {
		rateMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
		return false;
	}

	if (entry.count >= 3) return true;
	entry.count++;
	return false;
}

function getIp(request: Request): string {
	return (
		request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
		request.headers.get('x-real-ip') ??
		'unknown'
	);
}

function sanitize(str: string): string {
	return String(str).replace(/[<>]/g, '').trim().slice(0, 2000);
}

const SUBJECT_MAP: Record<string, string> = {
	newcomer: 'Newcomer needs help',
	volunteer: 'Volunteer sign-up',
	directory: 'Directory listing request',
	faith: 'Faith / spiritual inquiry',
	event: 'Event submission',
	other: 'General inquiry',
};

export const POST: RequestHandler = async ({ request }) => {
	const ip = getIp(request);

	if (isRateLimited(ip)) {
		return new Response(JSON.stringify({ error: 'Too many requests. Please wait a few minutes.' }), {
			status: 429,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	let body: Record<string, unknown>;
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
	}

	// Honeypot — bots fill this, humans leave it empty
	if (body.website) {
		return new Response(JSON.stringify({ ok: true }), { status: 200 });
	}

	const name = sanitize(String(body.name ?? ''));
	const email = sanitize(String(body.email ?? ''));
	const subject = sanitize(String(body.subject ?? ''));
	const message = sanitize(String(body.message ?? ''));

	if (!name || !email || !message) {
		return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
	}

	if (name.length < 2 || message.length < 10) {
		return new Response(JSON.stringify({ error: 'Please provide a complete message' }), { status: 400 });
	}

	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 });
	}

	const resendKey = env.RESEND_API_KEY;
	const contactEmail = env.CONTACT_EMAIL;

	if (!resendKey || !contactEmail) {
		console.log('[Contact form]', { name, email, subject, message });
		return new Response(JSON.stringify({ ok: true }), { status: 200 });
	}

	const emailSubject = SUBJECT_MAP[subject] ?? 'Contact form message';

	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${resendKey}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			from: 'Algerians in KC <noreply@algeriansinKC.com>',
			to: [contactEmail],
			reply_to: email,
			subject: `[AlgeriansInKC] ${emailSubject} — ${name}`,
			html: `
				<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #15803d;">New message — Algerians in KC</h2>
					<table style="border-collapse: collapse; width: 100%;">
						<tr><td style="padding: 6px 0; color: #6b7280; font-size: 14px;">From</td><td style="padding: 6px 0; font-weight: bold;">${name}</td></tr>
						<tr><td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Email</td><td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td></tr>
						<tr><td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Topic</td><td style="padding: 6px 0;">${emailSubject}</td></tr>
					</table>
					<hr style="margin: 16px 0; border: none; border-top: 1px solid #e5e7eb;" />
					<p style="white-space: pre-wrap; color: #374151; line-height: 1.6;">${message}</p>
				</div>
			`
		})
	});

	if (!res.ok) {
		console.error('[Contact form] Resend error:', await res.text());
		return new Response(JSON.stringify({ error: 'Failed to send message. Please try again.' }), { status: 500 });
	}

	return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
