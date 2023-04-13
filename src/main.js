import {createApp} from 'vue';
import ElementPlus, {ElNotification} from 'element-plus';
import IRenderer, {api} from 'i-renderer/dist/js/index';
import createRoutes from './router/index';
import Application from './App.vue';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'i-renderer/dist/css/index.css';
import './style/index.scss';
import './registerServiceWorker';

const app = createApp(Application);
const config = {
  domains: {
    default: process.env.VUE_APP_API_BASE
  },
  contextPath: process.env.BASE_URL
};

Promise.all([
  api().staticApi().get('https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/user')
])
  .then(res => {
    const [settings] = res;
    const routers = createRoutes();
    config.permissions = settings.data['user_permissions'];
    app
      .use(ElementPlus)
      .use(IRenderer, config)
      .use(routers)
      .mount('.i-website-app__container');
  })
  .catch((e) => {
    console.log(e);
    ElNotification({
      title: '错误：初始化接口调用失败',
      message: e.config.url,
      type: 'error',
      duration: 10000,
      offset: 50
    });
  });
