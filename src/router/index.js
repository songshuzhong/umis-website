import { createRouter, createWebHashHistory } from 'vue-router';

import menuCreator from './creator';
// import { MisSchema } from 'umis-renderer';
import { MisSchema } from '../../../umis-renderer/src/entry';
import frameSchema from '../data/frame';
import routerSchema from '../data/menu';

const history = createWebHashHistory();

const menus = menuCreator
  .dynamicMenuCreator(routerSchema.data.menu)
  .menus;

frameSchema.body[1].body[0].body.body = routerSchema.data.menu;

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'UmisWebsite',
      component: MisSchema,
      props: {
        initSchema: frameSchema,
        canSchemaUpdate: false,
        iProtal: true
      },
      children: menus,
    },
  ],
});

export default router;
