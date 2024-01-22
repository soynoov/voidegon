import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_gICte1Mg.mjs';

const _page0  = () => import('./chunks/generic_40A1JpV_.mjs');
const _page1  = () => import('./chunks/index_JkqUYQM-.mjs');
const _page2  = () => import('./chunks/isidoro_TM3M9mV6.mjs');
const _page3  = () => import('./chunks/characters_DRgM8E_-.mjs');
const _page4  = () => import('./chunks/diaries_oOmjD1vb.mjs');
const _page5  = () => import('./chunks/extras_hpXGGEHA.mjs');
const _page6  = () => import('./chunks/map_5dk1g2hT.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/characters/isidoro.astro", _page2],["src/pages/characters.astro", _page3],["src/pages/diaries.astro", _page4],["src/pages/extras.astro", _page5],["src/pages/map.astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
