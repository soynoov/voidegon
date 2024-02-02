/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_UCTP8GVI.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_mP1SLpho.mjs';
import 'clsx';
/* empty css                            */
/* empty css                            */
import { a as $$Section } from './cap-1_luMf59W9.mjs';

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
  const { race, rol, exp, start = 2 } = Astro2.props;
  let porcentaje = 0;
  let level = 0;
  let expUp = 0;
  const expThresholds = [
    0,
    300,
    900,
    2700,
    6500,
    14e3,
    23e3,
    34e3,
    48e3,
    64e3,
    85e3,
    1e5,
    12e4,
    14e4,
    165e3,
    195e3,
    225e3,
    265e3,
    305e3,
    355e3
  ];
  function medirXP(exp2) {
    while (exp2 >= expThresholds[level]) {
      level++;
    }
    expUp = expThresholds[level];
    return { level, expUp };
  }
  function medirPor(exp2) {
    porcentaje = Math.floor(exp2 / expUp * 100);
    return porcentaje;
  }
  medirXP(exp);
  medirPor(exp);
  console.log(porcentaje);
  return renderTemplate`${maybeRenderHead()}<article class="grid md:grid-cols-6 items-center grid-cols-1 gap-y-2" data-astro-cid-xpq65ryk> <section${addAttribute(`col-span-1 row-start-1`, "class")} data-astro-cid-xpq65ryk> <h6 class="text-[--title] font-[unbounded]" data-astro-cid-xpq65ryk>${race}</h6> </section> <section${addAttribute(`col-span-4 font-[caveat] font-bold text-[--white] md:row-start-1`, "class")}${addAttribute(`grid-column-start: ${start};`, "style")} data-astro-cid-xpq65ryk> <div class="flex justify-center items-center" data-astro-cid-xpq65ryk> <span class="text-base mx-4 w-20" data-astro-cid-xpq65ryk>Nivel ${level}</span> <div class="w-full bg-[--dark] rounded-full h-1.5" data-astro-cid-xpq65ryk> <div class="bg-[--date] h-1.5 rounded-full animate-pulse"${addAttribute(`width: ${porcentaje}%`, "style")} data-astro-cid-xpq65ryk></div> </div> <span class="text-base mx-4 w-20" data-astro-cid-xpq65ryk>${exp}/${expUp}</span> </div> </section> <section${addAttribute(`col-span-1 md:row-start-1 row-start-2`, "class")} data-astro-cid-xpq65ryk> <h6 class="text-[--subtitle] font-[unbounded]" data-astro-cid-xpq65ryk>${rol}</h6> </section> </article> `;
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
    w-full h-full
    grid gap-4 grid-cols-2
    justify-center items-center
    cursor-default
