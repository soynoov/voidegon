/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent } from '../astro_UCTP8GVI.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_mP1SLpho.mjs';
import { $ as $$Article, a as $$Section } from './cap-1_luMf59W9.mjs';
import { $ as $$Menu, a as $$Card } from './characters_L7EDUbr-.mjs';

const $$Astro = createAstro();
const $$Maps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Maps;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u3011 Voidegon \u25B8 Mapas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Article", $$Article, { "title": "Mapa de Voidegon" })} ${renderComponent($$result2, "Section", $$Section, { "title": "Terra" })} ${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "name": "Murcia", "enlace": "maps/murcia", "img": "/img/maps/murcia.png" })} ` })} ` })}`;
}, "D:/PROJECTS/WEB/voidegon/src/pages/maps.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/maps.astro";
const $$url = "/maps";

export { $$Maps as default, $$file as file, $$url as url };
