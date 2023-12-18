import {createApp} from 'vue';
import ElementPlus, {ElNotification} from 'element-plus';
import IRenderer, {api} from 'i-renderer/dist/js/renderer';
import createRoutes from '../router/website';
import ToMobile from '../component/ToMobile.vue';
import Application from '../apps/Website.vue';
import registrySw from '../registerServiceWorker';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'i-renderer/dist/css/index.css';
import '../style/index.scss';

const app = createApp(Application);
const config = {
  domains: [process.env.VUE_APP_API_BASE],
  renderers: [ToMobile],
  actions: {
    logout: function(proxy, props, config, context, onActionFeedback) {
      localStorage.removeItem('token');
      onActionFeedback&&onActionFeedback('CANCEL_LOADING');
      proxy.$dispatchAction(proxy, props, {url: 'localhost/login', actionType: 'url'}, {}, () => {});
    },
  },
  request: function(req) {
    if (localStorage.getItem('token')) {
      if (!req.headers) {
        req.headers = {};
      }
      req.headers['Authorization'] = localStorage.getItem('token');
    }
    return req;
  },
  response: function(res) {
    if (res.data && [400, 401].includes(res.data.code)) {
      window.location.href = '/login';
    }
    return res;
  }
};

registrySw(process.env.VUE_APP_SERVICE_WORKER);

api()
  .dynamicApi('', {headers: {Authorization: localStorage.getItem('token')}})
  .get(`${process.env.VUE_APP_API_BASE}/api/user`)
  .then(res => {
    const routers = createRoutes();
    config.permissions = res.data['permissions'];
    config.roles = res.data['roles'];
    app
      .use(ElementPlus)
      .use(IRenderer, config)
      .use(routers)
      .mount('.i-website-app__container');
  })
  .catch((e) => {
    if (e.data && (e.data.code === 401 || e.data.code === 400)) {
      window.location.href = '/login';
    }
    console.log(e);
    ElNotification({
      title: `错误${e?.data?.code || e?.response?.data?.code || e.code}`,
      message: e?.data?.message || e?.response?.data?.message || e.message,
      type: 'error',
      duration: 10000,
      offset: 50
    });
  });
