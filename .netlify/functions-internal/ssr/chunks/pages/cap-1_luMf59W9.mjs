/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_UCTP8GVI.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_mP1SLpho.mjs';
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u3011 Voidegon \u25B8 Cap\xEDtulo 1", "data-astro-cid-iqksk4z7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-iqksk4z7> ${renderComponent($$result2, "Article", $$Article, { "title": "Cap\xEDtulo 1", "img": "/img/maps/murcia.png", "center": "top", "data-astro-cid-iqksk4z7": true })} <p class="m-8 px-14 mx-[10vw] text-justify text-balance mb-4" data-astro-cid-iqksk4z7>
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
<strong id="heros" data-astro-cid-iqksk4z7>héroes</strong> tendrán un papel crucial en la dirección
      de la historia, tomando decisiones que modificarán el curso de los acontecimientos.
      Acompáñame en esta aventura para explorar sus elecciones y analizar las consecuencias:
</p> <details class="m-4 mx-[10vw] shadow-xl open:scale-105 transition-transform open:lg:mb-10 open:pb-4" data-astro-cid-iqksk4z7> <summary class="list-none mb-4 text-[--warning]" data-astro-cid-iqksk4z7> ${renderComponent($$result2, "Section", $$Section, { "title": "Pr\xF3logo ~ Nacimiento del Drag\xF3n", "color": "warning", "data-astro-cid-iqksk4z7": true })} <hr class="w-[60vw] mx-auto p-2 -mt-8" data-astro-cid-iqksk4z7> </summary> <p class="-mt-8" data-astro-cid-iqksk4z7> <strong class="text-[--date]" data-astro-cid-iqksk4z7>[Día 0]:</strong>
Nuestros "<strong id="heros" data-astro-cid-iqksk4z7>héroes</strong>", en busca de su destino,
        han terminado en
<span id="location" data-astro-cid-iqksk4z7>las tierras olvidadas</span>.
<span id="hint" data-astro-cid-iqksk4z7>
Para conocer detalles específicos de cada uno, consulta sus
          respectivas fichas de personajes
</span>, pero vamos a introducirlos con un breve resumen:
</p> <ul data-astro-cid-iqksk4z7> <li data-astro-cid-iqksk4z7> <strong id="hero" data-astro-cid-iqksk4z7>Baren Valhice</strong>: la semielfa druida, y
<strong id="hero" data-astro-cid-iqksk4z7>Enya Fendor</strong>: la enana exploradora, ambas
          pérdidas en los rincones de <span id="location" data-astro-cid-iqksk4z7>Terra</span>, buscan
          refugio en <span id="location" data-astro-cid-iqksk4z7>Murcia</span>.
</li> <li data-astro-cid-iqksk4z7> <strong id="hero" data-astro-cid-iqksk4z7>Kenkart Silkson</strong>, un enano pícaro ladrón
          cuya única meta es acumular riquezas, desterrado de todas partes y sin
          un lugar que lo acoja, acaba en
<span id="location" data-astro-cid-iqksk4z7>Murcia</span> con la esperanza de saquear tierras ya
          despojadas.
</li> <li data-astro-cid-iqksk4z7> <strong id="hero" data-astro-cid-iqksk4z7>Isidoro Matamoros</strong>, un tiefling monje cuyo
          destino ha sido impuesto por sus padres, desterrado por su
          comportamiento, deberá aprender a valorar las cosas, y encontrará en
<span id="location" data-astro-cid-iqksk4z7>Murcia</span> el lugar perfecto para esa lección.
</li> <li data-astro-cid-iqksk4z7> <strong id="hero" data-astro-cid-iqksk4z7>Nyliss Avacyn</strong>, un mago aasimar cuyo destino
          fue forzado, se ve obligada a huir de su mundo y termina sentenciada
          en un lugar donde nunca la encontrarían.
</li> </ul> <p class="-mt-4" data-astro-cid-iqksk4z7>
Estos "<strong id="heros" data-astro-cid-iqksk4z7>héroes</strong>" convergen en la taberna de
<span id="location" data-astro-cid-iqksk4z7>Murcia</span>. Ahora, enfrentados a un destino
        compartido, deben tomar decisiones cruciales en este nuevo día.
<br data-astro-cid-iqksk4z7>
Al despertar en lo que parece su nuevo hogar, todos bajan a la sala principal
        con la esperanza de encontrar algo para comer o beber.
<strong id="hero" data-astro-cid-iqksk4z7>Enya</strong>, desesperada por la comida,
<span id="bad" data-astro-cid-iqksk4z7>decide tomar algo sin preguntar</span>. Sin embargo, el
        tabernero se da cuenta de su acción y, en lugar de molestarse, informa
        al grupo que la comida es gratuita, pero antes de intentar robarla,
        deberían intentar pedirla.
