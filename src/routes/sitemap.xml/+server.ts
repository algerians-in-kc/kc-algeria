import type { RequestHandler } from './$types';

const PAGES = [
	{ path: '', changefreq: 'weekly', priority: '1.0' },
	{ path: '/settle', changefreq: 'monthly', priority: '0.9' },
	{ path: '/work', changefreq: 'monthly', priority: '0.8' },
	{ path: '/directory', changefreq: 'weekly', priority: '0.8' },
	{ path: '/events', changefreq: 'weekly', priority: '0.8' },
	{ path: '/worship', changefreq: 'monthly', priority: '0.7' },
	{ path: '/community', changefreq: 'monthly', priority: '0.7' },
	{ path: '/about', changefreq: 'monthly', priority: '0.5' },
	{ path: '/contact', changefreq: 'monthly', priority: '0.5' },
];

const BASE_URL = 'https://algeriansinKC.com';

export const GET: RequestHandler = () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
	(p) => `  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
).join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
