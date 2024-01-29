/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_MwcZ6mwF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_BAZMRUh_.mjs';
import 'clsx';
/* empty css                            */
/* empty css                            */
import { a as $$Section } from './cap-1_ggFR5zDE.mjs';

const $$Astro$4 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Title;
  const {
    title,
    img = "/img/background.png",
    center = "bottom",
    opacity = 0.5
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[30vh] flex justify-center items-center cursor-default"${addAttribute({ background: `url(${img}) ${center}/cover` }, "style")}> <div class="absolute inset-0"${addAttribute({ opacity: `${opacity}`, background: "#000" }, "style")}></div> <h1 class="font-bold text-5xl font-[caveat] text-[--light] text-center relative mx-8 text-balance"> ${title} </h1> </section>`;
}, "D:/PROJECTS/WEB/voidegon/src/components/Title.astro", void 0);

const $$Astro$3 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Experience;
  const { exp } = Astro2.props;
  let porcentaje = 0;
  let level = 0;
  let expUp = 0;
  function medirXP(exp2) {
    while (exp2 >= expUp) {
      level++;
      expUp += 300;
    }
    return { level, expUp };
  }
  function medirPor(exp2) {
    porcentaje = Math.floor(exp2 / expUp * 100);
    return porcentaje;
  }
  medirXP(exp);
  medirPor(exp);
  console.log(porcentaje);
  return renderTemplate`${maybeRenderHead()}<article class="grid grid-cols-6 justify-around items-center" data-astro-cid-xpq65ryk> <section class="col-span-2 justify-self-center" data-astro-cid-xpq65ryk> <h6 class="text-[--title] font-[unbounded]" data-astro-cid-xpq65ryk>Monk</h6> </section> <section class="flex justify-between items-center col-span-2" data-astro-cid-xpq65ryk> <p class="whitespace-nowrap" data-astro-cid-xpq65ryk>Nivel ${level}</p> <div class="bg-[--dark] w-[20vw] rounded-xl h-2 flex" data-astro-cid-xpq65ryk> <div${addAttribute(`rounded-xl bg-[--date] w-[59%]`, "class")} data-astro-cid-xpq65ryk></div> </div> <p data-astro-cid-xpq65ryk>${exp}/${expUp}</p> </section> <section class="col-span-2 justify-self-center" data-astro-cid-xpq65ryk> <h6 class="text-[--subtitle] font-[unbounded]" data-astro-cid-xpq65ryk>Tiefling</h6> </section> </article> `;
}, "D:/PROJECTS/WEB/voidegon/src/components/Experience.astro", void 0);

