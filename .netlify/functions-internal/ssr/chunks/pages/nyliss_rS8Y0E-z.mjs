/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_MwcZ6mwF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_BAZMRUh_.mjs';
import { $ as $$Title, a as $$Stats } from './isidoro_rKTdbCbk.mjs';
/* empty css                           */

const $$Astro = createAstro();
const $$Nyliss = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nyliss;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nyliss  Avacyn", "data-astro-cid-gb3fdypi": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, { "title": "Nyliss Avacyn", "img": "https://www.shutterstock.com/image-vector/angel-wings-illustration-vector-desing-600nw-2289365543.jpg", "center": "center", "data-astro-cid-gb3fdypi": true })} ${maybeRenderHead()}<main${addAttribute(`
    w-[80vw] mx-auto m-4
    grid grid-cols-6 grid-flow-row-dense
    gap-4
  `, "class")} data-astro-cid-gb3fdypi> <div class="col-span-4" data-astro-cid-gb3fdypi> ${renderComponent($$result2, "Stats", $$Stats, { "fue": 10, "des": 14, "con": 10, "int": 16, "sab": 14, "car": 8, "mod": [1, 0, 0, 0, 0, 2], "com": [0, 0, 0, 1, 1, 0], "modcom": 2, "data-astro-cid-gb3fdypi": true })} </div> <div class="col-span-4 row-span-2 size-fit" data-astro-cid-gb3fdypi> <img src="/img/nyliss/nyliss.png" alt="Nyliss Avacyn" class="rounded-2xl size-fit" data-astro-cid-gb3fdypi> </div> </main> ` })} `;
}, "D:/PROJECTS/WEB/voidegon/src/pages/characters/nyliss.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/characters/nyliss.astro";
const $$url = "/characters/nyliss";

export { $$Nyliss as default, $$file as file, $$url as url };
