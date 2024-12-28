import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import IRenderer from 'i-renderer/dist/js/renderer';
import routers from '../router/home';
import Application from '../apps/Home.vue';
import registrySw from '../registerServiceWorker';

import 'element-plus/dist/index.css';
import 'i-renderer/dist/css/index.css';
import '../style/home.scss';

const app = createApp(Application);

registrySw(process.env.VUE_APP_SERVICE_WORKER);

app
  .use(ElementPlus)
  .use(IRenderer)
  .use(routers)
  .mount('.i-website-app__container');
