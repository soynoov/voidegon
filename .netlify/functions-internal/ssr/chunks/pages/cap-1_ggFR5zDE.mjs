/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_MwcZ6mwF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_BAZMRUh_.mjs';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Section;
  const { title, subtitle, color = "title" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="text-center p-4 pt-1"> <h1${addAttribute(`text-[--${color}] font-[pacifico] text-2xl my-4`, "class")}> ${title} </h1> <h2 class="text-[--subtitle] font-[lobster] text-lg my-4">${subtitle}</h2> </section>`;
}, "D:/PROJECTS/WEB/voidegon/src/components/Section.astro", void 0);

const $$Astro$1 = createAstro();
const $$Article = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Article;
  const {
    title,
    img = "/img/background.png",
    center = "bottom",
    opacity = 0.5
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[30vh] flex justify-center items-center cursor-default"${addAttribute({ background: `url(${img}) ${center}/cover` }, "style")}> <div class="absolute inset-0"${addAttribute({ opacity: `${opacity}`, background: "#000" }, "style")}></div> <h1 class="font-bold text-5xl font-[unbounded] text-[--light] text-center relative mx-8 text-balance"> ${title} </h1> </section>`;
}, "D:/PROJECTS/WEB/voidegon/src/components/Article.astro", void 0);

const $$Astro = createAstro();
const $$Cap1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cap1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "| Cap\xEDtulo 1", "data-astro-cid-iqksk4z7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-iqksk4z7> ${renderComponent($$result2, "Article", $$Article, { "title": "Cap\xEDtulo 1", "img": "/img/maps/murcia.png", "center": "top", "data-astro-cid-iqksk4z7": true })} <p class="m-8 px-14 mx-[10vw] text-justify text-balance mb-4" data-astro-cid-iqksk4z7>
Nos encontramos en las solitarias y tenebrosas tierras de
<span id="location" data-astro-cid-iqksk4z7>Murcia</span>, específicamente
<span id="date" data-astro-cid-iqksk4z7>20 000 años</span>
después de ███ ███████████ ██████████, también conocida como la creación de
<span id="event" class="font-bold" data-astro-cid-iqksk4z7>Voidegon</span>. En este momento, se
      avecina <span id="event" data-astro-cid-iqksk4z7>el renacimiento</span> de uno de los elementos en
      el planeta
<span id="location" data-astro-cid-iqksk4z7>Terra</span>. Sin embargo, este evento parece
      diferente a los █████████ ███████████ ████ ████████ ██ █████████
      ███████████. En esta ocasión, nuestros
<span id="group" data-astro-cid-iqksk4z7>protagonistas</span> tendrán un papel crucial en la dirección
      de la historia, tomando decisiones que modificarán el curso de los acontecimientos.
      Acompáñame en esta aventura para explorar sus elecciones y analizar las consecuencias:
</p> <details class="m-4 mx-[10vw] shadow-xl open:scale-105 transition-transform open:mb-8 open:pb-4" data-astro-cid-iqksk4z7> <summary class="list-none mb-4 text-[--warning]" data-astro-cid-iqksk4z7> ${renderComponent($$result2, "Section", $$Section, { "title": "Pr\xF3logo ~ Nacimiento del Drag\xF3n", "color": "warning", "data-astro-cid-iqksk4z7": true })} <hr class="w-[60vw] mx-auto p-2 -mt-8" data-astro-cid-iqksk4z7> </summary> <p class="-mt-8" data-astro-cid-iqksk4z7> <strong class="text-[--date]" data-astro-cid-iqksk4z7>[Día 0]:</strong>
Nuestros <span id="group" data-astro-cid-iqksk4z7>protagonistas</span>, en busca de su destino,
        han terminado en
<span id="location" data-astro-cid-iqksk4z7>las tierras olvidadas</span>.
<span id="hint" data-astro-cid-iqksk4z7>
Para conocer detalles específicos de cada uno, consulta sus
          respectivas fichas de personajes
