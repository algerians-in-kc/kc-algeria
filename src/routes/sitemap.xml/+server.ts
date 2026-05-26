import { cityOrder } from '$lib/data/cities';
import type { RequestHandler } from './$types';

const BASE = 'https://algeriansinKC.com';

const staticPages = [
	{ path: '', changefreq: 'weekly', priority: '1.0' },
	{ path: '/settle', changefreq: 'monthly', priority: '0.9' },
	{ path: '/work', changefreq: 'monthly', priority: '0.9' },
	{ path: '/directory', changefreq: 'weekly', priority: '0.8' },
	{ path: '/events', changefreq: 'weekly', priority: '0.8' },
	{ path: '/worship', changefreq: 'monthly', priority: '0.8' },
	{ path: '/community', changefreq: 'monthly', priority: '0.8' },
	{ path: '/about', changefreq: 'monthly', priority: '0.6' },
	{ path: '/contact', changefreq: 'yearly', priority: '0.5' },
	{ path: '/privacy', changefreq: 'yearly', priority: '0.3' },
	{ path: '/terms', changefreq: 'yearly', priority: '0.3' },
];

export const GET: RequestHandler = () => {
	const today = new Date().toISOString().split('T')[0];

	const allPages = [
		...staticPages.map((p) => ({ path: p.path, changefreq: p.changefreq, priority: p.priority })),
		...cityOrder.map((slug) => ({ path: `/${slug}`, changefreq: 'monthly', priority: '0.7' })),
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		(p) => `  <url>
    <loc>${BASE}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'max-age=3600' }
	});
};
