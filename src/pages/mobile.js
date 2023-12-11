import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import IRenderer from 'i-renderer/dist/js/renderer';
import Application from '../apps/Mobile.vue';

import 'element-plus/dist/index.css';
import 'i-renderer/dist/css/index.css';
import '../style/mobile.scss';
import '../registerServiceWorker';

const app = createApp(Application);

app
  .use(ElementPlus)
  .use(IRenderer)
  .mount('.i-website-app__container');
