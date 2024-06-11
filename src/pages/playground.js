import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import IRenderer, {Schema} from '../../../i-renderer/packages/index';
import Playground from '../apps/Playground.vue';
import registrySw from '../registerServiceWorker';

import 'element-plus/dist/index.css';
import '../../../i-renderer/packages/assets/styles/index.scss';
import '../style/playground.scss';

const app = createApp(Playground);

registrySw(process.env.VUE_APP_SERVICE_WORKER);

app.component(Schema);
app
  .use(ElementPlus)
  .use(IRenderer)
  .mount('.i-website-app__container');
