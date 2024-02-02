/* empty css                               */
import 'html-escaper';
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_UCTP8GVI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */
/* empty css                        */

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between hover:shadow-xl sticky top-0 bg-[--dark] z-50" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath === "" ? "active" : "", "class")} href="/" data-astro-cid-3ef6ksr2> <img src="/logo.png" alt="Logotype" class="w-auto h-10" data-astro-cid-3ef6ksr2> <h1 class="text-2xl font-bold mx-4 text-[--light]" data-astro-cid-3ef6ksr2>Voidegon</h1> </a> </div> <nav class="flex justify-between items-center text-base text-[--light] font-medium" data-astro-cid-3ef6ksr2> <a href="/menu" data-astro-cid-3ef6ksr2> <svg class="hidden" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-3ef6ksr2></path> <path d="M4 6l16 0" data-astro-cid-3ef6ksr2></path> <path d="M4 12l16 0" data-astro-cid-3ef6ksr2></path> <path d="M4 18l16 0" data-astro-cid-3ef6ksr2></path> </svg> </a> <ul data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath.includes("diaries") ? "active" : "", "class")} href="/diaries" data-astro-cid-3ef6ksr2>
Diarios
</a> </li> <li data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath.includes("characters") ? "active" : "", "class")} href="/characters" data-astro-cid-3ef6ksr2>
Personajes
</a> </li> <li data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath.includes("maps") ? "active" : "", "class")} href="/maps" data-astro-cid-3ef6ksr2>
Mapas
</a> </li> <li data-astro-cid-3ef6ksr2> <a${addAttribute(currentPath.includes("extras") ? "active" : "", "class")} href="/extras" data-astro-cid-3ef6ksr2>
Extras
</a> </li> </ul> </nav> </header> `;
}, "D:/PROJECTS/WEB/voidegon/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/PROJECTS/WEB/voidegon/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Voidegon description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="pb-20"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "D:/PROJECTS/WEB/voidegon/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u3011 Voidegon \u25B8 Error 404", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex justify-center flex-col h-full items-center" data-astro-cid-zetdm5md> <svg class="text-[--warning] mb-4 font-bold" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zetdm5md><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-zetdm5md></path><path d="M12 9v4" data-astro-cid-zetdm5md></path><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" data-astro-cid-zetdm5md></path><path d="M12 16h.01" data-astro-cid-zetdm5md></path> </svg> <h1 class="self-center font-[unbounded] text-4xl" data-astro-cid-zetdm5md>¡Cuidado!</h1> <p class="text-center mt-4 w-80 text-pretty" data-astro-cid-zetdm5md>
Estas a punto de caerte en el vacio eterno de Voidegon, ten
			paciencia y vuelve más tarde.
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
