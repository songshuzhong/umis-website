import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';
import brands from '@fortawesome/fontawesome-free-brands';
import IRenderer, {api, dynamicRouter} from 'i-renderer/dist/js/renderer';
import {Editor} from 'i-renderer/dist/js/editor';

import createRoutes from './router/index';
import Application from './App.vue';
import frameSchema from './data/frame';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'i-renderer/dist/css/index.css';
import './style/index.scss';
import './registerServiceWorker';

const app = createApp(Application);
const config = {
  renderers: [Editor],
  domains: {
    default: process.env.VUE_APP_API_BASE
  }
};

app.component(FontAwesomeIcon.name, FontAwesomeIcon);

fontawesome.library.add(solid);
fontawesome.library.add(regular);
fontawesome.library.add(brands);
Promise.all([
  api().staticApi().get(`${process.env.VUE_APP_API_BASE}/api/menu/0767bea4-c7e7-4aa7-a1b5-2fd5e1ec4a7f`),
  api().staticApi().get('https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/user')
])
  .then(res => {
    const [menus, settings] = res;
    const dyRouter = dynamicRouter.init(menus.data.menu).routes;
    const routers = createRoutes(dyRouter);

    frameSchema.body[0].body[0].body = menus.data.menu;
    config.permissions = settings.data['user_permissions'];

    app
      .use(ElementPlus)
      .use(IRenderer, config)
      .use(routers)
      .mount('.i-website-app__container');
  });
