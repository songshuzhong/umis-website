import {createApp} from 'vue';
import ElementPlus from 'element-plus';
<<<<<<< HEAD
import IRenderer from  '../../../i-renderer/packages/index';
import Application from '../apps/Editing.vue';
import registrySw from '../registerServiceWorker';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '../../../i-renderer/packages/assets/styles/index.scss';
=======
import IRenderer from 'i-renderer/dist/js/renderer';
import Application from '../apps/Editing.vue';
import registrySw from '../registerServiceWorker';
import '../utils/debug';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'i-renderer/dist/css/index.css';
>>>>>>> feature/nestjs

const app = createApp(Application);

registrySw(process.env.VUE_APP_SERVICE_WORKER);

app
  .use(ElementPlus)
  .use(IRenderer)
  .mount('.i-website-app__container');