`, "class")} data-astro-cid-bhxv2qxz> <div data-astro-cid-bhxv2qxz> <h3${addAttribute(com[1 - 1] == 1 ? "x" : "", "id")} data-astro-cid-bhxv2qxz>FUE</h3> <div data-astro-cid-bhxv2qxz> <h6 data-astro-cid-bhxv2qxz>${fue}</h6> <p data-astro-cid-bhxv2qxz>${sumarStats(1)}</p> </div> <div data-astro-cid-bhxv2qxz> <h5 data-astro-cid-bhxv2qxz>[${modificadorStats(fue, 1)}]</h5> </div> </div> <div data-astro-cid-bhxv2qxz> <h3${addAttribute(com[2 - 1] == 1 ? "x" : "", "id")} data-astro-cid-bhxv2qxz>DES</h3> <div data-astro-cid-bhxv2qxz> <h6 data-astro-cid-bhxv2qxz>${des}</h6> <p data-astro-cid-bhxv2qxz>${sumarStats(2)}</p> </div> <div data-astro-cid-bhxv2qxz> <h5 data-astro-cid-bhxv2qxz>[${modificadorStats(des, 2)}]</h5> </div> </div> <div data-astro-cid-bhxv2qxz> <h3${addAttribute(com[3 - 1] == 1 ? "x" : "", "id")} data-astro-cid-bhxv2qxz>CON</h3> <div data-astro-cid-bhxv2qxz> <h6 data-astro-cid-bhxv2qxz>${con}</h6> <p data-astro-cid-bhxv2qxz>${sumarStats(3)}</p> </div> <div data-astro-cid-bhxv2qxz> <h5 data-astro-cid-bhxv2qxz>[${modificadorStats(con, 3)}]</h5> </div> </div> <div data-astro-cid-bhxv2qxz> <h3${addAttribute(com[4 - 1] == 1 ? "x" : "", "id")} data-astro-cid-bhxv2qxz>INT</h3> <div data-astro-cid-bhxv2qxz> <h6 data-astro-cid-bhxv2qxz>${int}</h6> <p data-astro-cid-bhxv2qxz>${sumarStats(4)}</p> </div> <div data-astro-cid-bhxv2qxz> <h5 data-astro-cid-bhxv2qxz>[${modificadorStats(int, 4)}]</h5> </div> </div> <div data-astro-cid-bhxv2qxz> <h3${addAttribute(com[5 - 1] == 1 ? "x" : "", "id")} data-astro-cid-bhxv2qxz>SAB</h3> <div data-astro-cid-bhxv2qxz> <h6 data-astro-cid-bhxv2qxz>${sab}</h6> <p data-astro-cid-bhxv2qxz>${sumarStats(5)}</p> </div> <div data-astro-cid-bhxv2qxz> <h5 data-astro-cid-bhxv2qxz>[${modificadorStats(sab, 5)}]</h5> </div> </div> <div data-astro-cid-bhxv2qxz> <h3${addAttribute(com[6 - 1] == 1 ? "x" : "", "id")} data-astro-cid-bhxv2qxz>CAR</h3> <div data-astro-cid-bhxv2qxz> <h6 data-astro-cid-bhxv2qxz>${car}</h6> <p data-astro-cid-bhxv2qxz>${sumarStats(6)}</p> </div> <div data-astro-cid-bhxv2qxz> <h5 data-astro-cid-bhxv2qxz>[${modificadorStats(car, 6)}]</h5> </div> </div> </section> `;
}, "D:/PROJECTS/WEB/voidegon/src/components/Stats.astro", void 0);

