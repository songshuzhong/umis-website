import {createApp} from 'vue';
import ElementPlus, {ElNotification} from 'element-plus';
import IRenderer, {api} from 'i-renderer/dist/js/renderer';
import createRoutes from '../router/website';
import ToMobile from '../component/ToMobile.vue';
import Ai from '../component/Ai.vue';
import Application from '../apps/Website.vue';
import registrySw from '../registerServiceWorker';
import Verify from '../component/Verify';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'i-renderer/dist/css/index.css';
import '../style/index.scss';

const app = createApp(Application);
const config = {
  trackUtil: function(name, props) {
    window.umami.track(() => ({
      name,
      data: props
    }));
  },
  domains: [process.env.VUE_APP_API_BASE],
  renderers: [ToMobile, Verify, Ai],
  actions: {
    logout: function(proxy, config, context, onActionFeedback) {
      localStorage.removeItem('token');
      onActionFeedback&&onActionFeedback('CANCEL_LOADING');
      proxy.$dispatchAction(proxy, {url: process.env.NODE_ENV === 'dev'? 'localhost/login.html': 'localhost/login', actionType: 'url'}, {}, () => {});
    },
  },
  request: function(req) {
    if (localStorage.getItem('token')) {
      if (!req.headers) {
        req.headers = {};
      }
      req.headers['Authorization'] = localStorage.getItem('token');
    }
    return req;
  },
  response: function(res) {
    if (res.data && [400, 401].includes(res.data.code)) {
      window.location.href = process.env.NODE_ENV === 'dev'? 'login.html': 'login';
    }
    return res;
  }
};
let user = '/api/user';

if (process.env.VUE_APP_API_NODE_ENV === 'gp') {
  config.adaptor = {
    req: "if (url.includes('/api/mock')) {\n  let l = url.split('/api/mock')[1].split('/').filter(i => i).join('-') + '.json';\n  req.url = 'https://songshuzhong.github.io/i-website/dist/api/mock/' + l;\n} else if (url.includes('/api')) {\n  req.url += '.json';\n}",
    res: "if (url.includes('/api/mock')) {\n  let exp = res.data.schema;\n  const regex = /function\\(\\{\\w+\\}\\) \\{(.*)\\}/s;  \n  const match = exp.match && exp.match(regex);    \n  let functionBody = exp;  \n  if (match && match.length > 1) {  \n    functionBody = match[1].trim();   \n    try {\n      const fun = new Function('_req', '_res', functionBody);\n      res.data = fun({params, query: params}, res);\n    } catch(error) {\n      res.data = error;\n    }\n  }\n  res.data = functionBody;\n}"
  };
  user = 'https://songshuzhong.github.io/i-website/dist/api/user.json';
}
registrySw(process.env.VUE_APP_SERVICE_WORKER);

api()
  .useApi({headers: {Authorization: localStorage.getItem('token')}})
  .get(user)
  .then(res => {
    const routers = createRoutes();
    config.permissions = res.data['permissions'];
    config.roles = res.data['roles'];
    app
      .use(ElementPlus)
      .use(IRenderer, config)
      .use(routers)
      .mount('.i-website-app__container');
  })
  .catch((e) => {
    if (e.data && (e.data.code === 401 || e.data.code === 400)) {
      window.location.href = process.env.NODE_ENV === 'dev'? 'login.html': 'login';
    }
    console.log(e);
    ElNotification({
      title: `错误${e?.data?.code || e?.response?.data?.code || e.code}`,
      message: e?.data?.message || e?.response?.data?.message || e.message,
      type: 'error',
      duration: 10000,
      offset: 50
    });
  });
