import {createApp} from 'vue';
import ElementPlus, {ElNotification} from 'element-plus';
import IRenderer, {api} from '../../../i-renderer/packages/index';
import createRoutes from '../router/website';
import ToMobile from '../component/ToMobile.vue';
import Ai from '../component/Ai.vue';
import Application from '../apps/Website.vue';
import registrySw from '../registerServiceWorker';
import Verify from '../component/Verify';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '../../../i-renderer/packages/assets/styles/index.scss';
import '../style/index.scss';

const app = createApp(Application);
const config = {
  trackUtil: function(name, props) {
    window.umami.track(() => ({
      name,
      data: props
    }));
  },
  domains: [process.env.VUE_APP_API_BASE],
  renderers: [ToMobile, Verify, Ai],
  actions: {
    logout: function(proxy, config, context, onActionFeedback) {
      localStorage.removeItem('token');
      onActionFeedback&&onActionFeedback('CANCEL_LOADING');
      proxy.$dispatchAction(proxy, {url: process.env.NODE_ENV === 'dev'? 'localhost/login.html': 'localhost/login', actionType: 'url'}, {}, () => {});
    },
  },
  req: "if (url.includes('/api')) {\n  url += '.json';\n}",
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
      window.location.href = process.env.NODE_ENV === 'dev'? 'login.html': 'login';
    }
    return res;
  }
};

registrySw(process.env.VUE_APP_SERVICE_WORKER);
console.log(process.env.VUE_API_NODE_ENV, 6);
api()
  .dynamicApi('', {headers: {Authorization: localStorage.getItem('token')}})
  .get(process.env.VUE_API_NODE_ENV === 'gp'? 'https://songshuzhong.github.io/i-website/public/api/user.json': `${process.env.VUE_APP_API_BASE}/api/user`)
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
      window.location.href = process.env.NODE_ENV === 'dev'? 'login.html': 'login';
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
