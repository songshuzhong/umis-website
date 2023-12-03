import {createApp} from 'vue';
import ElementPlus, {ElNotification} from 'element-plus';
import Application from '../apps/Login.vue';
import IRenderer, {api} from '../../../i-renderer/packages/index';

import 'element-plus/dist/index.css';
import 'i-renderer/dist/css/index.css';
import '../registerServiceWorker';

const app = createApp(Application);

const options = {
  actions: {
    register: function (proxy, props, config, context, onActionFeedback) {
      const form = proxy.$parent.$parent.$parent;
      form.validate((valid) => {
        if (valid) {
          api()
            .staticApi()
            .post('/api/user', form.$parent.state.data)
            .then(() => {
              ElNotification({
                title: '错误：初始化接口调用失败',
                message: '注册成功，请登录！',
                type: 'error',
                duration: 4000,
                offset: 50
              });
              const timer = setTimeout(() => {
                clearTimeout(timer);
                window.location.reload();
              }, 4000);
            })
            .catch((e) => {
              ElNotification({
                title: '错误：初始化接口调用失败',
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
                title: '错误：初始化接口调用失败',
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
