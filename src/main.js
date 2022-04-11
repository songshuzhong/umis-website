import {createApp} from 'vue';
import * as ElementPlus from 'element-plus';
import * as Icons from '@element-plus/icons-vue';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';
import brands from '@fortawesome/fontawesome-free-brands';
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

fontawesome.library.add(solid);
fontawesome.library.add(regular);
fontawesome.library.add(brands);

app.component(FontAwesomeIcon.name, FontAwesomeIcon);
for (const name in Icons) {
  app.component(name, Icons[name]);
}
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
