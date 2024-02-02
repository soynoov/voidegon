export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/diaries_vrs_eLFA.mjs');

export { page };
