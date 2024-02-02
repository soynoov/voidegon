export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/characters_L7EDUbr-.mjs').then(n => n.d);

export { page };
