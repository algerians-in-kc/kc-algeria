import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(join(__dirname, '../static/og-image.svg'), 'utf-8');

const resvg = new Resvg(svg, {
	fitTo: { mode: 'width', value: 1200 },
	font: { loadSystemFonts: true },
});

const pngData = resvg.render();
const png = pngData.asPng();

writeFileSync(join(__dirname, '../static/og-image.png'), png);
console.log('✓ og-image.png generated (', png.length, 'bytes )');
