import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import {ElLoading, ElMessageBox} from 'element-plus';
import {Schema, checkPermission} from 'i-renderer/dist/js/renderer';
import frameSchema from '../data/homeFrame.json';
// import homeSchema from '../data/home';
// import meSchema from '../data/me';
import uaManager from '../utils/ua';
const isGp = process.env.NODE_ENV === 'gp';
let routerMask;
const router = createRouter({
  history: isGp? createWebHashHistory(): createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'IHome',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'IHomePlus',
      component: Schema,
      props: {
        initSchema: frameSchema,
        classname: 'i-renderer-website-schema__container',
        canSchemaUpdate: false,
        iProtal: true
      },
      children: [
        {
          path: '/',
          component: Schema,
          props: {
            // initSchema: homeSchema,
            url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/home',
          },
        },
        {
          path: '/logs',
          component: Schema,
          props: {
            url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/logs',
          },
        },
        {
          path: '/me',
          component: Schema,
          props: {
            url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/me',
            //initSchema: meSchema
          },
        },
        {
          path: '/quality',
          component: Schema,
          props: {
            url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/me',
            //initSchema: meSchema
          },
          meta: {
            permission: 'quality'
          }
        },
        {
          path: '/playground',
          component: Schema,
          classname: 'i-renderer-website-schema__playground',
          props: {
            url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/playground',
            //initSchema: meSchema
          },
          beforeEnter: () => {
            document.documentElement.classList.add('playground');
            return true;
          }
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: () => import('../Error.vue'),
          props: {
            status: 404
          }
        },
        {
          path: '/forbidden',
          name: 'Forbidden',
          component: () => import('../Error.vue'),
          props: {
            status: 403
          }
        },
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {left: 0, top: 0};
  }
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

router.afterEach((to, from) => {
  if (to.path === '/playground') {
    uaManager.getUa()&&ElMessageBox.confirm('建议横屏下浏览', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(() => {
      uaManager.toHorizontal();
    }).catch(() => {
      console.log('cancel horizontal');
    });
  }
  if (from.path === '/playground') {
    uaManager.leavePlayground();
  }
  const timer = setTimeout(() => {
    if (routerMask && typeof routerMask.close === 'function') {
      routerMask.close();
      clearTimeout(timer);
    }
  }, 1000);
});
export default router;
