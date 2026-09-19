// Shared server helpers for the intake forms (volunteer, newcomer) and contact form:
// IP extraction, per-route rate limiting, input sanitizing, HTML escaping, and a
// coordinator-notification email via Resend. Centralized so every form behaves the
// same and there's one place to harden.
import { env } from '$env/dynamic/private';

export function getIp(request: Request): string {
	return (
		request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
		request.headers.get('x-real-ip') ??
		'unknown'
	);
}

/**
 * Create an isolated rate limiter. Each route gets its own instance so limits don't
 * bleed across forms. Note: in-memory and per-instance — on serverless this is a
 * best-effort speed bump, not a hard guarantee. Expired entries are swept
 * opportunistically so the map can't grow without bound.
 */
export function createRateLimiter(max: number, windowMs: number) {
	const map = new Map<string, { count: number; resetAt: number }>();
	return (ip: string): boolean => {
		const now = Date.now();
		if (map.size > 500) {
			for (const [k, v] of map) if (now > v.resetAt) map.delete(k);
		}
		const entry = map.get(ip);
		if (!entry || now > entry.resetAt) {
			map.set(ip, { count: 1, resetAt: now + windowMs });
			return false;
		}
		if (entry.count >= max) return true;
		entry.count++;
		return false;
	};
}

/**
 * Verify a Cloudflare Turnstile token. Skipped (returns true) until TURNSTILE_SECRET_KEY
 * is set so the forms work before the CAPTCHA is wired up. Once the secret is set it
 * fails closed: a missing/invalid token or a Cloudflare outage rejects the submission.
 */
export async function verifyTurnstile(token: unknown, ip: string): Promise<boolean> {
	const secret = env.TURNSTILE_SECRET_KEY;
	if (!secret) return true;
	if (typeof token !== 'string' || !token || token.length > 2048) return false;

	try {
		const params = new URLSearchParams({ secret, response: token });
		if (ip !== 'unknown') params.set('remoteip', ip);
		const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			body: params,
			signal: AbortSignal.timeout(5000),
		});
		if (!res.ok) return false;
		const data = (await res.json()) as { success?: boolean };
		return data.success === true;
	} catch (err) {
		console.error('[turnstile] verify error', err);
		return false;
	}
}

export function sanitize(str: unknown, max = 2000): string {
	return String(str ?? '')
		.replace(/[<>]/g, '')
		.trim()
		.slice(0, max);
}

/** Escape for safe interpolation into notification-email HTML. */
export function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

export function isValidEmail(email: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Email the coordinators. Falls back to a console log (dev) when Resend isn't
 * configured, so forms keep working before keys are set. Returns whether a real
 * email was sent.
 */
export async function notifyCoordinators(opts: {
	subject: string;
	html: string;
	replyTo?: string;
}): Promise<boolean> {
	const key = env.RESEND_API_KEY;
	const to = env.COORDINATOR_EMAIL || env.CONTACT_EMAIL;

	if (!key || !to) {
		console.log('[intake: email fallback]', opts.subject);
		return false;
	}

	try {
		const res = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
			body: JSON.stringify({
				from: 'Algerians in KC <noreply@algeriansinKC.com>',
				to: [to],
				reply_to: opts.replyTo,
				subject: opts.subject,
				html: opts.html,
			}),
		});
		if (!res.ok) {
			console.error('[intake: Resend error]', res.status, await res.text());
			return false;
		}
		return true;
	} catch (err) {
		console.error('[intake: email error]', err);
		return false;
	}
}
