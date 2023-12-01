import {createApp} from 'vue';
import ElementPlus, {ElNotification} from 'element-plus';
import IRenderer, {api} from '../../../i-renderer/packages/index';
import createRoutes from '../router/index';
import ToMobile from '../component/ToMobile.vue';
import Application from '../apps/Index.vue';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '../../../i-renderer/packages/assets/styles/index.scss';
import '../style/index.scss';
import '../registerServiceWorker';

const app = createApp(Application);
const config = {
  domains: [process.env.VUE_APP_API_BASE],
  renderers: [ToMobile],
  actions: {
    logout: function(proxy, props, config, context, onActionFeedback) {
      localStorage.removeItem('token');
      onActionFeedback&&onActionFeedback('CANCEL_LOADING');
      proxy.$dispatchAction(proxy, props, {url: 'localhost/login.html', actionType: 'url'}, {}, () => {});
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
      window.location.href = '/login.html';
    }
    return res;
  }
};

api()
  .dynamicApi('', {headers: {Authorization: localStorage.getItem('token')}})
  .get('/api/user')
  .then(res => {
    const routers = createRoutes();
    config.permissions = res.data['permissions'];
    app
      .use(ElementPlus)
      .use(IRenderer, config)
      .use(routers)
      .mount('.i-website-app__container');
  })
  .catch((e) => {
    if (e.data && e.data.code === 401) {
      window.location.href = '/login.html';
    }
    console.log(e);
    ElNotification({
      title: '错误：初始化接口调用失败',
      message: e.config.url,
      type: 'error',
      duration: 10000,
      offset: 50
    });
  });