<br data-astro-cid-iqksk4z7>
El tabernero, un hombre experimentado, decide aprovechar la oportunidad para
        darles una charla sobre la historia de un dragón que está a punto de nacer
        en las montañas cercanas. Este dragón es buscado por muchos, por lo que ofrecen
        una gran cantidad de oro como recompensa por su cabeza.
<strong id="hero" data-astro-cid-iqksk4z7>Nyliss</strong>, sin sentirse cómoda con el tono del
        tabernero,
<span id="bad" data-astro-cid-iqksk4z7>decide amenazarlo</span>.
<br data-astro-cid-iqksk4z7>
Molesto por ambas situaciones, el tabernero advierte al grupo que deben empezar
        a actuar con más cabeza y menos impulsividad si quieren sobrevivir en estas
        tierras inhóspitas. La advertencia queda flotando en el aire, pues nuestros
        aventureros solo asimilan las palabras del tabernero relacionadas con el
        oro.
<br data-astro-cid-iqksk4z7><br data-astro-cid-iqksk4z7>
Decididos a obtener el oro prometido, nuestros
<strong id="heros" data-astro-cid-iqksk4z7>héroes</strong> se encaminan hacia la aldea en busca de
        una manera de cumplir con la misión. En su trayecto, se cruzan con un par
        de zombis aparentemente inofensivos. A pesar de ello,
<span id="neutral" data-astro-cid-iqksk4z7>deciden enfrentarse a los no muertos</span> antes de continuar
        hacia la aldea. No desaprovechan la oportunidad y saquean los cuerpos de
        los zombis. Durante esta acción,
<strong id="hero" data-astro-cid-iqksk4z7>Kenkart</strong> descubre
<span id="object" data-astro-cid-iqksk4z7>un anillo</span> que captura su atención y
<span id="bad" data-astro-cid-iqksk4z7>
decide guardárselo sin compartir la información con el resto del grupo
</span>. Una vez en la aldea, los <strong id="heros" data-astro-cid-iqksk4z7>héroes</strong> se dirigen
        directamente a <span id="location" data-astro-cid-iqksk4z7>la biblioteca</span>.
<br data-astro-cid-iqksk4z7><br data-astro-cid-iqksk4z7>
Estando en <span id="location" data-astro-cid-iqksk4z7>la biblioteca</span>, nuestros
<strong id="heros" data-astro-cid-iqksk4z7>héroes</strong> se topan con un montón de libros en mal
        estado. Revisando dichos libros para encontrar alguna respuesta, escuchan
        una voz aterradora alertando a nuestros
<strong id="heros" data-astro-cid-iqksk4z7>héroes</strong> que se alejen de allí. Sin embargo, encuentran
        la fuente de esa voz, que resulta ser una pequeña araña con poderes psíquicos.
        Después de una conversación con la araña, esta decide ayudar a nuestros
