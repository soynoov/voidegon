/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent } from '../astro_MwcZ6mwF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Article, d as $$Layout } from './characters_wczbX6Qm.mjs';

const $$Astro = createAstro();
const $$Map = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Map;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "| Mapa" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainTitle", $$Article, { "title": "Mapas" })} ` })}`;
}, "D:/PROJECTS/WEB/voidegon/src/pages/map.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/map.astro";
const $$url = "/map";

export { $$Map as default, $$file as file, $$url as url };
