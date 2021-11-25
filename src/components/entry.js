import { ElMessage, ElNotification } from "element-plus";
import api from "@umis-renderer/packages/utils/api";
import { overwrite } from "@umis-renderer/packages/utils/config";
import {
  renderTpl,
  compiledKey,
  compiledUrl,
  compiledParams,
  expressionEval
} from "@umis-renderer/packages/utils/tpl";
import Eventhub from "@umis-renderer/packages/utils/eventhub";
import MisSchema from "@umis-renderer/packages/renderer/component/schema.vue";

const requireComponent = require.context(
  "@umis-renderer/packages/renderer/component",
  true,
  /[\w-]+\.vue$/
);

export default {
  install(app, options = {}) {
    const misComponents = [];
    const formItems = [];

    requireComponent.keys().forEach(filePath => {
      const componentConfig = requireComponent(filePath);
      let componentName = filePath.replace(/(.*\/)*([^.]+).*/gi, "$2");
      if (filePath.includes("form")) {
        formItems.push(`mis-${componentName}`);
      }
      misComponents.push(`mis-${componentName}`);
      componentName = componentName
        .split("-")
        .map(kebab => kebab.charAt(0).toUpperCase() + kebab.slice(1))
        .join("");

      app.component(
        `Mis${componentName}`,
        componentConfig.default || componentConfig
      );
    });
    app.config.globalProperties.$formItems = formItems;
    app.config.globalProperties.$api = api(options);
    app.config.globalProperties.$eventHub = new Eventhub();
    app.config.globalProperties.$umisConfig = overwrite(options);
    app.config.globalProperties.$renderTpl = renderTpl;
    app.config.globalProperties.$compiledUrl = compiledUrl;
    app.config.globalProperties.$compiledKey = compiledKey;
    app.config.globalProperties.$compiledParams = compiledParams;
    app.config.globalProperties.$expressionEval = expressionEval;
    app.config.globalProperties.$notice = ElNotification;
    app.config.globalProperties.$message = ElMessage;
  }
};

export { api, MisSchema };
