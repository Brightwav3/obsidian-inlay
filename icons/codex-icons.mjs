/*
 * Inlay's Codex-style icon set – a drop-in replacement for the Lucide icons Obsidian draws.
 *
 * Every icon is drawn on a 24px grid and only as geometry: stroke, caps and joins are added by
 * the generator (scripts/build-icons.mjs), so the whole set changes weight in one place.
 * `ids` lists every Obsidian/Lucide icon id the glyph replaces – Lucide renamed many icons and
 * Obsidian still asks for both the old and the new name. `filled` is the glyph Obsidian shows in a
 * `.mod-filled` button (a bookmarked note's bookmark icon).
 *
 * Look: softer and lighter than Lucide – 1.6px stroke, 3–3.5px corner radii, dots instead of
 * short dashes, wide shallow chevrons.
 */

// --- shared parts -----------------------------------------------------------

const dot = (cx, cy, r = 1.15) => `<circle cx='${cx}' cy='${cy}' r='${r}' fill='#000' stroke='none'/>`;
const box = (x = 4, y = 4, w = 16, h = 16, r = 3.5) => `<rect x='${x}' y='${y}' width='${w}' height='${h}' rx='${r}'/>`;
const ring = (r = 8.5, cx = 12, cy = 12) => `<circle cx='${cx}' cy='${cy}' r='${r}'/>`;
const path = (d) => `<path d='${d}'/>`;
const slash = path('M4.5 4.5l15 15');

const doc = path('M13.5 4H8a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9.5zM13.5 4v3.5A2 2 0 0 0 15.5 9.5H19');
const folderBase = path('M4 17V7a2.5 2.5 0 0 1 2.5-2.5h3.1a2 2 0 0 1 1.55.74l1.25 1.56h5.1A2.5 2.5 0 0 1 20 9.3V17a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17z');
const calendar = box(4, 5.5, 16, 14.5) + path('M4 10h16M8.5 3.5V7M15.5 3.5V7');
const bookmark = 'M6 6.5A2.5 2.5 0 0 1 8.5 4h7A2.5 2.5 0 0 1 18 6.5v12.6a.7.7 0 0 1-1.1.57L12 16.25l-4.9 3.42A.7.7 0 0 1 6 19.1z';
const search = ring(6, 10.75, 10.75) + path('M15.25 15.25l4.25 4.25');
const square = box();
const panel = box(4, 4.5, 16, 15);
const clipboard = box(5, 5, 14, 15.5, 3) + box(9, 3.5, 6, 3.5, 1.5);
const image = panel + ring(1.6, 9, 9.75) + path('M20 15.5l-3.6-3.6a1.5 1.5 0 0 0-2.1 0L5 20');
const tag = path('M4 11.2V5.5A1.5 1.5 0 0 1 5.5 4h5.7a2 2 0 0 1 1.41.59l7 7a2 2 0 0 1 0 2.82l-5.69 5.68a2 2 0 0 1-2.82 0l-7-7A2 2 0 0 1 4 11.2z') + dot(8.25, 8.25, 1.25);
const link = 'M10.5 13.5a3.54 3.54 0 0 0 5 0l2.5-2.5a3.54 3.54 0 0 0-5-5l-1 1M13.5 10.5a3.54 3.54 0 0 0-5 0L6 13a3.54 3.54 0 0 0 5 5l1-1';
const camera = path('M4 9a2.5 2.5 0 0 1 2.5-2.5h1.6l1.4-2h5l1.4 2h1.6A2.5 2.5 0 0 1 20 9v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17z') + ring(3, 12, 12.75);
const rotateCcw = path('M4.5 12a7.5 7.5 0 1 0 2.2-5.3L4.5 9M4.5 4.5V9H9');
const arrowDown = path('M7 4.5v15M3.5 16L7 19.5l3.5-3.5');
const arrowUp = path('M7 19.5v-15M3.5 8L7 4.5 10.5 8');

// a gear with eight soft teeth, computed so the teeth stay even
function gear() {
	const pts = [];
	const teeth = 8;
	for (let i = 0; i < teeth * 4; i++) {
		const a = (i / (teeth * 4)) * Math.PI * 2 - Math.PI / 2;
		const r = (i % 4 === 1 || i % 4 === 2) ? 8.6 : 6.6;
		pts.push(`${(12 + r * Math.cos(a)).toFixed(2)} ${(12 + r * Math.sin(a)).toFixed(2)}`);
	}
	return path(`M${pts.join('L')}z`) + ring(2.75);
}

// --- the set ----------------------------------------------------------------

