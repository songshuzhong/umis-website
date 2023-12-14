import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import routers from '../router/home';
import Application from '../apps/Home.vue';
import IRenderer from 'i-renderer/dist/js/renderer';

import 'element-plus/dist/index.css';
import 'i-renderer/dist/css/index.css';
import '../style/home.scss';
import '../registerServiceWorker';

const app = createApp(Application);

app
  .use(ElementPlus)
  .use(IRenderer, {
    contextPath: process.env.VUE_APP_CONTEXT_PATH_HOME,
  })
  .use(routers)
  .mount('.i-website-app__container');
