import {createApp} from 'vue';
import ElementPlus, {ElNotification} from 'element-plus';
import IRenderer, {api} from '../../../i-renderer/packages/index';
import createRoutes from '../router/index';
import Application from '../apps/Index.vue';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '../../../i-renderer/packages/assets/styles/index.scss';
import '../style/index.scss';
import '../registerServiceWorker';

const app = createApp(Application);
const config = {
  domains: [process.env.VUE_APP_API_BASE]
};

Promise.all([
  api().staticApi().get('/api/user')
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