export const icons = [
	// basics
	{ ids: ['x'], body: path('M6.5 6.5l11 11M17.5 6.5l-11 11') },
	{ ids: ['plus'], body: path('M12 5.5v13M5.5 12h13') },
	{ ids: ['minus'], body: path('M5.5 12h13') },
	{ ids: ['check'], body: path('M5.5 12.5l4.25 4.25L18.5 7.5') },
	{ ids: ['chevron-down', 'right-triangle'], body: path('M7.5 10l4.5 4.5 4.5-4.5') },
	{ ids: ['chevron-up'], body: path('M7.5 14l4.5-4.5 4.5 4.5') },
	{ ids: ['chevron-right'], body: path('M10 7.5l4.5 4.5-4.5 4.5') },
	{ ids: ['chevron-left'], body: path('M14 7.5L9.5 12l4.5 4.5') },
	{ ids: ['chevrons-up-down'], body: path('M8 9.5l4-4 4 4M8 14.5l4 4 4-4') },
	{ ids: ['chevrons-down-up'], body: path('M8 5.5l4 4 4-4M8 18.5l4-4 4 4') },
	{ ids: ['chevrons-up'], body: path('M8 12l4-4 4 4M8 17l4-4 4 4') },
	{ ids: ['chevrons-down'], body: path('M8 7l4 4 4-4M8 12l4 4 4-4') },
	{ ids: ['more-vertical', 'ellipsis-vertical'], body: dot(12, 6, 1.3) + dot(12, 12, 1.3) + dot(12, 18, 1.3) },
	{ ids: ['more-horizontal', 'ellipsis'], body: dot(6, 12, 1.3) + dot(12, 12, 1.3) + dot(18, 12, 1.3) },
	{ ids: ['menu'], body: path('M4.5 7h15M4.5 12h15M4.5 17h15') },
	{ ids: ['grip-vertical'], body: dot(9, 6) + dot(15, 6) + dot(9, 12) + dot(15, 12) + dot(9, 18) + dot(15, 18) },
	{ ids: ['grip-horizontal'], body: dot(6, 9) + dot(12, 9) + dot(18, 9) + dot(6, 15) + dot(12, 15) + dot(18, 15) },

	// arrows
	{ ids: ['arrow-left'], body: path('M19 12H5.5M10.5 7l-5 5 5 5') },
	{ ids: ['arrow-right'], body: path('M5 12h13.5M13.5 7l5 5-5 5') },
	{ ids: ['arrow-up'], body: path('M12 19V5.5M7 10.5l5-5 5 5') },
	{ ids: ['arrow-down'], body: path('M12 5v13.5M7 13.5l5 5 5-5') },
	{ ids: ['arrow-up-right'], body: path('M7.5 16.5l9-9M9 7.5h7.5V15') },
	{ ids: ['arrow-left-right'], body: path('M7.5 5.5L4 9l3.5 3.5M4 9h16M16.5 11.5L20 15l-3.5 3.5M20 15H4') },
	{ ids: ['arrow-up-down'], body: path('M8.5 19.5v-15M5 8l3.5-3.5L12 8M15.5 4.5v15M12 16l3.5 3.5L19 16') },
	{ ids: ['corner-down-right'], body: path('M6 5v6.5a3 3 0 0 0 3 3h10M15 10.5l4 4-4 4') },
	{ ids: ['corner-right-up'], body: path('M5 18.5h6.5a3 3 0 0 0 3-3V5M10.5 9l4-4 4 4') },
	{ ids: ['corner-right-down'], body: path('M5 5.5h6.5a3 3 0 0 1 3 3V19M10.5 15l4 4 4-4') },
	{ ids: ['external-link', 'square-arrow-out-up-right'], body: path('M13.5 4.5h6v6M19.5 4.5l-8 8M17 14v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h3') },
	{ ids: ['forward'], body: path('M14.5 6l5 5-5 5M19.5 11H10a5 5 0 0 0-5 5v2.5') },
	{ ids: ['undo-2'], body: path('M9 14.5L4.5 10 9 5.5M4.5 10H15a4.5 4.5 0 0 1 0 9h-3') },
	{ ids: ['redo-2'], body: path('M15 14.5l4.5-4.5L15 5.5M19.5 10H9a4.5 4.5 0 0 0 0 9h3') },
	{ ids: ['rotate-ccw'], body: rotateCcw },
	{ ids: ['rotate-cw'], body: path('M19.5 12a7.5 7.5 0 1 1-2.2-5.3L19.5 9M19.5 4.5V9H15') },
	{ ids: ['refresh-cw'], body: path('M19.5 12a7.5 7.5 0 0 1-12.8 5.3L4.5 15M4.5 19.5V15H9M4.5 12a7.5 7.5 0 0 1 12.8-5.3L19.5 9M19.5 4.5V9H15') },
	{ ids: ['repeat'], body: path('M17 3.5l3 3-3 3M20 6.5H8a4 4 0 0 0-4 4v1M7 20.5l-3-3 3-3M4 17.5h12a4 4 0 0 0 4-4v-1') },
	{ ids: ['history'], body: rotateCcw + path('M12 8v4l2.75 1.75') },
	{ ids: ['move'], body: path('M12 4v16M4 12h16M9.5 6.5L12 4l2.5 2.5M9.5 17.5L12 20l2.5-2.5M6.5 9.5L4 12l2.5 2.5M17.5 9.5L20 12l-2.5 2.5') },
	{ ids: ['move-horizontal'], body: path('M4 12h16M7 9l-3 3 3 3M17 9l3 3-3 3') },
	{ ids: ['move-vertical'], body: path('M12 4v16M9 7l3-3 3 3M9 17l3 3 3-3') },
	{ ids: ['maximize-2'], body: path('M14.5 4.5h5v5M9.5 19.5h-5v-5M19.5 4.5l-6 6M4.5 19.5l6-6') },
	{ ids: ['minimize-2'], body: path('M4.5 14H10v5.5M19.5 10H14V4.5M14 10l5.5-5.5M10 14l-5.5 5.5') },
	{ ids: ['maximize'], body: path('M4.5 9V7A2.5 2.5 0 0 1 7 4.5h2M15 4.5h2A2.5 2.5 0 0 1 19.5 7v2M19.5 15v2a2.5 2.5 0 0 1-2.5 2.5h-2M9 19.5H7A2.5 2.5 0 0 1 4.5 17v-2') },
	{ ids: ['scaling'], body: path('M20 13.5v3a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4h3M14 4h6v6M20 4l-8 8') },
	{ ids: ['navigation'], body: path('M4 11.5L20 4l-7.5 16-2-6.5z') },
	{ ids: ['send'], body: path('M20 4l-9.5 9.5M20 4l-5.5 15.5-4-6-6-4z') },

	// sorting
	{ ids: ['sort-asc', 'arrow-up-narrow-wide'], body: arrowUp + path('M13.5 6h2.5M13.5 11h4.5M13.5 16h6.5') },
	{ ids: ['sort-desc', 'arrow-down-wide-narrow'], body: arrowDown + path('M13.5 6h6.5M13.5 11h4.5M13.5 16h2.5') },
	{ ids: ['arrow-down-az', 'arrow-down-a-z'], body: arrowDown + path('M14 10.5l2.5-6 2.5 6M14.75 8.75h3.5M14 13.5h5l-5 6h5') },
	{ ids: ['arrow-up-za', 'arrow-up-z-a'], body: arrowUp + path('M14 4.5h5l-5 6h5M14 19.5l2.5-6 2.5 6M14.75 17.75h3.5') },
	{ ids: ['filter', 'funnel'], body: path('M4.5 5.5h15l-5.75 7v5.5l-3.5 1.5v-7z') },
	{ ids: ['list-filter'], body: path('M4.5 7h15M7.5 12h9M10.5 17h3') },
	{ ids: ['sliders-horizontal'], body: path('M4 7h9M17 7h3M4 17h3M11 17h9') + ring(2, 15, 7) + ring(2, 9, 17) },

	// app
	{ ids: ['search'], body: search },
	{ ids: ['zoom-in'], body: search + path('M8 10.75h5.5M10.75 8v5.5') },
	{ ids: ['zoom-out'], body: search + path('M8 10.75h5.5') },
	{ ids: ['settings'], body: gear() },
	{ ids: ['help', 'help-circle', 'circle-help'], body: ring() + path('M9.6 9.4a2.5 2.5 0 0 1 4.85.85c0 1.65-2.45 2.25-2.45 3.5') + dot(12, 16.9, 1.05) },
	{ ids: ['info', 'circle-info'], body: ring() + path('M12 11v5') + dot(12, 8, 1.05) },
	{ ids: ['alert-circle', 'circle-alert'], body: ring() + path('M12 7.75v5') + dot(12, 16, 1.05) },
	{ ids: ['alert-triangle', 'triangle-alert'], body: path('M10.27 4.98a2 2 0 0 1 3.46 0l6.56 11.52A2 2 0 0 1 18.56 19.5H5.44a2 2 0 0 1-1.73-3z') + path('M12 9.5v4') + dot(12, 16.4, 1.05) },
	{ ids: ['x-circle', 'circle-x'], body: ring() + path('M9.5 9.5l5 5M14.5 9.5l-5 5') },
	{ ids: ['check-circle', 'circle-check', 'check-circle-2', 'circle-check-big'], body: ring() + path('M8.5 12.25l2.4 2.4 4.6-4.9') },
	{ ids: ['plus-circle', 'circle-plus'], body: ring() + path('M12 8.5v7M8.5 12h7') },
	{ ids: ['play-circle', 'circle-play'], body: ring() + path('M10.5 9.2v5.6a.6.6 0 0 0 .9.5l4.3-2.8a.6.6 0 0 0 0-1L11.4 8.7a.6.6 0 0 0-.9.5z') },
	{ ids: ['stop-circle', 'circle-stop'], body: ring() + box(9.5, 9.5, 5, 5, 1.25) },
	{ ids: ['loader'], body: path('M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1') },
	{ ids: ['trash', 'trash-2'], body: path('M4.5 7h15M9.5 7V5.5A1.5 1.5 0 0 1 11 4h2a1.5 1.5 0 0 1 1.5 1.5V7M6.5 7l.8 10.63A2.5 2.5 0 0 0 9.8 20h4.4a2.5 2.5 0 0 0 2.5-2.37L17.5 7M10.25 11v5M13.75 11v5') },
	{ ids: ['link'], body: path(link) },
	{ ids: ['unlink'], body: path('M10.5 7.5l1-1a3.54 3.54 0 0 1 5 5l-1 1M13.5 16.5l-1 1a3.54 3.54 0 0 1-5-5l1-1M5 5l2 2M17 17l2 2') },
	{ ids: ['links-coming-in'], body: path('M12.5 11.5l-8 8M4.5 14.5v5h5M13.5 6.5l1-1a3.54 3.54 0 0 1 5 5l-1 1') },
	{ ids: ['links-going-out'], body: path('M4.5 19.5l8-8M7.5 11.5h5v5M13.5 6.5l1-1a3.54 3.54 0 0 1 5 5l-1 1') },
	{ ids: ['copy'], body: box(8.5, 8.5, 11.5, 11.5, 3) + path('M15.5 5.5A2 2 0 0 0 13.5 4H7a3 3 0 0 0-3 3v6.5a2 2 0 0 0 1.5 1.94') },
	{ ids: ['clipboard'], body: clipboard },
	{ ids: ['clipboard-check'], body: clipboard + path('M9 13.25l2 2 4-4') },
	{ ids: ['clipboard-list'], body: clipboard + path('M9 11h6M9 14.5h4') },
	{ ids: ['clipboard-type'], body: clipboard + path('M9.5 11h5M12 11v5') },
	{ ids: ['scissors'], body: ring(2.5, 6.5, 7) + ring(2.5, 6.5, 17) + path('M8.6 8.4L19.5 17M8.6 15.6L19.5 7') },
	{ ids: ['pin'], body: path('M9 4.5h6M10 4.5v5.5l-3 3.5h10l-3-3.5V4.5M12 13.5v6') },
	{ ids: ['pin-off'], body: path('M9 4.5h6M10 4.5v5.5l-3 3.5h10l-3-3.5V4.5M12 13.5v6') + slash },
	{ ids: ['lock'], body: box(5, 10.5, 14, 9.5, 3) + path('M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5') },
	{ ids: ['eye'], body: path('M3.5 12s3-6 8.5-6 8.5 6 8.5 6-3 6-8.5 6-8.5-6-8.5-6z') + ring(2.5) },
	{ ids: ['eye-off'], body: path('M9.9 6.25A8.4 8.4 0 0 1 12 6c5.5 0 8.5 6 8.5 6a14 14 0 0 1-2 2.8M6.6 7.6A13.8 13.8 0 0 0 3.5 12s3 6 8.5 6a8.3 8.3 0 0 0 4.4-1.25M10.2 10.2a2.5 2.5 0 0 0 3.6 3.6') + slash },
	{ ids: ['bookmark'], body: path(bookmark), filled: `<path d='${bookmark}' fill='#000'/>` },
	{ ids: ['bookmark-plus'], body: path(bookmark) + path('M12 7.5v5M9.5 10h5') },
	{ ids: ['tag'], body: tag },
	{ ids: ['tags'], body: path('M3.5 10.75V5.5A1.5 1.5 0 0 1 5 4h5.25a2 2 0 0 1 1.41.59l6.25 6.25a2 2 0 0 1 0 2.82l-5.07 5.07a2 2 0 0 1-2.82 0l-5.93-5.93a2 2 0 0 1-.59-1.41zM15 4l5.41 5.41a2.2 2.2 0 0 1 0 3.11L16 17') + dot(7.5, 8, 1.15) },
	{ ids: ['archive'], body: box(3.5, 4.5, 17, 4.5, 1.5) + path('M5 9v8a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 17V9M10 13h4') },
	{ ids: ['archive-x', 'package-x'], body: box(3.5, 4.5, 17, 4.5, 1.5) + path('M5 9v8a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 17V9M10 12.5l4 4M14 12.5l-4 4') },
	{ ids: ['globe', 'globe-2'], body: ring() + path('M3.5 12h17M12 3.5c2.3 2.4 3.4 5.2 3.4 8.5s-1.1 6.1-3.4 8.5c-2.3-2.4-3.4-5.2-3.4-8.5S9.7 5.9 12 3.5z') },
	{ ids: ['download-cloud', 'cloud-download'], body: path('M7 17.5a4.5 4.5 0 0 1-.6-8.96 6 6 0 0 1 11.6 1.46 3.5 3.5 0 0 1-.5 6.96M12 12v7.5M9.5 17l2.5 2.5 2.5-2.5') },
	{ ids: ['download'], body: path('M12 4.5v11M7.5 11l4.5 4.5 4.5-4.5M5 19.5h14') },
	{ ids: ['save'], body: path('M5 7a2.5 2.5 0 0 1 2.5-2.5h8.5L19.5 8v9.5a2.5 2.5 0 0 1-2.5 2.5H7.5A2.5 2.5 0 0 1 5 17.5zM8.5 4.5v4h6v-4M8.5 20v-5.5h7V20') },
	{ ids: ['clock'], body: ring() + path('M12 7.5V12l3 2') },
	{ ids: ['timer'], body: ring(7, 12, 13.5) + path('M10 3.5h4M12 13.5V10M17.5 7.5l1.25-1.25') },
	{ ids: ['users'], body: ring(3.25, 9, 8.5) + path('M3.5 19.5a5.5 5.5 0 0 1 11 0M15.5 5.5a3.25 3.25 0 0 1 0 6.25M17 14.2a5.5 5.5 0 0 1 3.5 5.3') },
	{ ids: ['keyboard'], body: box(3, 6, 18, 12, 3) + dot(7, 10, 0.95) + dot(10.33, 10, 0.95) + dot(13.67, 10, 0.95) + dot(17, 10, 0.95) + path('M8 14.5h8') },
	{ ids: ['mic'], body: box(9, 3.5, 6, 10.5, 3) + path('M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v2.5') },
	{ ids: ['monitor'], body: box(3.5, 4.5, 17, 12, 3) + path('M8.5 20h7M12 16.5V20') },
	{ ids: ['smartphone'], body: box(6.5, 3.5, 11, 17, 3) + path('M11 17.5h2') },
	{ ids: ['tablet'], body: box(4.5, 3.5, 15, 17, 3) + path('M11 17.5h2') },
	{ ids: ['hard-drive'], body: box(3.5, 12, 17, 7.5, 2.5) + path('M3.5 14.5l2.4-6.9A2.5 2.5 0 0 1 8.27 6h7.46a2.5 2.5 0 0 1 2.37 1.6l2.4 6.9') + dot(7.5, 15.75, 1) },
	{ ids: ['sun'], body: ring(3.75) + path('M12 3.5V5M12 19v1.5M3.5 12H5M19 12h1.5M6 6l1.05 1.05M16.95 16.95L18 18M6 18l1.05-1.05M16.95 7.05L18 6') },
	{ ids: ['moon'], body: path('M19.5 14.5A7.5 7.5 0 0 1 9.5 4.5a7.5 7.5 0 1 0 10 10z') },
	{ ids: ['heart'], body: path('M12 19.5s-7.5-4.4-7.5-9.6A4.1 4.1 0 0 1 12 7.6a4.1 4.1 0 0 1 7.5 2.3c0 5.2-7.5 9.6-7.5 9.6z') },
	{ ids: ['ghost'], body: path('M6 19.5V11a6 6 0 0 1 12 0v8.5l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5z') + dot(9.75, 11, 1) + dot(14.25, 11, 1) },
	{ ids: ['bug'], body: box(7.5, 8, 9, 12, 4.5) + path('M9.5 8.5a2.5 2.5 0 0 1 5 0M12 12v8M7.5 13H4M20 13h-3.5M5 8l2.6 1.8M19 8l-2.6 1.8M5 19l2.8-2M19 19l-2.8-2') },
	{ ids: ['flame'], body: path('M12 20.5a6 6 0 0 0 6-6c0-3.6-2.6-5.9-3.6-9-1.3 2.1-2 3.1-3.4 4.1-.9-.9-1.4-1.9-1.5-3.3C7.6 8.4 6 11.3 6 14.5a6 6 0 0 0 6 6z') },
	{ ids: ['zap'], body: path('M13 3.5L5 13.5h6.5L11 20.5l8-10h-6.5z') },
	{ ids: ['calculator'], body: box(5, 3.5, 14, 17, 3) + path('M8.5 7.5h7') + dot(8.75, 12, 0.95) + dot(12, 12, 0.95) + dot(15.25, 12, 0.95) + dot(8.75, 15.75, 0.95) + dot(12, 15.75, 0.95) + dot(15.25, 15.75, 0.95) },
	{ ids: ['life-buoy'], body: ring() + ring(3.5) + path('M6 6l3.5 3.5M14.5 14.5L18 18M18 6l-3.5 3.5M9.5 14.5L6 18') },
	{ ids: ['wrench'], body: path('M14.6 6.6a1 1 0 0 0 0 1.4l1.4 1.4a1 1 0 0 0 1.4 0l3.1-3.1a5.5 5.5 0 0 1-7.3 7.3l-6.3 6.3a2 2 0 0 1-2.8-2.8l6.3-6.3a5.5 5.5 0 0 1 7.3-7.3z') },
	{ ids: ['palette'], body: path('M12 20a8 8 0 1 1 8-8c0 2.2-1.8 3-3.5 3H15a1.75 1.75 0 0 0-1.3 2.92A1.75 1.75 0 0 1 12 20z') + dot(7.5, 11, 1.05) + dot(9.5, 7.5, 1.05) + dot(14, 7, 1.05) + dot(16.75, 10, 1.05) },
	{ ids: ['paintbrush'], body: path('M18.4 3.6a1.41 1.41 0 0 1 2 2L13 13l-2-2zM10 12a3.5 3.5 0 0 0-3.5 3.5c0 1.5-1.5 3-3 3 1 1 2.5 2 4.5 2a5 5 0 0 0 5-5c0-.6-.1-1.2-.4-1.7') },
	{ ids: ['wand', 'wand-2'], body: path('M4.5 19.5L14 10M12.5 8.5l3 3M17.5 3.5v3M16 5h3M19.5 9.5v2M18.5 10.5h2M9 4v2M8 5h2') },
	{ ids: ['toy-brick'], body: box(3.5, 9, 17, 10.5, 2.5) + path('M7.5 9V6.5h3V9M13.5 9V6.5h3V9') },
	{ ids: ['vault'], body: panel + ring(3) + dot(12, 12, 0.9) + path('M7.5 19.5v1.5M16.5 19.5v1.5') },
	{ ids: ['paperclip'], body: path('M19 11.5l-7.2 7.2a4.7 4.7 0 0 1-6.65-6.65l7.6-7.6a3.1 3.1 0 0 1 4.4 4.4l-7.6 7.6a1.55 1.55 0 0 1-2.2-2.2l7-7') },
	{ ids: ['mouse-pointer-click'], body: path('M9.5 9.5l4.6 10.5 1.55-4.45 4.35-1.55zM5.5 3.5V6M3.5 5.5H6M9.5 4.5L8 6M4.5 9.5L6 8') },
	{ ids: ['github'], body: path('M15 20.5v-3.4a3 3 0 0 0-.85-2.3c2.8-.3 5.85-1.4 5.85-6.3a4.9 4.9 0 0 0-1.35-3.4 4.6 4.6 0 0 0-.1-3.4s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.45 1.4 5.35 1.7 5.35 1.7a4.6 4.6 0 0 0-.1 3.4A4.9 4.9 0 0 0 3.9 8.5c0 4.9 3 6 5.85 6.3a3 3 0 0 0-.85 2.3v3.4M9 18c-3 .9-3-1.5-4.5-2') },

	// files and folders
	{ ids: ['file', 'file-empty'], body: doc },
	{ ids: ['file-text', 'document'], body: doc + path('M9 13h6M9 16.5h4') },
	{ ids: ['file-plus'], body: doc + path('M12 11.5v6M9 14.5h6') },
	{ ids: ['file-question', 'file-question-mark'], body: doc + path('M10.25 12.25a1.9 1.9 0 0 1 3.6.75c0 1.2-1.85 1.5-1.85 2.5') + dot(12, 17.75, 0.95) },
	{ ids: ['file-search'], body: doc + ring(2.25, 11.5, 14) + path('M13.2 15.7l1.8 1.8') },
	{ ids: ['file-down'], body: doc + path('M12 11.5v6M9.5 15l2.5 2.5 2.5-2.5') },
	{ ids: ['file-input'], body: doc + path('M3 14.5h6.5M7 12l2.5 2.5L7 17') },
	{ ids: ['file-signature', 'file-pen-line'], body: doc + path('M8.5 17c1.2-1.5 2-1.5 2.5 0s1.5 1 3-1') },
	{ ids: ['file-image'], body: doc + dot(10, 12.75, 1.2) + path('M8 17.5l2.5-2.25 1.75 1.5 2-1.75L16 17') },
	{ ids: ['file-audio', 'file-music'], body: doc + path('M10.5 17.5v-5l4-1v4.5') + ring(1.15, 9.35, 17.5) + ring(1.15, 13.35, 16) },
	{ ids: ['file-symlink'], body: doc + path('M9 17.5v-1a3 3 0 0 1 3-3h3M13 11.5l2 2-2 2') },
	{ ids: ['files', 'copy-file'], body: box(8.5, 7, 11.5, 13.5, 3) + path('M5 16.5V7.5A3.5 3.5 0 0 1 8.5 4h6') },
	{ ids: ['sticky-note'], body: path('M15 20H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8zM15 20v-3.5a1.5 1.5 0 0 1 1.5-1.5H20') },
	{ ids: ['folder', 'folder-closed'], body: folderBase + path('M4 10h16') },
	{ ids: ['folder-open'], body: path('M4 17V7a2.5 2.5 0 0 1 2.5-2.5h3.1a2 2 0 0 1 1.55.74l1.25 1.56h4.6A2.5 2.5 0 0 1 19.5 9.3V10M4 17l2.06-5.5A2.3 2.3 0 0 1 8.2 10h11.65a1.2 1.2 0 0 1 1.14 1.58l-1.91 5.7a2.5 2.5 0 0 1-2.37 1.72H6A2 2 0 0 1 4 17z') },
	{ ids: ['folder-plus'], body: folderBase + path('M12 10.5v6M9 13.5h6') },
	{ ids: ['folder-search'], body: folderBase + ring(2.25, 11.5, 12.75) + path('M13.2 14.45l1.8 1.8') },
	{ ids: ['folder-tree'], body: path('M4.5 4.5v11a2 2 0 0 0 2 2h4M4.5 9h6') + box(12.5, 6.5, 8, 5, 1.5) + box(12.5, 15, 8, 5, 1.5) },
	{ ids: ['book-open'], body: path('M12 7.5v12M12 7.5C10.5 6 8.5 5.5 4.5 5.5v12c4 0 6 .5 7.5 2 1.5-1.5 3.5-2 7.5-2v-12c-4 0-6 .5-7.5 2z') },
	{ ids: ['book-up'], body: path('M18.5 15.5V5a1 1 0 0 0-1-1H8a2.5 2.5 0 0 0-2.5 2.5v11M5.5 17.5A2.5 2.5 0 0 1 8 15h10.5v5H8a2.5 2.5 0 0 1-2.5-2.5zM12 12V7.5M10 9.5l2-2 2 2') },
	{ ids: ['library'], body: box(4.5, 4.5, 4, 15, 1.5) + box(10, 4.5, 4, 15, 1.5) + path('M15.6 5.6l3.9 13.2') },
	{ ids: ['image'], body: image },
	{ ids: ['image-off'], body: image + slash },
	{ ids: ['image-minus'], body: image },
	{ ids: ['camera'], body: camera },
	{ ids: ['camera-off'], body: camera + slash },

	// views and layout
	{ ids: ['git-fork'], body: ring(2.25, 7, 6.5) + ring(2.25, 7, 17.5) + ring(2.25, 17, 12) + path('M7 8.75v6.5M9.1 7.6l5.85 3.25M9.1 16.4l5.85-3.25') },
	{ ids: ['git-merge'], body: ring(2.25, 7, 6.5) + ring(2.25, 7, 17.5) + ring(2.25, 17, 12) + path('M7 8.75v6.5M7 8.75A6 6 0 0 0 14.75 12') },
	{ ids: ['git-branch-plus'], body: ring(2.25, 7, 17.5) + ring(2.25, 17, 7) + path('M7 4.5v10.75M17 9.25a6 6 0 0 1-8.25 6.25M17 14.5v5M14.5 17h5') },
	{ ids: ['layout-dashboard'], body: box(4, 4, 7, 7, 2) + box(13, 4, 7, 7, 3.5) + box(4, 13, 7, 7, 2) + box(13, 13, 7, 7, 2) },
	{ ids: ['layout-grid'], body: box(4, 4, 7, 7, 2) + box(13, 4, 7, 7, 2) + box(4, 13, 7, 7, 2) + box(13, 13, 7, 7, 2) },
	{ ids: ['layout-list'], body: box(4, 4.5, 6, 6, 2) + box(4, 13.5, 6, 6, 2) + path('M13.5 6.25h6.5M13.5 9h4M13.5 15.25h6.5M13.5 18h4') },
	{ ids: ['layout', 'panels-top-left'], body: panel + path('M4 9.5h16M9.5 9.5v10') },
	{ ids: ['table', 'table-2'], body: panel + path('M4 9.5h16M4 14.5h16M10 9.5v10') },
	{ ids: ['grid', 'grid-3x3', 'grid-3-x-3'], body: square + path('M4 9.33h16M4 14.67h16M9.33 4v16M14.67 4v16') },
	{ ids: ['columns', 'columns-2'], body: panel + path('M12 4.5v15') },
	{ ids: ['gallery-vertical'], body: path('M5 4.5h14M5 19.5h14') + box(4, 7.5, 16, 9, 2.5) },
	{ ids: ['kanban-square', 'square-kanban'], body: square + path('M8.5 8v5M12 8v8M15.5 8v3') },
	{ ids: ['square'], body: square },
	{ ids: ['square-dashed', 'box-select'], body: `<rect x='4' y='4' width='16' height='16' rx='3.5' stroke-dasharray='3 3.1'/>` },
	{ ids: ['group'], body: `<rect x='3.5' y='3.5' width='17' height='17' rx='3.5' stroke-dasharray='3 3.25'/>` + box(7, 7, 6, 4.5, 1.25) + box(11, 12.5, 6, 4.5, 1.25) },
	{ ids: ['rectangle-vertical'], body: box(6.5, 3.5, 11, 17, 3) },
	{ ids: ['x-square', 'square-x'], body: square + path('M9.5 9.5l5 5M14.5 9.5l-5 5') },
	{ ids: ['check-square', 'square-check', 'check-square-2', 'square-check-big'], body: square + path('M8.5 12.25l2.4 2.4 4.6-4.9') },
	{ ids: ['edit', 'square-pen', 'pen-box', 'pencil-square'], body: path('M11 4.5H7.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V13M17.6 4.4a1.91 1.91 0 0 1 2.7 2.7l-7 7-3.3.6.6-3.3z') },
	{ ids: ['edit-3', 'pen-line'], body: path('M12 20h7.5M15.6 4.9a2.05 2.05 0 0 1 2.9 2.9L8.6 17.7l-3.6.8.8-3.6z') },
	{ ids: ['pencil'], body: path('M15.6 4.9a2.05 2.05 0 0 1 2.9 2.9L8.6 17.7l-3.6.8.8-3.6zM13.5 7l3.5 3.5') },
	{ ids: ['eraser'], body: path('M7.5 20h12M5.4 13.6l7.2-7.2a2 2 0 0 1 2.8 0l3.2 3.2a2 2 0 0 1 0 2.8l-6.4 6.4a3 3 0 0 1-2.1.9H8.6a2 2 0 0 1-1.4-.6l-1.8-1.8a2 2 0 0 1 0-2.7zM9.5 9.5l5 5') },
	{ ids: ['highlighter'], body: path('M9 11.5l-4 4 3.5 3.5 4-4M9 11.5l7-7a2 2 0 0 1 2.83 0l.67.67a2 2 0 0 1 0 2.83l-7 7zM4 20h4') },
	{ ids: ['square-function', 'function-square'], body: square + path('M9 16.5c1.5 0 2-1 2.25-2.5l.75-4.5c.25-1.5.75-2.5 2.5-2.5M9.5 11.5H14') },
	{ ids: ['sigma-square', 'square-sigma'], body: square + path('M15 8.5H9l3 3.5-3 3.5h6') },
	{ ids: ['sigma'], body: path('M17 5.5H7l5.5 6.5L7 18.5h10') },
	{ ids: ['percent'], body: path('M18.5 5.5l-13 13') + ring(2, 7, 7) + ring(2, 17, 17) },
	{ ids: ['terminal'], body: path('M5.5 7.5L10 12l-4.5 4.5M12.5 17h6') },
	{ ids: ['terminal-square', 'square-terminal'], body: square + path('M8 9.5l2.5 2.5L8 14.5M13 14.5h3') },
	{ ids: ['picture-in-picture'], body: box(3.5, 5, 17, 14, 3.5) + box(12, 12, 6, 4.5, 1.5) },
	{ ids: ['picture-in-picture-2'], body: path('M20.5 10.5V8.5A3.5 3.5 0 0 0 17 5H7a3.5 3.5 0 0 0-3.5 3.5v7A3.5 3.5 0 0 0 7 19h3') + box(13, 13, 8, 6, 2) },
	{ ids: ['sidebar-toggle-button-icon', 'sidebar-left', 'panel-left'], body: panel + path('M9.5 4.5v15') },
	{ ids: ['sidebar-right', 'panel-right'], body: panel + path('M14.5 4.5v15') },
	{ ids: ['panel-left-close'], body: panel + path('M9.5 4.5v15M15.5 9.5L13 12l2.5 2.5') },
	{ ids: ['panel-right-close'], body: panel + path('M14.5 4.5v15M8.5 9.5L11 12l-2.5 2.5') },
	{ ids: ['panel-top-close'], body: panel + path('M4 9.5h16M9.5 15.5L12 13l2.5 2.5') },
	{ ids: ['panel-bottom-close'], body: panel + path('M4 14.5h16M9.5 8.5L12 11l2.5-2.5') },
	{ ids: ['separator-vertical'], body: path('M12 4v16M8 8.5L4.5 12 8 15.5M16 8.5l3.5 3.5-3.5 3.5') },
	{ ids: ['separator-horizontal'], body: path('M4 12h16M8.5 8L12 4.5 15.5 8M8.5 16l3.5 3.5 3.5-3.5') },
	{ ids: ['stretch-horizontal'], body: box(4, 5, 16, 5.5, 2) + box(4, 13.5, 16, 5.5, 2) },
	{ ids: ['align-start-vertical'], body: path('M4.5 4v16') + box(7.5, 6, 12, 4.5, 1.5) + box(7.5, 13.5, 8, 4.5, 1.5) },
	{ ids: ['align-end-vertical'], body: path('M19.5 4v16') + box(4.5, 6, 12, 4.5, 1.5) + box(8.5, 13.5, 8, 4.5, 1.5) },
	{ ids: ['align-center-vertical'], body: path('M12 4v2M12 10.5v3M12 18v2') + box(6, 6, 12, 4.5, 1.5) + box(8, 13.5, 8, 4.5, 1.5) },
	{ ids: ['align-start-horizontal'], body: path('M4 4.5h16') + box(6, 7.5, 4.5, 12, 1.5) + box(13.5, 7.5, 4.5, 8, 1.5) },
	{ ids: ['align-end-horizontal'], body: path('M4 19.5h16') + box(6, 4.5, 4.5, 12, 1.5) + box(13.5, 8.5, 4.5, 8, 1.5) },
	{ ids: ['align-center-horizontal'], body: path('M4 12h2M10.5 12h3M18 12h2') + box(6, 6, 4.5, 12, 1.5) + box(13.5, 8, 4.5, 8, 1.5) },
	{ ids: ['fold-vertical'], body: path('M12 3.5V9M9.5 6.5L12 9l2.5-2.5M12 20.5V15M9.5 17.5L12 15l2.5 2.5M4.5 12h2M10.5 12h3M17.5 12h2') },
	{ ids: ['unfold-vertical'], body: path('M12 9V3.5M9.5 6L12 3.5 14.5 6M12 15v5.5M9.5 18l2.5 2.5 2.5-2.5M4.5 12h2M10.5 12h3M17.5 12h2') },
	{ ids: ['layers'], body: path('M12 4l8.5 4.5L12 13 3.5 8.5zM3.5 12.5L12 17l8.5-4.5M3.5 16.5L12 21l8.5-4.5') },
	{ ids: ['layers-2'], body: path('M12 4.5l8.5 4.5-8.5 4.5L3.5 9zM3.5 14L12 18.5l8.5-4.5') },
	{ ids: ['shapes'], body: ring(3.5, 7.5, 16.5) + box(13, 13, 7, 7, 2) + path('M10.5 4l3.5 6h-7z') },
	{ ids: ['ruler'], body: path('M15.5 3.5l5 5-12 12-5-5zM13 6l2 2M10.5 8.5l1.5 1.5M8 11l2 2M5.5 13.5l1.5 1.5') },
	{ ids: ['inspect', 'square-mouse-pointer'], body: path('M20 11V7.5A3.5 3.5 0 0 0 16.5 4h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20H11M12.5 12.5l3 8 1.25-3.75L20.5 15.5z') },
	{ ids: ['replace', 'replace-all'], body: box(4, 4, 7, 7, 2) + box(13, 13, 7, 7, 2) + path('M13.5 6.5h3A1.5 1.5 0 0 1 18 8v2M10.5 17.5h-3A1.5 1.5 0 0 1 6 16v-2') },
	{ ids: ['regex'], body: path('M17 4v7M14 5.75l6 3.5M20 5.75l-6 3.5') + box(4.5, 14.5, 5, 5, 1.25) },
	{ ids: ['diff'], body: path('M12 4.5v7M8.5 8h7M8.5 17h7') },
	{ ids: ['binary'], body: path('M6 5v5M15 14v5') + box(13.5, 5, 4, 5, 1.5) + box(4.5, 14, 4, 5, 1.5) },

	// calendar
	{ ids: ['calendar'], body: calendar },
	{ ids: ['calendar-days'], body: calendar + dot(8.5, 13.75, 0.9) + dot(12, 13.75, 0.9) + dot(15.5, 13.75, 0.9) + dot(8.5, 17, 0.9) + dot(12, 17, 0.9) },
	{ ids: ['calendar-check'], body: calendar + path('M9.5 14.75l1.75 1.75 3.25-3.25') },
	{ ids: ['calendar-plus'], body: calendar + path('M12 12.5v5M9.5 15h5') },
	{ ids: ['calendar-minus'], body: calendar + path('M9.5 15h5') },
	{ ids: ['calendar-range'], body: calendar + path('M8 13.75h4M12 17h4') },

	// text and formatting
	{ ids: ['list'], body: dot(5.5, 7) + dot(5.5, 12) + dot(5.5, 17) + path('M9.5 7h10M9.5 12h10M9.5 17h10') },
	{ ids: ['list-ordered'], body: path('M10 7h9.5M10 12h9.5M10 17h9.5M5 5.5h1V9.5M4.5 14.5a1.25 1.25 0 0 1 2.3.6c0 .9-2.3 1.9-2.3 3.4h2.5') },
	{ ids: ['list-plus'], body: path('M4.5 7h11M4.5 12h11M4.5 17h7M17.5 14.5v5M15 17h5') },
	{ ids: ['list-start'], body: path('M4.5 7h9M4.5 12h15M4.5 17h15M17 4.5L19.5 7 17 9.5') },
	{ ids: ['list-end'], body: path('M4.5 7h15M4.5 12h15M4.5 17h9M17 14.5l2.5 2.5-2.5 2.5') },
	{ ids: ['align-left', 'text-align-start', 'text-align-left'], body: path('M4.5 7h15M4.5 12h9M4.5 17h12') },
	{ ids: ['align-center', 'text-align-center'], body: path('M4.5 7h15M7.5 12h9M6 17h12') },
	{ ids: ['align-right', 'text-align-end', 'text-align-right'], body: path('M4.5 7h15M10.5 12h9M7.5 17h12') },
	{ ids: ['text'], body: path('M4.5 7h15M4.5 12h15M4.5 17h9') },
	{ ids: ['indent'], body: path('M4.5 6.5h15M10.5 12h9M4.5 17.5h15M5 9.5L7.5 12 5 14.5') },
	{ ids: ['outdent'], body: path('M4.5 6.5h15M10.5 12h9M4.5 17.5h15M7.5 9.5L5 12l2.5 2.5') },
	{ ids: ['quote'], body: ring(2.4, 7.5, 10) + ring(2.4, 16, 10) + path('M9.9 10c0 3.2-1.6 5.4-4.4 6.5M18.4 10c0 3.2-1.6 5.4-4.4 6.5') },
	{ ids: ['bold'], body: path('M7 5h6a3.5 3.5 0 0 1 0 7H7zM7 12h7a3.5 3.5 0 0 1 0 7H7z') },
	{ ids: ['italic'], body: path('M10 5h8M6 19h8M14 5l-4 14') },
	{ ids: ['strikethrough'], body: path('M5 12h14M16 7.5A3.5 3 0 0 0 12.5 5h-1A3.5 3.5 0 0 0 8 8.5c0 1.6 1 2.8 3 3.5M8 16.5a3.5 3 0 0 0 3.5 2.5h1a3.5 3.5 0 0 0 3.5-3.5c0-.6-.15-1.1-.4-1.5') },
	{ ids: ['heading', 'heading-3', 'heading-4', 'heading-5', 'heading-6'], body: path('M6 5v14M16 5v14M6 12h10') },
	{ ids: ['heading-1'], body: path('M5 6v12M13 6v12M5 12h8M17 11l2-1.5V18') },
	{ ids: ['heading-2'], body: path('M5 6v12M13 6v12M5 12h8M16.5 12a1.75 1.75 0 0 1 3.5 0c0 1.5-3.5 2.5-3.5 6H20') },
	{ ids: ['type'], body: path('M5 7V5.5h14V7M12 5.5v13M9.5 18.5h5') },
	{ ids: ['baseline'], body: path('M5 20h14M7.5 16l4.5-11 4.5 11M9.25 12h5.5') },
	{ ids: ['text-cursor-input', 'text-cursor'], body: path('M12 5v14M9.5 5h5M9.5 19h5') + path('M7.5 8.5H6A2.5 2.5 0 0 0 3.5 11v2A2.5 2.5 0 0 0 6 15.5h1.5M16.5 8.5H18a2.5 2.5 0 0 1 2.5 2.5v2a2.5 2.5 0 0 1-2.5 2.5h-1.5') },
	{ ids: ['text-select', 'text-selection'], body: `<rect x='4' y='4' width='16' height='16' rx='3.5' stroke-dasharray='3 3.1'/>` + path('M8.5 9h7M8.5 12h7M8.5 15h4') },
	{ ids: ['text-initial'], body: path('M15 5.5h5M15 9.5h5M4 13.5h16M4 17.5h16M4 5.5h7M7.5 5.5v4.5') },
	{ ids: ['pilcrow'], body: path('M13 4.5v15M17 4.5v15M19 4.5h-9a3.75 3.75 0 0 0 0 7.5h3') },
];
