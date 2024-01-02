import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import IRenderer from 'i-renderer/dist/js/renderer';
import Application from '../apps/Mobile.vue';
import registrySw from '../registerServiceWorker';

import 'element-plus/dist/index.css';
import 'i-renderer/dist/css/index.css';
import '../style/mobile.scss';

const app = createApp(Application);
const config = {
  request: function(req) {
    if (localStorage.getItem('token')) {
      if (!req.headers) {
        req.headers = {};
      }
      req.headers['Authorization'] = localStorage.getItem('token');
    }
    return req;
  }
};
registrySw(process.env.VUE_APP_SERVICE_WORKER);

app
  .use(ElementPlus)
  .use(IRenderer, config)
  .mount('.i-website-app__container');
