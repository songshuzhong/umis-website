import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import IRenderer, {Schema} from 'i-renderer/dist/js/renderer';
import Playground from '../apps/Playground.vue';

import 'element-plus/dist/index.css';
import 'i-renderer/dist/css/index.css';
import '../style/playground.scss';
import '../registerServiceWorker';

const app = createApp(Playground);
app.component(Schema);
app
  .use(ElementPlus)
  .use(IRenderer)
  .mount('.i-website-app__container');
