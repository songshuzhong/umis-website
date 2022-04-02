import {
  createRouter,
  createWebHashHistory,
  // createWebHistory
} from 'vue-router';
import { ElLoading } from 'element-plus';

import menuCreator from './creator';
import frameSchema from '../data/frame';

const history =
  process.env.NODE_ENV === 'dev'
    ? createWebHashHistory()
    : createWebHashHistory();

const createMenus = menus => {
  let routerMask;
  const dyRouter = menuCreator
    .dynamicMenuCreator(menus).menus;
    // .initDocMenu()
    // .docMenuCreator().menus;

  frameSchema.body.body[1].body[0].body.body = menus;

  const router = createRouter({
    history,
    routes: [
      {
        path: '/',
        name: 'UmisWebsite',
        component: () => import('../../../i-renderer/packages/renderer/component/schema.vue'),
        props: {
          initSchema: frameSchema,
          classname: 'i-renderer-website-schema__container',
          canSchemaUpdate: false,
          iProtal: true
        },
        children: dyRouter
      }
    ],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }

      return { x: 0, y: 0 };
    }
  });
  dyRouter.forEach(item => {
    router.addRoute('UmisWebsite', item);
  });
  router.beforeEach((to, from, next) => {
    if (to.path !== from.path) {
      routerMask = ElLoading.service({
        fullscreen: true,
        customClass: 'i-renderer-website__router__loader'
      });
    }
    next();
  });
  router.afterEach((route) => {
    document.title = route?.meta?.title || 'website';
    const timer = setTimeout(() => {
      if (routerMask && typeof routerMask.close === 'function') {
        routerMask.close();
        clearTimeout(timer);
      }
    }, 1000);
  });
  return router;
};

export default createMenus;
