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
import frameSchema from './data/frame';

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
    });

    return {
      frameSchema
    };
  }
});
</script>
