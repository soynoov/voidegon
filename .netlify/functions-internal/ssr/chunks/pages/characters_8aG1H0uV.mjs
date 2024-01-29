/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderSlot, g as renderComponent } from '../astro_MwcZ6mwF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_BAZMRUh_.mjs';
import { $ as $$Article, a as $$Section } from './cap-1_ggFR5zDE.mjs';
/* empty css                               */

const $$Astro$3 = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`
  w-[80vw] mx-auto
  flex justify-center flex-wrap
  gap-8
`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "D:/PROJECTS/WEB/voidegon/src/layouts/Menu.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { name, img = "/img/background.png", enlace } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center items-center flex-col hover:scale-105 transition-transform hover:shadow-xl rounded-xl"> <a${addAttribute(enlace, "href")}> <div class="size-[7.5cm] rounded-lg"${addAttribute({ background: `url(${img}) top/cover` }, "style")}></div> </a> <h3 class="my-2 font-[caveat] font-semibold text-xl">${name}</h3> </section>`;
}, "D:/PROJECTS/WEB/voidegon/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$SmallCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SmallCard;
  const {
    name,
    img = "/img/background.png",
    enlace,
    center = "top",
    lock = false,
    bg_color = "gray"
  } = Astro2.props;
  let id;
  if (lock == true) {
    id = "lock";
  }
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`
  	flex justify-center items-center flex-col 
  	hover:scale-105 transition-transform hover:shadow-lg hover:bg-[--${bg_color}]
  	rounded-lg text-center
  `, "class")}${addAttribute(`${id}`, "id")} data-astro-cid-wzdcd64r> <a${addAttribute(enlace, "href")} data-astro-cid-wzdcd64r> <div class="size-[5.5cm] rounded-t-lg"${addAttribute({ background: `url(${img}) ${center}/cover` }, "style")} data-astro-cid-wzdcd64r></div> <h3 class="my-2 font-[caveat] font-semibold text-lg" data-astro-cid-wzdcd64r>${name}</h3> </a> </section> `;
}, "D:/PROJECTS/WEB/voidegon/src/components/SmallCard.astro", void 0);

const $$Astro = createAstro();
const $$Characters = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Characters;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "| Personajes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Article", $$Article, { "title": "Personajes", "opacity": 0 })} ${renderComponent($$result2, "Section", $$Section, { "title": "Personajes Jugables", "subtitle": "Fichas de Personaje" })} ${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "name": "Baren Valhice", "img": "/img/baren/baren.png", "enlace": "/characters/baren" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Enya Fendor", "img": "/img/enya/enya.png", "enlace": "/characters/enya" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Isidoro Matamoros", "img": "/img/isidoro/isidoro.png", "enlace": "/characters/isidoro" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Kenkart Silkson", "img": "/img/kenkart/kenkart.png", "enlace": "/characters/kenkart" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Kriv Coppernico", "img": "/img/kriv/kriv.png", "enlace": "/characters/kriv" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Nyliss Avacyn", "img": "/img/nyliss/nyliss.png", "enlace": "/characters/nyliss" })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Personajes No Jugables", "subtitle": "Lore Principal" })} ${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "name": "Almawrid", "img": "/img/npc/almawrid/almawrid.png", "enlace": "/characters/npc/almawrid" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Arnold", "img": "/img/npc/arnold/arnold.png", "enlace": "/characters/npc/arnold" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Kal'El", "img": "/img/npc/kalel/kalel.png", "enlace": "/characters/npc/kalel" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Azrael", "img": "/img/npc/kelthuzad/azrael.png", "enlace": "/characters/npc/azrael" })} ` })} ${renderComponent($$result2, "Section", $$Section, { "subtitle": "Los Enanos" })} <div class="pb-6"> ${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "name": "Var", "img": "/img/npc/tir/var/var.png", "enlace": "/characters/npc/var" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Rel", "img": "/img/npc/tir/rel/rel.png", "enlace": "/characters/npc/rel" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Tir", "img": "/img/npc/tir/tir.png", "enlace": "/characters/npc/tir" })} <div class="saturate-0 hover:saturate-100"> ${renderComponent($$result3, "Card", $$Card, { "name": "Kor", "img": "/img/npc/tir/kor/kor.png", "enlace": "/characters/npc/kor" })} </div> <div class="blur-sm hover:blur-none"> ${renderComponent($$result3, "Card", $$Card, { "name": "\u2588\u2588\u2588\u2588", "img": "/img/npc/tir/mun/mun.png", "enlace": "/characters/npc/mun" })} </div> <div class="blur-sm hover:blur-none"> ${renderComponent($$result3, "Card", $$Card, { "name": "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588", "img": "/img/background.png", "enlace": "" })} </div> ` })} </div> <div class="bg-[--gray] pb-6"> ${renderComponent($$result2, "Section", $$Section, { "subtitle": "Personajes Secundarios" })} ${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate` <div class="blur-sm hover:blur-none"> ${renderComponent($$result3, "SmallCard", $$SmallCard, { "name": "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588", "img": "/img/background.png", "enlace": "" })} </div> ` })} </div> </main> ` })}`;
}, "D:/PROJECTS/WEB/voidegon/src/pages/characters.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/characters.astro";
const $$url = "/characters";

const characters = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Characters,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Menu as $, $$Card as a, $$SmallCard as b, characters as c };
