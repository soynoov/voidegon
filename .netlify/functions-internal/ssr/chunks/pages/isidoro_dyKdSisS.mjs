/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_MwcZ6mwF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as $$Layout } from './characters_wczbX6Qm.mjs';
import 'clsx';
/* empty css                            */

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
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[30vh] flex justify-center items-center"${addAttribute({ background: `url(${img}) ${center}/cover` }, "style")}> <div class="absolute inset-0"${addAttribute({ opacity: `${opacity}`, background: "#000" }, "style")}></div> <h1 class="font-bold text-5xl font-[caveat] text-[--light] text-center relative mx-8 text-balance"> ${title} </h1> </section>`;
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
  console.log(medirPor(exp));
  return renderTemplate`${maybeRenderHead()}<article class="grid grid-cols-6 justify-around items-center" data-astro-cid-xpq65ryk> <section class="col-span-2 justify-self-center" data-astro-cid-xpq65ryk> <h6 class="text-[--title] font-[unbounded]" data-astro-cid-xpq65ryk>Monk</h6> </section> <section class="flex justify-between items-center col-span-2" data-astro-cid-xpq65ryk> <p class="whitespace-nowrap" data-astro-cid-xpq65ryk>Nivel ${level}</p> <div class="bg-[--dark] w-[20vw] rounded-xl h-2 flex" data-astro-cid-xpq65ryk> <div${addAttribute(`rounded-xl bg-[--date] w-[${porcentaje}%]`, "class")} data-astro-cid-xpq65ryk></div> </div> <p data-astro-cid-xpq65ryk>${exp}/${expUp}</p> </section> <section class="col-span-2 justify-self-center" data-astro-cid-xpq65ryk> <h6 class="text-[--subtitle] font-[unbounded]" data-astro-cid-xpq65ryk>Tiefling</h6> </section> </article> `;
}, "D:/PROJECTS/WEB/voidegon/src/components/Experience.astro", void 0);

