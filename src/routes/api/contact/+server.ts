import type { RequestHandler } from './$types';
import { CONTACT_EMAIL, RESEND_API_KEY } from '$env/static/private';

function sanitize(str: string): string {
	return str.replace(/[<>]/g, '').trim().slice(0, 2000);
}

export const POST: RequestHandler = async ({ request }) => {
	let body: { name?: string; email?: string; subject?: string; message?: string };

	try {
		body = await request.json();
	} catch {
		return new Response('Invalid request', { status: 400 });
	}

	const name = sanitize(body.name ?? '');
	const email = sanitize(body.email ?? '');
	const subject = sanitize(body.subject ?? '');
	const message = sanitize(body.message ?? '');

	if (!name || !email || !message) {
		return new Response('Missing required fields', { status: 400 });
	}

	// Basic email format check
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return new Response('Invalid email', { status: 400 });
	}

	if (!RESEND_API_KEY || !CONTACT_EMAIL) {
		// Dev mode — just log and return success
		console.log('Contact form submission:', { name, email, subject, message });
		return new Response(JSON.stringify({ ok: true }), { status: 200 });
	}

	const subjectMap: Record<string, string> = {
		newcomer: 'Newcomer needs help',
		volunteer: 'Volunteer sign-up',
		directory: 'Directory listing request',
		faith: 'Faith / spiritual inquiry',
		event: 'Event submission',
		other: 'General inquiry',
	};

	const emailSubject = subjectMap[subject] ?? 'Contact form message';

	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${RESEND_API_KEY}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			from: 'Algerians in KC <noreply@algeriansinKC.com>',
			to: [CONTACT_EMAIL],
			reply_to: email,
			subject: `[AlgeriansInKC] ${emailSubject}`,
			html: `
				<h2>New contact form message</h2>
				<p><strong>From:</strong> ${name} (${email})</p>
				<p><strong>Topic:</strong> ${emailSubject}</p>
				<hr />
				<p style="white-space: pre-wrap">${message}</p>
			`
		})
	});

	if (!res.ok) {
		return new Response('Failed to send email', { status: 500 });
	}

	return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
