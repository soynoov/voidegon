/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_MwcZ6mwF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_BAZMRUh_.mjs';
import { $ as $$Article, a as $$Section } from './cap-1_ggFR5zDE.mjs';
import { $ as $$Menu, b as $$SmallCard } from './characters_8aG1H0uV.mjs';

const $$Astro = createAstro();
const $$Murcia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Murcia;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "| Murcia" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Article", $$Article, { "title": "Murcia", "img": "/img/maps/murcia.png" })} ${renderComponent($$result2, "Section", $$Section, { "title": "Locales" })} ${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Taberna", "img": "/img/maps/murcia/tavern.png", "enlace": "murcia/tavern" })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Biblioteca" })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Iglesia", "img": "/img/maps/murcia/church.png", "enlace": "murcia/church" })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Forja" })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Almacen", "lock": true })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Tienda de Pociones", "img": "/img/npc/tir/var/bg_var.png", "lock": true })} ` })} ${maybeRenderHead()}<hr class="w-[80vw] mx-auto border-[--gray] border-2 rounded-lg mt-8"> ${renderComponent($$result2, "Section", $$Section, { "title": "Ubicaciones" })} ${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Cueva", "enlace": "maps/murcia/cave" })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Bosque", "enlace": "maps/murcia/cave" })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Mazmorra", "enlace": "maps/murcia/cave" })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Jardin", "enlace": "maps/murcia/cave" })} ` })} <div class="bg-[--gray]"> <!-- Fragmento de Historia --> </div> ` })}`;
}, "D:/PROJECTS/WEB/voidegon/src/pages/maps/murcia.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/maps/murcia.astro";
const $$url = "/maps/murcia";

export { $$Murcia as default, $$file as file, $$url as url };
