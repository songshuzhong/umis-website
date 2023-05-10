import {
  createRouter,
  createWebHashHistory,
  // createWebHistory
} from 'vue-router';
import {ElLoading} from 'element-plus';
import {Schema, checkPermission} from '../../../i-renderer/packages/renderer/index';
import indexSchema from '../data/index';

const history =
  process.env.NODE_ENV === 'dev'
    ? createWebHashHistory()
    : createWebHashHistory();

const createRoutes = () => {
  let routerMask;

  const router = createRouter({
    history,
    routes: [
      {
        path: '/',
        name: 'IWebsite',
        title: '零代码-IRender',
        component: Schema,
        props: {
          initSchema: indexSchema,
          classname: 'i-renderer-website-schema__container'
        }
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../Error'),
        props: {
          status: 404
        }
      },
      {
        path: '/forbidden',
        name: 'Forbidden',
        component: () => import('../Error'),
        props: {
          status: 403
        }
      },
    ]
  });

  router.beforeEach((to, from, next) => {
    if (to.path !== from.path) {
      routerMask = ElLoading.service({
        fullscreen: true,
        customClass: 'i-website__router__loader'
      });
    }

    if (to?.meta?.permission) {
      const hasPermission = checkPermission(to.meta.permission);
      if (!hasPermission) {
        return next('/forbidden');
      }
    }
    next();
  });
  router.afterEach((route) => {
    document.title = route?.meta?.title || '零代码-IRender';
    const timer = setTimeout(() => {
      if (routerMask && typeof routerMask.close === 'function') {
        routerMask.close();
        clearTimeout(timer);
      }
    }, 1000);
  });
  return router;
};

export default createRoutes;