</span>, pero vamos a introducirlos con un breve resumen:
</p> <ul data-astro-cid-iqksk4z7> <li data-astro-cid-iqksk4z7> <strong data-astro-cid-iqksk4z7>Baren Valhice</strong>: la semielfa druida, y
<strong data-astro-cid-iqksk4z7>Enya Fendor</strong>: la enana exploradora, ambas pérdidas en
          los rincones de <span id="location" data-astro-cid-iqksk4z7>Terra</span>, buscan refugio en <span id="location" data-astro-cid-iqksk4z7>Murcia</span>.
</li> <li data-astro-cid-iqksk4z7> <strong data-astro-cid-iqksk4z7>Kenkart Silkson</strong>, un enano pícaro ladrón cuya única
          meta es acumular riquezas, desterrado de todas partes y sin un lugar
          que lo acoja, acaba en
<span id="location" data-astro-cid-iqksk4z7>Murcia</span> con la esperanza de saquear tierras ya
          despojadas.
</li> <li data-astro-cid-iqksk4z7> <strong data-astro-cid-iqksk4z7>Isidoro Matamoros</strong>, un tiefling monje cuyo destino ha
          sido impuesto por sus padres, desterrado por su comportamiento, deberá
          aprender a valorar las cosas, y encontrará en <span id="location" data-astro-cid-iqksk4z7>Murcia</span> el lugar perfecto para esa lección.
</li> <li data-astro-cid-iqksk4z7> <strong data-astro-cid-iqksk4z7>Nyliss Avacyn</strong>, un mago aasimar cuyo destino fue
          forzado, se ve obligada a huir de su mundo y termina sentenciada en un
          lugar donde nunca la encontrarían.
</li> </ul> <p class="-mt-4" data-astro-cid-iqksk4z7>
Estos "héroes" convergen en la taberna de
<span id="location" data-astro-cid-iqksk4z7>Murcia</span>, conocida como "The Bold Owl". Ahora,
        enfrentados a un destino compartido, deben tomar decisiones cruciales en
        este nuevo día.
<br data-astro-cid-iqksk4z7>
Al despertar en lo que parece su nuevo hogar, todos bajan a la sala principal
        con la esperanza de encontrar algo para comer o beber.
<strong data-astro-cid-iqksk4z7>Enya</strong>, desesperada por la comida,
<span id="bad" data-astro-cid-iqksk4z7>decide tomar algo sin preguntar</span>. Sin embargo, el
        tabernero se da cuenta de su acción y, en lugar de molestarse, informa
        al grupo que la comida es gratuita, pero antes de intentar robarla,
        deberían intentar pedirla.
<br data-astro-cid-iqksk4z7>
El tabernero, un hombre experimentado, decide aprovechar la oportunidad para
        darles una charla sobre la historia de un dragón que está a punto de nacer
        en las montañas cercanas. Este dragón es buscado por muchos, por lo que ofrecen
        una gran cantidad de oro como recompensa por su cabeza. <strong data-astro-cid-iqksk4z7>Nyliss</strong>, sin sentirse cómoda con el tono del tabernero, <span id="bad" data-astro-cid-iqksk4z7>decide amenazarlo</span>.
<br data-astro-cid-iqksk4z7>
Molesto por ambas situaciones, el tabernero advierte al grupo que deben empezar
        a actuar con más cabeza y menos impulsividad si quieren sobrevivir en estas
        tierras inhóspitas. La advertencia queda flotando en el aire, pues nuestros
        aventureros solo asimilan las palabras del tabernero relacionadas con el
        oro.
</p> </details> <details class="m-4 mx-[10vw] shadow-xl open:scale-105 transition-transform" data-astro-cid-iqksk4z7> <summary class="list-none mb-4" data-astro-cid-iqksk4z7> ${renderComponent($$result2, "Section", $$Section, { "title": "Primer Act ~ Formando V\xEDnculos", "data-astro-cid-iqksk4z7": true })} <hr class="w-[60vw] mx-auto p-2 -mt-8" data-astro-cid-iqksk4z7> </summary> <p class="text-justify p-4 px-10 -mt-8 text-pretty" data-astro-cid-iqksk4z7>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas
        libero! Excepturi, repellat explicabo perferendis laborum blanditiis
        minus voluptate in id unde ipsam deserunt, amet dolores nihil
        accusantium voluptatum eveniet.