<strong id="heros" data-astro-cid-iqksk4z7>héroes</strong> otorgándoles un papel con respuestas.
<span id="hint" data-astro-cid-iqksk4z7>("Ojala un heroe lo pueda parar, pues su muerte la catastrofe
          traerá")
</span> <br data-astro-cid-iqksk4z7> <strong id="hero" data-astro-cid-iqksk4z7>Kenkart</strong>, con un miedo irracional hacia las
        arañas,
<span id="bad" data-astro-cid-iqksk4z7>decide asesinarla brutalmente</span>, lo que hace que
<strong id="hero" data-astro-cid-iqksk4z7>Baren</strong>, amante de los animales, se entristezca
        y enfurezca con
<strong id="hero" data-astro-cid-iqksk4z7>Kenkart</strong>.
<br data-astro-cid-iqksk4z7>
Nuestros <strong id="heros" data-astro-cid-iqksk4z7>héroes</strong>, sin saber qué hacer con el
        papel, deciden preguntar a un par de enanos que pasaban por allí. Uno de
        los enanos les da una respuesta, pero a cambio decide quedarse con el
        papel.
<br data-astro-cid-iqksk4z7> <strong id="hero" data-astro-cid-iqksk4z7>Nyliss</strong>, llena de odio, decide coger al enano
        y elevarlo a una altura suficiente como para que la caída acabe con el
        enano. <strong id="hero" data-astro-cid-iqksk4z7>Nyliss</strong>, sin una pizca de bondad o
        paciencia,
<span id="bad" data-astro-cid-iqksk4z7>acaba soltando al enano, acabando con su vida</span> y cogiendo
        el papel del cadáver. El otro enano, asustado y temblando, decide irse para
        alertar el comportamiento de los <strong id="heros" data-astro-cid-iqksk4z7>héroes</strong> a los
        habitantes de <span id="location" data-astro-cid-iqksk4z7>Murcia</span>.
<strong id="hero" data-astro-cid-iqksk4z7>Kenkart</strong> e <strong id="hero" data-astro-cid-iqksk4z7>Isidoro</strong> <span id="bad" data-astro-cid-iqksk4z7>saquean el cuerpo del enano muerto</span> antes de que este
        sea engullido por la tierra, pero no parece que a nadie le importe este suceso.
        Nuestros <strong id="heros" data-astro-cid-iqksk4z7>héroes</strong> deciden seguir adelante
<span id="bad" data-astro-cid-iqksk4z7>sin importarles nada en absoluto</span>.
<br data-astro-cid-iqksk4z7><br data-astro-cid-iqksk4z7>
Estando de camino, se topan con una <span id="location" data-astro-cid-iqksk4z7>iglesia</span> aparentemente
        pequeña. <strong id="hero" data-astro-cid-iqksk4z7>Nyliss</strong> decide quedarse afuera para estudiar,
        mientras que el resto entra en busca de algo interesante. Al adentrarse,
        descubren un pasillo enorme con una vidriera gigantesca al fondo. Frente
        a la vidriera, encuentran un atril con un libro. Sorprendentemente,
<span id="location" data-astro-cid-iqksk4z7>la iglesia</span> es mucho más grande por dentro en comparación
        con su apariencia exterior. Sin embargo,
<span id="neutral" data-astro-cid-iqksk4z7>
parece que a nuestros
<strong id="heros" data-astro-cid-iqksk4z7>héroes</strong> no les preocupa en absoluto</span>, y se acercan a leer el libro del atril.
<br data-astro-cid-iqksk4z7> <span id="hint" data-astro-cid-iqksk4z7>
("Al leer esto, el espíritu vendrá; el agua bendita deberás usar")
</span> <br data-astro-cid-iqksk4z7>
De repente, un <span id="monster" data-astro-cid-iqksk4z7>espiritu</span> maligno aparece ante ellos.
        Rápidamente, nuestros
<strong id="heros" data-astro-cid-iqksk4z7>héroes</strong> toman agua bendita y se la echan encima.
        Sin embargo, esto solo empeora las cosas, ya que
<span id="bad" data-astro-cid-iqksk4z7>
el <span id="monster" data-astro-cid-iqksk4z7>espiritu</span> se enfada y cierra puertas y ventanas.
</span> <span id="neutral" data-astro-cid-iqksk4z7> <strong id="hero" data-astro-cid-iqksk4z7>Enya</strong> logra escapar antes de que esto suceda</span>, pero el resto de nuestros <strong id="heros" data-astro-cid-iqksk4z7>héroes</strong> quedan aislados
        y una neblina negra los engulle poco a poco. <br data-astro-cid-iqksk4z7>
Sin saber qué hacer, nuestros <strong id="heros" data-astro-cid-iqksk4z7>héroes</strong> buscan una
        salida. Había una trampilla en uno de los pilares, y deciden bajar por ella.
        Al hacerlo, se encuentran un cofre. Intentan abrirlo, pero resulta ser un
<span id="monster" data-astro-cid-iqksk4z7>mimo</span>, un ser que adopta cualquier forma.
        Nuestros <strong id="heros" data-astro-cid-iqksk4z7>héroes</strong> <span id="neutral" data-astro-cid-iqksk4z7>rápidamente le golpean</span>, a lo que el
<span id="monster" data-astro-cid-iqksk4z7>mimo</span> responde:
<span id="phrase" data-astro-cid-iqksk4z7>"Se puede saber qué coño hacéis pegándome sin más, las respuestas
          debajo mía tenéis que buscar, insensatos"</span>. Pues debajo del <span id="monster" data-astro-cid-iqksk4z7>mimo</span> se encontraba una frase.
<span id="hint" data-astro-cid-iqksk4z7>
("El objetivo no es el que crees, pues alguien tendrá que beber")
</span> <br data-astro-cid-iqksk4z7>
Mientras <strong id="hero" data-astro-cid-iqksk4z7>Baren</strong> corre a buscar algo de agua bendita
        sobrante, <strong id="hero" data-astro-cid-iqksk4z7>Enya</strong> intenta buscar la forma de romper
        la ventana para que el resto pueda escapar.
<span id="good" data-astro-cid-iqksk4z7> <strong id="hero" data-astro-cid-iqksk4z7>Enya</strong> y <strong id="hero" data-astro-cid-iqksk4z7>Baren</strong> consiguen
          sus objetivos</span>, y todos logran escapar, pero <strong id="hero" data-astro-cid-iqksk4z7>Isidoro</strong>
y <strong id="hero" data-astro-cid-iqksk4z7>Kenkart</strong> deciden quedarse atrás al descubrir
        que el archimago <span id="name" data-astro-cid-iqksk4z7>Azrael</span> había estado detrás de todo
        esto.
<strong id="hero" data-astro-cid-iqksk4z7>Kekanrt</strong> descubre que la araña que mató era suya
        y, viendo su increíble poder, decide huir.
<strong id="hero" data-astro-cid-iqksk4z7>Isidoro</strong>, por otro lado, al ver dicho poder,
<span id="bad" data-astro-cid-iqksk4z7>decide trabajar para él y traicionar a su equipo</span>.
        Después del revuelo, finalmente deciden partir hacia la
<span id="location" data-astro-cid-iqksk4z7>Cueva del Dragón</span>.
</p> </details> </main> <details class="m-4 mx-[10vw] shadow-xl open:scale-105 transition-transform" data-astro-cid-iqksk4z7> <summary class="list-none mb-4" data-astro-cid-iqksk4z7> ${renderComponent($$result2, "Section", $$Section, { "title": "Primer Act ~ Formando V\xEDnculos", "data-astro-cid-iqksk4z7": true })} <hr class="w-[60vw] mx-auto p-2 -mt-8" data-astro-cid-iqksk4z7> </summary> <p class="text-justify p-4 px-10 -mt-8 text-pretty" data-astro-cid-iqksk4z7>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas
      libero! Excepturi, repellat explicabo perferendis laborum blanditiis minus
      voluptate in id unde ipsam deserunt, amet dolores nihil accusantium
      voluptatum eveniet.
</p> </details> <details class="m-4 mx-[10vw] shadow-xl open:scale-105 transition-transform" data-astro-cid-iqksk4z7> <summary class="list-none mb-4" data-astro-cid-iqksk4z7> ${renderComponent($$result2, "Section", $$Section, { "title": "Segundo Act ~ Asentando Bases", "data-astro-cid-iqksk4z7": true })} <hr class="w-[60vw] mx-auto p-2 -mt-8" data-astro-cid-iqksk4z7> </summary> <p class="text-justify p-4 px-10 -mt-8 text-pretty" data-astro-cid-iqksk4z7>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas
      libero! Excepturi, repellat explicabo perferendis laborum blanditiis minus
      voluptate in id unde ipsam deserunt, amet dolores nihil accusantium
      voluptatum eveniet.
</p> </details> <details class="m-4 mx-[10vw] shadow-xl open:scale-105 transition-transform" data-astro-cid-iqksk4z7> <summary class="list-none mb-4 text-[--subtitle]" data-astro-cid-iqksk4z7> ${renderComponent($$result2, "Section", $$Section, { "title": "Tercer Act ~ Desafios de Tir", "color": "subtitle", "data-astro-cid-iqksk4z7": true })} <hr class="w-[60vw] mx-auto p-2 -mt-8" data-astro-cid-iqksk4z7> </summary> <p class="text-justify p-4 px-10 -mt-8 text-pretty" data-astro-cid-iqksk4z7>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas
      libero! Excepturi, repellat explicabo perferendis laborum blanditiis minus
      voluptate in id unde ipsam deserunt, amet dolores nihil accusantium
      voluptatum eveniet.
</p> </details> <details class="m-4 mx-[10vw] shadow-xl open:scale-105 transition-transform" data-astro-cid-iqksk4z7> <summary class="list-none mb-4 text-[--subtitle]" data-astro-cid-iqksk4z7> ${renderComponent($$result2, "Section", $$Section, { "title": "Cuarto Act ~ Soledad", "color": "subtitle", "data-astro-cid-iqksk4z7": true })} <hr class="w-[60vw] mx-auto p-2 -mt-8" data-astro-cid-iqksk4z7> </summary> <p class="text-justify p-4 px-10 -mt-8 text-pretty" data-astro-cid-iqksk4z7>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas
      libero! Excepturi, repellat explicabo perferendis laborum blanditiis minus
      voluptate in id unde ipsam deserunt, amet dolores nihil accusantium
      voluptatum eveniet.
</p> </details> <details class="m-4 mx-[10vw] shadow-xl open:scale-105 transition-transform" data-astro-cid-iqksk4z7> <summary class="list-none mb-4 text-[--grey]" data-astro-cid-iqksk4z7> ${renderComponent($$result2, "Section", $$Section, { "title": "Quinto Act ~ ?", "color": "grey", "data-astro-cid-iqksk4z7": true })} <hr class="w-[60vw] mx-auto p-2 -mt-8" data-astro-cid-iqksk4z7> </summary> <p class="text-justify p-4 px-10 -mt-8 text-pretty" data-astro-cid-iqksk4z7>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas
      libero! Excepturi, repellat explicabo perferendis laborum blanditiis minus
      voluptate in id unde ipsam deserunt, amet dolores nihil accusantium
      voluptatum eveniet.
</p> </details> ` })} `;
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
