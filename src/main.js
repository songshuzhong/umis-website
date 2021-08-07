import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn';

import menusCreator from './router';

import Application from './App.vue';
import UmisRenderer, { api } from '../../umis-renderer/src/entry';

import 'element-plus/lib/theme-chalk/index.css';
import '../../umis-renderer/src/styles/index.scss';
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
if(url.includes('/v1/order/delivery')) {
  res.data.ageData = res.data.fans.age.map(item => item.value);
  res.data.ageXAxis = res.data.fans.age.map(item => item.label);
  res.data.legendData = res.data.fans.interest.map(item => item.label);
  res.data.interestData = res.data.fans.interest.map(item => {item.name = item.label; return item;});
  res.data.originData = res.data.fans.region.map(item => item.value);
  res.data.originLabel = res.data.fans.region.map(item => item.label);
}   
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
if(url.includes('/ajax/contract/contract_item_list.json')) {
  res.data.rows = res.data.data;
  res.data.count = res.data.total_num;
}    
    `,
  },
};

api()
  .staticApi()
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