</p> </details> <details class="m-4 mx-[10vw] shadow-xl open:scale-105 transition-transform" data-astro-cid-iqksk4z7> <summary class="list-none mb-4" data-astro-cid-iqksk4z7> ${renderComponent($$result2, "Section", $$Section, { "title": "Segundo Act ~ Asentando Bases", "data-astro-cid-iqksk4z7": true })} <hr class="w-[60vw] mx-auto p-2 -mt-8" data-astro-cid-iqksk4z7> </summary> <p class="text-justify p-4 px-10 -mt-8 text-pretty" data-astro-cid-iqksk4z7>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas
        libero! Excepturi, repellat explicabo perferendis laborum blanditiis
        minus voluptate in id unde ipsam deserunt, amet dolores nihil
        accusantium voluptatum eveniet.
</p> </details> <details class="m-4 mx-[10vw] shadow-xl open:scale-105 transition-transform" data-astro-cid-iqksk4z7> <summary class="list-none mb-4 text-[--subtitle]" data-astro-cid-iqksk4z7> ${renderComponent($$result2, "Section", $$Section, { "title": "Tercer Act ~ Desafios de Tir", "color": "subtitle", "data-astro-cid-iqksk4z7": true })} <hr class="w-[60vw] mx-auto p-2 -mt-8" data-astro-cid-iqksk4z7> </summary> <p class="text-justify p-4 px-10 -mt-8 text-pretty" data-astro-cid-iqksk4z7>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas
        libero! Excepturi, repellat explicabo perferendis laborum blanditiis
        minus voluptate in id unde ipsam deserunt, amet dolores nihil
        accusantium voluptatum eveniet.
</p> </details> <details class="m-4 mx-[10vw] shadow-xl open:scale-105 transition-transform" data-astro-cid-iqksk4z7> <summary class="list-none mb-4 text-[--subtitle]" data-astro-cid-iqksk4z7> ${renderComponent($$result2, "Section", $$Section, { "title": "Cuarto Act ~ Soledad", "color": "subtitle", "data-astro-cid-iqksk4z7": true })} <hr class="w-[60vw] mx-auto p-2 -mt-8" data-astro-cid-iqksk4z7> </summary> <p class="text-justify p-4 px-10 -mt-8 text-pretty" data-astro-cid-iqksk4z7>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas
        libero! Excepturi, repellat explicabo perferendis laborum blanditiis
        minus voluptate in id unde ipsam deserunt, amet dolores nihil
        accusantium voluptatum eveniet.
</p> </details> <details class="m-4 mx-[10vw] shadow-xl open:scale-105 transition-transform" data-astro-cid-iqksk4z7> <summary class="list-none mb-4 text-[--grey]" data-astro-cid-iqksk4z7> ${renderComponent($$result2, "Section", $$Section, { "title": "Quinto Act ~ ?", "color": "grey", "data-astro-cid-iqksk4z7": true })} <hr class="w-[60vw] mx-auto p-2 -mt-8" data-astro-cid-iqksk4z7> </summary> <p class="text-justify p-4 px-10 -mt-8 text-pretty" data-astro-cid-iqksk4z7>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas
        libero! Excepturi, repellat explicabo perferendis laborum blanditiis
        minus voluptate in id unde ipsam deserunt, amet dolores nihil
        accusantium voluptatum eveniet.
</p> </details> </main> ` })} `;
}, "D:/PROJECTS/WEB/voidegon/src/pages/diaries/cap-1.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/diaries/cap-1.astro";
const $$url = "/diaries/cap-1";

const cap1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Cap1,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Article as $, $$Section as a, cap1 as c };
