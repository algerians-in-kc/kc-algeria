import type { Handle } from '@sveltejs/kit';
import { dirOf, isLocale, DEFAULT_LOCALE, negotiateLocale } from '$lib/i18n/index';

const CSP = [
	"default-src 'self'",
	"script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://challenges.cloudflare.com",
	"style-src 'self' 'unsafe-inline'",
	"font-src 'self'",
	"img-src 'self' data: https:",
	"connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://challenges.cloudflare.com",
	"frame-src https://challenges.cloudflare.com",
	"frame-ancestors 'none'",
	"base-uri 'self'",
	"form-action 'self'"
].join('; ');

export const handle: Handle = async ({ event, resolve }) => {
	const pathname = event.url.pathname;
	const seg = pathname.split('/')[1];

	// Send the bare "/" and any non-localized page path to the best-matching language
	// (e.g. "/" or "/settle" -> "/en/settle"). Skip API routes, build assets, and files.
	const isAsset = seg === '_app' || seg === 'api' || pathname.includes('.');
	if (!isLocale(seg) && !isAsset) {
		const to = negotiateLocale(event.request.headers.get('accept-language'));
		const target = pathname === '/' ? `/${to}` : `/${to}${pathname}`;
		return new Response(null, {
			status: 307,
			headers: { location: target + (event.url.search || '') }
		});
	}

	// Bake the correct <html lang> + dir (RTL for Arabic) from the URL's first segment.
	const lang = isLocale(seg) ? seg : DEFAULT_LOCALE;
	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%lang%', lang).replace('%dir%', dirOf(lang))
	});

	// Security headers
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
	response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
	response.headers.set('X-DNS-Prefetch-Control', 'on');
	response.headers.set('Content-Security-Policy', CSP);

	// Cache static assets
	const url = event.url.pathname;
	if (url.startsWith('/fonts/') || url.match(/\.(woff2?|ttf|otf|svg|png|ico|webp)$/)) {
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	} else if (url === '/sitemap.xml' || url === '/robots.txt' || url === '/site.webmanifest') {
		response.headers.set('Cache-Control', 'public, max-age=3600');
	} else {
		response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
	}

	return response;
};
