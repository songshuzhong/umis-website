import {createApp} from 'vue';
import ElementPlus, {ElNotification} from 'element-plus';
import IRenderer, {api} from 'i-renderer/dist/js/renderer';
import Application from '../apps/Login.vue';
import Sendemail from '../component/Sendemail';
import Verify from '../component/Verify';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'i-renderer/dist/css/index.css';
import '../style/login.scss';
import '../registerServiceWorker';

const app = createApp(Application);

const options = {
  renderers: [Sendemail, Verify],
  actions: {
    login: function (proxy, props, config, context, onActionFeedback) {
      const form = proxy.$parent.$parent.$parent;
      form.validate((valid) => {
        if (valid) {
          api()
            .staticApi()
            .post(`${process.env.VUE_APP_API_BASE}/api/auth/login`, form.$parent.state.data)
            .then((res) => {
              localStorage.setItem('token', `Bearer ${res.data}`);
              proxy.$dispatchAction(proxy, props, {url: 'localhost/website', actionType: 'url'}, {}, () => {});
            })
            .catch((e) => {
              ElNotification({
                title: e.data.message,
                message: e.config.url,
                type: 'error',
                duration: 10000,
                offset: 50
              });
            })
            .finally(() => {
              onActionFeedback&&onActionFeedback('CANCEL_LOADING');
            });
        } else {
          onActionFeedback&&onActionFeedback('CANCEL_LOADING');
        }
      });
    },
  }
};
app
  .use(ElementPlus)
  .use(IRenderer, options)
  .mount('.i-website-app__container');
