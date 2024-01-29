/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, e as addAttribute } from '../astro_MwcZ6mwF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_BAZMRUh_.mjs';
import { $ as $$Title } from './isidoro_rKTdbCbk.mjs';
import 'clsx';
/* empty css                        */

const $$Astro$1 = createAstro();
const $$Name = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Name;
  const { name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <h1 class="text-5xl font-[pacifico] text-[--title] text-center m-4"> ${name} </h1> </section>`;
}, "D:/PROJECTS/WEB/voidegon/src/components/Name.astro", void 0);

const $$Astro = createAstro();
const $$Var = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Var;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "| Var", "data-astro-cid-ioutgjio": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, { "title": "Var", "img": "/img/npc/tir/var/bg_var.png", "center": "center", "data-astro-cid-ioutgjio": true })} ${maybeRenderHead()}<main${addAttribute(`
    w-[80vw] mx-auto
    grid grid-cols-6 gap-4 auto-rows-auto
    mt-4
  `, "class")} data-astro-cid-ioutgjio> <div class="col-span-6 row-span-1" data-astro-cid-ioutgjio> ${renderComponent($$result2, "Name", $$Name, { "name": "The Mad Alchemist", "data-astro-cid-ioutgjio": true })} </div> <div class="lg:col-span-2 lg:row-span-5 md:col-span-3 col-span-6" data-astro-cid-ioutgjio> <img src="/img/npc/tir/var/var.png" alt="Var" class="rounded-xl w-full h-full" data-astro-cid-ioutgjio> </div> <div class="col-span-2 row-span-1" data-astro-cid-ioutgjio> <h3 data-astro-cid-ioutgjio>Dwarf</h3> </div> <div class="col-span-2 row-span-1" data-astro-cid-ioutgjio> <h3 data-astro-cid-ioutgjio>372 años</h3> </div> <div class="col-span-4 row-span-1" data-astro-cid-ioutgjio> <p class="p-4 px-8" data-astro-cid-ioutgjio>[████████ ██████████ █████████ ███████████]</p> </div> <div class="col-span-2 row-span-1" data-astro-cid-ioutgjio> <h3 data-astro-cid-ioutgjio>Alchemist</h3> </div> <div class="col-span-2 row-span-1" data-astro-cid-ioutgjio> <h3 data-astro-cid-ioutgjio>Caótico Neutro</h3> </div> <div class="col-span-4 row-span-1" data-astro-cid-ioutgjio> <p class="p-4 px-8 text-justify" data-astro-cid-ioutgjio>
Este enano anciano presenta un rostro marcado por numerosas arrugas y
        cejas pelirrojas densas, casi ocultando sus ojos entre ellas. La
        calvicie es evidente, y su barba sigue la misma tonalidad. Viste con
        harapos largos que se asemejan a un manto descosido, y su apariencia
        refleja un aire de excentricidad.
</p> </div> <div class="col-span-2 row-span-1" data-astro-cid-ioutgjio> <h3 data-astro-cid-ioutgjio>62 Kilos</h3> </div> <div class="col-span-2 row-span-1" data-astro-cid-ioutgjio> <h3 data-astro-cid-ioutgjio>1.18 Metros</h3> </div> </main> ` })} `;
}, "D:/PROJECTS/WEB/voidegon/src/pages/characters/npc/var.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/characters/npc/var.astro";
const $$url = "/characters/npc/var";

export { $$Var as default, $$file as file, $$url as url };
