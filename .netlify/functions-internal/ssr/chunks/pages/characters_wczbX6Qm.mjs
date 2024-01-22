/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot } from '../astro_MwcZ6mwF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between hover:shadow-xl sticky top-0 bg-[--dark] z-50" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath === "" ? "active" : "", "class")} href="/" data-astro-cid-3ef6ksr2> <img src="/logo.png" alt="Logotype" class="w-auto h-10" data-astro-cid-3ef6ksr2> <h1 class="text-xl font-bold mx-4 text-[--light]" data-astro-cid-3ef6ksr2>Voidegon</h1> </a> </div> <nav class="text-base text-[--light] font-medium" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath.includes("diaries") ? "active" : "", "class")} href="/diaries" data-astro-cid-3ef6ksr2>Diarios</a> </li> <li data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath.includes("characters") ? "active" : "", "class")} href="/characters" data-astro-cid-3ef6ksr2>Personajes</a> </li> <li data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath.includes("map") ? "active" : "", "class")} href="/map" data-astro-cid-3ef6ksr2>Mapas</a> </li> <li data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath.includes("extras") ? "active" : "", "class")} href="/extras" data-astro-cid-3ef6ksr2>Extras</a> </li> </ul> </nav> </header> `;
}, "D:/PROJECTS/WEB/voidegon/src/components/Header.astro", void 0);

const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="mb-14"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/PROJECTS/WEB/voidegon/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Article = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Article;
  const {
    title,
    img = "/img/background.png",
    center = "bottom",
    opacity = 0.5
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[30vh] flex justify-center items-center"${addAttribute({ background: `url(${img}) ${center}/cover` }, "style")}> <div class="absolute inset-0"${addAttribute({ opacity: `${opacity}`, background: "#000" }, "style")}></div> <h1 class="font-bold text-5xl font-[unbounded] text-[--light] text-center relative mx-8 text-balance"> ${title} </h1> </section>`;
}, "D:/PROJECTS/WEB/voidegon/src/components/Article.astro", void 0);

const $$Astro$3 = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Section;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="text-center p-4"> <h1 class="text-[--title] font-[pacifico] text-2xl my-4">${title}</h1> <h2 class="text-[--subtitle] font-[lobster] text-lg my-4">${subtitle}</h2> </section>`;
}, "D:/PROJECTS/WEB/voidegon/src/components/Section.astro", void 0);

const $$Astro$2 = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${maybeRenderHead()}<section class="my-4 mx-[10vw] flex justify-center flex-wrap gap-8"> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "D:/PROJECTS/WEB/voidegon/src/layouts/Menu.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { name, img, enlace } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center items-center flex-col hover:scale-105 transition-transform hover:shadow-xl rounded-xl"> <a${addAttribute(enlace, "href")}> <div class="size-[7.5cm] rounded-xl"${addAttribute({ background: `url(${img}) top/cover` }, "style")}></div> </a> <h3 class="my-2 font-[caveat] font-semibold text-lg">${name}</h3> </section>`;
}, "D:/PROJECTS/WEB/voidegon/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Characters = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Characters;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "| Personajes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Article", $$Article, { "title": "Personajes", "opacity": 0 })} ${renderComponent($$result2, "Section", $$Section, { "title": "Personajes Jugables" })} ${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "name": "Baren Valhice", "img": "/img/baren/baren.png", "enlace": "/characters/baren" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Enya Fendor", "img": "/img/enya/enya.png", "enlace": "/characters/enya" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Isidoro Matamoros", "img": "/img/isidoro/isidoro.png", "enlace": "/characters/isidoro" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Kenkart Silkson", "img": "/img/kenkart/kenkart.png", "enlace": "/characters/kenkart" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Kriv Coppernico", "img": "/img/kriv/kriv.png", "enlace": "/characters/kriv" })} ${renderComponent($$result3, "Card", $$Card, { "name": "Nyliss Avacynn", "img": "/img/nyliss/nyliss.png", "enlace": "/characters/nyliss" })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Personajes No Jugables", "subtitle": "Protagonistas" })} ${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "name": "Almawrid", "img": "/img/isidoro.png", "enlace": "/characters/isidoro" })} ` })} </main> ` })}`;
}, "D:/PROJECTS/WEB/voidegon/src/pages/characters.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/characters.astro";
const $$url = "/characters";

const characters = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Characters,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Article as $, $$Section as a, $$Menu as b, $$Card as c, $$Layout as d, characters as e };
