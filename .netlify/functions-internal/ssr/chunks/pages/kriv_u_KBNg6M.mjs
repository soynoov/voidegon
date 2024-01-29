/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_MwcZ6mwF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_BAZMRUh_.mjs';
import { $ as $$Title, a as $$Stats } from './isidoro_rKTdbCbk.mjs';

const $$Astro = createAstro();
const $$Kriv = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Kriv;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "| Kriv Coppernico" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, { "title": "Kriv Coppernico" })} ${maybeRenderHead()}<main${addAttribute(`
    w-[80vw] mx-auto m-4
    grid grid-cols-6
    
  `, "class")}> <div class="bg-[--gray] rounded-xl"> ${renderComponent($$result2, "Stats", $$Stats, { "fue": 16, "des": 6, "con": 14, "int": 8, "sab": 12, "car": 16, "mod": [2, 0, 0, 0, 0, 1], "com": [0, 0, 0, 0, 1, 1], "modcom": 2 })} </div> </main> ` })}`;
}, "D:/PROJECTS/WEB/voidegon/src/pages/characters/kriv.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/characters/kriv.astro";
const $$url = "/characters/kriv";

export { $$Kriv as default, $$file as file, $$url as url };
