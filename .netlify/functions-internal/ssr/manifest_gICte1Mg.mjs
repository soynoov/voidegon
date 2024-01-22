import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_MwcZ6mwF.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/characters.ptfw3pwj.css"},{"type":"inline","content":"body{overflow-y:hidden}main[data-astro-cid-j7pv25f6]{background:url(/img/background.png) bottom/cover;height:95dvh}h1[data-astro-cid-j7pv25f6]{color:var(--light);font-weight:900}@media (max-width: 600px){h1[data-astro-cid-j7pv25f6]{text-align:center;margin:1rem}main[data-astro-cid-j7pv25f6]{background:}p[data-astro-cid-j7pv25f6]{margin:1rem;text-wrap:balance}}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/characters.ptfw3pwj.css"},{"type":"inline","content":"section[data-astro-cid-xpq65ryk]>[data-astro-cid-xpq65ryk]{margin:.5rem}p[data-astro-cid-xpq65ryk]{font-family:caveat;font-weight:700}h6[data-astro-cid-xpq65ryk]{font-weight:700}td[data-astro-cid-bhxv2qxz]{padding:.5rem}td[data-astro-cid-bhxv2qxz]:nth-of-type(1){color:var(--subtitle);font-weight:700}td[data-astro-cid-bhxv2qxz]:nth-of-type(2){color:var(--grey)}td[data-astro-cid-bhxv2qxz]:nth-of-type(6){color:var(--date)}td[data-astro-cid-bhxv2qxz]:nth-of-type(9){color:var(--warning)}td[data-astro-cid-bhxv2qxz]:nth-of-type(2),td[data-astro-cid-bhxv2qxz]:nth-of-type(3),td[data-astro-cid-bhxv2qxz]:nth-of-type(5),td[data-astro-cid-bhxv2qxz]:nth-of-type(6),td[data-astro-cid-bhxv2qxz]:nth-of-type(9){font-family:pacifico}td[data-astro-cid-bhxv2qxz]:nth-of-type(8){font-family:caveat;font-weight:700}td[data-astro-cid-ab4ihpzs]{padding:.35rem .5rem}td[data-astro-cid-ab4ihpzs]:nth-of-type(1){color:var(--subtitle);font-weight:700}td[data-astro-cid-ab4ihpzs]:nth-of-type(2),td[data-astro-cid-ab4ihpzs]:nth-last-of-type(3){color:var(--grey);font-family:caveat}td[data-astro-cid-ab4ihpzs]:nth-of-type(4),td[data-astro-cid-ab4ihpzs]:nth-of-type(5){font-family:pacifico}td[data-astro-cid-ab4ihpzs]:nth-of-type(4){color:var(--date)}td[data-astro-cid-ab4ihpzs]:nth-of-type(5){color:var(--warning)}main[data-astro-cid-t5h5ngjb]>div[data-astro-cid-t5h5ngjb]{cursor:default;background-color:var(--gray);border-radius:.75rem;transition:transform .3s ease}main[data-astro-cid-t5h5ngjb]>div[data-astro-cid-t5h5ngjb]:hover{transform:scale(1.01)}\n"}],"routeData":{"route":"/characters/isidoro","type":"page","pattern":"^\\/characters\\/isidoro\\/?$","segments":[[{"content":"characters","dynamic":false,"spread":false}],[{"content":"isidoro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/characters/isidoro.astro","pathname":"/characters/isidoro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/characters.ptfw3pwj.css"}],"routeData":{"route":"/characters","type":"page","pattern":"^\\/characters\\/?$","segments":[[{"content":"characters","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/characters.astro","pathname":"/characters","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/characters.ptfw3pwj.css"}],"routeData":{"route":"/diaries","type":"page","pattern":"^\\/diaries\\/?$","segments":[[{"content":"diaries","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/diaries.astro","pathname":"/diaries","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/characters.ptfw3pwj.css"}],"routeData":{"route":"/extras","type":"page","pattern":"^\\/extras\\/?$","segments":[[{"content":"extras","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/extras.astro","pathname":"/extras","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/characters.ptfw3pwj.css"}],"routeData":{"route":"/map","type":"page","pattern":"^\\/map\\/?$","segments":[[{"content":"map","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/map.astro","pathname":"/map","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/PROJECTS/WEB/voidegon/src/pages/characters.astro",{"propagation":"none","containsHead":true}],["D:/PROJECTS/WEB/voidegon/src/pages/characters/isidoro.astro",{"propagation":"none","containsHead":true}],["D:/PROJECTS/WEB/voidegon/src/pages/diaries.astro",{"propagation":"none","containsHead":true}],["D:/PROJECTS/WEB/voidegon/src/pages/extras.astro",{"propagation":"none","containsHead":true}],["D:/PROJECTS/WEB/voidegon/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/PROJECTS/WEB/voidegon/src/pages/map.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/diaries.astro":"chunks/pages/diaries_TdcdMIEZ.mjs","/src/pages/extras.astro":"chunks/pages/extras_L64vAw6j.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_BYWVd3lx.mjs","/src/pages/index.astro":"chunks/pages/index_J2gGGHpY.mjs","/src/pages/characters/isidoro.astro":"chunks/pages/isidoro_dyKdSisS.mjs","/src/pages/map.astro":"chunks/pages/map_fCrQzWlA.mjs","\u0000@astrojs-manifest":"manifest_gICte1Mg.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_40A1JpV_.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_JkqUYQM-.mjs","\u0000@astro-page:src/pages/characters/isidoro@_@astro":"chunks/isidoro_TM3M9mV6.mjs","\u0000@astro-page:src/pages/characters@_@astro":"chunks/characters_DRgM8E_-.mjs","\u0000@astro-page:src/pages/diaries@_@astro":"chunks/diaries_oOmjD1vb.mjs","\u0000@astro-page:src/pages/extras@_@astro":"chunks/extras_hpXGGEHA.mjs","\u0000@astro-page:src/pages/map@_@astro":"chunks/map_5dk1g2hT.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/characters.ptfw3pwj.css","/favicon.ico","/logo.png","/img/background.png","/img/bg_diaries.png","/img/baren/baren.png","/img/baren/baren_book.png","/img/enya/enya.png","/img/enya/enya_book.png","/img/kenkart/kenkart.png","/img/kenkart/kenkart_book.png","/img/isidoro/bg_isidoro.png","/img/isidoro/isidoro.png","/img/isidoro/isidoro_book.png","/img/kriv/kriv.png","/img/kriv/kriv_book.png","/img/nyliss/nyliss.png","/img/nyliss/nyliss_book.png"]});

export { manifest };
