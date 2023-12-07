import {createApp} from 'vue';
import ElementPlus, {ElNotification} from 'element-plus';
import Application from '../apps/Login.vue';
import IRenderer, {api} from '../../../i-renderer/packages/index';
import Sendemail from '../component/Sendemail';
import Verify from '../component/Verify';

import 'element-plus/dist/index.css';
import 'i-renderer/dist/css/index.css';
import '../style/index.scss';
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
            .post('/api/auth/login', form.$parent.state.data)
            .then((res) => {
              localStorage.setItem('token', res.data);
              proxy.$dispatchAction(proxy, props, {url: 'localhost/', actionType: 'url'}, {}, () => {});
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