const $$Astro$2 = createAstro();
const $$Stats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Stats;
  const { fue, des, con, int, sab, car, mod, com, modcom = 2 } = Astro2.props;
  function modificadorStats(stat, x) {
    let modificador = 0;
    x -= 1;
    stat += mod[x];
    if (stat > 10) {
      modificador = Math.floor((stat - 10) / 2);
    } else if (stat > 0 && stat <= 10) {
      modificador = -Math.ceil((10 - stat) / 2);
    } else if (stat <= 0) {
      modificador = -5;
    }
    if (com[x] == 1) {
      modificador += modcom;
    }
    if (modificador >= 0) {
      return `+${modificador}`;
    }
    return `${modificador}`;
  }
  function sumarStats(x) {
    x -= 1;
    if (mod[x] != 0) {
      return `+${mod[x]}`;
    }
  }
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`
    w-full p-4
    flex gap-4 flex-wrap
    justify-center items-center
    cursor-default
`, "class")} data-astro-cid-bhxv2qxz> <div data-astro-cid-bhxv2qxz> <h3${addAttribute(com[1 - 1] == 1 ? "x" : "", "id")} data-astro-cid-bhxv2qxz>FUE</h3> <div data-astro-cid-bhxv2qxz> <h6 data-astro-cid-bhxv2qxz>${fue}</h6> <p data-astro-cid-bhxv2qxz>${sumarStats(1)}</p> </div> <div data-astro-cid-bhxv2qxz> <h5 data-astro-cid-bhxv2qxz>[${modificadorStats(fue, 1)}]</h5> </div> </div> <div data-astro-cid-bhxv2qxz> <h3${addAttribute(com[2 - 1] == 1 ? "x" : "", "id")} data-astro-cid-bhxv2qxz>DES</h3> <div data-astro-cid-bhxv2qxz> <h6 data-astro-cid-bhxv2qxz>${des}</h6> <p data-astro-cid-bhxv2qxz>${sumarStats(2)}</p> </div> <div data-astro-cid-bhxv2qxz> <h5 data-astro-cid-bhxv2qxz>[${modificadorStats(des, 2)}]</h5> </div> </div> <div data-astro-cid-bhxv2qxz> <h3${addAttribute(com[3 - 1] == 1 ? "x" : "", "id")} data-astro-cid-bhxv2qxz>CON</h3> <div data-astro-cid-bhxv2qxz> <h6 data-astro-cid-bhxv2qxz>${con}</h6> <p data-astro-cid-bhxv2qxz>${sumarStats(3)}</p> </div> <div data-astro-cid-bhxv2qxz> <h5 data-astro-cid-bhxv2qxz>[${modificadorStats(con, 3)}]</h5> </div> </div> <div data-astro-cid-bhxv2qxz> <h3${addAttribute(com[4 - 1] == 1 ? "x" : "", "id")} data-astro-cid-bhxv2qxz>INT</h3> <div data-astro-cid-bhxv2qxz> <h6 data-astro-cid-bhxv2qxz>${int}</h6> <p data-astro-cid-bhxv2qxz>${sumarStats(4)}</p> </div> <div data-astro-cid-bhxv2qxz> <h5 data-astro-cid-bhxv2qxz>[${modificadorStats(int, 4)}]</h5> </div> </div> <div data-astro-cid-bhxv2qxz> <h3${addAttribute(com[5 - 1] == 1 ? "x" : "", "id")} data-astro-cid-bhxv2qxz>SAB</h3> <div data-astro-cid-bhxv2qxz> <h6 data-astro-cid-bhxv2qxz>${sab}</h6> <p data-astro-cid-bhxv2qxz>${sumarStats(5)}</p> </div> <div data-astro-cid-bhxv2qxz> <h5 data-astro-cid-bhxv2qxz>[${modificadorStats(sab, 5)}]</h5> </div> </div> <div data-astro-cid-bhxv2qxz> <h3${addAttribute(com[6 - 1] == 1 ? "x" : "", "id")} data-astro-cid-bhxv2qxz>CAR</h3> <div data-astro-cid-bhxv2qxz> <h6 data-astro-cid-bhxv2qxz>${car}</h6> <p data-astro-cid-bhxv2qxz>${sumarStats(6)}</p> </div> <div data-astro-cid-bhxv2qxz> <h5 data-astro-cid-bhxv2qxz>[${modificadorStats(car, 6)}]</h5> </div> </div> </section> `;
}, "D:/PROJECTS/WEB/voidegon/src/components/Stats.astro", void 0);

const $$Astro$1 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center flex-col" data-astro-cid-ab4ihpzs> <table class="m-4 p-4" data-astro-cid-ab4ihpzs> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Acrobacias</td> <td data-astro-cid-ab4ihpzs>(DES)</td> <td data-astro-cid-ab4ihpzs>[-]</td> <td data-astro-cid-ab4ihpzs>+2</td> <td data-astro-cid-ab4ihpzs>+2</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Atletismo</td> <td data-astro-cid-ab4ihpzs>(FUE)</td> <td data-astro-cid-ab4ihpzs>[-]</td> <td data-astro-cid-ab4ihpzs>+1</td> <td data-astro-cid-ab4ihpzs>+1</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>C. Arcano</td> <td data-astro-cid-ab4ihpzs>(INT)</td> <td data-astro-cid-ab4ihpzs>[x]</td> <td data-astro-cid-ab4ihpzs>+1</td> <td data-astro-cid-ab4ihpzs>+3</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Engaño</td> <td data-astro-cid-ab4ihpzs>(CAR)</td> <td data-astro-cid-ab4ihpzs>[x]</td> <td data-astro-cid-ab4ihpzs>+0</td> <td data-astro-cid-ab4ihpzs>+2</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Historia</td> <td data-astro-cid-ab4ihpzs>(INT)</td> <td data-astro-cid-ab4ihpzs>[-]</td> <td data-astro-cid-ab4ihpzs>+0</td> <td data-astro-cid-ab4ihpzs>+0</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Interpretación</td> <td data-astro-cid-ab4ihpzs>(CAR)</td> <td data-astro-cid-ab4ihpzs>[-]</td> <td data-astro-cid-ab4ihpzs>+0</td> <td data-astro-cid-ab4ihpzs>+0</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Intimidación</td> <td data-astro-cid-ab4ihpzs>(CAR)</td> <td data-astro-cid-ab4ihpzs>[-]</td> <td data-astro-cid-ab4ihpzs>+0</td> <td data-astro-cid-ab4ihpzs>+0</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Investigación</td> <td data-astro-cid-ab4ihpzs>(INT)</td> <td data-astro-cid-ab4ihpzs>[-]</td> <td data-astro-cid-ab4ihpzs>+2</td> <td data-astro-cid-ab4ihpzs>+2</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Juego de Manos</td> <td data-astro-cid-ab4ihpzs>(DES)</td> <td data-astro-cid-ab4ihpzs>[-]</td> <td data-astro-cid-ab4ihpzs>+0</td> <td data-astro-cid-ab4ihpzs>+0</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Medicina</td> <td data-astro-cid-ab4ihpzs>(SAB)</td> <td data-astro-cid-ab4ihpzs>[x]</td> <td data-astro-cid-ab4ihpzs>+1</td> <td data-astro-cid-ab4ihpzs>+3</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Naturaleza</td> <td data-astro-cid-ab4ihpzs>(INT)</td> <td data-astro-cid-ab4ihpzs>[-]</td> <td data-astro-cid-ab4ihpzs>+0</td> <td data-astro-cid-ab4ihpzs>+0</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Percepción</td> <td data-astro-cid-ab4ihpzs>(SAB)</td> <td data-astro-cid-ab4ihpzs>[-]</td> <td data-astro-cid-ab4ihpzs>+1</td> <td data-astro-cid-ab4ihpzs>+1</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Perspicacia</td> <td data-astro-cid-ab4ihpzs>(SAB)</td> <td data-astro-cid-ab4ihpzs>[-]</td> <td data-astro-cid-ab4ihpzs>+0</td> <td data-astro-cid-ab4ihpzs>+0</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Persuasión</td> <td data-astro-cid-ab4ihpzs>(CAR)</td> <td data-astro-cid-ab4ihpzs>[-]</td> <td data-astro-cid-ab4ihpzs>+0</td> <td data-astro-cid-ab4ihpzs>+0</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Religión</td> <td data-astro-cid-ab4ihpzs>(INT)</td> <td data-astro-cid-ab4ihpzs>[-]</td> <td data-astro-cid-ab4ihpzs>+0</td> <td data-astro-cid-ab4ihpzs>+0</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Sigilo</td> <td data-astro-cid-ab4ihpzs>(DES)</td> <td data-astro-cid-ab4ihpzs>[-]</td> <td data-astro-cid-ab4ihpzs>+0</td> <td data-astro-cid-ab4ihpzs>+0</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>Supervivencia</td> <td data-astro-cid-ab4ihpzs>(SAB)</td> <td data-astro-cid-ab4ihpzs>[x]</td> <td data-astro-cid-ab4ihpzs>+0</td> <td data-astro-cid-ab4ihpzs>+2</td> </tr> <tr data-astro-cid-ab4ihpzs> <td data-astro-cid-ab4ihpzs>T. con Animales</td> <td data-astro-cid-ab4ihpzs>(SAB)</td> <td data-astro-cid-ab4ihpzs>[-]</td> <td data-astro-cid-ab4ihpzs>+0</td> <td data-astro-cid-ab4ihpzs>+0</td> </tr> </table> <hr data-astro-cid-ab4ihpzs> <div class="flex justify-center m-4" data-astro-cid-ab4ihpzs> <p class="text-[--subtitle] font-semibold" data-astro-cid-ab4ihpzs>
Percepción Pasiva: <span class="text-[--date] font-['pacifico'] font-normal" data-astro-cid-ab4ihpzs>11</span> </p> </div> </div> `;
}, "D:/PROJECTS/WEB/voidegon/src/components/Skills.astro", void 0);

