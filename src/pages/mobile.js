import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import Application from '../apps/Mobile.vue';
<<<<<<< HEAD
import IRenderer from '../../../i-renderer/packages/index';
=======
import IRenderer from 'i-renderer/dist/js/renderer';
>>>>>>> origin/master

import 'element-plus/dist/index.css';
import 'i-renderer/dist/css/index.css';
import '../style/mobile.scss';
import '../registerServiceWorker';

const app = createApp(Application);

app
  .use(ElementPlus)
  .use(IRenderer)
  .mount('.i-website-app__container');
