/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_UCTP8GVI.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_mP1SLpho.mjs';
import { $ as $$Article, a as $$Section } from './cap-1_luMf59W9.mjs';
import { $ as $$Menu, b as $$SmallCard, c as $$HR } from './characters_L7EDUbr-.mjs';

const $$Astro = createAstro();
const $$Murcia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Murcia;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u3011 Voidegon \u25B8 Murcia" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Article", $$Article, { "title": "Murcia", "img": "/img/maps/murcia.png" })} ${renderComponent($$result2, "Section", $$Section, { "title": "Locales" })} ${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Taberna", "img": "/img/maps/murcia/tavern.png", "enlace": "murcia/tavern" })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Biblioteca" })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Iglesia", "img": "/img/maps/murcia/church.png", "enlace": "murcia/church" })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Forja" })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Almacen", "lock": true })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Tienda de Pociones", "lock": true })} ` })} ${renderComponent($$result2, "HR", $$HR, {})} ${renderComponent($$result2, "Section", $$Section, { "title": "Ubicaciones" })} ${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Cueva", "enlace": "maps/murcia/cave" })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Bosque", "enlace": "maps/murcia/cave" })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Mazmorra", "enlace": "maps/murcia/cave" })} ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "Jardin", "enlace": "maps/murcia/cave" })} ` })} ${maybeRenderHead()}<div class="bg-[--gray]"> <!-- Fragmento de Historia --> </div> ` })}`;
}, "D:/PROJECTS/WEB/voidegon/src/pages/maps/murcia.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/maps/murcia.astro";
const $$url = "/maps/murcia";

export { $$Murcia as default, $$file as file, $$url as url };