const $$Astro = createAstro();
const $$Isidoro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Isidoro;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "| Isidoro Matamoros", "data-astro-cid-t5h5ngjb": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, { "title": "Isidoro Matamoros", "img": "/img/isidoro/bg_isidoro.png", "data-astro-cid-t5h5ngjb": true })} ${maybeRenderHead()}<main${addAttribute(`
    grid grid-cols-subgrid grid-flow-row-dense gap-4
    mx-auto w-[80vw]
  `, "class")} data-astro-cid-t5h5ngjb> <div class="col-span-6 mt-4 w-full" data-astro-cid-t5h5ngjb> ${renderComponent($$result2, "Experience", $$Experience, { "exp": 355, "data-astro-cid-t5h5ngjb": true })} </div> <div class="col-span-1 row-span-1 size-fit pb-4 p-2" id="dark" data-astro-cid-t5h5ngjb> ${renderComponent($$result2, "Stats", $$Stats, { "fue": 14, "des": 18, "con": 12, "int": 10, "sab": 10, "car": 8, "mod": [0, 0, 0, 1, 0, 2], "com": [1, 1, 0, 0, 0, 0], "modcom": 2, "data-astro-cid-t5h5ngjb": true })} </div> <div class="col-span-2 row-span-2 size-fit" data-astro-cid-t5h5ngjb> <a href="/characters/isidoro_lore" class="w-full" data-astro-cid-t5h5ngjb> <img src="/img/isidoro/isidoro.png" alt="Isidoro Matamoros" class="rounded-xl size-fit" data-astro-cid-t5h5ngjb> </a> </div> <div class="col-span-2 row-span-2" data-astro-cid-t5h5ngjb> ${renderComponent($$result2, "Section", $$Section, { "title": "Resistencias", "data-astro-cid-t5h5ngjb": true })} </div> <div class="col-span-1" data-astro-cid-t5h5ngjb> ${renderComponent($$result2, "Section", $$Section, { "title": "Velocidad", "data-astro-cid-t5h5ngjb": true })} </div> <div class="col-span-1" data-astro-cid-t5h5ngjb> ${renderComponent($$result2, "Section", $$Section, { "title": "Competencias", "data-astro-cid-t5h5ngjb": true })} </div> <div class="col-span-2 p-8" data-astro-cid-t5h5ngjb> ${renderComponent($$result2, "Section", $$Section, { "title": "Habilidades", "data-astro-cid-t5h5ngjb": true })} ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-t5h5ngjb": true })} </div> </main> ` })} `;
}, "D:/PROJECTS/WEB/voidegon/src/pages/characters/isidoro.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/characters/isidoro.astro";
const $$url = "/characters/isidoro";

const isidoro = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Isidoro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Title as $, $$Stats as a, isidoro as i };
