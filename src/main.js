import {createApp} from 'vue';
import * as ElementPlus from 'element-plus';

import ResizeObserver from 'resize-observer-polyfill';

import menusCreator from './router/index';
import Application from './App.vue';
import {Editor, IRenderer, api} from '../../i-renderer/packages';
import {assets} from './data/assets';

import 'element-plus/dist/index.css';
import '../../i-renderer/packages/renderer/styles/index.scss';
import './style/index.scss';
import './registerServiceWorker';

const app = createApp(Application);
const UMIS_CONFIG = {
  renderers: [Editor],
  assets,
  domains: {
    default: process.env.VUE_APP_API_BASE
  },
  adaptor: {
    req: `
const cmsToken = localStorage.getItem('cmsToken');
req.headers.common.Authorization = cmsToken;
    `,
  }
};

api()
  .staticApi()
  .get(
    `${process.env.VUE_APP_API_BASE}/api/menu/0767bea4-c7e7-4aa7-a1b5-2fd5e1ec4a7f`
  )
  .then(res => {
    const routers = menusCreator(res.data.menu);
    app
      .use(ElementPlus)
      .use(IRenderer, UMIS_CONFIG)
      .use(routers)
      .mount('.i-website-app__container');
  });

if (!window.ResizeObserver) {
  window.ResizeObserver = ResizeObserver;
}