const $$Astro$1 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  const { com, punt, modcom } = Astro2.props;
  let resul = [0];
  function printPunt(x) {
    x--;
    if (punt[x] >= 0) {
      return `+${punt[x]}`;
    }
    return punt[x];
  }
  function sumarCom(x) {
    x--;
    if (com[x] == 1) {
      resul[x] = punt[x] + modcom;
    } else {
      resul[x] = punt[x];
    }
    if (resul[x] >= 0) {
      return `+${resul[x]}`;
    }
    return resul[x];
  }
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`
    w-full h-full
    grid grid-cols-3 gap-2
`, "class")} data-astro-cid-ab4ihpzs> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(DES)</p> <h3${addAttribute(com[1 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Acrobacias</h3> <h6${addAttribute(punt[1 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(1)}</h6> <h5${addAttribute(sumarCom(1) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(1)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(FUE)</p> <h3${addAttribute(com[2 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Atletismo</h3> <h6${addAttribute(punt[2 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(2)}</h6> <h5${addAttribute(sumarCom(2) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(2)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(INT)</p> <h3${addAttribute(com[3 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>C. Arcano</h3> <h6${addAttribute(punt[3 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(3)}</h6> <h5${addAttribute(sumarCom(3) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(3)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(CAR)</p> <h3${addAttribute(com[4 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Engaño</h3> <h6${addAttribute(punt[4 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(4)}</h6> <h5${addAttribute(sumarCom(4) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(4)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(INT)</p> <h3${addAttribute(com[5 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Historia</h3> <h6${addAttribute(punt[5 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(5)}</h6> <h5${addAttribute(sumarCom(5) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(5)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(CAR)</p> <h3${addAttribute(com[6 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Interpretación</h3> <h6${addAttribute(punt[6 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(6)}</h6> <h5${addAttribute(sumarCom(6) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(6)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(CAR)</p> <h3${addAttribute(com[7 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Intimidación</h3> <h6${addAttribute(punt[7 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(7)}</h6> <h5${addAttribute(sumarCom(7) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(7)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(INT)</p> <h3${addAttribute(com[8 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Investigación</h3> <h6${addAttribute(punt[8 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(8)}</h6> <h5${addAttribute(sumarCom(8) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(8)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(DES)</p> <h3${addAttribute(com[9 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Juego de Manos</h3> <h6${addAttribute(punt[9 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(9)}</h6> <h5${addAttribute(sumarCom(9) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(9)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(SAB)</p> <h3${addAttribute(com[10 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Medicina</h3> <h6${addAttribute(punt[10 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(10)}</h6> <h5${addAttribute(sumarCom(10) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(10)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(INT)</p> <h3${addAttribute(com[11 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Naturaleza</h3> <h6${addAttribute(punt[11 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(11)}</h6> <h5${addAttribute(sumarCom(11) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(11)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(SAB)</p> <h3${addAttribute(com[12 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Percepción</h3> <h6${addAttribute(punt[12 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(12)}</h6> <h5${addAttribute(sumarCom(12) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(12)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(SAB)</p> <h3${addAttribute(com[13 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Perspicacia</h3> <h6${addAttribute(punt[13 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(13)}</h6> <h5${addAttribute(sumarCom(13) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(13)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(CAR)</p> <h3${addAttribute(com[14 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Persuasión</h3> <h6${addAttribute(punt[14 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(14)}</h6> <h5${addAttribute(sumarCom(14) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(14)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(INT)</p> <h3${addAttribute(com[15 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Religión</h3> <h6${addAttribute(punt[15 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(15)}</h6> <h5${addAttribute(sumarCom(15) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(15)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(DES)</p> <h3${addAttribute(com[16 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Sigilo</h3> <h6${addAttribute(punt[16 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(16)}</h6> <h5${addAttribute(sumarCom(16) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(16)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(SAB)</p> <h3${addAttribute(com[17 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>Supervivencia</h3> <h6${addAttribute(punt[17 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(17)}</h6> <h5${addAttribute(sumarCom(17) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(17)}]</h5> </div> <div data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>(SAB)</p> <h3${addAttribute(com[18 - 1] == 1 ? "x" : "", "id")} data-astro-cid-ab4ihpzs>T. con Animales</h3> <h6${addAttribute(punt[18 - 1] == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>${printPunt(18)}</h6> <h5${addAttribute(sumarCom(18) == 0 ? "grey" : "", "id")} data-astro-cid-ab4ihpzs>[${sumarCom(18)}]</h5> </div> </section> `;
}, "D:/PROJECTS/WEB/voidegon/src/components/Skills.astro", void 0);

const $$Astro = createAstro();
const $$Isidoro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Isidoro;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "| Isidoro Matamoros" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, { "title": "Isidoro Matamoros", "img": "/img/isidoro/bg_isidoro.png" })} ${maybeRenderHead()}<main${addAttribute(`
    	grid grid-cols-6 grid-flow-row-dense gap-4
    	mx-auto w-[80vw]
  	`, "class")}> <div class="col-span-6 mt-4 w-full"> ${renderComponent($$result2, "Experience", $$Experience, { "race": "Tiefling", "rol": "Monk", "exp": 355 })} </div> <div class="col-span-2 row-span-1" id="dark"> ${renderComponent($$result2, "Stats", $$Stats, { "fue": 14, "des": 18, "con": 12, "int": 10, "sab": 10, "car": 8, "mod": [0, 0, 0, 1, 0, 2], "com": [1, 1, 0, 0, 0, 0], "modcom": 2 })} </div> <div class="col-span-2 row-span-2 size-fit"> <a href="/characters/isidoro_lore" class="w-full"> <img src="/img/isidoro/isidoro.png" alt="Isidoro Matamoros" class="rounded-xl size-fit"> </a> </div> <div class="col-span-2 row-span-2"> ${renderComponent($$result2, "Section", $$Section, { "title": "Resistencias" })} </div> <div class="col-span-1"> ${renderComponent($$result2, "Section", $$Section, { "title": "Velocidad" })} </div> <div class="col-span-1"> ${renderComponent($$result2, "Section", $$Section, { "title": "Competencias" })} </div> <div class="col-span-2 p-8"> ${renderComponent($$result2, "Section", $$Section, { "title": "Habilidades" })} ${renderComponent($$result2, "Skills", $$Skills, { "com": [], "punt": [], "modcom": 2 })} </div> </main> ` })} `;
}, "D:/PROJECTS/WEB/voidegon/src/pages/characters/isidoro.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/characters/isidoro.astro";
const $$url = "/characters/isidoro";

const isidoro = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Isidoro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Title as $, $$Stats as a, $$Experience as b, $$Skills as c, isidoro as i };
