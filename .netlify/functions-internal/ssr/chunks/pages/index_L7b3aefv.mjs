/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_MwcZ6mwF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_BAZMRUh_.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "| Voidegon", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex justify-center flex-col h-full" data-astro-cid-j7pv25f6> <h1 class="self-center font-[unbounded] text-4xl" data-astro-cid-j7pv25f6>Welcome to Voidegon!</h1> <p class="text-center mt-4" data-astro-cid-j7pv25f6>
Los acertijos en la Biblioteca (#roleplay) has de resolver.
</p> </main> ` })} `;
}, "D:/PROJECTS/WEB/voidegon/src/pages/index.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
