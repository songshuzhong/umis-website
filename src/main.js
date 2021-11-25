import { createApp } from "vue";
import ElementPlus from "element-plus";
import locale from "element-plus/lib/locale/lang/zh-cn";

import menusCreator from "./router/index";

import Application from "./App.vue";
import UmisRenderer, { api } from "./components/entry";
import UmisEditor from "./components/editor";

import "element-plus/dist/index.css";
import "../../umis-renderer/packages/renderer/styles/index.scss";
import "./style/superfans.scss";
import "./style/index.scss";

const app = createApp(Application);
const UMIS_CONFIG = {
  domains: {
    default: process.env.VUE_APP_API_BASE
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
    `
  }
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
      .use(UmisEditor)
      .use(UmisRenderer, UMIS_CONFIG)
      .use(routers)
      .mount("#app");
  });
