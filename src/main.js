import {createApp} from 'vue';
import * as ElementPlus from 'element-plus';

import menusCreator from './router/index';
import Application from './App.vue';
import {Editor, IRenderer, api} from '../../i-renderer/packages';
import {assets} from './data/assets';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '../../i-renderer/packages/renderer/styles/index.scss';
import './style/index.scss';
import './registerServiceWorker';

const app = createApp(Application);
const UMIS_CONFIG = {
  assets,
  renderers: [Editor],
  domains: {
    default: process.env.VUE_APP_API_BASE
  }
};

api()
  .staticApi()
  .get('https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/user')
  .then(res => {
    const routers = menusCreator([]);
    UMIS_CONFIG.permissions = res.data['user_permissions'];
    app
      .use(ElementPlus)
      .use(IRenderer, UMIS_CONFIG)
      .use(routers)
      .mount('.i-website-app__container');
  });
