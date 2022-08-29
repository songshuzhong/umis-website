import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import ResizeObserver from 'resize-observer-polyfill';

import createRoutes from './router/index';
import Application from './App.vue';
import {Editor, IRenderer, api, dynamicRouter} from '../../i-renderer/packages';
import {assets} from './data/assets';
import frameSchema from './data/frame';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '../../i-renderer/packages/assets/styles/index.scss';
import './style/index.scss';
import './registerServiceWorker';

const app = createApp(Application);
const config = {
  assets,
  renderers: [Editor],
  domains: {
    default: process.env.VUE_APP_API_BASE
  }
};

Promise.all([
  api().staticApi().get(`${process.env.VUE_APP_API_BASE}/api/menu/0767bea4-c7e7-4aa7-a1b5-2fd5e1ec4a7f`),
  api().staticApi().get('https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/user')
])
  .then(res => {
    const [menus, settings] = res;
    const dyRouter = dynamicRouter.init(menus.data.menu).routes;
    const routers = createRoutes(dyRouter);

    frameSchema.body[0].body.body = menus.data.menu;
    config.permissions = settings.data['user_permissions'];
    app
      .use(ElementPlus)
      .use(IRenderer, config)
      .use(routers)
      .mount('.i-website-app__container');
  });

if (!window.ResizeObserver) {
  window.ResizeObserver = ResizeObserver;
}
