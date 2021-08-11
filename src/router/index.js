import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import menuCreator from './creator';
import { MisSchema } from '../components/entry';
import frameSchema from '../data/frame';
import routerSchema from '../data/menu';

const history =
  process.env.NODE_ENV === 'development'
    ? createWebHistory()
    : createWebHashHistory();

const menus = menuCreator
  .dynamicMenuCreator(routerSchema.data.menu)
  .initDocMenu()
  .docMenuCreator().menus;
frameSchema.body[1].body[0].body.body = routerSchema.data.menu;

const createMenus = () => {
  return createRouter({
    history,
    routes: [
      {
        path: '/',
        name: 'UmisWebsite',
        component: MisSchema,
        props: {
          initSchema: frameSchema,
          canSchemaUpdate: false,
          iProtal: true,
        },
        children: menus,
      },
    ],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }

      return { x: 0, y: 0 };
    },
  });
};

export default createMenus;
