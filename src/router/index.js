import {
  createRouter,
  createWebHashHistory,
  // createWebHistory
} from 'vue-router';
import {ElLoading} from 'element-plus';
import {Schema} from 'i-renderer/dist/js/renderer';
import indexSchema from '../data/index';

const history =
  process.env.NODE_ENV === 'dev'
    ? createWebHashHistory()
    : createWebHashHistory();

const createRoutes = dyRouter => {
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
          classname: 'i-renderer-website-schema__container',
          canSchemaUpdate: false
        }
      },
      ...dyRouter,
      {
        path: '/:pathMatch(.*)*',
        name: 'ErrorPage',
        component: () => import('../Error'),
        props: {
          status: 404
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
