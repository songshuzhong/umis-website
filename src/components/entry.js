import { ElMessage, ElNotification } from 'element-plus';
import * as Icons from '@element-plus/icons-vue';
import api from '../../../i-renderer/packages/utils/api';
import Eventhub from '../../../i-renderer/packages/utils/eventhub';
import {overwrite} from '../../../i-renderer/packages/utils/config';
import {isObject, isArray, isString, renderTpl, compiledKey, compiledUrl, compiledParams, expressionEval} from '../../../i-renderer/packages/utils/tpl';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';
import brands from '@fortawesome/fontawesome-free-brands';
fontawesome.library.add(solid);
fontawesome.library.add(regular);
fontawesome.library.add(brands);

const requireComponent = require.context(
  '@i-renderer/packages/renderer/component',
  true,
  /[\w-]+\.vue$/
);

export default {
  install(app, options = {}) {
    const misComponents = [];
    const extendRenderer = options.renderers || [];
    let formItems = '';
    for (const name in Icons) {
      app.component(name, Icons[name]);
    }
    requireComponent.keys().forEach(filePath => {
      const componentConfig = requireComponent(filePath); //requireComponent[filePath];
      let renderName = `i-${componentConfig.default.name.toLowerCase()}`;
      if (filePath.includes('form')) {
        formItems += renderName;
      }
      misComponents.push(renderName);

      app.component(
        renderName,
        componentConfig.default || componentConfig
      );
    });
    extendRenderer.forEach(renderer => {
      app.component(renderer.name, renderer);
      misComponents.push(renderer.name);
      formItems += renderer.name;
    });
    app.component(FontAwesomeIcon.name, FontAwesomeIcon);
    app.config.globalProperties.$formItems = formItems;
    app.config.globalProperties.$api = api(options);
    app.config.globalProperties.$eventHub = new Eventhub();
    app.config.globalProperties.$iRenderConfig = overwrite(options);
    app.config.globalProperties.$isObject = isObject;
    app.config.globalProperties.$isArray = isArray;
    app.config.globalProperties.$isString = isString;
    app.config.globalProperties.$renderTpl = renderTpl;
    app.config.globalProperties.$compiledUrl = compiledUrl;
    app.config.globalProperties.$compiledKey = compiledKey;
    app.config.globalProperties.$compiledParams = compiledParams;
    app.config.globalProperties.$expressionEval = expressionEval;
    app.config.globalProperties.$notice = ElNotification;
    app.config.globalProperties.$message = ElMessage;
  }
};

export { api };
