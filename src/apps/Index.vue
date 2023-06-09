<template>
  <schema
    :init-schema="frameSchema"
    :canSchemaUpdate="false"
    classname="i-renderer-website-schema__container"
  />
</template>

<script>
import {defineComponent, onBeforeMount, onMounted, getCurrentInstance} from 'vue';
import {Schema} from 'i-renderer/dist/js/renderer';
import frameSchema from '../data/indexFrame';

export default defineComponent({
  name: 'Application',
  components: {
    Schema
  },
  setup() {
    const { proxy } = getCurrentInstance();

    onBeforeMount(() => {
      const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
      if (isMobile) {
        frameSchema.initData.collapse = true;
      }
      isMobile && proxy.$message.success('切换到PC端体验更加哦！');
    });
    onMounted(() => {
      /* eslint-disable */
      bszCaller.fetch('//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback', function(a) {
        bszTag.texts(a);
        bszTag.shows();
      });
      const timer = setTimeout(() => {
        import(/* webpackChunkName:"editor",webpackPrefetch:false,webpackMode:"lazy" */ 'i-renderer/dist/js/editor')
          .then(res => {
            const {Editor} = res;
            proxy.$.appContext.components[Editor.name] = Editor;
          }).catch(e => {
            console.error(e);
          }).finally(() => {
            clearTimeout(timer);
          });
      }, 2000);
    });

    return {
      frameSchema
    };
  }
});
</script>
