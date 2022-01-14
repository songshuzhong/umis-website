import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import ResizeObserver from 'resize-observer-polyfill';

import menusCreator from './router/index';
import Application from './App.vue';
import UmisRenderer, { api } from './components/entry';
import {MisEditor} from '../../umis-renderer/packages/editor';

import 'element-plus/dist/index.css';
import '../../umis-renderer/packages/renderer/styles/index.scss';
import './style/superfans.scss';
import './style/index.scss';
import './registerServiceWorker';

const app = createApp(Application);
const UMIS_CONFIG = {
  domains: {
    default: process.env.VUE_APP_API_BASE
  }
};
app.component(MisEditor.name, MisEditor);

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
      .mount('.umis-website-app__container');
  });

if (!window.ResizeObserver) {
  window.ResizeObserver = ResizeObserver;
}