const $$Astro$2 = createAstro();
const $$Stats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Stats;
  const { fue, des, con, int, sab, car, mod, com, modcom } = Astro2.props;
  function numeroAbsoluto(stat = 0) {
    if (stat <= 0) {
      stat = 0;
    }
    return stat;
  }
  function modificadorStats(stat) {
    let modificador = 0;
    if (stat > 10) {
      modificador = Math.floor((stat - 10) / 2);
    } else if (stat > 0 && stat <= 10) {
      modificador = -Math.ceil((10 - stat) / 2);
    } else if (stat <= 0) {
      modificador = -5;
    }
    if (modificador >= 0) {
      return `+${modificador}`;
    }
    return `${modificador}`;
  }
  function aplicarStats(x = 0) {
    if (mod[x - 1] == 0) {
      return "-";
    } else {
      return mod[x - 1];
    }
  }
  function sumarStats(stat = 0, x = 0) {
    let modificador = modificadorStats(stat);
    modificador = parseInt(modificador) + mod[x - 1];
    if (modificador >= 0) {
      return `+${modificador}`;
    }
    return `${modificador}`;
  }
  function competenciasStats(x = 0) {
    switch (com[x - 1]) {
      case 0:
        return "-";
      case 1:
        return "x";
    }
  }
  function sumarComp(stat = 0, x = 0) {
    let modificador = sumarStats(stat, x);
    modificador = parseInt(modificador);
    if (com[x - 1] == 1) {
      modificador += modcom;
    }
    if (modificador >= 0) {
      return `+${modificador}`;
    }
    return `${modificador}`;
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center" data-astro-cid-bhxv2qxz> <table data-astro-cid-bhxv2qxz> <tr data-astro-cid-bhxv2qxz> <td data-astro-cid-bhxv2qxz>FUE</td> <td data-astro-cid-bhxv2qxz>${numeroAbsoluto(fue)}</td> <td data-astro-cid-bhxv2qxz>[${modificadorStats(fue)}]</td> <td data-astro-cid-bhxv2qxz>|</td> <td${addAttribute(aplicarStats(1) === "-" ? "text-[--gray]" : "", "class")} data-astro-cid-bhxv2qxz>${aplicarStats(1)}</td> <td data-astro-cid-bhxv2qxz>${sumarStats(fue, 1)}</td> <td data-astro-cid-bhxv2qxz>|</td> <td${addAttribute(competenciasStats(1) === "-" ? "text-[--gray]" : "", "class")} data-astro-cid-bhxv2qxz>${competenciasStats(1)}</td> <td data-astro-cid-bhxv2qxz>${sumarComp(fue, 1)}</td> </tr> <tr data-astro-cid-bhxv2qxz> <td data-astro-cid-bhxv2qxz>DES</td> <td data-astro-cid-bhxv2qxz>${numeroAbsoluto(des)}</td> <td data-astro-cid-bhxv2qxz>[${modificadorStats(des)}]</td> <td data-astro-cid-bhxv2qxz>|</td> <td${addAttribute(aplicarStats(2) === "-" ? "text-[--gray]" : "", "class")} data-astro-cid-bhxv2qxz>${aplicarStats(2)}</td> <td data-astro-cid-bhxv2qxz>${sumarStats(des, 2)}</td> <td data-astro-cid-bhxv2qxz>|</td> <td${addAttribute(competenciasStats(2) === "-" ? "text-[--gray]" : "", "class")} data-astro-cid-bhxv2qxz>${competenciasStats(2)}</td> <td data-astro-cid-bhxv2qxz>${sumarComp(des, 2)}</td> </tr><tr data-astro-cid-bhxv2qxz> <td data-astro-cid-bhxv2qxz>CON</td> <td data-astro-cid-bhxv2qxz>${numeroAbsoluto(con)}</td> <td data-astro-cid-bhxv2qxz>[${modificadorStats(con)}]</td> <td data-astro-cid-bhxv2qxz>|</td> <td${addAttribute(aplicarStats(3) === "-" ? "text-[--gray]" : "", "class")} data-astro-cid-bhxv2qxz>${aplicarStats(3)}</td> <td data-astro-cid-bhxv2qxz>${sumarStats(con, 3)}</td> <td data-astro-cid-bhxv2qxz>|</td> <td${addAttribute(competenciasStats(3) === "-" ? "text-[--gray]" : "", "class")} data-astro-cid-bhxv2qxz>${competenciasStats(3)}</td> <td data-astro-cid-bhxv2qxz>${sumarComp(con, 3)}</td> </tr><tr data-astro-cid-bhxv2qxz> <td data-astro-cid-bhxv2qxz>INT</td> <td data-astro-cid-bhxv2qxz>${numeroAbsoluto(int)}</td> <td data-astro-cid-bhxv2qxz>[${modificadorStats(int)}]</td> <td data-astro-cid-bhxv2qxz>|</td> <td${addAttribute(aplicarStats(4) === "-" ? "text-[--gray]" : "", "class")} data-astro-cid-bhxv2qxz>${aplicarStats(4)}</td> <td data-astro-cid-bhxv2qxz>${sumarStats(int, 4)}</td> <td data-astro-cid-bhxv2qxz>|</td> <td${addAttribute(competenciasStats(4) === "-" ? "text-[--gray]" : "", "class")} data-astro-cid-bhxv2qxz>${competenciasStats(4)}</td> <td data-astro-cid-bhxv2qxz>${sumarComp(int, 4)}</td> </tr><tr data-astro-cid-bhxv2qxz> <td data-astro-cid-bhxv2qxz>SAB</td> <td data-astro-cid-bhxv2qxz>${numeroAbsoluto(sab)}</td> <td data-astro-cid-bhxv2qxz>[${modificadorStats(sab)}]</td> <td data-astro-cid-bhxv2qxz>|</td> <td${addAttribute(aplicarStats(5) === "-" ? "text-[--gray]" : "", "class")} data-astro-cid-bhxv2qxz>${aplicarStats(5)}</td> <td data-astro-cid-bhxv2qxz>${sumarStats(sab, 5)}</td> <td data-astro-cid-bhxv2qxz>|</td> <td${addAttribute(competenciasStats(5) === "-" ? "text-[--gray]" : "", "class")} data-astro-cid-bhxv2qxz>${competenciasStats(5)}</td> <td data-astro-cid-bhxv2qxz>${sumarComp(sab, 5)}</td> </tr><tr data-astro-cid-bhxv2qxz> <td data-astro-cid-bhxv2qxz>CAR</td> <td data-astro-cid-bhxv2qxz>${numeroAbsoluto(car)}</td> <td data-astro-cid-bhxv2qxz>[${modificadorStats(car)}]</td> <td data-astro-cid-bhxv2qxz>|</td> <td${addAttribute(aplicarStats(6) === "-" ? "text-[--gray]" : "", "class")} data-astro-cid-bhxv2qxz>${aplicarStats(6)}</td> <td data-astro-cid-bhxv2qxz>${sumarStats(car, 6)}</td> <td data-astro-cid-bhxv2qxz>|</td> <td${addAttribute(competenciasStats(6) === "-" ? "text-[--gray]" : "", "class")} data-astro-cid-bhxv2qxz>${competenciasStats(6)}</td> <td data-astro-cid-bhxv2qxz>${sumarComp(car, 6)}</td> </tr> </table> </div> `;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "", "data-astro-cid-t5h5ngjb": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, { "title": "Isidoro Matamoros", "img": "/img/isidoro/bg_isidoro.png", "data-astro-cid-t5h5ngjb": true })} ${maybeRenderHead()}<main${addAttribute(`
    grid grid-cols-6 auto-rows-auto gap-4
    mx-auto w-[80vw]
    justify-center
  `, "class")} data-astro-cid-t5h5ngjb> <div class="col-span-6 mt-4 w-full" data-astro-cid-t5h5ngjb> ${renderComponent($$result2, "Experience", $$Experience, { "exp": 455, "data-astro-cid-t5h5ngjb": true })} </div> <div class="col-span-2" data-astro-cid-t5h5ngjb> ${renderComponent($$result2, "Stats", $$Stats, { "fue": 16, "des": 16, "con": 12, "int": 10, "sab": 10, "car": 8, "mod": [1, 0, 0, 0, 0, 2], "com": [0, 0, 0, 0, 1, 1], "modcom": 2, "data-astro-cid-t5h5ngjb": true })} </div> <div class="col-span-2 row-span-2 col-start-3 row-start-2 w-full" data-astro-cid-t5h5ngjb> <a href="/characters/isidoro_lore" class="w-full" data-astro-cid-t5h5ngjb> <img src="/img/isidoro/isidoro.png" alt="Isidoro Matamoros" class="rounded-xl w-full h-auto" data-astro-cid-t5h5ngjb> </a> </div> <div class="col-span-2" data-astro-cid-t5h5ngjb> <h6 data-astro-cid-t5h5ngjb>Aguante</h6> </div> <div class="col-span-1 col-start-5 row-start-3" data-astro-cid-t5h5ngjb> <h6 data-astro-cid-t5h5ngjb>Pies</h6> </div> <div class="col-span-1 col-start-6 row-start-3" data-astro-cid-t5h5ngjb> <h6 data-astro-cid-t5h5ngjb>Competencias</h6> </div> <div class="col-span-6" data-astro-cid-t5h5ngjb> ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-t5h5ngjb": true })} </div> </main> ` })} `;
}, "D:/PROJECTS/WEB/voidegon/src/pages/characters/isidoro.astro", void 0);

const $$file = "D:/PROJECTS/WEB/voidegon/src/pages/characters/isidoro.astro";
const $$url = "/characters/isidoro";

export { $$Isidoro as default, $$file as file, $$url as url };
