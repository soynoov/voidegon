/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute, l as renderTransition } from '../astro_UCTP8GVI.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_mP1SLpho.mjs';
import { c as $$HR } from './characters_L7EDUbr-.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Menu;
  const pathname = new URL(Astro2.request.url).pathname;
  pathname.slice(1);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u3011 Voidegon", "data-astro-cid-o5xiawde": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-o5xiawde${addAttribute(renderTransition($$result2, "7lpezxvv", "slide", ""), "data-astro-transition-scope")}> <nav data-astro-cid-o5xiawde> <ul class="flex flex-col items-center mt-20" data-astro-cid-o5xiawde> <li data-astro-cid-o5xiawde> <a href="/diaries" data-astro-cid-o5xiawde>Diarios</a> </li> ${renderComponent($$result2, "HR", $$HR, { "data-astro-cid-o5xiawde": true })} <li data-astro-cid-o5xiawde> <a href="/characters" data-astro-cid-o5xiawde> Personajes</a> </li> ${renderComponent($$result2, "HR", $$HR, { "data-astro-cid-o5xiawde": true })} <li data-astro-cid-o5xiawde> <a href="/maps" data-astro-cid-o5xiawde> Mapas</a> </li> ${renderComponent($$result2, "HR", $$HR, { "data-astro-cid-o5xiawde": true })} <li data-astro-cid-o5xiawde> <a href="/extras" data-astro-cid-o5xiawde> Extras</a> </li> </ul> </nav> </main>  ` })}`;
}, "D:/PROJECTS/WEB/voidegon/src/pages/menu.astro", "self");

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/menu.astro";
const $$url = "/menu";

export { $$Menu as default, $$file as file, $$url as url };
