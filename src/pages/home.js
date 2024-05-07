import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import IRenderer from '../../../i-renderer/packages/renderer/index';
import routers from '../router/home';
import Application from '../apps/Home.vue';
import registrySw from '../registerServiceWorker';
import '../utils/debug';

import 'element-plus/dist/index.css';
import '../../../i-renderer/packages/assets/styles/index.scss';
import '../style/home.scss';

const app = createApp(Application);

registrySw(process.env.VUE_APP_SERVICE_WORKER);

app
  .use(ElementPlus)
  .use(IRenderer)
  .use(routers)
  .mount('.i-website-app__container');
