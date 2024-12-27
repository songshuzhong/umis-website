import {createApp} from 'vue';
import ElementPlus, {ElNotification} from 'element-plus';
import IRenderer, {api} from '../../../i-renderer/packages/index';
import Application from '../apps/Login.vue';
import Sendemail from '../component/Sendemail';
import Verify from '../component/Verify';
import registrySw from '../registerServiceWorker';

import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '../../../i-renderer/packages/assets/styles/index.scss';
import '../style/login.scss';

const app = createApp(Application);
const onLogin = (proxy, config, context, onActionFeedback, formdata, options) => {
  api().staticApi()
    .post(`${process.env.VUE_APP_API_BASE}/api/auth/login`, formdata)
    .then((res) => {
      localStorage.setItem('token', `Bearer ${res.data}`);
      const url = process.env.NODE_ENV === 'dev'? 'localhost/website.html': 'localhost/website';
      proxy.$dispatchAction(proxy, {url, actionType: 'url'}, {}, () => {});
    })
    .catch((e) => {
      options.refs.verify.handleDraw();
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
};
const options = {
  domains: [process.env.VUE_APP_API_BASE],
  renderers: [Sendemail, Verify],
  actions: {
    visitor: function(proxy, config, context, onActionFeedback) {
      onLogin(proxy, config, context, onActionFeedback, process.env.NODE_ENV === 'dev'? {
        namespace: '联通',
        username: 'admin',
        password: 'admin',
        code: '1234',
        verify: '1234'
      }: {
        namespace: 'guest',
        username: 'guest',
        password: '_123456qwerty',
        code: '1234',
        verify: '1234'
      });
    },
    login: function (proxy, config, context, onActionFeedback, options) {
      config.actionType = 'extends';
      config.triggered = 'valid';
      this.extends(proxy, config, context, onActionFeedback, {}).then((isValid) => {
        if (isValid) {
          const data = this.extends(proxy, {actionType: 'extends', triggered: 'getData'}, context, onActionFeedback, {});
          onLogin(proxy, config, context, onActionFeedback, data, options);
        }
      }).catch(() => {
        options.refs.verify.handleDraw();
      }).finally(() => {
        onActionFeedback&&onActionFeedback('CANCEL_LOADING');
      });
    },
  }
};

registrySw(process.env.VUE_APP_SERVICE_WORKER);

app
  .use(ElementPlus)
  .use(IRenderer, options)
  .mount('.i-website-app__container');
