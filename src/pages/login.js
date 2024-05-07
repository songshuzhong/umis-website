import {createApp} from 'vue';
import ElementPlus, {ElNotification} from 'element-plus';
import IRenderer, {api} from '../../../i-renderer/packages/index';
import Application from '../apps/Login.vue';
import Sendemail from '../component/Sendemail';
import Verify from '../component/Verify';
import registrySw from '../registerServiceWorker';
import '../utils/debug';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '../../../i-renderer/packages/assets/styles/index.scss';
import '../style/login.scss';

const app = createApp(Application);

const options = {
  domains: [process.env.VUE_APP_API_BASE],
  renderers: [Sendemail, Verify],
  actions: {
<<<<<<< HEAD
    login: function (proxy, config, context, onActionFeedback) {
=======
    login: function (proxy, props, context, onActionFeedback) {
>>>>>>> feature/nestjs
      const form = proxy.$parent.$parent.$parent;
      form.validate((valid) => {
        if (valid) {
          api()
            .staticApi()
            .post(`${process.env.VUE_APP_API_BASE}/api/auth/login`, form.$parent.state.data)
            .then((res) => {
              localStorage.setItem('token', `Bearer ${res.data}`);
<<<<<<< HEAD
              const url = process.env.NODE_ENV === 'dev'? 'localhost/website.html': 'localhost/website';
              proxy.$dispatchAction(proxy, {url, actionType: 'url'}, {}, () => {});
=======
              proxy.$dispatchAction(proxy, {url: 'localhost/website', actionType: 'url'}, {}, () => {});
>>>>>>> feature/nestjs
            })
            .catch((e) => {
              form.$parent.$refs.field[4].$refs.component.handleDraw();
              ElNotification({
                title: `错误${e?.data?.code || e?.response?.data?.code || e.code}`,
                message: e?.data?.message || e?.response?.data?.message || e.message,
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

registrySw(process.env.VUE_APP_SERVICE_WORKER);

app
  .use(ElementPlus)
  .use(IRenderer, options)
  .mount('.i-website-app__container');
