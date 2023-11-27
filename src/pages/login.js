import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import Application from '../apps/Login.vue';
import IRenderer from '../../../i-renderer/packages/index';

import 'element-plus/dist/index.css';
import 'i-renderer/dist/css/index.css';
import '../registerServiceWorker';

const app = createApp(Application);

app
  .use(ElementPlus)
  .use(IRenderer)
  .mount('.i-website-app__container');
