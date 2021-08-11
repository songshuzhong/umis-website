import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import { MisSchema } from '../components/entry';
import frameSchema from '../data/frame';
import menuCreator from './creator';

const history =
  process.env.NODE_ENV === 'development'
    ? createWebHistory()
    : createWebHashHistory();

const createMenus = menus => {
  const routes = menuCreator
    .dynamicMenuCreator(menus)
    .initDocMenu()
    .docMenuCreator().menus;

  frameSchema.body[1].body[0].body.body = menus;

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
          iProtal: true,
        },
        children: routes,
      },
    ],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }

      return { x: 0, y: 0 };
    },
  });
  routes.forEach(function(item) {
    router.addRoute('UmisWebsite', item);
  });
  return router;
};

export default createMenus;
