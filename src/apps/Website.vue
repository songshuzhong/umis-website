<template>
  <schema
    :init-schema="frameSchema"
    :canSchemaUpdate="false"
    classname="i-renderer-website-schema__container"
  />
</template>

<script>
import {defineComponent, onBeforeMount, onMounted, getCurrentInstance} from 'vue';
import {Schema} from '../../../i-renderer/packages/index';
import frameSchema from '../data/websiteFrame.json';

export default defineComponent({
  name: 'Application',
  components: {
    Schema
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const appendAssets = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdn.jsdelivr.net/npm/vue3-sfc-loader@0.8.4/dist/vue3-sfc-loader.min.js';
        script.onload = script.onreadystatechange = function() {
          if (
            !script.readyState ||
            script.readyState === 'loaded' ||
            script.readyState === 'complete'
          ) {
            script.onload = script.onreadystatechange = null;
            resolve();
          } else {
            reject({
              message: '脚本『vue3-sfc-loader』加载失败'
            });
          }
        };
        script.onerror = function() {
          reject({
            message: '脚本『vue3-sfc-loader』加载失败'
          });
        };
        const timer = setTimeout(() => {
          document.head.appendChild(script);
          clearTimeout(timer);
        }, 230);
      });
    };
    onBeforeMount(() => {
      const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
      if (isMobile) {
        proxy.$dispatchAction(
          proxy,
          {
            renderer: 'action',
            actionType: 'trigger',
            triggered: 'IWebsiteNav'
          },
          {
            renderer: 'action',
            actionType: 'trigger',
            triggered: 'IWebsiteNav'
          },
          {},
          () => {},
        );
      }
      isMobile && proxy.$message.success('切换到PC端体验更加哦！');
    });
    onMounted(() => {
      const timer = setTimeout(() => {
        import('../../../i-renderer/packages/canvas/index')
          .then(res => {
            const {Editor} = res;
            proxy.$.appContext.components[Editor.name] = Editor;
          }).catch(e => {
            console.error(e);
          }).finally(() => {
            clearTimeout(timer);
          });
        appendAssets();
        clearTimeout(timer);
      }, 2000);
    });

    return {
      frameSchema
    };
  }
});
</script>
