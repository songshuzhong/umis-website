import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import Playground from '../apps/Playground.vue';
import IRenderer, {Schema} from '../../../i-renderer/packages/index';

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
