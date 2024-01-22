/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_MwcZ6mwF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Article, a as $$Section, b as $$Menu, c as $$Card, d as $$Layout } from './characters_wczbX6Qm.mjs';

const $$Astro = createAstro();
const $$Diaries = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Diaries;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "| Diarios" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Article", $$Article, { "title": "Diarios de Viaje", "img": "/img/bg_diaries.png", "center": "center", "opacity": 0.75 })} ${renderComponent($$result2, "Section", $$Section, { "title": "Cap\xEDtulo 1", "subtitle": "La Tierra Olvidada" })} ${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "img": "/img/baren/baren_book.png", "name": "Baren Valhice", "enlace": "diaries/baren_diary" })} ${renderComponent($$result3, "Card", $$Card, { "img": "/img/enya/enya_book.png", "name": "Enya Fendor", "enlace": "diaries/enya_diary" })} ${renderComponent($$result3, "Card", $$Card, { "img": "/img/isidoro/isidoro_book.png", "name": "Isidoro Matamoros", "enlace": "diaries/isidoro_diary" })} ${renderComponent($$result3, "Card", $$Card, { "img": "/img/kenkart/kenkart_book.png", "name": "Kenkart Silkson", "enlace": "diaries/kenkart_diary" })} ${renderComponent($$result3, "Card", $$Card, { "img": "/img/kriv/kriv_book.png", "name": "Kriv Coppernico", "enlace": "diaries/kriv_diary" })} ${renderComponent($$result3, "Card", $$Card, { "img": "/img/nyliss/nyliss_book.png", "name": "Nyliss Avacynn", "enlace": "diaries/nyliss_diary" })} ` })} </main> ` })} `;
}, "D:/PROJECTS/WEB/voidegon/src/pages/diaries.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/diaries.astro";
const $$url = "/diaries";

export { $$Diaries as default, $$file as file, $$url as url };
