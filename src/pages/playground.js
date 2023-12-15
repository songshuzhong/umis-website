import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import IRenderer, {Schema} from 'i-renderer/dist/js/renderer';
import Playground from '../apps/Playground.vue';
import registrySw from '../registerServiceWorker';

import 'element-plus/dist/index.css';
import 'i-renderer/dist/css/index.css';
import '../style/playground.scss';

const app = createApp(Playground);

registrySw(process.env.VUE_APP_SERVICE_WORKER);

app.component(Schema);
app
  .use(ElementPlus)
  .use(IRenderer)
  .mount('.i-website-app__container');
