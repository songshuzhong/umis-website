import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn';

import menusCreator from './router/menus';

import Application from './App.vue';
import UmisRenderer, { api } from 'umis-renderer';

import 'element-theme-chalk/lib/index.css';
import 'umis-renderer/dist/css/index.css';
import './style/superfans.scss';
import './style/index.scss';

const app = createApp(Application);
const UMIS_CONFIG = {
  domains: {
    default: process.env.VUE_APP_API_BASE,
  },
  adaptor: {
    req: `
if(url.includes('/terra/routes/list.json')) {
  req.params.page = params.pageIndex;
  req.params.page_size = params.pageSize;
}    
`,
    res: `
if(url.includes('/api/users')&&method==='get') {
  res.data.rows.forEach(function(item) {
    item.timestamp=item.updatedAt;
  })
}
if(url.includes('/fansSupportOrder/v1/order/list')) {
  res.data.rows = res.data.items;
  res.data.count = res.data.total;
}    
if(url.includes('/terra/routes/list.json')) {
  res.data.rows = res.data.items;
  res.data.count = res.data.total;
}    
    `,
  },
};

api()
  .slientApi()
  .get(
    `${process.env.VUE_APP_API_BASE}/api/menu/0767bea4-c7e7-4aa7-a1b5-2fd5e1ec4a7f`
  )
  .then(res => {
    const routers = menusCreator(res.data.menu);

    app
      .use(ElementPlus, { locale })
      .use(UmisRenderer, UMIS_CONFIG)
      .use(routers)
      .mount('#app');
  });
