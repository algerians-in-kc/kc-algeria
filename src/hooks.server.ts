import type { Handle } from '@sveltejs/kit';

const CSP = [
	"default-src 'self'",
	"script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
	"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com",
	"font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com",
	"img-src 'self' data: https:",
	"connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
	"frame-ancestors 'none'",
	"base-uri 'self'",
	"form-action 'self'"
].join('; ');

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	// Security headers
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
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
