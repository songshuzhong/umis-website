import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import ResizeObserver from 'resize-observer-polyfill';

import menusCreator from './router/index';
import Application from './App.vue';
import UmisRenderer, { api } from './components/entry';
import {Editor} from '../../umis-renderer/packages/canvas';

import 'element-plus/dist/index.css';
import '../../umis-renderer/packages/renderer/styles/index.scss';
import './style/index.scss';
import './registerServiceWorker';

const app = createApp(Application);
const UMIS_CONFIG = {
  renderers: [Editor],
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
      .use(UmisRenderer, UMIS_CONFIG)
      .use(routers)
      .mount('.i-renderer-website-app__container');
  });

if (!window.ResizeObserver) {
  window.ResizeObserver = ResizeObserver;
}
