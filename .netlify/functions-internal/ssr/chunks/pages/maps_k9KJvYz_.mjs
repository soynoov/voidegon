/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent } from '../astro_MwcZ6mwF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_BAZMRUh_.mjs';
import { $ as $$Article, a as $$Section } from './cap-1_ggFR5zDE.mjs';
import { $ as $$Menu, a as $$Card } from './characters_8aG1H0uV.mjs';

const $$Astro = createAstro();
const $$Maps = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Maps;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "| Mapa" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Article", $$Article, { "title": "Mapa de Voidegon" })} ${renderComponent($$result2, "Section", $$Section, { "title": "Terra" })} ${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "name": "Murcia", "enlace": "maps/murcia", "img": "/img/maps/murcia.png" })} ` })} ` })}`;
}, "D:/PROJECTS/WEB/voidegon/src/pages/maps.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/maps.astro";
const $$url = "/maps";

export { $$Maps as default, $$file as file, $$url as url };
