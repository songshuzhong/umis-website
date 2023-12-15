import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import IRenderer from 'i-renderer/dist/js/renderer';
import Application from '../apps/Mobile.vue';
import registrySw from '../registerServiceWorker';

import 'element-plus/dist/index.css';
import 'i-renderer/dist/css/index.css';
import '../style/mobile.scss';

const app = createApp(Application);

registrySw(process.env.VUE_APP_SERVICE_WORKER);

app
  .use(ElementPlus)
  .use(IRenderer)
  .mount('.i-website-app__container');
