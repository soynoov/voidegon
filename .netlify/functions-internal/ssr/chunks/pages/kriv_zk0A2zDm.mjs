/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_UCTP8GVI.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_mP1SLpho.mjs';
import { $ as $$Title, a as $$Stats, b as $$Experience } from './isidoro_h1nKj-P2.mjs';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Money = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Money;
  const { pc = 0, pp = 0, pe = 0, po = 0, ppt = 0 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`
    grid gap-2 grid-cols-5 justify-center items-center
    cursor-default text-center
    w-full h-full
`, "class")} data-astro-cid-cxgi4hzz> <!-- Cobre --> <div data-astro-cid-cxgi4hzz> <h3 class="text-[--copper]" data-astro-cid-cxgi4hzz>PC</h3> <h6 data-astro-cid-cxgi4hzz>${pc}</h6> </div> <!-- Plata --> <div data-astro-cid-cxgi4hzz> <h3 class="text-[--silver]" data-astro-cid-cxgi4hzz>PP</h3> <h6 data-astro-cid-cxgi4hzz>${pp}</h6> </div> <!-- Electro --> <div data-astro-cid-cxgi4hzz> <h3 class="text-[--electro]" data-astro-cid-cxgi4hzz>PE</h3> <h6 data-astro-cid-cxgi4hzz>${pe}</h6> </div> <!-- Oro --> <div data-astro-cid-cxgi4hzz> <h3 class="text-[--gold]" data-astro-cid-cxgi4hzz>PO</h3> <h6 data-astro-cid-cxgi4hzz>${po}</h6> </div> <!-- Platino --> <div data-astro-cid-cxgi4hzz> <h3 class="text-[--platinum]" data-astro-cid-cxgi4hzz>PPT</h3> <h6 data-astro-cid-cxgi4hzz>${ppt}</h6> </div> </section> `;
}, "D:/PROJECTS/WEB/voidegon/src/components/Money.astro", void 0);

const $$Astro = createAstro();
const $$Kriv = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Kriv;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u3011 Voidegon \u25B8 Kriv Coppernico" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, { "title": "Kriv Coppernico" })} ${maybeRenderHead()}<main${addAttribute(`
    w-[80vw] mx-auto m-4
    grid grid-cols-6
    
  `, "class")}> <div> ${renderComponent($$result2, "Stats", $$Stats, { "fue": 16, "des": 6, "con": 14, "int": 8, "sab": 12, "car": 16, "mod": [2, 0, 0, 0, 0, 1], "com": [0, 0, 0, 0, 1, 1], "modcom": 2 })} </div> <div class="w-[80vw]"> ${renderComponent($$result2, "Money", $$Money, { "pc": 100, "pp": 0, "pe": 16, "po": 2, "ppt": 0 })} </div> <section class="col-span-6"> ${renderComponent($$result2, "Experience", $$Experience, { "race": "Dragonborn", "rol": "Paladin", "exp": 345 })} </section> </main> ` })}`;
}, "D:/PROJECTS/WEB/voidegon/src/pages/characters/kriv.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/characters/kriv.astro";
const $$url = "/characters/kriv";

const kriv = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kriv,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Money as $, kriv as k };
