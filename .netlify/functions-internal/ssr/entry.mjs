import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_fofD6H-C.mjs';

const _page0  = () => import('./chunks/generic_40A1JpV_.mjs');
const _page1  = () => import('./chunks/index_ac5vjNlk.mjs');
const _page2  = () => import('./chunks/isidoro_P4N5kXXV.mjs');
const _page3  = () => import('./chunks/nyliss_7HOQe1vP.mjs');
const _page4  = () => import('./chunks/kriv_Qaf4Q-KY.mjs');
const _page5  = () => import('./chunks/var_SsUpKxKG.mjs');
const _page6  = () => import('./chunks/characters_Vu7ktGLY.mjs');
const _page7  = () => import('./chunks/cap-1_el7QTnDH.mjs');
const _page8  = () => import('./chunks/diaries_l6b5Fh5v.mjs');
const _page9  = () => import('./chunks/extras_2_17CXtM.mjs');
const _page10  = () => import('./chunks/tavern_aZxwfSNx.mjs');
const _page11  = () => import('./chunks/murcia_5f5vFJRY.mjs');
const _page12  = () => import('./chunks/maps_lJDHBp0N.mjs');
const _page13  = () => import('./chunks/404__DpASOS4.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/characters/isidoro.astro", _page2],["src/pages/characters/nyliss.astro", _page3],["src/pages/characters/kriv.astro", _page4],["src/pages/characters/npc/var.astro", _page5],["src/pages/characters.astro", _page6],["src/pages/diaries/cap-1.astro", _page7],["src/pages/diaries.astro", _page8],["src/pages/extras.astro", _page9],["src/pages/maps/murcia/tavern.astro", _page10],["src/pages/maps/murcia.astro", _page11],["src/pages/maps.astro", _page12],["src/pages/404.astro", _page13]]);
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
