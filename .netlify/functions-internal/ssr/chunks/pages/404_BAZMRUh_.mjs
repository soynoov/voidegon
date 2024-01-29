/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot } from '../astro_MwcZ6mwF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                        */

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between hover:shadow-xl sticky top-0 bg-[--dark] z-50" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath === "" ? "active" : "", "class")} href="/" data-astro-cid-3ef6ksr2> <img src="/logo.png" alt="Logotype" class="w-auto h-10" data-astro-cid-3ef6ksr2> <h1 class="text-2xl font-bold mx-4 text-[--light]" data-astro-cid-3ef6ksr2>Voidegon</h1> </a> </div> <nav class="text-base text-[--light] font-medium" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath.includes("diaries") ? "active" : "", "class")} href="/diaries" data-astro-cid-3ef6ksr2>Diarios</a> </li> <li data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath.includes("characters") ? "active" : "", "class")} href="/characters" data-astro-cid-3ef6ksr2>Personajes</a> </li> <li data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath.includes("maps") ? "active" : "", "class")} href="/maps" data-astro-cid-3ef6ksr2>Mapas</a> </li> <li data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath.includes("extras") ? "active" : "", "class")} href="/extras" data-astro-cid-3ef6ksr2>Extras</a> </li> </ul> </nav> </header> `;
}, "D:/PROJECTS/WEB/voidegon/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Voidegon description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="mb-14"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/PROJECTS/WEB/voidegon/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "| Error 404", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex justify-center flex-col h-full items-center" data-astro-cid-zetdm5md> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Spain_traffic_signal_tp18.svg/1200px-Spain_traffic_signal_tp18.svg.png" alt="" data-astro-cid-zetdm5md> <h1 class="self-center font-[unbounded] text-4xl" data-astro-cid-zetdm5md>
Estamos creando Voidegon!
</h1> <p class="text-center mt-4" data-astro-cid-zetdm5md>
Esta página aún no esta disponible, ten paciencia y vuelve más tarde.
</p> </main> ` })} `;
}, "D:/PROJECTS/WEB/voidegon/src/pages/404.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
