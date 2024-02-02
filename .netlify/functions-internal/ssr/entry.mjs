import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_lRQZyti_.mjs';

const _page0  = () => import('./chunks/generic_F1DAIZge.mjs');
const _page1  = () => import('./chunks/index_BT8qwbW3.mjs');
const _page2  = () => import('./chunks/isidoro_yCzOYorr.mjs');
const _page3  = () => import('./chunks/lionel_0Q5p_qK6.mjs');
const _page4  = () => import('./chunks/nyliss_GhCryqkD.mjs');
const _page5  = () => import('./chunks/kriv_0d6wxw58.mjs');
const _page6  = () => import('./chunks/var_fF0_s87Z.mjs');
const _page7  = () => import('./chunks/characters_0S_8KCzr.mjs');
const _page8  = () => import('./chunks/cap-1_yXoraVvW.mjs');
const _page9  = () => import('./chunks/diaries_pLFKOH46.mjs');
const _page10  = () => import('./chunks/extras_EfSEb3Mk.mjs');
const _page11  = () => import('./chunks/tavern_GqvJfZLx.mjs');
const _page12  = () => import('./chunks/murcia_olV4Iaf8.mjs');
const _page13  = () => import('./chunks/maps_Ne-mJGRl.mjs');
const _page14  = () => import('./chunks/menu_Fn4C6jPS.mjs');
const _page15  = () => import('./chunks/404_2KYnnDzZ.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/characters/isidoro.astro", _page2],["src/pages/characters/lionel.astro", _page3],["src/pages/characters/nyliss.astro", _page4],["src/pages/characters/kriv.astro", _page5],["src/pages/characters/npc/var.astro", _page6],["src/pages/characters.astro", _page7],["src/pages/diaries/cap-1.astro", _page8],["src/pages/diaries.astro", _page9],["src/pages/extras.astro", _page10],["src/pages/maps/murcia/tavern.astro", _page11],["src/pages/maps/murcia.astro", _page12],["src/pages/maps.astro", _page13],["src/pages/menu.astro", _page14],["src/pages/404.astro", _page15]]);
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
